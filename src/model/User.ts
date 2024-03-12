export default interface User {
  uid: string
  email: string
  name: string
  provider: string
  imageUrl: string
  token?: string
}