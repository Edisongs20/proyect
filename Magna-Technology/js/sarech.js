const formulario = document.querySelector('#search_box'),
const boton = document.querySelector('#buscar')


const filtrar = ()=>{
   // console.log(formulario.value);
   const texto = formulario.value.toLowerCase();
   for(let section of p ){
       let p = section.value.toLowerCase();
       if(p.indexof(texto) !== -1){


       }
   }
}

buscar.addEventlistener('click', filtrar)


