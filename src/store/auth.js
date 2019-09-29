// import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
  // return sessionStorage.get(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
  // return sessionStorage.set(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
  // return sessionStorage.remove(TokenKey)
}
