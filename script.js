
  
  $(document).ready(function(){
	
	var autoHide;
	
	function showWindow(){
		$('.login-popup').show();
		
		$('html body').css('overflow','hidden');
		autoHide = setTimeout(hideWindow,5000);
	}
	
	//showWindow()
	
	
	function hideWindow(){
			$('.login-popup').hide();
		
		$('html body').css('overflow','scroll');
	}
	
	
	// closing the popup when clicking the "x"
	
	$(".close").click(function(){
		hideWindow();
		celarTimeout(autoHide);
		
	})
	
	
	// "no thanks" exit in popup
	
	$(".nt").click(function(){
		hideWindow();
		celarTimeout(stopAutohide);
		
			
	})
	
	
  })
  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 