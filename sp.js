"use strict";

window.addEventListener("load", ready);

function ready() {
  fetch("test.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (character) {
        showCharacters(character);
      });
    });
}

function showCharacters(character) {
  console.log(character);

  var Myhtml = /*html*/ `
<article class='${character.hairColor}'> 
<img src=${character.image}>
<h2>${character.name}</h2>

`;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", Myhtml);
  document
    .querySelector("#characters article:last-child")
    .addEventListener("mouseup", function () {
      characterClicked(character);
    });
}

function characterClicked(character) {
  console.log("character clicked");
  showCharacter(character);
}

function showCharacter(character) {
  document.querySelector("#dialog-nickName").textContent = character.nickname;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-hairColor").textContent = character.hairColor;
  document.querySelector("#dialog-voiceBy").textContent = character.voicedBy;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-firstAppearance").textContent =
    character.firstAppearance;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-episodes").textContent = character.episodes;

  document.querySelector("#dialog-img").src = character.image;

  document.querySelector("#dialog-characters").showModal();
}
