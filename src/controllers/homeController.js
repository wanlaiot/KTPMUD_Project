import db from "../models/index"
import CRUDService from '../services/CRUDService';
let getHomePage = async(req,res) =>{
    try {
        let data =await db.User.findAll();
        
return res.render("homepage.ejs",
{
    data:JSON.stringify(data)
})
} catch(e){
    console.log(e);
}
}
// ham lay du lieu tu nguoi dung khi dang ky tai khoan
let getCRUD=async(req,res)=>{
    return res.render("crud.ejs");
  }
let postCRUD=async(req,res)=>{
    let message=await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from server");}
    //ham hien thi du lieu nguoi dung de them sua xoa
let displayGetCRUD=async(req,res)=>{
    let data=await CRUDService.getAllUsers();
    console.log("---------------------");
    console.log(data);
    console.log("---------------------");
    return res.render("displayCRUD.ejs",{
        dataTable: data
    });
}
// ham de edit du lieu nguoi dung
let getEditCRUD=async(req,res)=>{
let userId=req.query.id;
console.log(userId);
if(userId){
    let userData=await CRUDService.getUserInforById(userId);
    // console.log("-----------------------");
    // console.log(userData);
    // console.log("-----------------------");
     return res.render('editCRUD.ejs',{
        user:userData
     });                              // co loi o day: userData never read
}
else
{
    return res.send("User not found");
}
}

let putCRUD= async(req,res)=>{
    let data=req.body;
    let allUser=await CRUDService.updateUserData(data);
  return res.render('displayCRUD.ejs',{
    dataTable: allUser
  })
}
let deleteCRUD=async(req,res)=>{
    let id=req.query.id;
    if(id){
        await CRUDService.deleteUserById(id);
        return res.send('Xoa thanh cong');
    }
    else{
        return res.send('Khong tim thay user');
    }
    
}
//xuat cac ham ra khoi file nay
module.exports= {
getHomePage: getHomePage,
getCRUD:getCRUD,
postCRUD:postCRUD,
displayGetCRUD:displayGetCRUD,
getEditCRUD:getEditCRUD,
putCRUD:putCRUD,
deleteCRUD:deleteCRUD,
}