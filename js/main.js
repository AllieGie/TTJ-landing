const cursor = document.getElementById('cursor');
			
document.onmousemove = function(e){
				cursor.style.left = (e.pageX) + 'px';
				cursor.style.top = (e.pageY)+ 'px';
				cursor.style.display = 'block';
}
