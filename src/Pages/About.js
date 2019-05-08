import React from 'react';
import NavigationBar from '../Components/NavigationBar';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <NavigationBar/>
                About page boi
            </div>
        );
    }
}

About.propTypes = {

};

export default About;