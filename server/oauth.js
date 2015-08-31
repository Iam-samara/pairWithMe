// var passport = require('passport'),
//     GitHubStrategy = require('passport-github').Strategy,
//     InternalOAuthError = require('passport-oauth2').InternalOauthError,
//     config = require('config'),
//     cookieParser = require('cookie-parser'),
//     bodyParser = require('body-parser');
//
// var exports = module.exports = {};
//
// app.use(cookieParser);
// app.use(bodyParser);
// app.use(passport.initialize());
// app.use(passport.session());
//
// /** request to Github, w.out specifying scope
//   * should get back: user: email & follow, public repo info, and gist **/
// passport.use(new oAuth2Strategy({
//   clientID: config.get('oAuth.clientID'),
//   clientSecret: config.get('oAuth.clientSecret'),
//   callbackURL: 'http://localhost:3000/auth/github/callback',
//   userAgent: 'pairWithMe'
// },
// function(accessToken, refreshToken, profile, done) {
//   //var new User model and save what we want
//   /**
//   var gitUser = new User({
//     _id: profile._json.id,
//     email: profile._json.email,
//     token:
//   });
//   gitUser.save(function() {
//     console.log('user saved to db');
//   });
//
//   */
//   console.log(profile);
//
// }));
//
// /** Github login
//   * serializeuser stores the user id in the session
//   * deserializeuser gets the user from database and store it in req.user */
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// pasport.deserializeUser(function(user, done) {
//   User.find({id: user.id?}, function() {
//
//   })
//   done(null, user);
// });
//
// /** authenticate every request */
// // app.get('/projects', passport.authenticate('oauth2'));
// // app.get('/profile', passport.authenticate('oauth2'));
//
// app.get('/auth/github', passport.authenticate('github'), function(req,res) {
//   //request will redirect to Githib for authentication
// });
//
// /** authenticates callback */
// app.get('/auth/github/callback', passport.authenticate('oauth2', {failureRedirect: 'login'}), function(req,res) {
//   //on success authentication
//   res.redirect('/profile' + req.user.username); // want to redirect to their profile and post their username in the url
// });
//
// app.get('/logout', function(req,res) {
//   req.logout();
//   res.redirect('/');
// });
//
// /** use this middleware on any routes that need to be protected */
// function ensureAuthentication(req.res, next) {
//   if(req.isAuthenticated()) {return next();}
//   res.redirect('/login');
// }
//
//
// //
// // app.post('/auth/github',
// //   passport.authenticate('github'));
//
// // app.get('/auth/callback',
// //   passport.authenticate('github', {
// //   failureRedirect: '/login' }),
// //   function(req, res) {
// //     // Successful authentication, redirect home.
// //     res.redirect('/');
// //   });
// /** config routes
//   *if successful it re-routes to the users profilepage
//   * else, it goes back to the home page?
//   */
// // app.get('/auth/callback', passport.authenticate('github', {
// //   successRedirect: "/profile",
// //   failureRedirect: "/"
// // }));
//
// /** authenticates request using the specifued strategy.
// if error, sends 401 error else, redirects and req.user will be set ti the authenticated user.  */
// // app.post('/login', passport.authenticate('oauth2'), function(req, res) {
// //   //authentication was successful
// //   //req.user contains the authenticated user
// //   res.redirect('/' + req.user.username);
// // });
// //module.exports = ?;
