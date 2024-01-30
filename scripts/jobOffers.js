class JobOffers {
  constructor(offers, jobs) {
    this.jobs = jobs;
    this.offersList = offers;
    this.createCard = this.createCard.bind(this);
    this.openLayout = this.openLayout.bind(this);

    this.init();
  }
  createCard(element) {
    const card = document.createElement('li');
    card.classList.add('offers__item', 'lazy');
    card.setAttribute('id', `card-${element.id}`);

    const cardContent = `
        <div  class="card fade-in">
          <header class="card__header">
            <h3 class="card__title">${element.title}</h3>
            <h4 class="card__salary">${element.salary}€</h4>
          </header>
          <div class="card__info">
            <p>Nazwa Firmy: ${element.companyName}</p>
            <p>Miejsce pracy: ${element.jobPlace}</p>
          </div>
          <div class="card__description">
            <h5 class="card__description-title">OPIS</h5>
            <p class="card__description-text">
              ${element.description}
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

  openLayout(id) {
    console.log(`Job offer to display with ${id}`);
  }
  init() {
    this.jobs.forEach((element) => {
      const offerCard = this.createCard(element);
      this.offersList.appendChild(offerCard);
    });

    this.cardButton = document.querySelectorAll('.card__btn');
    this.cardButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        const getCrdId = e.target.closest('.offers__item').getAttribute('id');
        this.openLayout(getCrdId);
      });
    });
  }
}

export default JobOffers;
