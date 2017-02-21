(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('bennes', bennes);

    function bennes(){

        function get3Bennes(){
            var bennes = [];
            var b1 = 
            {
                nom: 'Benne Ouverte Eurostyle 33m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m.jpg'
            };
            var b2 =
            {
                nom: 'Benne Ouverte à Toles Lisses 25m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m.jpg'
            };
            var b3 =
            {
                nom: 'Benne Ouverte à Toles Nervurées 20m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_nervurees_20m.jpg'
            };
            bennes.push(b1);
            bennes.push(b2);
            bennes.push(b3);

            return bennes;
        }

        function getBennes(){
            var bennes = [];
            var b1 = 
            {
                nom: 'Benne Ouverte Eurostyle 33m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m.jpg'
            };
            var b2 =
            {
                nom: 'Benne Ouverte à Toles Lisses 25m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m.jpg'
            };
            var b3 =
            {
                nom: 'Benne Ouverte à Toles Nervurées 20m³',
                desc: '',
                type: 'Bennes Ouvertes',
                img: 'content/img/bennes/Benne_ouverte_toles_nervurees_20m.jpg'
            };
            var b4 =
            {
                nom: 'Benne fermée type OM 10m³',
                desc: '',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/OM1.JPG'   
            }
            var b5 =
            {
                nom: 'Container type EURO 5m³',
                desc: '',
                type: 'Bennes Fermées',
                img: 'content/img/bennes/CEURO.jpg'   
            }
            bennes.push(b1);
            bennes.push(b2);
            bennes.push(b3);
            bennes.push(b4);
            bennes.push(b5);

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