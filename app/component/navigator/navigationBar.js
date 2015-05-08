var React = require('react-native');
var cssVar = require('cssVar');

var NavBarButton = require('./navBarButton');


var {
    Component,
    Text,
    View,
    Navigator,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    PixelRatio,
    }=React;

var routerMapper = {
    LeftButton: function (route, navigator, index, navState) {
        if (route.data.leftButton) {
            return route.leftButton(route, navigator, index, navState);
        }

        if (index === 0) {
            return (
                <NavBarButton
                    onPress={props.parentNavigator.pop()}
                    >
                    {props.left.text}
                </NavBarButton>
            );
        }

        var previousRoute = navState.routeStack[index - 1];

        var leftText = props.right.text;
        if (!this.props.left.fixed) {
            leftText = previousRoute.title;
        }
        return (
            <NavBarButton
                onPress={()=> navigator.pop()}>
                {leftText}
            </NavBarButton>
        );
    },

    RightButton: function (route, navigator, index, navState) {
        if (route.data.rightButton) {
            return route.data.rightButton(route, navigator, index, navState);
        }
        return null;
    }

    ,

    Title: function (route, navigator, index, navState) {
        if (route.data.title) {
            return route.data.title(route, navigator, index, navState);
        }
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title} ({index})
            </Text>
        );
    }

};


class NavigationBar extends Component {
    renderScene(route, navigator) {
        if (!route.data) {
            route.data = {};
        }

        console.log('route:' + route);
        console.log('navigator:' + navigator);
        console.log('component:' + route.component);

        if (route.component) {
            return React.createElement(route.component, {
                navigator: navigator,
                data: route.data,
                parentNavigator: route.parentNavigator
            });
        }

        return (
            <View>Wrong</View>
        )
    }

    render() {
        return (
            <Navigator
                ref={this.props.navRef}
                debugOverlay={false}
                style={this.props.style}
                initialRoute={{
                    index:0,
                    component:this.props.initialRoute.component,
                    title:this.props.initialRoute.title,
                    parentNavigator:this.props.parentNavigator
                    }}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                             routeMapper = {routerMapper}
                             style={styles.navBar}
                    />
                }
                >

            </Navigator>
        )
    }
}

var styles = StyleSheet.create({
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15,
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#CDCDCD'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500'
    },
    navBar: {
        backgroundColor: 'white'
    },
    navBarText: {
        fontSize: 16,
        marginVertical: 10
    },
    navBarTitleText: {
        color: cssVar('fbui-bluegray-60'),
        fontWeight: '500'
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: cssVar('fbui-accent-blue')
    },
    scene: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#EAEAEA'
    }
});

module.exports = NavigationBar;