import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingPramError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
let fieldToReturn: any

export class SignupController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        fieldToReturn = field
      }
    }
    return badRequest(new MissingPramError(fieldToReturn))
  }
}
