import React from "react";
import UserContext from "./userContext";
import { Children } from "react";

const UserContextProvider =({children})=>{
    const [user, setUser] = React.useState(null);
 return(
    <UserContext.Provider value={{user,setUser}}>
   {children}
    </UserContext.Provider>
 )
}

export default UserContextProvider;
 

// create the Provider pass hte children (children are nothing but a generic name for anything which is passed for example div etc )
// wrap the children with the provider property  of UserContext 
// //now you have to pass the data which you want to be passed 
// // make a state usign userState and passe it to the provider

// your store is created now you have to give the access of the store either in main.js or app.jx
//every component passed between the UserProviderContext wrapper can have acces of the sotre
