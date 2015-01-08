module.exports = function(options) {
  console.log('lytics init');
  
  return function (req, res, next) {
    
    next();
  }


}
