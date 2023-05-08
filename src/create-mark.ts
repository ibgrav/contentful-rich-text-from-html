import { MARKS, Mark } from "@contentful/rich-text-types";
import { Element } from "domhandler";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";

export type MarkTagRecord = Record<string, MARKS>;

const markTags: MarkTagRecord = {
  b: MARKS.BOLD,
  i: MARKS.ITALIC,
  u: MARKS.UNDERLINE,
  pre: MARKS.CODE,
  sup: MARKS.SUPERSCRIPT,
  sub: MARKS.SUBSCRIPT
};

export function createMark(node: Element, opts: RichTextFromHtmlOpts): Mark | undefined {
  const tags = {
    ...markTags,
    ...opts.markTags
  };

  const mark = tags[node.tagName];

  if (mark) {
    return { type: mark };
  }
}
