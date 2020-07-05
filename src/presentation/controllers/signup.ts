import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingPramError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingPramError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingPramError('email'))
    }
  }
}
