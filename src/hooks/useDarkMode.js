import { useState } from 'react'

//---------- imported hooks -------------
import { useLocalStorage } from '../hooks/useLocalStorage'

export const useDarkMode = (key) => {
    const [ darkModeVal, setDarkModeVal ] = useLocalStorage(key)
    
    return [darkModeVal, setDarkModeVal]
}