module.exports = (das) => {
  const students = require('../controllers/student.controller');
  const router = require('express').Router();

  router.get('/', students.findAll);
  router.post('/', students.create);
  router.get('/:id', students.findById);
  router.put('/:id', students.update);
  router.delete('/:id', students.delete);

  das.use('/api/students', router);
};
