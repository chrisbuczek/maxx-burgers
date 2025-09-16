import type { Meta, StoryObj } from "@storybook/react-vite";

import { VideoCarousel } from "./VideoCarousel";
import { data, desktopData } from "./data";

const meta = {
  component: VideoCarousel,
  tags: ["autodocs"],
} satisfies Meta<typeof VideoCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data,
    desktopData,
  },
};
