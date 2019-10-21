import { Router } from 'express';
import StudentController from 'ControlPath/studentcontroller';
import path from 'path';

const routes = Router();

routes.get('/', (req,res)=>{
    
    res.send( 'hello');
})
routes.get('/students/', StudentController.getAllStudents);
routes.get('/students/:id', StudentController.getSingleStudent);
routes.get('/students/sortby/age',StudentController.getStudentsByAge);
routes.get('/students/sortby/name',StudentController.getStudentsByName);
routes.post('/students/create/', StudentController.addStudent);
routes.put('/students/:id', StudentController.updateStudent);
routes.delete('/students/:id', StudentController.deleteStudent);



export default routes;