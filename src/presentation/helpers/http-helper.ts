import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error, statusCode: number): HttpResponse => ({
  statusCode,
  body: error
})
