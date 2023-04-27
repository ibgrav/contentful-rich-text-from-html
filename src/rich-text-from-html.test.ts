import { test, expect } from "vitest";
import { richTextFromHtml } from "./rich-text-from-html";
import { BLOCKS } from "@contentful/rich-text-types";

test("rich-text-from-html", () => {
  const result = richTextFromHtml("");

  expect(result.nodeType).toEqual(BLOCKS.DOCUMENT);
});
