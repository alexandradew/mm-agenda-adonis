'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('/login', 'AuthController.login').middleware(["guest"]);
  Route.post('/logout', 'AuthController.logout').middleware(["auth"]);
}).prefix('auth')


Route.group(() => {
  Route.get('/contacts', 'ContactController.index')
  Route.get('/contacts/show/:id', 'ContactController.show')
  Route.post('/contacts', 'ContactController.store')
  Route.patch('/contacts/:id', 'ContactController.update')
  Route.delete('/contacts/:id', 'ContactController.destroy')
}).middleware(["auth", 'is:(admin)']);

Route.group(() => {
  Route.get('/meetings', 'MeetingController.index')
  Route.get('/meetings/show/:id', 'MeetingController.show')
  Route.post('/meetings', 'MeetingController.store')
  Route.patch('/meetings/:id', 'MeetingController.update')
  Route.delete('/meetings/:id', 'MeetingController.destroy')
}).middleware(["auth", 'is:(admin)']);
