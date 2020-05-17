const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const jest = require("jest");
const renderHTML = require("./Develop/lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);
const path = require("path");

function promptUser() {
  return inquirer.prompt([
    // Manager Information
    {
      type: "input",
      name: "nameManager",
      message: "Enter manager name: ",
    },
    {
      type: "input",
      name: "idManager",
      message: "Enter manager ID: ",
    },
    {
      type: "input",
      name: "emailManager",
      message: "Enter manager email: ",
    },
    {
      type: "input",
      name: "officeManager",
      message: "Enter manager office number:  ",
    },
    // Engineer Information
    {
      type: "input",
      name: "nameEngineer1",
      message: "Enter first engineer's name: ",
    },
    {
      type: "input",
      name: "idEngineer1",
      message: "Enter first engineer's ID: ",
    },
    {
      type: "input",
      name: "emailEngineer1",
      message: "Enter first engineer's email: ",
    },
    {
      type: "input",
      name: "githubEngineer1",
      message: "Enter first engineer's github account:  ",
    },
    {
      type: "input",
      name: "nameEngineer2",
      message: "Enter second engineer's name: ",
    },
    {
      type: "input",
      name: "idEngineer2",
      message: "Enter second engineer's ID: ",
    },
    {
      type: "input",
      name: "emailEngineer2",
      message: "Enter second engineer's email: ",
    },
    {
      type: "input",
      name: "githubEngineer2",
      message: "Enter first engineer's github account: ",
    },
    // Engineer Information
    {
      type: "input",
      name: "nameEngineer3",
      message: "Enter third engineer's name: ",
    },
    {
      type: "input",
      name: "idEngineer3",
      message: "Enter third engineer's ID: ",
    },
    {
      type: "input",
      name: "emailEngineer3",
      message: "Enter third engineer's email: ",
    },
    {
      type: "input",
      name: "githubEngineer3",
      message: "Enter third engineer's github account: ",
    },

    // Intern Information
    {
      type: "input",
      name: "nameIntern",
      message: "Enter intern name: ",
    },
    {
      type: "input",
      name: "idIntern",
      message: "Enter Intern ID: ",
    },
    {
      type: "input",
      name: "emailIntern",
      message: "Enter Intern email: ",
    },
    {
      type: "input",
      name: "linkedinIntern",
      message: "Enter Intern Linkedin account: ",
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();

    const html = renderHTML(answers);
    // update index.html
    await writeFileAsync("index.html", html);
    // try / catch error
    console.log("Team created!");
  } catch (err) {
    console.log(err);
  }
}

init();
