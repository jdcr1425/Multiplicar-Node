const colors = require('colors');
const fs = require('fs');

let listarTabla = (base, limite=10)=>{
    
    if(isNaN(base)){
        reject('No es un numero');
        return;    
    }
    let data='';
    for(let j=1;j<=limite;j++){
        data +=`${base}*${j} = ${base*j} \n`;
    }

    console.log(data.red);

    
}


let crearArchivo = (base, limite=10)=>{
    
    return new Promise((resolve, reject)=>{
        let data='';

        if(isNaN(base)){
            reject('No es un numero');
            return;    
        }

        for(let j=1;j<=limite;j++){
            data +=`${base}*${j} = ${base*j} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject( err);
            else
                resolve(`tabla-${base}.txt`)
          });
          
    });
    
    
}


module.exports={crearArchivo,listarTabla};





