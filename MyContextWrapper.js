import { Children, createContext } from "react";
const initialContext = {
    titel: 'default'
}


const MyContext = createContext()
const MyContextWrapper = ({Children}) => {

    {
        <MyContext.Provider value={initialContext}>{Children}</MyContext.Provider>

    }
}
export default MyContextWrapper;