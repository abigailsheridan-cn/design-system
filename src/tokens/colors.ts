export const colors = {
  neutral: {
    0: '#ffffff',
    50: '#f7f7f8',
    100: '#eceef0',
    200: '#d5d9dd',
    300: '#b1b8bf',
    400: '#848d96',
    500: '#5f6870',
    600: '#495056',
    700: '#383d42',
    800: '#26292c',
    900: '#151719',
  },
  brand: {
    50: '#eef2ff',
    100: '#dfe6ff',
    300: '#a6b6ff',
    500: '#5b6ef5',
    600: '#4453d6',
    700: '#3641ad',
    900: '#1f2266',
  },
  success: { 100: '#e2f7e9', 500: '#22a35a', 700: '#166a3a' },
  warning: { 100: '#fff4e0', 500: '#e0952f', 700: '#8f5b16' },
  danger: { 100: '#fde3e2', 500: '#e0392f', 700: '#8f231c' },
} as const

export type ColorToken = typeof colors
