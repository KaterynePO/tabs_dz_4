const tabs = document.getElementById("tabs");
const content = document.querySelectorAll(".content");

const tabsIn = document.getElementById("tabs-in");
const contentIn = document.querySelectorAll(".content-in");

//console.log(tabsInside);
//console.log(tabs);
//console.log(content);

//console.log(tabs.children);

const changeClass = (el) => {
  //console.log(el);
  // УДАЛЯЕМ КЛАСС
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }

  // ДОБАВЛЯЕМ КЛАСС
  el.classList.add("active");
};

const changeClassIn = (elin) => {
  //console.log(el);
  // УДАЛЯЕМ КЛАСС
  for (let i = 0; i < tabsIn.children.length; i++) {
    tabsIn.children[i].classList.remove("active");
  }

  // ДОБАВЛЯЕМ КЛАСС
  elin.classList.add("active");
};

tabs.addEventListener("click", (e) => {
  const tab = e.target.dataset.btn;
  // console.log(tab);
  changeClass(e.target);

  // content
  for (let i = 0; i < content.length; i++) {
    /// УДАЛЯЕМ КЛАСС
    content[i].classList.remove("active");

    /// ДОБАВЛЯЕМ КЛАСС
    //console.log(content[i].dataset.content);
    if (content[i].dataset.content === tab) {
      content[i].classList.add("active");
    }
  }
});

//console.log(content);
tabsIn.addEventListener("click", (e) => {
  const tabIn = e.target.dataset.btnIn;
  // console.log(tab);
  changeClassIn(e.target);

  // content
  for (let i = 0; i < contentIn.length; i++) {
    /// УДАЛЯЕМ КЛАСС
    contentIn[i].classList.remove("active");

    /// ДОБАВЛЯЕМ КЛАСС
    //console.log(content[i].dataset.content);
    if (contentIn[i].dataset.contentIn === tabIn) {
      contentIn[i].classList.add("active");
    }
  }
});

//console.log(tabsInside);
//console.log(tabs);
//console.log(content);

//console.log(tabs.children);

//console.log(content);
