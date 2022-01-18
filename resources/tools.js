var tools = {};

tools.afterLoad = function(actions=()=>{}){
    window.addEventListener('load',actions)
};

tools._switch = function(...arg){
    var res = [], exeDf = true , key, par, _case, _default;

    /*for (const i in arguments) {
        if (Object.hasOwnProperty.call(arguments, i)) {
            const el = arguments[i];
            arg[i] = el
        }
    } */

    key = arg[0];
    par = arg[1];
    _case = arg.slice(2,arg.length - 1);
    _default = arg[arg.length -1];

    for (let i = 0; i < _case.length; i+=2) {
        const value = _case[i];
        const exe = _case[i+1]
        
        if(typeof value == 'string'){
            if(key === value){res[res.length] = exe(par);exeDf = false};
        }else
        if(typeof value == 'function'){
            if(!!(value(key))){res[res.length] = exe(par);exeDf = false};
        }else{
            console.error('type error of value');
            return
        }
    }

    exeDf && (res[res.length] = _default(par))
    return res
};

tools.isObject = function(a){
    return (typeof a !== 'undefined' ? Object.prototype.toString.call(a) == '[object Object]': false)
};


typeof module !== 'undefined' && (module.exports = tools);
typeof window !== 'undefined' && (window.tools = tools);