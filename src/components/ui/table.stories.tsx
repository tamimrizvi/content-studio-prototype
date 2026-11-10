import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { Tone } from "@/lib/cx";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "./table";

const meta: Meta = { title: "Components/Table" };
export default meta;

const rows: { post: string; author: string; channel: string; status: string; tone: Tone; when: string }[] = [
  { post: "Spring launch teaser", author: "Amara Okafor", channel: "Instagram", status: "Published", tone: "success", when: "Mar 3, 9:30 AM" },
  { post: "Customer story: Northwind", author: "Lena Fischer", channel: "LinkedIn", status: "Scheduled", tone: "brand", when: "Mar 5, 2:00 PM" },
  { post: "Feature walkthrough", author: "Diego Ruiz", channel: "YouTube", status: "In review", tone: "warning", when: "Mar 6, 11:00 AM" },
  { post: "Weekly tips thread", author: "Mei Tanaka", channel: "Facebook", status: "Failed", tone: "critical", when: "Mar 2, 4:15 PM" },
  { post: "Hiring announcement", author: "Sam Patel", channel: "LinkedIn", status: "Draft", tone: "neutral", when: "Not scheduled" },
];

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Post</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Channel</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell className="text-right">Publish time</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.post}>
            <TableCell className="font-medium">{r.post}</TableCell>
            <TableCell>
              <span className="flex items-center gap-2">
                <Avatar name={r.author} size="xs" />
                {r.author}
              </span>
            </TableCell>
            <TableCell className="text-content-secondary">{r.channel}</TableCell>
            <TableCell>
              <Badge tone={r.tone}>{r.status}</Badge>
            </TableCell>
            <TableCell className="text-right text-content-secondary">{r.when}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
