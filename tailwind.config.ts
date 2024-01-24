import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  mode:"JIT",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    ...defaultTheme,
    extend: {
      colors:{
        ...colors
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        '1wi':"455px",
        '2wi':"910px",
        '3wi':"1365px",
        '4wi':"1840px",
        'bt':"440px",
      },
    },
  },
  plugins: [],
}
export default config
