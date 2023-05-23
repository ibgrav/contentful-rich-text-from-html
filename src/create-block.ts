import type { Element } from "domhandler";
import type { RichTextFromHtmlOpts } from "./rich-text-from-html";
import { BLOCKS, Block } from "@contentful/rich-text-types";
import { createContents } from "./create-contents";

export type BlockRecord = Record<string, BLOCKS>;

const blockTags: BlockRecord = {
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
  blockquote: BLOCKS.QUOTE,
  table: BLOCKS.TABLE,
  tr: BLOCKS.TABLE_ROW,
  td: BLOCKS.TABLE_CELL
  // th: BLOCKS.TABLE_HEADER_CELL // th MARKS THE INNER td is TABLE_HEADER_CELL
  // EMBEDDED_ENTRY = "embedded-entry-block",
  // EMBEDDED_ASSET = "embedded-asset-block",
  // EMBEDDED_RESOURCE = "embedded-resource-block",
};

export function createBlock(node: Element, opts: RichTextFromHtmlOpts): Block | undefined {
  const tags = {
    ...blockTags,
    ...opts.blockTags
  };

  const nodeType = tags[node.tagName];

  if (nodeType) {
    let content: ReturnType<typeof createContents> = [];

    if (node.childNodes.length > 0) {
      content = createContents(node, opts);
    }

    return {
      nodeType,
      data: {},
      content
    };
  }
}
