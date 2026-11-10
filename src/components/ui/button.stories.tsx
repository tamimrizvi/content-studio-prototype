import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiAddLine, RiArrowRightLine, RiCalendarLine, RiDeleteBinLine, RiMoreFill } from "@remixicon/react";
import { Button, type ButtonVariant } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Create post", variant: "primary", size: "md" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "neutral", "outline", "ghost", "inverse", "danger"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    leadingIcon: { control: false },
    trailingIcon: { control: false },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const variants: ButtonVariant[] = ["primary", "secondary", "neutral", "outline", "ghost", "inverse", "danger"];

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-[auto_repeat(3,max-content)] items-center gap-x-6 gap-y-4">
      <span />
      {["Default", "Disabled", "Pending"].map((h) => (
        <span key={h} className="type-label-sm font-semibold text-content-tertiary">
          {h}
        </span>
      ))}
      {variants.map((v) => (
        <div key={v} className="contents">
          <span className="type-label-md font-medium text-content-secondary capitalize">{v}</span>
          <Button variant={v}>Schedule</Button>
          <Button variant={v} isDisabled>
            Schedule
          </Button>
          <Button variant={v} isPending>
            Schedule
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button leadingIcon={RiAddLine}>New post</Button>
      <Button variant="secondary" leadingIcon={RiCalendarLine}>
        Schedule
      </Button>
      <Button variant="outline" trailingIcon={RiArrowRightLine}>
        Continue
      </Button>
      <Button variant="danger" leadingIcon={RiDeleteBinLine}>
        Delete
      </Button>
      <Button variant="outline" iconOnly leadingIcon={RiMoreFill} aria-label="More actions" />
      <Button variant="ghost" iconOnly leadingIcon={RiMoreFill} aria-label="More actions" />
    </div>
  ),
};
