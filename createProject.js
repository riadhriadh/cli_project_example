'use strict';

const { join } = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');
const execa = require('execa');


module.exports = async function createProject(scope, { client, connection, dependencies }) {
 
    const { rootPath } = scope;
    const resources = join(__dirname, 'resources');

try {
    console.log(    chalk.yellow('Installing dependencies:',resources));
    // copy files
    await fse.copy(join(resources, 'files'), rootPath);
    console.log(    chalk.yellow('Installing dependencies finsh:'));
}catch{

    chalk.red('Installing dependencies: filed');
}

}