import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert } from "./alert";
import { Button } from "./button";
import { Progress } from "./progress";
import { Skeleton } from "./skeleton";
import { Spinner } from "./spinner";

const meta: Meta = { title: "Components/Feedback" };
export default meta;

export const Alerts: StoryObj = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <Alert tone="brand" title="Your trial ends in 5 days">
        Upgrade to keep scheduling posts across all your channels.
      </Alert>
      <Alert tone="success" title="Post published" onDismiss={() => {}}>
        It went live on LinkedIn and Instagram.
      </Alert>
      <Alert tone="warning" title="Instagram needs reconnecting">
        The access token expires tomorrow.
      </Alert>
      <Alert
        tone="critical"
        title="Publishing failed"
        action={
          <Button size="sm" variant="outline">
            Retry
          </Button>
        }
      >
        The video is longer than the 60 second limit.
      </Alert>
      <Alert tone="neutral" title="Scheduled maintenance on Sunday" />
    </div>
  ),
};

export const ProgressBars: StoryObj = {
  render: () => (
    <div className="flex max-w-md flex-col gap-6">
      <Progress label="Uploading video" value={64} />
      <Progress label="Storage used" value={82} tone="warning" />
      <Progress label="Monthly posts" value={100} tone="success" />
      <Progress label="Failed uploads" value={18} tone="critical" size="sm" />
      <Progress label="Processing" isIndeterminate />
    </div>
  ),
};

export const Loading: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
        <Spinner tone="neutral" />
      </div>
      <div className="flex max-w-sm items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <Skeleton className="h-32 max-w-sm rounded-5" />
    </div>
  ),
};
