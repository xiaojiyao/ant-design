webpackJsonp([119],{

/***/ 1914:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h3",
      "你们会提供 Vue 版本的 Ant Design 吗？"
    ],
    [
      "p",
      "不，但是 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/LICENSE"
        },
        "ant-design 基于 MIT 协议开源"
      ],
      "，所以你可以尝试用 ant-design 的",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/tree/master/style"
        },
        "样式"
      ],
      "去实现一套，例如：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/vueComponent/ant-design-vue"
        },
        "ant-design-vue"
      ],
      " ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/FE-Driver/vue-beauty"
        },
        "vue-beauty"
      ],
      " 或者 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/zzuu666/antue"
        },
        "antue"
      ],
      "。"
    ],
    [
      "h3",
      "你们会提供 Sass/Stylus 等格式的样式文件吗？"
    ],
    [
      "p",
      "不。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。"
    ],
    [
      "h3",
      "当我点击 ",
      [
        "code",
        "Select Dropdown DatePicker TimePicker Popover Popconfirm"
      ],
      " 内的另一个 popup 组件时它会消失，如何解决？"
    ],
    [
      "p",
      "使用 ",
      [
        "code",
        "<Select getPopupContainer={trigger => trigger.parentNode}>"
      ],
      " 来在 Popover 中渲染组件，或者使用其他的 getXxxxContainer 参数。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/components/select/#Select-props"
        },
        "https://ant.design/components/select/#Select-props"
      ]
    ],
    [
      "p",
      "相关 issue：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/3487"
        },
        "#3487"
      ],
      " ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/3438"
        },
        "#3438"
      ]
    ],
    [
      "h3",
      [
        "code",
        "Select Dropdown DatePicker TimePicker Popover Popconfirm"
      ],
      " 会跟随滚动条上下移动？"
    ],
    [
      "p",
      "使用 ",
      [
        "code",
        "<Select getPopupContainer={trigger => trigger.parentNode}>"
      ],
      " 来将组件渲染到滚动区域内，或者使用其他的 getXxxxContainer 参数。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/components/select/#Select-props"
        },
        "https://ant.design/components/select/#Select-props"
      ]
    ],
    [
      "p",
      "相关 issue：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/3487"
        },
        "#3487"
      ],
      " ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/3438"
        },
        "#3438"
      ]
    ],
    [
      "h3",
      "如何修改 Ant Design 的默认主题？"
    ],
    [
      "p",
      "参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/docs/react/customize-theme"
        },
        "https://ant.design/docs/react/customize-theme"
      ],
      " 。"
    ],
    [
      "h3",
      "你们会提供其他主题吗？"
    ],
    [
      "p",
      "不，我们遵守 Ant Design 设计规范。",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/1241"
        },
        "https://github.com/ant-design/ant-design/issues/1241"
      ],
      " 。"
    ],
    [
      "h3",
      "如何修改 Ant Design 组件的默认样式？"
    ],
    [
      "p",
      "你可以覆盖它们的样式，但是我们不推荐这么做。antd 是一系列 React 组件，但同样是一套设计规范。"
    ],
    [
      "h3",
      "我只想使用 ",
      [
        "code",
        "Menu"
      ],
      "/",
      [
        "code",
        "Button"
      ],
      " 等，但似乎我必须 import 整个 antd 和它的样式文件。"
    ],
    [
      "p",
      "试试 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/babel-plugin-import"
        },
        "babel-plugin-import"
      ],
      "，或者用下面这种方式来按需加载："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> Menu <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/menu'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'antd/lib/button/style/css'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import Menu from 'antd/lib/menu';\nimport 'antd/lib/button/style/css';"
      ]
    ],
    [
      "p",
      "或者（ES6 支持的 tree shaking 方式）："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Menu, Breadcrumb, Icon } from 'antd';"
      ]
    ],
    [
      "h3",
      "如何配置 webpack 以优化 momentjs 的打包大小？"
    ],
    [
      "p",
      "参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"
        },
        "https://github.com/jmblog/how-to-optimize-momentjs-with-webpack"
      ],
      " 。"
    ],
    [
      "h3",
      "当我动态改变 ",
      [
        "code",
        "defaultValue"
      ],
      " 的时候它并没有生效。"
    ],
    [
      "p",
      [
        "code",
        "Input"
      ],
      "/",
      [
        "code",
        "Select"
      ],
      " 等的 ",
      [
        "code",
        "defaultXxxx"
      ],
      "（例如 ",
      [
        "code",
        "defaultValue"
      ],
      "）只有在第一次渲染的时候有效，这是 React 的规范，请阅读 ",
      [
        "a",
        {
          "title": null,
          "href": "https://reactjs.org/docs/forms.html#controlled-components"
        },
        "React 的文档"
      ],
      "。"
    ],
    [
      "h3",
      "当我设置了 ",
      [
        "code",
        "Input"
      ],
      "/",
      [
        "code",
        "Select"
      ],
      " 等的 ",
      [
        "code",
        "value"
      ],
      " 时它就无法修改了。"
    ],
    [
      "p",
      "尝试使用 ",
      [
        "code",
        "defaultValue"
      ],
      " 或 ",
      [
        "code",
        "onChange"
      ],
      " 来改变 ",
      [
        "code",
        "value"
      ],
      "，请参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://reactjs.org/docs/forms.html#controlled-components"
        },
        "React 的文档"
      ],
      "。"
    ],
    [
      "h3",
      "antd 覆盖了我的全局样式！"
    ],
    [
      "p",
      "是的，antd 在设计的时候就是用来开发一个完整的应用的，为了方便，我们覆盖了一些全局样式，现在还不能移除，想要了解更多请追踪这个 issue：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/4331"
        },
        "https://github.com/ant-design/ant-design/issues/4331"
      ],
      " ，或者参考这个教程 ",
      [
        "a",
        {
          "title": null,
          "href": "docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"
        },
        "How to avoid modifying global styles?"
      ]
    ],
    [
      "h3",
      "我没法安装 ",
      [
        "code",
        "antd"
      ],
      " 和 ",
      [
        "code",
        "antd"
      ],
      " 的依赖，顺便提一句，我在中国大陆。"
    ],
    [
      "p",
      "那啥，试试 ",
      [
        "a",
        {
          "title": null,
          "href": "http://npm.taobao.org/"
        },
        "cnpm"
      ],
      "。"
    ],
    [
      "h3",
      "我在 package.json 里将 ",
      [
        "code",
        "dependencies.antd"
      ],
      " 添加到了 git repository 中，但是没有用。"
    ],
    [
      "p",
      "当然没用了，请使用 npm 安装 ",
      [
        "code",
        "antd"
      ],
      "。"
    ],
    [
      "h3",
      [
        "code",
        "message"
      ],
      " 和 ",
      [
        "code",
        "notification"
      ],
      " 是小写的，但是其他的组件都是首字母大写的，这是手滑吗？"
    ],
    [
      "p",
      "不，因为 ",
      [
        "code",
        "message"
      ],
      " 是一个函数，而不是一个 React 组件。"
    ],
    [
      "h3",
      [
        "code",
        "antd"
      ],
      " 在移动端体验不佳。"
    ],
    [
      "p",
      "请浏览 ",
      [
        "a",
        {
          "title": null,
          "href": "http://mobile.ant.design"
        },
        "And Design Mobile"
      ],
      " 以了解详情，",
      [
        "code",
        "antd"
      ],
      " 并非针对移动端设计。你可以试试 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/"
        },
        "react-component"
      ],
      "，其中带有 'm-' 'rn-' 前缀的库是为移动端设计的。"
    ],
    [
      "h3",
      [
        "code",
        "antd"
      ],
      " 会像 ",
      [
        "code",
        "React"
      ],
      " 那样提供单文件引入吗？"
    ],
    [
      "p",
      "是的，",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/docs/react/install?locale=en-US#Import-in-Browser"
        },
        "你可以用 script 标签引入"
      ],
      "。但是我们推荐使用 ",
      [
        "code",
        "npm"
      ],
      " 来引入 ",
      [
        "code",
        "antd"
      ],
      "，这样维护起来更简单方便。"
    ],
    [
      "h3",
      "在我的网络环境下没法获取到 ",
      [
        "code",
        "icon"
      ],
      " 文件。"
    ],
    [
      "p",
      "你应该自行部署 iconfont 文件到你的网络上，参考这个",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/antd-init/tree/7c1a33cadb98f2fd8688fe527dd7f98215b9bced/examples/local-iconfont"
        },
        "例子"
      ],
      "。 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/1070"
        },
        "#1070"
      ]
    ],
    [
      "p",
      "在 3.9.x 版本后，",
      [
        "a",
        {
          "title": null,
          "href": "/components/icon#svg-icons"
        },
        "我们会使用 svg 图标"
      ],
      "，你就不用担心本地部署 iconfont 的问题了！"
    ],
    [
      "h3",
      "如何拓展 antd 的组件？"
    ],
    [
      "p",
      "如果你需要一些 antd 没有包含的功能，你可以尝试通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775"
        },
        "HOC"
      ],
      " 拓展 antd 的组件。 ",
      [
        "a",
        {
          "title": null,
          "href": "https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1"
        },
        "更多"
      ]
    ],
    [
      "h3",
      "如何正确的拼写 Ant Design？"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "✅ ",
          [
            "strong",
            "Ant Design"
          ],
          "：用空格分隔的首字母大写单词，指代设计语言"
        ]
      ],
      [
        "li",
        [
          "p",
          "✅ ",
          [
            "strong",
            "antd"
          ],
          "：全小写，指代 React UI 组件库"
        ]
      ]
    ],
    [
      "p",
      "下面是一些典型的错误例子："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "❌ AntD"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ antD"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ Antd"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ ant design"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ AntDesign"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ antdesign"
        ]
      ],
      [
        "li",
        [
          "p",
          "❌ Antdesign"
        ]
      ]
    ],
    [
      "h3",
      "你们有接受捐助的渠道吗，比如支付宝或者微信支付？"
    ],
    [
      "p",
      "还没有。"
    ],
    [
      "h3",
      "为什么？"
    ],
    [
      "p",
      "马爸爸会付给我们钱。"
    ],
    [
      "hr"
    ],
    [
      "h2",
      "错误和警告"
    ],
    [
      "p",
      "这里是一些你在使用 antd 的过程中可能会遇到的错误和警告，但是其中一些并不是 antd 的 bug。"
    ],
    [
      "h3",
      "Adjacent JSX elements must be wrapped in an enclosing tag"
    ],
    [
      "p",
      "这里有一篇",
      [
        "a",
        {
          "title": null,
          "href": "http://stackoverflow.com/questions/25034994/how-to-correctly-wrap-few-td-tags-for-jsxtransformer"
        },
        "来自 StackOverflow 的回答"
      ],
      "，另外请阅读 ",
      [
        "a",
        {
          "title": null,
          "href": "http://facebook.github.io/react/docs/displaying-data.html#components-are-just-like-functions"
        },
        "React 的文档"
      ],
      "。"
    ],
    [
      "h3",
      "React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components)"
    ],
    [
      "p",
      "请确保你正确引入了 ",
      [
        "code",
        "antd"
      ],
      " 的组件。参考 ",
      [
        "code",
        "antd"
      ],
      " 相应组件的文档，注意你代码中的 typo。"
    ],
    [
      "h3",
      "rm is not recognized as an internal or external command"
    ],
    [
      "p",
      "请阅读这个 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/650#issuecomment-164966511"
        },
        "issue"
      ],
      "，或者试试 Linux/Unix。"
    ],
    [
      "h3",
      "Failed propType: Invalid prop ",
      [
        "code",
        "AAA"
      ],
      " of type ",
      [
        "code",
        "BBB"
      ],
      " supplied to ",
      [
        "code",
        "CCC"
      ],
      ", expected ",
      [
        "code",
        "DDD"
      ],
      ". Check the render method of ",
      [
        "code",
        "EEE"
      ],
      "."
    ],
    [
      "p",
      "请阅读你正在使用版本的 ",
      [
        "code",
        "antd"
      ],
      " 的文档，确保你传递给 ",
      [
        "code",
        "antd"
      ],
      " 组件的参数类型正确。"
    ],
    [
      "h3",
      "Unknown option: xxx/package.json.presets"
    ],
    [
      "p",
      "这里有一篇",
      [
        "a",
        {
          "title": null,
          "href": "http://stackoverflow.com/questions/33685365/unknown-option-babelrc-presets"
        },
        "来自 StackOverflow 的回答"
      ],
      "可以参考。"
    ],
    [
      "h3",
      "Invariant Violation: findComponentRoot(...): Unable to find element."
    ],
    [
      "p",
      "你或许引入了 React 两次。如果你使用 webpack，请将 React & ReactDOM 设置为 external，参见：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/525"
        },
        "#525"
      ],
      "。如果你使用其他工具（browserify 等），请阅读它们的文档并将 React & ReactDOM 设置为 external。"
    ]
  ],
  "meta": {
    "order": 9,
    "title": "FAQ",
    "filename": "docs/react/faq.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "有问题请先问 React：",
      [
        "a",
        {
          "title": null,
          "href": "https://reactfaq.site"
        },
        "https://reactfaq.site"
      ],
      " 。"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#错误和警告",
          "title": "错误和警告"
        },
        "错误和警告"
      ]
    ]
  ]
};

/***/ })

});