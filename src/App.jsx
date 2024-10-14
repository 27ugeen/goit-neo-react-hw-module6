import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={css.component}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactsForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
