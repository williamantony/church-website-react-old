const process = require("process");
const readline = require("readline");
const { execSync } = require('child_process');

console.log("Please check ./build-checklist.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("\nDo you want to continue the build process (y):\n$ ", (answer) => {
  
  if (answer.toLowerCase() !== "y")
  {
    console.error("\n... Exiting ...");
    process.exit(0);
  }

  console.error("\n... Starting the Build Process ...");

  rl.close();

  execSync("clear && npm run build:prod", { stdio: "inherit" });
});
