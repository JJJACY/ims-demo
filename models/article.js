const Base = require('./base.js');
 
class Article extends Base{
  constructor(props = 'article'){
    super(props)
  }
}

module.exports = new Article();