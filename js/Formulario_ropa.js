var rep;
  obt = document.getElementById("tabla");  

function construirTabla(){   
    
 var newRow = obt.insertRow(obt.length);
            
  col1 = newRow.insertCell(0);
  talla = document.getElementById("talla").value;
  col1.innerHTML = talla;

  col2 = newRow.insertCell(1);
  genero = document.getElementById("genero").value;
  col2.innerHTML = genero;

  col3 = newRow.insertCell(2);
  color = document.getElementById("color").value;
  col3.innerHTML = color;

  col4 = newRow.insertCell(3);
  precio = document.getElementById("precio").value;
  col4.innerHTML = precio;

  col5 = newRow.insertCell(4);
  moda = document.getElementById("moda").value;
  col5.innerHTML = moda;
           
  alertRegistrado();
  seleccionarFila();  

}
    
function editar(){
     
  talla = document.getElementById("talla").value;
  obt.rows[rep].cells[0].innerHTML = talla;

  genero = document.getElementById("genero").value;
  obt.rows[rep].cells[1].innerHTML = genero;

  color = document.getElementById("color").value;
  obt.rows[rep].cells[2].innerHTML = color;

  precio = document.getElementById("precio").value;
  obt.rows[rep].cells[3].innerHTML = precio;

  moda = document.getElementById("moda").value;
  obt.rows[rep].cells[4].innerHTML = moda; 

  alertEditado();      
}

     
 function borrar(){
     
  obt.deleteRow(rep);
  alertBorrado();      
}
 
function seleccionarFila(){ 

  var i;
     
  for(i = 1; i < obt.rows.length; i++){
        
      obt.rows[i].onclick = function(){
         
      rep = this.rowIndex;
      document.getElementById("talla").value = this.cells[0].innerHTML;
      document.getElementById("genero").value = this.cells[1].innerHTML;
      document.getElementById("color").value = this.cells[2].innerHTML;
      document.getElementById("precio").value = this.cells[3].innerHTML;
      document.getElementById("moda").value = this.cells[4].innerHTML;
      }
  }
}
  
function alertRegistrado() {
     alert("Producto registrado correctamente");
}

function alertEditado() {
     alert("Producto editado correctamente");
}

function alertBorrado() {
     alert("¿Desea borrar este producto?");
     alert("Producto borrado correctamente");
}