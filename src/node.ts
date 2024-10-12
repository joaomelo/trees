export interface TreeNodeValue<Id> {
  parentId?: Id;
}

export interface TreeNode<Id, Value extends TreeNodeValue<Id>> {
  children: TreeNode<Id, Value>[];
  value: Value;
}

export function nodedify<Id, Value extends TreeNodeValue<Id>>(item: Value): TreeNode<Id, Value> {
  return {
    children: [],
    value: item
  };
}
