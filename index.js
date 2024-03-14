const { Aluno, Turma, turmaPresencial } = require('./ex_pratico');

    let aluno = new Aluno('Victor Moreira', 'victor.moreira', '2503581');
    let turma = new Turma('Victor Moreira', 'victor.moreira', '2503581', 'AS64B ', 7);
    let tchurma = new turmaPresencial('Victor Moreira', 'victor.moreira', '2503581', 'AS64B ', 7, 95);

const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({
        "Aluno": aluno,
        "Turma": turma,
        "Turma Presencial": tchurma,
        "Turma funcao": turma.aprovado(),
        "Turma Presencial funcao": tchurma.aprovado()
    }));
})

server.listen(port, host, ()=>{
    console.log("Funcionando.....")
})