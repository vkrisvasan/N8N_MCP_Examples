# N8N_MCP_Examples

🎯 step 1: Installed docker desktop for the system with common developer settings. Updated CLI from the settings > software update

🎯 step 2: Open command prompt and create a directory To keep your n8n workflows and settings even if you restart or upgrade the container:

cd ~
mkdir -p ~/n8n_data

🎯 step 3: Restart Docker Desktop using command prompt

docker desktop restart

🎯 step 3.1: Pull the latest Docker image (~280MB, no n8n dependencies!)

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

 🎯 Step 5.1 : set up n8n API key -- in n8n hosted web page > Go to left bottom > account > settings > n8n API > Create an API key > copy the key

 🎯 step 6: create an id with the gmail id or other mechanisms and passwd, i set "Set not for work"

 🎯 step 7: create workflow

 🎯 step 8: install https://sqlitebrowser.org/dl/ and use it to connect to the ~/n8n_data/database.sqlite and understand the data

 🎯 Step 6: To stop n8n-mcp running within Docker Desktop from the command line:
  
docker stop n8n-mcp
  
 🎯 step 10: stop docker

docker desktop stop
  
