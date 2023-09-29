import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
    
    return (
        
        <Router>
            <div>

                {/* La barre de navigation commun à toutes les pages */}
                <nav>
                    <div className='nav-wrapper teal'>
                        <Link to="/" className="brand-logo center">Pokédex en REACT (Franck Ciccotti)</Link>
                    </div>
                </nav>

                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute path="/pokemons/:id" component={PokemonDetail} />
                    <Route component={PageNotFound} />
                </Switch>

            </div>
        </Router>
    )
}
  
export default App;