import bcrypt from 'bcryptjs';
import db from "../models/index";
const salt =bcrypt.genSaltSync(10);
let createNewUser=async(data)=>{
    // let hashPasswordFromBcrypt=await hashUserPassword(data.password);
    // console.log(data);
    // console.log(hashPasswordFromBcrypt)
    return new Promise(async(resolve,reject)=>{
        try{
            let hashPasswordFromBcrypt=await hashUserPassword(data.password);
            await db.User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    role: data.role,
    isActive: data.isActive,
    password: hashPasswordFromBcrypt,
    deleteAt: data.deleteAt,
    //createdAt:data.createdAt
    //updatedAt:data.updatedAt,
            })
        resolve("create success")
        }
        catch(e){
            reject(e);
        }
    })

}
let hashUserPassword=(password)=>{
    return new Promise(async(resolve,reject)=>{
   try{
     let hashPassword=await bcrypt.hashSync(password,salt);
   resolve(hashPassword);
    }catch(e){
    reject(e);
   }
    });
}

let getAllUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        try{
              let users =db.User.findAll({
                raw:true
              });
              resolve(users);      
        }
        catch(e){
            reject(e);
        }
    }
    )
}
// ham getuser de edit user trong table user
let getUserInforById=(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let user=await db.User.findOne({
                where:{id: userId},
                raw:true
            })
            if(user){
                //console.log(user)
                resolve(user)
            }
            else{
                resolve([])
            }
        }
        catch(e){
          reject(e);
        }
    })
}
module.exports={
    createNewUser:createNewUser,
    getAllUsers:getAllUsers,
    getUserInforById:getUserInforById
}