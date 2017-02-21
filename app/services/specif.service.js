(function(){
    'use strict';
    
    angular
    .module('fjs.services')
    .service('specif', specif);

    function specif(){
        function getSpecif(){
            var specif = [];
            var s1 = 
            {
                nom: 'Benne Ouverte Eurostyle 33m³',
                desc: '',
                type: 'Benne Ouverte',
                img: 'content/img/bennes/Benne_ouverte_eurostyle_33m.jpg'
            };
            var s2 =
            {
                nom: 'Benne Ouverte à Toles Lisses 25m³',
                desc: '',
                type: 'Benne Ouverte',
                img: 'content/img/bennes/Benne_ouverte_toles_lisses_25m.jpg'
            };
            var s3 =
            {
                nom: 'Benne Ouverte à Toles Nervurées 20m³',
                desc: '',
                type: 'Benne Ouverte',
                img: 'content/img/bennes/Benne_ouverte_toles_nervurees_20m.jpg'
            };
            specif.push(s1);
            specif.push(s2);
            specif.push(s3);

            return bennes;
        }

        var Services = {
            getSpecif: getSpecif
        }
        return Services;
    }
})();