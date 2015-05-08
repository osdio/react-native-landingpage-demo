var React = require('react-native');

var {
    Component,
    Text,
    View,
    Navigator,
    ScrollView,
    TouchableHighlight
    }=React;


class NavBarButton extends Component {
    render() {
        if (!this.props.styles) {
            this.props.styles = {};
        }
        return (
            <TouchableOpacity
                onPress={this.props.onPress}>
                <View style={[this.props.styles.navBarWrapper]}>
                    <Text style={[this.props.styles.navBarText]}>
                        {this.props.children}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports = NavBarButton;