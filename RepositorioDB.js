const bd = require('./bd/bd_utils.js');

function recuperar_todas_perguntas() {
    const perguntas = bd.queryAll('select * from perguntas', []);
    perguntas.forEach(pergunta => pergunta['num_respostas'] = recuperar_num_respostas(pergunta['id_pergunta']));
    return perguntas;
}

function recuperar_pergunta(id_pergunta) {
    return bd.query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
}

function recuperar_todas_respostas(id_pergunta) {
    return bd.queryAll('select * from respostas where id_pergunta = ?', [id_pergunta]);
}

function recuperar_num_respostas(id_pergunta) {
    const resultado = bd.query('select count(*) from respostas where id_pergunta = ?', [id_pergunta]);
    return resultado['count(*)'];
}

function criar_pergunta(texto) {
    const params = [texto, 1];
    bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
}

function criar_resposta(id_pergunta, texto) {
    const params = [id_pergunta, texto];
    bd.exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', params);
}

function editar_pergunta(id, texto) {
    const params = [texto, id];
    bd.exec('UPDATE perguntas set texto=? where id_pergunta=?', params);
}

function remover_pergunta(id_pergunta) {
    const params = [id_pergunta];
    bd.exec('DELETE from perguntas where id_pergunta=?', params);
}

exports.recuperar_todas_perguntas = recuperar_todas_perguntas;
exports.recuperar_pergunta = recuperar_pergunta;
exports.recuperar_todas_respostas = recuperar_todas_respostas;
exports.recuperar_num_respostas = recuperar_num_respostas;
exports.criar_pergunta = criar_pergunta;
exports.criar_resposta = criar_resposta;
exports.editar_pergunta = editar_pergunta;
exports.remover_pergunta = remover_pergunta;
