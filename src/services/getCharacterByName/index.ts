import api from '../api'
import {RickProps} from '../Types/typesRick'


export async function getCharacterByName(name: string){
  return api.get<RickProps>('/', {
    params: {name}
  })
}