# Internet Explorer 11 memory leak reproduction

## Installation

Instructions for Windows

- Install nodejs (e.g. LTS version)
- Install git for windows
- Clone repository from github
- CD into cloned folder
- Open git bash in that folder, the following instructions assume you are using git bash
- Execute 'npm i' => Installs dependencies
- Check IE11 settings: Make it a private and trustworthy site
- Execute 'npm run build' => Builds the software
- Execute 'npm i -g serve@10.1.1' => Installs small webserver. Use this version, 10.1.2 is broken.
- Execute 'serve -s build' => Starts the webserver
- Browse to http://localhost:5000
