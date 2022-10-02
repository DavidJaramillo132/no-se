// const texto =  document.getElementById("a");

const image = document.createElement('img');

// let name = prompt("¿Cual es tu nombre?");


function empezar () {
    let pregunta = prompt("¿Te gusta la persona que te envió este link?");
    if (pregunta == "si" || pregunta == "Si" ) {
        alert("Déjame decirte que a él también le gustas y que le gustaría conocerte más, y si surge algo bien y si no, pues también bien :)");
        image.src  = 'cat.jpg'
        document.querySelector('.container').appendChild(image);

    } else {
        alert("Ta bien, seguiremos siendo amigos");
        image.src  = 'dog.jpeg'
        document.querySelector('.container').appendChild(image);
    }
}
empezar();










