// hide/show different languages of résumé and save current lang in localeStorage
// toggles navbar toggle-"icon".
$(".navbar").click(function(event) {   
    let choice = event.target.value;

    if(choice != undefined && choice != 0){
        $(".résumé").hide();
        $("." + choice).show();
        localStorage.setItem("load", choice)
    }

});


// load language from localestorage, if none exist, english by default.
let load = localStorage.getItem("load");
$("." + load).show();
if(load == null){
    $(".english").show();
}