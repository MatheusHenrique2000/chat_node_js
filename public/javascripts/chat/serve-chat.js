const {_switch} = tools;

$$('socket').on('emit to client', (func, ...par)=>{

    _switch(func,par,
        'user enter', (par)=>{
            var objEmit = par[0];
            var view = dom('#chat-view =+ div');
            var users = dom('#chat-users');

            view.className = objEmit.class;
            dom('=+ p',view).innerText = objEmit.name;
            dom('=+ p',view).innerText = objEmit.msg;
            dom('=+ p',view).innerText = objEmit.date;

            dom('div[0] =-', users);
            users = dom('=+ div', users);
            dom('=+ p',users).innerText = 'todos';
            for (const el of objEmit.users) {
                dom('=+ p',users).innerText = el;
            };
        },
        'recive msg',(par)=>{
            var objEmit = par[0];
            var view = dom('#chat-view =+ div');
            var _class;

            $$('name') == objEmit.name ?
                _class = 'msg p1' :
                _class = 'msg p2';

            view.className = _class;
            dom('=+ p',view).innerText = objEmit.name;
            dom('=+ p',view).innerText = objEmit.msg;
            dom('=+ p',view).innerText = objEmit.date;
        },
        'test', (par)=>(console.log(par)),
    ()=>'not have this case');

});