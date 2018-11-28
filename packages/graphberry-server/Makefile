REGISTRY_HOST=docker.io
IMAGE=$(shell jq -r ".name" package.json)
VERSION=$(shell jq -r ".version" package.json)

build:
	docker build -t $(IMAGE):$(VERSION) . 

run: 
	docker run -d -p 4000:4000 --name=$(IMAGE) $(IMAGE):$(VERSION) 

kill: 
	docker stop $(IMAGE)
	docker rm $(IMAGE)

default: build
