import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { Pagination } from "./pagination";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";

const meta: Meta = { title: "Components/Navigation" };
export default meta;

function TabSet({ variant }: { variant: "underline" | "pill" }) {
  return (
    <Tabs variant={variant}>
      <TabList aria-label="Planner views">
        <Tab id="scheduled">Scheduled</Tab>
        <Tab id="published">Published</Tab>
        <Tab id="drafts">Drafts</Tab>
        <Tab id="failed" isDisabled>
          Failed
        </Tab>
      </TabList>
      <TabPanel id="scheduled">Posts queued for the next seven days.</TabPanel>
      <TabPanel id="published">Everything that has gone live.</TabPanel>
      <TabPanel id="drafts">Work in progress, visible only to you.</TabPanel>
      <TabPanel id="failed">Posts that could not be published.</TabPanel>
    </Tabs>
  );
}

export const TabsStory: StoryObj = {
  name: "Tabs",
  render: () => (
    <div className="flex max-w-xl flex-col gap-10">
      <TabSet variant="underline" />
      <TabSet variant="pill" />
    </div>
  ),
};

export const BreadcrumbsStory: StoryObj = {
  name: "Breadcrumbs",
  render: () => <Breadcrumbs items={[{ label: "Workspaces", href: "#" }, { label: "Acme marketing", href: "#" }, { label: "Planner" }]} />,
};

function PaginationDemo() {
  const [page, setPage] = useState(4);
  return <Pagination page={page} totalPages={12} onChange={setPage} />;
}

export const PaginationStory: StoryObj = {
  name: "Pagination",
  render: () => <PaginationDemo />,
};
