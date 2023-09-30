import './App.css';
import ImportConponent from './R003_ImportConponent';
import LifecycleEx from './R004_LifecycleEx';
import LifecycleEx2 from './R005_LifecycleEx';
import LifecycleEx3 from './R006_LifecycleEx.js';
import LifecycleEx4 from './R007_LifecycleEx.js';
import LifecycleEx5 from './R008_LifecycleEx.js';


function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <ImportConponent></ImportConponent>
      <LifecycleEx5 prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
