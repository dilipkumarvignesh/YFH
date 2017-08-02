console.log();

function submit() {
console.log("Hellow");

}
var x = document.getElementById("formOne");
var y = document.getElementById('formTwo');

y.style.display = 'none';
x.style.display = 'block';

var nname = document.getElementById('name');
var number = document.getElementById("number");

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
var age = document.getElementById("age");
var lOrOS = document.getElementById("lorOS");
var lOrOS2 = document.getElementById("lorOS2");


//var pdate = document.getElementById("pdate");
var passNo = document.getElementById("passNo");
var amountPaid = document.getElementById("amountPaid");
var amountBalance = document.getElementById("amountBalance");
var Source = document.getElementById("Source");
var gender2 = document.getElementById("genderf2");
var age2 = document.getElementById("age2");
var dateOfRegister = document.getElementById("dofR");

var dateOfProgram = document.getElementById("dofP");

var registerdBy = document.getElementById("rb");

var maritalS = document.getElementById("maritalS");

var age = document.getElementById("age");


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

}else if (age.value == "") {
  alert("Enter the Professon");

}
else if (maritalS.value == "") {
  alert("Enter the Professon");

}

else{
var x = document.getElementById("formOne");
var y = document.getElementById('formTwo');
console.log(gender.value);

genderf2.value = gender.value;
age2.value = age.value
lOrOS2.value = lOrOS.value
  if (y.style.display === 'block') {
console.log("IF");
    y.style.display = 'none';
    x.style.display = 'block';

  } else {
console.log("Else");
        y.style.display = 'block';
        x.style.display = 'none';
    }

}
}

















function btnPageTwo() {
  if (dateOfRegister.value == "") {
    alert("Enter the Date of register");

  }else if (dateOfProgram.value == "") {
    alert("Enter the date of program");

  }else if (registerdBy.value == "") {
    alert("Enter the name of registerd by");

  }else if (Source.value == "") {
    alert("Enter the source");

  }else if (amountPaid.value == "") {
    alert("Enter the amountPaid");

  }else if (amountBalance.value == "") {
    alert("Enter the enter the balance amount");

  }else if (passNo.value == "") {
    alert("Enter the pass number");

  }else {

    //Validation is done
  }
}
