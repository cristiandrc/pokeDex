import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

const getPokemonsFavoritesApi =  async() => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(response || [])
  } catch (error) {
    throw error
  }
}
const addPokemonFavorite = async (id) => {
  try {
    const favorites = await getPokemonsFavoritesApi()
    favorites.push(id)
    await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites))
  } catch (error) {
    throw error
  }
}


export  { addPokemonFavorite, getPokemonsFavoritesApi}