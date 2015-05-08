var React = require('react-native');
var NavigationBar = require('./navigator/navigationBar');
var RegStep = require('./register/RegStep1');


var {
    Text,
    Component,
    Navigator,
    ScrollView,
    TouchableHighlight,
    View
    } = React;


class Register extends Component {
    render() {
        return (
            <NavigationBar
                initialRoute={{
                    component: RegStep,
                    title:'注册（1/3）'
                }}
                ref='navigationBar'
                navRef='navReg'
                parentNavigator={this.props.navigator}
                ></NavigationBar>
        );
    }
}


module.exports = Register;

