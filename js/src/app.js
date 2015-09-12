(() => {


    angular.module('Twitty', [])

    .controller('StreamController', [ '$scope', '$http', ($scope, $http) => {
        const streams = ['freecodecamp', 'storbeck', 'terakilobyte', 'medrybw',
        'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff',
        'brunofin', 'comster404'];
        const twitchUrl = 'https://api.twitch.tv/kraken/';

        $scope.test = 'test string';
        $scope.users = [];

        streams.forEach((stream) => {
            // build a user object for each streamer
            let user = {};
            user.url = 'http://www.twitch.tv/' + stream;

            $http.get(twitchUrl + 'streams/' + stream)
            .then((response) => {
                // .then() success
                user.account = true;
                if(response.data.stream) {
                    // online
                    user.status = true;
                } else {
                    user.status = false;
                }

            }, (response) => {
                // .then() fails
                user.account = false;
            });

            $http.get(twitchUrl + 'users/' + stream)
            .then((response) =>{
                user.displayName = response.data.display_name;
                user.bio = response.data.bio;
                user.logo = response.data.logo;

            });
            $scope.users.push(user);
        });

    }]);

})();