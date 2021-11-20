import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import path from "path"
import { FiChevronsLeft, FiChevronRight } from "react-icons/fi"

import { Headers, RepositoryInfo, Issues } from "./style"
import logo from "../../assets/Logo.svg"
import { api } from "../../api/api"


interface Response{
  full_name:string,
  description:string,
  stargazers_count:number,
  forks_count:number,
  open_issues_count:number,
  owner:{
     login: string,
     avatar_url:string
    }
}

interface _Issues{
  id:number,
  title:string,
  html_url:string,
  user:{
     login: string
    }
}


const Repository: React.FC=()=> {
  
   const getParams = useParams()
   const params=path.join(String(getParams.repository),String(getParams["*"]))
  
const [ repository, setRepository ]= useState< Response | null>(null)
const [ issues, setIssues ]= useState<_Issues[]>([])

useEffect(()=>{
   api.get(`repos/${ params }`).then((item: { data: any; })=>{
       setRepository(item.data)
       console.log(item.data)
   })

 api.get(`repos/${ params }/issues`).then(item=>{
    setIssues(item.data)
  }) 

},[params])
  console.log(params)
  return (
      <>
       <Headers>
            <img src={logo} alt="erro"   />
            <Link to="/">
               <FiChevronsLeft size={16}/>
                <span>Voltar</span>
            </Link>
       </Headers>

    { repository && ( 
        <RepositoryInfo>
            
            <header>
              <img src={repository.owner.avatar_url} alt="erro"   /> 
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </header>

            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>

              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>

              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues em aberto</span>
              </li>
            </ul>

          </RepositoryInfo>
          
          ) }
        
      <Issues>
      {issues.map(item=>(
            <a  key={item.id} href={item.html_url}>
            <div>
               <strong>{item.title}</strong>
                 <p>
                     {item.user.login} 
                 </p>
               </div>
             <FiChevronRight size={20} />
          </a>
          )
         )
        }
      </Issues>

       </>
     )
}

export { Repository }