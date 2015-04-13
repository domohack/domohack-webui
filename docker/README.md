Docker for webui
==============

This image is based on yougos666/nginx (dockerhub) 

Requirements
--------------

- docker: version 1.5

Installation
--------------

- Clone project
- Launch build: "docker build -t domohack/domohack-webui ."

Launch Docker container
--------------
docker run -d -p 80:80 domohack/domohack-webui
