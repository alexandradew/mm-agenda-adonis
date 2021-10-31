'use strict'

const Meeting = use('App/Models/Meeting')

class Seeds {
  async run() {
    if (await Meeting.findBy('id', 1) === null) {
      let a = new Meeting()
      a.name = 'Daily'
      a.start_time = '8:00'
      a.finish_time = '9:00'
      a.date = '2021-11-25'
      await a.save()
    }

    if (await Meeting.findBy('id', 2) === null) {
      let a = new Meeting()
      a.name = 'Daily 2'
      a.start_time = '10:00'
      a.finish_time = '12:00'
      a.date = '2021-10-12'
      await a.save()
    }
  }
}

module.exports = Seeds
