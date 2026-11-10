import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiMoreFill } from "@remixicon/react";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Divider } from "./divider";

const meta: Meta = { title: "Components/Card" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="grid max-w-3xl grid-cols-1 gap-4 tablet:grid-cols-2">
      <Card>
        <CardHeader>
          <div>
            <CardTitle>Spring launch</CardTitle>
            <CardDescription>12 posts across 4 channels</CardDescription>
          </div>
          <Button variant="ghost" size="sm" iconOnly leadingIcon={RiMoreFill} aria-label="More" />
        </CardHeader>
        <CardBody className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar name="Amara Okafor" size="sm" />
            <span className="type-label-md font-medium text-content-primary">Amara Okafor</span>
          </div>
          <Badge tone="success" dot>
            On track
          </Badge>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" size="sm">
            Dismiss
          </Button>
          <Button size="sm">Open plan</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardBody className="flex flex-col gap-4">
          <div>
            <p className="type-label-sm font-medium text-content-secondary">Engagement rate</p>
            <p className="type-heading-lg font-semibold text-content-primary">4.82%</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between type-body-sm text-content-secondary">
            <span>vs last 30 days</span>
            <Badge tone="success" size="sm">
              +0.6%
            </Badge>
          </div>
          <Divider label="or" />
          <div className="flex h-5 items-center gap-3 type-body-sm text-content-secondary">
            <span>Reach</span>
            <Divider orientation="vertical" />
            <span>Clicks</span>
            <Divider orientation="vertical" />
            <span>Shares</span>
          </div>
        </CardBody>
      </Card>
    </div>
  ),
};
