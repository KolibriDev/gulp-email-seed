
ifndef WEB_USER
	WEB_USER := www-data
endif

ifndef TARGET_HOST
	TARGET_HOST := localhost
endif

ifndef BRANCH_NAME
	BRANCH_NAME := $$(git rev-parse --abbrev-ref HEAD)
endif

ifndef TARGET_DIR
	TARGET_DIR := /var/www/kolibri/emails/${BRANCH_NAME}
endif

all: npm test build deploy

npm:
	npm install --loglevel=error

.PHONY: test
test:
	echo \"No test specified\" && exit 0

build:
	gulp deployBuild --branch=${BRANCH_NAME}

deploy:
	rsync --delete-after --quiet -rlptuPO --chmod=g+w ./dist/* ${WEB_USER}@${TARGET_HOST}:${TARGET_DIR}
