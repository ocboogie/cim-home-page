/* global variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

// The jsbin for the billing address thing wasn't working so I just left it out

// I made a ie7 compatible addEventListener function
function addEventListenerCross(elem, event, func, bool) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func, bool);
  } else if (elem.attachEvent) {
    elem.attachEvent(`on${event}`, func);
  }
}

function placeholderPollyFill() {
  if (!Modernizr.input.placeholder) {
    var messageBox = document.getElementById("customText");
    messageBox.value = messageBox.placeholder;
    messageBox.style.color = "rgb(178,184,183)";
    addEventListenerCross(messageBox, "focus", zeroPlaceholder, false);
    addEventListenerCross(messageBox, "blur", checkPlaceholder, false);
  } // end if Modernizer
}

function autoCheckCustom() {
  var messageBox = document.getElementById("customText");
  if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
    // if user entry in textarea, check Custom check box
    document.getElementById("custom").checked = "checked";
  }
}

// for IE8 on focus call zeroPlaceHolder
function zeroPlaceholder() {
  var messageBox = document.getElementById("customText");
  messageBox.style.color = "black";
  if (messageBox.value === messageBox.placeholder) messageBox.value = "";
}

// for IE8 on blur of messageBox  call checkPlaceholder
function checkPlaceholder() {
  var messageBox = document.getElementById("customText");
  if (messageBox.value === "") {
    messageBox.style.color = "rgb(178,184,183)";
    messageBox.value = messageBox.placeholder;
  }
}

function removeSelectDefaults() {
  var selects = document.getElementsByTagName("select");
  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = "-1";
  }
}

// set up node building blocks for selection list of days
function setupDays() {
  var dates = document
    .getElementById("delivDy")
    .getElementsByTagName("option");

  // default is 1..28, index 0..27
  twentyNine.appendChild(dates[28].cloneNode(true)); // add 29th

  thirty.appendChild(dates[28].cloneNode(true));
  thirty.appendChild(dates[29].cloneNode(true)); // add 29th & 30th

  thirtyOne.appendChild(dates[28].cloneNode(true));
  thirtyOne.appendChild(dates[29].cloneNode(true));
  thirtyOne.appendChild(dates[30].cloneNode(true)); // add 29th, 30th
}

/* copy values for Billing Address fields to Delivery Address fields */
function copyBillingAddress() {
  var billingInputElements = document.querySelectorAll("#billingAddress input");

  var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");

  if (document.getElementById("sameAddr").checked) {
    for (var i = 0; i < billingInputElements.length; i++) {
      deliveryInputElements[i + 1].value = billingInputElements[i].value;
    }
    document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
  } else {
    for (var i = 0; i < billingInputElements.length; i++) {
      deliveryInputElements[i + 1].value = "";
    }
    document.querySelector("#deliveryAddress select").selectedIndex = -1;
  }
}

function updateDays() {
  var deliveryDay = document.getElementById("delivDy");
  var dates = deliveryDay.getElementsByTagName("option");
  var deliveryMonth = document.getElementById("delivMo");
  var deliveryYear = document.getElementById("delivYr");
  var selectedMonth =
    deliveryMonth.options[deliveryMonth.selectedIndex].value;

  while (dates[28]) {
    // remove child with index of 28 until this index is empty
    deliveryDay.removeChild(dates[28]);
  }

  if (deliveryYear.selectedIndex === -1) {
    // if no year is selected, choose the first year
    deliveryYear.selectedIndex = 0;
  }

  if (
    selectedMonth === "2" &&
    deliveryYear.options[deliveryYear.selectedIndex].value === "2020"
  ) {
    // if leap year, Feb has 29 days
    deliveryDay.appendChild(twentyNine.cloneNode(true));
  } else if (
    selectedMonth === "4" ||
    selectedMonth === "6" ||
    selectedMonth === "9" ||
    selectedMonth === "11"
  ) {
    // Thirty days have November, April, June, and September
    // 4 6, 9 and 11
    // these months have 30 days
    deliveryDay.appendChild(thirty.cloneNode(true));
  } else if (
    selectedMonth === "1" ||
    selectedMonth === "3" ||
    selectedMonth === "5" ||
    selectedMonth === "7" ||
    selectedMonth === "8" ||
    selectedMonth === "10" ||
    selectedMonth === "12"
  ) {
    // these months have 31 days
    deliveryDay.appendChild(thirtyOne.cloneNode(true));
  } // switch looks good here
}

function checkCreditCard() {
  /* make sure numbers and card match */
  var ccName = document.querySelector('input[name="PaymentType"]:checked');
  if (ccName == null) {
    var ccError = document.getElementById("ccNumErrorMessage");
    ccError.innerHTML = "Select Credit Card Type";
    ccError.style.display = "block";
    return false;
  }

  console.log(ccName.value);
  return true;
}

function checkPasswords() {

  /* if username have been entered, passwords must match */
  var user = document.getElementById("username").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;

  console.log("calling checkpassword");
  if (user != "" || pass1 != "" || pass2 != "") {
    var msg = "";
    if (user === "" || pass1 === "" || pass2 == "")
      msg = "Complete all fields for username/password";
    else if (pass1 != "" && pass1 != pass2)
      msg = "Passwords must match";
    console.log("possible bad password, msg: " + msg);
    if (msg != "") {
      document.getElementById("errorText").innerHTML = "see message below";
      document.getElementById("errorText").style.display = "block";
      var specific = document.querySelector("fieldset#createAccount .errorMessage");
      console.log(specific);
      specific.innerHTML = msg;
      specific.style.display = "block";
      specific.style.backgroundColor = "lime";
      specific.style.fontSize = "14px";
      specific.style.fontWeight = "bolder";
      scroll(0, 0);
      return false;
    }
  }  //attempting username password

  document.getElementById("errorText").innerHTML = "";
  document.getElementById("errorText").style.display = "none";
  document.getElementsByTagName("form")[0].submit();
  return true;
}

// create event listeners
function addEventListeners() {
  var deliveryMonth = document.getElementById("delivMo");
  addEventListenerCross(deliveryMonth, "change", updateDays, false);
  // we are doing same task more than once it should be a fucntion

  var deliveryYear = document.getElementById("delivYr");
  addEventListenerCross(deliveryYear, "change", updateDays, false);

  var messageBox = document.getElementById("customText");
  addEventListenerCross(messageBox, "blur", autoCheckCustom, false);

  var same = document.getElementById("sameAddr");
  addEventListenerCross(same, "click", copyBillingAddress, false);
  
  var ccNum = document.getElementById("ccNum");
  addEventListenerCross(ccNum, "blur", checkCreditCard, false);
}

/* run initial form configuration functions */
function setupPage() {
  removeSelectDefaults();
  setupDays();
  addEventListeners();
  placeholderPollyFill();
}

addEventListenerCross(window, "load", setupPage, false);
