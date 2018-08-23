$(function() {
	$(".bottom-img").css("display", "none");
	$(".bottom-img").eq(0).css("display", "block");

	var currentPage = 0;
	$(".lunright1").click(function() {
		$(".bottom-img").eq(currentPage).css({'display':'none','position':'relative','height':'400px','width':'1200px'});

		currentPage++;
		currentPage = currentPage == 4 ? 0 : currentPage;

		$(".bottom-img").eq(currentPage).css({'display':'block','position':'relative','height':'400px','width':'1200px'});

		$(".dots1 div").removeClass("dotSelected1");
		$(".dots1 div").eq(currentPage).addClass("dotSelected1");
	})

	$(".lunleft1").click(function() {
		$(".bottom-img").eq(currentPage).css({'display':'none','position':'relative','height':'400px','width':'1200px'});
		currentPage--;

		currentPage = currentPage == -1 ? 3 : currentPage;

		$(".bottom-img").eq(currentPage).css({'display':'block','position':'relative','height':'400px','width':'1200px'});

		$(".dots1 div").removeClass("dotSelected1");
		$(".dots1 div").eq(currentPage).addClass("dotSelected1");

	})

	$(".dots1 div").mouseenter(function() {
		console.log("点点被点击");

		$(".dots1 div").removeClass("dotSelected1");
		var mPosition = $(".dots1 div").index(this);
		$(".dots1 div").eq(mPosition).addClass("dotSelected1");
		console.log(mPosition);

		if(mPosition != currentPage) {

			$(".bottom-img").eq(currentPage).css({'display':'none','position':'relative','height':'400px','width':'1200px'});

			currentPage = mPosition;

			$(".bottom-img").eq(currentPage).css({'display':'block','position':'relative','height':'400px','width':'1200px'});		}

	})
			// $(".bottom-img img").hover(function(){
   //              transform: scale(1.4)
			// }
	var timerId = -1;

	function autoScroll() {
		timerId = setInterval(function() {

			$(".bottom-img").eq(currentPage).css({'display':'none','position':'relative','height':'400px','width':'1200px'});
			
			currentPage++;

			if(currentPage == 4) {
				currentPage = 0;
			}

			$(".bottom-img").eq(currentPage).css({'display':'block','position':'relative','height':'400px','width':'1200px'});


			$(".dots1 div").removeClass("dotSelected1");
			$(".dots1 div").eq(currentPage).addClass("dotSelected1");
			console.log('id:'+timerId);
		}, 2000)
	}

	autoScroll ();
	
	$(".lunboimg2").mouseenter(function() {
		console.log("鼠标进来了，不要自动轮播了");
		clearInterval(timerId);
	})

	$(".lunboimg2").mouseleave(function() {
		console.log("鼠标走了，开始自动轮播");
		autoScroll();
	})
	$(".lunboimg2").mouseenter(function() {
        $(".lunleft1").css("display", "block");
        $(".lunright1").css("display", "block");
	})

	$(".lunboimg2").mouseleave(function() {
        $(".lunleft1").css("display", "none");
        $(".lunright1").css("display", "none");
	})


})
