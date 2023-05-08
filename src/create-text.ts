import { Text } from "@contentful/rich-text-types";
import { Text as TextNode } from "domhandler";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";

export function createText(node: TextNode, opts: RichTextFromHtmlOpts): Text {
  return {
    nodeType: "text",
    value: node.nodeValue,
    marks: [],
    data: {}
  };
}
