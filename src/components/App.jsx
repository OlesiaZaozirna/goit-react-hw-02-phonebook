import { Component } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';


class App extends Component {
 state = {
  contacts: [],
  name: ''
}
  
  
  render() {
    return (
      <div className={CSS.Phonebook__section}>
        <h1>Phonebook</h1>
        <Phonebook/>
        <h2>Contacts</h2>
        <Filter />
        <Contacts/>

      </div>
    )
  }
}
export default App;