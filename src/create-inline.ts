import { INLINES, Inline } from "@contentful/rich-text-types";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";
import { Element } from "domhandler";

export type InlineRecord = Record<string, INLINES>;

const inlineTags: InlineRecord = {
  a: INLINES.HYPERLINK
};

export function createInlineFromTag(node: Element, opts: RichTextFromHtmlOpts): Inline | undefined {
  const tags = {
    ...inlineTags,
    ...opts.inlineTags
  };

  const nodeType = tags[node.tagName];

  if (nodeType) {
    return {
      nodeType,
      data: {},
      content: []
    };
  }
}
