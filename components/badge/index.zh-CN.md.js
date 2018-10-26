webpackJsonp([219],{

/***/ 1766:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "图标右上角的圆形徽标数字。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "徽标数",
    "type": "Data Display",
    "title": "Badge",
    "filename": "components/badge/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
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
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Badge count={5}>\n  <a href=\"#\" className=\"head-example\" />\n</Badge>"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Badge count={5} />"
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "count"
          ],
          [
            "td",
            "展示的数字，大于 overflowCount 时显示为 ",
            [
              "code",
              "${overflowCount}+"
            ],
            "，为 0 时隐藏"
          ],
          [
            "td",
            "number",
            "|",
            "ReactNode"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "dot"
          ],
          [
            "td",
            "不展示数字，只有一个小红点"
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
            "offset"
          ],
          [
            "td",
            "设置状态点的位置偏移，格式为 ",
            [
              "code",
              "[x, y]"
            ]
          ],
          [
            "td",
            [
              "code",
              "[number, number]"
            ]
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
            "overflowCount"
          ],
          [
            "td",
            "展示封顶的数字值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "99"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showZero"
          ],
          [
            "td",
            "当数值为 0 时，是否展示 Badge"
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
            "status"
          ],
          [
            "td",
            "设置 Badge 为状态点"
          ],
          [
            "td",
            "Enum{ 'success', 'processing, 'default', 'error', 'warning' }"
          ],
          [
            "td",
            "''"
          ]
        ],
        [
          "tr",
          [
            "td",
            "text"
          ],
          [
            "td",
            "在设置了 ",
            [
              "code",
              "status"
            ],
            " 的前提下有效，设置状态点的文本"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "''"
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
            "设置鼠标放在状态点上时显示的文字"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "count"
            ]
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});