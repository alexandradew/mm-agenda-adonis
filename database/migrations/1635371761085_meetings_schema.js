'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetingsSchema extends Schema {
  up () {
    this.create('meetings', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('start_time', 80).notNullable()
      table.string('finish_time', 80).notNullable()
      table.date('date', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('meetings')
  }
}

module.exports = MeetingsSchema
