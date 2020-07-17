import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingPramError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'
import { InvalidPramError } from '../errors/invalid-param-error'
import { ServerError } from '../errors/server-error'

export class SignupController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingPramError(field), 400)
        }
        const isValid = this.emailValidator.isValid(httpRequest.body.email)
        if (!isValid) {
          return badRequest(new InvalidPramError('email'), 400)
        }
      }
    } catch (error) {
      return badRequest(new ServerError(), 500)
    }
  }
}
