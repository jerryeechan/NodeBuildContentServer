const { exec } = require("child_process");
const shell = require('shelljs');
const install_bash_path = "C:/Users/User/cloudbuildscripts/NineSols/asus-nuc-pro/install_xbox_all.sh";
if (shell.exec(install_bash_path).code !== 0) {
    shell.echo('Error: Shell script execution failed');
    shell.exit(1);
  }
// exec("bash "+install_bash_path, {
//     env: { PATH: 'C:\\Program Files\\git\\usr\\bin' },
//     shell: 'C:\\Program Files\\git\\usr\\bin\\bash.exe'
//   }, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing bash script: ${error.message}`);
      
//       return;
//     }

//     if (stderr) {
//       console.error(`Bash script stderr: ${stderr}`);
//       return;
//     }

//     // Output from the bash script
//     console.log(`Bash script output: ${stdout}`);

//     // Send a success response
//   }); 