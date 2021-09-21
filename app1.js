const argv = require(`yargs`)
.command(`multi`,`Imprime en consola la tabla de multiplicar`,{
    base:{
        demand: true,
        alias: `b`
    },
    limite:{
        alias:`l`,
        default:10
    }
})
.command(`crear`,`Creando archivo...Espere unos momentos`,{
    base:{
        demand: true,
        alias: `b`
    },
    limite:{
        alias:`l`,
        default:10
    }
})
.help()
.argv
const {crearArchivo, imprimirTabla} = require("../multiplicar/multiplicar")

let comando = argv._[0];

switch( comando){
    case`multi`:
    console.log("Realizando multiplicacion...")
    imprimirTabla(argv.base,argv.limite)
    break;

    case`crear`:
    console.log("Creando archivo...")
    crearArchivo(argv.base, argv.limite).then((x) => {
        console.log(`Archivo creado ${x}`)
    }).catch((e) => {
        console.log(e)
    })
    break

    default:
        console.log("Comando no reconocido")

}

//console.log(module)
//console.log(multiplicar)
//multix(29);
//console.log(process.argv)
let argv2 = process.argv
console.log(argv.base)
console.log(argv.limite)
/*let parametro = argv[2]
console.log(parametro)
let base = parametro.split("=")[1]
console.log(base)*/

/*crearArchivo(base).then((x) => {
    console.log(`Archivo creado ${x}`)
}).catch((e) => {
    console.log(e)
})*/