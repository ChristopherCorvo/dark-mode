import { useState } from 'react'

//---------- imported hooks -------------
import { useLocalStorage } from '../hooks/useLocalStorage'

export const useDarkMode = (key) => {

   console.log('key:', key)

   // the import of useLocalStorage brought with it an array with two items
    const [ darkModeVal, setDarkModeVal ] = useLocalStorage(key)
    
    return [darkModeVal, setDarkModeVal]
}