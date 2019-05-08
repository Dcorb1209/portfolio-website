import React from 'react';
import { Button } from 'react-bootstrap';
import './CSS/EditProject.css';

class EditProject extends React.Component {
   
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return (
            <div className="page">
                <div className="side-menu">
                    <div className="button-group">
                        <Button className="add-button" variant="secondary" block >Add Header</Button>
                        <Button className="add-button" variant="secondary" block >Add Subheader</Button>
                        <Button className="add-button" variant="secondary" block >Add Text</Button>
                        <Button className="add-button" variant="secondary" block >Add Picture</Button>
                        <Button className="add-button" variant="secondary" block >Add Carousel</Button>
                        <Button className="add-button" variant="secondary" block >Add Video</Button>
                    </div>
                    <Button className="save-button" variant="primary" block >Save</Button>
                </div>
            </div>
        );
    }

}

export default EditProject;