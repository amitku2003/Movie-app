import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show:"False", msg:"" });
    const [query, setQuery] = useState('avengers');

    const getMovie = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({
                    show: "False",
                    msg: data.Error,
                });
            }else{
                setIsError({
                    show: "True",
                    msg: data.Error,
                });
            }
        }
        catch(error){}
    }

    useEffect(() => {
        let timerout = setTimeout(() => {
            getMovie(`${API_URL}&s=${query}`);
        },800);
        return () => clearTimeout(timerout);
    }, [query]);
    return (
        <AppContext.Provider value={ {isLoading, movie, isError, query, setQuery} }>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };