import React, { Component } from 'react';
import Chulito from './Chulito';

class Buscar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.OnHandleFilterTextChange(e.target.value);
    }
    
    render() {
        return (
            <div className="row my-4">
                <Chulito clases="d-none d-lg-block"></Chulito>
                <div className="col-md-10 d-flex justify-content-center justify-content-md-end align-items-center">
                    <form>
                        <input 
                            type="text" 
                            placeholder="🔍 Search" 
                            id="searchSending" 
                            className="form-control" 
                            onChange = {this.handleFilterTextChange}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Buscar;