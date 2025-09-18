import type { Meta, StoryObj } from "@storybook/react-vite";

import { ChooseLanguage } from "./ChooseLanguage";

const meta = {
  component: ChooseLanguage,
  tags: ["autodocs"],
} satisfies Meta<typeof ChooseLanguage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
