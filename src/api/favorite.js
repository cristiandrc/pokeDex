import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

const getPokemonsFavoritesApi =  async() => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(response || "[]")
    // return response ? JSON.parse(response) : []
  } catch (error) {
    throw error
  }
}
const addPokemonFavoriteApi = async (id) => {
  try {
    const favorites = await getPokemonsFavoritesApi()
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}

const isPokemonFavoriteApi = async (id) =>{
  try {
    const response = await getPokemonsFavoritesApi()
    return response.includes(id)
  } catch (error) {
    throw error
  }
}


const removePokemonFavoriteApi = async(id) =>{
  try {
    const favorites = await getPokemonsFavoritesApi()
    const newFavorites = favorites.filter((e)=> e !== id)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
  } catch (error) {
    throw error
  }
}

export  { addPokemonFavoriteApi, getPokemonsFavoritesApi, isPokemonFavoriteApi,removePokemonFavoriteApi }