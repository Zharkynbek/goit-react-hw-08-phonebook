import { useState, useRef, useEffect } from "react";
import { Button } from "@material-ui/core";
import { gsap, TimelineLite, Power3 } from "gsap";

export const PhonebookForm = ({ onAddContact, contacts }) => {
  const t1 = new TimelineLite({
    delay: 0.5,
  });
  let numberRef = useRef(null);
  let nameRef = useRef(null);
  let btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      numberRef,
      1.5,
      {
        opacity: 0,
        x: -800,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeInOut,
      }
    );

    gsap.fromTo(
      nameRef,
      1.5,
      {
        opacity: 0,
        x: 800,
      },
      {
        x: 0,
        opacity: 1,
        ease: Power3.easeInOut,
      }
    );

    gsap.fromTo(
      btnRef,
      0.3,
      {
        rotate: 0,
        ease: Power3.easeInOut,
      },
      {
        rotate: 360,
        ease: Power3.easeInOut,
      }
    );
  }, [nameRef]);

  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const handleSetContact = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === state.name)) {
      alert(`${state.name} is already in contact`);
      return;
    }
    onAddContact({
      name: state.name,
      number: state.number,
    });
    setState({
      name: "",
      number: "",
    });
  };
  return (
    <div>
      <form action="submit" onSubmit={handleAddContact}>
        <div ref={(el) => (nameRef = el)}>
          <label htmlFor="">
            <p>enter name</p>
            <input
              onInput={handleSetContact}
              type="text"
              name="name"
              value={state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        </div>
        <div ref={(el) => (numberRef = el)}>
          <label>
            <p>enter phone number</p>
            <input
              onInput={handleSetContact}
              type="tel"
              name="number"
              value={state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>

        <br />
        <div ref={(el) => (btnRef = el)}>
          <Button type="submit" variant="contained" color="secondary">
            Add Contact
          </Button>
        </div>
      </form>
    </div>
  );
};
