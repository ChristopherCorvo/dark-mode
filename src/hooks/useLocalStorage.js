import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    // This state property is going to take a function as it's initial value. 
    // When we do this, whatever that callback function returns is what gets set 
    // as the intialValue for the state property.
    // this makes the initial value dynamic
    const [storedValue, setStoredValue] = useState(()=>{ 

        // In the callback function, we'll check to see if the item we 
        // passed in already exists in localStorage, and return that value, 
        // otherwise we'll return whatever initialValue was passed in.

        // the getItem() method of the Storage interface, when passed a key 
        // will return that key's value, or null if the key does not exist, in
        // the given Storage Object. 
        
        const item = window.localStorage.getItem(key);

        console.log(item)

        // if you pass in arrays or objects to localStorage, 
        // you will need to parse it into JSON.

        return item ? JSON.parse(item) : initialValue;
        
    }) 
    const setValue = value => {
        //save state
        setStoredValue(value);
        //Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue ]

    // helper function that will set the key:value relationship

   
};

