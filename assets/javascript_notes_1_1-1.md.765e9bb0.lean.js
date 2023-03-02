import{_ as t,o as l,c as o,a as s,b as e,e as i,d as a,r as p}from"./app.86dbf875.js";const T=JSON.parse('{"title":"1-1: Values","description":"Chapter 1-1 notes on values","frontmatter":{"title":"1-1: Values","description":"Chapter 1-1 notes on values"},"headers":[{"level":2,"title":"1-1-1: Numbers","slug":"_1-1-1-numbers","link":"#_1-1-1-numbers","children":[]},{"level":2,"title":"1-1-2: Arithmetic","slug":"_1-1-2-arithmetic","link":"#_1-1-2-arithmetic","children":[]},{"level":2,"title":"1-1-3: Strings","slug":"_1-1-3-strings","link":"#_1-1-3-strings","children":[{"level":3,"title":"1-1-3-FR: Further Reading","slug":"_1-1-3-fr-further-reading","link":"#_1-1-3-fr-further-reading","children":[]}]}],"relativePath":"javascript/notes/1/1-1.md","lastUpdated":1677724704000}'),r={name:"javascript/notes/1/1-1.md"},c=s("h1",{id:"_1-1-values",tabindex:"-1"},[e("1-1: Values "),s("a",{class:"header-anchor",href:"#_1-1-values","aria-hidden":"true"},"#")],-1),d={id:"_1-1-1-numbers",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#_1-1-1-numbers","aria-hidden":"true"},"#",-1),u=a("",4),m=s("p",null,[e("Not all whole numbers "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"19")])]),s("annotation",{encoding:"application/x-tex"},"10^{19}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"19")])])])])])])])])])])]),e(" fit in a JavaScript number. There are also negative numbers, so one of the bits has to be used to store the sign of the number.")],-1),y=s("ul",null,[s("li",null,"11 bits are used to store the position of the decimal dot within the number."),s("li",null,[e("52 bits, any whole number less than "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"52")])]),s("annotation",{encoding:"application/x-tex"},"2^{52}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"52")])])])])])])])])])])]),e(", which is more than "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"15")])]),s("annotation",{encoding:"application/x-tex"},"10^{15}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"15")])])])])])])])])])])]),e(" will safely fit in a JavaScript number, numbers we are using stay well below that.")])],-1),b=a("",4),g=s("p",null,[e("This indicates "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2.998"),s("mo",null,"×"),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"8")]),s("mo",null,"="),s("mn",null,"29980000")]),s("annotation",{encoding:"application/x-tex"},"2.998 \\times 10^8 = 29980000")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2.998"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"8")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"29980000")])])]),e(".")],-1),C=s("p",null,[e("Calculations with whole numbers (referred as "),s("em",null,"integers"),e(") that fits into 52 bits are guaranteed to be always precise, but calculation with fraction numbers are generally not.")],-1),v=s("ul",null,[s("li",null,[e("Such as "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"π")]),s("annotation",{encoding:"application/x-tex"},"\\pi")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π")])])]),e(" cannot be precisely expressed by a finite amount of decimal digits, "),s("strong",null,"thus many numbers lose some precision when only 64 bits are available to store them.")])],-1),w=s("details",{class:"details custom-block"},[s("summary",null,"1-1-1: Numbers review"),s("ul",null,[s("li",null,[e("64 bits: A 64-bit number is a binary sequence of 64 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"64")])]),s("annotation",{encoding:"application/x-tex"},"2^{64}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"64")])])])])])])])])])])]),e(" (18,446,744,073,709,551,616) different values. This is commonly used for representing memory addresses and integers with large values in computer systems.")]),s("li",null,[e("11 bits: An 11-bit number is a binary sequence of 11 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"11")])]),s("annotation",{encoding:"application/x-tex"},"2^{11}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"11")])])])])])])])])])])]),e(" (2,048) different values. This is often used in computer systems for encoding small integers, such as color values in images.")]),s("li",null,[e("52 bits: A 52-bit number is a binary sequence of 52 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"52")])]),s("annotation",{encoding:"application/x-tex"},"2^{52}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"52")])])])])])])])])])])]),e(" (4,503,599,627,370,496) different values. This is often used for representing the significand or mantissa portion of a floating-point number in computer systems.")])])],-1),k=a("",37);function A(D,F,B,f,x,_){const n=p("Badge");return l(),o("div",null,[c,s("h2",d,[e("1-1-1: Numbers "),i(n,{type:"danger",text:"must know"}),e(),h]),u,m,y,b,g,C,v,w,k])}const E=t(r,[["render",A]]);export{T as __pageData,E as default};