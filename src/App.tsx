import React, { useEffect, useState } from 'react';
import { Card, CardBody, Text } from '@chakra-ui/react';
import Colorful from '@uiw/react-color-colorful';
import './App.css';

function App() {

  const [hex, setHex] = useState("#065a82");

  useEffect(() => {
    document.body.style.backgroundColor = hex;
  }, [hex])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="app-wrapper">
            <Card className="flex-grow-1 flex-md-grow-0">
              <CardBody>
                <Text fontSize={{ base: '2xl', sm: '3xl', md: '3xl', lg: '4xl' }} fontWeight="black" className="text-center mb-4 mb-md-5 px-md-4 px-1">BG Color Changer!</Text>

                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Colorful
                    color={hex}
                    onChange={(color) => {
                      setHex(color.hexa);
                    }}
                  />
                  <div style={{ background: hex, marginTop: 30, padding: 10 }}>
                    {hex}
                  </div>
                </div>

                <div className="mt-4 px-2">
                  <p className="text-center">Developed & Experimented by <br /><strong>Silambarasan R 🤠</strong></p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
