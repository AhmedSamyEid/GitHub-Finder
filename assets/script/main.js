document.getElementById("crescent-moon").onclick = () => {
  if (document.body.classList.contains("crescent-moon")) {
    document.body.classList.remove("crescent-moon");
    document.getElementById("crescent-moon").src =
      "assets/icons/crescent moon.webp";
  } else {
    document.body.classList.add("crescent-moon");
    document.getElementById("crescent-moon").src = "assets/icons/sun.webp";
  }
};

let searchinput = document.getElementById("search-input");
let button = document.getElementById("but");
let usedata = document.getElementById("usedata");

but.onclick = () => {
  gutUesData();
};
function gutUesData() {
  if (searchinput.value === "") {
    searchinput.style.border = "1px solid red";
    usedata.innerHTML = `<span class="error">ادخال اسم المستخدم </span>`;
  } else {
    fetch(`https://api.github.com/users/${searchinput.value}`)
      .then((res) => res.json())
      .then((data) => {
        usedata.innerHTML = `
        <div class="avatar">
      <img src="${data.avatar_url}" alt="${data.name}"/>
          <div class="name"><h3>${data.name}</h3></div>
            <a href="${data.html_url}" target="_blank">GitHub Profile  </a>
    </div>
    
`;
      });
  }
}
