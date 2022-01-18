$$ = build('$$');
// $$('socket',io())

var matrix = [
    ['socket',io()],
    ['emit',(func, ...par)=>($$('socket').emit('emit to serve', func, par))]
];

$$('@matrix',matrix);