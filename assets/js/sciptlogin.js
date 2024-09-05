
document.getElementById('btn__inicio__registro').addEventListener('click', register);
document.getElementById('btn__inicio__sesion').addEventListener('click', iniciarSesion);

window.addEventListener('resize', anchoPag);
//variables
let contenedor_log_regis = document.querySelector('.contenedor__login-registro')
let form_login = document.querySelector('.form__login');
let form_register = document.querySelector('.form__registro');
let caja_atraslogin = document.querySelector('.caja__atras-login');
let caja_atrasregistro = document.querySelector('.caja__atras-registro');

function anchoPag(){
    if(window.innerWidth > 800){
        caja_atraslogin.style.display = "block";
        caja_atrasregistro.style.display = "block";

    }else{
        caja_atrasregistro.style.display = "block";
        caja_atrasregistro.style.opacity = "1";
        caja_atraslogin.style.display = "none";
        form_login.style.display = "block";
        form_register.style.display = "none";
        contenedor_log_regis.style.left="0px";

    }
}
anchoPag();

function register(){
    if(window.innerWidth > 800){
        form_register.style.display = "block";
        contenedor_log_regis.style.left = "38rem";
        form_login.style.display = "none";
        caja_atrasregistro.style.opacity = "0";
        caja_atraslogin.style.opacity = "1";
    }else{
        form_register.style.display = "block";
        contenedor_log_regis.style.left = "0px";
        form_login.style.display = "none";
        caja_atrasregistro.style.display = "none";
        caja_atraslogin.style.display = "block";

    }

}

function iniciarSesion(){
    if(window.innerWidth > 800){
        form_register.style.display = "none";
        contenedor_log_regis.style.left = "4rem";
        form_login.style.display = "block";
        caja_atrasregistro.style.opacity = "1";
        caja_atraslogin.style.opacity = "0";
    }else{
        form_register.style.display = "none";
        contenedor_log_regis.style.left = "0px";
        form_login.style.display = "block";
        caja_atrasregistro.style.display = "block";
        caja_atraslogin.style.display = "none";
    }
}



