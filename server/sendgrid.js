var config = require('config');
    sendgrid = require('sendgrid')(config.get('email.SENDGRID_USERNAME'), config.get('email.SENDGRID_PASSWORD'));

/** sendemail params fills in the template
  * uses our apps heroku config authentication keys to send
  * if successful, message prints on terminal*/
function sendEmail(_to, _from, _subject, _text) {
  //basic email template that is sent
  var emailTemplate = new sendgrid.Email({
    to: _to,
    from: _from,
    subject: _subject,
    text: _text
  });
  //sendgrid sends the template
  sendgrid.send(emailTemplate,
  function(err,json) {
    if(err){console.error(err);}
    console.log(json);
  });
}
module.exports = sendEmail;
