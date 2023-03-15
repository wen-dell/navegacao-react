import './App.css';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

const App = (props) => {
  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
