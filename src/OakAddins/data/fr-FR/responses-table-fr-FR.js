/**
 * Les fichier de données en .js on pour but de pouvoir intègrer ce qui n'est pas possible en json, 
 * dans ce cas précis c'est pour pouvoir utiliser de petits callback dans les données que ce fichier a été créé.
 * 
 * Le scope des fichier js de données est le meme qu'une méthode de la class Main du Confugurateur, 
 * tout éléments globaux du DOM sont accessibles et le this est égal a celui de la class Main du configurateur (dans ce cas précis OakAddinsCoinfigurateur.ts) 
 * /!\ Attention /!\ pour ce qui est du this et de l'acces au composants du configurateur il faut savoir que le chargement des données de construction 
 * est la toute première étape de la création d'un Configurateur donc au moment de l'execution casiement aucuns modules et aucunes données du Configurateur ne sont chargé
 * y acceder provoquerais une erreur
 * 
 * ------- structure a respecter
 * - Le fichier ne doit pas etre un module
 * - Le fichier doit retourner la/les donnée(s) 
 * - l'utilisation d'une fonction IIFE est recomander pour éviter tout comflit de nomage entre le systèmes et le fichier de données
 */

(function()
{
    // made to handle multiple kind of callback  
    class FieldCallback 
    {
        /**
         * 
         * @example
         * {
         *  "hectolitres" : (volume, gpl) => volume / gpl,
         *  "gallons" : (volume, gpl) => volume / gpl * 2,
         * }
         */
        constructor(callbacksObject, ending)
        {
            this.callbacks = callbacksObject;
        }

        call(...args)
        {
            if(!this.callbacks[Config.data.volumeType]) throw new Error(`Unable to find "${Config.data.volumeType}" in callback (maybe you type wrong the volume index in callback declaration or in Config)`);
            return this.callbacks[Config.data.volumeType](...args);
        }

        get get()
        {
            if(!this.callbacks[Config.data.volumeType]) throw new Error(`Unable to find "${Config.data.volumeType}" in callback (maybe you type wrong the volume index in callback declaration or in Config)`);
            return this.callbacks[Config.data.volumeType];
        }
    }

    const vulumeTypes = {

        dosage : {
            hectolitres : "Kg",
            gallons : "Lb",
        },

        sac18: {
            hectolitres: "Sacs (18kg)",
            gallons: "Sacs (40 Lbs)",
        },
        
        sac9: {
            hectolitres: "Sacs (9kg)",
            gallons: "Sacs (20 Lbs)",
        },

        sacI40u : {
            hectolitres : "Sacs infusion de 40 unités",
            gallons : "Sacs infusion de 40 unités",
        },
        
        paq20u: {
            hectolitres : "Paquets de 20 unités",
            gallons : "Paquets de 20 unités",
        },
          
        paq10u: {
            hectolitres : "Paquets de 10 unités",
            gallons : "Paquets de 10 unités",
        },
          
        paq14u: {
            hectolitres : "Paquets de 14 unités",
            gallons : "Paquets de 14 unités",
        },

        paq5u: {
            hectolitres : "Paquets de 5 unités",
            gallons : "Paquets de 5 unités",
        },

        set18p : {
            hectolitres: "Set de 18 pièces",
            gallons: "Set de 18 pièces"
        },

        set34p: {
            hectolitres : "Set de 34 pièces",
            gallons : "Set de 34 pièces",
        },

        staves: {
            hectolitres: "Staves",
            gallons: "Staves",
        },

        pieces: {
            hectolitres: "Pièces",
            gallons: "Pièces",
        }
    }

    // BUG : incohérance des calculs
    // TODO : véfifier tout les choix 1 par 1
    // TODO : rajouter les calculs de Gallons 

    const dataset = 
    [
        {
            "type" : "thead", 
            "values" : [
                "Temps de contact recommandé",
                "Produits",
                "Quantité",
                "Quantité conditionnée"
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "Durée de la fermentation",
                "Poudre *",
                {
                    "hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "gallons": (volume, gpl) => (volume * 100) * gpl / 1000,
                },
                (quantity) => quantity / 18
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "Durée de la fermentation",
                "Mixture *",
                {
                    "hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "gallons": (volume, gpl) => (volume * 100) * gpl / 1000,
                },
                (quantity) => quantity / 18
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "Durée de la fermentation",
                "Fine de chêne",
                {
                    "hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "gallons": (volume, gpl) => (volume * 100) * gpl / 1000,
                },
                (quantity) => quantity / 18
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "Fermentation ou élevage court",
                "Copeaux",
                {
                    "hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "gallons": (volume, gpl) => (volume * 100) * gpl / 1000,
                },
                (quantity) => quantity / 18
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac9
        },
        {
            "type" : "tbody",
            "values" : [
                "3-4 mois",
                "Cubes",
                {
                    "hectolitres": (volume, gpl) => null,
                    "gallons": (volume, gpl) => null,
                },
                (quantity) => quantity / 9
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac9
        },
        {
            "type" : "tbody",
            "values" : [
                "4-5 mois",
                "Dominos",
                {
                    "hectolitres": (volume, gpl, porcentage) => (typeof gpl === 'number') ? gpl * (volume*100) / 1000 : (2 / 100) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (typeof gpl === 'number') ? gpl * (volume*100) / 1000 : (2 / 100) * porcentage * volume,
                },
                (quantity) => quantity / 9
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac9
        },
        {
            "type" : "tbody",
            "values" : [
                "5-6 mois",
                "Blocks",
                {
                    "hectolitres": (volume, gpl, porcentage) => null,
                    "gallons": (volume, gpl, porcentage) => null,
                },
                /*
                    // A verifier

                new FieldCallback({
                    "hectolitres": (volume, gpl, porcentage) => (typeof gpl === 'number') ? gpl * (volume*100) / 1000 : (2.5 / 100) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (typeof gpl === 'number') ? gpl * (volume*100) / 1000 : (2.5 / 100) * porcentage * volume,
                }),
                */
                (quantity) => quantity / 9
            ],
            dosage : vulumeTypes.dosage,
            quantity : vulumeTypes.sac9
        },

        ////////// Porcentage ///////////

        {
            "type" : "tbody",
            "values" : [
                "6-8 mois",
                "Blocks",
                {
                    "hectolitres": (volume, gpl, porcentage) => null,
                    "gallons": (volume, gpl, porcentage) => null,
                },
                (quantity) => quantity / 9
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.sacI40u 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-8 mois",
                "Mini Thin Tank Stave ",
                {
                    "hectolitres": (volume, gpl, porcentage) => (6/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (6/33) * porcentage * volume,
                },
                (quantity) => quantity / 40
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq20u 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-8 mois",
                "Thin Tank Stave",
                {
                    "hectolitres": (volume, gpl, porcentage) => (3/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (3/33) * porcentage * volume,
                },
                (quantity) => quantity / 20
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.sacI40u 
        },
        {
            "type" : "tbody",
            "values" : [
                "8-10 mois",
                "Mini Tank Stave",
                {
                    "hectolitres": (volume, gpl, porcentage) => (4/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (4/33) * porcentage * volume,
                },
                (quantity) => quantity / 40
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq20u
        },
        {
            "type" : "tbody",
            "values" : [
                "8-10 mois",
                "Tank Stave",
                {
                    "hectolitres": (volume, gpl, porcentage) => (2/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (2/33) * porcentage * volume,
                },
                (quantity) => quantity / 20
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq10u 
        },
        {
            "type" : "tbody",
            "values" : [
                "10-12 mois",
                "Winewood",
                {
                    "hectolitres": (volume, gpl, porcentage) => (1.5/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (1.5/33) * porcentage * volume,
                },
                (quantity) => quantity / 10
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq14u 
        },
        {
            "type" : "tbody",
            "values" : [
                "10-12 mois",
                "Barrel Insert",
                {
                    "hectolitres": (volume, gpl, porcentage) => ((14/2.25) / 70) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => ((14/2.25) / 70) * porcentage * volume,
                },
                (quantity) => quantity / 14
            ],
            dosage : vulumeTypes.pieces,
            quantity : vulumeTypes.set18p 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-12 mois",
                "Oak Chain 18 pièces",
                {
                    "hectolitres": (volume, gpl, porcentage) => ((18/2.25) / 18) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => ((18/2.25) / 18) * porcentage * volume,
                },
                (quantity) => quantity / 18
            ],
            dosage : vulumeTypes.pieces,
            quantity : vulumeTypes.set34p 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-12 mois",
                "Oak Chain 34 pièces",
                {
                    "hectolitres": (volume, gpl, porcentage) => ((34/2.25) / 33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => ((34/2.25) / 33) * porcentage * volume,
                },
                (quantity) => quantity / 34
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq5u
        },
        {
            "type" : "tbody",
            "values" : [
                "14-16 mois",
                "Wineplank",
                {
                    "hectolitres": (volume, gpl, porcentage) => (1/33) * porcentage * volume,
                    "gallons": (volume, gpl, porcentage) => (1/33) * porcentage * volume,
                },
                (quantity) => quantity / 5
            ],
            dosage : vulumeTypes.staves,
            quantity : vulumeTypes.paq10u
        }
    ]
    
    console.log(dataset);

    return dataset;
})();