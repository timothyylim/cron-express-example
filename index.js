const express = require('express')

const scheduledFunctions = require('./cronjobs')

const app = express()
app.set('port', 3100)

scheduledFunctions.initScheduledJobs()

app.listen(app.get('port'), () => {
  console.log('express server listening on', app.get('port'));
})