var email = "hertznico@gmail.com";

var newEmail = email.replace("gmail", "sfr");
console.log(email);
console.log(newEmail);


var awesomeThoughts = "My name is Nicolas and i am awesome";

var funThoughts = awesomeThoughts.replace("awesome", "fun");




var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developper";

var formattedRole = HTMLheaderRole.replace("%data", role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);
