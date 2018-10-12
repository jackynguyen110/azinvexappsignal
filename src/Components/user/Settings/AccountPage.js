import React from 'react'
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import TextInputForm from '../../../app/common/form/TextInputForm';
import { withFirestore } from 'react-redux-firebase';
import DropzoneField from '../../../app/common/form/DropzoneField';
import LoadingComponent from 'app/layout/Loading/LoadingComponent'
import axios from 'axios';
const mapState = (state) => ({
    initialValues: state.firebase.profile,
    currentUser: state.firebase.auth,
    loading:false
})
class AccountPage extends React.Component {
    state = { imageFile: [] };
    
    onFormSubmit = async (creds) => {
        const { isLoaded, isEmpty, imageToUpload, updatedAt, ...updatedUser } = creds;
        console.log(updatedUser)
        const { firestore, currentUser } = this.props;
       this.setState({loading:true})
        if(creds.imageToUpload){
            const image = creds.imageToUpload[0];
            let formData = new FormData();
            formData.append('photo', image);
            let axiosConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            let url = 'http://api.congtruyendich.com/upload';
            const data = await axios.post(url, formData, axiosConfig);
            this.setState({ imageFile: [] })
            const newData = { ...updatedUser, photoURL: data.data.full, updatedAt: firestore.FieldValue.serverTimestamp() }
            firestore.update({ collection: 'users', doc: currentUser.uid }, newData)
        }else{
            firestore.update({ collection: 'users', doc: currentUser.uid }, updatedUser)
        }
        this.setState({ loading: false })
    }
    handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

    HandleImageChange = (e) => {
        e.preventDefault();
    }
    render(){
        const { handleSubmit } = this.props
        if (this.state.loading) return (<LoadingComponent />)
        return(<section id="accoutPage">

            <div className="row">
                <div className="col-sm-12">
                    <div className="content-header">Chỉnh Sửa Thông Tin Cá Nhân</div>

                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title" id="from-actions-bottom-right">Thông Tin Cá Nhân</h4>
                           
                        </div>
                        <div className="card-body">
                            <div className="px-3">
                                <form className="form" onSubmit={handleSubmit(this.onFormSubmit)}>
                                    <div className="form-body">
                                        <h4 className="form-section">
                                            <i className="ft-info" /> Thông Tin Cơ Bản</h4>
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-2">
                                                <label htmlFor="userinput1">Tên Đầy Đủ</label>
                                                <Field component={TextInputForm} type="text" id="displayName" className="form-control border-primary" placeholder="Tên Đầy Đủ" name="displayName" />
                                            </div>
                                        </div>

                                        <h4 className="form-section">
                                            <i className="ft-mail" />Thông Tin Khác</h4>
                                        <div className="row">
                                            <div className="form-group col-12 mb-2">
                                                <label htmlFor="userinput5">Website</label>
                                                <Field component={TextInputForm} className="form-control border-primary" name="information.website" placeholder="information.website" id="information.website" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 mb-2">
                                                <label htmlFor="userinput6">Số Điện Thoai</label>
                                                <Field component={TextInputForm} className="form-control border-primary" name="information.phone" placeholder="Số Điện Thoại" id="information.phone" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 mb-2">
                                                <label>Kinh Nghiệm Giao Dịch</label>
                                                <Field component={TextInputForm} className="form-control border-primary" type="text" placeholder="Kinh Nghiệm giao dịch" id="information.experience" name="information.experience" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 mb-2">
                                                <label htmlFor="userinput8">Mô Tả Bản Thân</label>
                                                <Field component={TextInputForm} id="information.about" rows={5} className="form-control border-primary" name="information.about" placeholder="Mô Tả Bản Thân" />
                                            </div>
                                        </div>
                                       
                                        <Field
                                        name="imageToUpload"
                                        component={DropzoneField}
                                        type="file"
                                        imagefile={this.state.imageFile}
                                        handleOnDrop={this.handleOnDrop}
                                        />
                                    </div>
                                    <div className="form-actions right">
                                        <button type="button" className="btn btn-raised btn-warning mr-1">
                                            <i className="ft-x" /> Cancel
                            </button>
                                        <button type="submit" className="btn btn-raised btn-primary">
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
                                <img src={this.props.initialValues.photoURL} alt="element 05" width={150} className="mb-1 img-fluid" />
                                <h4 className="card-title">{this.props.initialValues.displayName}</h4>
                                <p className="card-text">Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default connect(mapState, null)(reduxForm({ form: 'infoForm', enableReinitialize: true, destroyOnUnmount: true })(withFirestore(AccountPage)))
