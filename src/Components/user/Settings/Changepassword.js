import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import { connect } from 'react-redux';
import { updatePassword } from '../../Auth/authActions' ;
import {toastr} from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
const mapDispatchToProps = {
  updatePassword
}
const Changepass = ({updatePassword, handleSubmit}) => {
  return (
    <section id="changepassword">
      <div className="row">
        <div className="col-sm-12">
            <div className="content-header">Thay đổi mật khẩu</div>
            <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="basic-layout-card-center">Đổi Mật Khẩu Cá Nhân</h4>
                 
                </div>
                <div className="card-body">
                  <div className="px-3">
                    <form className="form" onSubmit={handleSubmit(updatePassword)}>
                      <div className="form-body">
                        <div className="form-group">
                          <label htmlFor="password">Nhập Mật Khâu</label>
                          <Field component={TextInputForm} type="text" id="password" className="form-control" name="password" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="repassword">Mật Khẩu Xác Nhận</label>
                          <Field component={TextInputForm}  type="text" id="repassword" className="form-control" name="repassword" />
                        </div>
                      </div>
                      <div className="form-actions center">
                        <button  onClick={() => toastr.success('The title', 'The message')}  type="button" className="btn btn-raised btn-warning mr-1">
                          <i className="ft-x" /> Hủy
                        </button>
                        <button type="sumit" className="btn btn-raised btn-primary">
                          <i className="fa fa-check-square-o" /> Lưu
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default (connect(null, mapDispatchToProps)(reduxForm({form: 'changepass'})(Changepass)))
