var Ractive = require('ractive');

//var ractive = new Ractive({
//    el: '#output',
//    template: require('../templates/Clock.ract').template,
////    template: require('../templates/template.html'),
//    data: {
//        name: 'World'
//    }
//});


var Clock = Ractive.extend(require('../templates/Clock.ract'));
var Expressions = Ractive.extend(require('../templates/Expressions.ract'));
new Expressions({
    el:"#expressions",
    append:true
})