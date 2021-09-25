import React from 'react';
import Header from './Header';
import Form from './HotDogForm';

const Home = () => {
   return (
      <div  className="container">
         <div className="col-md-6 offset-md-3">
            <Header title="Form"/>
            <Form />
         </div>
      </div>
   );
};

export default Home;