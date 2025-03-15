import express from "express"; // aqui estamos importando o express que é o framework que vamos usar para criar a aplicação.

import { routes } from "./routes"; // aqui estamos importando o arquivo que contém as rotas da aplicação, lembrando que a pasta routes é a pasta que contém as rotas da aplicação e que é exportada pelo arquivo index.ts que está dentro da pasta routes.
import { errorHandling } from "./middlewares/error-handling"; // aqui estamos importando o arquivo que contém o middleware de tratamento de erros, lembrando que midlewares são funções que são executadas antes das rotas da aplicação e que servem para adicionar alguma funcionalidade a mais a aplicação como por exemplo o tratamento de erros.

const PORT = 3333; // aqui estamos criando uma constante que vai guardar o número da porta que vamos usar para iniciar o servidor.

const app = express(); // criando a variável app que vai guardar a aplicação express

app.use(express.json()); // usamos app.use que vai ser aplicado a todas as rotas e o express.json() é um middleware que vai fazer a conversão do corpo da requisição para json

app.use(routes) // usamos app.use que vai ser aplicado a todas as rotas e o routes é o arquivo que contém todas as rotas da aplicação

app.use(errorHandling) // usamos app.use que vai ser aplicado a todas as rotas e o errorHandling é o arquivo que contém o middleware de tratamento de erros

// usamos o app.listen para iniciar o servidor e passamos o número da porta e uma função de callback que vai ser executada quando o servidor for iniciado
app.listen(PORT, ()=>{
    console.log("Server is running on port: ", PORT)
})

