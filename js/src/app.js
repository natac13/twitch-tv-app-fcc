(() => {


    angular.module('Twitty', [])

    .controller('StreamController', [ '$scope', '$http', ($scope, $http) => {
        const streams = ['freecodecamp', 'storbeck', 'terakilobyte', 'medrybw',
        'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff',
        'brunofin', 'comster404'];
        const twitchUrl = 'https://api.twitch.tv/kraken/';

        $scope.test = 'test string';
        $scope.users = [];
        $scope.online = [];
        $scope.offline = [];
/**
 * I wanted to use two controllers but was not able to figure out how to share
 * the filter object properly
 */

        // this will filter out the online or offline users during .activate()
        $scope.filter = {};
        $scope.navItems = [
            {
                name: 'all',
                active: true
            },
            {
                name: 'online',
                active: false
            },
            {
                name: 'offline',
                active: false
            }
        ];

        $scope.activate = (index) => {
            angular.forEach($scope.navItems, (obj) => { obj.active = false; });
            $scope.navItems[index].active = true;
            if($scope.navItems[index].name === 'online') {
                $scope.filter = {status:true};
            }else if($scope.navItems[index].name === 'offline') {
                $scope.filter = {status:false};
            } else{
                $scope.filter = {};
            }
        };

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
                    console.log(response.data.stream.game);
                    user.game = response.data.stream.game;
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
                user.bio = response.data.bio || 'This user has no bio, sorry';
                user.logo = response.data.logo;

            });

            $scope.users.push(user);
            user.status ? $scope.online.push(user) :
                $scope.offline.push(user);
        });

    }]);

    // $(document).ready(function() {
    //     $('#filters').on('click', 'a', function (e) {
    //         e.preventDefault();
    //         $(this).closest('#filters').find('.active').removeClass('active');
    //         $(this).parent().addClass('active');
    //     });
    // });

})();