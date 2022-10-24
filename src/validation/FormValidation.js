import * as yup from 'yup';

// signup validation
export const signUpValidation = () =>
   yup.object().shape({
      userName: yup.string().required('User name is required'),
      mobile: yup
         .string()
         .min(11)
         .max(11)
         .required('Mobile number is required'),
      email: yup.string().email().required('Email is required'),
      password: yup.string().min(6).max(12).required('password is required'),
      about: yup.string().max(100).required('About is required'),
   });

//    login validation
export const loginValidation = () =>
   yup.object().shape({
      email: yup.string().email().required('Email is required'),
      password: yup.string().min(6).max(12).required('password is required'),
   });

// profile validation
export const userProfileUpdateValidation = () =>
   yup.object().shape({
      userName: yup.string().required('User name is required'),
      email: yup.string().email().required('Email is required'),
      mobile: yup
         .string()
         .min(11)
         .max(11)
         .required('Mobile number is required'),
      about: yup.string().max(100).required('About is required'),
   });
