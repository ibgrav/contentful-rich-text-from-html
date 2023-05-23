import sanitize from "sanitize-html";
import {} from "domhandler";
import { ElementType, parseDocument } from "htmlparser2";
import { BLOCKS, Block, Document, Inline, Text } from "@contentful/rich-text-types";
import { TopLevelRecord, createTopLevelBlock } from "./create-top-level-block";
import { InlineRecord } from "./create-inline";
import { MarkRecord } from "./create-marks";
import { createText } from "./create-text";
import { BlockRecord } from "./create-block";

export interface RichTextFromHtmlOpts {
  /**
   * Include additional html tags or overwrite defaults for top-level Contentful nodeTypes, ex. "div: BLOCKS.PARAGRAPH"
   */
  topLevelTags?: TopLevelRecord;
  /**
   * Include additional html tags or overwrite defaults for block Contentful nodeTypes, ex. "div: BLOCKS.PARAGRAPH"
   */
  blockTags?: BlockRecord;
  /**
   * Include additional html tags or overwrite defaults for inline Contentful nodeTypes, ex. "a: INLINES.HYPERLINK"
   */
  inlineTags?: InlineRecord;
  /**
   * Include additional html tags or overwrite defaults for text marks, ex. "strong: MARKS.BOLD"
   */
  markTags?: MarkRecord;
  /**
   * Include html classes for text marks, ex. "font-bold: MARKS.BOLD"
   */
  markClassNames?: MarkRecord;
}

export function richTextFromHtml(html: string, opts: RichTextFromHtmlOpts = {}): Document {
  const document: Document = { nodeType: BLOCKS.DOCUMENT, data: {}, content: [] };

  const cleanHtml = sanitize(html);

  if (!cleanHtml) return document;

  const dom = parseDocument(cleanHtml, {
    lowerCaseTags: true,
    lowerCaseAttributeNames: true,
    recognizeSelfClosing: true
  });

  for (const node of dom.childNodes) {
    if (node.type === ElementType.Tag) {
      const topLevelBlock = createTopLevelBlock(node, opts);

      if (topLevelBlock) {
        const contents: Array<Block | Inline | Text> = [];

        for (const child of node.childNodes) {
          if (child.type === ElementType.Tag) {
            // either block or inline
          }

          if (child.type === ElementType.Text) {
            const content = createText(child, [], opts);
            if (content) contents.push(content);
          }
        }

        topLevelBlock.content.push(...contents);

        document.content.push(topLevelBlock);
      }
    }

    if (node.type === ElementType.Text) {
      // handle case where there is no top-level tag
      return richTextFromHtml(`<p>${html}</p>`, opts);
    }
  }

  return document;
}
