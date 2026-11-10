import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, AvatarGroup } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  args: { name: "Amara Okafor", size: "md", shape: "circle" },
  argTypes: {
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "inline-radio", options: ["circle", "square"] },
    status: { control: "select", options: [undefined, "online", "busy", "away", "offline"] },
  },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-end gap-3">
        {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
          <Avatar key={s} name="Amara Okafor" size={s} />
        ))}
        <Avatar name="Content Studio" shape="square" size="lg" />
      </div>
      <div className="flex items-center gap-3">
        <Avatar name="Lena Fischer" status="online" />
        <Avatar name="Diego Ruiz" status="away" />
        <Avatar name="Mei Tanaka" status="busy" />
        <Avatar name="Sam Patel" status="offline" />
      </div>
      <AvatarGroup max={4}>
        {["Amara Okafor", "Lena Fischer", "Diego Ruiz", "Mei Tanaka", "Sam Patel", "Noor Haddad"].map((n) => (
          <Avatar key={n} name={n} />
        ))}
      </AvatarGroup>
    </div>
  ),
};
