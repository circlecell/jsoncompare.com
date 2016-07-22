const bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    let rawBody = '';

    req.on('data', function(chunk) {
        rawBody += chunk;
    });

    req.on('end', function() {
        if(rawBody) {
            req.rawBody = rawBody;
            req.jsonBody = JSON.parse(rawBody);
        }

        next();
    });
});




require('./routes.js')(app);

app.use(function(error, req, res, next) {
    if (error) {
        res.json(400, {
            error: String(error)
        });
    }
});

app.listen(app.get('port'));





/*var express = require('express');
var body_parser = require('body-parser')
var http = require('http');
var path = require('path');
var aws = require('aws-sdk');

var app = express();
app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.urlencoded())

var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || "AKIAJYCANFVYHKUIE5TQ" ;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY  || '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';
var S3_BUCKET = process.env.S3_BUCKET || 'jsonlintcom';

app.listen(app.get('port'));

app.get('/sign_s3', function(req, res){
    aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
    var s3 = new aws.S3();
    var s3_params = {
        Bucket: S3_BUCKET,
        Key: req.query.file_name,
        Expires: 60,
        ContentType: req.query.file_type,
        ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3_params, function(err, data){
        if(err){
            console.log(err);
        }
        else{
            var return_data = {
                signed_request: data,
                url: 'https://'+S3_BUCKET+'.s3.amazonaws.com/'+req.query.file_name
            };
            res.write(JSON.stringify(return_data));
            res.end();
        }
    });
});

app.get('/account', function(req, res){
    res.send(`<input type="file" id="file_input"/>
<p id="status">Please select a file</p>
<img id="preview" src="/images/default.png" />

<form method="POST" action="/submit_form/">
    <input type="hidden" id="avatar_url" name="avatar_url" value="/public/default.png" />
    <input type="text" name="username" placeholder="Username" /><br />
    <input type="text" name="full_name" placeholder="Full name" /><br /><br />
    <input type="submit" value="Update profile" />
</form>

<script>
(function() {
document.getElementById("file_input").onchange = function(){
    var files = document.getElementById("file_input").files;
    var file = files[0];
    if(file == null){
        alert("No file selected.");
    }
    else{
        get_signed_request(file);
    }
};

function get_signed_request(file){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sign_s3?file_name="+file.name+"&file_type="+file.type);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                var response = JSON.parse(xhr.responseText);
                console.log(file, response.signed_request, response.url)
                upload_file(file, response.signed_request, response.url);
            }
            else{
                alert("Could not get signed URL.");
            }
        }
    };
    xhr.send();
}

function upload_file(file, signed_request, url){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", signed_request);
    xhr.setRequestHeader('x-amz-acl', 'public-read');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("preview").src = url;
            document.getElementById("avatar_url").value = url;
        }
    };
    xhr.onerror = function() {
        alert("Could not upload file.");
    };
    xhr.send(file);
}
})();
</script>
`)
    //res.render('account.html');
});*/
