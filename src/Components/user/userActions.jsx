
import axios from 'axios';
import { asyncActionError, asyncActionStart, asyncActionFinish } from '../async/asyncActions';
export const updateProfile = (user) => {
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        if (user.dateOfBirth) {
            
        }
    }
}

export const uploadImage = (file,fileName) => {
    async(dispatch, getState, { getFirebase, getFirestore}) =>{
 
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        let formData = new FormData();
        formData.append('photo', file);
        try {
            dispatch(asyncActionStart());
            let axiosConfig = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                }
            };
            let url = 'http://api.congtruyendich.com/upload';
            axios.post(url, formData, axiosConfig).then((data) => {
                console.log(data)
                dispatch(asyncActionFinish());
            }).catch(error => {
                dispatch(asyncActionError());
            })
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
            throw new Error('Problem uploading photo');
        }
    }
}