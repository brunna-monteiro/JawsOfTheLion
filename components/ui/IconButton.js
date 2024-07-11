import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ColorPalette from '../../constants/ColorPalette'

function IconButton(props, {onPress}) {
    const iconState = {
        menu: {
            name: 'menu',
        },

        edit: {
            name: 'edit',
        }
    }

    const getIconState = (key) => iconState[key]

  return (
    <Pressable onPress={onPress}>
        <Feather {...getIconState(props.type)} size={24} color={ColorPalette.bglight} />
    </Pressable>

  )
}

export default IconButton
