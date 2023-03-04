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

for (let sprache in languages){
  const option = document.createElement("option");
  option.textContent = languages[sprache];
  select.append(option);
  
}

// // --^-- write/change code here --^--

// // Part 2: Creating a Navigation Bar
const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);


const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

for (let key in nav){
  const li = document.createElement("li");
  const a = document.createElement("a");
  const element = nav[key];
  a.setAttribute("href", element.href);
  a.textContent = element.text;
  ul.append(li);
  li.append(a);
}



