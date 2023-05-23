import { test, expect } from "vitest";
import { richTextFromHtml } from "../src/rich-text-from-html";

test("top level node", () => {
  const result = richTextFromHtml("");

  expect(result).toEqual({
    nodeType: "document",
    data: {},
    content: []
  });
});
