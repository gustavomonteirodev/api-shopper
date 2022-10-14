# 🛒 api-shopper 

Projeto de backend desenvolvido como uma das etapas do processo seletivo para vaga de Full-stack Junior. API que simula um sistema de pedidos de um supermercado, com o foco de criar, mostrar e editar pedidos, como também exibir produtos disponíveis em estoque e lista de pedidos efetuados.

## 🛠 Métodos das entidades 
- GET: `/shopper/products` 
- GET: `/shopper/getrequests`
- POST: `/shopper/request` 

## 🧾 Doc da API - Postman 
- [Link Documentação](https://documenter.getpostman.com/view/21555811/2s8479ywdr)

## 🔗 Deploy Heroku 
- [Link da API](https://case-api-shopper.herokuapp.com)

## ⚛️ Tecnologias 
- Node js - Utilizando POO 
- Typescript
- Uuid
- MySQL
- Postman 
- Heroku
- Knex
- Express/Cors

## 💻 Etapas para rodar localmente
- git clone https://github.com/gustavomonteirodev/api-shopper
- após instalar e abrir o vscode, rodar npm install
- criar um arquivo .env (dotenv já vem instalado): 
   ```
   DB_HOST = 
   DB_USER = 
   DB_PASSWORD = 
   DB_SCHEMA =  
   PORT = 3003
   ```
- Para popular o MySQL -> No arquivo Migrations -> descomentar a linha 53 -> Migrations.createTables() 
- Executar `npm run start` ou `ts-node-dev` para rodar o servidor.

Copyright © Gustavo Monteiro - Maceió-AL, 2022
