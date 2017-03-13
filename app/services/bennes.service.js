(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('bennes', bennes);

    function bennes(){

        function get3Bennes(){
            var troisbennes = [];
            var tb1 = 
            {
                nom: 'Benne Ouverte Eurostyle 33m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m.jpg'
            };
            var tb2 =
            {
                nom: 'Benne Ouverte à Toles Lisses 25m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m.jpg'
            };
            var tb3 =
            {
                nom: 'Benne Ouverte à Toles Nervurées 20m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_nervurees_20m.jpg'
            };
            troisbennes.push(tb1);
            troisbennes.push(tb2);
            troisbennes.push(tb3);

            return troisbennes;
        }

        function getBennes(){
            var bennes = [];
            var b1 = 
            {
                nom: 'Benne ouverte Eurostyle',
                taille: '33 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m.jpg'
            };
            var b2 =
            {
                nom: 'Benne ouverte à Toles Lisses',
                taille: '25 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m.jpg'
            };
            var b3 =
            {
                nom: 'Benne ouverte à Toles Nervurées',
                taille: '20 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_nervurees_20m.jpg'
            };
            var b4 =
            {
                nom: 'Benne fermée type OM',
                taille: '10 m³',
                desc: '',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/OM1.JPG'   
            }
            var b5 =
            {
                nom: 'Container type EURO',
                taille: '5 m³',
                desc: '',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/CEURO.jpg'   
            }
            var b6 = 
            {
                nom: 'Benne ouverte type TP',
                taille: '7 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/TP7.JPG'   
            }
            var b7 = 
            {
                nom: 'Benne ouverte type TNR',
                taille: '15 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/TNR15R.GIF'   
            }
            var b8 = 
            {
                nom: 'Benne ouverte type TNR',
                taille: '20 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/TNR20.GIF'   
            }
            var b9 = 
            {
                nom: 'Benne ouverte type Eurostyl\'',
                taille: '10 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/EURO10AV.JPG'   
            }
            var b10 = 
            {
                nom: 'Benne ouverte type TNR',
                taille: '20 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/TNR20.GIF'   
            }
            var b11 = 
            {
                nom: 'Benne ouverte type Eurostyl\'',
                taille: '30 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/EURO30VueAvant.JPG'   
            }
            var b12 = 
            {
                nom: 'Benne ouverte type TNR',
                taille: '35 m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/TNR35.JPG'   
            }
            var b13 = 
            {
                nom: 'Container type EURO - Grande Ouverture',
                taille: '4 m³',
                desc: '',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/EURO4.JPG'   
            }
            var b14 = 
            {
                nom: 'Benne fermée type OM',
                taille: '15 m³',
                desc: 'Couvercles en polyéthylène',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/OM15.JPG'   
            }
            var b15 = 
            {
                nom: 'Benne fermée type',
                taille: 'OM 20 m³',
                desc: 'Couvercles en polyéthylène',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/OM20.JPG'   
            }
            var b16 = 
            {
                nom: 'Benne Fermée Type TNR',
                taille: '15 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/TNR15TC.JPG'   
            }
            var b17 = 
            {
                nom: 'Benne Fermée Type TNR',
                taille: '20 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/TNR20TC.JPG'   
            }
            var b18 = 
            {
                nom: 'Benne Fermée Type TNR',
                taille: '30 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/TNR30TC.JPG'   
            }
            var b19 = 
            {
                nom: 'Benne Fermée Type Eurostyl\' ',
                taille: '15 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/EURO15TC.JPG'   
            }
            var b20 = 
            {
                nom: 'Benne Fermée Type Eurostyl\' ',
                taille: '30 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/EURO30TCA.JPG'   
            }
            var b21 = 
            {
                nom: 'Benne Fermée Type Eurostyl\' ',
                taille: '20 m³',
                desc: 'Avec toit Coulissant arrondi en 2 parties ',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/TNR20TCAV.JPG'   
            }
            var b22 = 
            {
                nom: 'Plateau Porte Palettes',
                desc: '',
                type: 'Plateaux',
                img: 'content/img/bennes/Plateau.JPG'   
            }
            var b23 = 
            {
                nom: 'Plateau à ridelles rabattables',
                desc: '',
                type: 'Plateaux',
                img: 'content/img/bennes/PlatRidRab.JPG'   
            }
            var b24 = 
            {
                nom: 'Plateau Porte-fûts',
                desc: '',
                type: 'Plateaux',
                img: 'content/img/bennes/FUTS.GIF'   
            }
            var b25 = 
            {
                nom: 'Plateau Porte Matériel',
                desc: '',
                type: 'Plateaux',
                img: 'content/img/bennes/PlatPM.JPG'   
            }
            var b26 = 
            {
                nom: 'Plateau à ridelles fixes pour 3T5',
                desc: 'avec rehausses grillagées pour petit camion 3T5',
                type: 'Plateaux',
                img: 'content/img/bennes/PRFRG.GIF'   
            }
            var b27 = 
            {
                nom: 'Plateau pour 3T5',
                desc: 'pour petit camion 3T5',
                type: 'Plateaux',
                img: 'content/img/bennes/PN.GIF'   
            }
            var b28 = 
            {
                nom: 'Caisson Compaction type CS',
                taille: '26 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/CS_26_30.GIF'   
            }
            var b29 = 
            {
                nom: 'Caisson Compaction type CS',
                taille: '30 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/CS30TN.GIF'   
            }
            var b30 = 
            {
                nom: 'Caisson Compaction type Eurostyl\' ',
                taille: '25 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/EC25.GIF'   
            }
            var b31 = 
            {
                nom: 'Caisson Compaction type Eurostyl\' ',
                taille: '30 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/COMPEURO30.JPG'   
            }
            var b32 = 
            {
                nom: 'Caisson Compaction type Eurostyl\' ',
                taille: '35 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/EC35.jpg'   
            }
            var b33 = 
            {
                nom: 'Caisson Compaction Spécial Transfert Eurostyl\' ',
                taille: '30 m³',
                desc: '',
                type: 'Caissons Compactions',
                img: 'content/img/bennes/COMP30.JPG'   
            }
            bennes.push(b1, b2, b3, b4, b5, b6, b7, b8, b9, 
                b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, 
                b20, b21, b22, b23, b24, b25, b26, b27, b28, b29,
                b30, b31, b32, b33);

            return bennes;
        }

        function getCategories(){
            var categories = [
                'Bennes Ouvertes',
                'Bennes Fermées',
                'Plateaux',
                'Caissons Compactions'
            ];
            return categories
        }
        var Services = {
            get3Bennes: get3Bennes,
            getBennes: getBennes,
            getCategories: getCategories
        }
        return Services;
    }
})();