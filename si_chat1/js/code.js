class User {
    constructor(name, lastname, ava,id){
        this.name = name;
        this.lastname = " "+lastname;
        this.ava = ava;
        this.id = "user"+id;
    }
}
let audio = document.querySelector("audio");
function play(){
    audio.play();
    console.log("play");
    
}
function play1(){
    audio.play();
    console.log("play");
    
}


    
    
let main_screen = document.querySelector(".main_screen");
//объявление главной оберточной переменной;


    window.onload = first;
    //при загрузке страницы происходит загрузка первой страницы
    function first(){
    main_screen.insertAdjacentHTML("afterBegin", `<div class="main_screen__greeting">
    <h1 class="main_screen__greeting_h1">Привет!</h1>
    <p class="main_screen__greting_p">Я рад приветствовать тебя на странице «Симулятора Переписки». Здесь ты сможешь создать свой симулятор  
        общения нескольких  пользователей!</p>
    <div class="main_screen__greeting_wrapper">
        <button class="main_screen__greeting_button">Продолжить</button>
    </div>
</div>`);
let button1 = document.querySelector(".main_screen__greeting_button");


let main_screen__gretings = document.querySelector(".main_screen__greeting");

let main_screen__register = document.querySelector(".main_screen_register");
button1.onclick = settings;


    

function settings(){
    main_screen__gretings.parentNode.removeChild(main_screen__gretings);
    main_screen.insertAdjacentHTML("afterbegin", `<div class="main_screen_settings">
    <h1 class="main_screen_settings_h1">Первоначальные настройки</h1>
    <div class="main_screen_settings_wrapper">
    <h1 class="main_screen_settings_h2">Количество пользователей</h1>
    <select name="" id="" class="main_screen_settings_select">
        <option value="2" class>2</option>
        <option value="3">3</option>
    </select>    

    <h2 class="main_screen_settings_h2">Тип чата</h2>
    <select name="social" id="" class="main_screen_settings_select">
        <option value="Telegram"> Telegram</option>
        <option value="Viber" disabled>Viber</option>
    </select>
</div>
<button class="main_screen__greeting_button2">Продолжить</button>

</div>`);
let button2 = document.querySelector(".main_screen__greeting_button2");
button2.onclick = settings2;
let main_screen_settings = document.querySelector(".main_screen_settings");
let option = document.querySelector



function settings2(){
    main_screen_settings.parentNode.removeChild(main_screen_settings);
    main_screen.insertAdjacentHTML("afterbegin",`<div class="main_screen_register">
    <div class="main_screen_register_first_form">
        <h2>Первый пользователь</h2>
        <label for="first_name">Имя</label>
        <input type="text" name="first_name" class="first_name">
        <label for="first_lastname">Фамилия</label>
        <input type="text" name="first_lastname" class="first_lastname">
        <label for="first_photo">Ссылка на фотографию</label>
    <input type="text" name="first_photo" class="first_photo">
    </div>
    <div class="main_screen_register_second_form">
        <h2>Второй пользователь</h2>
        <label for="second_name">Имя</label>
        <input type="text" name="second_name" class="second_name">
        <label for="second_lastname">Фамилия</label>
        <input type="text" name="second_lastname" class="second_lastname">
        <label for="second_photo">Ссылка на фотографию</label>
    <input type="text" name="second_photo" class="second_photo">
    </div>
    <div class="main_screen_register_third_form">
        <h2>Третий пользователь</h2>
        <label for="third_name">Имя</label>
        <input type="text" name="third_name" class="third_name">
        <label for="third_lastname">Фамилия</label>
        <input type="text" name="third_lastname" class="third_lastname">
        <label for="third_photo">Ссылка на фотографию</label>
    <input type="text" name="third_photo" class="third_photo">
    <button class="main_screen__greeting_button_3">Продолжить</button>

    </div>`);
    let button3 = document.querySelector(".main_screen__greeting_button_3");
    button3.onclick = chat;
    let main_screen_register = document.querySelector(".main_screen_register");



function chat(){
    let User1 = new User(document.querySelector(".first_name").value,document.querySelector(".first_lastname").value, document.querySelector(".first_photo").value,1);
    let User2 = new User(document.querySelector(".second_name").value,document.querySelector(".second_lastname").value, document.querySelector(".second_photo").value,2);
    let User3 = new User(document.querySelector(".third_name").value,document.querySelector(".third_lastname").value, document.querySelector(".third_photo").value,3);
    main_screen_register.parentNode.removeChild(main_screen_register);
    console.log(User1.name);
    main_screen.insertAdjacentHTML("afterbegin", `<div class="main_screen_chat">
    <h1 class="main_screen_chat_h1">
        Время общаться!
    <div class="main_screen_chat_wrapper">
        <textarea rows="7" cols="20" placeholder="Введите сообщение..." class="main_textarea"></textarea>

    </div>
    <div class="button_stack">
    <button class="main_screen_chat_button_user1 success">${User1.name}</button>
    <button class="main_screen_chat_button_user2 warning">${User2.name}</button>
    <button class="main_screen_chat_button_user3 error">${User3.name}</button>
    </div>
    </h1>
</div>
<div class="main_chat">

</div>`);
let main_chat = document.querySelector(".main_chat");
let user_button_1 = document.querySelector(".main_screen_chat_button_user1");
let user_button_2 = document.querySelector(".main_screen_chat_button_user2");
let user_button_3 = document.querySelector(".main_screen_chat_button_user3");
let text = document.querySelector(".main_textarea");
function getRandomArbitrary(min, max) {
    return  Math.floor( Math.random() * (max - min) + min);
  }
function generic(use,id){
    
    main_chat.insertAdjacentHTML("beforeEnd", `
    <div class="main_chat_message">
    <div class="main_chat_message_ava" style="background-image:url(${use.ava});"  ></div>
    <div class="main_chat_nick"> <span class="${use.id}"> ${use.name}${use.lastname}</span>
    <div class="main_chat_message_text">   ${text.value} </div></div>
</div>`);

main_chat_message_ava = document.querySelector(".main_chat_message_ava");
main_nick = document.querySelector("span");
const array_colors = ["#FF6A00","#9741D7","#FF3740","#4562F0","#00BA99"];
let ava = User1.ava;



}




user_button_1.onclick = function(){
    generic(User1);
    play();
};


user_button_2.onclick = function(){    
    generic(User2);
    play1();
}
user_button_3.onclick = function(){
    generic(User3);
    play;
}


}
}


};
}




