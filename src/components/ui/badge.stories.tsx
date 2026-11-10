import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiTimeLine } from "@remixicon/react";
import type { Tone } from "@/lib/cx";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { children: "Scheduled", tone: "brand", variant: "soft", size: "md" },
  argTypes: {
    tone: { control: "select", options: ["neutral", "brand", "success", "warning", "critical"] },
    variant: { control: "inline-radio", options: ["soft", "solid", "outline"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    icon: { control: false },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const tones: [Tone, string][] = [
  ["neutral", "Draft"],
  ["brand", "Scheduled"],
  ["success", "Published"],
  ["warning", "In review"],
  ["critical", "Failed"],
];

export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["soft", "solid", "outline"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-2">
          <span className="w-16 type-label-sm font-semibold text-content-tertiary capitalize">{variant}</span>
          {tones.map(([tone, label]) => (
            <Badge key={tone} tone={tone} variant={variant}>
              {label}
            </Badge>
          ))}
        </div>
      ))}
      <div className="flex items-center gap-2">
        <span className="w-16 type-label-sm font-semibold text-content-tertiary">Extras</span>
        <Badge tone="success" dot>
          Live
        </Badge>
        <Badge tone="brand" icon={RiTimeLine}>
          9:30 AM
        </Badge>
        <Badge tone="critical" variant="solid" size="sm">
          3
        </Badge>
      </div>
    </div>
  ),
};
