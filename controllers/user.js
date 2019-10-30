const User = require('./../models/user');
const userController ={
  all:async function(req,res,next){
    try{
       const user = await User.all();
       res.json({code: 200,data: user}) 
    }catch(err){
      console.log(err)
      res.json({code:0, message:"内部错误"})
    }
  },
  insert: async function(req,res,next){
    let name = req.body.name;
    let tel  = req.body.tel;
    let password = req.body.password;
    if(!name || !tel || !password){
      res.json({code: 0,message: '缺少必要参数'})
      return
    }
    try{
      const users = await User.insert({
          name,tel,password
      })
      let user = users[0];
      res,json({code:200,data:user})
    }catch(err){
      console.log(err);
      res.json({code: 0,message:'内部错误'})
    }
  },
  updata: async function(req,res,next){
    let  id = req.params.id;
    let name = req.body.name;
    let tel  = req.body.tel;
    let password = req.body.password; 
    if(!name || !tel || !password){
      res.json({code: 0,message: '缺少必要参数'})
      return
    }
    try{
      const user = await User.updata(id,{
        name,tel,password
      })
      res.json({code:200,data:user})
    }catch(err){
      console.log(err);
      res.json({code:0,message:'内部错误'})
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      const users = await User.single({id});
      const user = users[0];
      res.json({code: 200,data:user})
    }catch(err){
      console.log(err)
      res.json({code: 0,message:'查找失败'})
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await User.delete(id);
      res.json({code:200,message:'删除成功'})
    }catch(err){
      console.log(err)
      res.json({code:0,message:'内部错误'})
    }
  }
  
}
module.exports = userController;