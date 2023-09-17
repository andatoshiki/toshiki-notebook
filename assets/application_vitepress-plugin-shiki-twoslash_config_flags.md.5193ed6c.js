import{_ as s,c as n,o as a,R as l}from"./chunks/framework.ade46834.js";const d=JSON.parse('{"title":"Compiler Flags","description":"","frontmatter":{"title":"Compiler Flags"},"headers":[],"relativePath":"application/vitepress-plugin-shiki-twoslash/config/flags.md","filePath":"application/vitepress-plugin-shiki-twoslash/config/flags.md","lastUpdated":1694919393000}'),e={name:"application/vitepress-plugin-shiki-twoslash/config/flags.md"},p=l(`<h1 id="compiler-flags" tabindex="-1">Compiler Flags <a class="header-anchor" href="#compiler-flags" aria-label="Permalink to &quot;Compiler Flags&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki solarized-dark vp-code-dark"><code><span class="line"><span style="color:#839496;">// @allowJs</span></span>
<span class="line"><span style="color:#839496;">Allow JavaScript files to be a part of your program. Use the \`checkJS\` option to get errors from these files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @allowSyntheticDefaultImports</span></span>
<span class="line"><span style="color:#839496;">Allow &#39;import x from y&#39; when a module doesn&#39;t have a default export..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @allowUmdGlobalAccess</span></span>
<span class="line"><span style="color:#839496;">Allow accessing UMD globals from modules..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @allowUnreachableCode</span></span>
<span class="line"><span style="color:#839496;">Disable error reporting for unreachable code..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @allowUnusedLabels</span></span>
<span class="line"><span style="color:#839496;">Disable error reporting for unused labels..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @alwaysStrict</span></span>
<span class="line"><span style="color:#839496;">Ensure &#39;use strict&#39; is always emitted..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @assumeChangesOnlyAffectDirectDependencies</span></span>
<span class="line"><span style="color:#839496;">Have recompiles in projects that use \`incremental\` and \`watch\` mode assume that changes within a file will only affect files directly depending on it..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @baseUrl</span></span>
<span class="line"><span style="color:#839496;">Specify the base directory to resolve non-relative module names..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @charset</span></span>
<span class="line"><span style="color:#839496;">No longer supported. In early versions, manually set the text encoding for reading files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @checkJs</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting in type-checked JavaScript files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @composite</span></span>
<span class="line"><span style="color:#839496;">Enable constraints that allow a TypeScript project to be used with project references..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @declaration</span></span>
<span class="line"><span style="color:#839496;">Generate .d.ts files from TypeScript and JavaScript files in your project..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @declarationDir</span></span>
<span class="line"><span style="color:#839496;">Specify the output directory for generated declaration files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @declarationMap</span></span>
<span class="line"><span style="color:#839496;">Create sourcemaps for d.ts files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @diagnostics</span></span>
<span class="line"><span style="color:#839496;">Output compiler performance information after building..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @disableReferencedProjectLoad</span></span>
<span class="line"><span style="color:#839496;">Reduce the number of projects loaded automatically by TypeScript..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @disableSizeLimit</span></span>
<span class="line"><span style="color:#839496;">Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @disableSolutionSearching</span></span>
<span class="line"><span style="color:#839496;">Opt a project out of multi-project reference checking when editing..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @disableSourceOfProjectReferenceRedirect</span></span>
<span class="line"><span style="color:#839496;">Disable preferring source files instead of declaration files when referencing composite projects.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @downlevelIteration</span></span>
<span class="line"><span style="color:#839496;">Emit more compliant, but verbose and less performant JavaScript for iteration..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @emitBOM</span></span>
<span class="line"><span style="color:#839496;">Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @emitDeclarationOnly</span></span>
<span class="line"><span style="color:#839496;">Only output d.ts files and not JavaScript files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @emitDecoratorMetadata</span></span>
<span class="line"><span style="color:#839496;">Emit design-type metadata for decorated declarations in source files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @esModuleInterop</span></span>
<span class="line"><span style="color:#839496;">Emit additional JavaScript to ease support for importing CommonJS modules. This enables \`allowSyntheticDefaultImports\` for type compatibility..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @exactOptionalPropertyTypes</span></span>
<span class="line"><span style="color:#839496;">Interpret optional property types as written, rather than adding &#39;undefined&#39;..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @experimentalDecorators</span></span>
<span class="line"><span style="color:#839496;">Enable experimental support for TC39 stage 2 draft decorators..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @explainFiles</span></span>
<span class="line"><span style="color:#839496;">Print files read during the compilation including why it was included..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @extendedDiagnostics</span></span>
<span class="line"><span style="color:#839496;">Output more detailed compiler performance information after building..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @forceConsistentCasingInFileNames</span></span>
<span class="line"><span style="color:#839496;">Ensure that casing is correct in imports..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @generateCpuProfile</span></span>
<span class="line"><span style="color:#839496;">Emit a v8 CPU profile of the compiler run for debugging..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @importHelpers</span></span>
<span class="line"><span style="color:#839496;">Allow importing helper functions from tslib once per project, instead of including them per-file..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @importsNotUsedAsValues</span></span>
<span class="line"><span style="color:#839496;">Specify emit/checking behavior for imports that are only used for types.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @incremental</span></span>
<span class="line"><span style="color:#839496;">Enable incremental compilation.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @inlineSourceMap</span></span>
<span class="line"><span style="color:#839496;">Include sourcemap files inside the emitted JavaScript..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @inlineSources</span></span>
<span class="line"><span style="color:#839496;">Include source code in the sourcemaps inside the emitted JavaScript..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @isolatedModules</span></span>
<span class="line"><span style="color:#839496;">Ensure that each file can be safely transpiled without relying on other imports..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @jsx</span></span>
<span class="line"><span style="color:#839496;">Specify what JSX code is generated..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @jsxFactory</span></span>
<span class="line"><span style="color:#839496;">Specify the JSX factory function used when targeting React JSX emit, e.g. &#39;React.createElement&#39; or &#39;h&#39;.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @jsxFragmentFactory</span></span>
<span class="line"><span style="color:#839496;">Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. &#39;React.Fragment&#39; or &#39;Fragment&#39;..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @jsxImportSource</span></span>
<span class="line"><span style="color:#839496;">Specify module specifier used to import the JSX factory functions when using \`jsx: react-jsx*\`.\`.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @keyofStringsOnly</span></span>
<span class="line"><span style="color:#839496;">Make keyof only return strings instead of string, numbers or symbols. Legacy option..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @lib</span></span>
<span class="line"><span style="color:#839496;">Specify a set of bundled library declaration files that describe the target runtime environment..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @listEmittedFiles</span></span>
<span class="line"><span style="color:#839496;">Print the names of emitted files after a compilation..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @listFiles</span></span>
<span class="line"><span style="color:#839496;">Print all of the files read during the compilation..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @mapRoot</span></span>
<span class="line"><span style="color:#839496;">Specify the location where debugger should locate map files instead of generated locations..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @maxNodeModuleJsDepth</span></span>
<span class="line"><span style="color:#839496;">Specify the maximum folder depth used for checking JavaScript files from \`node_modules\`. Only applicable with \`allowJs\`..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @module</span></span>
<span class="line"><span style="color:#839496;">Specify what module code is generated..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @moduleResolution</span></span>
<span class="line"><span style="color:#839496;">Specify how TypeScript looks up a file from a given module specifier..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @newLine</span></span>
<span class="line"><span style="color:#839496;">Set the newline character for emitting files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noEmit</span></span>
<span class="line"><span style="color:#839496;">Disable emitting file from a compilation..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noEmitHelpers</span></span>
<span class="line"><span style="color:#839496;">Disable generating custom helper functions like \`__extends\` in compiled output..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noEmitOnError</span></span>
<span class="line"><span style="color:#839496;">Disable emitting files if any type checking errors are reported..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noErrorTruncation</span></span>
<span class="line"><span style="color:#839496;">Disable truncating types in error messages..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noFallthroughCasesInSwitch</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting for fallthrough cases in switch statements..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noImplicitAny</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting for expressions and declarations with an implied \`any\` type...</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noImplicitOverride</span></span>
<span class="line"><span style="color:#839496;">Add \`undefined\` to a type when accessed using an index..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noImplicitReturns</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting for codepaths that do not explicitly return in a function..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noImplicitThis</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting when \`this\` is given the type \`any\`..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noImplicitUseStrict</span></span>
<span class="line"><span style="color:#839496;">Disable adding &#39;use strict&#39; directives in emitted JavaScript files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noLib</span></span>
<span class="line"><span style="color:#839496;">Disable including any library files, including the default lib.d.ts..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noPropertyAccessFromIndexSignature</span></span>
<span class="line"><span style="color:#839496;">Enforces using indexed accessors for keys declared using an indexed type.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noResolve</span></span>
<span class="line"><span style="color:#839496;">Disallow \`import\`s, \`require\`s or \`\`s from expanding the number of files TypeScript should add to a project..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noStrictGenericChecks</span></span>
<span class="line"><span style="color:#839496;">Disable strict checking of generic signatures in function types..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noUncheckedIndexedAccess</span></span>
<span class="line"><span style="color:#839496;">Include &#39;undefined&#39; in index signature results.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noUnusedLocals</span></span>
<span class="line"><span style="color:#839496;">Enable error reporting when a local variables aren&#39;t read..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @noUnusedParameters</span></span>
<span class="line"><span style="color:#839496;">Raise an error when a function parameter isn&#39;t read.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @out</span></span>
<span class="line"><span style="color:#839496;">Deprecated setting. Use \`outFile\` instead..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @outDir</span></span>
<span class="line"><span style="color:#839496;">Specify an output folder for all emitted files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @outFile</span></span>
<span class="line"><span style="color:#839496;">Specify a file that bundles all outputs into one JavaScript file. If \`declaration\` is true, also designates a file that bundles all .d.ts output..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @paths</span></span>
<span class="line"><span style="color:#839496;">Specify a set of entries that re-map imports to additional lookup locations..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @plugins</span></span>
<span class="line"><span style="color:#839496;">List of language service plugins..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @preserveConstEnums</span></span>
<span class="line"><span style="color:#839496;">Disable erasing \`const enum\` declarations in generated code..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @preserveSymlinks</span></span>
<span class="line"><span style="color:#839496;">Disable resolving symlinks to their realpath. This correlates to the same flag in node..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @preserveWatchOutput</span></span>
<span class="line"><span style="color:#839496;">Disable wiping the console in watch mode.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @pretty</span></span>
<span class="line"><span style="color:#839496;">Enable color and formatting in output to make compiler errors easier to read.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @reactNamespace</span></span>
<span class="line"><span style="color:#839496;">Specify the object invoked for \`createElement\`. This only applies when targeting \`react\` JSX emit..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @removeComments</span></span>
<span class="line"><span style="color:#839496;">Disable emitting comments..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @resolveJsonModule</span></span>
<span class="line"><span style="color:#839496;">Enable importing .json files.</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @rootDir</span></span>
<span class="line"><span style="color:#839496;">Specify the root folder within your source files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @rootDirs</span></span>
<span class="line"><span style="color:#839496;">Allow multiple folders to be treated as one when resolving modules..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @skipDefaultLibCheck</span></span>
<span class="line"><span style="color:#839496;">Skip type checking .d.ts files that are included with TypeScript..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @skipLibCheck</span></span>
<span class="line"><span style="color:#839496;">Skip type checking all .d.ts files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @sourceMap</span></span>
<span class="line"><span style="color:#839496;">Create source map files for emitted JavaScript files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @sourceRoot</span></span>
<span class="line"><span style="color:#839496;">Specify the root path for debuggers to find the reference source code..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @strict</span></span>
<span class="line"><span style="color:#839496;">Enable all strict type-checking options..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @strictBindCallApply</span></span>
<span class="line"><span style="color:#839496;">Check that the arguments for \`bind\`, \`call\`, and \`apply\` methods match the original function..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @strictFunctionTypes</span></span>
<span class="line"><span style="color:#839496;">When assigning functions, check to ensure parameters and the return values are subtype-compatible..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @strictNullChecks</span></span>
<span class="line"><span style="color:#839496;">When type checking, take into account \`null\` and \`undefined\`..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @strictPropertyInitialization</span></span>
<span class="line"><span style="color:#839496;">Check for class properties that are declared but not set in the constructor..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @stripInternal</span></span>
<span class="line"><span style="color:#839496;">Disable emitting declarations that have \`@internal\` in their JSDoc comments..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @suppressExcessPropertyErrors</span></span>
<span class="line"><span style="color:#839496;">Disable reporting of excess property errors during the creation of object literals..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @suppressImplicitAnyIndexErrors</span></span>
<span class="line"><span style="color:#839496;">Suppress \`noImplicitAny\` errors when indexing objects that lack index signatures..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @target</span></span>
<span class="line"><span style="color:#839496;">Set the JavaScript language version for emitted JavaScript and include compatible library declarations..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @traceResolution</span></span>
<span class="line"><span style="color:#839496;">Log paths used during the \`moduleResolution\` process..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @tsBuildInfoFile</span></span>
<span class="line"><span style="color:#839496;">Specify the folder for .tsbuildinfo incremental compilation files..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @typeRoots</span></span>
<span class="line"><span style="color:#839496;">Specify multiple folders that act like \`./node_modules/@types\`..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @types</span></span>
<span class="line"><span style="color:#839496;">Specify type package names to be included without being referenced in a source file..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @useDefineForClassFields</span></span>
<span class="line"><span style="color:#839496;">Emit ECMAScript-standard-compliant class fields..</span></span>
<span class="line"><span style="color:#839496;"></span></span>
<span class="line"><span style="color:#839496;">// @useUnknownInCatchVariables</span></span>
<span class="line"><span style="color:#839496;">Type catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;..</span></span></code></pre><pre class="shiki solarized-light vp-code-light"><code><span class="line"><span style="color:#657B83;">// @allowJs</span></span>
<span class="line"><span style="color:#657B83;">Allow JavaScript files to be a part of your program. Use the \`checkJS\` option to get errors from these files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @allowSyntheticDefaultImports</span></span>
<span class="line"><span style="color:#657B83;">Allow &#39;import x from y&#39; when a module doesn&#39;t have a default export..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @allowUmdGlobalAccess</span></span>
<span class="line"><span style="color:#657B83;">Allow accessing UMD globals from modules..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @allowUnreachableCode</span></span>
<span class="line"><span style="color:#657B83;">Disable error reporting for unreachable code..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @allowUnusedLabels</span></span>
<span class="line"><span style="color:#657B83;">Disable error reporting for unused labels..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @alwaysStrict</span></span>
<span class="line"><span style="color:#657B83;">Ensure &#39;use strict&#39; is always emitted..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @assumeChangesOnlyAffectDirectDependencies</span></span>
<span class="line"><span style="color:#657B83;">Have recompiles in projects that use \`incremental\` and \`watch\` mode assume that changes within a file will only affect files directly depending on it..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @baseUrl</span></span>
<span class="line"><span style="color:#657B83;">Specify the base directory to resolve non-relative module names..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @charset</span></span>
<span class="line"><span style="color:#657B83;">No longer supported. In early versions, manually set the text encoding for reading files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @checkJs</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting in type-checked JavaScript files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @composite</span></span>
<span class="line"><span style="color:#657B83;">Enable constraints that allow a TypeScript project to be used with project references..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @declaration</span></span>
<span class="line"><span style="color:#657B83;">Generate .d.ts files from TypeScript and JavaScript files in your project..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @declarationDir</span></span>
<span class="line"><span style="color:#657B83;">Specify the output directory for generated declaration files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @declarationMap</span></span>
<span class="line"><span style="color:#657B83;">Create sourcemaps for d.ts files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @diagnostics</span></span>
<span class="line"><span style="color:#657B83;">Output compiler performance information after building..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @disableReferencedProjectLoad</span></span>
<span class="line"><span style="color:#657B83;">Reduce the number of projects loaded automatically by TypeScript..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @disableSizeLimit</span></span>
<span class="line"><span style="color:#657B83;">Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @disableSolutionSearching</span></span>
<span class="line"><span style="color:#657B83;">Opt a project out of multi-project reference checking when editing..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @disableSourceOfProjectReferenceRedirect</span></span>
<span class="line"><span style="color:#657B83;">Disable preferring source files instead of declaration files when referencing composite projects.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @downlevelIteration</span></span>
<span class="line"><span style="color:#657B83;">Emit more compliant, but verbose and less performant JavaScript for iteration..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @emitBOM</span></span>
<span class="line"><span style="color:#657B83;">Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @emitDeclarationOnly</span></span>
<span class="line"><span style="color:#657B83;">Only output d.ts files and not JavaScript files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @emitDecoratorMetadata</span></span>
<span class="line"><span style="color:#657B83;">Emit design-type metadata for decorated declarations in source files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @esModuleInterop</span></span>
<span class="line"><span style="color:#657B83;">Emit additional JavaScript to ease support for importing CommonJS modules. This enables \`allowSyntheticDefaultImports\` for type compatibility..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @exactOptionalPropertyTypes</span></span>
<span class="line"><span style="color:#657B83;">Interpret optional property types as written, rather than adding &#39;undefined&#39;..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @experimentalDecorators</span></span>
<span class="line"><span style="color:#657B83;">Enable experimental support for TC39 stage 2 draft decorators..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @explainFiles</span></span>
<span class="line"><span style="color:#657B83;">Print files read during the compilation including why it was included..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @extendedDiagnostics</span></span>
<span class="line"><span style="color:#657B83;">Output more detailed compiler performance information after building..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @forceConsistentCasingInFileNames</span></span>
<span class="line"><span style="color:#657B83;">Ensure that casing is correct in imports..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @generateCpuProfile</span></span>
<span class="line"><span style="color:#657B83;">Emit a v8 CPU profile of the compiler run for debugging..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @importHelpers</span></span>
<span class="line"><span style="color:#657B83;">Allow importing helper functions from tslib once per project, instead of including them per-file..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @importsNotUsedAsValues</span></span>
<span class="line"><span style="color:#657B83;">Specify emit/checking behavior for imports that are only used for types.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @incremental</span></span>
<span class="line"><span style="color:#657B83;">Enable incremental compilation.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @inlineSourceMap</span></span>
<span class="line"><span style="color:#657B83;">Include sourcemap files inside the emitted JavaScript..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @inlineSources</span></span>
<span class="line"><span style="color:#657B83;">Include source code in the sourcemaps inside the emitted JavaScript..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @isolatedModules</span></span>
<span class="line"><span style="color:#657B83;">Ensure that each file can be safely transpiled without relying on other imports..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @jsx</span></span>
<span class="line"><span style="color:#657B83;">Specify what JSX code is generated..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @jsxFactory</span></span>
<span class="line"><span style="color:#657B83;">Specify the JSX factory function used when targeting React JSX emit, e.g. &#39;React.createElement&#39; or &#39;h&#39;.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @jsxFragmentFactory</span></span>
<span class="line"><span style="color:#657B83;">Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. &#39;React.Fragment&#39; or &#39;Fragment&#39;..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @jsxImportSource</span></span>
<span class="line"><span style="color:#657B83;">Specify module specifier used to import the JSX factory functions when using \`jsx: react-jsx*\`.\`.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @keyofStringsOnly</span></span>
<span class="line"><span style="color:#657B83;">Make keyof only return strings instead of string, numbers or symbols. Legacy option..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @lib</span></span>
<span class="line"><span style="color:#657B83;">Specify a set of bundled library declaration files that describe the target runtime environment..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @listEmittedFiles</span></span>
<span class="line"><span style="color:#657B83;">Print the names of emitted files after a compilation..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @listFiles</span></span>
<span class="line"><span style="color:#657B83;">Print all of the files read during the compilation..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @mapRoot</span></span>
<span class="line"><span style="color:#657B83;">Specify the location where debugger should locate map files instead of generated locations..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @maxNodeModuleJsDepth</span></span>
<span class="line"><span style="color:#657B83;">Specify the maximum folder depth used for checking JavaScript files from \`node_modules\`. Only applicable with \`allowJs\`..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @module</span></span>
<span class="line"><span style="color:#657B83;">Specify what module code is generated..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @moduleResolution</span></span>
<span class="line"><span style="color:#657B83;">Specify how TypeScript looks up a file from a given module specifier..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @newLine</span></span>
<span class="line"><span style="color:#657B83;">Set the newline character for emitting files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noEmit</span></span>
<span class="line"><span style="color:#657B83;">Disable emitting file from a compilation..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noEmitHelpers</span></span>
<span class="line"><span style="color:#657B83;">Disable generating custom helper functions like \`__extends\` in compiled output..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noEmitOnError</span></span>
<span class="line"><span style="color:#657B83;">Disable emitting files if any type checking errors are reported..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noErrorTruncation</span></span>
<span class="line"><span style="color:#657B83;">Disable truncating types in error messages..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noFallthroughCasesInSwitch</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting for fallthrough cases in switch statements..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noImplicitAny</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting for expressions and declarations with an implied \`any\` type...</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noImplicitOverride</span></span>
<span class="line"><span style="color:#657B83;">Add \`undefined\` to a type when accessed using an index..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noImplicitReturns</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting for codepaths that do not explicitly return in a function..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noImplicitThis</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting when \`this\` is given the type \`any\`..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noImplicitUseStrict</span></span>
<span class="line"><span style="color:#657B83;">Disable adding &#39;use strict&#39; directives in emitted JavaScript files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noLib</span></span>
<span class="line"><span style="color:#657B83;">Disable including any library files, including the default lib.d.ts..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noPropertyAccessFromIndexSignature</span></span>
<span class="line"><span style="color:#657B83;">Enforces using indexed accessors for keys declared using an indexed type.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noResolve</span></span>
<span class="line"><span style="color:#657B83;">Disallow \`import\`s, \`require\`s or \`\`s from expanding the number of files TypeScript should add to a project..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noStrictGenericChecks</span></span>
<span class="line"><span style="color:#657B83;">Disable strict checking of generic signatures in function types..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noUncheckedIndexedAccess</span></span>
<span class="line"><span style="color:#657B83;">Include &#39;undefined&#39; in index signature results.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noUnusedLocals</span></span>
<span class="line"><span style="color:#657B83;">Enable error reporting when a local variables aren&#39;t read..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @noUnusedParameters</span></span>
<span class="line"><span style="color:#657B83;">Raise an error when a function parameter isn&#39;t read.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @out</span></span>
<span class="line"><span style="color:#657B83;">Deprecated setting. Use \`outFile\` instead..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @outDir</span></span>
<span class="line"><span style="color:#657B83;">Specify an output folder for all emitted files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @outFile</span></span>
<span class="line"><span style="color:#657B83;">Specify a file that bundles all outputs into one JavaScript file. If \`declaration\` is true, also designates a file that bundles all .d.ts output..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @paths</span></span>
<span class="line"><span style="color:#657B83;">Specify a set of entries that re-map imports to additional lookup locations..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @plugins</span></span>
<span class="line"><span style="color:#657B83;">List of language service plugins..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @preserveConstEnums</span></span>
<span class="line"><span style="color:#657B83;">Disable erasing \`const enum\` declarations in generated code..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @preserveSymlinks</span></span>
<span class="line"><span style="color:#657B83;">Disable resolving symlinks to their realpath. This correlates to the same flag in node..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @preserveWatchOutput</span></span>
<span class="line"><span style="color:#657B83;">Disable wiping the console in watch mode.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @pretty</span></span>
<span class="line"><span style="color:#657B83;">Enable color and formatting in output to make compiler errors easier to read.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @reactNamespace</span></span>
<span class="line"><span style="color:#657B83;">Specify the object invoked for \`createElement\`. This only applies when targeting \`react\` JSX emit..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @removeComments</span></span>
<span class="line"><span style="color:#657B83;">Disable emitting comments..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @resolveJsonModule</span></span>
<span class="line"><span style="color:#657B83;">Enable importing .json files.</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @rootDir</span></span>
<span class="line"><span style="color:#657B83;">Specify the root folder within your source files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @rootDirs</span></span>
<span class="line"><span style="color:#657B83;">Allow multiple folders to be treated as one when resolving modules..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @skipDefaultLibCheck</span></span>
<span class="line"><span style="color:#657B83;">Skip type checking .d.ts files that are included with TypeScript..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @skipLibCheck</span></span>
<span class="line"><span style="color:#657B83;">Skip type checking all .d.ts files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @sourceMap</span></span>
<span class="line"><span style="color:#657B83;">Create source map files for emitted JavaScript files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @sourceRoot</span></span>
<span class="line"><span style="color:#657B83;">Specify the root path for debuggers to find the reference source code..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @strict</span></span>
<span class="line"><span style="color:#657B83;">Enable all strict type-checking options..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @strictBindCallApply</span></span>
<span class="line"><span style="color:#657B83;">Check that the arguments for \`bind\`, \`call\`, and \`apply\` methods match the original function..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @strictFunctionTypes</span></span>
<span class="line"><span style="color:#657B83;">When assigning functions, check to ensure parameters and the return values are subtype-compatible..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @strictNullChecks</span></span>
<span class="line"><span style="color:#657B83;">When type checking, take into account \`null\` and \`undefined\`..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @strictPropertyInitialization</span></span>
<span class="line"><span style="color:#657B83;">Check for class properties that are declared but not set in the constructor..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @stripInternal</span></span>
<span class="line"><span style="color:#657B83;">Disable emitting declarations that have \`@internal\` in their JSDoc comments..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @suppressExcessPropertyErrors</span></span>
<span class="line"><span style="color:#657B83;">Disable reporting of excess property errors during the creation of object literals..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @suppressImplicitAnyIndexErrors</span></span>
<span class="line"><span style="color:#657B83;">Suppress \`noImplicitAny\` errors when indexing objects that lack index signatures..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @target</span></span>
<span class="line"><span style="color:#657B83;">Set the JavaScript language version for emitted JavaScript and include compatible library declarations..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @traceResolution</span></span>
<span class="line"><span style="color:#657B83;">Log paths used during the \`moduleResolution\` process..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @tsBuildInfoFile</span></span>
<span class="line"><span style="color:#657B83;">Specify the folder for .tsbuildinfo incremental compilation files..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @typeRoots</span></span>
<span class="line"><span style="color:#657B83;">Specify multiple folders that act like \`./node_modules/@types\`..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @types</span></span>
<span class="line"><span style="color:#657B83;">Specify type package names to be included without being referenced in a source file..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @useDefineForClassFields</span></span>
<span class="line"><span style="color:#657B83;">Emit ECMAScript-standard-compliant class fields..</span></span>
<span class="line"><span style="color:#657B83;"></span></span>
<span class="line"><span style="color:#657B83;">// @useUnknownInCatchVariables</span></span>
<span class="line"><span style="color:#657B83;">Type catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;..</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br></div></div>`,2),r=[p];function o(c,i,t,y,b,u){return a(),n("div",null,r)}const f=s(e,[["render",o]]);export{d as __pageData,f as default};
