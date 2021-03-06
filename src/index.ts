#!/usr/bin/env node
import program from 'commander';
import chalk from 'chalk';
import { validateCommand } from './validate-command';
import { getModuleFiles } from './helpers';

const packageJson = require('../package.json');
const figlet = require('figlet');
const clear = require('clear');

clear();
console.log(
    chalk.magenta(
        figlet.textSync('Liftr', { horizontalLayout: 'full' }),
    ),
);
program
    .description('The CLI for scaffolding Node/Typescript projects quick in the Liftr Framework')
    .option('create', 'choose a component to create')
    .option('create module', 'create a Liftr module with a Routes file')
    .option('create route', 'create a route in target file and add it to its module')
    .option('create controller', 'create a controller file')
    .option('create middleware', 'create a middleware file')
    .option('create setup', 'create the Liftr setup for Nodejs and Typescript')
    .version(packageJson.version)
    .parse(process.argv);

const args = process.argv.slice(2);
if (args[0] === 'create') {
  validateCommand(args[1]);
}

if (!args.length) {
  program.outputHelp();
}
