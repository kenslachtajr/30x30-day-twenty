export interface Fruit {
  id: null,
  name: string,
  details: string,
  tasteLevel: number,
  approved: boolean
}

export const emptyFruit: Fruit = {
  id: null,
  name: '',
  details: '',
  tasteLevel: null,
  approved: null
}

export interface User {
  id: null,
  email: string,
  password: string
}
