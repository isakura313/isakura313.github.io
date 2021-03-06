// основная бизнес логика приложения

//здесь мы задаем массив с фразами, которые должны нас мотивировать
let motivation_array = ['К черту все! Берись и делай!',
'Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь',
'Все победы начинаются с победы над самим собой',
'Это своего рода забава, делать невозможное','Неважно, кто мы такие, важно, какой у нас план'];


let button = document.querySelector('.button_plus');
let wrapper_tasks = document.querySelector('.wrapper_tasks');
let field = document.querySelector('.main_input');
let logo = document.querySelector('.logo_app__logo');


// здесь у нас происходит смена цитат
function changePhrase() {
  document.querySelector('.quote').innerHTML = motivation_array[Math.round(Math.random()*(motivation_array.length - 1))];
  logo.className = "logo_app__logo animated flash slow";
    //здесь надо переписать через addClass
  }
  //запуск смены фраз;
setInterval(changePhrase, 8000);
//запуск смены лого
setInterval(function(){
  logo.className = "logo_app__logo";
}, 19000);



function DrawonLoad(){
  for(key in localStorage)
  if(key.charAt(0)=="+"){
  key = key.substring(1);
  let index = Math.round(Math.random()*27);
  wrapper_tasks.insertAdjacentHTML('afterbegin', `<div class='wrapper_single_task'><div class="wrapper_single_task">
    <img src="monsters/svg/monster-${index}.svg">
    <p>${key}</p>
  </div>
  <i class="fas fa-trash-alt trash"></i>
  </div>
  `);
  field.value = '';
  }
}
DrawonLoad();



//функция создания нового дела
function createItem(){
  let text = field.value;
    if (!text) {
      return; 
      //return сразу прекращает выполнение функции
    }
    let x ="+"+text;
    localStorage.setItem(x, x);
    let index = Math.round(Math.random()*27);
    wrapper_tasks.insertAdjacentHTML('afterbegin', `<div class='wrapper_single_task'><div class="wrapper_single_task">
    <img src="monsters/svg/monster-${index}.svg">
    <p>${text}</p>
</div>
<i class="fas fa-trash-alt trash"></i>
</div>
 `);
 field.value = '';
}
  


button.onclick = function (){
    createItem();
//здесь создается item. Но что-то мне подсказывает, что можно было переписать куда короче
}

document.addEventListener('keypress', (event) => {
    if(event.keyCode== 13){
        createItem();
    }
  });



// удаление элемента
wrapper_tasks.addEventListener('click', function (event) {
  let item = event.target.closest('i');
  let item2 = event.target.closest('.wrapper_single_task');

  if (!item || !wrapper_tasks.contains(item)) {
    return;
  }

  item2.className = "animated flipOutX wrapper_single_task";
  setTimeout(function(){
    item2.parentNode.removeChild(item2);
    let x = item2.textContent;
    x = x.trim();
    //трим вырезает лишние пробелы
    x = "+"+x;
    localStorage.removeItem(x);
  }, 700)
});
  

