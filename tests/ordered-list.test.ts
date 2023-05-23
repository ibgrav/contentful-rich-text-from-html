import { test, expect } from "vitest";
import { richTextFromHtml } from "../src/rich-text-from-html";

test("ordered list", () => {
  const result = richTextFromHtml(`
    <p>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ol>
    </p>
  `);

  console.log(JSON.stringify(result, null, 2));

  expect(result).toEqual({
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "ordered-list",
            data: {},
            content: [
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "one",
                    data: {},
                    marks: []
                  }
                ]
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "two",
                    data: {},
                    marks: []
                  }
                ]
              },
              {
                nodeType: "list-item",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "three",
                    data: {},
                    marks: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});
