import React, {createContext, useState} from 'react';

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [enteredName, setEnteredName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [data, setData] = useState(false);
    const [score, setScore] = useState(0);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [allQuestions, setAllQuestions] = useState(false);

    const values = {
        data,
        setData,
        enteredName,
        setEnteredName,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
        score,
        setScore,
        showErrorModal,
        setShowErrorModal,
        allQuestions,
        setAllQuestions
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};