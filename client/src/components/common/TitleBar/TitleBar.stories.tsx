import type { Meta, StoryObj } from "@storybook/react-vite";

import TitleBar from "./TitleBar";

const meta = {
  component: TitleBar,
  tags: ["autodocs"],
} satisfies Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
