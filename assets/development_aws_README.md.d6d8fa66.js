import{_ as e,c as a,o as s,R as o}from"./chunks/framework.f61376b9.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"development/aws/README.md","filePath":"development/aws/README.md","lastUpdated":1684755011000}'),n={name:"development/aws/README.md"},t=o('<p>The source of the main text is here, written with <a href="https://asciidoctor.org/" target="_blank" rel="noreferrer">asciidoctor</a>.</p><p>If you want to build the document from the source, follow these steps.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>Prerequisites:</p><ul><li><code>ruby</code></li><li><code>bundler</code></li></ul><p>Install ruby libraries:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">bundle</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--path</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor/bundle</span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#61AFEF;">bundle</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--path</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">vendor/bundle</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="build-the-document" tabindex="-1">Build the document <a class="header-anchor" href="#build-the-document" aria-label="Permalink to &quot;Build the document&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#FFCB6B;">./generate.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main.adoc</span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#61AFEF;">./generate.sh</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">main.adoc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This will generate HTML and PDF documents in the directory named <code>dist/</code>.</p><h2 id="source-structure" tabindex="-1">Source structure <a class="header-anchor" href="#source-structure" aria-label="Permalink to &quot;Source structure&quot;">​</a></h2><ul><li><code>main.adoc</code>: Main document</li><li><code>dist/</code>: Output document (both HTML and PDF) will be generated here</li><li><code>imgs/</code>: Put image files here</li><li><code>fonts/</code>, <code>pdf-style/</code>: Fonts and styles for PDF generation. Do not touch!</li><li><code>XXX.adoc</code>: One section per file</li></ul>',12),l=[t];function r(c,i,p,d,u,h){return s(),a("div",null,l)}const y=e(n,[["render",r]]);export{b as __pageData,y as default};
