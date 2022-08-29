const addTeam = teammates => {
    const addMngr = manager => {
        return `
        <section>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${manager.getRole()}</div>
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">${manager.getName()}</h5>
    <ul class="card-text">
    <li> ID: ${manager.getId()} </li>
    <li> Email: <a href ="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li> Office #: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div>
</section>
        `;
    };
    const addEng = engineer => {
        return `
        <section>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${engineer.getRole()}</div>
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">${engineer.getName()}</h5>
    <ul class="card-text">
    <li> ID: ${engineer.getId()} </li>
    <li> Email: <a href ="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li> Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
    </ul>
  </div>
</div>
</section>
        `;
    };
    const addInt = intern => {
        return `
        <section>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;">${intern.getRole()}</div>
  <div class="card-body">
    <h5 class="card-title" style="text-align:center;">${intern.getName()}</h5>
    <ul class="card-text">
    <li> ID: ${intern.getId()} </li>
    <li> Email: <a href ="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li> School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>
</section>
        `;
    };
    const html =[];
    html.push(teammates
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => addMngr(manager))
        );
     html.push(teammates
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => addEng(engineer))
        .join("")
         );
     html.push(teammates
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => addInt(intern))
        .join("")
        );
        return html.join("");
         
}


module.exports = teammates => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <link rel ="stylesheet" href= "style.css">
    <title>Team Tracker</title>
  </head>
  <body>
    <header>
      <div class="jumbotron jumbotron-fluid" style="background-color: maroon; font-size: 45px; text-align: center;">
        <div class="container">
          <h1
            class="display-4"
          >
            My Team
          </h1>
        </div>
      </div>
    </header>

    <section>
        <div class ="container-fluid">
            <div class ="row">
                <div class ="row team-area col-12 d-flex justify-content-center">
                    ${addTeam(teammates)}
                </div>
            </div>
        </div>
    </section>

    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `
}