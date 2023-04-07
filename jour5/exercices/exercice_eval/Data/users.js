const getUsersPage = (usersList) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Liste des étudiants</title>
        <link href="/bootstrap" rel="stylesheet" type="text/css" />
        <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <header>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/users">Users</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="users-list-container">
                <h2>Liste des étudiants</h2>
                ${usersList}
              </div>
              <p><a href="/">Retour à l'accueil</a></p>
            </div>
          </div>
        </div>
        <script>
        function deleteUser(name) {
          fetch("/users/delete?name=" + name, {
            method: "DELETE",
          }).then(function (response) {
            if (response.ok) {
              location.reload();
            } else {
              console.error("Erreur lors de la suppression de l'utilisateur");
            }
          });
        }
        </script>
      </body>    
    </html>
  `;
};

module.exports = {
  getUsersPage,
};
