/* global variables */
var twentyNine;
var thirty;
var thirtyOne;

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
    $("#customText")
      .val(messageBox.placeholder)
      .css("color", "rgb(178, 184, 183)")
      .bind("focus", zeroPlaceholder)
      .bind("blur", checkPlaceholder)
  } // end if Modernizer
}

function autoCheckCustom() {
  var messageBox = $("#customText");
  if (messageBox.val() !== "" && messageBox.val() !== messageBox.attr("placeholder")) {
    // if user entry in textarea, check Custom check box
    $("#custom").prop("checked", true);
  }
}

// for IE8 on focus call zeroPlaceHolder
function zeroPlaceholder() {
  var messageBox = $("#customText")
    .css("color", "black");
  if (messageBox.val() !== messageBox.attr("placeholder")) messageBox.val("");
}

// for IE8 on blur of messageBox  call checkPlaceholder
function checkPlaceholder() {
  var messageBox = $("#customText");
  if (messageBox.val() === "") {
    messageBox.css("color", "rgb(178,184,183)")
      .val(messageBox.attr("placeholder"))
  }
}

function removeSelectDefaults() {
  $("select").each(function () {
    $(this).prop("selectedIndex", -1);
  });
}

// set up node building blocks for selection list of days
function setupDays() {
  var dates = $("#delivDy > option");

  // default is 1..28, index 0..27
  twentyNine = dates.eq(28).clone();
  
  thirty = dates.eq(28).clone();
  thirty = thirty.add(dates.eq(29).clone()); // add 29th & 30th

  thirtyOne = dates.eq(28).clone();
  thirtyOne = thirtyOne.add(dates.eq(29).clone());
  thirtyOne = thirtyOne.add(dates.eq(30).clone()); // add 29th, 30th
}

/* copy values for Billing Address fields to Delivery Address fields */
function copyBillingAddress() {
  var billingInputElements = $("#billingAddress input");

  var deliveryInputElements = $("#deliveryAddress input");

  if ($("#sameAddr").prop("checked")) {
    deliveryInputElements.each(function(index) {
      $(this).val(billingInputElements.eq(index-1).val());
    });
    $("#deliveryAddress select").val($("#billingAddress select").val());
  } else {
    deliveryInputElements.each(function(index) {
      $(this).val("");
    });
    $("#deliveryAddress select").prop("selectedIndex", -1);
  }
}

function updateDays() {
  var deliveryDay = $("#delivDy");
  var dates = $("#delivDy option");
  var deliveryMonth = $("#delivMo");
  var deliveryYear = $("#delivYr");
  var selectedMonth = $('#delivMo').find(":selected").val();

  while ($("#delivDy option").length > 28) {
    // remove child with index of 28 until this index is empty
    $("#delivDy option").last().remove();
  }

  if (deliveryYear.prop('selectedIndex') === -1) {
    // if no year is selected, choose the first year
    deliveryYear.prop('selectedIndex', 0);
  }
  if (
    selectedMonth === "2" &&
    $('#delivYr').find(":selected").val() === "2020"
  ) {
    // if leap year, Feb has 29 days
    deliveryDay.append(twentyNine.clone());
  } else if (
    selectedMonth === "4" ||
    selectedMonth === "6" ||
    selectedMonth === "9" ||
    selectedMonth === "11"
  ) {
    // Thirty days have November, April, June, and September
    // 4 6, 9 and 11
    // these months have 30 days
    deliveryDay.append(thirty.clone());
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
    deliveryDay.append(thirty.clone());
  } // switch looks good here
}

// create event listeners
function addEventListeners() {
  $("#delivMo").bind("change", updateDays);
  // we are doing same task more than once it should be a fucntion

  $("#delivYr").bind("change", updateDays)

  $("#customText").bind("blur", autoCheckCustom);

  $("#sameAddr").bind("click", copyBillingAddress);
}

/* run initial form configuration functions */
function setupPage() {
  removeSelectDefaults();
  setupDays();
  addEventListeners();
  placeholderPollyFill();
}

$(document).ready(setupPage);
