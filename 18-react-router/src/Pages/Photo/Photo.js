import React from 'react'

import './Photo.scss'

const photos = [
  'https://images.unsplash.com/photo-1534237403689-59d169673edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://images.unsplash.com/photo-1539923779676-1a9bddf986db?ixlib=rb-1.2.1&w=1000&q=80',
  'https://i.hurimg.com/i/hdn/75/0x0/5e030c910f254408ccb6da53.jpg',
  'https://ananasposter.ru/image/cache/catalog/poster/travel/87/7771-1000x830.jpg',
  'https://img5.goodfon.com/wallpaper/big/f/2c/patagoniia-gory-nebo-zvezdy-zhu-xiao-patagonia-mountains-sky.jpg',
  'https://img5.goodfon.ru/wallpaper/nbig/7/68/gory-dolomity-italiia-zvezdy-mlechnyi-put-durdina-michal-mou.jpg',
  'https://s1.1zoom.ru/big0/256/Mountains_Stars_Sky_Scenery_USA_Cascades_Mount_529129_1280x863.jpg',
  'https://lh3.googleusercontent.com/proxy/0TRt5ycQ29A7C_idRX_I9Z7TQCMA6ZRlUg3hJa_9VrljRnlF2xu2Pd6CNxmdLfw4Iapodbf1DAYA7k-onl8T2bXIka-hoa6z1dlaXg',
  'https://img4.badfon.ru/wallpaper/big/6/44/kollazh-noch-zvezdy-hight-gory.jpg',
  'https://s1.1zoom.ru/big0/46/Mountains_Stars_Sky_459193.jpg',
  'https://s1.1zoom.ru/big0/987/Milky_Way_Mountains_460656.jpg',
  'https://smallcaps.com.au/wp-content/uploads/2018/04/Black-Mountain-ASX-BMZ-lithium-Democratic-Republic-of-Congo-640x400.jpg'
]

export default function Photo() {
  return (
    <div className="photos">
      {
        photos.map((item, index) => (
          <img
            className="photos__img"
            alt="img_galary"
            src={item}
            key={Date.now() + index}
          />
        ))
      }
    </div>
  )
}
