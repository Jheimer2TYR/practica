const fs = require('fs');
const moment = require('moment');
const chalk = require('chalk');
const readline = require('readline');

const menu = `
  1. Ver hora actual
  2. Ver fecha actual
  3. Ver días de la semana
  4. Ver mensaje
  5. Salir
`;

console.log(chalk.blueBright(menu));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mensajes = fs.readFileSync('mensajes.txt').toString().split('\n');

function mostrarMensajeAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
  console.log(mensajes[indiceAleatorio]);
}

rl.question('Seleccione una opción: ', (option) => {
  switch (option) {
    case '1':
      console.log(`La hora actual es: ${moment().format('HH:mm:ss')}`);
      break;
    case '2':
      console.log(`La fecha actual es: ${moment().format('YYYY-MM-DD')}`);
      break;
    case '3':
      console.log(`Los días de la semana son: ${moment().format('dddd')}`);
      break;
    case '4':
      mostrarMensajeAleatorio();
      break;
    case '5':
      console.log('Adiós!');
      process.exit();
      break;
    default:
      console.log('Opción inválida. Intente de nuevo.');
  }
  rl.close();
});