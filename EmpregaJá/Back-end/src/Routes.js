import { Router } from 'express';
import { createTable, insertUsuario, selectAllUsuarios } from './Controller/Usuario.js';

const routes = Router();

routes.get('/', (req, res)=>{
    res.json({
        "statuscode": 200,
        "msg": "Api Rodando"
    })
})

createTable();

routes.get('/usuarios', selectAllUsuarios)
routes.post('/usuario', insertUsuario)


export default routes;