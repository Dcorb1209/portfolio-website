import React from 'react';
import NavigationBar from '../Components/NavigationBar';

class Landing extends React.Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        }
    }

    render() {
        return (
            <div>
                <NavigationBar />
            </div>
        );
    }

}

export default Landing;