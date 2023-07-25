var body = document.getElementById('body')

//2
var colorName = document.getElementById('colorName')//colorName اللي اسم inputاللي في الidانا كده مسكت ال

document.addEventListener('click', function(e){
	var r = Math.round(Math.random() * 255)
	var g = Math.round(Math.random() * 255)
	var b = Math.round(Math.random() * 255)
	body.style.backgroundColor = `rgb(${r},${g},${b})`
	
	//3
	colorName.value = `rgb(${r},${g},${b})`//inputده علشان كود الالوان يبان في ال
})

