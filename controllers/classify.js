const Classify = require('./../models/classify');
const classifyController={
  all:async function(req,res,next){
    try{
       const classify = await Classify.all();
       res.json({code: 200,data: classify}) 
    }catch(err){
      console.log(err)
      res.json({code:0, message:"内部错误"})
    }
  },
  insert: async function(req,res,next){
    let classify_name = req.body.classify_name;
    if(!classify_name){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const classify = await Classify.insert({classify_name});
      let id = classify[0];
      res.json({code:200,data:{id}});
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  update: async function(req,res,next){
    let id = req.params.id;
    let classify_name = req.body.classify_name;
    if(!classify_name){
      res.json({code:0,message:'缺少参数'})
      return
    }
    try{
      const classify = await Classify.update(id,{classify_name});
      res.json({code:200,data:classify})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  },
  single: async function(req,res,next){
    let id = req.params.id;
    try{
      const classifys = await Classify.single({id});
      const classify =classifys[0];
      res.json({code: 200, data:classify});
    }catch(e){
      console.log(e);
      res.json({code:0,message:'内部错误'})
    }
  },
  delete: async function(req,res,next){
    let id = req.params.id;
    try{
      await Classify.delete(id);
      res.json({code:200,message:'删除成功'})
    }catch(e){
      console.log(e)
      res.json({code:0,message:'内部错误'})
    }
  }
}

module.exports = classifyController;