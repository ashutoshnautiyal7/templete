function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('service_se7e65l','template_tbs5c8b',tempParams)
    .then(function(res){
        console.log('success', res.status);
    })
}