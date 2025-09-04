import './App.css';
import MvtClassComp from './components/MvtClassComp';
import MvtFuncComp from './components/MvtFuncComp';
import MvtJsxExpression from './components/MvtJsxExpression';

function App() {
  return (
    <div className="container border">
        <h1>Làm việc với các thành phần cơ bản trong ReactJs</h1>
        <hr/>
        <MvtJsxExpression />

        <MvtFuncComp />
        <MvtFuncComp name="Chung Trinh" age="47"></MvtFuncComp>

        <MvtClassComp ></MvtClassComp>
        <MvtClassComp fullName="Mai van truong" company="FitNTU" />
        <MvtClassComp fullName="mai van truong" company="K22CNTx" />
    </div>
  );
}

export default App;