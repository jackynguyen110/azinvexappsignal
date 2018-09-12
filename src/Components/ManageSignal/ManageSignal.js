import React from 'react';
import { connect } from 'react-redux';
import FormSignal from './Components/FormSignal';
import ListSignal from './Components/ListSignal';

class ManageSignal extends React.Component {
    render() {
        return (
            <section id="bordered-media-object d-flex mr-3">
                <div className="row" matchheight="card">
                    <FormSignal currentUser={this.props.currentUser} />
                    <ListSignal currentUser={this.props.currentUser} listSignal={this.props.listSignals} />
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(null, null)(ManageSignal);