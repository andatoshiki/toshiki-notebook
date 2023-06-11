---
title: 'Compiler Flags'
---

# Compiler Flags

```
// @allowJs
Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files..

// @allowSyntheticDefaultImports
Allow 'import x from y' when a module doesn't have a default export..

// @allowUmdGlobalAccess
Allow accessing UMD globals from modules..

// @allowUnreachableCode
Disable error reporting for unreachable code..

// @allowUnusedLabels
Disable error reporting for unused labels..

// @alwaysStrict
Ensure 'use strict' is always emitted..

// @assumeChangesOnlyAffectDirectDependencies
Have recompiles in projects that use `incremental` and `watch` mode assume that changes within a file will only affect files directly depending on it..

// @baseUrl
Specify the base directory to resolve non-relative module names..

// @charset
No longer supported. In early versions, manually set the text encoding for reading files..

// @checkJs
Enable error reporting in type-checked JavaScript files..

// @composite
Enable constraints that allow a TypeScript project to be used with project references..

// @declaration
Generate .d.ts files from TypeScript and JavaScript files in your project..

// @declarationDir
Specify the output directory for generated declaration files..

// @declarationMap
Create sourcemaps for d.ts files..

// @diagnostics
Output compiler performance information after building..

// @disableReferencedProjectLoad
Reduce the number of projects loaded automatically by TypeScript..

// @disableSizeLimit
Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server..

// @disableSolutionSearching
Opt a project out of multi-project reference checking when editing..

// @disableSourceOfProjectReferenceRedirect
Disable preferring source files instead of declaration files when referencing composite projects.

// @downlevelIteration
Emit more compliant, but verbose and less performant JavaScript for iteration..

// @emitBOM
Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files..

// @emitDeclarationOnly
Only output d.ts files and not JavaScript files..

// @emitDecoratorMetadata
Emit design-type metadata for decorated declarations in source files..

// @esModuleInterop
Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility..

// @exactOptionalPropertyTypes
Interpret optional property types as written, rather than adding 'undefined'..

// @experimentalDecorators
Enable experimental support for TC39 stage 2 draft decorators..

// @explainFiles
Print files read during the compilation including why it was included..

// @extendedDiagnostics
Output more detailed compiler performance information after building..

// @forceConsistentCasingInFileNames
Ensure that casing is correct in imports..

// @generateCpuProfile
Emit a v8 CPU profile of the compiler run for debugging..

// @importHelpers
Allow importing helper functions from tslib once per project, instead of including them per-file..

// @importsNotUsedAsValues
Specify emit/checking behavior for imports that are only used for types.

// @incremental
Enable incremental compilation.

// @inlineSourceMap
Include sourcemap files inside the emitted JavaScript..

// @inlineSources
Include source code in the sourcemaps inside the emitted JavaScript..

// @isolatedModules
Ensure that each file can be safely transpiled without relying on other imports..

// @jsx
Specify what JSX code is generated..

// @jsxFactory
Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'.

// @jsxFragmentFactory
Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'..

// @jsxImportSource
Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.`.

// @keyofStringsOnly
Make keyof only return strings instead of string, numbers or symbols. Legacy option..

// @lib
Specify a set of bundled library declaration files that describe the target runtime environment..

// @listEmittedFiles
Print the names of emitted files after a compilation..

// @listFiles
Print all of the files read during the compilation..

// @mapRoot
Specify the location where debugger should locate map files instead of generated locations..

// @maxNodeModuleJsDepth
Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`..

// @module
Specify what module code is generated..

// @moduleResolution
Specify how TypeScript looks up a file from a given module specifier..

// @newLine
Set the newline character for emitting files..

// @noEmit
Disable emitting file from a compilation..

// @noEmitHelpers
Disable generating custom helper functions like `__extends` in compiled output..

// @noEmitOnError
Disable emitting files if any type checking errors are reported..

// @noErrorTruncation
Disable truncating types in error messages..

// @noFallthroughCasesInSwitch
Enable error reporting for fallthrough cases in switch statements..

// @noImplicitAny
Enable error reporting for expressions and declarations with an implied `any` type...

// @noImplicitOverride
Add `undefined` to a type when accessed using an index..

// @noImplicitReturns
Enable error reporting for codepaths that do not explicitly return in a function..

// @noImplicitThis
Enable error reporting when `this` is given the type `any`..

// @noImplicitUseStrict
Disable adding 'use strict' directives in emitted JavaScript files..

// @noLib
Disable including any library files, including the default lib.d.ts..

// @noPropertyAccessFromIndexSignature
Enforces using indexed accessors for keys declared using an indexed type.

// @noResolve
Disallow `import`s, `require`s or ``s from expanding the number of files TypeScript should add to a project..

// @noStrictGenericChecks
Disable strict checking of generic signatures in function types..

// @noUncheckedIndexedAccess
Include 'undefined' in index signature results.

// @noUnusedLocals
Enable error reporting when a local variables aren't read..

// @noUnusedParameters
Raise an error when a function parameter isn't read.

// @out
Deprecated setting. Use `outFile` instead..

// @outDir
Specify an output folder for all emitted files..

// @outFile
Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output..

// @paths
Specify a set of entries that re-map imports to additional lookup locations..

// @plugins
List of language service plugins..

// @preserveConstEnums
Disable erasing `const enum` declarations in generated code..

// @preserveSymlinks
Disable resolving symlinks to their realpath. This correlates to the same flag in node..

// @preserveWatchOutput
Disable wiping the console in watch mode.

// @pretty
Enable color and formatting in output to make compiler errors easier to read.

// @reactNamespace
Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit..

// @removeComments
Disable emitting comments..

// @resolveJsonModule
Enable importing .json files.

// @rootDir
Specify the root folder within your source files..

// @rootDirs
Allow multiple folders to be treated as one when resolving modules..

// @skipDefaultLibCheck
Skip type checking .d.ts files that are included with TypeScript..

// @skipLibCheck
Skip type checking all .d.ts files..

// @sourceMap
Create source map files for emitted JavaScript files..

// @sourceRoot
Specify the root path for debuggers to find the reference source code..

// @strict
Enable all strict type-checking options..

// @strictBindCallApply
Check that the arguments for `bind`, `call`, and `apply` methods match the original function..

// @strictFunctionTypes
When assigning functions, check to ensure parameters and the return values are subtype-compatible..

// @strictNullChecks
When type checking, take into account `null` and `undefined`..

// @strictPropertyInitialization
Check for class properties that are declared but not set in the constructor..

// @stripInternal
Disable emitting declarations that have `@internal` in their JSDoc comments..

// @suppressExcessPropertyErrors
Disable reporting of excess property errors during the creation of object literals..

// @suppressImplicitAnyIndexErrors
Suppress `noImplicitAny` errors when indexing objects that lack index signatures..

// @target
Set the JavaScript language version for emitted JavaScript and include compatible library declarations..

// @traceResolution
Log paths used during the `moduleResolution` process..

// @tsBuildInfoFile
Specify the folder for .tsbuildinfo incremental compilation files..

// @typeRoots
Specify multiple folders that act like `./node_modules/@types`..

// @types
Specify type package names to be included without being referenced in a source file..

// @useDefineForClassFields
Emit ECMAScript-standard-compliant class fields..

// @useUnknownInCatchVariables
Type catch clause variables as 'unknown' instead of 'any'..
```
