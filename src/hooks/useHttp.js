import { useReducer, useEffect } from "react";
import axios from "axios";

const httpReducer = (state, action) =>{
    switch(action.type){
        case "SEND":
            return { data: null, error: null, loading: true}
        case "SUCCESS":
            return { data: state.responseData, error: null, loading: false}
        case "ERROR":
           return { data: null, error: action.errorMessage, loading: false}
        default: 
        return state
    }
}

const useHttp = (url, method = "GET", body= null, dependencies = []) => {
    const [httpState, dispacth] = useReducer(httpReducer, {
        loading: false,
        data: null,
        error: null
    });

    useEffect(() => {
        const fetchData = async() => {
            dispacth({type: "SEND"})

            try{
                const response = await axios({url, method, data: body})
                dispacth({type: "SUCCESS"})
            } catch (error){
                dispacth({type: "ERROR"})
            }
        }
    }, dependencies)
}

