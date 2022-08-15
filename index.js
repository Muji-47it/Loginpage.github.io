function validate(){
    var pass = document.getElementById('password');
    var Uppercase = document.getElementById('Uppercase');
    var Lowercase = document.getElementById('Lowercase');
    var special_character = document.getElementById('special_character');
    var number = document.getElementById('number');
    var size = document.getElementById('size');

    if(pass.value.match(/[0-9]/)){
        number.style.color = 'green'
    }else{
        number.style.color = 'red'
    }
    if(pass.value.match(/[A-Z]/)){
        Uppercase.style.color = 'green'
    }else{
        Uppercase.style.color = 'red'
    }

    if(pass.value.match(/[a-z]/)){
        Lowercase.style.color = 'green'
    }else{
        Lowercase.style.color = 'red'
    }

    if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\-\+\=\_\?\<\>\.\,]/)){
        special_character.style.color = 'green'
    }else{
        special_character.style.color = 'red'
    }

    if(pass.value.length < 6){
        size.style.color = 'red'
    }else{
        size.style.color = 'green'
    }
}
var forms = document.getElementById('forms');
forms.addEventListener('submit',(e) => {
    e.preventDefault();})