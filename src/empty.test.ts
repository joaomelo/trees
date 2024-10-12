import { describe, expect, it } from "vitest";

import { emptyNode } from "./empty";

describe("emptyNode", () => {
  it("should return an EmptyNode with children as an empty array and value as undefined", () => {
    const result = emptyNode<number>();
    
    expect(result).toEqual({
      children: [],
      value: undefined,
    });
  });
});
