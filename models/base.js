const knex = require('./knex');
class Base {
  constructor(props){
    this.table = props
  }
  //查找所有数据
  all(){
    return knex(this.table).select()
  }
  //查找单个数据
  single(id){
    return knex(this.table).where({id:id});
  }
  insert(params){
    return knex(this.table).insert(params);
  }
  updata(id,params){
    return knex(this.table).where({id:id}).updata(params)
  }
  delete(id){
    return knex(this.table).where({id:id}).del();
  }
}

module.exports = Base;
