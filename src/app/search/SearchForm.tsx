"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Slider } from "@/components/ui/slider";
import { DoubleSlider } from "@/components/ui/double-slider";

type FormIdToggle = Readonly<{
  id: string;
  [key: string]: any;
}>;

function isChecked<T extends FormIdToggle>(
  value: string,
  checkedValues: T[] | undefined
): boolean {
  if (!checkedValues) return false;
  return checkedValues.some((v) => v.id === value);
}

function getAllCheckedValues<T extends FormIdToggle>(
  checkedValues: T[],
  allValues: Readonly<T[]> | undefined
): T[] {
  if (!allValues) return [];
  return allValues.filter((value) => isChecked(value.id, checkedValues));
}

const vehicles = [
  {
    id: "a",
    year: "2022",
    model: "A3",
  },
  {
    id: "b",
    year: "2023",
    model: "A4",
  },
  {
    id: "d",
    year: "2025",
    model: "A6",
  },
  {
    id: "e",
    year: "2021",
    model: "A7",
  },
] as const;

const dealerships = [
  {
    value: "location1",
    label: "Dealership 1",
  },
  {
    value: "location2",
    label: "Dealership 2",
  },
  {
    value: "location3",
    label: "Dealership 3",
  },
] as const;

type DealershipValues = (typeof dealerships)[number]["value"];

const dealershipEnum: [DealershipValues, ...DealershipValues[]] = [
  dealerships[0].value,
  // And then merge in the remaining values from `properties`
  ...dealerships.slice(1).map((p) => p.value),
];

const FormSchema = z.object({
  carTypes: z
    .object({
      id: z.string(),
      year: z.string(),
      model: z.string(),
    })
    .array() as z.ZodType<(typeof vehicles)[number][]>,
  mileage: z
    .object({
      minimum: z.number(),
      maximum: z.number(),
    })
    .optional(),
  yearRange: z
    .object({
      minimum: z.number(),
      maximum: z.number(),
    })
    .optional(),
  priceRange: z
    .object({
      minimum: z.number(),
      maximum: z.number(),
    })
    .optional(),
  condition: z.enum(["new", "used"]).optional(),
  dealershipLocations: z.enum(dealershipEnum).array().optional(),
  drive: z.enum(["FWD", "RWD", "AWD"]).array().optional(),
  colors: z.string().array().optional(),
});

export default function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dealershipLocations: [],
      carTypes: [],
      mileage: { minimum: 0, maximum: 50000 },
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="grid grid-cols-4 gap-x-4 gap-y-6"
      >
        <FormField
          control={form.control}
          name="carTypes"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-full">
              <FormLabel className="text-sm text-muted-foreground font-semibold">
                Vehicle Models
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "min-w-[200px] w-full justify-between flex"
                      )}
                    >
                      <p className="truncate">
                        {field.value.length > 0
                          ? getAllCheckedValues(field.value, vehicles)
                              .map((v) => v.year + " " + v.model)
                              .join(", ")
                          : "Select vehicle"}
                      </p>
                      <ChevronsUpDown className="size-4 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <Command>
                    <CommandInput placeholder="Search vehicles..." />
                    <CommandEmpty>No vehicle found.</CommandEmpty>
                    <CommandGroup>
                      {vehicles.map((vehicle) => (
                        <CommandItem
                          value={vehicle.id}
                          key={vehicle.id}
                          className={`flex items-center gap-1 w-full cursor-pointer`}
                          onSelect={() => {
                            form.setValue(
                              "carTypes",
                              isChecked(vehicle.id, field.value)
                                ? field.value.filter((v) => v.id !== vehicle.id)
                                : [...field.value, vehicle]
                            );
                          }}
                        >
                          <Check
                            className={cn(
                              "size-4",
                              isChecked(vehicle.id, field.value)
                                ? "stroke-primary"
                                : "text-muted-foreground"
                            )}
                          />
                          <p className="">
                            {vehicle.year + " " + vehicle.model}
                          </p>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dealershipLocations"
          render={() => (
            <FormItem className="col-span-2">
              <FormLabel className="text-sm text-muted-foreground font-semibold">
                Locations
              </FormLabel>
              {dealerships.map((dealership) => (
                <FormField
                  key={dealership.value}
                  control={form.control}
                  name="dealershipLocations"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={dealership.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(dealership.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([
                                    ...field.value!,
                                    dealership.value,
                                  ])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== dealership.value
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {dealership.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mileage"
          render={({ field }) => (
            <FormItem className="col-span-full flex flex-col gap-2">
              <FormLabel className="text-sm text-muted-foreground font-semibold">
                Mileage
              </FormLabel>
              <div className="flex justify-between text-xs text-muted-foreground">
                <p>Minimum: 0</p>
                <p>Maximum: 50,000</p>
              </div>
              <FormControl>
                <DoubleSlider
                  onValueChange={(e) => {
                    form.setValue("mileage", {
                      minimum: e[0],
                      maximum: e[1],
                    });
                  }}
                  step={1000}
                  defaultValue={[0, 50000]}
                  value={[
                    field.value?.minimum || 1,
                    field.value?.maximum || 50000,
                  ]}
                  max={50000}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-1">
          Submit
        </Button>
      </form>
    </Form>
  );
}
