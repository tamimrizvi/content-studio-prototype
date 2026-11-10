import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RiDeleteBinLine, RiFileCopyLine, RiMoreFill, RiPencilLine, RiShareForwardLine } from "@remixicon/react";
import { Button } from "./button";
import { Input } from "./input";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "./menu";
import { Modal, ModalTrigger } from "./modal";
import { Tooltip } from "./tooltip";

const meta: Meta = { title: "Components/Overlays", parameters: { layout: "centered" } };
export default meta;

export const ModalStory: StoryObj = {
  name: "Modal",
  render: () => (
    <div className="flex gap-3">
      <ModalTrigger>
        <Button variant="outline">Open modal</Button>
        <Modal
          title="Rename workspace"
          description="This name appears in the sidebar and in invitations."
          footer={(close) => (
            <>
              <Button variant="ghost" onPress={close}>
                Cancel
              </Button>
              <Button onPress={close}>Save</Button>
            </>
          )}
        >
          <Input label="Workspace name" defaultValue="Acme marketing" autoFocus />
        </Modal>
      </ModalTrigger>
      <ModalTrigger>
        <Button variant="danger">Delete post</Button>
        <Modal
          role="alertdialog"
          size="sm"
          title="Delete this post?"
          description="It will be removed from every channel it was scheduled for. This cannot be undone."
          footer={(close) => (
            <>
              <Button variant="ghost" onPress={close}>
                Keep post
              </Button>
              <Button variant="danger" onPress={close}>
                Delete
              </Button>
            </>
          )}
        />
      </ModalTrigger>
    </div>
  ),
};

export const MenuStory: StoryObj = {
  name: "Menu",
  render: () => (
    <MenuTrigger>
      <Button variant="outline" iconOnly leadingIcon={RiMoreFill} aria-label="Post actions" />
      <Menu>
        <MenuItem icon={RiPencilLine} shortcut="E">
          Edit
        </MenuItem>
        <MenuItem icon={RiFileCopyLine} shortcut="D">
          Duplicate
        </MenuItem>
        <MenuItem icon={RiShareForwardLine} isDisabled>
          Share
        </MenuItem>
        <MenuSeparator />
        <MenuItem icon={RiDeleteBinLine} tone="critical">
          Delete
        </MenuItem>
      </Menu>
    </MenuTrigger>
  ),
};

export const TooltipStory: StoryObj = {
  name: "Tooltip",
  render: () => (
    <div className="flex gap-3">
      <Tooltip content="Duplicate post">
        <Button variant="outline" iconOnly leadingIcon={RiFileCopyLine} aria-label="Duplicate" />
      </Tooltip>
      <Tooltip content="Opens below" placement="bottom">
        <Button variant="neutral">Hover or focus</Button>
      </Tooltip>
    </div>
  ),
};
