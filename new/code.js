let sounds = new Audio(
  "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
);

let root = document.querySelector("#root");
fetch("http://isakura3131.zonopo.ru/deals")
  .then(
    (response) => response.json(),
    () => sounds.play()
  )
  .then((json) => console.log(json));
