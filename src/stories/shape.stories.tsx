import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { tokens } from "@/styles/tokens.generated";

const meta: Meta = {
  title: "Foundations/Radius and spacing",
  parameters: { controls: { disable: true } },
};
export default meta;

export const Radius: StoryObj = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
      {tokens.radius.map((r) => (
        <div key={r.name} className="flex flex-col items-center gap-2">
          <div className="size-20 border border-border-brand bg-surface-brand" style={{ borderRadius: `var(--roundness-${r.name})` }} />
          <p className="type-label-md font-medium text-content-primary">rounded-{r.name}</p>
          <p className="type-body-xs text-content-tertiary">{r.px}px</p>
        </div>
      ))}
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="mb-4 max-w-2xl type-body-md text-content-secondary">
        Every spacing token lands on Tailwind&apos;s 4px scale, so components use the standard numeric utilities. The last column is the class
        that produces each token&apos;s value.
      </p>
      {tokens.spacing.map((s) => (
        <div key={s.name} className="flex items-center gap-4">
          <p className="w-28 type-label-md font-medium text-content-primary">spacing-{s.name}</p>
          <p className="w-14 type-body-sm text-content-tertiary">{s.px}px</p>
          <p className="w-16 type-body-sm text-content-tertiary">gap-{s.px / 4}</p>
          <div className="h-3 rounded-1 bg-fill-brand" style={{ width: `var(--space-${s.name})` }} />
        </div>
      ))}
    </div>
  ),
};
