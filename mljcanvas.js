/* This event listener is triggered when a message is received from iframe gadget. This function handles incoming messages sent to the window, implementing various actions based on the message data. */
window.onmessage = (e) => {
	// Check if the origin of the message is from the specified domain 'https://mljltitool.mylearnerjourney.com'.
	if(e.origin === 'https://mljltitool.mylearnerjourney.com'){
		// Adjusting iframe scrolling behavior.
		if (e.data.hasOwnProperty("setFrameScroll")) {
		  document.querySelector(".tool_launch").setAttribute("scrolling", e.data.setFrameScroll);
		}
		
		// Setting iframe height to resolve double scrollbar issue.
		if (e.data.hasOwnProperty("frameHeight")) {
		  document.querySelector(".tool_launch").style.height = e.data.frameHeight + "px";
		}
		
		// Scrolling the main window (or canvas window) to a specified position.
		if (e.data.hasOwnProperty("scrollWindow")) {
		  window.scrollTo(0, e.data.scrollWindow);
		}
		
		// Managing main window (or canvas window) scrolling, particularly when item popups are open.
		if (e.data.hasOwnProperty("hideScroll")) {
		  var htmlElm = document.querySelector("html");
		  if (e.data.hideScroll == "hidden") {
			window.scrollTo(0, 0);
			htmlElm.style.top = -document.documentElement.scrollTop + "px";
			htmlElm.style.width = "100%";
			htmlElm.style.position = "fixed";
			htmlElm.style.overflowY = "scroll";
		  } else {
			var scrolledTop = parseInt(htmlElm.style.top);
			htmlElm.style.position = "";
			htmlElm.style.overflowY = "";
			htmlElm.style.top = "";
			htmlElm.style.width = "";
			document.documentElement.scrollTop = -scrolledTop;
		  }
		}
		
		//Sending window and iframe position data for popup alignment.
		if (e.data.hasOwnProperty("getWindowHeight")) {
		  window.onscroll = function () {
			document.querySelector(".tool_launch").contentWindow.postMessage(
			  {
				windowHeight: window.innerHeight,
				windowWidth: window.innerWidth,
				windowScrollTop: window.pageYOffset,
				iframeOffsetLeft: document.querySelector(".tool_launch").getBoundingClientRect().left,
				iframeOffsetTop: document.querySelector(".tool_launch").getBoundingClientRect().top,
			  },
			  "*"
			);
		  };
		  window.onresize = function () {
			document.querySelector(".tool_launch").contentWindow.postMessage(
			  {
				windowHeight: window.innerHeight,
				windowWidth: window.innerWidth,
				windowScrollTop: window.pageYOffset,
				iframeOffsetLeft: document.querySelector(".tool_launch").getBoundingClientRect().left,
				iframeOffsetTop: document.querySelector(".tool_launch").getBoundingClientRect().top,
			  },
			  "*"
			);
		  };
		  document.querySelector(".tool_launch").contentWindow.postMessage(
			{
			  windowHeight: window.innerHeight,
			  windowWidth: window.innerWidth,
			  windowScrollTop: window.pageYOffset,
			  iframeOffsetLeft: document.querySelector(".tool_launch").getBoundingClientRect().left,
			  iframeOffsetTop: document.querySelector(".tool_launch").getBoundingClientRect().top,
			},
			"*"
		  );
		}
		
		// Reloading the main window (or canvas window) or focusing the iframe element.
		if (e.data.hasOwnProperty("iframeOperation")) {
		  if (e.data.iframeOperation == "reload") {
			window.location.reload();
		  } else if (e.data.iframeOperation == "focus") {
			document.querySelector(".tool_launch").focus();
		  }
		}
		
		// Restoring main window (or canvas window) scrolling after popup close.
		if (e.data.hasOwnProperty("showScroll")) {
		  var htmlElm = document.querySelector("html");
		  htmlElm.style.position = "";
		  htmlElm.style.overflowY = "";
		  htmlElm.style.top = "";
		  htmlElm.style.width = "";
		}
	}
};