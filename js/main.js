function initElement()
{
  var p = document.getElementById("send");
  // NOTE: showAlert(); or showAlert(param); will NOT work here.
  // Must be a reference to a function name, not a function call.
  p.onclick = send;
};

function validateEmail(email)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function send()
{
    var p = document.getElementById("emailText");
    data = {email:p.value}
    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;
    if (validateEmail(p.value))
    {
        for(name in data)
        {
            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

        // We define what will happen if the data is successfully sent
        XHR.addEventListener('load', function(event) {
        // alert('Yeah! Data sent and response loaded.');
        });

        // We define what will happen in case of error
        XHR.addEventListener('error', function(event) {
        // alert('Oups! Something goes wrong.');
        });

        // We setup our request
        XHR.open('POST', 'https://sheetsu.com/apis/5f331a43');

        // We add the required HTTP header to handle a form data POST request
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // And finally, We send our data.
        XHR.send(urlEncodedData);
    }
    else
    {
        alert("Please enter valid email")
    }
}
