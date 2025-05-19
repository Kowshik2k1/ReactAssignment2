import { Container } from 'react-bootstrap';
import './App.css';
import ConnectAPT from './components/ConnectAPI';
import Counter from './components/Counter';
import ListAndEvents from './components/ListAndEvents';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <ListAndEvents />
      <Counter />
      <ConnectAPT />
    </Container>
  );
}

export default App;
