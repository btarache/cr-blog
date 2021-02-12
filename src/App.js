import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


const App = () => {
  return (
  <BrowserRouter>
    <div>  
      <header>
        <h1>Mi blog personal</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="acerca-de">Acerca de</Link>
        </nav>
      </header>

      <main>
        <Route path="/" exact={true}>
          <div>
            <h2>Pagina de Inicio</h2>
            <p>esta es la pagina principal</p>
          </div>
        </Route>
        
        <Route path="/blog">
          <div>
            <h2>Blog</h2>
            <ul>
              <li>Articulo #1</li>
              <li>Articulo #2</li>
              <li>Articulo #3</li>
            </ul>
          </div>
        </Route>
      

        <Route path="/acerca-de">
          <div>
            <h2>ACerca de:</h2>
            <p>esta es la pagina de acerca de...</p>
          </div>
        </Route>
      </main>
    </div>
  </BrowserRouter>
  );
}
 
export default App;