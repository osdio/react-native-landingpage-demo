var _ = require('lodash');
var React = require('react-native');
var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');


var CoverImage = require('./coverImage');
var Login = require('./login');
var Register = require('./register');


var styles = require('../style/landingPage');
var loginStyles = require('../style/login');


var {width, height} = Dimensions.get('window');

console.log('register:'+ Register);


var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    TouchableHighlight,
    Navigator,
    StatusBarIOS
    } = React;


var extendStyles = StyleSheet.create({
    register: {
        width: width
    }
});


class LandingPage extends Component {
    loginPressed() {
        var imageIndex = this.refs.swiper.state.index;

        this.props.navigator.push({
            component: Login,
            data: {
                image: imageIndex
            },
            sceneStyle: loginStyles.wrapper,
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        });
    }


    registerPressed() {
        this.props.navigator.push({
            component: Register,
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        });
    }

    render() {
        StatusBarIOS.setHidden(true, false);

        return (
            <View>
                <Swiper
                    ref="swiper"
                    showsPagination={true}
                    dot={<View style = {styles['swiper dot']} />}
                    activeDot={<View style={styles['swiper activeDot']}/>}
                    paginationStyle={styles['swiper pagination']}
                    showsButtons={false}>


                    <CoverImage image={require('image!bg1')}>
                        <View style={[styles.content]}>
                            <Text style={[styles['content text'], styles['content header']]}>
                                贴心，呵护
                            </Text>
                            <Text style={styles['content text']}>
                                做你的私人教练
                            </Text>
                        </View>
                    </CoverImage>


                    <CoverImage image={require('image!bg2')}>
                        <View style={[styles.content]}>
                            <Text style={styles['content text']}>
                                Just A Test
                            </Text>
                        </View>
                    </CoverImage>


                    <CoverImage image={require('image!bg3')}>
                        <View style={[styles.content]}>
                            <Text style={styles['content text']}>
                                何不来试试
                            </Text>
                        </View>
                    </CoverImage>

                </Swiper>

                <View style={[styles.register, extendStyles.register]}>
                    <TouchableHighlight
                        underlayColor='#2980B9'
                        style={[styles.button, styles['register button']]}
                        onPress={this.registerPressed.bind(this)}>
                        <Text style={styles['button text']}>注册</Text>
                    </TouchableHighlight>
                </View>


                <View style={styles.login}>
                    <TouchableHighlight
                        style={[styles.login, styles['login button']]}
                        underlayColor='rgba(0,0,0,0.6)'
                        onPress={this.loginPressed.bind(this)}>

                        <Text style={styles['button text']}>登陆</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

module.exports = LandingPage;



