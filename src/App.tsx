import * as React from 'react';
import './App.css';
import Hello from './components/Hello'

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="App">
                <Hello name="Stone" enthusiasmLevel={4}/>
            </div>
        );
    }
}

export default App;
