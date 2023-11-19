import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
   
    //router.get('/about', homeController.getAboutPage);
    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);
    //  router.get('/Members',(req,res)=>{
    //    return res.send('Member');
    //        });
            router.post("/post-crud",homeController.postCRUD);
            router.get("/get-crud",homeController.displayGetCRUD);
            router.get("/edit-crud",homeController.getEditCRUD);
        

    return app.use("/", router);
}

module.exports = initWebRoutes;