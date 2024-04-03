
function division(){
    let n1= parseFloat (document.getElementById('factura').value);
    let n2= parseFloat (document.getElementById('propina').value);
    
    let total= n1 * n2 /100;
    
    resultado.innerHTML='La propina es de $ '+ total;
    }


    function suma(){
        let n1= parseFloat (document.getElementById('factura').value);
    let n2= parseFloat (document.getElementById('propina').value);
    
    let total= n1+ (n1 * n2 /100);
    

    totale.innerHTML= 'La cuenta total factura + propina es de $  ' +total;
}
