import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    // Chamando os métodos
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// Exportando diretamente o server
export default new App().server;
