// Setting up a Group Full Stack Project
    1. Set up the Git Repository (1 person only)    
        - One person creates a folder OUTSIDE of other repositories
            1. Go to github, click "+" symbol, then "new repo"
            2. Give repo a name (leave all other defaults as-is), create it, and copy console
            script into terminal and press 'enter'
        - Everyone  else waits.
        
    2. Person in charge of repo creates initial folder structure.
        backend:
            - server.js
            - routes folder
            - models folder
            - npm init -y  (for serverside package.json)
            - .gitignore with node_modules written inside
        frontend:
            - client folder
            - cd into client and `create-react-app .`
            - Delete contents of `src`
                - create `index.js` and `App.js`
                - Fill in basic contents of `index.js`

    3. Make sure you are in the `client` folder and run
    the command `rm -rf .git`

    4. Install All needed node_modules
        backend:
            - mongoose, morgan, express, (possibly axios if you are using a 3rd party API as well as your own)
        frontend:
            - axios, react-router-dom, prop-types

    5. 
        Git add -A, 
        git status (to make sure node_modules aren't going up), 
        git commit -m "initial-commit", 
        git push

    6. Creator of git repo will click 'settings', then 'collaborators' to enter the git username
    of all other group members.

    7. All others in group will do a git clone using the the URL given from the `clone or download` button
    on the git repository, then run `git clone <url from github>`
        - the Clone will create the project folder for you, so run npm install on both the front and backend.

    8. To start coding, create and checkout a branch.
        git branch <branch-name>
        git checkout <branch-name>
        
        
// When your branch is done, and ready to be a part of the Master
    1. from your branch, push up your most recent branch code
        to keep it safe (Do not submit Pull request YET.): 
        git add -A
        git commit -m "message-for-your-branch-commit"
        git push

    2. Checkout to master branch locally to get most up to date application code:
        git checkout master
        git pull

    3. Checkout back to your branch to merge it locally with the most
    up to date application code, then re-push it back up.
        git checkout <your-branch-name>
        git merge --no-ff master
        git add -A
        git commit -m "message-for-your-branch-commit"
        git push

    4. Provided there are no conflicts with the git merge locally
    or on github, accept Pull request.