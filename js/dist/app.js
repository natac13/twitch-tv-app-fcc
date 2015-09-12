'use strict';

(function () {

    angular.module('Twitty', []).controller('StreamController', ['$scope', '$http', function ($scope, $http) {
        var streams = ['freecodecamp', 'storbeck', 'terakilobyte', 'medrybw', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'brunofin', 'comster404'];
        var twitchUrl = 'https://api.twitch.tv/kraken/';

        $scope.test = 'test string';
        $scope.users = [];

        streams.forEach(function (stream) {
            // build a user object for each streamer
            var user = {};
            user.url = 'http://www.twitch.tv/' + stream;

            $http.get(twitchUrl + 'streams/' + stream).then(function (response) {
                // .then() success
                user.account = true;
                if (response.data.stream) {
                    // online
                    user.status = true;
                } else {
                    user.status = false;
                }
            }, function (response) {
                // .then() fails
                user.account = false;
            });

            $http.get(twitchUrl + 'users/' + stream).then(function (response) {
                user.displayName = response.data.display_name;
                user.bio = response.data.bio;
                user.logo = response.data.logo;
            });
            $scope.users.push(user);
        });
    }]);
})();
//# sourceMappingURL=app.js.map