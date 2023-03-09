$(window).on('load',function () {
    $('.loaderWrap').fadeOut();
});

// 해당페이지 gnb li에 on
$(function () {
	var pageUrl = window.location.href; //창의 url을 가져온다.
	//$(window).on('unload', function(){ //load가 되었을때 실행
		 if (//1차메뉴만 클릭시
            pageUrl.indexOf('donor') > -1 || pageUrl.indexOf('menuPageLink') > -1 || pageUrl.indexOf('selectBaseSearchForm') > -1 || pageUrl.indexOf('selectBatchMainView') > -1 || pageUrl.indexOf('linkInfoRegis') > -1 || pageUrl.indexOf('#') > -1) { 
			$('.hamContWrap').addClass('hamContWrapON');
			$('.hamWrap__icoWrap input:checkbox').prop("checked", true);
			$('.hamCont').addClass('on_ham');
		}else if (//url에 입출고관리
			pageUrl.indexOf('donor') > -1 || pageUrl.indexOf('resourceReceiptIntro') > -1 || pageUrl.indexOf('resourceReceipt') > -1 || pageUrl.indexOf('resourceInspection') > -1 || pageUrl.indexOf('consent') > -1 || pageUrl.indexOf('snp') > -1 || pageUrl.indexOf('qualityControl') > -1 || pageUrl.indexOf('resourceDistribute') > -1) { 
			$('nav .gnb li').eq(0).addClass('on');
		}else if (//자원관리
			pageUrl.indexOf('menuPageLink') > -1 || pageUrl.indexOf('resourceDivision') > -1) {
			$('nav .gnb li').eq(1).addClass('on');
		}else if (//스마트검색
			pageUrl.indexOf('selectBaseSearchForm') > -1 || pageUrl.indexOf('frozenCart') > -1 || pageUrl.indexOf('snpCompareSearch') > -1 || pageUrl.indexOf('inOutView') > -1 || pageUrl.indexOf('atchmnFile') > -1) {
			$('nav .gnb li').eq(2).addClass('on');
		}else if (//일괄처리
			pageUrl.indexOf('selectBatchMainView') > -1 || pageUrl.indexOf('selectBatchStatusView') > -1) {
			$('nav .gnb li').eq(3).addClass('on');
		}else if (//환경설정
			pageUrl.indexOf('linkInfoRegis') > -1 || pageUrl.indexOf('projectManagement') > -1 || pageUrl.indexOf('protocol') > -1 || pageUrl.indexOf('storageMain') > -1 || pageUrl.indexOf('storageEquipmentHistory') > -1 || pageUrl.indexOf('monitorMain') > -1 || pageUrl.indexOf('userSetting') > -1) {
			$('nav .gnb li').eq(4).addClass('on');
		}else if (//도움말
			pageUrl.indexOf('statisticsMainView') > -1 || pageUrl.indexOf('resourceReceiptForTablet') > -1 || pageUrl.indexOf('resourceDistributeForTablet') > -1) {
			$('nav .gnb li').eq(5).addClass('on');
		}else if(//개별2depth페이지
			pageUrl.indexOf('resourceReceipt') > -1){ 
			$('.hamAcco__twoDepth a').parent().slideDown();
		}
		else {
		}

// 현재페이지 햄버거에 on
	var url = window.location.pathname,
	urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");  
	$('nav .gnb li a').each(function () {
		if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
			$(this).addClass('menuActive');
			$(this).parent().addClass('on');
		}
	});
	//$('.hamWrap__icoWrap input:checkbox').prop("checked", true);
	//$('.hamContWrap').addClass('hamContWrapON');
	//$('.hamCont').addClass('on_ham');
	$('.hamAcco__twoDepth a').each(function () {
		if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
			$(this).css({'color':'#fff','background':'background: var(--darkblue);'});
			$(this).parent().prev().addClass('on_hamAcco__oneDepth');
			$(this).parent().slideDown();
		}
	});            
});

// gnb
$('.gnb li a').click(function(){
    $(this).addClass('on');
},function(){
    $(this).removeClass('on');
});

