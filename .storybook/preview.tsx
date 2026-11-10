import type { Preview } from "@storybook/nextjs-vite";
import { useEffect } from "react";
import "../src/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    controls: { expanded: true, matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: ["Foundations", ["Colors", "Typography", "Radius", "Spacing"], "Components"],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Colour theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? "dark" : "light";
      useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }, [theme]);
      return <Story />;
    },
  ],
};

export default preview;
