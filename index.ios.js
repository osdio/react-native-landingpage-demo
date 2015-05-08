/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');
var LandingPage = require('./app/component/landingPage');


var {width, height} = Dimensions.get('window');


var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Navigator,
    Component
    } = React;


class doing extends Component {
    renderScene(route, navigator) {
        if (route.name == 'LandingPage') {
            return (
                <LandingPage navigator={navigator}></LandingPage>
            );
        }
        if (route.component) {
            return React.createElement(route.component, {navigator: navigator, data: route.data});
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name:'LandingPage', index:0}}
                configureScene={(route)=>{
                    if(route.sceneConfig){
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }
}


AppRegistry.registerComponent('doing', () => doing);
