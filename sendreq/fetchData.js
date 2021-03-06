const request = require('request');
const fs = require('fs');
const fetchData = (cookie,usn,captcha,token)=> {
    // console.log("token received", token)
    var headers  = {
        "Origin": "http://results.vtu.ac.in",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent":" Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Referer": "http://results.vtu.ac.in/resultsvitavicbcs_19/index.php",
        "Cookie": `PHPSESSID=${cookie}`
    };
    
    var myJSONObject = {
        "captchacode":captcha,
        "lns":usn,
        "token": token,
        "current_url": "http://results.vtu.ac.in/resultsvitavicbcs_19/index.php"
    };
    return new Promise(function(resolve, reject) {
        request({
            url: "http://results.vtu.ac.in/resultsvitavicbcs_19/resultpage.php",
            method: "POST",
            headers: headers,
            formData :myJSONObject
        }, function (error, response, body){
            if(error) throw(error)
            resolve(body);
            // fs.writeFile("html", body, function(err) {
            //     if(err) {
            //         return console.log(err);
            //     }
            //     console.log("The file was saved!");
            // }); 
        });
       })

}

module.exports = {
    fetchData: fetchData
}