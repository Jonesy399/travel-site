exports.handler = function(event, context, callback) {
    const secretContent = '
    <h3>Secret Area</h3>
    <p>Here is the <strong>secret area</strong>.</p>
    '

    let body

    if(event.body){
        body = JSON.parse(event.body)
    }else{
        body = {}
    }


    if(body.password == "javascript"){
        callback(null, {
        statusCode: 200,
        body: secretContent
        })
    }else{
        callback(null, {
        statusCode: 401
        })
    }


  }