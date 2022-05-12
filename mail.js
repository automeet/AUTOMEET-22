function sendEmail() {
  // alert("clicked")
  var email = document.getElementById('sMail').value;
  var msg = document.getElementById("sMessage").value;
  var name = document.getElementById("sName").value;
  var mobile = document.getElementById("sMobile").value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "automeet22@gmail.com",
    Port: "2525",
    Password: "868879D21155CEDE75BD5E7C9B3C7800E7A8",
    To: 'automeet22@gmail.com',
    From: 'automeet22@gmail.com',
    Subject: "Regarding Automeet'22",
    Body: `Name : ${name} Mobile : ${mobile} Message : ${msg}`
  }).then(
    message => alert("Email Sent Successfully.")
  )
}
