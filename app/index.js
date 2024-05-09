import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

/* 
import { Exemple } from '../Exemple';
import ComposantEtat from '../ComposantEtat';
import { Toto} from "../Toto";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });


  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>aya</Text>
      <StatusBar style="auto" />
      {/*  {  <Exemple  title="toto" /> } }
      <ComposantEtat />
      <Text>{counter}</Text>
      <Button title='Appuyez-moi' onPress={() => setCounter(counter + 1)}> </Button>
      <Text>{date.toTimeString()}</Text> }
      <Toto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 */


export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTodo, setEditingTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✔️ ${updatedTodos[index]}`;
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingTodo(todos[index]);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editingTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingTodo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO-list</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une nouvelle tâche"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Ajouter" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View style={styles.todoContainer}>
            {editingIndex === index ? (
              <TextInput
                style={styles.editInput}
                value={editingTodo}
                onChangeText={setEditingTodo}
              />
            ) : (
              <Text style={styles.todoText} onPress={() => editTodo(index)}>
                {item}
              </Text>
            )}
            <View style={styles.buttonsContainer}>
              <Button title="Supprimer" onPress={() => deleteTodo(index)} />
              <Button title="Terminée" onPress={() => toggleTodo(index)} />
              {editingIndex === index && (
                <Button title="Enregistrer" onPress={updateTodo} />
              )}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
