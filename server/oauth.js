var passport = require('passport'),
    OAuth2Strategy = require('passport-oauth2'),
    InternalOAuthError = require('passport-oauth2').InternalOauthError;

/** request to Github, w.out specifying scope
  * should get back: user: email & follow, public repo info, and gist **/
passport.use(new GitHubStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
  //var new User model and save what we want?
  console.log(profile);
}))

/** Github login
  * serializeuser stores the user id in the session
  * deserializeuser gets the user from database and store it in req.user */
passport.serializeUser(function(user, done) {
  done(null, user);
});
pasport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());


/** config routes
  *if successful it re-routes to the users profilepage
  * else, it goes back to the home page?
  */
app.get('/auth/callback', passport.authenticate('github', {
  successRedirect: "/profile",
  failureRedirect: "/"
}));

//module.exports = ?;
