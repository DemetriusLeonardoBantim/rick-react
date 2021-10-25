import api from '../api'
import {RickProps} from '../Types/typesRick'


export async function getCharacter(){
  return api.get<RickProps>('/')
}