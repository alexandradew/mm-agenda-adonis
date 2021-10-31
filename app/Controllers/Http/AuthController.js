'use strict'

const User = use('App/Models/User')

class AuthController {
  async login({request, response, auth}) {
    const { email, password } = request.all()

    let u = await User.findBy('email', email)
      try {
        let data = await auth.attempt(email, password)
        data['user'] = u;
        return response.send({ data })
      }  catch(error){
        return response.status(400).send({error: {message: 'Error processing login!', e: error.toString()}})
      }
    
  }

  async logout({request, response, auth}) {
    try {
      let token = request.input('token')
      if (!token) token = request.header('token')
        await auth.authenticator('jwt').revokeTokens([token], true)
        return response.status(200).send({})
    } catch (error) {
      return response.status(400).send({ error: { message: 'Não foi possivel efetuar o logout!', e: error.toString()}})
    }
  }
}

module.exports = AuthController
