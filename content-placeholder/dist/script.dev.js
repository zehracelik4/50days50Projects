"use strict";

var header = document.getElementById('header');
var title = document.getElementById('title');
var excerpt = document.getElementById('excerpt');
var profile_img = document.getElementById('profile_img');
var name = document.getElementById('name');
var date = document.getElementById('date');
var animated_bgs = document.querySelectorAll('.animated-bg');
var animated_bg_texts = document.querySelectorAll('.animated-bg-text');
setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="mac.jpg" alt=""/>';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.';
  profile_img.innerHTML = '<img src="work.jpg" alt=""/>';
  name.innerHTML = 'Zehra Çelik';
  date.innerHTML = 'Oct 19, 2023';
  animated_bgs.forEach(function (bg) {
    return bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach(function (bg) {
    return bg.classList.remove('animated-bg-text');
  });
}