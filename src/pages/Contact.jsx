import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Updated import

const initialValues = {
  name: '',
  email: '',
  message: '',
  mobile: '' 
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Z][a-zA-Z\s]*$/, 'Name should start with a capital letter and contain only alphabets and spaces.'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
    .min(10, 'Mobile number must be at least 10 digits')
    .max(10, 'Mobile number must be less than 10 digits') 
});

export const Contact = () => {
  const [state, handleSubmit] = useForm('xqazvaep');

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: 'success',
        title: 'Email sent!',
        text: 'Your message was successfully sent!',
        confirmButtonText: 'OK'
      });
    } else if (state.errors && state.errors.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong, please try again.',
        confirmButtonText: 'OK'
      });
    }
  }, [state.succeeded, state.errors]);
  

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    handleSubmit(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className='contact mt-5 p-5' id='contact'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <h2 className="heading text-center" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-in-out">
              Contact
            </h2>
            <Form className="container contactform">
              <Row className='mt-5'>
                <Col md={6}>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </Col>
                <Col md={6}>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Field
                    id="mobile"
                    name="mobile"
                    type="text"
                    placeholder="Mobile"
                    className="form-control mt-3"
                  />
                  <ErrorMessage name="mobile" component="div" className="text-danger" />
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    placeholder="Enter your message here..."
                    className="form-control mt-3"
                    style={{ height: '150px' }}
                  />
                  <ErrorMessage name="message" component="div" className="text-danger" />
                </Col>
              </Row>

              <Row className="pt-3">
                <Col md={12} className="text-center">
                  <Button
                    color="success"
                    className="contact-button mt-4"
                    type="submit"
                    disabled={isSubmitting || state.submitting}
                  >
                    {isSubmitting || state.submitting ? 'Sending...' : 'Submit'}
                  </Button>
                </Col>
              </Row>
            </Form>

       
            <div className="contact-details mt-5 text-center">
              <h3 className="mb-4">Contact Information</h3>
              <Row className="justify-content-center">
                <Col md={4} className="d-flex align-items-center mb-3">
                  <FaEnvelope size="2em" className="me-3 text-danger" />
                  <a href="mailto:gopichandbhukya1999@gmail.com" className="text-dark">gopichandbhukya1999@gmail.com</a>
                </Col>
                <Col md={4} className="d-flex align-items-center">
                  <FaPhone size="2em" className="me-3 text-primary" />
                  <a href="tel:+1234567890" className="text-dark">+91-7036830616</a>
                </Col>
              </Row>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};
