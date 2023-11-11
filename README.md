# Nava Test

## Subindo o ecosistema do app

### Com Docker compose
1. ter [docker-compose](https://docs.docker.com/compose/install/) instalado
2. rodar a aplicação com start.sh script, *vai criar as imagens do front, back e do mongo*

```sh
./start
```
## Rodando cada app individualmente
> Backend
1. criar uma imagem local do mongodb
    ```sh
    docker run -p 27017:27017 --name mongodb -d mongo
    ```
2. atualizar o dotenv do banco com a url do mongo
3. no .env atualizar a env `MONGO_URL` para `mongo://127.0.0.1:27017/local`
> Frontend
1. atualizar o arquivo de confs em `src/app/config/app.config.ts`
2. substituir a url do docker por `http:localhost:8080` `||` `http:127.0.0.1`