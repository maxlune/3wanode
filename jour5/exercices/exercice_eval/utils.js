const dayjs = require("dayjs");
const fr = require("dayjs/locale/fr");
dayjs.locale(fr);

function generateUsersList(students) {
  let users = "<ul class='list-group'>";
  for (const { name, birth } of students) {
    const formattedBirth = dayjs(birth).format("DD MMMM YYYY");
    users += `<li class="list-group-item d-flex justify-content-between align-items-center">
  ${name} - ${formattedBirth}
  <button class="btn btn-danger btn-sm btn-delete" onclick="deleteUser('${name}')">Supprimer</button>
  </li>`;
  }
  users += "</ul>";
  return users;
}

module.exports = { generateUsersList };
