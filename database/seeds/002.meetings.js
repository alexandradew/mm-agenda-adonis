'use strict'

const Meeting = use('App/Models/Meeting')

class Seeds {
  async run() {
    if (await Meeting.findBy('id', 1) === null) {
      let a = new Meeting()
      a.name = 'Daily scrum'
      a.start_time = '08:00'
      a.finish_time = '09:00'
      a.date = '2021-11-25'
      await a.save()
    }

    if (await Meeting.findBy('id', 2) === null) {
      let a = new Meeting()
      a.name = 'Alinhamento com cliente'
      a.start_time = '10:00'
      a.finish_time = '12:00'
      a.date = '2021-10-12'
      await a.save()
    }
  }
}

module.exports = Seeds
