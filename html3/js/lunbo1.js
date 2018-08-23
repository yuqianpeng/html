$(function() {
	$(".imgboxup").css("opacity", "0");
	$(".imgboxup").eq(0).css("opacity", "1");

	var currentPage = 0;

	$(".lunright").click(function() {
		$(".imgboxup").eq(currentPage).animate({
			opacity: 0
		}, 2000);

		currentPage++;
		currentPage = currentPage == 6 ? 0 : currentPage;

		$(".imgboxup").eq(currentPage).animate({
			opacity: 1
		}, 2000);

		$(".dots div").removeClass("dotSelected");
		$(".dots div").eq(currentPage).addClass("dotSelected");
	})

	$(".lunleft").click(function() {
		$(".imgboxup").eq(currentPage).animate({
			opacity: 0
		}, 2000);

		currentPage--;

		currentPage = currentPage == -1 ? 5 : currentPage;

		$(".imgboxup").eq(currentPage).animate({
			opacity: 1
		}, 2000);

		$(".dots div").removeClass("dotSelected");
		$(".dots div").eq(currentPage).addClass("dotSelected");

	})

	$(".dots div").mouseenter(function() {
		console.log("点点被点击");

		$(".dots div").removeClass("dotSelected");
		var mPosition = $(".dots div").index(this);
		$(".dots div").eq(mPosition).addClass("dotSelected");
		console.log(mPosition);

		if(mPosition != currentPage) {

			$(".imgboxup").eq(currentPage).animate({
				opacity: 0
			}, 2000);

			currentPage = mPosition;

			$(".imgboxup").eq(mPosition).animate({
				opacity: 1
			}, 2000)
		}

	})

	var timerId = -1;

	function autoScroll() {
		timerId = setInterval(function() {

			$(".imgboxup").eq(currentPage).animate({
				opacity: 0
			}, 2000);
			
			currentPage++;

			if(currentPage == 6) {
				currentPage = 0;
			}

			$(".imgboxup").eq(currentPage).animate({
				opacity: 1
			}, 2000);

			$(".dots div").removeClass("dotSelected");
			$(".dots div").eq(currentPage).addClass("dotSelected");
			console.log('id:'+timerId);
		}, 2000)
	}

	autoScroll ();
	
	$(".lunboimg1").mouseenter(function() {
		console.log("鼠标进来了，不要自动轮播了");
		clearInterval(timerId);
	})

	$(".lunboimg1").mouseleave(function() {
		console.log("鼠标走了，开始自动轮播");
		autoScroll();
	})
	
	// $(".lunboimg1").hover(function(){
	// 	// 鼠标移入
	// }, function() {
	// 	// 鼠标移除
	// })

})