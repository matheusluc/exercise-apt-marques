const offset = 0;
const limit = 10;

const dataBase = `https://api.github.com/users/FilipeNMarques/repos?offset=${offset}&limit=${limit}`;

function convertProjectToHtml(project){
    return `
        <li class="nameProject">${project.name}</li>
    `
}

const projectList =  document.getElementById('projectList')


fetch(dataBase)
    .then((response) => response.json())
    .then((projects) => {
        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          projectList.innerHTML += convertProjectToHtml(project)
        }
    })