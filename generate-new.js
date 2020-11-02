'use strict';

/**
 * Module dependencies
 */

// Node.js core.
const chalk = require('chalk');
const fse = require('fs-extra');
const createProject = require('./createProject');
module.exports = async scope => {
    const client = 'sqlite';
    const configuration = {
        client,
        // connection: defaultConfigs[client],
        // dependencies: clientDependencies({ scope, client }),
      };

 
    if (await fse.exists(scope.rootPath)) {
        console.log(chalk.red(`Creating a new Strapi  name  path ⛔️ ${scope.rootPath} . existe`));
    }else{
        console.log(` path not existe ${chalk.green(scope.rootPath)}. ⛔️`);
   
   return     createProject(scope, configuration);

  
    }
    
    

}