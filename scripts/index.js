'use strick';
const offersArray = [
  {
    id: 1,
    title: 'Hydraulik',
    salary: '15',
    jobPlace: 'Berlin, Niemcy',
    companyName: 'Lorem Ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi.',
  },
  {
    id: 2,
    title: 'Hydraulik',
    salary: '15',
    jobPlace: 'Berlin, Niemcy',
    companyName: 'Lorem Ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi.',
  },
  {
    id: 3,
    title: 'Hydraulik',
    salary: '15',
    jobPlace: 'Berlin, Niemcy',
    companyName: 'Lorem Ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi.',
  },
  {
    id: 4,
    title: 'Hydraulik',
    salary: '15',
    jobPlace: 'Berlin, Niemcy',
    companyName: 'Lorem Ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi.',
  },
  {
    id: 5,
    title: 'Hydraulik',
    salary: '15',
    jobPlace: 'Berlin, Niemcy',
    companyName: 'Lorem Ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi.',
  },
];
class OfferCard {
  constructor(element) {
    this.element = element;
  }

  createCard() {
    const card = document.createElement('li');
    card.classList.add('offers__item', 'lazy');

    const cardContent = `
      <div class="card fade-in">
        <header class="card__header">
          <h3 class="card__title">${this.element.title}</h3>
          <h4 class="card__salary">${this.element.salary}€</h4>
        </header>
        <div class="card__info">
          <p>Nazwa Firmy: ${this.element.companyName}</p>
          <p>Miejsce pracy: ${this.element.jobPlace}</p>
        </div>
        <div class="card__description">
          <h5 class="card__description-title">OPIS</h5>
          <p class="card__description-text">
            ${this.element.description}
          </p>
        </div>
        <div class="card__btn">
          <div class="action-btn" role="button" aria-label="więcej" tabindex="0">
            <p class="action-btn__text">
              WIĘCEJ <span class="action-btn__arrow"></span>
            </p>
          </div>
        </div>
      </div>`;

    card.innerHTML = cardContent;
    return card;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const offersList = document.querySelector('.offers__list');
  offersArray.forEach((element) => {
    const offerCard = new OfferCard(element);
    const cardElement = offerCard.createCard();
    offersList.appendChild(cardElement);
  });
});
