import { useState, useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValues);
 
    var setClass = document.getElementsByTagName("body");

    useEffect(() => {
        if(darkMode === true) {
            setClass.setAttribute("class", ".dark-mode")
        }
    },[]);

    return [darkMode];
};
