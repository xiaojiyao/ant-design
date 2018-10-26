webpackJsonp([42],{

/***/ 1810:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2161),
    'custom': __webpack_require__(2162),
    'iconfont': __webpack_require__(2163),
    'old-icons': __webpack_require__(2164),
    'two-tone': __webpack_require__(2165),
}

/***/ }),

/***/ 2161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "<Icon />"
        ],
        " 标签声明组件，指定图标对应的 ",
        [
          "code",
          "type"
        ],
        " 属性。可以通过 ",
        [
          "code",
          "theme"
        ],
        " 属性来设置不同的主题风格的图标，也可以通过设置 ",
        [
          "code",
          "spin"
        ],
        " 属性来实现动画旋转效果。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use tag ",
        [
          "code",
          "<Icon />"
        ],
        " to create an icon and set its type in the ",
        [
          "code",
          "type"
        ],
        " prop. Specific the ",
        [
          "code",
          "spin"
        ],
        " property to show spinning animation and the ",
        [
          "code",
          "theme"
        ],
        " property to switch different themes."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本用法",
      "en-US": "Basic"
    },
    "filename": "components/icon/demo/basic.md",
    "id": "components-icon-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>outlined<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sync<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">spin</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    {
      className: "icons-list"
    },
    React.createElement(_antd.Icon, {
      type: "home"
    }),
    React.createElement(_antd.Icon, {
      type: "setting",
      theme: "filled"
    }),
    React.createElement(_antd.Icon, {
      type: "smile",
      theme: "outlined"
    }),
    React.createElement(_antd.Icon, {
      type: "sync",
      spin: true
    }),
    React.createElement(_antd.Icon, {
      type: "loading"
    })
  );
},
  "style": "\n.icons-list > .anticon {\n  margin-right: 6px;\n  font-size: 24px;\n}\n"
};

/***/ }),

