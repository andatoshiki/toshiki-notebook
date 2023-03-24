import { readFileSync } from 'fs'

const msg: string = readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()

const commitRE: RegExp = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe: RegExp = /^(Merge pull request|Merge branch)/

if (!commitRE.test(msg)) {
  if (!mergeRe.test(msg)) {
    console.log('git commit message does not pass validation')

    console.error(`git commit message format error, use \" title(scope): desc\" as the format`)
    process.exit(1)
  }
} else {
  console.log('git commit message validation test passes')
}
