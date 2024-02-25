/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "rgb(0 0 0 /40%) 0px 6px 29px, rgb(0 0 0 / 30%) 0px 7px 13px -3px, rgb(0 0 0 / 61%) 0px 0px 6px inset",
        "4xl":
          "rgb(0 0 0 /40%) 0px 6px 15px, rgb(0 0 0 / 30%) 0px 5px 10px -3px, rgb(0 0 0 / 50%) 0px 0px 6px inset",
        "5xl":
          "rgb(0 0 0 /30%) 0px 6px 10px, rgb(0 0 0 / 20%) 0px 5px 7px -3px, rgb(0 0 0 / 45%) 0px 0px 4px inset",
      },
    },
    colors: {
      primary: "#19283f",
      secondary: "#ecc94b",
      third: "white",
      forth: "#3397d1",
      fifth: "#e4e6eb",
      sixth: "black",
      siventh: "#363739",
      last: "#F5F6F7",
      thelast: "#EBEDF0",
    },
  },
  plugins: [],
};
