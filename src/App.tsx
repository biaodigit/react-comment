import * as React from 'react';
import Wrapper from './Wrapper'
import './App.scss'

@Wrapper
class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className="App">app</div>
            </React.Fragment>
        )
    }
}

export default App;