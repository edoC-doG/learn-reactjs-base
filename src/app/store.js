import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSilce'
import useReducer from '../features/Auth/components/userSlice'

const rootReducer = {
    count: counterReducer,
    user: useReducer,
};

const store = configureStore ({
    reducer: rootReducer,
});


export default store;