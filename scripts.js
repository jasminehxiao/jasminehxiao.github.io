$(function(){
	$('#start > backLink').on('click', function(){
		$('.question > #start').css({
			'display': 'hidden'
		});
	})
	$('#start > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#start').addClass('hidden'),
		$('#question1').removeClass('hidden')
	});
	$('#question1 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question1').addClass('hidden'),
		$('#question2').removeClass('hidden')
	});
	$('#question2 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question2').addClass('hidden'),
		$('#question3').removeClass('hidden')
	});
	$('#question3 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question3').addClass('hidden'),
		$('#question4').removeClass('hidden')
	});
	$('#question4 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question4').addClass('hidden'),
		$('#question5').removeClass('hidden')
	});
	$('#question5 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question5').addClass('hidden'),
		$('#question6').removeClass('hidden')
	});
	$('#question6 > .wrapper > .buttonNext').on('click', function(){
		// console.log('I work')
		$('#question6').addClass('hidden'),
		$('#question7').removeClass('hidden')
	});

	// STATUS BAR

		// question1 status bar
		$('#question1 .status > .circle:nth-of-type(2)').on('click', function(){
			// console.log('I work')
			$('#question1').addClass('hidden'),
			$('#question2').removeClass('hidden')
		});
		$('#question1 .status > .circle:nth-of-type(3)').on('click', function(){
			// console.log('I work')
			$('#question1').addClass('hidden'),
			$('#question3').removeClass('hidden')
		});
		$('#question1 .status > .circle:nth-of-type(4)').on('click', function(){
			// console.log('I work')
			$('#question1').addClass('hidden'),
			$('#question4').removeClass('hidden')
		});

		$('#question1 .status > .circle:nth-of-type(5)').on('click', function(){
			// console.log('I work')
			$('#question1').addClass('hidden'),
			$('#question5').removeClass('hidden')
		});

		$('#question1 .status > .circle:nth-of-type(6)').on('click', function(){
			// console.log('I work')
			$('#question1').addClass('hidden'),
			$('#question6').removeClass('hidden')
		});

		// question2 status bar
		$('#question2 .status > .circle:nth-of-type(1)').on('click', function(){
			// console.log('I work')
			$('#question2').addClass('hidden'),
			$('#question1').removeClass('hidden')
		});
		$('#question2 .status > .circle:nth-of-type(3)').on('click', function(){
			// console.log('I work')
			$('#question2').addClass('hidden'),
			$('#question3').removeClass('hidden')
		});
		$('#question2 .status > .circle:nth-of-type(4)').on('click', function(){
			// console.log('I work')
			$('#question2').addClass('hidden'),
			$('#question4').removeClass('hidden')
		});

		$('#question2 .status > .circle:nth-of-type(5)').on('click', function(){
			// console.log('I work')
			$('#question2').addClass('hidden'),
			$('#question5').removeClass('hidden')
		});

		$('#question2 .status > .circle:nth-of-type(6)').on('click', function(){
			// console.log('I work')
			$('#question2').addClass('hidden'),
			$('#question6').removeClass('hidden')
		});

		// question3 status bar
		$('#question3 .status > .circle:nth-of-type(1)').on('click', function(){
			// console.log('I work')
			$('#question3').addClass('hidden'),
			$('#question1').removeClass('hidden')
		});
		$('#question3 .status > .circle:nth-of-type(2)').on('click', function(){
			// console.log('I work')
			$('#question3').addClass('hidden'),
			$('#question2').removeClass('hidden')
		});
		$('#question3 .status > .circle:nth-of-type(4)').on('click', function(){
			// console.log('I work')
			$('#question3').addClass('hidden'),
			$('#question4').removeClass('hidden')
		});

		$('#question3 .status > .circle:nth-of-type(5)').on('click', function(){
			// console.log('I work')
			$('#question3').addClass('hidden'),
			$('#question5').removeClass('hidden')
		});

		$('#question3 .status > .circle:nth-of-type(6)').on('click', function(){
			// console.log('I work')
			$('#question3').addClass('hidden'),
			$('#question6').removeClass('hidden')
		});

		// question4 status bar
		$('#question4 .status > .circle:nth-of-type(1)').on('click', function(){
			// console.log('I work')
			$('#question4').addClass('hidden'),
			$('#question1').removeClass('hidden')
		});
		$('#question4 .status > .circle:nth-of-type(2)').on('click', function(){
			// console.log('I work')
			$('#question4').addClass('hidden'),
			$('#question2').removeClass('hidden')
		});
		$('#question4 .status > .circle:nth-of-type(3)').on('click', function(){
			// console.log('I work')
			$('#question4').addClass('hidden'),
			$('#question3').removeClass('hidden')
		});

		$('#question4 .status > .circle:nth-of-type(5)').on('click', function(){
			// console.log('I work')
			$('#question4').addClass('hidden'),
			$('#question5').removeClass('hidden')
		});

		$('#question4 .status > .circle:nth-of-type(6)').on('click', function(){
			// console.log('I work')
			$('#question4').addClass('hidden'),
			$('#question6').removeClass('hidden')
		});

		// question5 status bar
		$('#question5 .status > .circle:nth-of-type(1)').on('click', function(){
			// console.log('I work')
			$('#question5').addClass('hidden'),
			$('#question1').removeClass('hidden')
		});
		$('#question5 .status > .circle:nth-of-type(2)').on('click', function(){
			// console.log('I work')
			$('#question5').addClass('hidden'),
			$('#question2').removeClass('hidden')
		});
		$('#question5 .status > .circle:nth-of-type(3)').on('click', function(){
			// console.log('I work')
			$('#question5').addClass('hidden'),
			$('#question3').removeClass('hidden')
		});

		$('#question5 .status > .circle:nth-of-type(4)').on('click', function(){
			// console.log('I work')
			$('#question5').addClass('hidden'),
			$('#question4').removeClass('hidden')
		});

		$('#question5 .status > .circle:nth-of-type(6)').on('click', function(){
			// console.log('I work')
			$('#question5').addClass('hidden'),
			$('#question6').removeClass('hidden')
		});

		// question6 status bar
		$('#question6 .status > .circle:nth-of-type(1)').on('click', function(){
			// console.log('I work')
			$('#question6').addClass('hidden'),
			$('#question1').removeClass('hidden')
		});
		$('#question6 .status > .circle:nth-of-type(2)').on('click', function(){
			// console.log('I work')
			$('#question6').addClass('hidden'),
			$('#question2').removeClass('hidden')
		});
		$('#question6 .status > .circle:nth-of-type(3)').on('click', function(){
			// console.log('I work')
			$('#question6').addClass('hidden'),
			$('#question3').removeClass('hidden')
		});

		$('#question6 .status > .circle:nth-of-type(4)').on('click', function(){
			// console.log('I work')
			$('#question6').addClass('hidden'),
			$('#question4').removeClass('hidden')
		});

		$('#question6 .status > .circle:nth-of-type(5)').on('click', function(){
			// console.log('I work')
			$('#question6').addClass('hidden'),
			$('#question5').removeClass('hidden')
		});

	// SMOOTH SCROLL	
		$('a').smoothScroll();

});