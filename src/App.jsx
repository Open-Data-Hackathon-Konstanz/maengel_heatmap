import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './container/Layout';
import { dataSources } from './datasources';


function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {dataSources.map(source => <Route key={source.id} path={source.id} element={React.createElement(source.element, {source})} />)}
            </Routes>
          </Layout>
        </BrowserRouter>
        
      </ChakraProvider>
    </div>
  );
}

export default App;
