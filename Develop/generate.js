//generate card HTML for all engineers within the array
function engineersCard(people) {

    const engineers = people.filter((engineer) => {
        return engineer.role === "engineer";
    });
    return engineers.map((engineer) => {
    var cardHTML = `<div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <p class="card-text">${engineer.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${engineer.id}</li>
      <li class="list-group-item"><a href="#" class="card-link">${engineer.email}</a></li>
      <li class="list-group-item">${engineer.github}</li>
    </ul>
  </div>`
    return cardHTML;
    });
}

//generate card HTML for all interns within the array

function internsCard(people) {

    const interns = people.filter((intern) => {
        return intern.role === "intern";
    });
    return interns.map((intern) => {
    var cardHTML = `<div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <p class="card-text">${intern.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item"><a href="#" class="card-link">${intern.email}</a></li>
      <li class="list-group-item">${intern.school}</li>
    </ul>
  </div>`
    return cardHTML;
    });
}

//generate card HTML for all managers within the array

function managersCard(people) {

    const managers = people.filter((manager) => {
        return manager.role === "manager";
    });
    return managers.map((manager) => {
    var cardHTML = `<div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <p class="card-text">${manager.role}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item"><a href="#" class="card-link">${manager.email}</a></li>
      <li class="list-group-item">${manager.school}</li>
    </ul>
  </div>`
    return cardHTML;
    });
}


// console.log(engineersCard(test));
// console.log(internsCard(test));
// console.log(managersCard(test));

module.exports = {
    engineersCard,
    internsCard,
    managersCard
};
