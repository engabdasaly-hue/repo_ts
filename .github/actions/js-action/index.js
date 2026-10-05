const core = require('@actions/core');
const { execSync } = require('child_process');

async function run() {
  try {
    const version = core.getInput('version') || 'latest';
    console.log(`Installing MyCLI cersion: ${version}...`);

    execSync(`curl -fsSL https://cli.example.com/install.sh | sh`,{ stdio: 'inherit'});
    console.log("MyCLI installed successfully.");

    
  } catch(error){
    core.setFailed(Ìnstalling failed : ${error.message} `);
  }
  
}

run();
