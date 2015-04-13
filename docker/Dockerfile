FROM yougos666/docker-nginx

RUN apt-get update && \
	apt-get autoremove && \
	apt-get clean


ADD default /etc/nginx/sites-available/default

