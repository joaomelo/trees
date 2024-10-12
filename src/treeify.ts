import { type EmptyNode, emptyNode } from "./empty";
import { type TreeNode, type TreeNodeValue } from "./node";

export function treeify<Id, Value extends TreeNodeValue<Id>>(items: Map<Id, Value>): TreeNode<Id, Value>[] {
  const lookup = new Map<Id, EmptyNode<Id, Value> | TreeNode<Id, Value>>();
  const tree: TreeNode<Id, Value>[] = [];

  items.forEach((item, id) => {
    // make sure that treeable item is present at the lookup table. it could have been created before by a children node, so we make sure not to loose any saved data.
    if (!lookup.has(id)) lookup.set(id, emptyNode());    
    const node = lookup.get(id);
    if (!node) throw new Error("node need to be set for proper tree construction");

    node.value = item;

    if (item.parentId !== undefined) {
      const { parentId } = item;

      if (!lookup.has(parentId)) lookup.set(parentId, emptyNode());    
      const parentNode = lookup.get(id);
      if (!parentNode) throw new Error("parent node need to be set for proper tree construction");
  
      parentNode.children.push(node);
    }
    else {
      tree.push(node);
    }
  });

  return tree;
}
