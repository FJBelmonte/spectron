const Application = require('spectron').Application
const assert = require('assert')

const myApp = new Application({
  //path: '/Applications/electron-auto-updater.app/Contents/MacOS/electron-auto-updater'
  path: '/Applications/Nativesec.app/Contents/MacOS/Nativesec'
})

myApp.start().then(function () {
    // Check if the window is visible
    return myApp.browserWindow.isVisible()
  }).then(function (isVisible) {
    // Verify the window is visible
    assert.equal(isVisible, true)
  }).then(function () {
    // Get the window's title
    return myApp.client.getTitle()
  }).then(function (title) {
    // Verify the window's title
    assert.equal(title, 'My App')
  }).then(function () {
    // Stop the application
    return myApp.stop()
  }).catch(function (error) {
    // Log any failures
    console.error('Test failed', error.message)
  })