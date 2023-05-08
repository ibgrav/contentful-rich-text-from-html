import { test, expect } from "vitest";
import { richTextFromHtml } from "./rich-text-from-html";
import { BLOCKS } from "@contentful/rich-text-types";

test("rich-text-from-html", () => {
  const p = richTextFromHtml("<p>paragraph</p>");

  expect(p.nodeType).toEqual(BLOCKS.DOCUMENT);
  expect(p.content[0]?.nodeType).toEqual("paragraph");
});
