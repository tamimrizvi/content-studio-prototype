import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { tokens } from "@/styles/tokens.generated";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { controls: { disable: true } },
};
export default meta;

const families = ["display", "heading", "body", "label"] as const;

export const TypeScale: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-10">
      <p className="max-w-2xl type-body-md text-content-secondary">
        DM Sans throughout. Each style is one utility (for example <code>type-body-sm</code>) that sets size, line height and letter spacing
        together. Weight is added separately: <code>font-normal</code>, <code>font-medium</code>, <code>font-semibold</code>,{" "}
        <code>font-bold</code>.
      </p>
      {families.map((family) => (
        <section key={family}>
          <h2 className="mb-3 type-label-sm font-semibold tracking-wide text-content-tertiary uppercase">{family}</h2>
          <div className="divide-y divide-border-primary rounded-5 border border-border-primary">
            {tokens.type
              .filter((t) => t.family === family)
              .sort((a, b) => b.size - a.size)
              .map((t) => (
                <div key={t.name} className="flex items-baseline gap-6 px-5 py-4">
                  <div className="w-44 shrink-0">
                    <p className="type-label-md font-medium text-content-primary">type-{t.name}</p>
                    <p className="type-body-xs text-content-tertiary">
                      {t.size}px / {t.lineHeight}px
                    </p>
                  </div>
                  <p
                    className="min-w-0 truncate font-medium text-content-primary"
                    style={{
                      fontSize: `var(--font-size-${t.name})`,
                      lineHeight: `var(--line-height-${t.name})`,
                      letterSpacing: `var(--letter-spacing-${t.name})`,
                    }}
                  >
                    Plan, publish and analyse
                  </p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
