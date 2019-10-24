(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{71:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v("\n")])])]),a("p",[s._v("单引号字符串的内部，可以使用双引号。\n双引号字符串的内部，可以使用单引号。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'My name is \"Bob\"'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"It\'s a long journey"')]),s._v("\n")])])]),a("p",[s._v("如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。\n双引号字符串内部使用双引号，也是如此。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Did she say \\'Hello\\'?'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \"Did she say 'Hello'?\"")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Did she say \\"Hello\\"?"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "Did she say "Hello"?"')]),s._v("\n")])])]),a("p",[s._v("由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。")]),s._v(" "),a("p",[s._v("字符串默认只能写在一行，分成多行将会报错。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("'a\nb\nc'\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SyntaxError: Unexpected token ILLEGAL")]),s._v("\n")])])]),a("p",[s._v("如果字符串必须分成多行，可以在每一行的尾部使用反斜杠。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" longString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This \\\nis \\\nlong \\\nstring'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nlongString    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "This is long string"')]),s._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。")])]),s._v(" "),a("p",[s._v("连接运算符（"),a("code",[s._v("+")]),s._v("）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" longString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This '")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'is '")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'long '")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果想输出多行字符串，有一种利用多行注释的变通方法。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\nline 1\nline 2\nline 3\n*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "line 1')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// line 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// line 3"')]),s._v("\n")])])]),a("h2",{attrs:{id:"转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义"}},[s._v("#")]),s._v(" 转义")]),s._v(" "),a("p",[s._v("反斜杠（\\）在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。")]),s._v(" "),a("p",[s._v("需要用反斜杠转义的特殊字符，主要有下面这些。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("\\0")]),s._v(" ：null（"),a("code",[s._v("\\u0000")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\b")]),s._v(" ：后退键（"),a("code",[s._v("\\u0008")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\f")]),s._v(" ：换页符（"),a("code",[s._v("\\u000C")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\n")]),s._v(" ：换行符（"),a("code",[s._v("\\u000A")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\r")]),s._v(" ：回车键（"),a("code",[s._v("\\u000D")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\t")]),s._v(" ：制表符（"),a("code",[s._v("\\u0009")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\v")]),s._v(" ：垂直制表符（"),a("code",[s._v("\\u000B")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\'")]),s._v(" ：单引号（"),a("code",[s._v("\\u0027")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v('\\"')]),s._v(" ：双引号（"),a("code",[s._v("\\u0022")]),s._v("）")]),s._v(" "),a("li",[a("code",[s._v("\\\\")]),s._v(" ：反斜杠（"),a("code",[s._v("\\u005C")]),s._v("）")])]),s._v(" "),a("p",[s._v("上面这些字符前面加上反斜杠，都表示特殊含义。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1\\n2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \\n 表示换行，输出的时候就分成了两行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])])]),a("p",[s._v("如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\a'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "a"')]),s._v("\n")])])]),a("h2",{attrs:{id:"字符串与数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串与数组"}},[s._v("#")]),s._v(" 字符串与数组")]),s._v(" "),a("p",[s._v("字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（索引从0开始）。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "h"')]),s._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "e"')]),s._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "o"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 直接对字符串使用方括号运算符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "e"')]),s._v("\n")])])]),a("p",[s._v("如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回"),a("code",[s._v("undefined")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n")])])]),a("p",[s._v("但是，字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串内部的单个字符无法改变和增删")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello"')]),s._v("\n\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello"')]),s._v("\n\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "hello"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);