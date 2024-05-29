import React from 'react'
import IMG1 from "./../../assets/bellingham-desktop-800x1104.webp"
import IMG2 from  "./../../assets/modric-desktop-800x1104.webp"
import "./about.css"

const players = [
  {
    name:"Bellingham",
    number:"5",
    image:IMG1,
    id:1,
    career:"nvlkfnldng",
    teams:["Dortmund FC", "Real Vardrid"]
  },
  {
    name:"Modric",
    number:"10",
    image:IMG2,
    id:2
  }
  ,
  {
    name:"Vini JR",
    number:"10",
    image:IMG2,
    id:3
  }
  ,
  {
    name:"Courtois JR",
    number:"1",
    image:IMG2,
    id:4
  }
]


export const About = () => {
  return (
    <div>
      <div className='container'>
      {
        players.map(player => (
          <div className='card' key={player.id}>
            <div className='image'>
              <img src={player.image} alt={player.name} />
            </div>
            <div className='information'>
              <div className='name'>#{player.number} {player.name}</div>
              <div className='button'>Info</div>
          </div>

          </div>
        ))
      }
      </div>
    </div>
  )
}
