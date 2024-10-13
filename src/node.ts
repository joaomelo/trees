export interface TreeNodeItem<Id> {
  parentId?: Id;
}

export interface TreeNode<Id, Item extends TreeNodeItem<Id>> {
  children: TreeNode<Id, Item>[];
  value: Item;
}

export function nodedify<Id, Item extends TreeNodeItem<Id>>(item: Item): TreeNode<Id, Item> {
  return {
    children: [],
    value: item
  };
}
