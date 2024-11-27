import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Rubik", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#1A72DD",
            },
            boxShadow: {
                "md+" : "0px 4px 20px rgba(0, 0, 0, 0.1)"
            },
            listStyleType: {
                circle: "circle",
                disc: "disc",
            },
        },
    },

    plugins: [forms],
};
