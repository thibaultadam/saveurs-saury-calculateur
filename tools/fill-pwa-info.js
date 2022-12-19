const fs = require('fs');
let files = [];
const a = require('bootstrap')

function readDirectory(directoryPath = './build')
{
    const directory = fs.opendirSync(directoryPath);
    const directories = [];

    let file = directory.readSync();
    
    while(file)
    {   
        if(file.isFile())
        {
            files.push(`${directoryPath}/${file.name}`);
        }
        if(file.isDirectory())
        {
            directories.push(file);
        }

        file = directory.readSync();
    }
    for(const dir of directories)
    {
        readDirectory(`${directoryPath}/${dir.name}`);
    }
}

readDirectory();

files = files.map(file => file.replace('./build/', ''));

const info = JSON.parse(fs.readFileSync('src/OakAddins/data/info.json'));
info.pwa = files;
fs.writeFileSync('src/OakAddins/data/info.json', JSON.stringify(info));