var LandingPage = require('../component/landingPage');


module.exports = function (route, navigator) {
    var routes = {
        LandingPage: (<LandingPage navigator={navigator}></LandingPage>)
    };
    return routes;
};