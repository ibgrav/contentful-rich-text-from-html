import { ElementType, parseDocument } from "htmlparser2";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { TopLevelRecord, createTopLevelBlockFromTag } from "./create-top-level-block";
import { InlineRecord } from "./create-inline";
import { MarkRecord } from "./create-marks";

export interface RichTextFromHtmlOpts {
  /**
   * Include additional html tags or overwrite defaults for top-level Contentful nodeTypes, ex. "div: BLOCKS.PARAGRAPH"
   */
  topLevelTags?: TopLevelRecord;
  /**
   * Include additional html tags or overwrite defaults for inline Contentful nodeTypes, ex. "a: INLINES.HYPERLINK"
   */
  inlineTags?: InlineRecord;
  /**
   * Include additional html tags or overwrite defaults for text marks, ex. "strong: MARKS.BOLD"
   */
  markTags?: MarkRecord;
  /**
   * Include additional html classes or overwrite defaults for text marks, ex. "font-bold: MARKS.BOLD"
   */
  markClassNames?: MarkRecord;
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
