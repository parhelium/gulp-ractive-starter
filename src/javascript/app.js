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
new Clock({
    el: '#output',
    append:true
});

new Ractive({
    template:"OKO",
    el:"#output",
    append:true
})