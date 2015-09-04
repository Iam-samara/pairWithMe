var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    config = require('config');

/** request to Github, w.out specifying scope
  * user: email & follow, public repo url
  * when callback is successful it runs done()
  * done() sends back the user Obj holding data
  * specified to the server, server will save it to
  * the database **/
passport.use(new GitHubStrategy({
  clientID: config.get('oAuth.clientID'),
  clientSecret: config.get('oAuth.clientSecret'),
  callbackURL: 'http://localhost:3000/auth/github/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
    var userObj = {};
    /** saving this user data */
    userObj.id = profile.id;
    userObj.username = profile.username;
    userObj.profileUrl = profile.profileUrl;
    userObj.emails = profile._json.email;
    userObj.profilePic = profile._json.avatar_url;
    return done(null, userObj);
  });
}));

/** Github login
  * serializeuser stores the user id in the session
  * deserializeuser gets the user from database and store it in req.user */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err,user){
    done(err, user);
  });
});

/** authenticate every request */
// app.get('/projects', passport.authenticate('oauth2'));
// app.get('/profile', passport.authenticate('oauth2'));


/** use this middleware on any routes that need to be protected */
function ensureAuthentication(req,res, next) {
  if(req.isAuthenticated()) {return next();}
  res.redirect('/auth/github');
}

module.exports = passport;
