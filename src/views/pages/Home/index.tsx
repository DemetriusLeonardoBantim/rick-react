import React, {useEffect, useState} from 'react'
import {getCharacter} from '../../../services/InfoCharacter'
import {RickProps,TypeResultRick} from '../../../services/Types/typesRick'
import {getCharacterByName} from '../../../services/getCharacterByName'





export const Home = () => {
  const [infoRick, setInfoRick] = useState<RickProps>({results: []} as RickProps) 
  const [newName, setNewName] = useState('')


  useEffect(() => {
    async function Get(){
      const response = await getCharacter()
      setInfoRick(response.data)
    }
    Get()
  }, [])


  async function GetName(){
    const response = await getCharacterByName(newName)
    console.log(response.data)
    setInfoRick(response.data)
  }

  return(
    <div>
      <table>
        <thead>
          <th>Nome</th>
          <th>Status</th>
          <th>Especie</th>
        </thead>

        <tbody>
          {infoRick.results.length && infoRick.results.map((info:TypeResultRick) =>(
            <tr key={info.id}>
              <td>{info.name}</td>
              <td>{info.status}</td>
              <td>{info.species}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section>
        <h1>Buscar informacao pelo nome</h1>
            
        <input 
          placeholder="Informe o nome"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />

        <button type="submit" onClick={GetName} >Pesquisa</button>
      </section>

    </div>

  )
}