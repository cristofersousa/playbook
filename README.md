### PlayBook-API

> API demonstrativa utilizando Node e MongoDB

## Setup and Run Project

1. `install node v10 or higher`
2. fork project
3. git clone
4. npm install
5. npm run dev

`finish`

## API Docs

> /api/products

|           ROTA              |       METHOD    |         DESCRIPTION                     |
| --------------------------- | --------------- | --------------------------------------- |
| /api/products               |       GET       | listar todos os products                |
| /api/products               |       POST      | criar um novo products                  |
| /api/products/productId     |       GET       | visualizar um products a partir do ID   |
| /api/products/productId     |       PUT       | atualizar um products a partir do ID    |
| /api/products/productId     |       DELETE    | remover um pastel a partir do ID        |

## DataBase 

```
        Products
-------------------------
Key           |  Type
-------------------------
title         | String
description   | String
url           | String
created       | Date
-------------------------
```


