const fs = require('fs');
const colors = require ('colors');

const crearArchivo = async (base=5, hasta, listar)=>{

    let salida, consola = '';

    for (let i=1;i<=hasta;i++){
        consola += (`${colors.red(base)} x ${colors.cyan(i)} = ${colors.magenta(base * i)}\n`);
        salida += (`${base} x ${i} = ${base * i}\n`);
    }

    if (listar) {
        console.log('=================');
        console.log('  Table of ',colors.underline.red(base));
        console.log('=================');
        console.log(consola);
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } 
    catch (error) {
        throw error;
    }
        
    
}

module.exports={
     crearArchivo 
}