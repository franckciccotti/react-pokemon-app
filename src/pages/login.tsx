import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}

const Login: FunctionComponent = () => {

  const history = useHistory();

  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté. (Login = pikachu / Mot de passe = pikachu)');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if(form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if(form.password.value.length < 6) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if(!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        }
        
        history.push('/pokemons');
        
      });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* Form message */}
                {message && <div className="form-group">
                  <div className="card-panel grey lighten-5">
                    {message}
                  </div>
                </div>}
                {/* Field username */}
                <div className="form-group">
                  <label htmlFor="username">Identifiant (login = pikachu)</label>
                  <input id="username" type="text" name="username" className="form-control" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.username.error &&
                  <div className="card-panel red accent-1"> 
                   {form.username.error} 
                  </div>} 
                </div>
                {/* Field password */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe (mdp = pikachu)</label>
                  <input id="password" type="password" name="password" className="form-control" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.password.error &&
                  <div className="card-panel red accent-1"> 
                   {form.password.error} 
                  </div>} 
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>

            <div>
                
                <h6><strong>Cours UDEMY "Développeur React | Formation complète" de Simon DIENY (Formateur Javascript Fullstack)</strong></h6>
                <h6>Notions React apprises :</h6>
                <ol>
                    <li>Les composants</li>
                    <li>Le Dom virtuel avec JSX</li>    
                    <li>Les Props</li>
                    <li>Les Hooks personnalisés</li>
                    <li>Les Routes</li>
                    <li>Les Formulaires</li>
                    <li>Requêtes HTTP (Les services CRUD / API Rest via librairie json server)</li>
                    <li>Autocomplétion (Un service personnalisé sur champ de recherche)</li>
                    <li>Authentification avec formulaire de connexion</li>
                    <li>Déploiement avec Google Firebase Hosting</li>
                </ol>
                <ul>
                    <li>Bonus : ECMAScript 2015 ES6 (promesses, let/const, fonctions fléchées, Set/Map,...)</li>
                </ul>

                <strong>Le Github : </strong><a href="https://github.com/franckciccotti/react-pokemon-app" target='blanc' >https://github.com/franckciccotti/react-pokemon-app</a>

            </div>

        </div>
      </div>
    </form>
  );
};
 
export default Login;