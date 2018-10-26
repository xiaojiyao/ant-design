webpackJsonp([141],{

/***/ 1884:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "选项卡切换组件。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "提供平级的区域将大块内容进行收纳和展现，保持界面整洁。"
    ],
    [
      "p",
      "Ant Design 依次提供了三级选项卡，分别用于不同的场景。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "卡片式的页签，提供可关闭的样式，常用于容器顶部。"
        ]
      ],
      [
        "li",
        [
          "p",
          "标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "/components/radio/#components-radio-demo-radiobutton"
            },
            "RadioButton"
          ],
          " 可作为更次级的页签来使用。"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "标签页",
    "type": "Data Display",
    "title": "Tabs",
    "cols": 1,
    "filename": "components/tabs/index.zh-CN.md"
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
      "h3",
      "Tabs"
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
            "activeKey"
          ],
          [
            "td",
            "当前激活 tab 面板的 key"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "animated"
          ],
          [
            "td",
            "是否使用动画切换 Tabs，在 ",
            [
              "code",
              "tabPosition=top|bottom"
            ],
            " 时有效"
          ],
          [
            "td",
            "boolean ",
            "|",
            " {inkBar:boolean, tabPane:boolean}"
          ],
          [
            "td",
            "true, 当 type=\"card\" 时为 false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderTabBar"
          ],
          [
            "td",
            "替换TabBar，用于二次封装标签头"
          ],
          [
            "td",
            "(props: DefaultTabBarProps, DefaultTabBar: React.ReactNode) => React.ReactNode"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultActiveKey"
          ],
          [
            "td",
            "初始化选中面板的 key，如果没有设置 activeKey"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "第一个面板"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hideAdd"
          ],
          [
            "td",
            "是否隐藏加号图标，在 ",
            [
              "code",
              "type=\"editable-card\""
            ],
            " 时有效"
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
            "size"
          ],
          [
            "td",
            "大小，提供 ",
            [
              "code",
              "large"
            ],
            " ",
            [
              "code",
              "default"
            ],
            " 和 ",
            [
              "code",
              "small"
            ],
            " 三种大小"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'default'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabBarExtraContent"
          ],
          [
            "td",
            "tab bar 上额外的元素"
          ],
          [
            "td",
            "React.ReactNode"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabBarGutter"
          ],
          [
            "td",
            "tabs 之间的间隙"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabBarStyle"
          ],
          [
            "td",
            "tab bar 的样式对象"
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
            "tabPosition"
          ],
          [
            "td",
            "页签位置，可选值有 ",
            [
              "code",
              "top"
            ],
            " ",
            [
              "code",
              "right"
            ],
            " ",
            [
              "code",
              "bottom"
            ],
            " ",
            [
              "code",
              "left"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'top'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "页签的基本样式，可选 ",
            [
              "code",
              "line"
            ],
            "、",
            [
              "code",
              "card"
            ],
            " ",
            [
              "code",
              "editable-card"
            ],
            " 类型"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'line'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onChange"
          ],
          [
            "td",
            "切换面板的回调"
          ],
          [
            "td",
            "Function(activeKey) {}"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onEdit"
          ],
          [
            "td",
            "新增和删除页签的回调，在 ",
            [
              "code",
              "type=\"editable-card\""
            ],
            " 时有效"
          ],
          [
            "td",
            "(targetKey, action): void"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onNextClick"
          ],
          [
            "td",
            "next 按钮被点击的回调"
          ],
          [
            "td",
            "Function"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onPrevClick"
          ],
          [
            "td",
            "prev 按钮被点击的回调"
          ],
          [
            "td",
            "Function"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onTabClick"
          ],
          [
            "td",
            "tab 被点击的回调"
          ],
          [
            "td",
            "Function"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Tabs.TabPane"
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
            "forceRender"
          ],
          [
            "td",
            "被隐藏时是否渲染 DOM 结构"
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
            "key"
          ],
          [
            "td",
            "对应 activeKey"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tab"
          ],
          [
            "td",
            "选项卡头显示文字"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});