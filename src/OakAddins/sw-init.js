const params = getJsonFromUrl()

function tryAutoInstall()
{
    if(params['install-app'])
    {
        if(deferredPrompt)
        {
            console.log('getJsonFromUrl');
            displayModalButton.click();
        }
        else if (window.matchMedia('(display-mode: standalone)').matches)
        {
            window.location.href = './configurator.html';
        }
        else
        {
            document.head.innerHTML = '';
            document.body.innerHTML = 'you navigator cannot install PWA applications. You will be redirected in 5 seconds...';
        
            setInterval(() => history.back(), 5000);
        }
    }
}

let installAppButton;
let displayModalButton;

function initInstall()
{
    installAppButton = document.getElementById('install-app-button');

    console.log('[SW]', 'install button is', installAppButton);
    
    // si le DOM n'est pas encore chargé on relance la fonction quand il l'est
    if(!installAppButton)
    {
        //window.addEventListener('DOMContentLoaded', () => initInstall());
        
        document.Configurator.on('pwa-modal-builed', () => {
            
            console.log('modal builded');
            
            initInstall();
        });

        return;
    } 

    console.log('[SW]', 'Init Install');
    
    displayModalButton = document.querySelector('#display-install-app-button');
    displayModalButton.hidden = (deferredPrompt) ? false : true;
    
    installAppButton.addEventListener('click', async () => 
    {
        if (deferredPrompt) 
        {
            deferredPrompt.prompt();

            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === 'accepted') 
            {
                console.log('[SW]', 'Install accepted, clearing');

                displayModalButton.click();

                deferredPrompt = null;
                displayModalButton.hidden = true;
            }
            else if(params['install-app'])
            {
                //history.back();
            }
        }
    });

    tryAutoInstall(installAppButton);
}

let deferredPrompt;

if ('serviceWorker' in navigator) 
{
    window.addEventListener('beforeinstallprompt', (prompt) => 
    {
        console.log('[SW]', 'try instanciate deferredPrompt');

        if(!window.matchMedia('(display-mode: standalone)').matches)
        {
            console.log('[SW]', 'not in standalone init prompt');
            deferredPrompt = prompt;
        }

        //TODO : IMPORTANT
        //BUG: changer ça

        const id = setTimeout(() => {
            initInstall();
            clearTimeout(id)
        }, 2000);
    });

    window.addEventListener('load', async () => {

        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
        } catch (error) {
            console.error('ServiceWorker registration failed', error);  
        }
    });
}


function getJsonFromUrl(url) 
{
    if (!url) url = location.search;

    const query = url.substr(1);
    const result = {};

    for(const part of query.split("&"))
    {
        const item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    }

    return result;
}