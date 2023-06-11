import{_ as e,c as s,o as a,R as n}from"./chunks/framework.ade46834.js";const g=JSON.parse('{"title":"File Name Conventions","description":"","frontmatter":{},"headers":[],"relativePath":"development/file-naming-convention.md","filePath":"development/file-naming-convention.md","lastUpdated":1686507725000}'),i={name:"development/file-naming-convention.md"},l=n(`<h1 id="file-name-conventions" tabindex="-1">File Name Conventions <a class="header-anchor" href="#file-name-conventions" aria-label="Permalink to &quot;File Name Conventions&quot;">​</a></h1><p>A collection of guidelines for writing file names used in web projects.</p><h2 id="possible-characters" tabindex="-1">Possible characters <a class="header-anchor" href="#possible-characters" aria-label="Permalink to &quot;Possible characters&quot;">​</a></h2><h3 id="use-dashes-as-delimiters" tabindex="-1">Use dashes as delimiters <a class="header-anchor" href="#use-dashes-as-delimiters" aria-label="Permalink to &quot;Use dashes as delimiters&quot;">​</a></h3><ul><li>You should use dashes (-) as delimiters.</li><li>Periods are allowed in some cases, such as for languages and conditions.</li><li>Never use spaces or underscores. Spaces are converted to %20 in URLs or can break an URL when shared. Underscores are difficult to see when the file name is displayed as an underlined link. Although the use of underscores does not impact your ranking that much, <a href="https://www.youtube.com/watch?v=AQcSFsQyct8" target="_blank" rel="noreferrer">Google advices not to use underscores</a>.</li><li>Exceptions apply for functional requirements, such as for <a href="http://sass-lang.com/guide#topic-4" target="_blank" rel="noreferrer">Sass partials</a>. A leading underscore informs the Sass compiler a file is only a partial file and should never be generated into a stand alone CSS file.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">file-name-with-dashes.en.min.html</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">file-name-with-dashes.en.min.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="do-not-use-special-characters" tabindex="-1">Do not use special characters <a class="header-anchor" href="#do-not-use-special-characters" aria-label="Permalink to &quot;Do not use special characters&quot;">​</a></h3><p>Avoid using non-alphanumeric characters in file names, such as: &#39;<code>*</code>&#39; &#39;<code>:</code>&#39; &#39;<code>\\</code>&#39; &#39;<code>/</code>&#39; &#39;<code>&lt;</code>&#39; &#39;<code>&gt;</code>&#39; &#39;<code>|</code>&#39; &#39;<code>&quot;</code>&#39; &#39;<code>!</code>&#39; &#39;<code>?</code>&#39; &#39;<code>[</code>&#39; &#39;<code>]</code>&#39; &#39;<code>;</code>&#39; &#39;<code>=</code>&#39; &#39;<code>+</code>&#39; &#39;<code>&amp;</code>&#39; &#39;<code>£</code>&#39; &#39;<code>$</code>&#39; &#39;<code>€</code>&#39; &#39;<code>%</code>&#39; or &#39;<code>,</code>&#39;. These characters can have special meaning in programming languages or can cause problems with different operating systems.</p><h3 id="use-lowercase-never-uppercase" tabindex="-1">Use lowercase, never uppercase <a class="header-anchor" href="#use-lowercase-never-uppercase" aria-label="Permalink to &quot;Use lowercase, never uppercase&quot;">​</a></h3><p>We should always consider URLs as case-sensitive according to <a href="http://www.w3.org/TR/WD-html40-970708/htmlweb.html" target="_blank" rel="noreferrer">W3.org</a>. Therefore, use lowercase to reduces errors when typing URLs.</p><h2 id="write-sections-of-a-file-name-in-a-consistent-order" tabindex="-1">Write sections of a file name in a consistent order <a class="header-anchor" href="#write-sections-of-a-file-name-in-a-consistent-order" aria-label="Permalink to &quot;Write sections of a file name in a consistent order&quot;">​</a></h2><p>Sections should be written in this order:</p><ol><li>Description</li><li>Number</li><li>Date</li><li>Target device, image size, pixel density</li><li>Version number</li><li>Status</li><li>Language code</li><li>File conditions</li></ol><p><strong>Possible combinations</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description-01-20150102-palm-1.0b-draft.en.min.js /* extreme combination */</span></span>
<span class="line"><span style="color:#839496;">description.min.js</span></span>
<span class="line"><span style="color:#839496;">description.en.html</span></span>
<span class="line"><span style="color:#839496;">description-01.jpg</span></span>
<span class="line"><span style="color:#839496;">description-02.jpg</span></span>
<span class="line"><span style="color:#839496;">description-1024x768_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-desk_2x.jpg</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description-01-20150102-palm-1.0b-draft.en.min.js /* extreme combination */</span></span>
<span class="line"><span style="color:#657B83;">description.min.js</span></span>
<span class="line"><span style="color:#657B83;">description.en.html</span></span>
<span class="line"><span style="color:#657B83;">description-01.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-02.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-1024x768_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-desk_2x.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="write-description-for-developers-and-users" tabindex="-1">Write description for developers and users <a class="header-anchor" href="#write-description-for-developers-and-users" aria-label="Permalink to &quot;Write description for developers and users&quot;">​</a></h3><p>Don&#39;t be afraid to write long informative file names. Few people type a file name manually and most operating systems support <a href="http://en.wikipedia.org/wiki/Comparison_of_file_systems" target="_blank" rel="noreferrer">255 characters</a>. But only add information that makes it easy for users and developers to recognize files from one another at a glance. For the description use information such as:</p><ul><li>type of data</li><li>project name or acronym</li><li>subjects</li><li>people&#39;s names</li><li>characteristics</li><li>location</li></ul><blockquote><p><strong>Give your images detailed, informative filenames</strong> The filename can give Google clues about the subject matter of the image. Try to make your filename a good description of the subject matter of the image. For example, my-new-black-kitten.jpg is a lot more informative than IMG00023.JPG. Descriptive filenames can also be useful to users: If we&#39;re unable to find suitable text in the page on which we found the image, we&#39;ll use the filename as the image&#39;s snippet in our search results. - <a href="https://support.google.com/webmasters/answer/114016?hl=en" target="_blank" rel="noreferrer">Google, 2015, Image publishing guidelines</a></p></blockquote><h4 id="keep-people-s-names-compact" tabindex="-1">Keep people&#39;s names compact <a class="header-anchor" href="#keep-people-s-names-compact" aria-label="Permalink to &quot;Keep people&#39;s names compact&quot;">​</a></h4><p>Sometimes you want to include the name of a person in the file name, e.g. the author or the person in the photo.</p><ul><li>Write names without word delimiters.</li><li>Only write initials for the first name and write the last name in full. There are two exceptions: (1) when the last name or final file name is very long you may use initials for the last name; (2) when there is already a person with the same combination, you may write the first name in full.</li><li>If people have exactly the same name written in full, you can add a number: firstnamelastname2.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">bvandebiezen.jpg</span></span>
<span class="line"><span style="color:#839496;">shoogenhout.jpg</span></span>
<span class="line"><span style="color:#839496;">a-very-long-description-with-name-bvdb.jpg</span></span>
<span class="line"><span style="color:#839496;">asmith.jpg</span></span>
<span class="line"><span style="color:#839496;">adamsmith.jpg</span></span>
<span class="line"><span style="color:#839496;">adamsmith2.jpg</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">bvandebiezen.jpg</span></span>
<span class="line"><span style="color:#657B83;">shoogenhout.jpg</span></span>
<span class="line"><span style="color:#657B83;">a-very-long-description-with-name-bvdb.jpg</span></span>
<span class="line"><span style="color:#657B83;">asmith.jpg</span></span>
<span class="line"><span style="color:#657B83;">adamsmith.jpg</span></span>
<span class="line"><span style="color:#657B83;">adamsmith2.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="use-two-or-more-digits-to-distinguish-sequential-files-with-the-same-description" tabindex="-1">Use two or more digits to distinguish sequential files with the same description <a class="header-anchor" href="#use-two-or-more-digits-to-distinguish-sequential-files-with-the-same-description" aria-label="Permalink to &quot;Use two or more digits to distinguish sequential files with the same description&quot;">​</a></h3><ul><li>Start number with a dash as a delimiter.</li><li>Add a zero to single digit numbers, e.g. &#39;01&#39; instead of &#39;1&#39;.</li><li>Numbers may also be placed before the description if needed. A dash will still be used as delimiter with the description.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description-01.jpg</span></span>
<span class="line"><span style="color:#839496;">description-02.jpg</span></span>
<span class="line"><span style="color:#839496;">description-03.jpg</span></span>
<span class="line"><span style="color:#839496;">description-04.jpg</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">01-description.jpg</span></span>
<span class="line"><span style="color:#839496;">02-description.jpg</span></span>
<span class="line"><span style="color:#839496;">03-description.jpg</span></span>
<span class="line"><span style="color:#839496;">04-description.jpg</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description-01.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-02.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-03.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-04.jpg</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">01-description.jpg</span></span>
<span class="line"><span style="color:#657B83;">02-description.jpg</span></span>
<span class="line"><span style="color:#657B83;">03-description.jpg</span></span>
<span class="line"><span style="color:#657B83;">04-description.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="keep-dates-or-date-ranges-compact-and-start-with-year" tabindex="-1">Keep dates or date ranges compact and start with year <a class="header-anchor" href="#keep-dates-or-date-ranges-compact-and-start-with-year" aria-label="Permalink to &quot;Keep dates or date ranges compact and start with year&quot;">​</a></h3><ul><li>Write dates without delimiters.</li><li>Always use four digits for years, two digits for months and two digits for days.</li><li>Start with year, then month, and end with day if available: yyyymmdd, yyyymm, or yyyy. This makes sure similar file names are sorted by date when sorted alphabetically.</li><li>Use a double dash to separate two dates describing an interval: yyyy--yyyy. Start with the earliest date.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description-20150401.php</span></span>
<span class="line"><span style="color:#839496;">description-201504.php</span></span>
<span class="line"><span style="color:#839496;">description-2015.php</span></span>
<span class="line"><span style="color:#839496;">description-2000--2010.php</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description-20150401.php</span></span>
<span class="line"><span style="color:#657B83;">description-201504.php</span></span>
<span class="line"><span style="color:#657B83;">description-2015.php</span></span>
<span class="line"><span style="color:#657B83;">description-2000--2010.php</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>See <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank" rel="noreferrer">&#39;ISO 8601&#39;</a> for further reading.</p><h3 id="use-special-modifiers-for-target-devices-image-sizes-or-media-queries-and-pixel-densities" tabindex="-1">Use special modifiers for target devices, image sizes or media queries, and pixel densities. <a class="header-anchor" href="#use-special-modifiers-for-target-devices-image-sizes-or-media-queries-and-pixel-densities" aria-label="Permalink to &quot;Use special modifiers for target devices, image sizes or media queries, and pixel densities.&quot;">​</a></h3><p>Modifiers are inspired by <a href="https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/LoadingResources/ImageSoundResources/ImageSoundResources.html#//apple_ref/doc/uid/10000051i-CH7-SW1" target="_blank" rel="noreferrer">Apple iOS naming conventions</a>. There are some differences. Apple uses &#39;<code>@</code>&#39;as a delimiter for the section indicating higher resolution images, for example &#39;<code>@2x</code>&#39; for retina images. Because &#39;<code>@</code>&#39; is a reserved character and can create problems, we use <a href="http://bourbon.io/docs/#retina-image" target="_blank" rel="noreferrer">Bourbon&#39;s convention</a>: an underscore. Also, Apple uses a tilde (<code>~</code>) as a delimiter for a section indicating specific devices. Because also a tilde can create problems, we suggest to simply use a dash.</p><ul><li>Order should be: (<code>1</code>) target device or media query, (<code>2</code>) size, (<code>3</code>) pixel density.</li><li>Start target device or media queries with a dash (<code>-</code>) as delimiter.</li><li>Start image sizes with a dash (<code>-</code>) as delimiter.</li><li>Start pixel density with an underscore (<code>_</code>) as delimiter, for example &#39;<code>_2x</code>&#39; or &#39;<code>_3x</code>&#39;.</li><li>When only a width or height is available or applicable, add a &#39;<code>w</code>&#39; for width or &#39;<code>h</code>&#39; for height directly after the the amount of pixels.</li><li>When both measurements are available, do not add a &#39;<code>w</code>&#39; or &#39;h&#39; and separate the width and height with an &#39;<code>x</code>&#39;.</li><li>When both the width and height should not exceed a dimension but the images should keep the original aspect ratio, add a &#39;<code>max</code>&#39; (maximum) after the amount of pixels.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-lap.jpg</span></span>
<span class="line"><span style="color:#839496;">description-desk.jpg</span></span>
<span class="line"><span style="color:#839496;">description-lap_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-palm-1024w_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-iphone5-568h_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-palm-1024x768_2x.jpg</span></span>
<span class="line"><span style="color:#839496;">description-40max.jpg</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-lap.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-desk.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-lap_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-palm-1024w_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-iphone5-568h_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-palm-1024x768_2x.jpg</span></span>
<span class="line"><span style="color:#657B83;">description-40max.jpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="use-version-numbers-if-available" tabindex="-1">Use version numbers if available <a class="header-anchor" href="#use-version-numbers-if-available" aria-label="Permalink to &quot;Use version numbers if available&quot;">​</a></h3><ul><li>Start version with a dash (<code>-</code>) as delimiter.</li><li>Use periods (<code>.</code>) to separate point releases.</li><li>Always add trailing zeros to major releases, e.g. &#39;<code>2.0</code>&#39; instead of &#39;<code>2</code>&#39;.</li><li>Types, such as &#39;<code>a</code>&#39; (alpha), &#39;<code>b</code>&#39; (beta), &#39;rc1&#39; (release candidate 1) can be added without delimiters.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description-0.5.js</span></span>
<span class="line"><span style="color:#839496;">description-1.0b.js</span></span>
<span class="line"><span style="color:#839496;">description-1.0rc1.js</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description-0.5.js</span></span>
<span class="line"><span style="color:#657B83;">description-1.0b.js</span></span>
<span class="line"><span style="color:#657B83;">description-1.0rc1.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="add-status-when-needed" tabindex="-1">Add status when needed <a class="header-anchor" href="#add-status-when-needed" aria-label="Permalink to &quot;Add status when needed&quot;">​</a></h3><ul><li>You can optionally add a file status such as &#39;<code>draft</code>&#39; and &#39;<code>published</code>&#39;.</li><li>Start status with a dash.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description-draft.md</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description-draft.md</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="add-language-code-only-when-different-languages-are-available" tabindex="-1">Add language code only when different languages are available <a class="header-anchor" href="#add-language-code-only-when-different-languages-are-available" aria-label="Permalink to &quot;Add language code only when different languages are available&quot;">​</a></h3><ul><li>Use a period to separate the language code from the rest of the file name.</li><li>Use <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank" rel="noreferrer">ISO 639-1</a>, two-letter codes, for languages.</li><li>Only add languages when different languages are available.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description.nl.txt</span></span>
<span class="line"><span style="color:#839496;">description.en.txt</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description.nl.txt</span></span>
<span class="line"><span style="color:#657B83;">description.en.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="add-file-conditions-just-before-the-file-extension" tabindex="-1">Add file conditions just before the file extension <a class="header-anchor" href="#add-file-conditions-just-before-the-file-extension" aria-label="Permalink to &quot;Add file conditions just before the file extension&quot;">​</a></h3><ul><li>The file condition should be the last part, just before the file extension.</li><li>Use a period (<code>.</code>) to separate the condition from the rest of the file name.</li><li>Use periods (<code>.</code>) as a delimiter for different conditions.</li></ul><p><strong>Right:</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">description.min.js</span></span>
<span class="line"><span style="color:#839496;">description.custom1234.min.js</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">description.min.js</span></span>
<span class="line"><span style="color:#657B83;">description.custom1234.min.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="rewrite-original-file-names-not-following-conventions" tabindex="-1">Rewrite original file names not following conventions <a class="header-anchor" href="#rewrite-original-file-names-not-following-conventions" aria-label="Permalink to &quot;Rewrite original file names not following conventions&quot;">​</a></h2><p>It is not preferred to keep file names in it&#39;s original format if it doesn&#39;t match your file name conventions. But in some cases it is easier to keep the file name untouched. Sometimes you want to easily replace a file with a newer one from the original source in the future.</p>`,57),o=[l];function r(t,p,c,d,h,m){return a(),s("div",null,o)}const b=e(i,[["render",r]]);export{g as __pageData,b as default};