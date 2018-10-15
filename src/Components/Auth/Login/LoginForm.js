import React from 'react'
import image from 'assets/img/portrait/avatars/avatar-08.png'
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import { connect } from 'react-redux';
import { login, socialLogin } from '../../Auth/authActions'
import { Redirect } from 'react-router'

const actions = {
    login,
    socialLogin
}

const mapState = (state) => ({
    currentUser: state.firebase.auth
})
const LoginForm = ({ login, handleSubmit, error, socialLogin, currentUser }) => {
  
    if (currentUser.uid) {
        return <Redirect to="/"/>;
    }
    return (

        <section id="login">
            <div className="container-fluid">
                <div className="row full-height-vh">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="card gradient-indigo-purple text-center width-400">
                            <div className="card-img overlap">
                                <img alt="element 06" className="mb-1" src='https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-2/assets/img/portrait/avatars/avatar-08.png' width={190} />
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

                                        {error && <div className="alert bg-danger alert-dismissible mb-2" role="alert">{error}</div>}

                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-info btn-block btn-raised">Đăng Nhập</button>
                                                <button type="button" className="btn btn-secondary btn-block btn-raised">Cancel</button>
                                            </div>
                                        </div>

                                        <a onClick={() => socialLogin('google')} className="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-google"><span className="fa fa-google"></span> Google</a>
                                        <a onClick={() => socialLogin('facebook')} className="btn btn-social btn-round btn-min-width mr-2 mb-2 btn-facebook"><span className="fa fa-facebook"></span> Facebook</a>
                                    </form>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="float-right"><a href="/#/register" className="white">Chưa Có Tài Khoản?</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default connect(mapState, actions)(reduxForm({ form: 'LoginForm' })(LoginForm))