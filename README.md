# Git and NPM Command Cheat Sheet

This is the documentation for the Git and NPM commands that I use most frequently in this coding project. This cheat sheet is intended to be a quick reference guide for myself.

## Git Commands

### `git init`

Initializes a new Git repository.

### `git clone <repository>`

Creates a copy of a remote repository on your local machine.

### `git add <file>`

Adds a file to the staging area to be included in the next commit.

### `git commit -m "<message>"`

Creates a new commit with the changes in the staging area and adds a message describing the changes.

### `git pull`

Fetches the latest changes from the remote repository and merges them into the local branch.

### `git push`

Sends the committed changes to the remote repository.

### `git push -u origin main`

Sends the committed changes to the remote repository, and sets the upstream branch to the `main` branch on the `origin` remote. This command will also set the current branch to track the remote branch, so that in the future you can simply use `git push` instead of `git push -u origin main`

### `git branch <name>`

Creates a new branch with the given name.

### `git branch`

Shows the current branch and all available branches.

### `git checkout <branch>`

Switches to the specified branch.

### `git merge <branch>`

Merges the specified branch into the current branch.

## NPM Commands

### `npm install netlify-cli -g`

Installs the Netlify CLI globally.

### `npm run build`

Runs the build script defined in the project's package.json file.

### `CI=false npm run build`

Runs the build script with CI environment variable set to false.

### `netlify deploy`

Deploys the current project to Netlify's CDN.

### `netlify deploy --prod`

Deploys the current project to Netlify's production environment.

Please note that these commands are general and your exact steps and commands may vary depending on your specific project and setup.
