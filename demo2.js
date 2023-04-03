const os = require("os");

const { username } = os.userInfo();
const cpus = os.cpus().length;

console.log(
  `Cette machine appartient à ${username} qui est moi et a ${cpus} CPUs`
);

// process.stdin.write("Bonjour \n");
process.stdout.write("Bonjour \n");
process.stderr.write("Error \n");
process.stdin.on("data", (chunk) => {
  process.exit(0);
});
