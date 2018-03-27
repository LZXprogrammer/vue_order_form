$(function(){
	$(".write-input").keyup(function() {
		var inputTxt = $(this).val();
		if(inputTxt < 1){
			$(this).val("1");
		}else{
			$(this).val(inputTxt.replace(/[^0-9]/g, ""));			
		}		
	    if (inputTxt.length > 4) {
	        $(this).val(inputTxt.substring(0, 4));
	    }   
	});	
});

var totalSum = 0;
function addPlayer(gid,numId){
    var playNamebox = $('#gid').find('.playnamebox');
    var inputCopy = $('#gid').find('.copypages:last');
	var inputTxt = inputCopy.find("input[name='input1']").val();
	var inputNum = inputCopy.find("input[name='input2']").val();    
    inputCopy.find("input[name='sum']").each(function() {
        var sum = 0;            	  
        sum = parseInt(inputTxt) * parseInt(inputNum);
        $(this).val(sum);
    });
    var sumK = parseInt(inputCopy.find("input[name='sum']").val());
    var numId = $('#gid').find(".inNum").html();
    if(sumK < numId){
		totalSum += sumK;
		$('#gid').find("input[name='totalSum']").val(totalSum);
		var totalSumK = parseInt($('#gid').find("input[name='totalSum']").val());
		if( totalSumK < numId){
			playNamebox.append($('#gid').find('.copypages:last').clone(true));
			$('#gid').find(".cart_delete").css("display","inline-block");
		}else{
			alert("You Can't Add More Players");
		}
	}  
	console.log(totalSum);
	console.log(numId);
    console.log(totalSumK);
}
function deletePlayer(formId){
    var playNamebox = $('#gid').find('.playnamebox');
    if(playNamebox.find(".copypages").length <= 1){
    	$('#gid').find(".cart_delete").hide();
    }
    playNamebox.find(".copypages:last").remove();
}