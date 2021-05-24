import logo from './logo.svg';
import Count from './Component/Count';

import ParentDept from './Component/ParentDept';
import Header from './Component/Header';
import Sample from './Component/Sample';
import './App.css';
import ParentlDept from './Component/ParentDept';

function App() {
  function getApp() {
    const route = window.location.pathname;
    if (route === "/state") return <Count />
    else if (route === "/props") return <Sample name="Gayathri" id="610516104025" />
    else return <ParentDept />
  }
  return (
    <div className="container-Fluid">
      <Header />
      {getApp()}
    </div>
  );
}

export default App;
