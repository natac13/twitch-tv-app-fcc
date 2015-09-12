(() => {


    angular.module('Twitty', [])

    .controller('StreamController', [ '$scope', '$http', ($scope, $http) => {
        const streams = ['freecodecamp', 'storbeck', 'terakilobyte',
        'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff',
        'brunofin', 'comster404'];
        const twitchUrl = 'https://api.twitch.tv/kraken/';

        $scope.test = 'test string';
        $scope.users = [];

        streams.forEach((stream) => {
            $http.get(twitchUrl + '/streams/' + stream)
            .then((response) =>{
                console.log(response.data);

            });
        });

    }]);

})();