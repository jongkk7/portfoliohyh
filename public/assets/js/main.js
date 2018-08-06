var popupWidth = 1000;  // 팝업의 가로 사이즈 조절

// 초기화 작업
var config = {
    apiKey: "AIzaSyBgH_9kDAWw0z_MNHSj6MQ55OjMhxWdCfg",
    authDomain: "portfoliohyh.firebaseapp.com",
    databaseURL: "https://portfoliohyh.firebaseio.com",
    projectId: "portfoliohyh",
    storageBucket: "portfoliohyh.appspot.com",
    messagingSenderId: "274962749209"
  };
var database = firebase.app().database();

$(document).ready(function(){
  setCategoryFix();
  setCategoryMenu();

});

/* 카테고리 메뉴 Setting */
var setCategoryMenu = function() {
  getData('mobile');  // 처음 페이지 오픈 시 "모바일" 메뉴 view
  setMenuClicked('1');

  $("#menu1").click(function(){
    getData('mobile');
    setMenuClicked('1');
  });
  $("#menu2").click(function(){
    getData('icon');
    setMenuClicked('2');
  });
  $("#menu3").click(function(){
    getData('print');
    setMenuClicked('3');
  });
  $("#menu4").click(function(){
    getData('video');
    setMenuClicked('4');
  });
  $("#menu5").click(function(){
    getData('illust');
    setMenuClicked('5');
  });
  $("#menu6").click(function(){
    getData('etc');
    setMenuClicked('6');
  });

}

/* 메뉴 클릭시 css 변경 */
let setMenuClicked = function(index) {
  for(let i=1 ; i <= 6 ; i++){
    $('#menu'+i).css('color','#000000');
    $('#menu'+i+'_img').attr("src","./res/ic/ic_menu"+i+".png");
    $('#menu'+i).hover(
      function(){
        $('#menu'+i+'_img').attr("src","./res/ic/ic_menu"+i+"_.png");
        $(this).css("color","#FF0000");
      },
      function(){
        $('#menu'+i+'_img').attr("src","./res/ic/ic_menu"+i+".png");
        $(this).css("color","#000000");
      }
    );
  }

  $('#menu'+index).css("color","#FF0000");
  $('#menu'+index+'_img').attr("src","./res/ic/ic_menu"+ index + "_.png");

  $('#menu'+index).hover(
    function(){
      $('#menu'+index).css("color","#FF0000");
      $('#menu'+index+'_img').attr("src","./res/ic/ic_menu"+ index + "_.png");
    },
    function(){
      $('#menu'+index).css("color","#FF0000");
      $('#menu'+index+'_img').attr("src","./res/ic/ic_menu"+ index + "_.png");
    }
  );

}

/* 카테고리에 관한 아이템 가져오기 */
var getData = function(category) {
  var ref = database.ref('items/' + category + '/');
  ref.once('value').then(function (snap) {
    $("#list").empty();
    let items = snap.val();
    for(var i=items.length-1; i >= 1; i--){
      let content = items[i];
      let title = content['title'];
      let detail_path = content['detail_path'];
      let thumbnail_path = content['thumbnail_path'];

      $("#list").append("<div><a id='"
      + title
      + "'><img src= "
      + thumbnail_path
      + " alt=''/><h3>"
      + title
      + "</h3></a></div>");

      if(category == 'video'){
        $("#"+title).click(function(){
          showVideo(title, detail_path);
        });
      } else {
        $("#"+title).click(function(){
          showPopup(detail_path, title + ' image');
        });
      }
    }
  });
}

/* 리스트 아이템 클릭시 팝업창 */
var showPopup = function(path, alt_text){
  swal({
    width: popupWidth,
    heightAuto: true,
    html:
    'You can use <b>bold text</b>, ' +
    '<img src=' + path +'/>' +
    'and other HTML tags'
  });
};
var showVideo = function(title_text, path){
  swal({
    width: popupWidth,
    heightAuto: true,
    html: '<iframe width="90%" height="400" src='
          + path
          + ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
  });
}

/* 카테고리 메뉴 상단에 고정시키기 */
var setCategoryFix = function(){
  var categoryBar = $("#category").offset();

  $(window).scroll(function(){
    var scrollY = $(document).scrollTop();
    var bar = $("#category");
    var fix = $("#list");

    var width = $(window).width();
    var a = 0;
    if( width <= 950 && width > 650 ){
      a = 77;
    } else if( width <= 650 ){
      a = 0;
    }

    if(scrollY > categoryBar.top + a){
      bar.removeClass("category");
      bar.addClass("category_fixed");
      $(".dropdown").css("visibility","visible");
    }else{
      bar.addClass("category");
      bar.removeClass("category_fixed");
      $(".dropdown").css("visibility","hidden");
      // fix.removeClass("category_contents");
    }
  });
}
