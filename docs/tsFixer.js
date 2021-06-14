const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const inDir = path.join(__dirname, '../src');
const outDir  = path.join(__dirname, './sources');
const thenCommand = `jsdoc -c docs/jsDocConfig.json -p`;

const parsedFiles = parseRepetory('./');

function parseRepetory(repertoryPath, parsedFiles = [])
{
    const files = fs.readdirSync(path.join(inDir, repertoryPath))
 
    const repertoriesToParse = [];

    for(const fileName of files)
    {
        const extention = fileName.match(/\.[0-9a-z]+$/i)

        if(extention && extention[0] === '.ts')
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
        // vérification de l'éxitance du dossier
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

exec(thenCommand, (error, stdout, stderr) => {
    if (error) {
        console.log(error.message);
        return;
    }
    if (stderr) {
        console.log(`ERROR : ${stderr}`);
        return;
    }
    console.log(stdout);
});