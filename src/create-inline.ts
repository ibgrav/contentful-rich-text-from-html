import { INLINES, Inline } from "@contentful/rich-text-types";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";
import { Element } from "domhandler";

export type InlineTagRecord = Record<string, INLINES>;

const inlineTags: InlineTagRecord = {
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
