import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ColorPalette from '../../constants/ColorPalette'

function IconButton(props) {
    const iconState = {
        menu: {
            name: 'menu',
        },

        edit: {
            name: 'edit',
        }
    }

    const getIconState = (key) => iconState[key]

    const color = props.color ?? ColorPalette.bglight
    const bgColor = props.bgColor ?? 'transparent'

  return (
    <Pressable onPress={props.onPress} style={{ backgroundColor: bgColor, padding: 8, borderRadius: 8 }}>
        <Feather {...getIconState(props.type)} size={24} color={color} />
    </Pressable>

  )
}

export default IconButton
