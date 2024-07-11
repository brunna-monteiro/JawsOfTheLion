import { View, StyleSheet } from 'react-native'
import SimpleText from '../ui/SimpleText'
import ColorPalette from '../../constants/ColorPalette'
import { FontAwesome } from '@expo/vector-icons'

const EventCompleted = (props) => {
    const iconState = {
        success: {
            name: 'check-circle',
            color: ColorPalette.sucess,
        },
        failure: {
            name: 'times-circle',
            color: ColorPalette.failure,
        }
    }
    const label = {
        success: 'Already completed',
        failure: 'Not yet completed'
    }

    const getLabel = (key) => label[key] ?? label.success
    const getIconState = (key) => iconState[key] ?? iconState.success
 
    return (
        <View style={styles.container}>
            <FontAwesome size={24} {...getIconState(props.type)} />
            <SimpleText style={styles.text}>{getLabel(props.type)}</SimpleText>
        </View>
    )
}

export default EventCompleted

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },

    text: {
        marginHorizontal: 10,
    }
    
})