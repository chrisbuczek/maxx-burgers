import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChooseCup } from "./ChooseCup";

const meta = {
  component: ChooseCup,
  tags: ["autodocs"],
} satisfies Meta<typeof ChooseCup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
