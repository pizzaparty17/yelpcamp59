module.exports = func => {
  //returns a new function
  return(req, res, next) => {
    //catches any errors and sends it to next
    func(req, res, next).catch(next)
  }
}
