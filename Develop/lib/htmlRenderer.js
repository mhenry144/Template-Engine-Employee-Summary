// generate HTML
function renderHTML(answers) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      
      <style>
          .card-header {
              background-color: rgb(62, 71, 92)
          }
  
          .card {
              box-shadow: 5px 10px lightgray;
          }
  
          .card-title {
              color: white;
          }
          .card-body {
              background-color: rgb(245, 241, 241);
          }
          .team-heading {
            background-color: rgb(62, 71, 92);
  
          }
          .team-header {
              color: white;
              
          }
          .team-area {
              padding: 10px;
              float: left;
              width: 25%;
              
          }
  
          .employee-card {
              padding: 20px;
              min-width: 275px;
          }
  
  
      </style>
  
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center team-header ">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  <!-- Manager Information -->   
                  <div class="card employee-card">
                      <div class="card-header">
                          <h2 class="card-title">${answers.nameManager}</h2>
                          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${
                                answers.idManager ? answers.idManager : " "
                              }</li>
                              <li class="list-group-item">Email: ${
                                answers.emailManager
                                  ? answers.emailManager
                                  : " "
                              }</a></li>
                              <li class="list-group-item">Office number: ${
                                answers.officeManager
                                  ? answers.officeManager
                                  : " "
                              }</li>
                          </ul>
                      </div>
                  </div>
              </div>
       
              <!-- Engineer 1 Information -->
              <div class="team-area col-12 d-flex justify-content-center">   
                  <div class="card employee-card">
                      <div class="card-header">
                          <h2 class="card-title">${answers.nameEngineer1}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${
                                answers.idEngineer1
                              }</li>
                              <li class="list-group-item">Email: ${
                                answers.emailEngineer1
                              }</li>
                              <li class="list-group-item">GitHub: ${
                                answers.githubEngineer1
                              }</li>
                          </ul>
                      </div>
                  </div>
              
                  <!-- Engineer 2 Information -->
                  <div class="card employee-card">
                      <div class="card-header">
                          <h2 class="card-title">${answers.nameEngineer2}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${
                                answers.idEngineer2
                              }</li>
                              <li class="list-group-item">Email: ${
                                answers.emailEngineer2
                              }</li>
                              <li class="list-group-item">GitHub: ${
                                answers.githubEngineer2
                              }</li>
                          </ul>
                      </div>
                  </div>
                  <!-- Engineer 3 Information -->
                  <div class="card employee-card">
                      <div class="card-header">
                          <h2 class="card-title">${answers.nameEngineer3}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${
                                answers.idEngineer3
                              }</li>
                              <li class="list-group-item">Email: ${
                                answers.emailEngineer3
                              }</li>
                              <li class="list-group-item">GitHub: ${
                                answers.githubEngineer3
                              }</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="team-area col-12 d-flex justify-content-center">   
                  <!-- Intern Information -->
                  <div class="card employee-card">
                      <div class="card-header">
                          <h2 class="card-title">${answers.nameIntern}</h2>
                          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                      </div>
                      <div class="card-body">
                          <ul class="list-group">
                              <li class="list-group-item">ID: ${
                                answers.idIntern
                              }</li>
                              <li class="list-group-item">Email: ${
                                answers.emailIntern
                              }</li>
                              <li class="list-group-item">School: ${
                                answers.linkedinIntern
                              }</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"></script>
      
  </body>
  
  </html>`;
}

module.exports = renderHTML;
