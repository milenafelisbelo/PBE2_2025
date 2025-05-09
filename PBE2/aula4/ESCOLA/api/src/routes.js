const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/controlleraluno')
const Professor = require('./controllers/controllerprofessor')
const Turma = require('./controllers/controllerturma')
const Matricula = require('./controllers/controllermatricula')
const Disciplina = require('./controllers/controllerdisciplina')

routes.get('/aluno', Aluno.read)
routes.get('/aluno/:id', Aluno.readOne)
routes.post('/aluno', Aluno.create)
routes.put('/aluno/:ra', Aluno.update)
routes.delete('/aluno/:ra', Aluno.remove)

routes.get('/professor', Professor.read)
routes.get('/professor/:id', Professor.readOne)
routes.post('/professor', Professor.create)
routes.put('/professor/:id', Professor.update)
routes.delete('/professor/:id', Professor.remove)

routes.get('/turma', Turma.read)
routes.get('/turma/:id', Turma.readOne)
routes.post('/turma', Turma.create)
routes.put('/turma/:id', Turma.update)
routes.delete('/turma/:id', Turma.remove)

routes.get('/matricula', Matricula.read)
routes.get('/matricula/:id', Matricula.readOne)
routes.post('/matricula', Matricula.create)
routes.put('/matricula/:id', Matricula.update)
routes.delete('/matricula/:id', Matricula.remove)

routes.get('/disciplina', Disciplina.read)
routes.get('/disciplina/:id', Disciplina.readOne)
routes.post('/disciplina', Disciplina.create)
routes.put('/disciplina/:id', Disciplina.update)
routes.delete('/disciplina/:id', Disciplina.remove)

routes.get('/', (req, res) => {
    return res.json({ titulo: 'Escola Superior PW' });
  });

module.exports = routes;