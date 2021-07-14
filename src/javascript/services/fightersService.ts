import { callApi } from '../helpers/apiHelper';
import { IFighter } from '../interfaces/IFighter';
import { IFighterDetails } from '../interfaces/IFighterDetails';

export async function getFighters() :Promise<IFighter[]>{
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    
    return apiResult as Promise<IFighter[]>;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id:string) :Promise<IFighterDetails> {
  try {
    const endpoint = `details/fighter/${id}.json`;
    const apiResult = await callApi(endpoint, 'GET');
    
    return apiResult as Promise<IFighterDetails>;
  } catch (error) {
    throw error;
  }
}

