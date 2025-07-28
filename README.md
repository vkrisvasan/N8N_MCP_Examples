# N8N_MCP_Examples

🎯 step 1: Installed docker desktop for the system with common developer settings. Updated CLI from the settings > software update

🎯 step 2: Open command prompt and create a directory To keep your n8n workflows and settings even if you restart or upgrade the container:

cd ~
mkdir -p ~/n8n_data

🎯 step 3: Restart Docker Desktop using command prompt

docker desktop restart

🎯 step 3.1: Pull the latest Docker image (~280MB, no n8n dependencies!) -- more details in https://github.com/czlonkowski/n8n-mcp 

docker pull ghcr.io/czlonkowski/n8n-mcp:latest

🎯 step 4: in command prompt The following command pulls the official n8n image and runs it with recommended environment variables for MCP:

docker run -it --rm \
  --name n8n-mcp \
  -p 5678:5678 \
  -v ~/n8n_data:/home/node/.n8n \
  -e N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true \
  -e N8N_RUNNERS_ENABLED=true \
  -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true \
  n8nio/n8n

 🎯 Step 5: Open your browser and go to: 
  
  http://localhost:5678

 🎯 Step 5.1 : create an id with the gmail id or other mechanisms and passwd, i set "Set not for work" 
 
 🎯 Step 5.2 : set up n8n API key -- in n8n hosted web page > Go to left bottom > account > settings > n8n API > Create an API key > copy the key

 🎯 step 6: Install Cursor IDE and use latest Claude model. Claude desktop is the best to generate n8n workflow using n8n-mcp using Claude Opus 4 with extended thinking. i did not use claude desktop and i used cursor ide

 🎯 step 6.1: https://github.com/czlonkowski/n8n-mcp/blob/main/docs/CURSOR_SETUP.md helps with cursor IDE connect to n8n MCP

 🎯 step 6.2: created .cursor folder in  the project folder and placed the mcp.json with the "N8N_API_URL=http://localhost:5678/", and "N8N_API_KEY=" taken from strp 5.2"
 
 🎯 step 6.3: created rules folder in  the project folder and placed the n8n-mcp.mdc with the rules for the N8N_MCP to work with cursor prompts. This creates the actual magic
 
 🎯 step 6.4: Sample prompt to generate the workflow json file "build n8n workflow and provide the json file to 1. read the business requirement from a google excel sheet 2. edit the google excel sheet to update the requirement sheet with dod, dor, acceptance criteria, clear functional specs, non functional specs, estimation in story points 3. generate the source code in python for the requirement as detailed in point 2 following clean coding practices, SOLID design principles, Test driven development approach, defensive programming paradigm, logging following open telemetry and the code has to be idiomatic in nature 4. create a repo and raise PR in git  5. run static code checks on the branch as in point 4 and create another branch with modified code  with 0 code smells, code bugs, less than 3% duplicate line density , greater than 80% code coverage , 0 code vulnerabilities"

 🎯 step 7: create workflow in n8n http://localhost:5678 by "Create Workflow" > "Import from file" and import the json generated from cursor IDE. Save the flow and continue to mature the flow by running it and changiung it. Refer AutomatedBacklogRefinement branch within the repo for details of BacklogRefinementAutomation.json file, n8n-mcp.mdc file,  mcp.json file and the screen shots of the uI config. 

 🎯 step 8: download the workflow as a json file hitting the 3 dots near the save button and use it to share or keep in repo - BacklogRefinementAutomation.json

 🎯 step 8.1: install https://sqlitebrowser.org/dl/ and use it to connect to the ~/n8n_data/database.sqlite and understand the config data
 
 🎯 Step 9: Once completed development work, To stop n8n-mcp running within Docker Desktop from the command line:
  
docker stop n8n-mcp
  
 🎯 step 10: to stop docker

docker desktop stop
  
