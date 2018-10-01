import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import RadioInput from '../../../app/common/form/RadioInput';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import { createSignal, updateSignal } from '../signalActions'
// import SelectInput from '../../../app/common/form/SelectInput';
class FormSignal extends React.Component {

    onFormSubmit = (values) => {
      console.log(values)
      if (this.props.initialValues.id) {
        this.props.updateSignal(this.props.currentUser, values);
      } else {
        this.props.createSignal(this.props.currentUser, values);
      }
    };


    render() { 
      const { handleSubmit, error, loading } = this.props   
      console.log(this.props.initialValues)
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
                      disabled={loading} 
                      labelText="Cặp tiền"
                      id="eventRegInput1" className="form-control"
                    />
                    </div>
                  {/* {!isEditing ? <div className="form-group">
                    <label htmlFor="eventRegInput1">Loại lệnh</label>
                    <Field name="type" component={RadioInput} options={[{ key: 0, value: "Buy" }, { key: 1, value: "Sell" }]} />
                  </div> : null}
      */}

                  <label htmlFor="eventRegInput1">Loại lệnh</label>
                    <Field name="type" component={RadioInput} options={[{ key: 0, value: "Buy" }, { key: 1, value: "Sell" }]} />
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
                  {/* {!isEditing ? <button type="submit" className="btn btn-raised btn-primary">
                    Bắn tín hiệu
                    </button> : <div>  <button onClick={() => deselect()} type="button" className="btn btn-raised btn-primary">
                      Hủy
                    </button>  <button type="submit" className="btn btn-raised btn-primary">
                      Sửa
                    </button></div>} */}
                    <Button loading={loading} type="submit" className="btn btn-raised btn-primary">
                    Bắn tín hiệu
                    </Button>
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
  let signal = {};

  if (state.signal.selectedSignal) {
    signal = state.signal.selectedSignal;
  }

  return {
    initialValues: signal,
    loading: state.async.loading,
    currentUser: state.firebase.auth,
  };

}

const actions = {
  createSignal,
  updateSignal
};



export default 
compose (
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signal-form', enableReinitialize: true, destroyOnUnmount: true })
)(FormSignal);