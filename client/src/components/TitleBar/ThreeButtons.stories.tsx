import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThreeButtons } from "./ThreeButtons";

const meta = {
  component: ThreeButtons,
  tags: ["autodocs"],
} satisfies Meta<typeof ThreeButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
