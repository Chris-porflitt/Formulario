

function validar(){
    var ret_email = validar_email();
    var ret_telefono = validar_telefono();
    var ret_password = validar_contraseña();
    var ret_val_password = confirmar_password()
    var ret_direccion = validar_direccion();
    var ret_comuna = validar_comuna();
    var ret_hobbies = validar_hobbies();

    return ret_email && ret_telefono && ret_password && ret_direccion && ret_comuna && ret_hobbies && ret_val_password;
}

const hobbi = [];
function proceso_hobbies() {
    var input = document.getElementById("hobbies");
    hobbi.push(input.value);
    var div = document.getElementById("err_hobbies");
    div.innerText= "";
    var ul = document.createElement("ul");
    div.appendChild(ul) 
    
    for (var i = 0; i < hobbi.length; i++) {
        let li = document.createElement("li");
        li.innerText = hobbi[i];
        ul.appendChild(li)
    }   
}

function validar_hobbies() {
    var listado = hobbi;
    var div = document.getElementById("err_hobbies");

    if (listado.length < 2) {
        div.innerText = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    }   else {
        div.innerText = "";
        return true;
    }
}
 


function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email")
    var arroba = email.indexOf('@');

    if (email == "") {
        div.innerHTML = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    }

    if (arroba < 2) {
        div.innerText = "El nombre de usuario del correo no es válido";
        div.className = "text-danger";
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        div.innerHTML = "Ausencia de @ o ."
        div.className = "text-danger"
        return false;
    }


    
    if (email.indexOf("@") == 0 || email.indexOf("@") == email.length - 1) {
        div.innerHTML = "Correo electrónico inválido";
        div.className = "text-danger";
        return false;
    }
    
    if (email.lastIndexOf(".") < email.indexOf("@")) {
        div.innerHTML = "Correo electrónico inválido";
        div.className = "text-danger";
        return false;
    }
    
    return true;
}


function validar_telefono() {

    var telefono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");

    if (telefono == "") {
        div.innerText = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    }

    for (var i = 0; i < telefono.length; i++) {
        var digito = parseInt(telefono.charAt(i));
        if (isNaN(digito)) {
            div.innerText = "Ingrese un número válido";
            div.className = "text-danger";
            return false;
        } 
    }   

    if (telefono.length != 9 ) {
        div.innerText = "Debe contener 9 dígitos";
        div.className = "text-danger";
        return false;
    }   else {
        div.innerText = "";
        return true;
    }

    
}

function validar_contraseña() {
    var password = document.getElementById("password").value;
    var div = document.getElementById("err_password");
    var letra = false;
    var digito = false;

    for (var i = 0; i < password.length; i++) {
        var caracter = password.charAt(i);

        if (caracter >= "a" && caracter <= "z" || caracter >= "A" && caracter <= "Z") {
            letra = true; 
        } else {
            div.innerText = "Debe tener al menos una letra";
            div.className = "text-danger";
            return false;
        }
        
        if (!isNaN(parseInt(password[i]))) {
            return true;
        }   else {
            div.innerText = "Debe tener al menos un digito";
            div.className = "text-danger";
            return false;
        }

    }    
    

    if (password == "") {
        div.innerText = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    } else if(password.length < 3 || password.length > 6 ) {
        div.innerText = "Debe ser de mínimo 3 y máximo 6 carácteres";
        div.className = "text-danger";
        return false;
    }


    

    
}

function confirmar_password() {
    var password = document.getElementById("password").value;
    var val_password = document.getElementById("val_password").value;
    var div = document.getElementById("err_password");
    if (val_password == "") {
        div.innerText = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    }   else if (password != val_password) {
            div.innerText = "Las contraseñas no coinciden";
            div.className = "text-danger";
            return false;
    }   else    {
        div.innerText = "";
        return true;
    }
}




function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");

    if (direccion == "") {
        div.innerText = "Campo obligatorio";
        div.className = "text-danger";
        return false;
    }

    return true;
}


function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");

    if (comuna == "0") {
        div.innerText = "Seleccione una comuna";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function  validar_url() {
    var url = document.getElementById("web");
    var div = document.getElementById("err_web");
    var punto = lastIndexOf(".")

    if (url.startWith("http://") || url.startWith("https://") || url.endWith(".com") || url.endWith(".cl")) {
        try {
            new val_url(url);
            return true;
        }   catch(error) {
            div.innerText="Url no es válida";
            div.localName="text-danger";
            return false;
        }
    }
}