import { Router } from 'express';
import StudentController from 'ControlPath/studentcontroller';

const routes = Router();

routes.get('/students/', StudentController.getAllStudents);
routes.get('/students/:id', StudentController.getSingleStudent);
routes.get('/students/sortby/age',StudentController.getStudentsByAge);
routes.get('/students/sortby/name',StudentController.getStudentsByName);
routes.post('/students/create/', StudentController.addStudent);
routes.put('/students/:id', StudentController.updateStudent);
routes.delete('/students/:id', StudentController.deleteStudent);



export default routes;