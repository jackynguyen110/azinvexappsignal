import React from 'react'
import { registerUser, socialLogin } from '../../Auth/authActions'
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
const actions = {
    registerUser,
    socialLogin
}

const mapState = (state) => ({
    currentUser: state.firebase.auth
})

const RegisterForm = ({handleSubmit, registerUser, socialLogin, error, currentUser}) => {
    if (currentUser.uid) {
        return <Redirect to="/"/>;
    }
    return (
    
    <section id="registration">
        <div className="container">
            <div className="row full-height-vh">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="card">
                    <div className="card-body">
                        <div className="row d-flex">
                        <div className="col-12 col-sm-12 col-md-6 gradient-deep-orange-orange">
                            <div className="card-block">
                            <div className="card-img overlap">  
                                <img alt="" src='https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-2/assets/img/elements/13.png' width={350} className="mx-auto d-block" />
                            </div>
                            <h2 className="card-title font-large-1 text-center white mt-3">Registration</h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center">
                            <div className="card-block mx-auto">
                            <form onSubmit={handleSubmit(registerUser)}>
                              
                                <Field  
                                    component={TextInputForm} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Tên Hiển Thị" />

                               
                            
                                <Field  
                                    component={TextInputForm} 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email" />
                                
                            
                                <Field 
                                    component={TextInputForm}
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password" />
                               
                                {error && <div class="alert bg-danger alert-dismissible mb-2" role="alert">{error}</div> }
                                <div className="form-group col-sm-offset-1">
                                <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                    <input type="checkbox" className="custom-control-input" defaultChecked id="terms" />
                                    <label className="custom-control-label pl-2" htmlFor="terms">I agree <a>terms and conditions</a></label>
                                </div>
                                </div>
                                <div className="form-group text-center">
                                <button type="submit" className="btn btn-warning btn-raised">Đăng Kí</button>
                                </div>

                                
                                <a onClick={() => socialLogin('google')} class="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-google"><span class="fa fa-google"></span> Google</a>
                                <a onClick={() => socialLogin('facebook')} class="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-facebook"><span class="fa fa-facebook"></span> Facebook</a>
                            </form>
                            </div>
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

export default connect(mapState, actions)(reduxForm({form: 'registerForm'})(RegisterForm))
