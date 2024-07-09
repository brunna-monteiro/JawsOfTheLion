import { View, StyleSheet } from 'react-native'
import SimpleText from '../ui/SimpleText'
import { FontAwesome } from '@expo/vector-icons'

const EventCompleted = (props) => {
    const iconState = {
        success: {
            name: 'check-circle',
            color: '#2dfb41',
        },
        failure: {
            name: 'times-circle',
            color: '#f62c2c',
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
            <SimpleText>{getLabel(props.type)}</SimpleText>
        </View>
    )
}

export default EventCompleted

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
    
})