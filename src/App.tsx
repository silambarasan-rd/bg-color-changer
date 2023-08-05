import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="app-wrapper">
            <Card className="flex-grow-1">
              <CardBody>
                <Text fontSize="5xl" fontWeight="black" className="m-0 text-center">BG Color Changer!</Text>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
