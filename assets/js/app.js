window.onload = function() { //para que cargue js una vez que este cargada html

  var divPadre = document.getElementById("content_js"); //creo la var donde se enlaza mi caja que contendra todo lo nuevo
  var buttonAñadir = document.getElementById("button_añadir");

  buttonAñadir.onclick = function(){
    var inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("placeholder", "Agregar lista");
    inputText.classList.add("input_añadir");
    var text = inputText.value;

    var boton_guardar = document.createElement("button");//creo un nuevo elemento, boton para guardar las tareas
    var text_boton_guardar = document.createTextNode("Guardar");//creo un nodo texto que es lo que va a ir escrito en el boton
    boton_guardar.setAttribute("type", "button");//le doy atributo a mi boton y le digo que sera un boton
    boton_guardar.classList.add("button");
    boton_guardar.appendChild(text_boton_guardar)
    /*console.log(boton_guardar);
    console.log(inputText);*/

    divPadre.appendChild(boton_guardar);
    divPadre.appendChild(inputText);

  

  boton_guardar.onclick = function() {
    var contText2 = document.createElement("div");
    var inputText2 = document.createElement("input");
    var text2 = document.createElement("p");
    text2.setAttribute("type", "text");
    text2.classList.add("textoTarea");
    inputText2.setAttribute("type", "text");
    inputText2.setAttribute("placeholder", "Agregar tarjeta");
    inputText2.classList.add("input_tarea");
    var text2 = inputText2.value;
    
    var botonAgregarTarjeta = document.createElement("button");
    var textAgregarTarjeta = document.createTextNode("Agregar tarjeta");
    botonAgregarTarjeta.setAttribute("type", "button");
    botonAgregarTarjeta.classList.add("button");
    //botonAgregarTarjeta.appendChild("textAgregarTarjeta");

    inputText.appendChild(botonAgregarTarjeta);
    inputText.appendChild(inputText2);
    }
  }
}
