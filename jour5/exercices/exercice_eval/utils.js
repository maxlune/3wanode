function deleteUser(name) {
  fetch("/users/delete?name=" + encodeURIComponent(name), {
    method: "DELETE",
  }).then(function (response) {
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Erreur lors de la suppression de l'utilisateur");
    }
  });
}

module.exports = {
  deleteUser,
};
