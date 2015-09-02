var config = require('config');
    sendgrid = require('sendgrid')(config.get('email.SENDGRID_USERNAME'), config.get('email.SENDGRID_PASSWORD'));

function sendEmail(_to, _from, _subject, _text) {
  var emailTemplate = new sendgrid.Email({
    to: _to,
    from: _from,
    subject: _subject,
    text: _text
  });
  sendgrid.send(emailTemplate,
  function(err,json) {
    if(err){console.error(err);}
    console.log(json);
  });
}




module.exports = sendEmail;
