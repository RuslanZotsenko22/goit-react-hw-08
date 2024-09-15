import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "/src/components/ContactForm/ContactForm.jsx";
import ContactList from "/src/components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import Title from "../components/Title/Title";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Your Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
