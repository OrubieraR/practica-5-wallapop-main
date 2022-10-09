import { sparrestApi } from "../SparrestApi.js"

export const getAdById = async (adId) => {
  const ad = await sparrestApi.get(`${sparrestApi.endpoints.ads}/${adId}?_expand=user`)

  return ad;
}

export const removeTweetById = async (adId) => {
  await sparrestApi.delete(`${sparrestApi.endpoints.ads}/${adId}`)
}
