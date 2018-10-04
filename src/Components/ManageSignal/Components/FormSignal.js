import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import RadioInput from '../../../app/common/form/RadioInput';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import { createSignal, updateSignal, selectedSignal} from '../signalActions'
import {
  combineValidators,
  isRequired,
} from 'revalidate';
// import SelectInput from '../../../app/common/form/SelectInput';

const validate = combineValidators({
  symbol: isRequired({ message: 'cặp tiền phải nhập' }),
  stoploss: isRequired({ message: 'phải nhập stoploss' }),
  takeprofit: isRequired({ message: 'phải nhập takeprofit' }),
});

class FormSignal extends React.Component {

    onFormSubmit = (values) => {
      if (this.props.initialValues) {
        this.props.updateSignal(this.props.currentUser, this.props.initialValues.id, values);
      } else {
        this.props.createSignal(this.props.currentUser, values);
      }
    };


    render() { 
      const { handleSubmit, error ,loading,signal, selectedSignal } = this.props   
    return (
      <div className="col-md-12 col-lg-4">
        <div className="card">
          <div className="card-header">
         
            <h4 className="card-title" id="from-actions-top-left">Quản Lý Tín Hiệu</h4>
            {error && <div className="alert alert-info" role="alert"><strong>{error}</strong></div>}
            
          </div>
          <div className="card-body">
            <div className="px-3">
              <form className="form" onSubmit={handleSubmit(this.onFormSubmit)}>
                <div className="form-body">
                    <div className="form-group">
                    <label htmlFor="eventRegInput1">Cặp tiền</label>
                    <Field component={TextInputForm} name="symbol"
                      required="true"
                      disabled={loading || signal} 
                      labelText="Cặp tiền"
                      id="eventRegInput1" className="form-control"
                    />
                    </div>
               
                    {!signal && <Field name="type" component={RadioInput} options={[{ key: 0, value: "Buy" }, { key: 1, value: "Sell" }]} />}
                 <div className="form-group">
                    <label htmlFor="eventRegInput1">Stoploss</label>
                    <Field disabled={loading} component={TextInputForm} name="stoploss"
                      labelText="Stoploss"
                      id="eventRegInput1" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventRegInput1">Takeprofit</label>
                    <Field disabled={loading} component={TextInputForm} name="takeprofit"
                      labelText="Takeprofit"
                      id="eventRegInput1" className="form-control"
                    />
                  </div>
                  
                </div>
                <div className="form-actions center">
                    {!signal ?
                    <Button loading={loading} type="submit" className="btn btn-raised btn-primary">
                    Bắn tín hiệu
                    </Button> :
                      <div>
                        <Button loading={loading} type="submit" className="btn btn-raised btn-primary mr-1">
                        Sửa tín hiệu
                        </Button>
                        <Button onClick={() => selectedSignal(null)} loading={loading} type="submit" className="btn btn-raised btn-danger mr-1">
                        Cancel
                        </Button>
                      </div>
                      
                    }
                </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  let signal = null;

  if (state.signal.selectedSignal) {
     signal = state.signal.selectedSignal.signal;
   }

  return {
    initialValues: signal,
    signal,
    loading: state.async.loading,
    currentUser: state.firebase.auth,
  };

}

const actions = {
  createSignal,
  updateSignal,
  selectedSignal
};



export default 
compose (
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signal-form', enableReinitialize: true, destroyOnUnmount: true, validate })
)(FormSignal);