import React from 'react';
import { Text } from 'react-native';


/* function Exemple(){
    return <Text>
        mima
    </Text> 
}*/
const Exemple = (props) => {
    return <Text>
        {props.title}
    </Text> 
}
export { Exemple};