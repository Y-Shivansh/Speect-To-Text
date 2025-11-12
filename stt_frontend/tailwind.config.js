/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                light: "#f6f6f6",  
                primary: '#061126',  
                secondary: "#7e91ba",
        },
        boxShadow: {
            soft: '0 2px 6px rgba(0, 0, 0, 0.85)',
        },
    }
},
plugins: [],
    corePlugins: {
    scrollBehavior: true,
    },
}
