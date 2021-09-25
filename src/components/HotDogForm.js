import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';


const HotDogForm = () => {

   const [answer, setAnswer] = useState('');
   const [result, setResult] = useState(null);
   const [formError, setFormError] = useState('');
   const [isValid, setIsValid] = useState(false);

   const onFormSubmit = event => {
      event.preventDefault();

      console.log(isValid);
      if (isValid) {
         axios
         .post('/sendanswer', {answer})
         .then(response => {
            setResult(response.data);
            setAnswer('');
         })
         .catch(() => {
            setResult({success: false, message: 'Something went wrong. Try again later'});
         });
      }
   };

   const validateForm = () => {
      console.log({answer});

      if(answer === "") {
         setFormError('Cannot be empty');
         setIsValid(false);
      } 
      else if(answer === "yes" || answer === "I don't know" || answer === "no" || answer === "that's fine") {
         setFormError('Invalid Input');
         setIsValid(false);
      }
      else {
         setFormError('');
         setIsValid(true);
      }
   }

   const onInputChange = event => {
      setAnswer(event.target.value);
   };

   return (
      <div>
         <h2>Is a hot dog a sandwich? Why?</h2>
         {
            isValid 
            ? <Alert variant="success">Answer Accepted</Alert>
            : formError !== '' ? <Alert variant="danger">{formError}</Alert> : <div></div>
         }

         <form onSubmit={onFormSubmit}>
            <Form.Group controlId="answer">
               <Form.Label>Answer</Form.Label>
               <Form.Control
                  type="text"
                  name="answer"
                  value={answer}
                  placeholder="Enter your answer"
                  onChange={onInputChange}
               />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={validateForm}>
               Submit
            </Button>
         </form>
      </div>
   );
};

export default HotDogForm;
