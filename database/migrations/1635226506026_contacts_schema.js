'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('cellphone', 60).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
