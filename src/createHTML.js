const createManager = function(manager) {
    return `
    <div class="col">
            <div class="card h-100 align-items-center">
                <h2><i class="fa-solid fa-mug-hot"></i></h2>
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const createEngineer = function(engineer) {
    return `
    <div class="col">
            <div class="card h-100 align-items-center">
                <h2><i class="fa-solid fa-glasses"></i></h2>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const createIntern = function(intern) {
    return `
    <div class="col">
            <div class="card h-100 align-items-center">
                <h2><i class="fa-solid fa-graduation-cap"></i></h2>
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
                <div class="card-body">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

createHTML = (data) => {

    // array for employees 
    pageArr = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // create manager card
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArr.push(managerCard);
        }

        // create engineer card
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArr.push(engineerCard);
        }

        // create intern card
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArr.push(internCard);
        }

    }

    const employeeCards = pageArr.join('')

    const createTeam = createTeamPage(employeeCards);
    return createTeam;

}

// create team html page 
const createTeamPage = function(employeeCards) {
    return `
 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/95e8849893.js" crossorigin="anonymous"></script>
        <!-- Bootstrap CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Team Profiles</span>
                </div>
            </nav>
        </header>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            ${employeeCards}
        </div>
    </body>
    </html>

`;
}

// export to index
module.exports = createHTML;