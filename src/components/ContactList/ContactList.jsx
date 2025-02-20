import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredData } from "../../redux/contactsSlice";

function ContactList() {
  const filteredData = useSelector(selectFilteredData);

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
