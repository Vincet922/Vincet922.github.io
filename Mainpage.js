      text.onmousedown = function(event) { //  start the process
        // get ready to move: make an absolute and top z-index
        text.style.position = 'absolute';
        text.style.zIndex = 1000;
        // move it from any existing parents directly to the body
        // to position it relative to the body
        document.body.append(text);
        // and put this absolutely positioned text under the pointer
        moveAt(event.pageX, event.pageY);
        // centers the text on the coordinates (pageX, pageY)
        function moveAt(pageX, pageY) {
          text.style.left = pageX - text.offsetWidth / 2 + 'px';
          text.style.top = pageY - text.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
        //  move the text on mousemove
        document.addEventListener('mousemove', onMouseMove);
        // drop the text, remove unneeded handlers
        text.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          text.onmouseup = null;
        };
      };


function drop(e){
	e.preventDefault();
	var image = e.dataTransfer.getData("image");
	e.target.appendChild(document.getElementById(image));
	document.getElementById(image).style="width:100%;";
}
 
 
function dragOver(e){
	e.preventDefault();
}
 
function drag(e){
	e.dataTransfer.setData("image", e.target.id);
}	

function hover(){
	var title1 = document.getElementsByClassName("col-md-5");
	title1.style.color="rgb(250,200,0)";
	title1.style.cursor="pointer";
	title1.style.opacity="0.5";
}

function out(){
	var title1 = document.getElementsByClassName("col-md-5");
	title1.style.color="";
	title1.style.cursor="";
	title1.style.opacity="";
}