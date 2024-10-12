import { describe, expect, it } from "vitest";

import { nodedify } from "./node";

describe("nodedify", () => {
  it("should return a TreeNode with value %s and empty children", () => {
    const item = { name: "test" };
    const result = nodedify(item);
    expect(result).toEqual({
      children: [],
      value: item,
    });
  });
});
