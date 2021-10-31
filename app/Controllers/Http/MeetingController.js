'use strict'

const Meeting = use('App/Models/Meeting')

class MeetingController {
  async index({ request, pagination }) {
    const query = Meeting.query()

    query.orderBy('date', 'asc')

    return await query.fetch();
  }

  async show({ params, response}){
    let data = await Meeting.query().where('id', params.id).first()
    return data ? data : response.status(400).send({error: {message: 'Error showing the meeting!'}})
  }

  async store({ request, response }) {
    const { name, start_time, finish_time, date } = request.all();

    try{      
      let newMeeting = await Meeting.create({ name, start_time, finish_time, date })
      return newMeeting ? response.status(200).send({message: 'Meeting saved successfully'}) : response.status(400).send({error: {message: 'Something went wrong!'}})
    }catch(error){
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }

  }

  async update({ request, params, response }) {
    try {
      let meeting = await Meeting.query().where('id', params.id).first()
      if (meeting) {
        let data = request.all()
        meeting.merge(data)
        await meeting.save()
      }
      return meeting ? response.status(200).send({message: 'Meeting updated successfully'}) : response.status(400).send({error: {message: 'Something went wrong!'}})
    }
    catch (error) {
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }
  }

  async destroy({ params, response }) {
    try {
           
      let meeting = await Meeting.query().where('id', params.id).first()
      if (meeting) await meeting.delete()
        return meeting ? meeting : response.status(400).send({error: {message: 'Something went wrong!'}})
      
    }
    catch (error) {
      return response.status(400).send({error: {message: 'Something went wrong!', e: error.toString()}})
    }
  }
}

module.exports = MeetingController
