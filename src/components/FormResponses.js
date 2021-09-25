import React, { useEffect, useState } from 'react';
import Header from './Header';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:3000');

const FormResponses = () => {

   const [data, setData] = useState({});
   
   useEffect(() => {
      client.onopen = () => {
         console.log('webSocket Client Connected');
      };

      client.onmessage = (message) => {
         const dataFromServer = JSON.parse(message.data);
         const stateToChange = {};

         stateToChange.answers = dataFromServer.data.answers;

         setData(stateToChange);
      };
   },[]);

   return (
      <div  className="container">
         <div className="col-md-6 offset-md-3">
            <Header title="Answers" />

            <div>
               {data && data.map(answer => (
                     <p>{answer.answer}</p>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default FormResponses;