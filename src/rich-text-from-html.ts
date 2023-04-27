import { BLOCKS, Document } from "@contentful/rich-text-types";

export function richTextFromHtml(html: string): Document {
  const doc: Document = { nodeType: BLOCKS.DOCUMENT, data: {}, content: [] };

  return doc;
}
