import { openDb } from '../configDb.js';


export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS usuarios ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, uf TEXT, cidade TEXT, data_nasc TEXT, vaga TEXT, pretensao INTEGER, plano TEXT)')
    })
}

export async function insertUsuario(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO usuarios (nome, email, telefone, uf, cidade, data_nasc, vaga, pretensao, plano) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [usuario.nome, usuario.email, usuario.telefone, usuario.uf, usuario.cidade, usuario.data_nasc, usuario.vaga, usuario.pretensao, usuario.plano]);
    });
    res.json({
        "statusCode": 200
    })
}
export async function selectAllUsuarios(req, res){
    openDb().then(db =>{
       db.all('SELECT * FROM usuarios')
       .then(usuarios => res.json(usuarios))
    });
}