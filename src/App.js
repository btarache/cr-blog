import React from 'react';
import styled from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import Acerca from './componentes/Acerca'


const App = () => {
  return (
  <BrowserRouter>
    <ContenedorPrincipal>  
      <Header />

      <Main>
        
      <Route path="/" exact={true} component={Inicio} />
      <Route path="/blog" component={Blog} />
      <Route path="/acerca-de" component={Acerca} />
          

        {//Original ra asi, cambia por lo d arriba
         //<Route path="/" exact={true}>
          //<Inicio />
        //</Route>
        
        //<Route path="/blog">
          //<Blog />
        //</Route>
        
        //<Route path="/acerca-de">
          //<Acerca />
        //</Route> 
      }

      </Main>
    </ContenedorPrincipal>
  </BrowserRouter>
  );
}



const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

 
export default App;