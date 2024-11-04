// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: "#1d4ed8", // Adjust to the primary color you want
      "primary-foreground": "#ffffff",
      destructive: "#dc2626",
      "destructive-foreground": "#ffffff",
      secondary: "#64748b",
      "secondary-foreground": "#ffffff",
      accent: "#d1d5db", // Background for accent variant
      "accent-foreground": "#374151",
      background: "#f9fafb", // Default background for outline and ghost
      ring: "#3b82f6", // Color of focus-visible ring
    },
  },
  },
  plugins: [],
};
