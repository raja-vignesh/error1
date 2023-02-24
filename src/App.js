import logo from './logo.svg';
import './App.css';
import SimpleComponent from './components/SimpleComponent';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} >
      <div className="App">
        <SimpleComponent />
      </div>
    </ErrorBoundary>
  );

}

const FallbackComponent = ({error,resetErrorBoundary}) => {
  return (
    <div >
      <p>Something went wrong:</p>
      <p >{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

export default App;
