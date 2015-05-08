var React = require('react-native');
var Icon = require('FAKIconImage');


var styles = require('../style/formInput');

var {
    Component,
    View,
    Text,
    TextInput
    } = React;


class FormInput extends Component {
    render() {
        return (
            <View style={[styles.inputGroup]}>
                <View style={styles.iconWrapper}>
                    <Icon
                        name={this.props.iconName}
                        size={this.props.iconSize}
                        color={this.props.iconColor}
                        style={[styles.icon, this.props.styles.icon]}
                        />
                </View>

                <View styles={styles.inputWrapper}>
                    <TextInput style={[styles.input,this.props.input]}
                               placeholder={this.props.placeholderText}
                               placeholderTextColor={this.props.placeholderTextColor}></TextInput>
                </View>
            </View>
        );
    }
}

module.exports = FormInput;