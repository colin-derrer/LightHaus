"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

type LabelFormPair = {
  label: string;
  value: string;
};

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const languagesEnum = z.enum([
  "en",
  "fr",
  "de",
  "es",
  "pt",
  "ru",
  "ja",
  "ko",
  "zh",
] as const);

function getCheckedLanguages(
  languageValues: (typeof languages)[number]["value"][],
  allLanguages: typeof languages
) {
  return allLanguages
    .filter((language) => languageValues.includes(language.value))
    .map((language) => language.label);
}

function isCheckedLanguage(
  languageToTest: (typeof languages)[number]["value"],
  checkedLanguages: (typeof languages)[number]["value"][]
) {
  return checkedLanguages.includes(languageToTest);
}

const FormSchema = z.object({
  languages: languagesEnum.array(),
}) satisfies z.ZodType<{ languages: (typeof languages)[number]["value"][] }>;

export default function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      languages: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-x-4 gap-y-6"
      >
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-2">
              <FormLabel>Language</FormLabel>
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
                          ? getCheckedLanguages(field.value, languages).join(
                              ", "
                            )
                          : "Select language"}
                      </p>
                      <ChevronsUpDown className="size-4 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          value={language.label}
                          key={language.value}
                          className={`flex items-center gap-1 w-full  cursor-pointer`}
                          onSelect={() => {
                            form.setValue(
                              "languages",
                              isCheckedLanguage(language.value, field.value)
                                ? field.value.filter(
                                    (l) => l !== language.value
                                  )
                                : [...field.value, language.value]
                            );
                            // form.setValue(
                            //   "languages",
                            //   field.value.includes(language.value)
                            //     ? field.value.filter(
                            //         (l) => l !== language.value
                            //       )
                            //     : [...field.value, language.value]
                            // );
                          }}
                        >
                          <Check
                            className={cn(
                              "size-4",
                              isCheckedLanguage(language.value, field.value)
                                ? "text-primary"
                                : "opacity-0"
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-2">
          Submit
        </Button>
      </form>
    </Form>
  );
}
