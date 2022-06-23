if (localStorage.dataCount || localStorage.dataCount == null)
localStorage.datacount=0;

var link3 = crossroads.addRoute('', function() {
    query = window.location.search;
    urlParam = new URLSearchParams(query);
    var id = urlParam.get('id');
    datalength = localStorage.datacount;
    htmlText = "";
    if (dataLength > 0) {
        for (var i = 1; i <= dataLength; i++) {
            myData = localStorage.getItem("data" + i);
            myData = JSON.parse(myData);
            htmlText = htmlText + "<tr onlick='trClick(this,"
                    +i+")'><td>"
                    +myData.nickname
                    + "</td><tr>";
        }

    }
    else {
        htmlText = htmlText + "<tr><td> no data found </td><tr>";
    }
        $('#maintable tbody').html(htmlText);

        $("#maintable").show();
});



$ajax({
    type: "GET",
    url: 'https://kerbau.odaje.biz/getstaff.php,',
    data:  '',
    cache: false,
 
    success: function(datareceived){
        JSON.parse(returnedData)
        secondpage="<a href=secondpage.html?id="+employeeNumber+"'>"+email+"</a>"

        htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";

        $('#maintable tbody').html(htmlText)

     //instructions to execute when the ajax call is succeeds
    },
    error: function(){
    //instructions to execute when the ajax call is failed
    }
    }); 

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
