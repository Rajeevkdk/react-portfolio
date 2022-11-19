import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* UI/UX Design */}
        <article className='service'>
          <div className='service__head'>
            <h3>
              UI/UX Design
            </h3>
          </div>

          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon' />
            <p>Design decent Ui/Ux using Figma.</p>
            </li>

            {/* <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of UI/UX Design */}


        {/* Web Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>
              Web Development
            </h3>
          </div>

          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon' />
            <p>HTML, CSS, Boostrap</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>JavaScript With Vue.js and React.js framework </p>
            </li>

            {/* <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of Web Development */}


        {/* Content Creation */}
        <article className='service'>
          <div className='service__head'>
            <h3>
              Content Creation
            </h3>
          </div>

          <ul className='service__list'>
            <li>
            <BsCheck className='service__list-icon' />
            <p>Decent Graphics Designing Using Adobe Photoshop.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Logo Design.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Banner Design.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Post for Social Media.</p>
            </li>

            {/* <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services