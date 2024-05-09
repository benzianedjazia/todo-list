import React from 'react';
import { Component } from 'react'
import { View, Text, Button } from 'react-native'

class ComposantEtat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,

        };
        this.incrementerCompteur=this.incrementerCompteur.bind(this)
    }
    incrementerCompteur(){
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        const { counter } = this.state;
        // const tt = this.state.counter;
        return (<View>
            <Text>
                {counter}
            </Text>
            <Button title='Appuyez-moi' onPress={ this.incrementerCompteur}> </Button>
{/*             <Button title='Appuyez-moi' onPress={() => this.incrementerCompteur()}> </Button>
 */}      
   </View>);
    }

}
export default ComposantEtat;