var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    config = require('config');

/** request to Github, w.out specifying scope
  * user: email & follow, public repo url **/
passport.use(new GitHubStrategy({
  clientID: config.get('oAuth.clientID'),
  clientSecret: config.get('oAuth.clientSecret'),
  callbackURL: 'http://localhost:3000/auth/github/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
    var myobj = {};
    /** saving this use data */
    myobj.id = profile.id;
    myobj.username = profile.username;
    myobj.profileUrl = profile.profileUrl;
    myobj.emails = profile._json.email;
    myobj.profilePic = profile._json.avatar_url;
    myobj.token = accessToken;
    return done(null, myobj);
  });
}));

/** Github login
  * serializeuser stores the user id in the session
  * deserializeuser gets the user from database and store it in req.user */
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  // User.find({id: user.id?}, function() {
  //
  // })
  done(null, user);
});

/** use this middleware on any routes that need to be protected */
function ensureAuthentication(req,res, next) {
  if(req.isAuthenticated()) {return next();}
  res.redirect('/login');
}

module.exports = passport;
