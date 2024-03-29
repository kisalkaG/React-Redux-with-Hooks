import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
  const account = useSelector((state) => state.account.account);
  const receivee = useSelector((state) => state.account.receiveeAccountBalance);

  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, transferMoney} = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div className="App">
      <h1> Account balance : {account} </h1>
      <h1> Receiver Account balance : {receivee} </h1>
      <button onClick={() => depositMoney(1000)}> Deposit </button>
      <button onClick={() => withdrawMoney(1000)}> Withdraw </button>
      <button onClick={() => transferMoney(500)}>Transfer</button>
      
    </div>
  );
}

export default App;
