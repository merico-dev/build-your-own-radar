require('./common')
require('./images/merico-logo.svg')
require('./images/radar_legend.png')
require('./frontend.json')
require('./gtm.js')

// const GoogleSheetInput = require('./util/factory')

// GoogleSheetInput().build()

const JSONSheetInput = require('./util/factory-by-json')

JSONSheetInput('/images/frontend.json').build()
