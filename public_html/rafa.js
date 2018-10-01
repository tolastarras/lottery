/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            function comprobar() {
                var usuario;
                var maquina;
                var serepite = false;
                
                serepite = serepiten();
                
                if(serepite){
                    alert("Número repetido, porfavor introduzca otro");
                } else{
                    usuario = numerousuario();
                    document.write("Tus números: " + usuario.toString() + "<br>");
                    maquina = generarmaquina();
                    document.write("Números de la máquina: " + maquina.toString() + "<br>");
                }
            } 
            
            function numerousuario(){
                var arraynum = [""];
                var numeros = "";
                
                for (var i = 0; i < 7; i++) {
                    numeros = document.getElementById("n" + i).value;
                    arraynum[i] = numeros;
                }
                
                return arraynum;
            }
    
   /* function comprobar(){
        var number;
        var arraypersona = [];
        
        for (var i = 0; i < 6; i++) {
                    number = document.getElementById("n" + i).value;
                    arraypersona[i] = number;
                }
                
        for (var i = 0; i < 6; i++) {
            if(parseInt(arraypersona[i]) >)
        }
    } */
    
    /**
     * Método para comprobar si el número está entre los valores permitidos
     * Actua en el onblur del html en las casillas de los números
     * @param {type} num
     * @return {undefined}
     */
    function estabien(num){
        if(document.getElementById(num).value > 49 || document.getElementById(num).value < 1){
            do{
                document.getElementById(num).value = prompt("Introduce un número entre 1 y 49");
            }while(document.getElementById(num).value > 49 || document.getElementById(num).value < 1 );
        }
    }
    
    function serepiten(){
        var soniguales = false;
        var numusuario = numerousuario();
        
        for (var i = 0; i < 5; i++) {
            for (var j = 1; j < 6; j++) {
                if(numusuario[i] === numusuario[j]){
                    soniguales = true;
                }
            }
        }
        return soniguales;
    }
    /**
     * Método para comprobar si el número está entre los valores permitidos
     * Actua en el onblur del html en la casilla del reintegro
     * @param {type} num
     * @return {undefined}
     */
    function estabienreintegro(num){
        if(document.getElementById(num).value > 9 || document.getElementById(num).value < 0){
            do{
                document.getElementById(num).value = prompt("Introduce un número entre 0 y 9");
            }while(document.getElementById(num).value > 9 || document.getElementById(num).value < 0 );
        }
    }
    /**
     * Método para generar el número premiado
     * @return {Array|generarmaquina.arraymachine}
     */
    function generarmaquina(){
         var arraymachine = new Array(7);
                var i = 0;
                arraymachine[i] = parseInt((Math.random()*49)+1);
                
                //Genera numeros aleatorios sin repetir en arraymachine
                for (i = 1; i < 6; i++) {
                    arraymachine[i] = parseInt((Math.random()*49)+1);
                    for (var j = 0; j < 1; j++) {
                        if(arraymachine[i] === arraymachine[j]){
                            i--;
                        }
                    }         
                }
                
                arraymachine[arraymachine.length-1] = parseInt((Math.random()*10));
                
                return arraymachine;
    }


