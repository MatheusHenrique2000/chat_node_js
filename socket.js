const {_switch} = tools

module.exports = (io)=>{
    io.on('connect', function(socket){

        // ---

        var req = socket.client.request;
        var res = req.res;

        // --

        function emitStatusConnect(name,msg){
            objEmit = {
                class: 'info',
                name:name,
                msg:msg,
                date:$$('date format')($$('date model')),
                users:$$('user names')
            }

            io.sockets.emit('emit to client', 'user enter', objEmit);
        };
        function emitMsg(par){
            objEmit = {
                name:socket.name,
                msg:par[0],
                date:$$('date format')($$('date model'))
            }

            io.sockets.emit('emit to client', 'recive msg', objEmit);
        };
        function userEnter(par){
            _name = par[0][0];
            $$('user names').push(_name);
            // console.log($$('user names'));
            socket.name = _name;
            emitStatusConnect(_name,'entrou ás');
        };

        // ---

        socket.on('emit to serve', function(func, ...par){
            _switch(func,par,
                'user enter', (par)=>userEnter(par),
                'send msg', (par)=>{emitMsg(par)},
                'test',(par)=>(console.log(par)),
            ()=>'not have this case');
        });

        // ---

        socket.on('disconnect', function(){
            var newUserNames = $$('user names').filter(el =>el != socket.name);
            $$('user names',newUserNames);
            emitStatusConnect(socket.name,'saiu ás');
        });
    })
}