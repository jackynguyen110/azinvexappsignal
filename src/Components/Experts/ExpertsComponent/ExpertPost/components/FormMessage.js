import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import TextInputForm from 'app/common/form/TextInputForm';
import TextareaField from 'app/common/form/TextareaField';
import DropzoneField from 'app/common/form/DropzoneField';
class FormMessage extends Component {
    render() {
        return (
            <section id="basic-form-layouts">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="bordered-layout-card-center">GỬI THÔNG BÁO TỚI CHO NGƯỜI DÙNG</h4>
                </div>
                <div className="card-body">
                  <div className="px-3">
                    <form className="form form-horizontal form-bordered">
                      <div className="form-body">
                          <div className="form-group row">
                            <label className="col-md-3 label-control" htmlFor="eventRegInput1">Tiêu đề</label>
                
                              <Field component={TextInputForm} type="text" id="title" className="form-control border-primary" placeholder="Tiêu đề" name="title" />
                          
                          </div>
                        <div className="form-group row">
                        
                          <label className="col-md-3 label-control" htmlFor="eventRegInput1">Nội Dung</label>
                          <div className="col-md-9">

                              <Field component={TextareaField} id="content" rows={5} className="form-control border-primary" name="content" placeholder="Mô Tả Bản Thân" />
                          </div>
                        </div>
                          <div className="form-group row">

                            <label className="col-md-3 label-control" htmlFor="eventRegInput1">Nội Dung</label>
                         
                              <Field
                                name="imageToUpload"
                                component={DropzoneField}
                                type="file"
                                imagefile={this.state.imageFile}
                                handleOnDrop={this.handleOnDrop}
                              />


                   
                          </div>  
                      </div>
                      <div className="form-actions center">
                        <button onClick={this.props.changeState}  type="button" className="btn btn-raised btn-warning mr-1">
                          <i className="ft-x" /> Hủy Bỏ
                        </button>
                        <button type="button" className="btn btn-raised btn-primary">
                          <i className="fa fa-check-square-o" /> Gửi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
}

export default reduxForm({ form: 'postForm', enableReinitialize: true, destroyOnUnmount: true })(FormMessage);