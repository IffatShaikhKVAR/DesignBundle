// pages/SliderDemo.tsx
import React, { useState } from "react";
import { ComponentDemo, type DemoCategory } from "../../helper/ComponentDemo";
import {
  BaseSlider,
  RangeSlider,
  ColorSlider,
  CustomStyledSlider,
  IconSlider,
} from "../../../src/components";

export const SliderDemo: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(40);

  const sliderCategories: DemoCategory[] = [
    {
      title: "Basic Sliders",
      description: "Standard and color-based sliders for data selection.",
      items: [
        {
          id: "base-slider",
          name: "BaseSlider",
          component: (
            <BaseSlider
              label="Base Slider"
              value={sliderValue}
              onChange={(_, val) => setSliderValue(val as number)}
            />
          ),
          description: "A basic single-value slider.",
        },
        {
          id: "color-slider",
          name: "ColorSlider",
          component: <ColorSlider />,
          description: "A colorful gradient slider.",
        },
      ],
    },
    {
      title: "Advanced Sliders",
      description: "Range, custom-styled, and icon-based sliders.",
      items: [
        {
          id: "range-slider",
          name: "RangeSlider",
          component: <RangeSlider />,
          description: "Select a range between two values.",
        },
        {
          id: "custom-slider",
          name: "CustomStyledSlider",
          component: <CustomStyledSlider />,
          description: "A fancy custom-styled slider.",
        },
        {
          id: "icon-slider",
          name: "IconSlider",
          component: <IconSlider />,
          description: "Slider with volume icons and live control.",
        },
      ],
    },
  ];

  return (
    <ComponentDemo 
      categories={sliderCategories}
      packageName="design-bundle@latest"
    />
  );
};

export default SliderDemo;
