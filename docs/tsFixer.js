const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const inDir = path.join(__dirname, '../src');
const outDir  = path.join(__dirname, './sources');

const parsedFiles = parseRepetory('');

function parseRepetory(repertoryPath, parsedFiles = [])
{
    const files = fs.readdirSync(path.join(inDir, repertoryPath))
 
    const repertoriesToParse = [];

    for(const fileName of files)
    {
        // si le nom du fichier a une extention
        if(fileName.match(/\.[0-9a-z]+$/i))
        {
            parsedFiles.push({
                path: `${path.join(outDir, repertoryPath)}/${fileName}`,
                content: fs.readFileSync(`${path.join(inDir, repertoryPath)}/${fileName}`).toString().replaceAll('//#{}', '{}')
            });
        }
        else
        {
            repertoriesToParse.push(`${repertoryPath}/${fileName}`);
        }
    }

    for(const repertory of repertoriesToParse)
    {
        if(!fs.readdirSync(path.join(outDir, repertory)))
        {
            fs.mkdirSync(path.join(outDir, repertory));
        }

        parseRepetory(repertory, parsedFiles);
    }

    return parsedFiles;
}

for(const file of parsedFiles)
{
    fs.writeFileSync(file.path, file.content);
}

exec(`jsdoc -c docs/jsDocConfig.json -p`, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(`ERROR : ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
});