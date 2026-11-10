import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiSearchLine } from "@remixicon/react";
import { Input } from "./input";
import { Textarea } from "./textarea";

const meta = {
  title: "Components/Input",
  component: Input,
  args: { label: "Workspace name", placeholder: "Acme marketing", hint: "Shown to everyone you invite." },
  argTypes: { leadingIcon: { control: false }, size: { control: "inline-radio", options: ["sm", "md"] } },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Input label="Default" placeholder="Placeholder" />
      <Input label="With icon" placeholder="Search posts" leadingIcon={RiSearchLine} />
      <Input label="Filled" defaultValue="Spring launch campaign" hint="Helper text sits here." />
      <Input label="Invalid" defaultValue="not-an-email" isInvalid errorMessage="Enter a valid email address." />
      <Input label="Disabled" defaultValue="Read only value" isDisabled />
      <Input label="Small" size="sm" placeholder="Compact field" />
    </div>
  ),
};

export const TextArea: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Textarea label="Caption" placeholder="Write a caption…" hint="Up to 2,200 characters." />
      <Textarea label="Invalid" defaultValue="Too short" isInvalid errorMessage="Caption must be at least 20 characters." />
      <Textarea label="Disabled" defaultValue="Locked while publishing" isDisabled />
    </div>
  ),
};
