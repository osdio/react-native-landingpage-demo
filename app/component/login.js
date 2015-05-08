var React = require('react-native');
var styles = require('../style/login');
var CoverImage = require('./coverImage');
var BlurView = require('react-native-blur').BlurView;
var Dimensions = require('Dimensions');
var Icon = require('FAKIconImage');
var Button = require('react-native-button');


var {height,width} = Dimensions.get('window');

var {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Image,
    TouchableOpacity
    } = React;

var extendStyles = StyleSheet.create({
    blur: {
        width: width,
        height: height
    }
});


class Login extends Component {
    returnPressed() {
        this.props.navigator.pop();
    }

    render() {
        var currentImageIndex = this.props.data.image + 1;
        return (
            <CoverImage image={require('image!bg'+currentImageIndex)}>
                <BlurView blurType="lighten" style={[styles.blur, extendStyles.blur]}>
                    <View style={styles.navBarContainer}>
                        <Button onPress={this.returnPressed.bind(this)}
                                style={styles['navBarContainer touch']}>
                            <Icon
                                name='ion|ios-arrow-back'
                                size={30}
                                color='rgba(255,255,255,0.7)'
                                style={styles.return}
                                />
                        </Button>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Icon name='ion|ios-person'
                                  size={25}
                                  color='rgba(255,255,255,0.9)'
                                  style={styles.inputLabel}>
                            </Icon>

                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="请输入用户名"
                                           placeholderTextColor="rgba(255,255,255,0.9)"
                                    ></TextInput>
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Icon name='ion|key'
                                  size={22}
                                  color='rgba(255,255,255,0.9)'
                                  style={styles.inputLabel}>
                            </Icon>
                            <View style={styles.inputWrapper}>
                                <TextInput style={styles.input}
                                           placeholder="请输入密码"
                                           password={true}
                                           placeholderTextColor="rgba(255,255,255,0.9)"
                                    ></TextInput>
                            </View>
                        </View>

                        <View style={[styles.loginButtonWrapper]}>
                            <Button style={styles.loginButton}>
                                登陆
                            </Button>
                        </View>

                        <View style={[styles["form footer"]]}>
                            <View>
                                <TouchableHighlight>
                                    <Text style={styles["form footer text"]}>
                                        忘记密码
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                    </View>

                    <View style={styles.authForm}>
                        <Text style={styles["authForm text"]}>
                            第三方登陆
                        </Text>
                        <View style={styles["authForm buttons"]}>
                            <Button style={styles["authForm button"]}>
                                <Icon
                                    name='fontawesome|weibo'
                                    size={20}
                                    color='rgba(255,255,255,0.7)'
                                    style={styles["authForm icon"]}
                                    />
                            </Button>

                            <Button style={styles["authForm button"]}>
                                <Icon
                                    name='fontawesome|qq'
                                    size={20}
                                    color='rgba(255,255,255,0.7)'
                                    style={styles["authForm icon"]}
                                    />
                            </Button>

                        </View>
                    </View>

                </BlurView>
            </CoverImage>
        )
    }
}

module.exports = Login;