import db from "../models/index";
let createNewProject=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let check=await checkNameProject(data.name);
                if(check.errCode===0){
                    resolve({
                        errCode:1,
                        message:"ten project da duoc su dung"
                    })
                }
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
// ham xoa project
let deleteProject=(projectId)=>{
    return new Promise(async(resolve,reject)=>{
        let project= await db.Project.findOne({
            where:{id:projectId},
            //raw:false
        })
        if(!project){
            resolve({
                errCode:2,
                errMessage:"Project khong ton tai"
            })
        }
        await db.Project.destroy({
            where:{id:projectId}
        })
        resolve({
            errCode:0,
            errMessage:"Project da duoc xoa"
        })
        
    })
}
// ham sua du lieu project
let updateProjectData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:"khong co id truyen vao hehe"
                })
            }
            let project=await db.Project.findOne({
                where: {id: data.id},
                raw: false
            
            })
            if(project){
                project.name=data.name;
                project.description=data.description;
                project.status=data.status;
                project.startTime=data.startTime;
                project.income=data.income;
                await project.save();
                resolve({
                    errCode:0,
                    errMessage:"Update thanh cong"
                })
            }else{
                resolve({
                    errCode:1,
                    errMessage:"Project khong tim thay"
                });
            }
          
        }
        catch(e){
            reject(e);
        }

    })
}
module.exports={
    createNewProject:createNewProject,
    checkNameProject:checkNameProject,
    getAllProject:getAllProject,
    deleteProject:deleteProject,
    updateProjectData:updateProjectData
}