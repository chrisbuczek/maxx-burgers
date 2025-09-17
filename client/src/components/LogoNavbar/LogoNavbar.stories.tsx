import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoNavbar } from "./LogoNavbar";

const meta = {
  component: LogoNavbar,
  tags: ["autodocs"],
} satisfies Meta<typeof LogoNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
