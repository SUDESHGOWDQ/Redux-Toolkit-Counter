import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../feature/Counter/Counterslice';

export const store = configureStore({
	  reducer: {
		counter: CounterReducer			
	  }
})