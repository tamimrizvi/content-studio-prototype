import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select, SelectItem } from "./select";

const meta: Meta = {
  title: "Components/Select",
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
};
export default meta;

const networks = ["Facebook", "Instagram", "LinkedIn", "Pinterest", "TikTok", "YouTube"];
const items = networks.map((n) => <SelectItem key={n} id={n.toLowerCase()}>{n}</SelectItem>);

export const Default: StoryObj = {
  render: () => (
    <Select label="Channel" placeholder="Choose a channel" hint="Posts publish to this account.">
      {items}
    </Select>
  ),
};

export const States: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Select label="Selected" defaultSelectedKey="linkedin">{items}</Select>
      <Select label="Invalid" placeholder="Choose a channel" isInvalid errorMessage="Pick a channel to continue.">{items}</Select>
      <Select label="Disabled" defaultSelectedKey="instagram" isDisabled>{items}</Select>
      <Select label="Small" size="sm" placeholder="Compact select">{items}</Select>
    </div>
  ),
};
