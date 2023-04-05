/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
    },
  },
  plugins: [],
  theme: {
    extend:{
    colors: {
      "mainBg1": "hsl(252, 100%, 67%)",
      "mainBg2": "hsl(241, 81%, 54%)",
      "circleBg1": "hsla(256, 72%, 46%, 1)",
      "circleBg2": "hsla(241, 72%, 46%, 0)",
      "reactionRed": "hsl(0, 100%, 67%)",
      "memoryYellow": "hsl(39, 100%, 56%)",
      "verbalGreen": "hsl(166, 100%, 37%)",
      "visualBlue": "hsl(234, 85%, 45%)"
    },
  }
  
}
}

