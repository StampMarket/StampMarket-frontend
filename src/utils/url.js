import { baseURL } from "./request.js";

export const baseAddress = baseURL

export const test = '/test'

// Stamp related

export const stampGroup = baseURL + '/stamp'

export const listStamp = stampGroup + '/list'

export const addStamp = stampGroup + '/add'

export const deleteStamp = stampGroup + '/delete'

export const modifyStamp = stampGroup + '/modify'

export const priceStamp = stampGroup + '/price'