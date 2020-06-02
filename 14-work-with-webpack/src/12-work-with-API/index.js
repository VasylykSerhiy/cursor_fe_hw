
const ress = document.querySelector('.result')
const _apiBase = 'http://swapi.dev/api';
export let pages = 1;
let nextPages = true;
let prevPages = true;
let wookiee = false;


export const renderPlanets = async (pages) => {
  ress.innerHTML= ''
  await axios.get(`${_apiBase}/planets/?page=${pages}`)
    .then(function (res) {
      const items = res.data.results;
     
      if (wookiee) {
        let url = []
        res.data.results.map(item => url.push(item.url))

        let requests = url.map(url => axios.get(`${url}?format=wookiee`))
        Promise.all(requests)
          .then(res => {
            res.forEach(item => {
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




