init:
	git submodule init
	git submodule update
	git submodule status
	yarn install

clean:
	lerna clean --yes

dev:
	lerna exec yarn dev --concurrency --scope=@vue-jsonapi-with-modules/hello-placeholder --scope=@vue-jsonapi-with-modules/api

dev-module:
	lerna exec yarn dev --scope="@vue-jsonapi-with-modules/$(MODULE)-module"
