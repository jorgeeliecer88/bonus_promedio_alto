const nombre = { demand: true, alias: "n" };

const matematicas = { demand: true, alias: "m" };

const ingles = { demand: true, alias: "i" };

const programacion = { demand: true, alias: "p" };

const promedioEstudiante = { nombre };

const creacion = {
  nombre,
  matematicas,
  ingles,
  programacion
};

const argv = require("yargs")
  .command("crear", "Crear un estudiante", creacion)
  .command(
    "promedio",
    "Promedia las notas de un estudiante",
    promedioEstudiante
  )
  .command("promedioSuperior", "lista los estudiantes con notas mayores a 3")
  .argv;

module.exports = { argv };
