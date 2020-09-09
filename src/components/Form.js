import React, { useRef, useEffect } from 'react'
import { 
    InputGroup,
    InputRightElement,
    Input, 
    IconButton, 
    Select
} from '@chakra-ui/core'

export default React.memo(({ inputText, setInputText, setTodos, todos, status, setStatus }) => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [inputText])

    const handleTodoHandler = e => {
        const d = new Date()
        e.preventDefault()
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: d.getTime() }
        ])
        setInputText('')
    }

    const statusHandler = e => {
        setStatus(e.target.value)
    }

    return (
        <form onSubmit={handleTodoHandler}>
            <InputGroup w="90%" mx="auto">
                <Input 
                    aria-label="Input to do"
                    ref={inputRef}
                    rounded="0"
                    w="100%"
                    type="text" 
                    bg="white"
                    pr="50px"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <InputRightElement w="20%">
                    <IconButton 
                        aria-label="Add"
                        w="100%"
                        rounded="0"
                        type="submit"
                        variantColor="teal" 
                        variant="outline"
                        bg="red.400"
                        color="black"
                        border="0"
                        borderColor="black"
                        icon="add"
                        _hover={{ bg: 'red.500' }}
                        _active={{ bg: 'red.500' }}
                    >Add</IconButton>
                </InputRightElement>
            </InputGroup>
            <div>
                <Select
                    onChange={statusHandler} 
                    w="90%"
                    size="md"
                    bg="orange.200"
                    border="2px"
                    mt="5"
                    mx="auto"
                    color="black"
                    aria-label="Filter"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </Select>
            </div>
        </form>
    )
}) 