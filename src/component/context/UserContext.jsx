import  { createContext, useContext } from "react"

const nameProvider = createContext();

export function NameContext ({ children }) {
    const Username = "Lawrence";
    const Email = "emedionglawrence0@gmail.com"

    return (
            <nameProvider.Provider value= {{Username, Email}}>
            {children}
           </nameProvider.Provider>
        );
}

   export function Usecontext() {
    const context = useContext(nameProvider);
    
    if (!context) {
        throw new Error ("component must be inside of name context");
    }
    return context;
   } 