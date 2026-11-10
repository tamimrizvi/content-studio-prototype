export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 bg-surface-primary p-8 text-center">
      <h1 className="type-heading-md font-semibold text-content-primary">ContentStudio</h1>
      <p className="type-body-md text-content-secondary">
        The design system lives in Storybook. Run <code className="font-medium text-content-brand">npm run storybook</code> to browse it.
      </p>
    </main>
  );
}
