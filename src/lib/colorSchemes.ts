import type { ColorScheme } from "./types/ColorScheme"

const defaultDark = {
    themeName: 'defaultDark',
    isDark: true,
    fg: '#d0d0d0',
    bg: '#111111',
    liveborder: '#d2fb85',
    live: '#151815',
    permaborder: '#869280',
    perma:'#111111'
}

/*const defaultLight = {
    themeName: 'defaultLight',
    isDark: false,
    fg: '#242424',
    bg: '#d0d0d0',
    liveborder: '#d2fb85',
    live: '#c5c5c4',
    permaborder: '#797e76ff',
    perma:'#d0d0d0'
}*/

/*const greenOrange = {
    themeName: 'greenOrange',
    isDark: true,
    fg: '#F56D27',
    bg: '#391148',
    liveborder: '#98bcb2',
    live: '#391148',
    permaborder: '#1A8163',
    perma:'#391148'
}*/

const lightNice = {
    themeName: 'lightNice',
    isDark: false,
    fg: '#000',
    bg: '#fff',
    liveborder: '#4e02feff',
    live: '#9368ff50',
    permaborder: '#858585',
    perma:'#e0e0e050'
}

const darkGreen_PurpleAccent = {
    themeName: 'darkGreen',
    isDark: true,
    fg: '#ddedc4',
    bg: '#070b0a',
    liveborder: '#4b4375',
    live: '#0b0a11',
    //permaborder: '#37544c',
    permaborder: '#73ad9dff',
    perma:'#131a18'
}

/*const darkGreen_ThatILike = {
    themeName: 'darkGreen2',
    isDark: true,
    fg: '#ddedc4',
    bg: '#070b0a',
    liveborder: '#5a4d45',
    live: '#110e0d',
    permaborder: '#37544c',
    perma:'#131a18'
}*/

const light1 = {
    themeName: 'light1',
    isDark: false,
    fg: '#111',
    bg: '#e1efd5',
    liveborder: '#838383',
    //live: '#d8d1de',
    live: 'HoneyDew',
    //permaborder: '#afb3a8',
    permaborder: '#515c2fff',
    perma:'#e1efd5'
}

/*const darkOriginal = {
    themeName: 'darkOriginal',
    isDark: true,
    fg: '#eee',
    bg: '#111',
    liveborder: '#550cca',
    live: '#550cca22',
    permaborder: '#0064ff',
    perma:'#0064ff22'
}*/

const brownRed = {
    themeName: 'brownRed',
    isDark: true,
    fg: '#d3d3d3',
    bg: '#271e1b',
    liveborder: '#aaa',
    live: '#271e1b',
    permaborder: '#ff0022',
    perma:'#291c1c'
}

/*const lili = {
    themeName: 'Lili',
    isDark: true,
    fg: '#646464ff',
    bg: '#1d1e23ff',
    liveborder: '#a19a9aff',
    live: 'rgba(92, 92, 92, 0)',
    permaborder: '#000000ff',
    perma:'#69191900'
}*/

/*const neutral = {
    themeName: 'neutral',
    isDark: false,
    fg: '#141414',
    bg: '#eee',
    liveborder: '#AAAAAA',
    live: '#00000000',
    permaborder: '#777777',
    perma:'#00000000'
}*/

export const themes:ColorScheme[] = [defaultDark, light1, brownRed, lightNice, darkGreen_PurpleAccent];
