# nodejs-api
Proyecto para Kazam

Esta api se construyo utilizando:

    - Node.js
    - MongoDB
    - Mongoose
    - Restify
    
# Instalación
Descargar el repositorio, entrar al directorio en donde este instalado y ejecutar:

```sh
$ yarn install
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
$ node index.js
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

