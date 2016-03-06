/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
 $(document).ready(function() {
  $("#activitiesLink").click(displayActivities);
  $("#groupLink").click(displayByGroup);
  $("#contactLink").click(displayByContact);
  $("#contactsLink").click(displayContacts);
  $("#partnerLink").click(displayByPartner);
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
  $("#mask").fadeTo("slow",0.5);
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
} 

function displayByPartner() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#byPartner").show();
} 
 
function displayByGroup() {
  $("#activities").hide();
  $("#byGroup").show();
  $("#byContact").hide();
  $("#contacts").hide();
  $("#byPartner").hide();
} 
 
function displayByContact() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").show();
  $("#contacts").hide();
  $("#byPartner").hide();
}

function displayContacts() {
  $("#activities").hide();
  $("#byGroup").hide();
  $("#byContact").hide();
  $("#contacts").show();
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