// hamburger
$(document).on("click", ".btn_ham", hamToggle);
function hamToggle(){
    $('.hamCont').toggleClass('on_ham'); 
    //$('.hamContWrap').fadeToggle(); 
    //$('html, body').toggleClass('noScroll'); 
    $('.hamContWrap').toggleClass('hamContWrapON');
}

// 아코디언(햄버거) 
$(function(){
    $(".hamAcco__oneDepth").click(function() {
        $(this).toggleClass('on_hamAcco__oneDepth');
        var next_ans = $(this).next();
        $(next_ans).slideToggle();
        if ($(next_ans).is(':visible') === true) {
            $(".hamAcco__twoDepth").not($(next_ans)).slideUp();
            $(".hamAcco__oneDepth").not($(this)).removeClass("on_hamAcco__oneDepth");
        }
    });
    
    $('html').click(function(e) {   
        if($(e.target).hasClass("hamContWrap")) {
            $('.hamContWrap').removeClass('hamContWrapON');
            $('.hamCont').removeClass('on_ham'); 
            $('.hamWrap__icoWrap input').prop('checked', false);
        }
    }); 
});



/* 팝업 */
function fnShowPop(sGetName){
    var $layer = $("#"+ sGetName);
    $layer.addClass("on");
}
function fnHidePop(sGetName){
    $("#"+ sGetName).removeClass("on");
}

$(document).mouseup(function (e){
    var LayerPopup = $(".dimmodal");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("on");
    }

   
});

/* 팝업 _divicde */
$(function(){
    $('.DivideContWrap .listCont li').click(function(){
        var DivideContWrap_Index = $(this).index();
        $('.DivideContWrap .listCont li').removeClass('on');
        $(this).addClass('on');
        $(this).parents('dl').siblings('dl').find('li').eq(DivideContWrap_Index).addClass('on');
    });
});




// Layout
// $('.moveLayout').layout();
function showEast(){
    $('.moveLayout').layout('expand','east');

}
function hideEast(){
    $('.moveLayout').layout('collapse','east');
}
function showSouth(){
    $('.moveLayout_forBottom').layout('expand','south');
}
function hideSouth(){
    $('.moveLayout_forBottom').layout('collapse','south');
}

$(function(){
    // showAcco
    $('.showAcco').datagrid({
        onClickRow: function(){
            //$(this).parents('.AccoWrap').css('border','3px solid red');
            var panelsAcco = $(this).parents('.AccoWrap').find('.easyui-accordion').accordion('panels');
            $.each(panelsAcco, function(){
                this.panel('expand'); //모두 닫으려면 collapse
            });
    },
});
       

});



/* 바코드 버튼 */
$(function(){
    $(".btn_barcode").mouseover(function() {
        $(this).find("img").attr("src", "../_images/common/btnIco_barcode_on.png");
    });
    $(".btn_barcode").mouseout(function() {
         $(this).find("img").attr("src", "../_images/common/btnIco_barcode.png");
    });

    $(".btn_barcodeR").mouseover(function() {
        $(this).find("img").attr("src", "../_images/common/btnIco_barcodeR_on.png");
    });
    $(".btn_barcodeR").mouseout(function() {
         $(this).find("img").attr("src", "../_images/common/btnIco_barcodeR.png");
    });
});


$(function(){
    //자원검수 상단박스 클릭시
    $('.resourceInspection__topBoxWrap .cont li').click(function(){
        $('.resourceInspection__topBoxWrap .cont li').removeClass('clkeve');
        $(this).addClass('clkeve');
    });

    //droppable 박스 클릭시 
    $('.dropWrap td.drop .item').click(function(){
        $('.dropWrap td.drop .item dl').removeClass('clkeve_drop');
        $(this).find('dl').addClass('clkeve_drop');

    });
});


// btnClassic
$(function(){
    $(".btnClassic").mouseover(function() {
        $(this).find("img.btnClassic_imgDown").attr("src", "../_images/common/ico_download_y.png");
    });
    $(".btnClassic").mouseout(function() {
        $(this).find("img.btnClassic_imgDown").attr("src", "../_images/common/ico_download.png");
    });
});

