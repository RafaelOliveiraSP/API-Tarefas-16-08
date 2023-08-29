import { Router } from 'express';
import { listarTarefas, inserirTarefa, listarFinalizadas, alterarTarefa, excluirTarefa} from "../repository/tarefaRepository.js";

let endpoints = Router();


endpoints.post('/tarefa', async (req, resp) => {
    try{
        let tarefa = req.body;
        let dados = await inserirTarefa(tarefa);
        resp.send(dados) 
    }
    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' })
    }
})

endpoints.get('/tarefa', async (req, resp) => {
    try{
       let dados = await listarTarefas();
        resp.send(dados); 
    }
    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' })
    }
})

endpoints.get('/tarefa/finalizadas', async (req, resp) => {
    try{
        let dados = await listarFinalizadas();
        resp.send(dados);
    }
    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' })
    }
})

endpoints.put('/tarefa/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let tarefa = req.body;
        let dados = await alterarTarefa(id, tarefa);
        resp.send() 
    }
    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' })
    }
})

endpoints.delete('/tarefa/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let dados = await excluirTarefa(id);
        resp.send(); 
    }
    catch(err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' })
    }
})

export default endpoints;