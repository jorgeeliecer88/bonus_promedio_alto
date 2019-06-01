const { argv } = require("./yargs");
const funciones = require("./funciones");

let comando = argv._[0];

switch (comando) {
  case "crear":
    funciones.crear(argv);
    break;
  case "promedioSuperior":
    funciones.promedioSuperior();
    break;
  case "promedio":
    funciones.promedio(argv.nombre);
    break;
  default:
    console.log("No se ha ejecutado ningún comando");
    break;
}
