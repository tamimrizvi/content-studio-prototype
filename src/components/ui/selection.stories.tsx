import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiCalendarLine, RiLayoutGridLine, RiListCheck } from "@remixicon/react";
import { Checkbox } from "./checkbox";
import { Radio, RadioGroup } from "./radio";
import { SegmentedControl } from "./segmented-control";
import { Switch } from "./switch";

const meta: Meta = { title: "Components/Selection controls" };
export default meta;

export const Checkboxes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox defaultSelected description="Send a summary every Monday morning.">
        With description
      </Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled defaultSelected>
        Disabled checked
      </Checkbox>
    </div>
  ),
};

export const Radios: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <RadioGroup label="Publish" defaultValue="schedule">
        <Radio value="now">Post now</Radio>
        <Radio value="schedule" description="Pick a date and time.">
          Schedule
        </Radio>
        <Radio value="queue">Add to queue</Radio>
        <Radio value="draft" isDisabled>
          Save as draft
        </Radio>
      </RadioGroup>
      <RadioGroup label="Horizontal" orientation="horizontal" defaultValue="week">
        <Radio value="day">Day</Radio>
        <Radio value="week">Week</Radio>
        <Radio value="month">Month</Radio>
      </RadioGroup>
    </div>
  ),
};

export const Switches: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch>Off</Switch>
      <Switch defaultSelected>On</Switch>
      <Switch size="sm" defaultSelected>
        Small
      </Switch>
      <Switch isDisabled>Disabled</Switch>
      <Switch isDisabled defaultSelected>
        Disabled on
      </Switch>
    </div>
  ),
};

export const Segmented: StoryObj = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <SegmentedControl
        aria-label="Range"
        defaultValue="month"
        options={[
          { id: "week", label: "Weekly" },
          { id: "month", label: "Monthly" },
          { id: "year", label: "Yearly" },
        ]}
      />
      <SegmentedControl
        aria-label="View"
        size="sm"
        defaultValue="calendar"
        options={[
          { id: "calendar", label: "Calendar", icon: RiCalendarLine },
          { id: "list", label: "List", icon: RiListCheck },
          { id: "grid", label: "Grid", icon: RiLayoutGridLine },
        ]}
      />
    </div>
  ),
};
