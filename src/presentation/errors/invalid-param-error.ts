export class InvalidPramError extends Error {
  constructor (paramName: string) {
    super(`invalid param: ${paramName}`)
    this.name = this.constructor.name
  }
}
