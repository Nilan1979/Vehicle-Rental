const User = require("../Models/UserModel");



//Data diplay 
const getAllUsers = async (req,res,next)=>{

    let Users;

    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }

    //not found
    if(!users){
    return res.status(404).json({message:"User not found"});
    }

    //Display all users
    return res.status(200).json({users});

};


// Data Insert
const addUser= async(req,res,next)=>{
    const {name,email,age,address} = req.body;

    let users;

    try{
        users = new User({
            name,
            email,
            age,
            address,
        });
        await users.save();
    }catch(err){
       console.log(err); 
    }

    // not insert users
    if(!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({users});
}


// Get by ID
const getById = async(req,res,next) => {

    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }

    // not available users
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({user});
}

// Update User data
const updateUser = async(req,res,next) => {

    const id = req.params.id;
    const {name,email,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
            {name: name,
                email: email,
                age: age,
                address: address
            }
        );
        users = await users.save();
    }catch(err){
        console.log(err);
    }
    // not update users
    if(!users){
        return res.status(404).json({message:"Unable to Update user details"});
    }
    return res.status(200).json({users});
}

// Delete User 
const deleteUser = async (req,res,next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"Unable to Delete user "});
    }
    return res.status(200).json({user});

}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser= updateUser;
exports.deleteUser = deleteUser;
