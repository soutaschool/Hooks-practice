import React, {useReducer} from 'react';
import reducer from '../reducers/events';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from "../contexts/AppContext";


const App = () => {

    const initialState = {
        events: [],
        operationLogs: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch}}>
            <div className="container-fluid">
                <EventForm/>
                <Events/>

            </div>
        </AppContext.Provider>
    )
}

export default App