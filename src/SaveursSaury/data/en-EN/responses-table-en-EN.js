/** /!\ ATTENTION /!\
 * 
 * Ce fichier n'est plus utilisé, le suport des fichier .js en input de données est toujours d"acctualité
 * et fonctionne toujours de la même manière mais il sont trop créateurs de problèmes avec l'outils de modification de données
 * et donc j'ai choisi de ne plus les utiliser
 * 
 * /!\ ATTENTION /!\
 */

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
 * - l'utilisation d'une fonction IIFE est recomander pour éviter tout comflit de nomage entre le système et le fichier de données
 */

(function()
{
    const volumeTypes = {

        dosage : {
            Hectolitres : "Kg",
            Gallons : "Lb",
        },

        sac18: {
            Hectolitres: "Bags (18kg)",
            Gallons: "Bags (40 Lbs)",
        },
        
        sac9: {
            Hectolitres: "Bags (9kg)",
            Gallons: "Bags (20 Lbs)",
        },

        sacI40u : {
            Hectolitres : "Infusion bags of 40 units",
            Gallons : "Infusion bags of 40 units",
        },
        
        paq20u: {
            Hectolitres : "Packets of 20 units",
            Gallons : "Packets of 20 units",
        },
          
        paq10u: {
            Hectolitres : "Packets of 10 units",
            Gallons : "Packets of 10 units",
        },
          
        paq14u: {
            Hectolitres : "Packets of 14 units",
            Gallons : "Packets of 14 units",
        },

        paq5u: {
            Hectolitres : "Packets of 5 units",
            Gallons : "Packets of 5 units",
        },

        set18p : {
            Hectolitres: "Set of 18 pieces",
            Gallons: "Set of 18 pieces"
        },

        set34p: {
            Hectolitres : "Set of 34 pieces",
            Gallons : "Set of 34 pieces",
        },

        staves: {
            Hectolitres: "Staves",
            Gallons: "Staves",
        },

        pieces: {
            Hectolitres: "Pieces",
            Gallons: "Pieces",
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
            ]
        },
        {
            "type" : "tbody",
            "values" : [
                "Fermentation time", // "Fermentation time"
                "Powder <b>*</b>", // "Powder <b>*</b>"
                {
                    "Hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "Gallons": (volume, gpl) => volume * gpl / 1000,
                },
                {
                    "Hectolitres" : (quantity) => quantity / 18,
                    "Gallons" : (quantity) => quantity / 40,
                }
            ],
            product: "Poudre",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac18
        },
        /*{
            "type" : "tbody",
            "values" : [
                "Durée de la fermentation", // "Fermentation time"
                "Mixture <b>*</b>", // "Mixture <b>*</b>"
                {
                    "Hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "Gallons": (volume, gpl) => volume * gpl / 1000,
                },
                {
                    "Hectolitres": (quantity) => quantity / 18,
                    "Gallons": (quantity) => quantity / 40,
                }
            ],
            product: "Mixture",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac18
        },*/
        {
            "type" : "tbody",
            "values" : [
                "Fermentation time", // "Fermentation time"
                "Oak Fine", // "Oak Fine"
                {
                    "Hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "Gallons": (volume, gpl) => volume * gpl / 1000,
                },
                {
                    "Hectolitres": (quantity) => quantity / 18,
                    "Gallons": (quantity) => quantity / 40,
                },
            ],
            product: "Fine de Chêne",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "Fermentation or short aging", // "Fermentation or short aging"
                "Oak Chips", // "Oak Chips"
                {
                    "Hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "Gallons": (volume, gpl) => volume * gpl / 1000,
                },
                {
                    "Hectolitres": (quantity) => quantity / 18,
                    "Gallons": (quantity) => quantity / 40,
                },
            ],
            product: "Copeaux",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac18
        },
        {
            "type" : "tbody",
            "values" : [
                "3-4 month", // "3-4 month"
                "Cubes", // "Cubes"
                {
                    "Hectolitres": (volume, gpl) => (volume * 100) * gpl / 1000,
                    "Gallons": (volume, gpl) => volume * gpl / 1000,
                },
                {
                    "Hectolitres": (quantity) => quantity / 9,
                    "Gallons": (quantity) => quantity / 20,
                }
            ],
            product: "Cubes",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac9
        },

        ////////// Hybrid ///////////

        {
            "type" : "tbody",
            "values" : [
                "4-5 month", // "4-5 month"
                "Dominoes", // "Dominoes"
                {
                    "Hectolitres": (volume, gpl, percentage) => (gpl) ? gpl * (volume*100)/1000 : (2 / 100) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (gpl) ? gpl * volume / 1000 : ((4.4062452 / 100) * percentage * (volume / 26.4)),
                },
                {
                    "Hectolitres": (quantity) => quantity / 9,
                    "Gallons": (quantity) => quantity / 20,
                },
                
            ],
            product: "Dominos",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac9
        },
        {
            "type" : "tbody",
            "values" : [
                "5 month", // "5 month"
                "Blocks", // "Blocks"
                {
                    "Hectolitres": (volume, gpl, percentage) => (gpl) ? gpl * (volume * 100) / 1000 : (2.5 / 100) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (gpl) ? gpl * volume / 1000 : ((5.5115566 / 100) * percentage * (volume / 26.4)),
                },
                {
                    "Hectolitres": (quantity) => quantity / 9,
                    "Gallons": (quantity) => quantity / 20,
                },
            ],
            product: "Blocks",
            dosage : volumeTypes.dosage,
            quantity : volumeTypes.sac9
        },

        ////////// Percentage ///////////

        {
            "type" : "tbody",
            "values" : [
                "6-8 month", // "6-8 month"
                "Mini Thin Tank Staves", // "Mini Thin Tank Stave"
                {
                    "Hectolitres": (volume, gpl, percentage) => (6/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (6/33) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 40,
                    "Gallons": (quantity) => quantity / 40,
                }
            ],
            product: "Mini Thin Tank Staves",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.sacI40u 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-8 month", // "6-8 month"
                "Thin Tank Staves", // "Thin Tank Staves"
                {
                    "Hectolitres": (volume, gpl, percentage) => (3/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (3/33) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 20,
                    "Gallons": (quantity) => quantity / 20
                }
            ],
            product: "Thin Tank Staves",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq20u 
        },
        {
            "type" : "tbody",
            "values" : [
                "8-10 month", // "8-10 month"
                "Mini Tank Stave", // "Mini Tank Stave"
                {
                    "Hectolitres": (volume, gpl, percentage) => (4/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (4/33) * percentage * (volume * 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 40,
                    "Gallons": (quantity) => quantity / 40,
                }
            ],
            product: "Mini Tank Stave",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.sacI40u 
        },
        {
            "type" : "tbody",
            "values" : [
                "8-10 month", // "8-10 month"
                "Tank Stave", // "Tank Stave"
                {
                    "Hectolitres": (volume, gpl, percentage) => (2/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (2/33) * percentage * (volume * 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 20,
                    "Gallons": (quantity) => quantity / 20,
                }
            ],
            product: "Tank Stave",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq20u
        },
        {
            "type" : "tbody",
            "values" : [
                "10-12 month", // "10-12 month"
                "Winewood", // "Winewood"
                {
                    "Hectolitres": (volume, gpl, percentage) => (1.5/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (1.5/33) * percentage * (volume * 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 10,
                    "Gallons": (quantity) => quantity / 10,
                }
            ],
            product: "Winewood",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq10u 
        },
        {
            "type" : "tbody",
            "values" : [
                "10-12 month", // "10-12 month"
                "Barrel Insert", // "Barrel Insert"
                {
                    "Hectolitres": (volume, gpl, percentage) => ((14/2.25) / 70) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => ((14/2.25) / 70) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 14,
                    "Gallons": (quantity) => quantity / 14
                }
            ],
            product: "Barrel Insert",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq14u 
        },
        {
            "type" : "tbody",
            "values" : [
                "6-12 month", // "6-12 month"
                "Oak Chain 18 pieces", // "Oak Chain 18 pieces"
                {
                    "Hectolitres": (volume, gpl, percentage) => ((18/2.25) / 18) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => ((18/2.25) / 18) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 18,
                    "Gallons": (quantity) => quantity / 18
                }
            ],
            product: "Oak Chain",
            dosage : volumeTypes.pieces,
            quantity : volumeTypes.set18p
        },
        {
            "type" : "tbody",
            "values" : [
                "6-12 month", // "6-12 month"
                "Oak Chain 34 pieces", // "Oak Chain 34 pièces"
                {
                    "Hectolitres": (volume, gpl, percentage) => ((34/2.25) / 33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => ((34/2.25) / 33) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 34,
                    "Gallons": (quantity) => quantity / 34
                }
            ],
            product: "Oak Chain",
            dosage : volumeTypes.pieces,
            quantity : volumeTypes.set34p
        },
        /*{
            "type" : "tbody",
            "values" : [
                "14-16 mois", // "14-16 month"
                "Wineplank", // "Wineplank"
                {
                    "Hectolitres": (volume, gpl, percentage) => (1 / 33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (1 / 33) * percentage * (volume / 26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 5,
                    "Gallons": (quantity) => quantity / 5
                }
            ],
            product: "Wineplank",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq5u
        },*/
        {
            "type" : "tbody",
            "values" : [
                "18 month",
                "XL Stave",
                {
                    "Hectolitres": (volume, gpl, percentage) => (2/33) * percentage * volume,
                    "Gallons": (volume, gpl, percentage) => (2/33) * percentage * (volume/26.4),
                },
                {
                    "Hectolitres": (quantity) => quantity / 10,
                    "Gallons": (quantity) => quantity / 10,
                }
            ],
            product: "XL Stave",
            dosage : volumeTypes.staves,
            quantity : volumeTypes.paq10u
        }
    ];
    
    return dataset;
})();