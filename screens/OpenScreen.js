import { View, StyleSheet, ImageBackground} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import MainText from '../components/ui/MainText'

const OpenScreen = ({navigation}) => {
    function pressSelectHandler() {
        navigation.navigate("GameSelection")
    }

    function pressNewGameHandler() {
        navigation.navigate("NewGame")
    }
    
    return (
        <>  
            {/* <ImageBackground source={require('../assets/images/bg1.jpg')} */}
                {/* resizeMode='cover'
                style={styles.root}
                imageStyle={styles.backgroundImage}> */}
                <View style={styles.buttonContainer}>
                    <MainText>GLOOMHVEN</MainText>
                    <MainText>Jaws of the Lion</MainText>

                    <PrimaryButton onPress={pressSelectHandler}>
                        Select Game
                    </PrimaryButton>

                    <PrimaryButton onPress={pressNewGameHandler}>
                        New Game
                    </PrimaryButton>
                </View>
            {/* </ImageBackground> */}
        </>
    )
}

export default OpenScreen

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})