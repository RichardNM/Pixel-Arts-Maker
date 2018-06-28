// Select color input
// Select size input
var color, width, height;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val() ;
	width = $('#inputWidth').val();

	makeGrid(height, width);
	//console.log( "the height is " +height + " and width is " + width);

})


function makeGrid(row,column) {
	$('tr').remove();

 for (var a = 1; a<=row; a++){
	$('#pixelCanvas').append('<tr id=table'+ a +'></tr>');

	for (var b=1; b<=column; b++){
		$('#table' + a).append('<td></td>');
	}
 }
// Your code goes here!

 $('td').click(function paintTable(){
	color = $('#colorPicker').val();

	if ($(this).attr('style')){
		$(this).removeAttr('style');

	} else {
		$(this).attr('style', 'background-color:' + color);
	}

})
}



