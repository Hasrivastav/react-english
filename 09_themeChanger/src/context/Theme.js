import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider


//in the above export we have combined the two files approchesin a single file we created in the pereviouse 08 project  


//custom hook 
export default function useTheme(){
    return useContext(ThemeContext)
}


