import { Mark, Text } from "@contentful/rich-text-types";
import { Text as TextNode } from "domhandler";
import { RichTextFromHtmlOpts } from "./rich-text-from-html";

export function createText(node: TextNode, marks: Mark[], opts: RichTextFromHtmlOpts): Text {
  return {
    nodeType: "text",
    value: node.nodeValue,
    data: {},
    marks
  };
}
