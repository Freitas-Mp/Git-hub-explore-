import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi"
import { Title, Form , Repository, Error} from "./style";
import logo from "../../assets/Logo.svg"
import { api } from "../../api/api"
import { Link } from "react-router-dom"

interface Response{
  full_name:string,
  description:string,
  owner:{
     login: string,
     avatar_url:string
    }
}

const Dashbord: React.FC=()=>{


  const [getRepo,setGetRepo]=useState('')
  const [inputError, setInputError]=useState('')
  const [repoList,setRepoList]=useState<Response[]>(()=>{
      const getListToLocalstore=localStorage.getItem("@GithubExplore:Repository")
      if(getListToLocalstore){
        return JSON.parse(getListToLocalstore)
      }else{
        return []
      }
  })

  useEffect(()=>{
     localStorage.setItem("@GithubExplore:Repository",JSON.stringify(repoList))
  },[repoList])

  async function addRepository(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    if(!getRepo){
       setInputError("Prenche o campo de pesquisa")
       return
    }

    try{
        const response=await api.get<Response>(`repos/${getRepo}`)
       setRepoList([...repoList,response.data])
       setInputError("")
    }catch{
      setInputError(`Este ${getRepo} Repositório não existe`)
    }
    
}

return (
    <>
        <img src={ logo } alt="logo error"/>
        
        <Title> Explore repositórios no github </Title>
          <Form hasError={!!inputError} onSubmit={addRepository}>
              <input value={getRepo} onChange={e=>setGetRepo(e.target.value)} placeholder="Digite aqui"/>
              <button type="submit">Pesquisar</button>
          </Form>
          <Error>
             { inputError }
          </Error>
          <Repository>

              {
                repoList.map(item=>(
                  <Link key={item.full_name} to={`repositories/${item.full_name}`}>
                    <img src={item.owner.avatar_url} alt={item.owner.login}  />
                    <div>
                      <strong>{item.full_name}</strong>
                      <p>
                         { item.description }
                      </p>
                    </div>
                    <FiChevronRight size={20} />
                  </Link>)
                )
              }

           
          </Repository>
      </>
     )
  }

export { Dashbord }