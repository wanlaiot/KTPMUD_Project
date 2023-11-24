import db from "../models/index";
let createNewProject=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            await db.Project.create({
                name: data.name,
                description: data.description,
                status: data.status,
                startTime: data.startTime,
                income:data.income
                //password: hashPasswordFromBcrypt,
                //deleteAt: data.deleteAt,
                //createdAt:data.createdAt
                //updatedAt:data.updatedAt,
                        })
                    resolve({
                        errCode:0,
                        message:'ok'
                    })
        }
        catch(e){
            reject(e);
        }
    })

}
//ham check name project ton tai
let checkNameProject=(nameProject)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let projectData={};
            let name =await db.Project.findOne({
                //attributes:['name','description','status','startTime','income',],
                where: {
                    name: nameProject
                },
                raw:true
            })
            if(name){
            
                    projectData.errCode=0;
                    projectData.errMessage="Da tim thay project";
                    projectData.project=name
               
            }
            else{
               
                    projectData.errCode=1;
                    projectData.errMessage="Khong tim thay project"
                
            }
            resolve(projectData)
        }
        catch(e){
            reject(e);
        }
       })
}
// lay du lieu tat ca project
let getAllProject=(projectId)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let project='';
            // id All thi lay het thong tin cua tat ca nguoi dung
           if(projectId === 'All'){
            project= await db.Project.findAll({
                // khong lay thuoc tinh password cho client
            //    attributes:{
            //     exclude:['']
            //    }
            })
           }
           if(projectId&&projectId !== 'All'){
            project=await db.Project.findOne({
                where: {id:projectId},
                //khong lay thuoc tinh nao thi dien vao exclude
                // attributes:{
                //     exclude:['']
                //    }
            })
           }
           // neu khong 
           resolve(project)
        }
        catch(e){
           reject(e);
        }
    });
}
module.exports={
    createNewProject:createNewProject,
    checkNameProject:checkNameProject,
    getAllProject:getAllProject
}