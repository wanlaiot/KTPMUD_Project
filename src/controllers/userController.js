// controller cho user
import userService from "../services/userService";
// ham check thong tin dang nhap
let handleLogin =async(req,res)=>{
    console.log('test thanh cong');
    let email=req.body.email;
    let password =req.body.password;
    if(!email || !password){
    return res.status(500).json({
        errCode:1,
        message:'thieu thong tin dang nhap'

    })
}
 let userData=await userService.handleUserLogin(email,password);
return res.status(200).json({
    errCode:userData.errCode,
    message:userData.errMessage,
    user:userData.user?userData.user:{}
    
 })
}
// ham lay tat ca thong tin nguoi dung
let handleGetAllUsers=async(req,res)=>{
    let id= req.body.id; // All, id
    let users=await userService.getAllUsers(id);
    if(!id){
        return res.status(200).json(
            {
                errCode:1,
                errMessage:"khong co id duoc truyen vao",
                users:[]
            }
        )
    }
    return res.status(200).json({
        errCode:0,
        errMessage:'OK',
        users
    })
}
// api them nguoi dung moi
let handleCreateNewUser=async(req,res)=>{
    let message=await userService.createNewUser(req.body)
    
    return res.status(200).json(message);
}
// api xoa nguoi dung
let handleDeleteUser=async(req,res)=>{
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage:'khong co id truyen vao'
        })
    }
    let message=await userService.deleteUser(req.body.id)
    
    return res.status(200).json(message);
}
// api sua thong tin nguoi dung
let handleEditUser=async(req,res)=>{
    let data=req.body;
    let message=await userService.updateUserData(data);
    return res.status(200).json(message);
}
module.exports={
    handleLogin:handleLogin,
    handleGetAllUsers:handleGetAllUsers,
    handleCreateNewUser:handleCreateNewUser,
    handleEditUser:handleEditUser,
    handleDeleteUser:handleDeleteUser,
}
