function generateData(manager, engineerHTML, internHTML) {
  return `

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      <title>${manager.name}'s Team</title>
  </head>
  
  <body class="has-background-primary-light">
  <div class="container is-flex-wrap is-justify-content-space-evenly">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title has-text-centered is-size-4">
        ${manager.name}'s Team
        </p>
        <p class="subtitle">
          Organizational Chart
        </p>
      </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <div class="media-content">
            <p class="title is-4 is-centered has-background-primary-dark has-text-primary-light">${manager.name}</p>
            <p class="subtitle is-6">Manager</p>
          </div>
          <div class="content has-background-primary-light has-text-primary-dark">
            <p class="content">Employee Id: ${manager.id}</p>
            <p>Email: <a href="${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.office}</p>
          </div>
        </div>
      </div>
    </section>  
    <section>    
    ${engineerHTML}
    </section>
    <section >
    ${internHTML}
    </section>
  </div>
</body>
</html>
`;
}
module.exports = generateData;
