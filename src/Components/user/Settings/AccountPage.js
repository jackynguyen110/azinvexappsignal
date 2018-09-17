import React from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';

const mapState = (state) => ({
    profile: state.firebase.profile
})

const AccountPage = ({profile}) => {
  return (
    <section id="accoutPage">
    
        <div class="row">
            <div class="col-sm-12">
                <div class="content-header">Chỉnh Sửa Thông Tin Cá Nhân</div>
             
            </div>
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                    <h4 className="card-title" id="from-actions-bottom-right">Thông Tin Cá Nhân</h4>
                    <div className="alert alert-info" role="alert">
                        <strong>Form Actions On Bottom Right.</strong>
                    </div>
                    <p className="mb-0">To add form actions on bottom of the form add a div with
                        <code>.form-actions</code> class to end the form. This is the default position for form actions. We have added
                        <code>.right</code> class to move buttons on the right side.</p>
                    </div>
                    <div className="card-body">
                    <div className="px-3">
                        <form className="form">
                        <div className="form-body">
                            <h4 className="form-section">
                            <i className="ft-info" /> Thông Tin Cơ Bản</h4>
                            <div className="row">
                                <div className="form-group col-md-6 mb-2">
                                    <label htmlFor="userinput1">Tên Đầy Đủ</label>
                                    <Field component={TextInputForm} type="text" id="name" className="form-control border-primary" placeholder="Tên Đầy Đủ" name="name" />
                                </div>
                                <div className="form-group col-md-6 mb-2">
                                    <label htmlFor="userinput2">Nick Name</label>
                                    <Field component={TextInputForm} type="text" id="nickname" className="form-control border-primary" placeholder="nickname" name="nickname" />
                                </div>
                            </div>
                            
                            <h4 className="form-section">
                            <i className="ft-mail" />Thông Tin Khác</h4>
                            <div className="row">
                            <div className="form-group col-12 mb-2">
                                <label htmlFor="userinput5">Facebook</label>
                                <Field component={TextInputForm} className="form-control border-primary" type="facebook" placeholder="facebook" id="facebook" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-12 mb-2">
                                <label htmlFor="userinput6">Số Điện Thoai</label>
                                <Field component={TextInputForm} className="form-control border-primary" type="phone" placeholder="Số Điện Thoại" id="phone" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-12 mb-2">
                                <label>Kinh Nghiệm Giao Dịch</label>
                                <Field component={TextInputForm} className="form-control border-primary" type="text" placeholder="Kinh Nghiệm giao dịch" id="experience" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="form-group col-12 mb-2">
                                <label htmlFor="userinput8">Mô Tả Bản Thân</label>
                                <Field component={TextInputForm} id="description" rows={5} className="form-control border-primary" name="bio" placeholder="Mô Tả Bản Thân" />
                            </div>
                            </div>
                        </div>
                        <div className="form-actions right">
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

            <div className="col-md-3">
                <div className="card card-inverse bg-warning text-center no-border box-shadow-0">
                    <div className="card-body">
                        <div className="card-block">
                            <img src={profile.photoURL} alt="element 05" width={150} className="mb-1 img-fluid" />
                            <h4 className="card-title">{profile.displayName}</h4>
                            <p className="card-text">Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default (reduxForm({form: 'infoForm'})(connect(mapState, null)(AccountPage)))
