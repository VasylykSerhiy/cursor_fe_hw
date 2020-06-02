
const ress = document.querySelector('.result')
const _apiBase = 'http://swapi.dev/api';
export let pages = 1;

export const renderPlanets = async (pages) => {
  ress.innerHTML= ''
  await axios.get(`${_apiBase}/planets/?page=${pages}`)
    .then(function (res) {
      const items = res.data.results;
     
      items.map((item) => {
        ress.classList.add('planet')
        ress.innerHTML += (`
            <div class="planet__wrap">
              <h4 class="planet__name">${item.name}</h4>
              <ul class="planet__detail">
                <li class="planet__detail__item">
                  <span class="term">Population:</span>
                  <span>${item.population}</span>
                </li>
                <li class="planet__detail__item">
                  <span class="term">Rotation Period:</span>
                  <span>${item.rotation_period}</span>
                </li>
                <li class="planet__detail__item">
                  <span class="term">Diameter:</span>
                  <span>${item.diameter}</span>
                </li>
              </ul>
            </div>
        `)
      })
    })
}




