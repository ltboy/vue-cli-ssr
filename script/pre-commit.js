const inquirer = require("inquirer");
const shell = require("shelljs");
const prompts = require("./config/prompts");

async function gitCommit() {
  const { type, msg } = await inquirer.prompt(prompts);
  shell.exec(`git commit -m ${type} ${msg}`);
  console.log(`\n 提交脚本：git commit -m ${type} ${msg}`);
}

gitCommit();
