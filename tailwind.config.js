module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F3F2ED",
        text_shadow:"rgba(0, 0, 0, 0.498039) -1px -1px 0px",
        color_text:"#262626",
        border_color:"#262626",
        navbar:"linear-gradient(90deg, #BFE2EB 0%, #ECBED2 100%)"
      },
      fontFamily: {
        font_primary: ["Roslindale"],
        // ABeeZee:["ABeeZee", "sans-serif"],
        // Roslindale_bold: ["Roslindale-bold"],
        // Roslindale_medium: ["Roslindale-medium"],
        
        text:['ABeeZee', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
