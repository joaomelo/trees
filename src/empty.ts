import { type TreeNode, type TreeNodeValue } from "./node";

export type EmptyNode<Id, Value extends TreeNodeValue<Id>> = {
  value: undefined;
} & Omit<TreeNode<Id, Value>, "value">;

export function emptyNode<Id, Value extends TreeNodeValue<Id>>(): EmptyNode<Id, Value> {
  return {
    children: [],
    value: undefined
  };
}