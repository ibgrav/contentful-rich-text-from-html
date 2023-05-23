import { test, expect } from "vitest";
import { richTextFromHtml } from "../src/rich-text-from-html";

test("top level text", () => {
  const result = richTextFromHtml("my text");

  expect(result).toEqual({
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: "my text",
            data: {},
            marks: []
          }
        ]
      }
    ]
  });
});
