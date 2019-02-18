# Internet Explorer 11 memory leak reproduction

## Installation

Instructions for Windows

- Install nodejs (e.g. LTS version)
- Install git for windows
- Clone repository from github
- Go into cloned folder
- Open git bash in that folder
- Execute 'npm i' => Installs dependencies
- //Execute 'npm start' => Starts DevelopServer => That one looks ok
- Check IE11 settings: Make it a private and trustworthy site
- Execute 'npm run build'
- Execute 'npm i -g serve@10.1.1' => Installs small webserver. Use this version, 10.1.2 is broken.
- Execute 'serve -s build'
- Browse to http://localhost:5000
