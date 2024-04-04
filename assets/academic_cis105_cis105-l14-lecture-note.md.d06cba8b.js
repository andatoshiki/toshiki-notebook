import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.250b3e56.js";import{_ as a,o as l,c as s,H as c,k as e,a as i,Q as n}from"./chunks/framework.b7580407.js";import"./chunks/commonjsHelpers.725317a4.js";const S=JSON.parse('{"title":"CIS105: Computer Applications & Information Systems Lect. 14","description":"","frontmatter":{},"headers":[],"relativePath":"academic/cis105/cis105-l14-lecture-note.md","filePath":"academic/cis105/cis105-l14-lecture-note.md","lastUpdated":1712252858000}'),r={name:"academic/cis105/cis105-l14-lecture-note.md"},d=e("h1",{id:"cis105-computer-applications-information-systems-lect-14",tabindex:"-1"},[i("CIS105: Computer Applications & Information Systems Lect. 14 "),e("a",{class:"header-anchor",href:"#cis105-computer-applications-information-systems-lect-14","aria-label":'Permalink to "CIS105: Computer Applications & Information Systems Lect. 14"'},"​")],-1),p=n('<h2 id="chapter-14-more-sql-statement" tabindex="-1">Chapter 14: More SQL Statement <a class="header-anchor" href="#chapter-14-more-sql-statement" aria-label="Permalink to &quot;Chapter 14: More SQL Statement&quot;">​</a></h2><h3 id="_14-1-statement-review" tabindex="-1">14.1: Statement Review <a class="header-anchor" href="#_14-1-statement-review" aria-label="Permalink to &quot;14.1: Statement Review&quot;">​</a></h3><ul><li><code>SELECT</code>: What <strong>fields</strong> (column) you want <ul><li><code>fieldname</code>: If the name is used in only one table</li></ul></li><li><code>FROM</code>: What table or tables contain the fields</li><li><code>ORDER BY</code>: Sorting</li><li><code>DISTINCT</code>: Use after <code>SELECT</code> when you only want to show each vale of the selected field(s) once</li><li><code>LIMIT</code>: Use when you want to limit the number of records produced</li></ul><h3 id="_14-2-new-sql-statements" tabindex="-1">14.2: New SQL Statements <a class="header-anchor" href="#_14-2-new-sql-statements" aria-label="Permalink to &quot;14.2: New SQL Statements&quot;">​</a></h3><ul><li><p><code>WHERE</code>: Applies conditions, filters</p><ul><li><p><code>WHERE</code> clause conditions follow a pattern: field + comparison operator + value</p></li><li><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">WHERE</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">crime</span><span style="color:#ADBAC7;">.</span><span style="color:#6CB6FF;">iucr_no</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">420</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">crime</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">iucr_no</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">420</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul></li><li><p>Comparison Operators:</p><ul><li><code>&gt;</code> : Returns all records larger than the specified value</li><li><code>&gt;=</code>: Returns all records that are at least as large as the specified value (including the value)</li><li><code>&lt;</code> : Returns all records smaller than the specified value</li><li><code>&lt;=</code>: Returns all records that are at least as small as the specified value (including the value)</li><li><code>=</code> : Returns all records that are exactly equal to the specified value</li><li><code>&lt;&gt;</code>: Returns all records that are not equal to the specified value</li></ul></li><li><p><code>NULL</code>: An empty value</p></li><li><p><code>NOT</code>: Can be used to create a condition that reverses the logic of any condition</p><ul><li>Similar logic to the <code>NOT</code> function in Excel</li></ul></li><li><p><code>AND</code>: Both conditions must be met for row to be included in query</p></li><li><p><code>OR</code>: Used to combine criteria when we want our results to mach any criteria</p></li><li><p><code>BETWEEN</code>: Shorthand way to include values in a range</p></li><li><p><code>IN</code>: Shorthand way to include values in a range</p></li><li><p><code>LIKE</code>: Use this statement when you aren&#39;t sure of the values in a record</p></li><li><p><code>%</code>: any combination of characters</p><ul><li><code>%Keyword</code>: ends with keyword</li><li><code>\uFEFF\uFEFF%Keyword%</code>: looks for %keyword% anywhere in the record</li><li><code>Keyword%</code>: starts with keyword</li></ul></li><li><p><code>-</code> substitutes for any single character</p><ul><li><p>&#39;<code>t_p</code>&#39; would return &#39;<code>tip</code>&#39;, &#39;<code>tap</code>&#39;, or &#39;<code>top</code>&#39;&#39;; but not &#39;<code>stop</code>&#39;</p></li><li><p>&#39;<code>p_st</code>&quot; would return &#39;<code>past</code>&quot;&#39;, but not &#39;<code>paste</code>&#39;</p></li><li><p><code>&#39;h__s_n&#39;</code> would return &#39;<code>hanson</code>&#39;, &#39;hensen&#39;, or &#39;hansen&#39;; but not &#39;harrison&#39; (note that</p></li></ul></li></ul><p>&#39;h%s_n&#39; would return &#39;harrison&#39;</p><h3 id="_14-3-rules-to-remember" tabindex="-1">14.3: Rules to Remember <a class="header-anchor" href="#_14-3-rules-to-remember" aria-label="Permalink to &quot;14.3: Rules to Remember&quot;">​</a></h3><ul><li>To combine <code>AND</code> and <code>OR</code> statements, you must follow the order of operations (<code>AND</code> 1st, <code>OR</code> 2nd) <ul><li>If <code>OR</code> must be first, use <code>()</code></li></ul></li><li>All words must be in between <code>(&#39;_&#39;)</code>, <code>(&quot;_&quot;)</code><ul><li>If your value contains a quotation, use double quotation or a <code>/</code></li><li>All <code>#s</code> is left as-is</li></ul></li></ul>',8);function u(h,m,f,y,_,b){const o=t;return l(),s("div",null,[d,c(o,{readTime:"2",words:"370"}),p])}const g=a(r,[["render",u]]);export{S as __pageData,g as default};
