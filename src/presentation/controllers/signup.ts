import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingPramError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidPramError } from '../errors/invalid-param-error'
let fieldToReturn: any

export class SignupController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        console.log('Entrou aqui')
        fieldToReturn = field
      }
      if (!isValid) {
        return badRequest(new InvalidPramError('email'))
      }
    }
    return badRequest(new MissingPramError(fieldToReturn))
  }
}
