var $$ = build('$$');

var matrix = [
    ['date format',(par)=>{
        var d1 = new Date();
        var d2 = []; var sep = [];
    
        par = par.replace('year','fullYear');
        par = par.replace('day','date');
        par = par.split(/ +/);
        par = par.map((el)=>el == '<s>'?' ':el);
    
        par.forEach((el,id)=>{
            id % 2 == 0  ?
                d2[(id)/2] = el[0].toUpperCase() + el.slice(1) :
                sep[(id -1)/2] = el;
        });
    
        d2 = d2.map((el)=>(d1[`get${el}`]()+(el == 'Month'?1:0)))
    
        d2 = d2.map((el) => el < 10 ? '0' + el : el.toString());
        d2 = sep.map((el,id) => d2[id] + el).join('') + d2[sep.length];
    
        return d2;
    }],
    ['date model', 'hours : minutes'],
    ['user names' , []]
];

$$('@matrix',matrix);

module.exports = $$;