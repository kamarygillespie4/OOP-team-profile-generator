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
                            <li class="list-group-item">ID: ${enginee.id}</li>
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