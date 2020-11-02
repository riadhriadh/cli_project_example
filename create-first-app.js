'use strict';

const chalk = require('chalk');
const { join, resolve, basename } = require('path');
const generateNew = require('./generate-new');

module.exports = (projectDirectory, cliArguments) => {
    const rootPath = resolve(projectDirectory);
    console.log(`Creating a new Strapi application at ${chalk.green(projectDirectory)}.`);
    console.log(`Creating a new Strapi application attt ${chalk.green(JSON.stringify(cliArguments.quickstart))}.`);
    const scope = {
        rootPath,
        name: basename(rootPath),
    }

    return generateNew(scope).catch(error => {
        console.error(error);
      
      });


}