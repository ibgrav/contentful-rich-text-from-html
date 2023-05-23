import { test, expect } from "vitest";
import { richTextFromHtml } from "../src/rich-text-from-html";

test("multiple top-level node", () => {
  const result = richTextFromHtml(`<p>first</p><p>second</p>`);

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
            value: "first",
            data: {},
            marks: []
          }
        ]
      },
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: "second",
            data: {},
            marks: []
          }
        ]
      }
    ]
  });
});
