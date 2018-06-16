# nodejs-api
Proyecto para Kazam

Esta api se construyo utilizando:

    - Node.js
    - MongoDB
    - Mongoose
    - Restify
    
# Requisitos previos

Node, de preferencia la version 8.11.3 que es LTS
Para instalarla, usaremos NVM.

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Cerramos y abrimos nuestra terminal. Si preferimos no cerrarla, podemos ejecutr lo siguiente:

``` 
$ export NVM_DIR="$HOME/.nvm"
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Verificamos la instalación con:

```
$ command -v nvm
```

Ahora instalamos Node.js v8.11.3

```
$ nvm install v8.11.3
```
Solo por buena practiva, le decimos a NVM que sera nuestra version de Node por defecto:

```
$ nvm alias default v8.11.3
```

Verificamos:

```
$ node -v
```

# Instalación del proyecto
Descargar el repositorio, entrar al directorio en donde este instalado y ejecutar:

```sh
$ yarn install --save-dev
$ brew install mongodb
$ brew cask install robo-3t
```

Ahora necesitamos crear un directorio para nuestra base de datos y ejecutar mongodb: 

```sh
$ sudo mkdir -p /data/db
$ sudo chown -R `id -un` /data/db
```

Ahora, podemos abrir una terminar y mandar mongo a segundo plano o dejarlo corrriendo y salir con ctrl-c.
Abrir una terminal y correr:

```sh
$ mongod
```

Configuramos mongo para usar API

```sh
$ mongo
```

Dentro del interprete, escribimos:

```sh
> use api
> exit
```

# Iniciar

Ahora, podemos correr el api mediante node o con nodemon. Si deseamos usar node, hay que hacer:

```sh
$ npm start
```

Si preferimos nodemon:
```sh
$ npm install -g nodemon
$ nodemon
```

# Postman

Descargar Postman:
[Sitio oficial](https://www.getpostman.com/app/download/osx64)

# Rutas
GET /pets
GET /pets/:id

POST /pets (nueva mascota)
```json
{
	"name": "Tatemon",
	"tag": "Algo aqui"
}
```


### No estaba en el ejercicio pero tambien funciona:

PUT /pets/:pet_id 

```json
{
	"name": "Nuevo nombre",
	"tag": "Cambio de tag"
}
```

DELETE /pets/:pet_id

# Testing

Para correr las pruebas, solo hay que ejecutar:

```
$ npm test
```

