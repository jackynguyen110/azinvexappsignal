import React from 'react'
import image from 'assets/img/portrait/avatars/avatar-08.png'
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import { connect } from 'react-redux';
import { login } from '../../Auth/authActions'
import {toastr} from 'react-redux-toastr'
const actions = {
    login
}
const LoginForm = ({login, handleSubmit, error, socialLogin}) => {

    return (

        <section id="login">
            <div className="container-fluid">
                <div className="row full-height-vh">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="card gradient-indigo-purple text-center width-400">
                        <div className="card-img overlap">
                        <img alt="element 06" className="mb-1" src={image} width={190} />
                        </div>
                        <div className="card-body">
                        <div className="card-block">
                            <h2 className="white">Login</h2>
                            <form onSubmit={handleSubmit(login)}>
                            
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
                            
                                <div className="form-group">
                                    <div className="col-md-12">
                                    <button type="submit" className="btn btn-info btn-block btn-raised">Đăng Nhập</button>
                                    <button type="button" className="btn btn-secondary btn-block btn-raised">Cancel</button>
                                    </div>
                                </div>

                                <a class="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-google"><span class="fa fa-google"></span> Google</a>
                                <a class="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-facebook"><span class="fa fa-facebook"></span> Facebook</a>
                            </form>
                        </div>
                        </div>
                        <div className="card-footer">
                        <div className="float-left"><a className="white">Recover Password</a></div>
                        <div className="float-right"><a className="white">New User?</a></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      
    );
};


export default connect(null, actions)(reduxForm({form: 'LoginForm'})(LoginForm))