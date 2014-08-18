var Ractive             = require('ractive');
var Clock               = Ractive.extend(require('../components/Clock.ract'));
var OneFileComponent    = Ractive.extend(require('../components/one-file/OneFile.ract'));
var ManyFilesComponent  = Ractive.extend(require('../components/many-files/ManyFiles.ract'));

new OneFileComponent({
    el:"#oneFileComponent",
    append:true
})

new ManyFilesComponent({
    el:"#manyFilesComponent",
    append:true
})