.PHONY: build start stop remove

build:
	docker build $(shell pwd)/nginx/ -t my_nginx
	docker build $(shell pwd)/server/ -t my_node

start:
	docker run -d --name nginx-static-balancer -v $(shell pwd)/public:/usr/share/nginx/html:ro -p 80:80 my_nginx
	docker run --name node-first -d -p 3001:3000 my_node
	docker run --name node-second -d -p 3002:3000 my_node

stop:
	docker stop nginx-static-balancer
	docker rm nginx-static-balancer
	docker stop node-first
	docker rm node-first
	docker stop node-second
	docker rm node-second

remove:
	docker rmi my_nginx
	docker rmi my_node
