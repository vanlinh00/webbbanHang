const Userservice = require('../services/user.services');
const Transactionservice = require('../services/transaction.services');
const Productservice = require('../services/product.services');
let getuserloginPage = async (req, res) => {
    let data = await Userservice.getalluser();
    //  console.log(data);
    res.render('admin/getalluser', { alldatauser: data });
}
let getallorder = async (req, res) => {
    let data = await Transactionservice.getalltransactions();
    res.render('admin/getorder', { alldataorder: data });
}

let gethome = async (req, res) => {

    res.render('admin/homeadmin');
}
let login = async (req, res) => {
    res.render('login');
}
let checklogin = async (req, res) => {
    res.redirect("/admin/gethome");
}
let getallproduct = async (req, res) => {
    let allproduct = await Productservice.getallitem();
    res.render('admin/getallproduct', { alldataproduct: allproduct });
}
let deleteProduct = async (req, res) => {
    try {
        console.log(req.body);
        let Product = await Productservice.deleteProduct(req.body.id);
        if (Product = !null) {
            return res.status(200).json({
                'message': 'success'
            })

        }

    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}


let addProduct = async (req, res) => {
    console.log(req.body);
    // var user = {
    //     "id_user": req.query.id,
    //     "name_user": req.body.name_user,
    //     //    "sdt_user":req.body.sdt_user,
    //     "pass_user": req.body.pass_user,
    //     "linkuser": req.body.linkuser,
    //     "role": (req.body.role == "Admin") ? 1 : 0,
    // }
    // if (req.body.name_user == "" || req.body.sdt_user == "" || req.body.pass_user == "") {
    //     req.flash('messages', "Parameter value is invalid");
    // }
    // else {
    //     req.flash('messages', "OK");
    //     var updateUser = await userservice.adminUpDateUserInfor(user);
    // }
    // res.redirect('/admin/getalluser');
}


let deleteOrder = async (req, res) => {
    try {
        console.log(req.body);
        let Product = await Productservice.deleteOrder(req.body.id);
        if (Product = !null) {
            return res.status(200).json({
                'message': 'success'
            })

        }

    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

module.exports = {
    login: login,
    checklogin: checklogin,
    gethome: gethome,
    getallorder: getallorder,
    getuserloginPage: getuserloginPage,
    getallproduct: getallproduct,
    deleteProduct: deleteProduct,
    addProduct: addProduct,
    deleteOrder:deleteOrder,

}