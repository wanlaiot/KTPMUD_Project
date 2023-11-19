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
    console.log("-----------------------");
    console.log(userData);
    console.log("-----------------------");
     return res.send("User found");                              // co loi o day: userData never read
}
else
{
    return res.send("User not found");
}
}
//return res.send("Da vao route edit-user")};
//xuat cac ham ra khoi file nay
module.exports= {
getHomePage: getHomePage,
getCRUD:getCRUD,
postCRUD:postCRUD,
displayGetCRUD:displayGetCRUD,
getEditCRUD:getEditCRUD,


}