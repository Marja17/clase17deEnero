/*let $titulo = getElementById ('titulo');
//simbolo $ elemento del Dom
titulo.textContent = 'Titulo escrito de JS'
//si no esta escrita con $ fue creada en javascript y no en HTML */

let $titulo = document.querySelector ('#titulo');
$titulo.textContent = 'Título escrito desde JS';
// si queremos haceder a una etiqueta se pone ej p, con clase un . y con id #
//el signo de $ se usa para indicar que una variable guarda algún elemento del dom, o de HTML en sí
//queryselector podemos apuntar a los 3 elementos, etiqueta, clase . y id #

 
let $parrafo = document.querySelector('p');
console.log ($parrafo.textContent);

let $parrafos = document.querySelectorAll ('p');
console.log ($parrafos[1].textContent)

let subtitulo = document.createElement ('h3');
subtitulo.textContent = 'Este es un subtitulo desde js';
// document.body.append agrega un elemento dentro del body al final.
$titulo.insertAdjacentElement( 'afterend',subtitulo);
//trabaja desde hermanos


let $contenido = document.querySelector ('#contenido');
//console.log( $contenido.textContent = '<br>');//solo se puede escribir texto. recupera el texto del contenido

//console.log ( $contenido.innerHTML = '<br>');//se puede escribir codigo html (modifica a los hijos)
//console.log ($contenido.outerHTML = 'Hola'); //afecta todo el elemento, no solo el contenido. (modifica al padre y a los hijos)
let contenidoParrafo = document.createElement ('p');
contenidoParrafo.textContent = 'contenido de mi nuevo parrafo';
$contenido.appendChild (contenidoParrafo); //appendchild, lo va acolocar dentro del elemento padre

//lo que esta fijo, va estar en el HTML
//lo que no se utiliza, en addicion con javascript
 //nos permite eliminar elementos (removechild)
 $titulo.remove();

