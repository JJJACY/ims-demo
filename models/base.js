const knex = require('./knex');
class Base {
  constructor(props){
    this.table = props
  }
  //查找所有is_delete为null数据
  all(){
    return knex(this.table).whereNull('is_delete').select()
  }
  //查找单个数据
  single(id){
    return knex(this.table).where({id:id});
  }
  insert(params){
    return knex(this.table).insert(params);
  }
  update(id,params){
    return knex(this.table).where({id:id}).update(params)
  }
  delete(id){
    return knex(this.table).where({id:id}).update(params);
  }
  select(params){
    return knex(this.table).select().where(params)
  }
}

module.exports = Base;
