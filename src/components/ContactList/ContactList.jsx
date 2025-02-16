import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.container}>
      {filteredData.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          phone={item.number}
        />
      ))}
    </div>
  );
}

export default ContactList;
