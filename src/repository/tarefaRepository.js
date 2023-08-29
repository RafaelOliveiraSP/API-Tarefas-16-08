import conexao from './connection.js';


/* Inserir uma tarefa*/

export async function inserirTarefa(tarefa) {
    let sql = 
        `insert into tb_tarefa 
                       (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro) 
                values ( ?, ?, ?, ?)`;

    let [resp] = await conexao.query(sql, [tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.dtcadastro]);

    tarefa.id = resp.insertId;
    return tarefa;    
}

/* Busca todas as tarefas*/ 

export async function listarTarefas() {
    let sql = `select * from tb_tarefa`;

    let [resp] = await conexao.query(sql);
    return resp;
}

/* Busca apenas as tarefas finalizadas*/

export async function listarFinalizadas(){
    let sql = `select * from tb_tarefa where bt_finalizado = 1`;

    let [resp] = await conexao.query(sql);
    return resp;
}

/* Altera uma tarefa*/

export async function alterarTarefa(id, tarefa){
    let sql = 
        `update tb_tarefa
            set     ds_tarefa       = ?,
                    nr_ordem        = ?,
                    bt_finalizado   = ?,
                    dt_cadastro     = ?
            where   id_tarefa       = ?`;

    let [resp] = await conexao.query(sql, [tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.dtcadastro, id]);
    return resp.affectedRows;
}

/* Exclui uma tarefa*/

export async function excluirTarefa(id){
    let sql = 
        `delete from tb_tarefa
                where id_tarefa = ?`;

    let [resp] = await conexao.query(sql, [id]);
    return resp.affectedRows;
}



