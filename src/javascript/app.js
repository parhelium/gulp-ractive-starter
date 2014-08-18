var Ractive     = require('ractive');
var Clock       = Ractive.extend(require('../components/Clock.ract'));
var Expressions = Ractive.extend(require('../components/Expressions.ract'));

new Expressions({
    el:"#expressions",
    append:true
})