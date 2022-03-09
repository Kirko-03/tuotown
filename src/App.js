import './App.css';
import Header from "./components/Header/Header";
import {useSelector} from "react-redux";
import {Panel} from "./components/Panel/Panel";

function App() {
    const menu = useSelector(state=>state.header.menu)
  return (
    <div>
        {menu&&<Panel/>}
     <Header/>
    </div>
  );
}

export default App;
