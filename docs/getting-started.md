---
title: Git push results in "Authentication Failed”
author: Anda Toshiki
date: 2023/2/21/ 10:54
editLink: true
lastUpdated: true
showFooter: true
---

# Git push results in "Authentication Failed”

## Issue

```bash
$ git push
Username for 'https://github.com': ${{ GITHUB_USERNAME }}
Password for 'https://andatoshiki@github.com': ${{ GITHUB_PASSWORD }} # or GitHub personal access token
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/andatoshiki/andatoshiki.git/'
```

`git push` to GitHub remote branch failed via https protocol

## Solution

### Solution 1

> If you enabled two-factor authentication in your GitHub account you won't be able to push via HTTPS using your accounts password. Instead you need to generate a personal access token. This can be done in the application settings of your GitHub account. Using this token as your password should allow you to push to your remote repository via HTTPS. Use your username as usual.

You may also need to update the origin for your repository if it is set to HTTPS. Do this to switch to SSH:

```bash
$ git remote -v
$ git remote set-url origin git@github.com:$USERNAME/$REPONAME.git
```

### Solution 2

GitHub username & password/access token mismatched due to prior temporary Git config setup → Reset Git global username & email config or in current repository

**To set your global username/email configuration:**

1. Open the command line.
2. Set your username: `git config --global user.name "FIRST_NAME LAST_NAME"`
3. Set your email address: `git config --global user.email "MY_NAME@example.com"`

**To set repository-specific username/email configuration:**

1. From the command line, change into the repository directory.
2. Set your username: `git config user.name "FIRST_NAME LAST_NAME"`
3. Set your email address: `git config user.email "MY_NAME@example.com"`
4. Verify your configuration by displaying your configuration file: `cat .git/config`