/***/ 2162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "利用 ",
        [
          "code",
          "Icon"
        ],
        " 组件封装一个可复用的自定义图标。可以通过 ",
        [
          "code",
          "component"
        ],
        " 属性传入一个组件来渲染最终的图标，以满足特定的需求。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Create a reusable React component by using ",
        [
          "code",
          "<Icon component={...} />"
        ],
        ". The property ",
        [
          "code",
          "component"
        ],
        " takes a React component that renders to ",
        [
          "code",
          "svg"
        ],
        " element."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "自定义图标",
      "en-US": "Custom Icon"
    },
    "filename": "components/icon/demo/custom.md",
    "id": "components-icon-demo-custom"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> HeartSvg <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>svg</span> <span class=\"token attr-name\">width</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1em<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">height</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1em<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>currentColor<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">viewBox</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1024</span> <span class=\"token attr-name\">1024\"</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M923</span> <span class=\"token attr-name\">283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3</span> <span class=\"token attr-name\">0-97.4</span> <span class=\"token attr-name\">13.5-139.2</span> <span class=\"token attr-name\">39-10</span> <span class=\"token attr-name\">6.1-19.5</span> <span class=\"token attr-name\">12.8-28.5</span> <span class=\"token attr-name\">20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5</span> <span class=\"token attr-name\">0-69.9</span> <span class=\"token attr-name\">6.8-102.4</span> <span class=\"token attr-name\">20.3-31.4</span> <span class=\"token attr-name\">13-59.7</span> <span class=\"token attr-name\">31.7-84</span> <span class=\"token attr-name\">55.5-24.4</span> <span class=\"token attr-name\">23.9-43.5</span> <span class=\"token attr-name\">51.7-56.9</span> <span class=\"token attr-name\">82.8-13.9</span> <span class=\"token attr-name\">32.3-21</span> <span class=\"token attr-name\">66.6-21</span> <span class=\"token attr-name\">101.9</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">33.3</span> <span class=\"token attr-name\">6.8</span> <span class=\"token attr-name\">68</span> <span class=\"token attr-name\">20.3</span> <span class=\"token attr-name\">103.3</span> <span class=\"token attr-name\">11.3</span> <span class=\"token attr-name\">29.5</span> <span class=\"token attr-name\">27.5</span> <span class=\"token attr-name\">60.1</span> <span class=\"token attr-name\">48.2</span> <span class=\"token attr-name\">91</span> <span class=\"token attr-name\">32.8</span> <span class=\"token attr-name\">48.9</span> <span class=\"token attr-name\">77.9</span> <span class=\"token attr-name\">99.9</span> <span class=\"token attr-name\">133.9</span> <span class=\"token attr-name\">151.6</span> <span class=\"token attr-name\">92.8</span> <span class=\"token attr-name\">85.7</span> <span class=\"token attr-name\">184.7</span> <span class=\"token attr-name\">144.9</span> <span class=\"token attr-name\">188.6</span> <span class=\"token attr-name\">147.3l23.7</span> <span class=\"token attr-name\">15.2c10.5</span> <span class=\"token attr-name\">6.7</span> <span class=\"token attr-name\">24</span> <span class=\"token attr-name\">6.7</span> <span class=\"token attr-name\">34.5</span> <span class=\"token attr-name\">0l23.7-15.2c3.9-2.5</span> <span class=\"token attr-name\">95.7-61.6</span> <span class=\"token attr-name\">188.6-147.3</span> <span class=\"token attr-name\">56-51.7</span> <span class=\"token attr-name\">101.1-102.7</span> <span class=\"token attr-name\">133.9-151.6</span> <span class=\"token attr-name\">20.7-30.9</span> <span class=\"token attr-name\">37-61.5</span> <span class=\"token attr-name\">48.2-91</span> <span class=\"token attr-name\">13.5-35.3</span> <span class=\"token attr-name\">20.3-70</span> <span class=\"token attr-name\">20.3-103.3</span> <span class=\"token attr-name\">0.1-35.3-7-69.6-20.9-101.9z\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>svg</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> PandaSvg <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>svg</span> <span class=\"token attr-name\">viewBox</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1024</span> <span class=\"token attr-name\">1024\"</span> <span class=\"token attr-name\">width</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1em<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">height</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1em<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>currentColor<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M99.096</span> <span class=\"token attr-name\">315.634s-82.58-64.032-82.58-132.13c0-66.064</span> <span class=\"token attr-name\">33.032-165.162</span> <span class=\"token attr-name\">148.646-148.646</span> <span class=\"token attr-name\">83.37</span> <span class=\"token attr-name\">11.91</span> <span class=\"token attr-name\">99.096</span> <span class=\"token attr-name\">165.162</span> <span class=\"token attr-name\">99.096</span> <span class=\"token attr-name\">165.162l-165.162</span> <span class=\"token attr-name\">115.614zM924.906</span> <span class=\"token attr-name\">315.634s82.58-64.032</span> <span class=\"token attr-name\">82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37</span> <span class=\"token attr-name\">11.91-99.096</span> <span class=\"token attr-name\">165.162-99.096</span> <span class=\"token attr-name\">165.162l165.162</span> <span class=\"token attr-name\">115.614z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#6B676E<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1143<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M1024</span> <span class=\"token attr-name\">561.548c0</span> <span class=\"token attr-name\">264.526-229.23</span> <span class=\"token attr-name\">429.42-512.002</span> <span class=\"token attr-name\">429.42S0</span> <span class=\"token attr-name\">826.076</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">561.548</span> <span class=\"token attr-name\">283.96</span> <span class=\"token attr-name\">66.064</span> <span class=\"token attr-name\">512.002</span> <span class=\"token attr-name\">66.064</span> <span class=\"token attr-name\">1024</span> <span class=\"token attr-name\">297.022</span> <span class=\"token attr-name\">1024</span> <span class=\"token attr-name\">561.548z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#FFEBD2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1144<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M330.324</span> <span class=\"token attr-name\">842.126c0</span> <span class=\"token attr-name\">82.096</span> <span class=\"token attr-name\">81.34</span> <span class=\"token attr-name\">148.646</span> <span class=\"token attr-name\">181.678</span> <span class=\"token attr-name\">148.646s181.678-66.55</span> <span class=\"token attr-name\">181.678-148.646H330.324z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#E9D7C3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1145<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M644.13</span> <span class=\"token attr-name\">611.098C594.582</span> <span class=\"token attr-name\">528.516</span> <span class=\"token attr-name\">561.55</span> <span class=\"token attr-name\">512</span> <span class=\"token attr-name\">512.002</span> <span class=\"token attr-name\">512c-49.548</span> <span class=\"token attr-name\">0-82.58</span> <span class=\"token attr-name\">16.516-132.13</span> <span class=\"token attr-name\">99.096-42.488</span> <span class=\"token attr-name\">70.814-78.73</span> <span class=\"token attr-name\">211.264-49.548</span> <span class=\"token attr-name\">247.742</span> <span class=\"token attr-name\">66.064</span> <span class=\"token attr-name\">82.58</span> <span class=\"token attr-name\">165.162</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">181.678</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">16.516</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">115.614</span> <span class=\"token attr-name\">49.548</span> <span class=\"token attr-name\">181.678-33.032</span> <span class=\"token attr-name\">29.18-36.476-7.064-176.93-49.55-247.74z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#FFFFFF<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1146<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M611.098</span> <span class=\"token attr-name\">495.484c0-45.608</span> <span class=\"token attr-name\">36.974-82.58</span> <span class=\"token attr-name\">82.58-82.58</span> <span class=\"token attr-name\">49.548</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">198.194</span> <span class=\"token attr-name\">99.098</span> <span class=\"token attr-name\">198.194</span> <span class=\"token attr-name\">165.162s-79.934</span> <span class=\"token attr-name\">144.904-148.646</span> <span class=\"token attr-name\">99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904</span> <span class=\"token attr-name\">495.484c0-45.608-36.974-82.58-82.58-82.58-49.548</span> <span class=\"token attr-name\">0-198.194</span> <span class=\"token attr-name\">99.098-198.194</span> <span class=\"token attr-name\">165.162s79.934</span> <span class=\"token attr-name\">144.904</span> <span class=\"token attr-name\">148.646</span> <span class=\"token attr-name\">99.096c49.548-33.032</span> <span class=\"token attr-name\">132.128-148.646</span> <span class=\"token attr-name\">132.128-181.678z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#6B676E<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1147<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M512.002</span> <span class=\"token attr-name\">726.622c-30.06</span> <span class=\"token attr-name\">0-115.614</span> <span class=\"token attr-name\">5.668-115.614</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">49.638</span> <span class=\"token attr-name\">105.484</span> <span class=\"token attr-name\">85.24</span> <span class=\"token attr-name\">115.614</span> <span class=\"token attr-name\">82.58</span> <span class=\"token attr-name\">10.128</span> <span class=\"token attr-name\">2.66</span> <span class=\"token attr-name\">115.614-32.944</span> <span class=\"token attr-name\">115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#464655<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1148<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M330.324</span> <span class=\"token attr-name\">495.484m-33.032</span> <span class=\"token attr-name\">0a33.032</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">66.064</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1</span> <span class=\"token attr-name\">0-66.064</span> <span class=\"token attr-name\">0Z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#464655<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1149<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>path</span> <span class=\"token attr-name\">d</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>M693.678</span> <span class=\"token attr-name\">495.484m-33.032</span> <span class=\"token attr-name\">0a33.032</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">66.064</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">33.032</span> <span class=\"token attr-name\">0</span> <span class=\"token attr-name\">1</span> <span class=\"token attr-name\">0-66.064</span> <span class=\"token attr-name\">0Z\"</span> <span class=\"token attr-name\">fill</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#464655<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">p-id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1150<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>svg</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> HeartIcon <span class=\"token operator\">=</span> props <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>HeartSvg<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">{...props}</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> PandaIcon <span class=\"token operator\">=</span> props <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>PandaSvg<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">{...props}</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>HeartIcon</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'hotpink'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PandaIcon</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'32px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _antd = __webpack_require__(30);

  var HeartSvg = function HeartSvg() {
    return React.createElement(
      "svg",
      {
        width: "1em",
        height: "1em",
        fill: "currentColor",
        viewBox: "0 0 1024 1024"
      },
      React.createElement("path", {
        d: "M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"
      })
    );
  };

  var PandaSvg = function PandaSvg() {
    return React.createElement(
      "svg",
      {
        viewBox: "0 0 1024 1024",
        width: "1em",
        height: "1em",
        fill: "currentColor"
      },
      React.createElement("path", {
        d: "M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z",
        fill: "#6B676E",
        "p-id": "1143"
      }),
      React.createElement("path", {
        d: "M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z",
        fill: "#FFEBD2",
        "p-id": "1144"
      }),
      React.createElement("path", {
        d: "M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z",
        fill: "#E9D7C3",
        "p-id": "1145"
      }),
      React.createElement("path", {
        d: "M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z",
        fill: "#FFFFFF",
        "p-id": "1146"
      }),
      React.createElement("path", {
        d: "M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z",
        fill: "#6B676E",
        "p-id": "1147"
      }),
      React.createElement("path", {
        d: "M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z",
        fill: "#464655",
        "p-id": "1148"
      }),
      React.createElement("path", {
        d: "M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z",
        fill: "#464655",
        "p-id": "1149"
      }),
      React.createElement("path", {
        d: "M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z",
        fill: "#464655",
        "p-id": "1150"
      })
    );
  };

  var HeartIcon = function HeartIcon(props) {
    return React.createElement(_antd.Icon, _extends({
      component: HeartSvg
    }, props));
  };

  var PandaIcon = function PandaIcon(props) {
    return React.createElement(_antd.Icon, _extends({
      component: PandaSvg
    }, props));
  };

  return React.createElement(
    "div",
    {
      className: "custom-icons-list"
    },
    React.createElement(HeartIcon, {
      style: {
        color: 'hotpink'
      }
    }),
    React.createElement(PandaIcon, {
      style: {
        fontSize: '32px'
      }
    })
  );
},
  "style": ".custom-icons-list > .anticon {\n  margin-right: 6px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.custom-icons-list</span> > <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "对于使用 ",
        [
          "a",
          {
            "title": null,
            "href": "http://iconfont.cn/"
          },
          "iconfont.cn"
        ],
        " 的用户，通过设置 ",
        [
          "code",
          "createFromIconfontCN"
        ],
        " 方法参数对象中的 ",
        [
          "code",
          "scriptUrl"
        ],
        " 字段， 即可轻松地使用已有项目中的图标。"
      ]
    ],
    "en-US": [
      [
        "p",
        "If you are using ",
        [
          "a",
          {
            "title": null,
            "href": "http://iconfont.cn/"
          },
          "iconfont.cn"
        ],
        ", you can use the icons in your project gracefully."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "使用 iconfont.cn",
      "en-US": "Use iconfont.cn"
    },
    "filename": "components/icon/demo/iconfont.md",
    "id": "components-icon-demo-iconfont"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-tuichu<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-facebook<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-twitter<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var IconFont = _antd.Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
  });

  return React.createElement(
    "div",
    {
      className: "icons-list"
    },
    React.createElement(IconFont, {
      type: "icon-tuichu"
    }),
    React.createElement(IconFont, {
      type: "icon-facebook"
    }),
    React.createElement(IconFont, {
      type: "icon-twitter"
    })
  );
}
};

/***/ }),

/***/ 2164:
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ 2165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以通过设置 ",
        [
          "code",
          "theme"
        ],
        " 属性为 ",
        [
          "code",
          "twoTone"
        ],
        " 来渲染双色图标，并且可以设置主题色。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Specific them property ",
        [
          "code",
          "theme"
        ],
        " to ",
        [
          "code",
          "twoTone"
        ],
        " to render two-tone icons. You can also set the primary color."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "多色图标",
      "en-US": "Two-tone icon and colorful icon"
    },
    "filename": "components/icon/demo/two-tone.md",
    "id": "components-icon-demo-two-tone"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>heart<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#eb2f96<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>check-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#52c41a<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    {
      className: "icons-list"
    },
    React.createElement(_antd.Icon, {
      type: "smile",
      theme: "twoTone"
    }),
    React.createElement(_antd.Icon, {
      type: "heart",
      theme: "twoTone",
      twoToneColor: "#eb2f96"
    }),
    React.createElement(_antd.Icon, {
      type: "check-circle",
      theme: "twoTone",
      twoToneColor: "#52c41a"
    })
  );
}
};

/***/ })

});