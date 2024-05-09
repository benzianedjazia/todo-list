import { useContext } from "react";
import {MyContext  } from"./MyContextWrapper";
import { Text } from "react-native-web";


const Toto = () => {
    const { title } = useContext(MyContext)
return (
    <Text>
        {title}
    </Text>
)
}



export default Toto;