import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
class FormSignal extends React.Component {

    render() {    
    return (
      <div className="col-md-12 col-lg-4">
        <div className="card">
          <div className="card-header">
         
            <h4 className="card-title" id="from-actions-top-left">Quản Lý Tín Hiệu</h4>

             <div className="alert alert-info" role="alert"><strong>aaaaa</strong></div>
          </div>
          <div className="card-body">
            <div className="px-3">
            <form className="form">
                <div className="form-body">
                    <div className="form-group">
                    <label htmlFor="eventRegInput1">Cặp tiền</label>
                    <Field component={TextInputForm} name="symbol"
                      labelText="Cặp tiền"
                      id="eventRegInput1" className="form-control"
                    />
                    </div>
                  <div className="form-group">
                    <label htmlFor="eventRegInput1">Stoploss</label>
                    <Field component={TextInputForm} name="stoploss"
                      labelText="Stoploss"
                      id="eventRegInput1" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventRegInput1">Takeprofit</label>
                    <Field component={TextInputForm} name="takeprofit"
                      labelText="Takeprofit"
                      id="eventRegInput1" className="form-control"
                    />
                  </div>
                    <div className="form-group">
                    <label htmlFor="eventRegInput2">Title</label>
                    <input type="text" id="eventRegInput2" className="form-control" name="title" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="eventRegInput3">Company</label>
                    <input type="text" id="eventRegInput3" className="form-control" name="company" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="eventRegInput4">Email</label>
                    <input type="email" id="eventRegInput4" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="eventRegInput5">Contact Number</label>
                    <input type="tel" id="eventRegInput5" className="form-control" name="contact" />
                    </div>
                    <div className="form-group">
                    <label>Existing Customer</label>
                    <div className="input-group">
                        <div className="custom-control custom-radio display-inline-block">
                        <input type="radio" id="customRadioInline4" name="customRadioInline3" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline4">Yes</label>
                        </div>
                        <div className="custom-control custom-radio display-inline-block">
                        <input type="radio" id="customRadioInline3" defaultChecked name="customRadioInline3" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline3">No</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="form-actions center">
                    <button type="button" className="btn btn-raised btn-warning mr-1">
                    <i className="ft-x" /> Cancel
                    </button>
                    <button type="button" className="btn btn-raised btn-primary">
                    <i className="fa fa-check-square-o" /> Save
                    </button>
                </div>
                </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default reduxForm({
  form: 'signal-form'
})(FormSignal);