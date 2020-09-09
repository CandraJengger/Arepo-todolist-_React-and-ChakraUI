import React from 'react'
import { Box, List } from '@chakra-ui/core'
import { Todo } from './Todo'

export const TodoList = ({ todos, setTodos, filteredTodos }) => {
    
    return (
        <Box
            w="90%"
            mx="auto"
            mt="3rem"
        >
            <List as="ul">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        todo={todo}
                        text={todo.text} 
                        key={todo.id}
                    />
                ))}
            </List>
        </Box>
    )
}