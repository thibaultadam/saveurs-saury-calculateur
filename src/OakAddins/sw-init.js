const params = getJsonFromUrl(location.search)

function tryAutoInstall()
{
    if(params['install-app'])
    {
        if(deferredPrompt)
        {
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

let displayModalButton;

function initInstall()
{
    const installAppButton = document.getElementById('install-app-button');

    console.log('[SW]', 'Init Install', installAppButton);
    
    displayModalButton = document.querySelector('#display-install-app-button');
    displayModalButton.hidden = !(deferredPrompt);
    
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

                document.querySelector('#lang-right-position-container').hidden = false;
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

// dans le cas ou on install l'app depuis l'exterieur de l'iframe
waitUntil(() => document.getElementById('display-install-app-button'), () => {
    const displayModalButton = document.getElementById('display-install-app-button');

    console.warn('unit')

    if(parent.document != document)
    {   
        displayModalButton.addEventListener('click', () => {
            parent.document.location.href = './configurator.html?install-app=true&mode=default';
        });   
    }
});


if ('serviceWorker' in navigator) 
{
    window.addEventListener('beforeinstallprompt', async (prompt) => 
    {
        console.log('[SW]', 'try instanciate deferredPrompt');

        if(!window.matchMedia('(display-mode: standalone)').matches)
        {
            console.log('[SW]', 'not in standalone init prompt');
            deferredPrompt = prompt;
            waitUntil(() => document.getElementById('install-app-button'), () => initInstall());
        }
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

function waitUntil(condition, callBack, interval = 100)
{
    const intervalID = setInterval(() => {

        let check;
        
        try {
            check = !!(condition());
        }
        catch {
            check = false;
        }

        if(check) {
            clearInterval(intervalID);
            delete intervalID;
            callBack();
        }

    }, interval);
}