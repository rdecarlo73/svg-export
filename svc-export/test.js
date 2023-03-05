const svgexport = require('./svg-export.cjs');

const height = 64
const width = 64
let input = '../canvg-test/example.svg'
let output = '../canvg-test/example.png'

// The code you place here will be executed every time your command is executed
svgexport.exportSVG(output, input, height, width)