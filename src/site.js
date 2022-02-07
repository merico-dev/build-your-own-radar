require('./common')
require('./images/merico-logo.svg')
require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build()
