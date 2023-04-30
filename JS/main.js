
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var address = document.getElementById("address");
var visit = document.getElementById("visit");
var nameMassage = document.getElementById("name-massage");
var urlMassage = document.getElementById("url-massage");


var bookmarkList = [];

if(localStorage.getItem('bookmarkList') != null){
    bookmarkList =  JSON.parse(localStorage.getItem('bookmarkList'));
    displayBookMarkList();
}

function Submit(){
    var mark = {
        address : siteName.value,
        visit : siteUrl.value,
    }
    
    if (siteName.value == "" ){
        nameMassage.style.display = "block";
    }
    if (siteUrl.value == "" ){
        urlMassage.style.display = "block";
    }
    else{
        bookmarkList.push ( mark );
        nameMassage.style.display = "none";
        urlMassage.style.display = "none";
        localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList));
        displayBookMarkList();
        clear();
    }
}
function displayBookMarkList(){
    var box = "";
    for(var i = 0 ; i < bookmarkList.length ; i++){
        box += 
        `<div class="bgof px-4 py-5 d-flex text-black">
        <h5 id="address" class="w-50 py-2">${bookmarkList[i].address}</h5>
        <div class="btn-box">
        <a class="btn btn-primary m-1 fs-5" href="${bookmarkList[i].visit}" target="blank" id="visit">visit</a>
        <button class="btn btn-danger m-1 fs-5" onclick="deleted(${i})">Delete</button>
        </div>
        </div>`
    }
    document.getElementById('bookmarkList').innerHTML = box;
}
function deleted(i){
    bookmarkList.splice ( i , 1 );
    displayBookMarkList()
    localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList));
}
function clear(){
    siteName.value = "";
    siteUrl.value = "";
}


