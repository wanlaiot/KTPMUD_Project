import db from "../models/index";
import bcrypt from "bcryptjs";
const salt =bcrypt.genSaltSync(10);
// ham check dang nhap
let handleUserLogin=(email,password)=>{
    return new Promise(async(resolve,reject)=>{
        try{
    let userData={};
    let isExist = await checkUserEmail(email);
    if(isExist){
         let user= await db.User.findOne({
            attributes:['email','role','password','phone'],
            where: {email: email},
            raw:true
            
         });
         if(user){
            let check=await bcrypt.compareSync(password,user.password);
            if(check){
                userData.errCode=0;
                userData.errMessage="Dung mat khau";
                delete user.password;
                userData.user=user;
            }
            else{
                userData.errCode=3;
                userData.errMessage="Sai mat khau";
            }
         }
         else{
            userData.errCode=2;
            userData.errMessage="Nguoi dung khong ton tai"
         }
      

        }
         else{
            userData.errCode=1;
            userData.errMessage="Email khong ton tai";              
        }
        resolve(userData)
    }
    catch(e){
        reject(e);
    }
   })
}
// // ham check password - da co trong thu vien
// let compareUserPassword=()=>{

// }

// ham check email co ton tai trong he thong 
let checkUserEmail=(userEmail)=>{
    return new Promise(async(resolve,reject)=>{
     try{
         let user =await db.User.findOne({
             where: {
                 email: userEmail
             }
         })
         if(user){
             resolve(true)
         }
         else{
             resolve(false)
         }
     }
     catch(e){
         reject(e);
     }
    })
 }
 let getAllUsers=(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let users='';
            // id All thi lay het thong tin cua tat ca nguoi dung
           if(userId === 'All'){
            users= await db.User.findAll({
                // khong lay thuoc tinh password cho client
               attributes:{
                exclude:['password']
               }
            })
           }
           if(userId&&userId !== 'All'){
            users=await db.User.findOne({
                where: {id:userId},
                attributes:{
                    exclude:['password']
                   }
            })
           }
           // neu khong 
           resolve(users)
        }
        catch(e){
           reject(e);
        }
    });
}
// hash password cua user
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
let createNewUser=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            
                let check=await checkUserEmail(data.email);
                if(check===true){
                    resolve({
                        errCode:1,
                        message:"email da duoc su dung"
                    })
                }
                //  if(check !==true){
            let hashPasswordFromBcrypt=await hashUserPassword(data.password);
            await db.User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    role: data.role,
    isActive: data.isActive,
    password: hashPasswordFromBcrypt,
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
let deleteUser=(userId)=>{
    return new Promise(async(resolve,reject)=>{
        let user= await db.User.findOne({
            where:{id:userId},
            //raw:false
        })
        if(!user){
            resolve({
                errCode:2,
                errMessage:"Nguoi dung khong ton tai"
            })
        }
        await db.User.destroy({
            where:{id:userId}
        })
        resolve({
            errCode:0,
            errMessage:"Tai khoan da duoc xoa"
        })

    })
}
let updateUserData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:"khong co id truyen vao"
                })
            }
            let user=await db.User.findOne({
                where: {id: data.id},
                raw: false
            
            })
            if(user){
                user.firstName=data.firstName;
                user.lastName=data.lastName;
                user.phone=data.phone;
                user.role=data.role;
                await user.save();
                resolve({
                    errCode:0,
                    errMessage:"Update thanh cong"
                })
            }else{
                resolve({
                    errCode:1,
                    errMessage:"Nguoi dung khong tim thay"
                });
            }
          
        }
        catch(e){
            reject(e);
        }

    })
}
 // xuat ham ra khoi file
 module.exports={
    checkUserEmail:checkUserEmail,
    handleUserLogin:handleUserLogin,
    getAllUsers:getAllUsers,
createNewUser:createNewUser,
deleteUser:deleteUser,
updateUserData:updateUserData
 }