import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Game',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Game2',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Game2',
    github: 'http://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Works
      </h5>
      <h2>
        Portfolio
      </h2>

      <div className='container portfolio__container'>
        
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div> 
          <h3>
            {title}
          </h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'> Github</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio