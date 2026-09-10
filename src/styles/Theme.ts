export const theme = {
    colors: {
        primary: "#FFE9BF",
        secondary: "#D29E62",
        gray: "#695E48",
        text: "#C7BD8D",
        black: "#1F1F1F",
        blackSecondary: "#151515",
        white: "#F5F5F5"
    },
    fonts: [
        'Linden Hill',
        'Limelight'
    ],
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
    }
} as const

export type Theme = typeof theme