
import '../Css/App.css';
// @ts-ignore
import BudgetPlanner from './BudgetPlanner.tsx';
// @ts-ignore
import BudgetTable from './BudgetLog.tsx';
import {Menu} from 'antd'
import * as React from "react";

import {Route, Link, Routes} from "react-router-dom";

const items = [
  { label: <Link to="/">Budget Portfolio</Link>, key: 'budget' }, // remember to pass the key prop
  { label: <Link to="/BudgetLog">Budget Logs</Link>, key: 'logs' }, // which is required
];

function App() {
  function selectItem(menuItem) {
      if(menuItem==='budget'){
        
      }
  };


  return (
    <div className="App" key="1">
      <Menu  mode="horizontal"
             defaultSelectedKeys={['budget']} 
             onClick={selectItem} 
             items={items} />
      <Routes>
            <Route path="/" element={<BudgetPlanner/>}></Route>
            <Route path="/BudgetLog" element={<BudgetTable/>}> </Route>
        </Routes>
    </div>
  );
}

export default App;
