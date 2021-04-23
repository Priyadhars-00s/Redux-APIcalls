import React, { useContext } from "react";
const themes = {
    light: {
      foreground: "#0000ff",
      background: "#feeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);
  
  function ContextHook() {
    return (
      <ThemeContext.Provider value={themes.light}>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }
  
    
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
  export default ContextHook;