const scriptURL='https://script.google.com/macros/s/AKfycbyyrqseMgLgoniNwSunX0r1fi_SNMeWVyO7T6Hm0tWCZdY7hnYqRg389OfHyp7byE7Jcw/exec'

const form = document.forms['google']

form.addEventListener('submit', async e => {
  e.preventDefault();
  // 獲取所有被勾選的 checkbox
  const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
  // 獲取被勾選 checkbox 的名字
  const names = Array.from(checkedInputs).map(input => input.name);

  try {
    const result = confirm(`已點名：${names.join(', ')}`);
    if (!result) {
      throw new Error('點名已取消');
    } else {
      const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
      // 清空表單的內容
      document.getElementById("form").reset();
    }
  } catch (error) {
    alert(error.message);
    return;
  }
});


$(function(){
  // 當#myNavbar上的<a>連結按鈕click時, 讓整頁慢慢滑動到指定位置=============================
  $("#navbarNav a").on('click', function(event) {
    // this.hash 是取得目前URL中的錨點位置,例如:#section1
    // 當 this.hash (錨點位置) 不是空的時, 也就是有指定滑動到錨點位置時
    if (this.hash !== "") {
    // 阻止<a>連結被click時執行連結工作 (雷同return false, 但return false通常寫在最後)
    event.preventDefault();
    // 設定 hash 變數, 記錄目前的錨點
    var hash = this.hash;
    // 控制 html,body 執行 animate 動畫, 讓捲出的距離 = 目前錨點位置的 offset().top 座標
    $('html, body').stop().animate({ scrollTop: $(hash).offset().top }, 800, function(){
      // 將錨點名稱加到URL網址列的後方
      window.location.hash = hash;
    });
    } // if end 
  }); // click end
  
  });

//////滑鼠移動變色////////
  // 表格格子變色
  // 获取表格元素
var table = document.getElementById("myTable");

// 获取表格中的所有行
var cells = table.getElementsByTagName("td");

// 循环遍历每一行
for (var i = 0; i < cellls.length; i++) {

  // 添加鼠标悬停事件监听器
  cellls[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#ffff99"; // 当光标悬停时，将行的背景颜色设置为淡黄色
  });

  // 添加鼠标移开事件监听器
  cellls[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = ""; // 当光标移开时，将行的背景颜色还原
  });
}

// 下拉選單
const select = document.querySelector('#select');
const customOptions = ['輸入聚會點名', '自訂選項2', '自訂選項3'];

customOptions.forEach(option => {
  const customOption = document.createElement('option');
  customOption.textContent = option;
  customOption.value = option;
  select.appendChild(customOption);
});

/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});

function openSearch() {
  document.getElementById("search-box").style.display = "block";
  document.querySelector(".search-container").style.width = "100%";
  document.querySelector(".search-container").style.padding = "10px";
  document.querySelector(".search-btn").style.display = "none";
}

function closeSearch() {
  document.getElementById("search-box").style.display = "none";
  document.querySelector(".search-container").style.width = "auto";
  document.querySelector(".search-container").style.padding = "0";
  document.querySelector(".search-btn").style.display = "inline-block";
}

function searchText() {
  var searchBox = document.getElementById("search-box");
  var searchText = searchBox.querySelector("input[type='text']").value;
  var paragraphs = document.querySelectorAll("p");

  paragraphs.forEach(function (paragraph) {
    paragraph.innerHTML = paragraph.textContent.replace(
      new RegExp(searchText, "gi"),
      function (match) {
        return '<span class="highlight">' + match + "</span>";
      }
    );
  });
}







