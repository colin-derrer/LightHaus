"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Label } from "./label";

const CustomDoubleSlider = forwardRef(function CustomDoubleSlider(
  props: React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> & {
    val: number;
  },
  forwardedRef
) {
  return (
    <SliderPrimitive.Thumb
      // @ts-ignore
      ref={forwardedRef}
      {...props}
      asChild
      className="relative cursor-pointer block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      <div className="relative">
        <Label
          className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm"
          style={{ transform: "translateX(-50%)" }}
        >
          {props.val}
        </Label>
      </div>
    </SliderPrimitive.Thumb>
  );
});

export const DoubleSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(function Asdf({ className, ...props }, ref) {
  const [value, setValue] = React.useState(props.value || [0, 100]);

  React.useEffect(() => {
    setValue(props.value || [0, 100]);
  }, [props.value]);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center pb-4",
        className
      )}
      onValueChange={(value) => {
        setValue(value);
      }}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <CustomDoubleSlider val={value[0]} />
      <CustomDoubleSlider val={value[1]} />
    </SliderPrimitive.Root>
  );
});
