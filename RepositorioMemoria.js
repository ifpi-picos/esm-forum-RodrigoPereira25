const perguntas = [{
    "id_pergunta": 1,
    "texto": "Qual a capital de MG?",
    "id_usuario": 1,
},
{
    "id_pergunta": 2,
    "texto": "Qual a capital de RJ?",
    "id_usuario": 1,
},
{
    "id_pergunta": 3,
    "texto": "Qual a capital de SP?",
    "id_usuario": 1,
}
];
var n_respostas = new Map();
n_respostas.set(1,{ 'count(*)': 5 });
n_respostas.set(2,{ 'count(*)': 10 });
n_respostas.set(3,{ 'count(*)': 15 });

function recuperar_todas_perguntas() {
    perguntas.forEach(pergunta => pergunta['num_respostas'] = recuperar_num_respostas(pergunta['id_pergunta']));
    return perguntas;
}

function recuperar_pergunta(id_pergunta) {
}

function recuperar_todas_respostas(id_pergunta) {
}

function recuperar_num_respostas(id_pergunta) {
    const resultado = n_respostas.get(id_pergunta);;
    return resultado['count(*)'];
}

function criar_pergunta(texto) {
}

function criar_resposta(id_pergunta, texto) {
}

exports.recuperar_todas_perguntas = recuperar_todas_perguntas;
exports.recuperar_pergunta = recuperar_pergunta;
exports.recuperar_todas_respostas = recuperar_todas_respostas;
exports.recuperar_num_respostas = recuperar_num_respostas;
exports.criar_pergunta = criar_pergunta;
exports.criar_resposta = criar_resposta;
