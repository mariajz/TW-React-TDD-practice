import Counter from "./components/Counter/Counter"
import AsyncCounter from "./components/AsyncCounter/AsyncCounter"
import TestAxios from "./components/TestAxios/TestAxios";

function App(){
    //return <Counter></Counter>
    //return <AsyncCounter></AsyncCounter>
    return <TestAxios url = "https://api.github.com/users/mariajz"></TestAxios>

}

export default App;