import React from "react";
import { FontWeights } from "office-ui-fabric-react";
import {
  CommandBar,
  ICommandBarItemProps,
} from "office-ui-fabric-react/lib/CommandBar";
import { IButtonProps } from "office-ui-fabric-react/lib/Button";

const overflowProps: IButtonProps = { ariaLabel: "More commands" };

const _items: ICommandBarItemProps[] = [
//   {
//     key: "HomePage",
//     text: "Home",
//     cacheKey: "myCacheKey2", // changing this key will invalidate this item's cache
//     iconProps: { iconName: "HomeGroup" },
//   },
  {
    key: "Prediction",
    text: "Quick Prediction",
    iconProps: { iconName: "HomeGroup" },
    href: "/",
  },
  {
    key: "Project",
    text: "Project",
    iconProps: { iconName: "MapLayers" },
    href: "/project",
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  {
    key: "move",
    text: "Move to...",
    onClick: () => console.log("Move to"),
    iconProps: { iconName: "MoveToFolder" },
  },
  {
    key: "copy",
    text: "Copy to...",
    onClick: () => console.log("Copy to"),
    iconProps: { iconName: "Copy" },
  },
  {
    key: "rename",
    text: "Rename...",
    onClick: () => console.log("Rename"),
    iconProps: { iconName: "Edit" },
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "share",
    text: "Share",
    ariaLabel: "Share",
    iconOnly: true,
    iconProps: { iconName: "Share" },
    onClick: () => console.log("Share"),
  },
];

export const Topbar: React.FunctionComponent = () => {
  return (
      <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
  );
};
