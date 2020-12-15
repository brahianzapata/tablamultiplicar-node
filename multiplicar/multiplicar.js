
//require
const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base)){
            reject(`el valor introducido ${base} no es un numer`)
            return;
        }
        let data = '';

        for (let i = 0; i <= limite ; i++) {
            // const element = array[i];
            data +=`${base} * ${i} = ${base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
        if (err) throw err;
        else
            resolve(`tabla-${ base }.txt`);
        });
    });
}


let listarTabla = (base, limite = 10) => {

    if( !Number(base)){
        reject(`el valor introducido ${base} no es un numer`)
        return;
    }
    let data = '';

    for (let i = 0; i <= limite ; i++) {
        // const element = array[i];
        data +=`${base} * ${i} = ${base * i }\n`;
    }

    console.log('============================='.green);
    console.log(`=======tabla de ${base}======`.red);
    console.log('============================='.green);
    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla
}
