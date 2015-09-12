'use strict';

(function () {

    angular.module('Twitty', []).controller('StreamController', ['$scope', '$http', function ($scope, $http) {
        var streams = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'brunofin', 'comster404'];
        var twitchUrl = 'https://api.twitch.tv/kraken/';

        $scope.test = 'test string';
        $scope.users = [];

        streams.forEach(function (stream) {
            $http.get(twitchUrl + '/streams/' + stream).then(function (response) {
                console.log(response.data);
            });
        });
    }]);
})();
//# sourceMappingURL=app.js.map