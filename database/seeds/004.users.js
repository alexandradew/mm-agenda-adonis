'use strict'

const User = use('App/Models/User')
const Role = use('Role')

class Seeds {
  async run() {
    let admin = await User.findBy('email', 'admin@admin.com')
    if (admin===null) {
      admin = new User()
      admin.username = 'admin'
      admin.email = 'admin@admin.com'
      admin.password = 'admin'
      await admin.save()
    }

    let roleAdmin = await Role.findBy('slug', 'admin')
    await admin.roles().detach()
    await admin.roles().attach([roleAdmin.id], (row) => {
      row.created_at = new Date()
      row.updated_at = new Date()
    })
  }
}

module.exports = Seeds
