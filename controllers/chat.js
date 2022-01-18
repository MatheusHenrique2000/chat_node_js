function validateUser(name){
    var result = [false,1];
    var users = $$('user names');
    var err = '';

    if(
    (!(typeof name === 'string') && (err = 'type of nome not is string'))
    || (name === '' && (err = 'nome is null'))){
        console.log(err);
        return result;
    }

    if(users.length == 0){result = [true,0]; return result}

    for (i = 0; i < users.length; i++){
        var el = users[i];

        if(name !== el){
            (result[0] == false) && (result = [true, 0]);
        }else{
            (result = [false, 2]) && (i = users.length);
        };
    };

    return result;
}

exports.getChat = (req, res, next) => {
    res.redirect('/login')
}

exports.postChat = (req, res, next) => {
    var name = req.body['user name'];
    var val = validateUser(name)

    if(val[0]){
        res.render('../views/chat', {name:name});
    }else{
        res.redirect('/login/?msg=err&num='+val[1]);
    }
}