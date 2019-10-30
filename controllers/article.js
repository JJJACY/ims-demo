const Article = require('./../models/article');
const articelController={
  all:async function(req,res,next){
    try{
       const article = await Article.all();
       res.json({code: 200,data: article}) 
    }catch(err){
      console.log(err)
      res.json({code:0, message:"内部错误"})
    }
  },
  insert: async function(req,res,next){
    let classify_id = req.body.classify_id;
    let title =req.body.title;
    let content =req.body.content;
    if(!classify_id || !title || !content){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const article = await Article.insert({
        classify_id,title,content
      })
      let id = article[0];
      res.json({code:200,data:{id}})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  updata: async function(req,res,next){
    let classify_id = req.body.classify_id;
    let title =req.body.title;
    let content =req.body.content;
    if(!classify_id || !title || !content){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const article = await Article.updata(id,{
        classify_id,title,content
      })
      res.json({code:200,data:article})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      const articles = await Article.single(id);
      const article = articles[0];
      res.json({code:200,data:article})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await Article.delete(id);
      res.json({code:200,message:'删除成功'});
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  }
}
module.exports = articelController;