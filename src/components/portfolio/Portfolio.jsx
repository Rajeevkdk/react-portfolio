import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/portfolio.jpeg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/Rajeevkdk/react-portfolio.git',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Game',
    github: 'https://github.com/Rajeevkdk/guess-my-number.git',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 5,
    image: IMG3,
    title: 'Game2',
    github: 'http://github.com'
  },
  {
    id: 6,
    image: IMG3,
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