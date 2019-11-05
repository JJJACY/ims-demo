const User = require('./../models/user.js');
const authCodeFunc = require('./../utils/authcode.js');

const authController = {
  login: async function(req,res,next){
    console.log(123)
    let tel = req.body.tel;
    let password = req.body.password;
    if(!tel || !password){
      res.json({code: 0,data: "params empty!"})
      return
    }
    try{
      const users = await User.where({tel,password});
     // 看是否有用户存在
      const user = users[0];
      // 如果存在 
      if(user){
        // 将其邮箱、密码、id 组合加密
        let auth_Code = user.tel +'\t' + user.password +'\t' + user.id +'\t';
        auth_Code = authCodeFunc(auth_Code,'ENCODE');
        // 加密防止再 cookie 中，并不让浏览器修改
        // res.cookie('ac', auth_Code, { maxAge: 24* 60 * 60 * 1000, httpOnly: true });
        // res.cookie('user_name', user.name, { maxAge: 24* 60 * 60 * 1000, httpOnly: true });
        // 返回登录的信息
        res.json({code: 200,data:{token: auth_Code},message:'登陆成功'})
      }else{
        res.json({code: 0,message:'登陆失败,无此用户'})
      }
    }catch(e){
      console.log(e)
      res.json({code: 0,message:'系统问题请联系管理员'})
    }
  }
}

module.exports = authController;