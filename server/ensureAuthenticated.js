// app/middlewares/ensureAuthenticated.js
function ensureAuthenticated(req,res,next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/guide');
  }
}

module.exports = ensureAuthenticated;
