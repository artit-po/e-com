(function(window, angular, undefined) {
    var sec = angular.module('app.security', []);
    
    sec.config(function($httpProvider) {
        $httpProvider.interceptors.push('responseObserver');
    });
    
    sec.provider('$security', function() {
        this.serverUrl;
        this.loginRouteName;
        return {
            setServerUrl: function(url) {
                serverUrl = url;
            },
            setLoginRouteName: function(routeName) {
                loginRouteName = routeName;
            },
            $get: function($state, $http, $q) {
                return {
                    checkAuth: function() {
                        $http.post(serverUrl + '/checkauth.php');
                    },
                    login: function() {
                        
                    }
                }
            }
        }
    });
    
    sec.factory('responseObserver', function($location) {
        return {
            response: function(response) {
                return response;
            },
            responseError: function(response) {
                switch (response.status) {
                    case 401:
                        $location.path('/login');
                        break;
                    case 404:
                        return {
                            data: 'Page not found',
                            status: 200,
                            statusText: 'OK'
                        };
                    case 500:
                        return {
                            data: 'Internal server error',
                            status: 200,
                            statusText: 'OK'
                        };
                }
            }
        };
    });
})(window, window.angular);