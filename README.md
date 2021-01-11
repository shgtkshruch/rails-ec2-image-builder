# EC2 Image Builder for Rails

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Docker

```sh
$ COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build .
```

```sh
# Validate
$ docker-compose run awstoe ./awstoe validate --documents app/install-rails-node-nginx.yml

# Build
$ docker-compose run awstoe ./awstoe run --documents app/install-rails-node-nginx.yml --phases build

# Shell
$ docker-compose exec awstoe bash
```
