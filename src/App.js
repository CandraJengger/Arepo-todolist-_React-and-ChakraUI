import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/core'
import Form from './components/Form'
import { TodoList } from './components/TodoList'
import Header from './components/Header'

function App() {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterHandler = () => {
        switch (status) {
            case 'completed': 
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break
            default: 
                setFilteredTodos(todos)
                break
        }
    }

    //Save to Local
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        filterHandler()
        saveLocalTodos()
    }, [todos, status])

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Box w="100%">
                    <Form
                        todos={todos}
                        setTodos={setTodos}
                        inputText={inputText}
                        setInputText={setInputText} 
                        status={status}
                        setStatus={setStatus}
                    />
                    <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
                </Box>
            </main>
        </>
    ) 
}

export default App 
