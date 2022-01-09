const Userservice = require('../services/user.services');
const Transactionservice = require('../services/transaction.services');
const Productservice = require('../services/product.services');
let getuserloginPage = async (req, res) => {
    let data = await Userservice.getalluser();
  //  console.log(data);
   res.render('admin/getalluser',{alldatauser:data});
}
let getallorder = async (req, res) => {
    let data = await Transactionservice.getalltransactions();
   res.render('admin/getorder',{alldataorder:data});
}

let gethome = async (req, res) => {
 
   res.render('admin/testtable');
}
let login= async (req, res) => {
    res.render('login');
}
let checklogin= async (req, res) => {
    res.redirect("/admin/gethome");
}
let getallproduct= async (req, res) => {
    let allproduct = await Productservice.getallitem();
    res.render('admin/getallproduct',{alldataproduct:allproduct});
}
module.exports = {
    login:login,
    checklogin:checklogin,
    gethome:gethome,
    getallorder:getallorder,
    getuserloginPage: getuserloginPage,
    getallproduct:getallproduct,

}