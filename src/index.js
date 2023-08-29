import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import tarefaController from './controller/tarefaController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(tarefaController);

servidor.listen(process.env.PORT, () => console.log(`API subiu na porta ${process.env.PORT} :)`));