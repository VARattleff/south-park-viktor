"use strict";

window.addEventListener("load", ready);

function ready() {
  fetch("sp.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const characterList = document.getElementById("character-list");

      data.forEach(function (character) {
        const li = document.createElement("li");
        const characterDiv = document.createElement("div");
        const characterName = document.createElement("span");
        const characterEmail = document.createElement("span");
        const viewButton = document.createElement("button");

        characterName.textContent = character.name;
        viewButton.textContent = character.name;

        li.appendChild(characterDiv);
        li.appendChild(viewButton);

        characterList.appendChild(li);

        viewButton.addEventListener("mouseup", function () {
          showDetails(character);
        });
      });
    });
}

function showDetails(character) {
  const detailView = document.getElementById("detail-view");

  const detailViewHTML = `
    <h2>${character.name}</h2>
     <li>
       <ul> Name ${character.name}</ul>
       <ul> Nickname ${character.nickname}</ul>
       <ul> <img src='${character.image}'></ul>
       <ul> Occupation ${character.occupation}</ul>
       <ul> Age ${character.age}</ul>    
       <ul> Voiced by ${character.voicedBy}</ul>
       <ul> Gender ${character.gender}</ul>
       <ul> Religion ${character.religion}</ul>
       <ul> Catchphrase ${character.catchPhrase}</ul>
       <ul> Haircolor ${character.hairColor}</ul>
       <ul> School grade ${character.schoolGrade}</ul>
       <ul> Episodes ${character.episodes}</ul>
       <ul> Appearances ${character.appearances}</ul>
       <ul> First Appearance ${character.firstAppearance}</ul>
        
    </li>
  `;

  detailView.innerHTML = detailViewHTML;

  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("mouseup", function () {
    detailView.innerHTML = "";
  });
}

function closeButton() {
  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("mouseup", function () {
    const detailView = document.getElementById("detail-view");
    detailView.style.display = "none";
  });
}
