import{_ as t,c as l,z as s,a as e,E as o,R as a,o as i,G as p}from"./chunks/framework.ade46834.js";const T=JSON.parse('{"title":"1-1: Values","description":"Chapter 1-1 notes on values","frontmatter":{"title":"1-1: Values","description":"Chapter 1-1 notes on values"},"headers":[],"relativePath":"javascript/notes/1/1-1.md","filePath":"javascript/notes/1/1-1.md","lastUpdated":1686500894000}'),r={name:"javascript/notes/1/1-1.md"},c=s("h1",{id:"_1-1-values",tabindex:"-1"},[e("1-1: Values "),s("a",{class:"header-anchor",href:"#_1-1-values","aria-label":'Permalink to "1-1: Values"'},"​")],-1),d={id:"_1-1-1-numbers",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#_1-1-1-numbers","aria-label":'Permalink to "1-1-1: Numbers <Badge type="danger" text="must know" />"'},"​",-1),h=a(`<p>Values of the <em>number</em> type are numeric values, normally written as follows,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#D33682;">144</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#D33682;">144</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>Put this into a program, it will cause the number 144 to come into existence inside the computer, with the following bash script, 144 might looks like this in bits,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#D33682;">0100000001100010000000000000000000000000000000000000000000000000</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#D33682;">0100000001100010000000000000000000000000000000000000000000000000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>With the following bash script, 144 will be converted into binary values in integer form,</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">ip1</span><span style="color:#859900;">=</span><span style="color:#D33682;">144</span><span style="color:#839496;"> </span><span style="color:#586E75;font-style:italic;"># defines a variable named ip1, with the value of 10</span></span>
<span class="line"><span style="color:#268BD2;">echo</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;obase=2;</span><span style="color:#268BD2;">$ip1</span><span style="color:#2AA198;">&quot;</span><span style="color:#839496;"> </span><span style="color:#859900;">|</span><span style="color:#839496;"> </span><span style="color:#268BD2;">bc</span><span style="color:#839496;"> </span><span style="color:#586E75;font-style:italic;"># convert the value to binary via bc</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">ip1</span><span style="color:#859900;">=</span><span style="color:#D33682;">144</span><span style="color:#657B83;"> </span><span style="color:#93A1A1;font-style:italic;"># defines a variable named ip1, with the value of 10</span></span>
<span class="line"><span style="color:#268BD2;">echo</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;obase=2;</span><span style="color:#268BD2;">$ip1</span><span style="color:#2AA198;">&quot;</span><span style="color:#657B83;"> </span><span style="color:#859900;">|</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">bc</span><span style="color:#657B83;"> </span><span style="color:#93A1A1;font-style:italic;"># convert the value to binary via bc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>The variable <code>ip1</code> is assigned the value 144.</li><li>The <code>echo</code> command prints out the string &quot;obase=2;144&quot;, where &quot;obase=2;&quot; is an argument for <code>bc</code> that tells it to output the result in base 2 (binary), and &quot;10&quot; is the decimal number we want to convert.</li><li>The output of the <code>echo</code> command is piped (using the <code>|</code> character) to <code>bc</code>, which takes the input &quot;<code>obase=2;144</code>&quot; and interprets it as a command to convert the number 10 to binary.</li><li>Finally, the binary equivalent of 144, which is &quot;10010000&quot;, is printed to the terminal.</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>But the standard describes JavaScript numbers as 64-bit floating-point values, which indicates fractions and exponents are available.</p></div>`,4),m=s("p",null,[e("Not all whole numbers "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"19")])]),s("annotation",{encoding:"application/x-tex"},"10^{19}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"19")])])])])])])])])])])]),e(" fit in a JavaScript number. There are also negative numbers, so one of the bits has to be used to store the sign of the number.")],-1),y=s("ul",null,[s("li",null,"11 bits are used to store the position of the decimal dot within the number."),s("li",null,[e("52 bits, any whole number less than "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"52")])]),s("annotation",{encoding:"application/x-tex"},"2^{52}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"52")])])])])])])])])])])]),e(", which is more than "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"15")])]),s("annotation",{encoding:"application/x-tex"},"10^{15}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"15")])])])])])])])])])])]),e(" will safely fit in a JavaScript number, numbers we are using stay well below that.")])],-1),g=a('<p>Fractional numbers are written by using a dot,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#D33682;">9.81</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#D33682;">9.81</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>For extreme huge or tiny numbers, we can also use &quot;scientific&quot; notion by adding an <code>e</code>, followed by the exponent of the number,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#D33682;">2.998e8</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#D33682;">2.998e8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',4),b=s("p",null,[e("This indicates "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"2.998"),s("mo",null,"×"),s("mn",null,"1"),s("msup",null,[s("mn",null,"0"),s("mn",null,"8")]),s("mo",null,"="),s("mn",null,"29980000")]),s("annotation",{encoding:"application/x-tex"},"2.998 \\times 10^8 = 29980000")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2.998"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"8")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"29980000")])])]),e(".")],-1),v=s("p",null,[e("Calculations with whole numbers (referred as "),s("em",null,"integers"),e(") that fits into 52 bits are guaranteed to be always precise, but calculation with fraction numbers are generally not.")],-1),w=s("ul",null,[s("li",null,[e("Such as "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"π")]),s("annotation",{encoding:"application/x-tex"},"\\pi")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π")])])]),e(" cannot be precisely expressed by a finite amount of decimal digits, "),s("strong",null,"thus many numbers lose some precision when only 64 bits are available to store them.")])],-1),k=s("details",{class:"details custom-block"},[s("summary",null,"1-1-1: Numbers review"),s("ul",null,[s("li",null,[e("64 bits: A 64-bit number is a binary sequence of 64 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"64")])]),s("annotation",{encoding:"application/x-tex"},"2^{64}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"64")])])])])])])])])])])]),e(" (18,446,744,073,709,551,616) different values. This is commonly used for representing memory addresses and integers with large values in computer systems.")]),s("li",null,[e("11 bits: An 11-bit number is a binary sequence of 11 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"11")])]),s("annotation",{encoding:"application/x-tex"},"2^{11}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"11")])])])])])])])])])])]),e(" (2,048) different values. This is often used in computer systems for encoding small integers, such as color values in images.")]),s("li",null,[e("52 bits: A 52-bit number is a binary sequence of 52 bits, which can represent "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"52")])]),s("annotation",{encoding:"application/x-tex"},"2^{52}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"52")])])])])])])])])])])]),e(" (4,503,599,627,370,496) different values. This is often used for representing the significand or mantissa portion of a floating-point number in computer systems.")])])],-1),f=a(`<h2 id="_1-1-2-arithmetic" tabindex="-1">1-1-2: Arithmetic <a class="header-anchor" href="#_1-1-2-arithmetic" aria-label="Permalink to &quot;1-1-2: Arithmetic&quot;">​</a></h2><p>The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them, the following is an example of calculation in JavaScript.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#D33682;">100</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">4</span><span style="color:#839496;"> </span><span style="color:#859900;">*</span><span style="color:#839496;"> </span><span style="color:#D33682;">11</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#D33682;">100</span><span style="color:#657B83;"> </span><span style="color:#859900;">+</span><span style="color:#657B83;"> </span><span style="color:#D33682;">4</span><span style="color:#657B83;"> </span><span style="color:#859900;">*</span><span style="color:#657B83;"> </span><span style="color:#D33682;">11</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>The <code>+</code> and <code>*</code> symbols are called <em>operators</em>.</p><ul><li><code>+</code> apparently stands for addition while <code>*</code> stands for multiplication.</li></ul></li><li><p>This expression indicates the multiplication takes place first then the adding of 100 comes next as a regard to <a href="https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-exponents-and-order-of-operations/cc-6th-order-of-operations/v/more-complicated-order-of-operations-example#:~:text=The%20order%20of%20operations%20is,(from%20left%20to%20right)." target="_blank" rel="noreferrer">PEMDAS</a> rules (Order of Operations).</p></li></ul><p>But we can still overwrite the steps of operation using a parenthesis around the addition,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">;(</span><span style="color:#D33682;">100</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">4</span><span style="color:#839496;">) </span><span style="color:#859900;">*</span><span style="color:#839496;"> </span><span style="color:#D33682;">11</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">;(</span><span style="color:#D33682;">100</span><span style="color:#657B83;"> </span><span style="color:#859900;">+</span><span style="color:#657B83;"> </span><span style="color:#D33682;">4</span><span style="color:#657B83;">) </span><span style="color:#859900;">*</span><span style="color:#657B83;"> </span><span style="color:#D33682;">11</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>For subtraction, there is the <code>-</code> operator, and division can be done with <code>/</code>. When operators appear together without parentheses, they are applied is determined by the <em>precedence</em> of the operators.</p><ul><li>When multiple operators with the same precedence appear next to each other (as <code>1-2+1</code>), they are applied left to right (refers to PEMDAS).</li><li>Precedence: Priorities.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>When is doubt, don&#39;t care about precedence, just add parentheses for order of operation.</p></div><p>There is one more arithmetic operator, which is the <code>%</code> percent sign used to represent the <em>modulo</em> operation. <strong>The term &quot;X modulo Y&quot; is defined as the remainder of dividing X by Y.</strong></p><ul><li>For example, <code>314 % 100</code> is <code>14</code>, <code>10 % 3</code> is <code>1</code>, and <code>144 % 12</code> is 0 because there are no remainders.</li><li>Modulo&#39;s precedence is the same as that of multiplication and division.</li></ul><details class="details custom-block"><summary>1-2: Arithmetic review</summary><ul><li>All of the operators in JavaScript follows precedence rules, or referred as PEMDAS in conventional math. <ul><li><code>+</code> and <code>-</code> has the same lowest precedence.</li><li><code>*</code> , <code>/</code> and <code>%</code> has the same medium precedence.</li><li><code>()</code> has the highest precedence, followed on with brackets.</li></ul></li><li>The symbol <code>%</code> refers to &quot;modulo&quot;, in mathematical reading, we say &quot;X modulo Y&quot; is the remainder of X over Y.</li></ul></details><h2 id="_1-1-3-strings" tabindex="-1">1-1-3: Strings <a class="header-anchor" href="#_1-1-3-strings" aria-label="Permalink to &quot;1-1-3: Strings&quot;">​</a></h2><p>The next data type is the <em>string</em>. Its use is not as evident from its name as with numbers, it also fulfills a very basic role.</p><ul><li>Strings are used to represent text.</li><li>Strings are usually written by enclosing the contents with quotes.</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#39;</span></span>
<span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#39;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#39;</span></span>
<span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>Both single and double quotes</strong> can be used to mark strings</p><ul><li>As long as the quotes at the start and the end of the string match.</li></ul></div><p>Almost anything can be put between quotes, and JavaScript will make a string value out of it. But the followings are tricky to be put between quotes.</p><ul><li><strong>Newlines</strong>: The things we get when we press <kbd>enter</kbd> on keyboard. We uses <code>\\n</code> to represent.</li><li><strong>New tab</strong>: Similarly like newlines, <code>\\t</code> indicates a new tab being indented.</li></ul><p>Take the following string as an example,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet,</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;"> consectetur adipiscing elit.&#39;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&#39;Lorem ipsum dolor sit amet,</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;"> consectetur adipiscing elit.&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The following will be the rendered output,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">Lorem</span><span style="color:#839496;"> </span><span style="color:#268BD2;">ipsum</span><span style="color:#839496;"> </span><span style="color:#268BD2;">dolor</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sit</span><span style="color:#839496;"> </span><span style="color:#268BD2;">amet</span><span style="color:#839496;">,</span></span>
<span class="line"><span style="color:#268BD2;">consectetur</span><span style="color:#839496;"> </span><span style="color:#268BD2;">adipiscing</span><span style="color:#839496;"> </span><span style="color:#268BD2;">elit</span><span style="color:#839496;">.</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">Lorem</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">ipsum</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">dolor</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">sit</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">amet</span><span style="color:#657B83;">,</span></span>
<span class="line"><span style="color:#268BD2;">consectetur</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">adipiscing</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">elit</span><span style="color:#657B83;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>But the situations where we want a backslash in a string to just be a backslash instead of a special code. By using <code>\\\\</code> would render the &quot;just slash&quot; to <code>\\</code> on output, instead of a special character, as follows,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&quot;A newline character is written like </span><span style="color:#CB4B16;">\\&quot;\\\\</span><span style="color:#2AA198;">n</span><span style="color:#CB4B16;">\\&quot;</span><span style="color:#2AA198;">.&quot;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&quot;A newline character is written like </span><span style="color:#CB4B16;">\\&quot;\\\\</span><span style="color:#2AA198;">n</span><span style="color:#CB4B16;">\\&quot;</span><span style="color:#2AA198;">.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p>Strings cannot be divided, multiplied, or subtracted, unlike integers. But the <code>+</code> operator can be used on the. It concatenates (glues) the two strings together, the following example will produce the string &quot;<code>concatenate</code>&quot;.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&#39;con&#39;</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;cat&#39;</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;e&#39;</span><span style="color:#839496;"> </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&#39;nate&#39;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&#39;con&#39;</span><span style="color:#657B83;"> </span><span style="color:#859900;">+</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;cat&#39;</span><span style="color:#657B83;"> </span><span style="color:#859900;">+</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;e&#39;</span><span style="color:#657B83;"> </span><span style="color:#859900;">+</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&#39;nate&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><details class="details custom-block"><summary>1-1-3: Strings review</summary><ul><li>Nearly everything could be put into strings in JavaScript</li><li>String could be wrapped with <code>&quot;&quot;</code> double quotation marks or <code>&#39;&#39;</code> single quotation marks.</li><li>There is a tricky situation in JavaScript&#39;s string, where <code>\\</code> backslash followed with a character are being introduced specially by the interpreter, such as <code>\\n</code> referred as newline, <code>\\t</code> referred as new tab. <ul><li><code>\\\\</code> double backslash will be rendered as a single <code>\\</code>.</li><li><code>\\&amp;</code> symbols followed after slash will not contain its original function such as connecting, but will be rendered as <code>&amp;</code> on output.</li></ul></li></ul></details><h3 id="_1-1-3-fr-further-reading" tabindex="-1">1-1-3-FR: Further Reading <a class="header-anchor" href="#_1-1-3-fr-further-reading" aria-label="Permalink to &quot;1-1-3-FR: Further Reading&quot;">​</a></h3><p>From the example given in the prior section with a lot of backslashes, it might be hard to understand the concept on at what time the slash will be rendered and when it will be considered as a special character starter.</p><p>The example is given as,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&quot;A newline character is written like </span><span style="color:#CB4B16;">\\&quot;\\\\</span><span style="color:#2AA198;">n</span><span style="color:#CB4B16;">\\&quot;</span><span style="color:#2AA198;">.&quot;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&quot;A newline character is written like </span><span style="color:#CB4B16;">\\&quot;\\\\</span><span style="color:#2AA198;">n</span><span style="color:#CB4B16;">\\&quot;</span><span style="color:#2AA198;">.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The rendered output will be on print,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#268BD2;">A</span><span style="color:#839496;"> </span><span style="color:#268BD2;">newline</span><span style="color:#839496;"> </span><span style="color:#268BD2;">character</span><span style="color:#839496;"> </span><span style="color:#268BD2;">is</span><span style="color:#839496;"> </span><span style="color:#268BD2;">written</span><span style="color:#839496;"> </span><span style="color:#268BD2;">like</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;">&quot;</span><span style="color:#839496;">.</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#268BD2;">A</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">newline</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">character</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">is</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">written</span><span style="color:#657B83;"> </span><span style="color:#268BD2;">like</span><span style="color:#657B83;"> </span><span style="color:#2AA198;">&quot;</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;">&quot;</span><span style="color:#657B83;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>the backslash character (<code>\\</code>) is used as an escape character to indicate that the following character(s) should be treated specially. In this case, the <code>&quot;\\n&quot;</code> sequence is an escape sequence that represents a newline character. The backslash before the <code>n</code> character tells the JavaScript interpreter that it should treat the <code>n</code> as a special character and not just as the letter &quot;n&quot;.</p><p>However, if we want to include an <strong>actual backslash character</strong> (<code>\\</code>), we will have to <strong>escape it</strong> by using to two backslashes <code>\\\\</code>, or else with one single slash the JavaScript interpreter will still determines it as an special operator, Thus <code>\\\\</code> will print <code>\\</code> on output.</p><ul><li><p><strong>But what about the quotation marks used within the quotation marks that wraps the string? Wouldn&#39;t JavaScript interpreter throw error?</strong></p><ul><li><p>In the given JavaScript string, the inner set of double quotation marks (<code>&quot;\\\\n&quot;</code>) is escaped using a backslash (<code>\\</code>) character. This tells the JavaScript interpreter to treat the inner double quotation marks as a regular character instead of a string delimiter.</p><p>So when the string is rendered on output, the backslash character will be removed and the inner set of quotation marks will be displayed as a regular character. The rendered string will look like this,</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#2AA198;">&#39;</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;">&#39;</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#2AA198;">&#39;</span><span style="color:#CB4B16;">\\n</span><span style="color:#2AA198;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The outer set of double quotation marks in the original string delimit the entire string and will be displayed as regular quotation marks.</p></li></ul></li></ul><blockquote><p><strong>Source</strong>: ChatGPT CA (Code Analysis)</p></blockquote>`,37);function A(B,_,q,x,D,C){const n=p("Badge");return i(),l("div",null,[c,s("h2",d,[e("1-1-1: Numbers "),o(n,{type:"danger",text:"must know"}),e(),u]),h,m,y,g,b,v,w,k,f])}const S=t(r,[["render",A]]);export{T as __pageData,S as default};
