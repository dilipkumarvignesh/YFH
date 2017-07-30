console.log();

function submit() {
console.log("Hellow");
}
var x = document.getElementById('formOne');
var y = document.getElementById('formTwo');

y.style.display = 'none';


var nname = document.getElementById('name');
var number = document.getElementById("number");
//var doc = document.getElementById("DOC");
//var tocf = document.getElementById("tocf");
///var toct = document.getElementById("toct");
//var dor = document.getElementById("dor");
var emailid = document.getElementById("emailid");
var mt = document.getElementById("mt");
var dob = document.getElementById("dob");
var country = document.getElementById("country");
var state = document.getElementById("state");
var city = document.getElementById("city");
var areaid = document.getElementById("areaid");
var address = document.getElementById("address");
var wors = document.getElementById("wors");
var qualification = document.getElementById("qualification");
var maritalS = document.getElementById("maritalS");
var gender = document.getElementById("gender");
var corC = document.getElementById("corC");
//var pdate = document.getElementById("pdate");
var passNo = document.getElementById("passNo");
var amountPaid = document.getElementById("amountPaid");
var amountBalance = document.getElementById("amountBalance");
var Source = document.getElementById("Source");


var name = "animated shake";











function dooo() {
  var x = emailid.value;
  var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

console.log(mt.value);
if (nname.value == "") {
  alert("Enter the Name");
}else if ((number.value <= 1000000000 || number.value >= 9999999999)){
  alert("Enter the Number");
}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
}else if (mt.value == "") {
  alert("Enter the mother Tounge");

}else if (dob.value == "") {
  alert("Enter the date of birth");

}else if (country.value == "") {
  alert("Enter the country");

}else if (state.value == "") {
  alert("Enter the state");

}else if (city.value == "") {
  alert("Enter the city");

}else if (areaid.value == "") {
  alert("Enter the area id");

}else if (address.value == "") {
  alert("Enter the address");

}else if (wors.value == "") {
  alert("Enter the status");

}else if (qualification.value == "") {
  alert("Enter the qualification");

}else if (maritalS.value == "") {
  alert("Enter the marital status");

}else if (gender.value == "") {
  alert("Enter the gender");

}else if (corC.value == "") {
  alert("Enter the Professon");

}

else{

  if (y.style.display === 'block') {
    y.style.display = 'none';
    x.style.display = 'block';

  } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }

}
}
