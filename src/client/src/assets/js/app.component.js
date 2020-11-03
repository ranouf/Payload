function init(apiKey) {
  Payload(apiKey)

  return new Promise((resolve, reject) => {
    var checkout = new Payload.Form({
      form: document.getElementById('checkout-form'),
      autosubmit: false
    }).on('processed', function (evt) {
      debugger;
      resolve(evt);
    }).on('invalid', function (evt) {
      debugger;
      //handle invalid data
      $(evt.target).css({ background: 'red' })
      alert(evt.message)
    }).on('valid', function (evt) {
      debugger;
      //revert to a valid input
      $(evt.target).css({ background: 'white' })
    }).on('error', function (evt) {
      debugger;
      resolve(evt);
    }).on('declined', function (evt) {
      debugger;
      //handle declined payment
      console.log(evt.status_code)
      alert(evt.message)
    });
  });
}
 
