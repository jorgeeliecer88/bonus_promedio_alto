const fs = require("fs");

let estudiantes = [];

let crear = estudiante => {
  leer();

  let est = {
    nombre: estudiante.nombre,
    matematicas: estudiante.matematicas,
    ingles: estudiante.ingles,
    programacion: estudiante.programacion
  };

  let duplicado = estudiantes.find(est => est.nombre == estudiante.nombre);

  if (!duplicado) {
    estudiantes.push(est);

    guardar(estudiantes);
  } else {
    console.log(">> El estudiante ya existe");
  }
};

let leer = () => {
  try {
    estudiantes = require("./estudiantes.json");
  } catch (error) {
    estudiantes = [];
  }
};

let guardar = () => {
  let dato = JSON.stringify(estudiantes);
  fs.writeFile("estudiantes.json", dato, err => {
    if (err) throw err;
    console.log(">> Notas del estudiante registadas con exito.");
  });
};

let promedioSuperior = () => {
  leer();
  console.log("<< Notas Estudiantes  mayores a 3>>");
  estudiantes.forEach(item => {
    let promedio = item.programacion + item.ingles + item.matematicas;
    if (promedio > 3) {
      console.log("Estudiante : " + item.nombre);
      console.log("Promedio :" + promedio);
      console.log("\n");
    }
  });
};

let promedio = estInput => {
  console.log(">> estudiante  : " + estInput);
  leer();
  let estPromedio = estudiantes.find(est => est.nombre == estInput);
  if (estPromedio) {
    console.log(
      ">> El promedio de " +
        estPromedio.nombre +
        " es : " +
        (estPromedio.matematicas +
          estPromedio.ingles +
          estPromedio.programacion)
    );
  } else {
    console.log(
      ">> El estudiente no esta en el sistema, crealo en el sistema antes."
    );
  }
};

module.exports = {
  crear,
  promedioSuperior,
  promedio
};
