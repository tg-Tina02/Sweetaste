
//愛心
var dessertLi = document.querySelectorAll(".dessert-card-group li");
// console.log(dessertLi); //這是一個陣列

var dessertLiLen = dessertLi.length; //取這個陣列的長度
// console.log(dessertLiLen);

//跑迴圈
for(var i =0;i<dessertLiLen;i++){
    //在這個檔案加一個 元素a
    var addA = document.createElement("a");
    //給這個a元素加 class="heart"
    addA.setAttribute("class","heart");
    //給這個a元素加 href="javascript:;"
    addA.setAttribute("href","javascript:;");
    //掛在哪裡
    // dessertLi[i].appendChild(addA);

    //在元素a裡面加標籤
    var heart = dessertLi[i].appendChild(addA);
    //在每個a元素(heart)裡面加一個 img 跟一個 span
    heart.innerHTML = '<img src="https://github.com/hexschool/webLayoutTraining1st/blob/master/student-week1/favorite_border.png?raw=true" alt="" class="heart-normal">'+'<span class="material-symbols-sharp">favorite</span>';
}


//jq
$(document).ready(function() {

    //點 <ul class="dessert-list"> 的li 會發生事情
    $('.dessert-list li').click(function(e) {
        $('.dessert-list li a').removeClass('active');
        $(this).find('a').toggleClass('active');
    });
    
    //點 <ul class="paging"> 的li 會發生事情
    $('.paging li:not(.first,.last)').click(function(e) {
        $('.paging li a').removeClass('active');
        $(this).find('a').toggleClass('active');
    });

    //點 <a class="heart"> 會發生事情
    $('.heart').click(function(e) {
        //裡面的 .heart-normal 會消失
        $(this).find('.heart-normal').toggleClass('d-none');
        //裡面的 .material-symbols-sharp 會出現
        $(this).find('.material-symbols-sharp').toggleClass('show');
    });

    //加入購物車按鈕
    $('.add-btn').click(function(e) {
        alert("已加入購物車！");
    });

});