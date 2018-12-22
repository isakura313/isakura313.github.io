var input = document.querySelector(".main_input");
var stena = document.querySelector(".stena");
var begin = document.querySelector('.begin');
let postick = document.querySelector('.postick');


let main_arr = document.querySelectorAll("input");
// иницализация пользователей
begin.onclick = function(){

postick.insertAdjacentHTML("afterBegin",`<div class="button button1"> ${main_arr[0].value}</div>
<div class="button button2"> ${main_arr[3].value}</div> `);
var button_submit = document.querySelector(".button1");
var button_submit2 = document.querySelector(".button2");
button_submit.onclick = function(){
    createComp(User1);
}
button_submit2.onclick = function(){
    createComp(User2);
}
let User1 = new User(main_arr[0].value, main_arr[1].value,main_arr[2].value);
let User2 = new User(main_arr[3].value, main_arr[4].value,main_arr[5].value);

}


class User{
    constructor(name, lastname,ava){
    this.name = name;
    this.lastname = lastname;
    this.ava = ava;
    }
    add(){
        return this.name + " "+this.lastname;
    }
}
console.log()


function createComp(user_one){
stena.insertAdjacentHTML('beforeEnd',`<div class="post">
<img class="ava" src=${user_one.ava}>
<div class="wrapper">


<h3> ${user_one.add()}</h3>
<p> ${input.value} <p>
</div>
</div>`);

}


