# 🎃 DEVICE SHARE
## 💡 HOW TO CREATE ENVIRONMENT

```Bash
$ git clone https://OAuth2:${GIT_ACCESS_TOKEN}@sd-pj-management.systena.co.jp:8080/gitlab/docomo-prod/DeviceShare.git
```

### API
```Bash
$ cd DeviceShare/api
$ vi .env

# timezone
TZ=Asia/Tokyo
# proxy host
PROXY_HOST=proxy_host
# proxy port
PROXY_PORT=proxy_port
# proxy user
PROXY_USER=proxy_user
# proxy password
PROXY_PASSWORD=proxy_password
# proxy password (encoding required. ex @ => %40)
PROXY_PASSWORD_ENCODING=proxy_password_encoding

$ docker-compose up -d --build
$ docker-compose exec app ash
```

```
/work # npm install
/work # node app/app.js
```

👉 https://localhost:30443/api/v1/test

### WordPress
```Bash
$ cd DeviceShare/wordpress
$ vi .env

# root password
DB_ROOT_PASS=root
# database name
DB_NAME=wordpress
# database user
DB_USER=wordpress
# database password
DB_PASS=wordpress
# timezone
TZ=Asia/Tokyo
# proxy
PROXY=http://user:password@host:port

$ docker-compose up -d --build
```

👉 https://localhost:20443

### Laravel
```Bash
$ cd ..
$ vi .env

# timezone
TZ=Asia/Tokyo
# proxy host
PROXY_HOST=proxy_host
# proxy port
PROXY_PORT=proxy_port
# proxy user
PROXY_USER=proxy_user
# proxy password
PROXY_PASSWORD=proxy_password
# proxy password (encoding required. ex @ => %40)
PROXY_PASSWORD_ENCODING=proxy_password_encoding

$ docker-compose up -d --build
$ docker-compose exec app ash
```

```
/work # composer install
/work # cp .env.example .env
/work # php artisan key:generate
/work # rm -rf node_modules
/work # npm install -g npm
/work # npm install
```

👉 https://localhost:10443
