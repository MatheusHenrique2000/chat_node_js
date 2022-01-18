const {isObject} = tools;

function processError(err){
    var result = {
        msg: '',
        num: 0
    };
    var msgArray = [
        '',
        '* O campo não foi preenchido',
        '* O nome já foi selecionado'
    ];

    if(!isObject(err)){return result};
    if(typeof err.msg !== 'string' || typeof err.num !== 'string'){return result};
    if(err.msg !== 'err'){return result};

    result.msg = msgArray[err.num];
    result.num = err.num;

    return result
};

// http://localhost:3000/login/?msg=err&num=1

exports.getLogin = (req, res, next) => {
    var err = processError(req.query);
    res.render('login',err);
}