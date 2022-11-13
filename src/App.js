import ExchangeRatesDisplay from "./components/barchart/ExchangeRatesDsiplay";
import Login from "./components/Login/Login";
import { initialState,reducer } from "./Reducer/AppReducer";
import { useReducer } from "react";
import { AppContext } from "./Reducer/AppContext";
function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <AppContext.Provider value={{state,dispatch}}>
        <div className="App">
      {state.loader?<Login/>:
      <ExchangeRatesDisplay/>}
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
