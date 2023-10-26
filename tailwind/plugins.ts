const plugins = [
  function ({ addUtilities }) {
    const newUtilities = {
      ".primary": {
        color: "white",
        "background-color": "#e12727",
        border: "thick double white",
      },
      ".primary:hover": {
        "box-shadow": "-7px 7px 2px black",
        border: "none",
      },
      ".secondary": {
        color: "black",
        "background-color": "white",
        border: "thick double #e12727",
      },
      ".secondary:hover": {
        border: "4px #e12727 solid",
      },
      ".link": {
        border: "none",
        fill: "#E12727",
      },
      ".link:hover": {
        color: "#e12727",
      },
    };
    addUtilities(newUtilities);
  },
];

export default plugins;
