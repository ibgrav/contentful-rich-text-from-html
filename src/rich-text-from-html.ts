import { ElementType, parseDocument } from "htmlparser2";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { TopLevelTagRecord, createTopLevelBlockFromTag } from "./create-top-level-block";
import { InlineTagRecord } from "./create-inline";
import { MarkTagRecord } from "./create-text";

export interface RichTextFromHtmlOpts {
  /**
   * Include additional html tags or overwrite defaults for top-level Contentful nodeTypes
   */
  topLevelTags?: TopLevelTagRecord;
  /**
   * Include additional html tags or overwrite defaults for inline Contentful nodeTypes
   */
  inlineTags?: InlineTagRecord;
  /**
   * Include additional html tags or overwrite defaults for text marks
   */
  markTags?: MarkTagRecord;
}

export function richTextFromHtml(html: string, opts: RichTextFromHtmlOpts = {}): Document {
  const document: Document = { nodeType: BLOCKS.DOCUMENT, data: {}, content: [] };

  const dom = parseDocument(html, {
    lowerCaseTags: true,
    lowerCaseAttributeNames: true,
    recognizeSelfClosing: true
  });

  for (const node of dom.childNodes) {
    if (node.type === ElementType.Tag) {
      const block = createTopLevelBlockFromTag(node, opts);

      if (block) {
        document.content.push(block);
      }
    }
  }

  return document;
}
