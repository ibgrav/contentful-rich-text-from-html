export const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "heading-1",
      data: {},
      content: [{ nodeType: "text", value: "Header 1", marks: [], data: {} }]
    },
    {
      nodeType: "heading-2",
      data: {},
      content: [{ nodeType: "text", value: "Header 2", marks: [], data: {} }]
    },
    {
      nodeType: "heading-3",
      data: {},
      content: [{ nodeType: "text", value: "Header 3", marks: [], data: {} }]
    },
    {
      nodeType: "heading-4",
      data: {},
      content: [{ nodeType: "text", value: "Header 4", marks: [], data: {} }]
    },
    {
      nodeType: "heading-5",
      data: {},
      content: [{ nodeType: "text", value: "Header 5", marks: [], data: {} }]
    },
    {
      nodeType: "heading-6",
      data: {},
      content: [{ nodeType: "text", value: "Header 6", marks: [], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Normal Text", marks: [], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Bold Text", marks: [{ type: "bold" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Italic Text", marks: [{ type: "italic" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Underline Text", marks: [{ type: "underline" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Bold Italic and Underline Text",
          marks: [{ type: "bold" }, { type: "underline" }, { type: "italic" }],
          data: {}
        }
      ]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Superscript", marks: [{ type: "superscript" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Subscript", marks: [{ type: "subscript" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "Code", marks: [{ type: "code" }], data: {} }]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        { nodeType: "text", value: "", marks: [], data: {} },
        {
          nodeType: "hyperlink",
          data: { uri: "https://google.com" },
          content: [{ nodeType: "text", value: "URL Hyperlink", marks: [], data: {} }]
        },
        { nodeType: "text", value: "", marks: [], data: {} }
      ]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        { nodeType: "text", value: "", marks: [], data: {} },
        {
          nodeType: "entry-hyperlink",
          data: { target: { sys: { id: "", type: "Link", linkType: "Entry" } } },
          content: [{ nodeType: "text", value: "Entry Hyperlink", marks: [], data: {} }]
        },
        { nodeType: "text", value: "", marks: [], data: {} }
      ]
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        { nodeType: "text", value: "", marks: [], data: {} },
        {
          nodeType: "asset-hyperlink",
          data: { target: { sys: { id: "", type: "Link", linkType: "Asset" } } },
          content: [{ nodeType: "text", value: "Asset Hyperlink", marks: [], data: {} }]
        },
        { nodeType: "text", value: "", marks: [], data: {} }
      ]
    },
    {
      nodeType: "unordered-list",
      data: {},
      content: [
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Unordered List Item 1", marks: [], data: {} }]
            }
          ]
        },
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Unordered List Item 2", marks: [], data: {} }]
            }
          ]
        },
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Unordered List Item 3", marks: [], data: {} }]
            }
          ]
        }
      ]
    },
    {
      nodeType: "ordered-list",
      data: {},
      content: [
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Ordered List Item 1", marks: [], data: {} }]
            }
          ]
        },
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Ordered List Item 2", marks: [], data: {} }]
            }
          ]
        },
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [{ nodeType: "text", value: "Ordered List Item 3", marks: [], data: {} }]
            }
          ]
        }
      ]
    },
    {
      nodeType: "blockquote",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [{ nodeType: "text", value: "This is a block quote", marks: [], data: {} }]
        }
      ]
    },
    { nodeType: "hr", data: {}, content: [] },
    {
      nodeType: "table",
      data: {},
      content: [
        {
          nodeType: "table-row",
          data: {},
          content: [
            {
              nodeType: "table-header-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table Heading 1", marks: [], data: {} }]
                }
              ]
            },
            {
              nodeType: "table-header-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table Heading 2", marks: [], data: {} }]
                }
              ]
            }
          ]
        },
        {
          nodeType: "table-row",
          data: {},
          content: [
            {
              nodeType: "table-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table 1x1", marks: [], data: {} }]
                }
              ]
            },
            {
              nodeType: "table-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table 1x2", marks: [], data: {} }]
                }
              ]
            }
          ]
        },
        {
          nodeType: "table-row",
          data: {},
          content: [
            {
              nodeType: "table-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table 2x1", marks: [], data: {} }]
                }
              ]
            },
            {
              nodeType: "table-cell",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [{ nodeType: "text", value: "Table 2x2", marks: [], data: {} }]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      nodeType: "embedded-entry-block",
      data: { target: { sys: { id: "", type: "Link", linkType: "Entry" } } },
      content: []
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        { nodeType: "text", value: "", marks: [], data: {} },
        {
          nodeType: "embedded-entry-inline",
          data: { target: { sys: { id: "", type: "Link", linkType: "Entry" } } },
          content: []
        },
        { nodeType: "text", value: "", marks: [], data: {} }
      ]
    },
    {
      nodeType: "embedded-asset-block",
      data: { target: { sys: { id: "", type: "Link", linkType: "Asset" } } },
      content: []
    },
    { nodeType: "paragraph", data: {}, content: [{ nodeType: "text", value: "", marks: [], data: {} }] }
  ]
};
