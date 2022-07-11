import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

// *** models
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = () => {

    let task = new Task()

    const initialValues = {
        name: "",
        description: "",
        completed: false,
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(4, 'Name too short')
                .max(12, 'Name too long')
                .required('Task Name is required'),
            description: Yup.string()
                .required ('Description is required'),
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Task Form</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues= { initialValues }
                // *** Yup Validation Schema ***
                validationSchema = {taskSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (  
                    <Form>
                        <label htmlFor="name">Task Name</label>
                        <Field id="name" type="text" name="name" placeholder="Task Name" />
                        
                        {/* Username Errors */}
                        {
                            errors.name && touched.name && 
                            (
                                <ErrorMessage name="name" component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor="description">Description</label>
                        <Field id="description" type="text" name="description" placeholder="Task Description" />
                        
                        {/* Username Errors */}
                        {
                            errors.description && touched.description && 
                            (
                                <ErrorMessage name="description" component='div'></ErrorMessage>
                            )
                        }
                        <button type="submit">New task</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>): null}

                    </Form>
                )
            }

            </Formik>
            
        </div>
    );
}

export default TaskFormik;
