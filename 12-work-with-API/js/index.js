const ress = document.querySelector('.result')
const _apiBase = 'https://swapi.co/api';
let pages = 1;
let nextPages = true;
let prevPages = true;
let wookiee = false;


const renderPlanets = async (pages) => {
  await axios.get(`${_apiBase}/planets/?page=${pages}`)
    .then(function (res) {
      const items = res.data.results;
      if (res.data.next === null) {
        nextPages = false;
        btnNext.classList.add('none')
      }

      if (res.data.previous === null) {
        prevPages = false
        btnPrev.classList.add('none')
      }

      if (wookiee) {
        let url = []
        res.data.results.map(item => url.push(item.url))

        let requests = url.map(url => axios.get(`${url}?format=wookiee`))
        Promise.all(requests)
          .then(res => {
            res.forEach(item => {
              loader.classList.add('none')
              ress.classList.add('planet')
              ress.innerHTML += (`
                <div class="planet__wrap">
                  <h4 class="planet__name">${item.data.whrascwo}</h4>
                  <ul class="planet__detail">
                    <li class="planet__detail__item">
                      <span class="term">Population:</span>
                      <span>${item.data.akooakhuanraaoahoowh}</span>
                    </li>
                    <li class="planet__detail__item">
                      <span class="term">Rotation Period:</span>
                      <span>${item.data.rcooaoraaoahoowh_akworcahoowa}</span>
                    </li>
                    <li class="planet__detail__item">
                      <span class="term">Diameter:</span>
                      <span>${item.data.waahrascwoaoworc}</span>
                    </li>
                  </ul>
                </div>
            `)
            })
          })
      } else {
        items.map((item) => {
          loader.classList.add('none')
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
      }
    })
}

const renderCharacters = async (film) => {
  try {
    await axios.get(`${_apiBase}/films/${film}`)
      .then(function (res) {
        let characters = res.data.characters
        let requests = undefined
        if (wookiee) {
          requests = characters.map(url => axios.get(`${url}?format=wookiee`))
        } else {
          requests = characters.map(url => axios.get(url))
        }
        Promise.all(requests)
          .then(responses => {
            responses.forEach(item => {
              ress.classList.add('person')
              loader.classList.add('none')
              const idRegExp = /\/([0-9]*)\/$/;
              if (wookiee) {
                const id = item.data.hurcan.match(idRegExp)[1]
                ress.innerHTML += (`
              <div class="person__wrap">
                <img class="person__image"
                  src='https://starwars-visualguide.com/assets/img/characters/${id}.jpg' />
                <div class="person__detail">
                  <h4 class="person__name">${item.data.whrascwo}</h4>
                  <ul class="person__detail__list">
                    <li class="person__detail__item">
                      <span class="term">Gender: </span>
                      <span>${item.data.rrwowhwaworc}</span>
                    </li>
                    <li class="person__detail__item">
                      <span class="term">Birth Year: </span>
                      <span>${item.data.rhahrcaoac_roworarc}</span>
                    </li>
                  </ul>
                </div>
              </div>
              `)
              } else {
                const id = item.data.url.match(idRegExp)[1]
                ress.innerHTML += (`
              <div class="person__wrap">
                <img class="person__image"
                  src='https://starwars-visualguide.com/assets/img/characters/${id}.jpg' />
                <div class="person__detail">
                  <h4 class="person__name">${item.data.name}</h4>
                  <ul class="person__detail__list">
                    <li class="person__detail__item">
                      <span class="term">Gender: </span>
                      <span>${item.data.gender}</span>
                    </li>
                    <li class="person__detail__item">
                      <span class="term">Birth Year: </span>
                      <span>${item.data.birth_year}</span>
                    </li>
                  </ul>
                </div>
              </div>
              `)
              }
            })
          })

      })
  } catch (err) {
    if (err.response.status === 404) {
      loader.classList.add('none')
      ress.innerHTML = (`
      <div class='err'>
        <div class='err__404'>404</div>
        <div class='err__text'>Такого фильме нет :(</div>
      </div>
      `)
    }
  }

}


