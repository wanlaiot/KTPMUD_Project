import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import projectController from "../controllers/projectController"

let router = express.Router();

let initWebRoutes = (app) => {
   
    //router.get('/about', homeController.getAboutPage);
    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);
    
            router.post("/post-crud",homeController.postCRUD);
            router.get("/get-crud",homeController.displayGetCRUD);
            router.get("/edit-crud",homeController.getEditCRUD);
            router.post('/put-crud',homeController.putCRUD);
            router.get('/delete-crud',homeController.deleteCRUD); 
    router.post('/api/login',userController.handleLogin);
    router.get('/api/get-all-users',userController.handleGetAllUsers);
    router.post('/api/create-new-user',userController.handleCreateNewUser);
    router.put('/api/edit-user',userController.handleEditUser);
    router.delete('/api/delete-user',userController.handleDeleteUser);
    // router cho project

    router.get("/api/get-all-project",projectController.handleGetAllProject);
    router.post("/api/loginProject",projectController.handleLoginProject);
    router.post("/api/create-new-project",projectController.handleCreateNewProject);
    router.put('/api/edit-project',projectController.handleEditProject);
    router.delete('/api/delete-project',projectController.handleDeleteProject);
       
        

    return app.use("/", router);
}

module.exports = initWebRoutes;