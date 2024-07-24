let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("url");

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'ajax.json', true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      data = JSON.parse(xhr.responseText);
      changeVideo();
    } else {
      console.error('Failed to chang the video:', xhr.status);
    }
  };
  xhr.send();
}

function changeVideo() {
  if (data.length === 0) {
    getData();
  } else {
    const { title, content, url } = data[number];
    titleArea.textContent = title;
    contentArea.textContent = content;
    videoArea.src = url;
    number = (number + 1) % data.length;
  }
}

button.addEventListener('click', changeVideo);

window.addEventListener('load', changeVideo);