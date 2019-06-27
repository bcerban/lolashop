import { DefaultTheme } from 'react-native-paper';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ff5af5',
        accent: '#006c70',
        background: '#dadce0',
        surface: 'white',
        error: '#e0dfd5',
        text: '#484848',
    }
}

export default Theme;