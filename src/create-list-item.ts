import { BLOCKS, ListItemBlockEnum, ListItemBlock } from "@contentful/rich-text-types";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";
import { Element } from "domhandler";

export type ListItemRecord = Record<string, ListItemBlockEnum>;

// missing BLOCKS.EMBEDDED_ENTRY | BLOCKS.EMBEDDED_ASSET
const listItemTags: ListItemRecord = {
  p: BLOCKS.PARAGRAPH,
  h1: BLOCKS.HEADING_1,
  h2: BLOCKS.HEADING_2,
  h3: BLOCKS.HEADING_3,
  h4: BLOCKS.HEADING_4,
  h5: BLOCKS.HEADING_5,
  h6: BLOCKS.HEADING_6,
  ul: BLOCKS.UL_LIST,
  ol: BLOCKS.OL_LIST,
  hr: BLOCKS.HR,
  blockquote: BLOCKS.QUOTE
};

export function createListItemBlock(node: Element, opts: RichTextFromHtmlOpts): ListItemBlock | undefined {
  const tags = {
    ...listItemTags
    // ...opts.topLevelTags
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
