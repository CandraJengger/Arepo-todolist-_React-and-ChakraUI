import React from 'react'
import {
    Box,
    IconButton, 
    ListItem
} from '@chakra-ui/core'

export const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(e => e.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <Box d="flex" justifyContent="space-between" alignItems="center" mb="10px">
            <ListItem 
                pl="2" 
                h="40px" 
                lineHeight="40px" 
                w="100%" 
                bg="white"
                textDecoration={todo.completed ? 'line-through' : 'none'}
                color={todo.completed ? 'gray.400' : 'black'}
            >
                {text}
            </ListItem>
            <Box d="flex" justifyContent="center">
                <IconButton 
                    onClick={completeHandler}
                    rounded="0"
                    bg="cyan.400"
                    aria-label="Completed"
                    size="md"
                    icon="check"
                    _hover={{ bg: 'cyan.500', outline: 'none' }}
                    _active={{ bg: 'cyan.500', outline: 'none' }}
                />
                <IconButton 
                    onClick={deleteHandler}
                    rounded="0"
                    bg="red.400"
                    aria-label="Delete"
                    size="md"
                    icon="minus"
                    _hover={{ bg: 'red.500', outline: 'none' }}
                    _active={{ bg: 'red.500', outline: 'none' }}
                />
            </Box>
        </Box>
    )
}