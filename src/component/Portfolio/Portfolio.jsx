import React from 'react'
import './Portfolio.css'
import p1 from '../../Photo/p1.png'
import p2 from '../../Photo/p2.jpg'
import p3 from '../../Photo/p3.png'
import p4 from '../../Photo/p4.png'

const data = [
{
  id:1,
  image:p1,
  title:"Potato Leaf Disease Classification",
  github:"https://github.com/darshak1503/Potato-Leaf-Disease-Classification",
  blog:"https://darshaksondagar.blogspot.com/2022/04/potato-leaf-disease-predictions.html"
},
{
  id:2,
  image:p2,
  title:"BestHR Human Resource Management Portal",
  github:"https://github.com/darshak1503/BestHR_Human_Resource_Management_Portal",
  blog:"https://darshaksondagar.blogspot.com/2021/10/explore-what-makes-digital-hrms.html"
},
{
  id:3,
  image:p3,
  title:"Ardiuno Base Hand Gasture Control",
  github:"https://github.com/darshak1503/Ardiuno-base-hand-gasture-control",
  blog:"https://darshaksondagar.blogspot.com/2021/03/arduino-based-hand-gasture-control-of.html"
},
{
  id:4,
  image:p4,
  title:"Periodic Table",
  github:"https://github.com/darshak1503/Periodic-Table",
  blog:"https://darshaksondagar.blogspot.com/2020/10/the-periodic-table-if-you-are-looking.html"
}
]
export const Portfolio = () => {
  return (
    <section id ="portfolio" >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,blog}) => {
            return(
              <article key={id} className='portfolio__items'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
               <a href= {github} className='btn' target='_blank'>Github</a>
               <a href= {blog} className='btn btn-primary' target='_blank'>Blog</a>
               </div>
            </article>
            )

          })
        }
      </div>
    </section>
  )
}
