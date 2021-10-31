'use strict'

const Contact = use('App/Models/Contact')

class Seeds {
  async run() {
    if (await Contact.findBy('email', 'jose@gmail.com') === null) {
      let a = new Contact()
      a.name = 'Jose'
      a.lastname = 'Ferreira'
      a.email = 'jose@gmail.com'
      a.cellphone = '(42) 99999-9999'
      await a.save()
    }

    if (await Contact.findBy('email', 'maria@gmail.com') === null) {
      let a = new Contact()
      a.name = 'Maria'
      a.lastname = 'Almeira'
      a.email = 'maria@gmail.com'
      a.cellphone = '(41) 99999-9999'
      await a.save()
    }
  }
}

module.exports = Seeds
