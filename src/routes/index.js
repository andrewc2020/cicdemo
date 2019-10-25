import { Router } from 'express';
import StudentController from 'ControlPath/studentcontroller';
import path from 'path';

const routes = Router();

routes.get('/', (req,res)=>{
    
    res.send( '<ul>usage : <li>GET /students</li><li> GET /students/:id</li><li>GET /students/sortby/age</li><li>GET /students/sortby/name</li><li>POST /students/create/</li><li>PUT /students/:id</li><li>DELETE /students/:id</li></ul>' );
})
routes.get('/students/', StudentController.getAllStudents);
routes.get('/students/:id', StudentController.getSingleStudent);
routes.get('/students/sortby/age',StudentController.getStudentsByAge);
routes.get('/students/sortby/name',StudentController.getStudentsByName);
routes.post('/students/create/', StudentController.addStudent);
routes.put('/students/:id', StudentController.updateStudent);
routes.delete('/students/:id', StudentController.deleteStudent);



export default routes;