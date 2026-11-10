import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { tokens } from "@/styles/tokens.generated";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { controls: { disable: true } },
};
export default meta;

const groupNotes: Record<string, string> = {
  surface: "Page and container backgrounds. Utility: bg-surface-*",
  border: "Outlines and separators. Utility: border-border-*",
  content: "Text and icons. Utility: text-content-*",
  fill: "Interactive and solid backgrounds, with hover, active and disabled states. Utility: bg-fill-*",
};

function Group({ name }: { name: keyof typeof tokens.semantic }) {
  return (
    <section className="mb-10">
      <h2 className="type-heading-xs font-semibold text-content-primary capitalize">{name}</h2>
      <p className="mt-1 mb-4 type-body-sm text-content-secondary">{groupNotes[name]}</p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
        {tokens.semantic[name].map((t) => (
          <div key={t.token} className="overflow-hidden rounded-5 border border-border-primary bg-surface-background">
            {name === "content" ? (
              <div className="grid h-16 place-items-center bg-surface-primary type-heading-sm font-semibold" style={{ color: `var(--${t.token})` }}>
                Aa
              </div>
            ) : name === "border" ? (
              <div className="grid h-16 place-items-center bg-surface-background">
                <div className="h-9 w-24 rounded-4 border-2" style={{ borderColor: `var(--${t.token})` }} />
              </div>
            ) : (
              <div className="h-16" style={{ background: `var(--${t.token})` }} />
            )}
            <div className="border-t border-border-primary px-3 py-2">
              <p className="type-label-md font-medium text-content-primary">{t.token}</p>
              <p className="type-body-xs text-content-tertiary">{t.light.replace(/[{}]/g, "")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Semantic: StoryObj = {
  render: () => (
    <div>
      <p className="mb-8 max-w-2xl type-body-md text-content-secondary">
        Components use only these semantic tokens. Each one resolves to a different alias in light and dark, so switching the theme in the
        toolbar is enough; no component carries a dark-mode override.
      </p>
      {(Object.keys(tokens.semantic) as (keyof typeof tokens.semantic)[]).map((g) => (
        <Group key={g} name={g} />
      ))}
    </div>
  ),
};
