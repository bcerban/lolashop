import { DefaultTheme } from 'react-native-paper';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ef6461',
        accent: '#006c70',
        background: '#dadce0',
        surface: 'white',
        error: '#ff0000',
        text: '#484848',
    }
}

export default Theme;