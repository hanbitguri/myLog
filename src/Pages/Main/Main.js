import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { CiInstagram } from "react-icons/ci";
import { AiFillHtml5,} from "react-icons/ai";
import { FaReact} from "react-icons/fa";
import { DiJavascript} from "react-icons/di";
import { SiFirebase,SiReact} from 'react-icons/si'



function Main() {
  return (
    <main className='main-page'>
      {/* <p className='main-intro'>
        React와 firebase로 구현한 게시판 입니다.<br/>
        
      </p> */}
      <div className='main-tech-stack'>

      <h2>Tech Stack</h2>
      <ul>
        <li><AiFillHtml5/>HTML/CSS/SCSS</li>
        <li><DiJavascript/>JavaScript</li>
        <li><FaReact/>React</li>
        <li><SiFirebase/>FireBase</li>
      </ul>
      </div>

      <div className='main-hooks'>
        <h2>Used Hooks</h2>
        <ul>
          <li><SiReact/>useState,useEffect</li>
          <li><SiReact/>useParam,useNavigate</li>
        </ul>
      </div>

    </main>
  )
}

export default Main