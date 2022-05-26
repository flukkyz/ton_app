# cmu_blog_api_only

CMU Blog API only with CMU Oauth2 on Node.js

## Setup Environment

```bash
# Copy Example ENV
$ cp .env.example .env

# Update ENV & Save
$ nano .env
```

## Database Migration

```bash

# Migrate your database
#(require global "npx" if not, please install $ npm install -g npx )
$ npx sequelize db:migrate
```

## Build Setup

```bash
# Install api dependencies
$ npm install

# Serve with hot reload at localhost:5000
$ npm start
```

## Docker Compose

```bash
# Build docker
$ docker-compose up -d --build
```
