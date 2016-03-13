$(document).ready(function() {
  $("#activitiesLink").click(displayActivities);
  $("#groupLink").click(displayByGroup);
  $("#contactLink").click(displayByContact);
  $("#contactsLink").click(displayContacts);
  $("#partnerLink").click(displayByPartner);
  $("#partnersLink").click(displayPartners);
  $("#btn1").click(openForm);
  $("#formCancel").click(cancel);
  $('#datePicker').val(new Date().toDateInputValue());
 });  

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

function openForm() {
  $("#formContainer").fadeIn();
  $("#form1").fadeIn();
  $("#mask").fadeTo("slow",0.7);
  $("#mask").css("background-color","#ccc");
  $("#mask").css("z-index","4");
}

function cancel() {
  $("#formContainer").hide();
  $("#form1").hide();
  $("#mask").css("background-color","");
  $("#mask").css("z-index","0");
}

function displayActivities() {
  $("#activities").show();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#byPartner").hide();
  $("#partners").hide();
} 

function displayByPartner() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#byPartner").show();
  $("#partners").hide();
} 
 
function displayByGroup() {
  $("#activities").hide();
  $("#byGroup").show();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#byPartner").hide();
  $("#partners").hide();
} 
 
function displayByContact() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").show();
  $("#contacts").hide();
  $("#byPartner").hide();
  $("#partners").hide();
}

function displayContacts() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").show();
  $("#byPartner").hide();
  $("#partners").hide();
}

function displayPartners() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#partners").show();
  $("#byPartner").hide();
}


(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
