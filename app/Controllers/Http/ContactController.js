'use strict'

const Contact = use('App/Models/Contact')

class ContactController {
  async index({ request, pagination }) {
    const query = Contact.query()

    return await query.fetch();
  }

  async show({ params, response}){
    let data = await Contact.query().where('id', params.id).first()
    return data ? data : response.status(400).send({error: {message: 'Error showing the contact!'}})
  }

  async store({ request, response }) {
    const { name, lastname, email, cellphone } = request.all();

    try{      
      let newContact = await Contact.create({ name, lastname, email, cellphone })
      return newContact ? response.status(200).send({message: 'Contact saved successfully'}) : response.status(400).send({error: {message: 'Something went wrong!'}})
    }catch(error){
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }

  }

  async update({ request, params, response }) {

    try {    
      let contact = await Contact.query().where('id', params.id).first()

      if (contact) {
        let data = request.all()
        contact.merge(data)
        await contact.save()
      }

      return contact ? response.status(200).send({message: 'Contact updated successfully'}) : response.status(400).send({error: {message: 'Something went wrong!'}})
    }

    catch (error) {
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }
  }

  async destroy({ params, response }) {
    try {
           
      let contact = await Contact.query().where('id', params.id).first()
      if (contact) await contact.delete()
        return contact ? contact : response.status(400).send({error: {message: 'Something went wrong!'}})
      
    }
    catch (error) {
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }
  }
}

module.exports = ContactController
