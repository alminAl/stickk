import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { smokeValidation } from "../../validation/FormValidation";
import SaveIcon from '@mui/icons-material/Save';
import { usePostRequest } from "../../hooks/requestMethods";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Smoke = () => {
    const { user } = useAuthContext();
    const { addData } = usePostRequest()
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
            commit_type: 'smoke',
            numOfSmoke: '',
        },
        validationSchema: smokeValidation,
        onSubmit: async (data, action) => {
            try {
                addData('/api/commit/', user.token, data)
                resetForm();
                navigate('/commit')
            } catch (error) {

            }
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
                        size='numOfSmoke'
                        label='Daily number of smoke?'
                        name='numOfSmoke'
                        value={values.numOfSmoke}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.numOfSmoke && Boolean(errors.numOfSmoke)}
                        helperText={touched.numOfSmoke && errors.numOfSmoke}
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

export default Smoke