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
    const [showCategories, setShowCategories] = useState("");
    const [allAnswers, setAllAnswers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentGameData, setCurrentGameData] = useState([]);

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
        setAllQuestions,
        showCategories,
        setShowCategories,
        allAnswers,
        setAllAnswers,
        isCorrect,
        setIsCorrect,
        currentGameData,
        setCurrentGameData
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};