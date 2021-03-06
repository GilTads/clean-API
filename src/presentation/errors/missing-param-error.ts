export class MissingPramError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = this.constructor.name
  }
}
