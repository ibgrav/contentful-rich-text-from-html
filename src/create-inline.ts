import { INLINES, Inline } from "@contentful/rich-text-types";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";
import { Element } from "domhandler";

export type InlineRecord = Record<string, INLINES>;

const inlineTags: InlineRecord = {
  a: INLINES.HYPERLINK
  // ENTRY_HYPERLINK = "entry-hyperlink",
  // ASSET_HYPERLINK = "asset-hyperlink",
  // EMBEDDED_ENTRY = "embedded-entry-inline"
};

export function createInline(node: Element, opts: RichTextFromHtmlOpts): Inline | undefined {
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
