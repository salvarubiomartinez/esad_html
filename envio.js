function ajax(url, params, callback) {
    datos = new XMLHttpRequest();
    datos.open("POST", url, true);
    datos.onreadystatechange = function () {
        if (datos.readyState == 4 && datos.status == 200) {
            callback(datos.responseText);
        }
        ;
    };
    datos.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    datos.send(params);
}

window.onload = function () {
    document.getElementById('boton').onclick = enviar;
    document.getElementById('reset').onclick = reset;
};

var info = {};

function enviar() {
    var inputs = document.getElementsByTagName('input');
    var textaera = document.getElementsByTagName('textarea');
    for (var index in inputs) {
        var name = inputs[index].name;
        var value = inputs[index].value;
        info[name] = value;
    }
    
        var name = textaera[0].name;
        var value = textaera[0].value;
        info[name] = value;
   
    
    
    
    var data = JSON.stringify(info);
    var url = "envoyer.php";
    var params = "message=" + data;
    var callback = function (data) {
        if (data = "ok") {
            document.getElementById('verification').innerHTML = "Message envoyé";
            for (var index in inputs) {
                inputs[index].value = "";
            }
            textaera[0].value = "";
        } else {
            document.getElementById('verification').innerHTML = "Problem du conexion";
        }

    };
    ajax(url, params, callback);
}
;

function reset() {
    var inputs = document.getElementsByTagName('input');
    var textaera = document.getElementsByTagName('textarea');
    for (var index in inputs) {
        inputs[index].value = "";
    }
    textaera[0].value = "";
}