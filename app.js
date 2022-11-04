const resumenCards = [
  {
    title: "Desarrollador JR.",
    company: "Freelance.com",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
  {
    title: "Mensajero.",
    company: "Freelance.com",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
  {
    title: "Fotografo.",
    company: "Freelance.com",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
  {
    title: "Desarrollador JR.",
    company: "Google",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
  {
    title: "Desarrollador SR.",
    company: "Amazon.com",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
  {
    title: "Desarrollador SR.",
    company: "facebook",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam dicta nihil excepturi eius.",
  },
];

/**
 Function ForEach -> ciclo repetitivo para recorrer arreglos
 Append => agregar un nuevo elemento de HTML al DOM -> Documento
 AppenChild (usada en este ejercicio) Agrega un elemento de HTML como HIJO del elemeto seleccionado  
 */

resumenCards.forEach((card) => {
  const resumenCard = document.createElement("div");
  resumenCard.classList.add("resumen-card");
  const content = ` <h3 class="card-title">${card.title}</h3>
                    <h4 class="position">${card.company}</h4>
                    <p class="card-info">${card.info}</p>`;
  resumenCard.innerHTML = content;
  document.querySelector(".resumen-cargo__container").appendChild(resumenCard);
});
