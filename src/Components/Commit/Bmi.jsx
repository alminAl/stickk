import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { bmiValidation } from "../../validation/FormValidation";
import SaveIcon from '@mui/icons-material/Save';
import { usePostRequest } from "../../hooks/requestMethods";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Bmi = () => {
    const { user } = useAuthContext();
    const {addData} =  usePostRequest()
    const navigate = useNavigate();
    /** form submission */
    const {
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        // setFieldValue,
        resetForm,
    } = useFormik({
        initialValues: {
            commit_type: 'weight_loss',
            height: '',
            weight: ''
        },
        validationSchema: bmiValidation,
        onSubmit: async (data, action) => {
            try {
                const body = {
                    commit_type: data.commit_type,
                    bmi: data.weight*1 / (data.height*1 * data.height*1)
                }
                addData('/api/commit/', user.token, body)
                resetForm();
                navigate('/commit')
            } catch (error) { }
        },
    });

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                <div className='my-2'>
                    <TextField
                        fullWidth
                        required
                        type="number"
                        size='small'
                        label='Height(Feet)'
                        name='height'
                        value={values.height}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.height && Boolean(errors.height)}
                        helperText={touched.height && errors.height}
                    />
                </div>
                <div className='my-2'>
                    <TextField
                        fullWidth
                        required
                        type="number"
                        size='small'
                        label='Weight(Kg)'
                        name='weight'
                        value={values.weight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.weight && Boolean(errors.weight)}
                        helperText={touched.weight && errors.weight}
                    />
                </div>
                <p className="text-xs my-2 text-sky-500">Please Upload Daily Info Regularly from Home Page</p>
                <LoadingButton
                    // fullWidth
                    variant='outlined'
                    type='submit'
                    loading={isSubmitting}
                    loadingPosition='start'
                    startIcon={<SaveIcon />}>
                    Add Current Info
                </LoadingButton>
                
            </form>
        </div>
    )
}

export default Bmi