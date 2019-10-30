(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{81:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[s._v("#")]),s._v(" 比较运算符")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("比较运算符用于比较两个值的大小，然后返回一个布尔值，表示是否满足指定的条件。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("比较运算符可以比较各种类型的值，不仅仅是数值。")])]),s._v(" "),a("p",[s._v("JavaScript 一共提供了8个比较运算符。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(">")]),s._v(" 大于运算符")]),s._v(" "),a("li",[a("code",[s._v("<")]),s._v(" 小于运算符")]),s._v(" "),a("li",[a("code",[s._v("<=")]),s._v(" 小于或等于运算符")]),s._v(" "),a("li",[a("code",[s._v(">=")]),s._v(" 大于或等于运算符")]),s._v(" "),a("li",[a("code",[s._v("==")]),s._v(" 相等运算符")]),s._v(" "),a("li",[a("code",[s._v("===")]),s._v(" 严格相等运算符")]),s._v(" "),a("li",[a("code",[s._v("!=")]),s._v(" 不相等运算符")]),s._v(" "),a("li",[a("code",[s._v("!==")]),s._v(" 严格不相等运算符")])]),s._v(" "),a("p",[s._v("这八个比较运算符分成两类：相等比较和非相等比较。\n两者的规则是不一样的，对于非相等的比较，算法是先看两个运算子是否都是字符串，如果是的，就按照字典顺序比较（实际上是比较 Unicode 码点）；否则，将两个运算子都转成数值，再比较数值的大小。")]),s._v(" "),a("h2",{attrs:{id:"非相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非相等运算符"}},[s._v("#")]),s._v(" 非相等运算符")]),s._v(" "),a("h3",{attrs:{id:"字符串的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的比较"}},[s._v("#")]),s._v(" 字符串的比较")]),s._v(" "),a("p",[s._v("字符串按照字典顺序进行比较。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dog'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'catalog'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[s._v("JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cat'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true'")]),s._v("\n")])])]),a("p",[s._v("上面代码中，小写的"),a("code",[s._v("c")]),s._v("的 Unicode 码点（"),a("code",[s._v("99")]),s._v("）大于大写的"),a("code",[s._v("C")]),s._v("的 Unicode 码点（"),a("code",[s._v("67")]),s._v("），所以返回"),a("code",[s._v("true")]),s._v("。")]),s._v(" "),a("p",[s._v("由于所有字符都有 Unicode 码点，因此汉字也可以比较。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'大'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[s._v("上面代码中，“大”的 Unicode 码点是22823，“小”是23567，因此返回"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"非字符串的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非字符串的比较"}},[s._v("#")]),s._v(" 非字符串的比较")]),s._v(" "),a("p",[s._v("如果两个运算子之中，至少有一个不是字符串，需要分成以下两种情况。")]),s._v(" "),a("p",[a("strong",[s._v("（1）原始类型值")])]),s._v(" "),a("p",[s._v("如果两个运算子都是原始类型的值，则是先转成数值再比较。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 5 > Number('4')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 5 > 4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number(true) > Number(false)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 1 > 0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 2 > Number(true)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 2 > 1")]),s._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("这里需要注意与"),a("code",[s._v("NaN")]),s._v("的比较。任何值（包括"),a("code",[s._v("NaN")]),s._v("本身）与"),a("code",[s._v("NaN")]),s._v("比较，返回的都是"),a("code",[s._v("false")]),s._v("。")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（2）对象")])]),s._v(" "),a("p",[s._v("如果运算子是对象，会转为原始类型的值，再进行比较。")]),s._v(" "),a("p",[s._v("对象转换成原始类型的值，算法是先调用"),a("code",[s._v("valueOf")]),s._v("方法；如果返回的还是对象，再接着调用"),a("code",[s._v("toString")]),s._v("方法。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'11'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 [2].valueOf().toString() > '11'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 '2' > '11'")]),s._v("\n\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("valueOf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'11'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 [2].valueOf() > '11'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 '1' > '11'")]),s._v("\n")])])]),a("p",[s._v("两个对象之间的比较也是这样。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 [2].valueOf().toString() > [1].valueOf().toString()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 '2' > '1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 [2].valueOf().toString() > [11].valueOf().toString()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 '2' > '11'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 { x: 2 }.valueOf().toString() >= { x: 1 }.valueOf().toString()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 即 '[object Object]' >= '[object Object]'")]),s._v("\n")])])]),a("h2",{attrs:{id:"严格相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格相等运算符"}},[s._v("#")]),s._v(" 严格相等运算符")]),s._v(" "),a("p",[s._v("JavaScript 提供两种相等运算符："),a("code",[s._v("==")]),s._v("和"),a("code",[s._v("===")]),s._v("。")]),s._v(" "),a("p",[s._v("简单说，它们的区别是相等运算符（"),a("code",[s._v("==")]),s._v("）比较两个值是否相等，严格相等运算符（"),a("code",[s._v("===")]),s._v("）比较它们是否为“同一个值”。\n如果两个值不是同一类型，严格相等运算符（"),a("code",[s._v("===")]),s._v("）直接返回"),a("code",[s._v("false")]),s._v("，而相等运算符（"),a("code",[s._v("==")]),s._v("）会将它们转换成同一个类型，再用严格相等运算符进行比较。")]),s._v(" "),a("p",[a("strong",[s._v("（1）不同类型的值")])]),s._v(" "),a("p",[s._v("如果两个值的类型不同，直接返回"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[s._v("上面代码比较数值的"),a("code",[s._v("1")]),s._v("与字符串的“1”、布尔值的"),a("code",[s._v("true")]),s._v("与字符串"),a("code",[s._v('"true"')]),s._v("，因为类型不同，结果都是"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("（2）同一类的原始类型值")])]),s._v(" "),a("p",[s._v("同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回"),a("code",[s._v("true")]),s._v("，值不同就返回"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("上面代码比较十进制的"),a("code",[s._v("1")]),s._v("与十六进制的"),a("code",[s._v("1")]),s._v("，因为类型和值都相同，返回"),a("code",[s._v("true")]),s._v("。")]),s._v(" "),a("p",[s._v("需要注意的是，"),a("code",[s._v("NaN")]),s._v("与任何值都不相等（包括自身）。另外，正"),a("code",[s._v("0")]),s._v("等于负"),a("code",[s._v("0")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（3）复合类型值")])]),s._v(" "),a("p",[s._v("两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("p",[s._v("上面代码分别比较两个空对象、两个空数组、两个空函数，结果都是不相等。原因是对于复合类型的值，严格相等运算比较的是，它们是否引用同一个内存地址，而运算符两边的空对象、空数组、空函数的值，都存放在不同的内存地址，结果当然是"),a("code",[s._v("false")]),s._v("。")]),s._v(" "),a("p",[s._v("如果两个变量引用同一个对象，则它们相等。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" v1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" v2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nv1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（4）undefined 和 null")])]),s._v(" "),a("p",[a("code",[s._v("undefined")]),s._v("和"),a("code",[s._v("null")]),s._v("与自身严格相等。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("由于变量声明后默认值是"),a("code",[s._v("undefined")]),s._v("，因此两个只声明未赋值的变量是相等的。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nv1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" v2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("h2",{attrs:{id:"严格不相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格不相等运算符"}},[s._v("#")]),s._v(" 严格不相等运算符")]),s._v(" "),a("p",[s._v("严格相等运算符有一个对应的“严格不相等运算符”（"),a("code",[s._v("!==")]),s._v("），它的算法就是先求严格相等运算符的结果，然后返回相反值。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("上面代码中，感叹号"),a("code",[s._v("!")]),s._v("是求出后面表达式的相反值。")]),s._v(" "),a("h2",{attrs:{id:"相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相等运算符"}},[s._v("#")]),s._v(" 相等运算符")]),s._v(" "),a("p",[s._v("相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])])]),a("p",[s._v("比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。下面分成四种情况，讨论不同类型的值互相比较的规则。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 1 === Number(true)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 0 === Number(false)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 2 === Number(true)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 2 === Number(false)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number('true') === Number(true)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 NaN === 1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number('') === 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 0 === 0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number('') === Number(false)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 0 === 0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number('1') === Number(true)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 1 === 1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n  123  \\t'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 因为字符串转为数字时，省略前置和后置的空格")]),s._v("\n")])])]),a("p",[s._v("上面代码将字符串和布尔值都转为数值，然后再进行比较。")]),s._v(" "),a("p",[a("strong",[s._v("（2）对象与原始类型值比较")])]),s._v(" "),a("p",[s._v("对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象与数值比较时，对象转为数值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number([1]) == 1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象与字符串比较时，对象转为字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 String([1]) == '1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 String([1, 2]) == '1,2'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象与布尔值比较时，两边都转为数值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number([1]) == Number(true)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于 Number([2]) == Number(true)")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（3）undefined 和 null")])]),s._v(" "),a("p",[a("code",[s._v("undefined")]),s._v("和"),a("code",[s._v("null")]),s._v("与其他类型的值比较时，结果都为"),a("code",[s._v("false")]),s._v("，它们互相比较时结果为"),a("code",[s._v("true")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[a("strong",[s._v("（4）相等运算符的缺点")])]),s._v(" "),a("p",[s._v("相等运算符隐藏的类型转换，会带来一些违反直觉的结果。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' \\t\\r\\n '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("上面这些表达式都不同于直觉，很容易出错。因此建议不要使用相等运算符（"),a("code",[s._v("==")]),s._v("），最好只使用严格相等运算符（"),a("code",[s._v("===")]),s._v("）。")]),s._v(" "),a("h2",{attrs:{id:"不相等运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不相等运算符"}},[s._v("#")]),s._v(" 不相等运算符")]),s._v(" "),a("p",[s._v("相等运算符有一个对应的“不相等运算符”（"),a("code",[s._v("!=")]),s._v("），它的算法就是先求相等运算符的结果，然后返回相反值。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等同于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);