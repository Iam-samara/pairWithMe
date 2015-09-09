var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    config = require('config'),
    request_module = require('request');

/** request to github using oauth, if successful it will redirect
  * to the callback route. on success it will run the callback function
  * which sends ANOTHER request to the API for the user email
  * in order to do so, we pause the asynchronous reading.
  * on success of the email request, we resume and create an object to
  * hold the wanted data retrieved from both requests.**/
passport.use(new GitHubStrategy({
  clientID: config.get('oAuth.clientID'),
  clientSecret: config.get('oAuth.clientSecret'),
  scope: ['user:email'],
  callbackURL: 'http://localhost:3000/auth/github/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
  console.log('callback'+accessToken);
  console.log(profile);
  var options = {
    url: 'https://api.github.com/user/emails?access_token='+accessToken,
    headers: {
      'User-Agent': 'pairWithMe'
    },
    json: true
  };
  request_module(options, function(err, res, body) {
    if(!err && res.statusCode === 200) {
      process.nextTick(function() {
        console.log(body);

        var userObj = {};
        userObj.id = profile.id;
        userObj.username = profile.username;
        userObj.profileUrl = profile.profileUrl;
        userObj.email = body[0].email;
        userObj.profilePic = profile._json.avatar_url;
        userObj.token = accessToken;
        console.log(userObj);
        return done(null, userObj);
      });
    }
    else{
      console.log(body);
      return done(err);
    }
  });
}));

/** Github login
  * serializeuser stores the user id in the session
  * deserializeuser gets the user from database and store it in req.user */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.model.findOne(id).done(function (userProfile) {
    done(null, userProfile);
  });

});

module.exports = passport;
