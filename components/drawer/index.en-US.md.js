webpackJsonp([198],{

/***/ 1799:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since that user can interact with the Drawer without leaving the current page, tasks can be achieved more efficient within the same context."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Use a Form to create or edit a set of information."
        ]
      ],
      [
        "li",
        [
          "p",
          "Processing subtasks. When subtasks are too heavy for Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy."
        ]
      ],
      [
        "li",
        [
          "p",
          "When a same Form is needed in multiple places."
        ]
      ]
    ]
  ],
  "meta": {
    "type": "Feedback",
    "category": "Components",
    "subtitle": null,
    "title": "Drawer",
    "filename": "components/drawer/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Props"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "closable"
          ],
          [
            "td",
            "Whether a close (x) button is visible on top right of the Drawer dialog or not."
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "destroyOnClose"
          ],
          [
            "td",
            "Whether to unmount child components on closing drawer or not."
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getContainer"
          ],
          [
            "td",
            "Return the mounted node for Drawer."
          ],
          [
            "td",
            "HTMLElement ",
            "|",
            " ",
            [
              "code",
              "() => HTMLElement"
            ],
            " ",
            "|",
            " selectors \b"
          ],
          [
            "td",
            "'body'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mask"
          ],
          [
            "td",
            "Whether to show mask or not."
          ],
          [
            "td",
            "Boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "maskClosable"
          ],
          [
            "td",
            "Clicking on the mask (area outside the Drawer) to close the Drawer or not."
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "maskStyle"
          ],
          [
            "td",
            "Style for Drawer's mask element."
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{}"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "Style of floating layer, typically used for adjusting its position."
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "The title for Drawer."
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "visible"
          ],
          [
            "td",
            "Whether the Drawer dialog is visible or not."
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "width"
          ],
          [
            "td",
            "Width of the Drawer dialog."
          ],
          [
            "td",
            "string",
            "|",
            "number"
          ],
          [
            "td",
            "256"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "placement is ",
            [
              "code",
              "top"
            ],
            " or ",
            [
              "code",
              "bottom"
            ],
            ", height of the Drawer dialog."
          ],
          [
            "td",
            "string",
            "|",
            "number"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "The class name of the container of the Drawer dialog."
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "zIndex"
          ],
          [
            "td",
            "The ",
            [
              "code",
              "z-index"
            ],
            " of the Drawer."
          ],
          [
            "td",
            "Number"
          ],
          [
            "td",
            "1000"
          ]
        ],
        [
          "tr",
          [
            "td",
            "placement"
          ],
          [
            "td",
            "The placement of the Drawer."
          ],
          [
            "td",
            "'top'  ",
            "|",
            " 'right' ",
            "|",
            " 'bottom' ",
            "|",
            " 'left'"
          ],
          [
            "td",
            "'right'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onClose"
          ],
          [
            "td",
            "Specify a callback that will be called when a user clicks mask, close button or Cancel button."
          ],
          [
            "td",
            "function(e)"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "style",
      "\n#_hj_feedback_container {\n  display: none;\n}\n"
    ]
  ]
};

/***/ })

});