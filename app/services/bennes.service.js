(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('bennes', bennes);

    function bennes(){

        function getBennes(){
            var bennes = [];
            var b1 = 
            {
                nom: 'Benne Ouverte Eurostyle 33m³',
                desc: '',
                type: 'Benne Ouverte',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m'
            };
            var b2 =
            {
                nom: 'Benne Ouverte à Toles Lisses 25m³',
                desc: '',
                type: 'Benne Ouverte',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m'
            };
            bennes.push(b1);
            bennes.push(b2);

            return bennes;
        }

        var Services = {
            getBennes: getBennes
        }
        return Services;
    }
})();