const div = document.querySelector('#sparkler')

function sparkle() {
	var p = document.createElement('div')
	p.className = 'particle'
	p.style.left = div.getBoundingClientRect().x + 'px'
	p.style.top = div.getBoundingClientRect().y + 'px'
	let w = (Math.floor(Math.random() * 30)) + 20
	p.style.width = w + 'vh'
	p.style.transform = 'translateX('+((-1)*(w*.475))+'vh) rotate('+Math.random()*360+'deg)'
	document.body.appendChild(p)
	
	setTimeout(function(){
		let pp = document.querySelectorAll('.particle')[0]
	  pp.remove()	
	}, 256)
}

let shiny = setInterval(sparkle, 16)

// click to change color
window.addEventListener('click', function() {
	let c = 'hsl('+Math.random()*360+'deg, 100%, 50%)'
	document.body.style.setProperty('--color-spark', c)
})

// track mouse location and move sparkler
window.addEventListener('mousemove', function(e){
	let x = e.clientX,
			y = e.clientY
	
	div.style.left = x + 'px'
	div.style.top = y + 'px'
})