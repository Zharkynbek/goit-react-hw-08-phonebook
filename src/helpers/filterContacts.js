const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });
};

export default filterContacts;

export function textAnimation(text) {
  text.innerHTML = [...text.textContent]
    .map(
      (n) =>
        `<span style="letter-spacing: 0.05em;font-weight: 300;font-size: 20px;transition: all 1.5s;position: relative;display: inline-block">${
          n.trim() ? n : "&nbsp;"
        }</span>`
    )
    .join("");
  setTimeout(animateText, 1000);
  animateText();
  function rand(x) {
    return `${Math.random() * x - x * 0.5}px`;
  }
  function animateText() {
    [...text.querySelectorAll("span")]
      .map((n) => n.style)
      .forEach((n, i) => {
        setTimeout(
          () =>
            Object.assign(
              n,
              !n.opacity || +n.opacity === 1
                ? {
                    opacity: 0,
                    color: "blue",
                    transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(
                      300
                    )})`,
                  }
                : {
                    opacity: 1,
                    color: "rgb(35, 34, 40)",
                    transform: `translate3d(0, 0, 0)`,
                  }
            ),
          i * 20
        );
      });
  }
}
