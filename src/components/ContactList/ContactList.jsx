import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div className={s.container}>
      {filteredData.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.phone}
        />
      ))}
    </div>
  );
}

export default ContactList;
