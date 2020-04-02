/**
 * Métodos HTTP
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar  uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo de ? e geralmente servem para (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   * Query Builder utilizado knexjs.org
   */
const express = require('express');
const cors = require('cors');
//importando as rotas
const routes = require('./routes');

const app = express(); 

app.use(cors());
app.use(express.json());
//Precisa ser abaixo do express.json
app.use(routes);

app.listen(3333);