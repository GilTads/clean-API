export class UndefinedParamError extends Error {
  constructor (paramName: string) {
    super(`Undefined param: ${paramName}`)
    this.name = this.constructor.name
  }
}
