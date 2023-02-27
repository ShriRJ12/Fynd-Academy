var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'shrikantjagtap0194@gmail.com',
        pass:'Shri@3061' 
    }

});
var mailOptions={
    from:'shrikantjagtap0194@gmail.com',
    to:'1903061@ritindia.edu',
    subject:'Sending Email using Node.js',
    text:'That was easy',
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email send:' + info.response);
    }
});