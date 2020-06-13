```
openssl genrsa -out ./ca.key 2048
openssl req -new -key ca.key -out ca.csr -subj '/C=JP/ST=Tokyo/L=Tokyo/O=Systena/OU=Systena/CN=DeviceShare'
openssl x509 -days 3650 -in ./ca.csr -req -signkey ./ca.key -out ca.crt
openssl genrsa -out ./ssl/localhost.key 2048
openssl req -new -key ./ssl/localhost.key -out ./ssl/localhost.csr -subj '/C=JP/ST=Tokyo/L=Tokyo/O=Systena/OU=Systena/CN=localhost'
yes | openssl ca -config <(cat /usr/local/etc/openssl\@1.1/openssl.cnf <( printf "\n[usr_cert]\nsubjectAltName=DNS:localhost,DNS:wp_web,DNS:api_web")) -keyfile ./ca.key -outdir ./ -cert ca.crt -in ./ssl/localhost.csr -out ./ssl/localhost.crt -days 825
```