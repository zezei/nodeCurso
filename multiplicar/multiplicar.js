//requires

const fs = require('fs'); //Libreria propoia de NODE
// const fs = require('express'); //Libreria de terceros
// const fs = require('./dir/file'); //Archivos generados por nosotros mismo en un path de nuestro dir
var colors = require('colors');

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject) =>{

        if (!Number(base) | !Number(limite)){
            reject (`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data+= `${base} * ${i} = ${base*i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve (`tabla-${base}-al-${limite}.txx`);
          });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('======================='.green)
    console.log(`===tabla de ${base}====`.red)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base*i}`)
        
    }
}
module.exports = {
    crearArchivo,
    listarTabla
}
