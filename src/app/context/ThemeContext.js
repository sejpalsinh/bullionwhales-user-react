// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkTheme, setIsDarkTheme] = useState(() => {
//     // Read the theme value from local storage or set a default value
//     const storedTheme = localStorage.getItem('isDarkTheme');
//     if (storedTheme === null || storedTheme === undefined) {
//       // Set default theme to dark and store it
//       localStorage.setItem('isDarkTheme', true);
//       return true; // Default theme is dark
//     }
//     return storedTheme === 'true'; // Convert stored value to boolean
//   });

//   const toggleTheme = () => {
//     setIsDarkTheme((prevIsDarkTheme) => {
//       // Update local storage with the new theme value
//       localStorage.setItem('isDarkTheme', !prevIsDarkTheme);
//       return !prevIsDarkTheme;
//     });
//   };

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkTheme ? '#000' : '#f0f2f5';
//     document.body.style.color = isDarkTheme ? '#fff' : '#344767';
//   }, [isDarkTheme]);

//   const value = {
//     isDarkTheme,
//     toggleTheme,
//   };

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
// };

// export const useTheme = () => useContext(ThemeContext);
import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Enforce dark theme
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
  }, []);

  const value = {
    isDarkTheme: true,  // Always dark theme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
