import type { Block, Inline, Text } from "@contentful/rich-text-types";
import type { RichTextFromHtmlOpts } from "./rich-text-from-html";
import type { Element } from "domhandler";
import { ElementType } from "htmlparser2";
import { createText } from "./create-text";
import { createBlock } from "./create-block";
import { createInline } from "./create-inline";

export function createContents(node: Element, opts: RichTextFromHtmlOpts): Array<Block | Inline | Text> {
  const contents: Array<Block | Inline | Text> = [];

  for (const child of node.childNodes) {
    if (child.type === ElementType.Tag) {
      const block = createBlock(node, opts);
      if (block) contents.push(block);
      else {
        const inline = createInline(node, opts);
        if (inline) contents.push(inline);
      }
    }

    if (child.type === ElementType.Text) {
      const text = createText(child, [], opts);
      if (text) contents.push(text);
    }
  }

  return contents;
}
