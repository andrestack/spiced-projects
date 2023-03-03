console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// const cohort={
//   name: "sugar",
//   amountStundent: 9,
//   academy: Spiced,
//   };
  
//   for (let key in cohort){
//   console.log(key, cohort[key]);
//   --- console.log (cohort.key); we cannot acce like this, bc key is a variable --

// --v-- write/change code here --v--
for (let key in languages){
  console.log(key, languages[key]);
  const option = document.createElement("option");
  option.innerHTML = languages[key];
  select.append(option);
}


// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (let items in nav){
  console.log(nav[items]);
  const li = document.createElement("li");
  const a = document.createElement("a")
  const element = nav[items];
  a.setAttribute("href", element.href);
  a.textContent = element.text;
  
ul.append(li);
li.append(a);  
}


// --^-- write/change code here --^--
