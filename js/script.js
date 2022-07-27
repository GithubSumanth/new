"use strict";

const main = document.querySelector("main");

const student = {
  1: {
    name: "Sanket",
    ph: 9876543021,
    dept: "EC",
    address: "Banglore",
    "test-1": 40,
    "test-2": 45,
  },

  2: {
    name: "Sampath",
    ph: 846543021,
    dept: "EC",
    address: "Banglore",
    "test-1": 48,
    "test-2": 45,
  },

  3: {
    name: "Vikas",
    ph: 2356543021,
    dept: "EC",
    address: "Banglore",
    "test-1": 38,
    "test-2": 35,
  },

  4: {
    name: "Vishnu",
    ph: 8956543021,
    dept: "EC",
    address: "Banglore",
    "test-1": 49,
    "test-2": 50,
  },
};

function buildCard(studentObj) {
  const keys = [];
  for (const k in studentObj) keys.push(k);
  let index = 0;
  const container = document.createElement("div");
  container.classList.add("container");

  function getPara(label) {
    let paraItem = document.createElement("p");
    paraItem.classList.add("para");
    paraItem.textContent = `${label} : ${studentObj[keys[index]]}`;
    index++;
    return paraItem;
  }

  function getHeading() {
    let heading = document.createElement("h1");
    heading.classList.add("heading", "heading--secondary");
    heading.textContent = studentObj[keys[index]];
    index++;
    return heading;
  }

  container.appendChild(getHeading());

  container.appendChild(getPara("Phone Number"));

  container.appendChild(getPara("Department"));

  container.appendChild(getPara("Address"));

  container.appendChild(getPara("Test - 1"));

  container.appendChild(getPara("Test - 2"));

  return container;
}

const containerList = [];

function populate() {
  for (const index in student) {
    const studentObj = student[index];
    containerList.push(buildCard(studentObj));
  }

  let count = 0;

  let timeId = setInterval(function () {
    if (count >= containerList.length) {
      clearInterval(timeId);
    } else {
      main.appendChild(containerList[count]);
      count++;
    }
  }, 500);
}
