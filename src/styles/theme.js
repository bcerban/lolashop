import { DefaultTheme } from 'react-native-paper';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ef6461',
        accent: '#e4b363',
        background: '#e8e9eb',
        surface: 'white',
        error: '#e0dfd5',
        text: '#313638',
    }
}

export default Theme;