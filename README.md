### This repo created like note and template to work with docker.

Control of containers is management through util ‘make’ by cli command ( build, start, stop, remove).

Project contained three docker containers. First of them is an nginx which use like web-server and balancer for two node.js containers.

“Nginx” folder contains ‘Dockerfile’ and nginx.config.
“Server” folder contins ‘Dockerfile’ and node.js app (hello world, in fact) with package.json to install dependencies by npm.
And folder “public” contains frontend with index.html, js and css files. “public” folder will link to container with nginx.


#### Usage.
Be sure to install docker previous and start it like daemon. 
Then clone git and go to src folder.

`git clone https://github.com/ssh-user/learn_docker.git`
`cd learn_docker/src/`

Build containers.
`make build`  

then
`make start`

and check in browser localhost or your ip. 
You’ll see 
![Alt text](https://github.com/ssh-user/learn_docker/blob/master/result.jpg)

Good. All work as expected.
Don’t forget to stop and then remove that containers.

`make stop`

and

`make remove`


#### Have a good day!
