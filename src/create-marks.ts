import { MARKS, Mark } from "@contentful/rich-text-types";
import { Element } from "domhandler";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";

export type MarkRecord = Record<string, MARKS>;

const markTags: MarkRecord = {
  b: MARKS.BOLD,
  strong: MARKS.BOLD,
  i: MARKS.ITALIC,
  em: MARKS.ITALIC,
  u: MARKS.UNDERLINE,
  pre: MARKS.CODE,
  sup: MARKS.SUPERSCRIPT,
  sub: MARKS.SUBSCRIPT
};

const markClassNames: MarkRecord = {};

export function createMarks(node: Element, opts: RichTextFromHtmlOpts): Mark[] | undefined {
  const marks: Mark[] = [];

  const tags = {
    ...markTags,
    ...opts.markTags
  };

  const tagMark = tags[node.tagName];
  if (tagMark) marks.push({ type: tagMark });

  const classNames = {
    ...markClassNames,
    ...opts.markClassNames
  };

  const nodeClasses = node.attribs.class?.split(" ") || [];

  for (const [className, type] of Object.entries(classNames)) {
    if (nodeClasses.includes(className)) {
      marks.push({ type });
    }
  }

  return marks;
}
