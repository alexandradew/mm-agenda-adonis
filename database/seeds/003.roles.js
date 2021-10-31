'use strict'

const Role = use('Role')

class Seeds {
  async run() {
    if (await Role.findBy('slug', 'admin')===null) {
      let a = new Role()
      a.name = 'Administrator'
      a.slug = 'admin'
      await a.save()
    }
  }
}

module.exports = Seeds
