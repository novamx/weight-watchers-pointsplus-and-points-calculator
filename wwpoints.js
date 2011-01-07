function wwpoints_init() {
	jQuery("#wwPointsForm input[type=text]").css("width","60px");
	jQuery("#PointsPlusLink").wrap("<a href=\"#\"></a>").click(function(){ 
		setPointsPlus();
		return false;
	});
	jQuery("#OldPointsLink").wrap("<a href=\"#\"></a>").click(function(){ 
		setOldPoints();
		return false;
	});
	setPointsPlus();
	setFormInputLabels("OldPointsForm");
	setFormInputLabels("PointsPlusForm");
	jQuery("#OldPointsForm").submit(function() { 
		doOldPoints();
		return false;
	});
	jQuery("#PointsPlusForm").submit(function() { 
		doPointsPlus();
		return false;
	});
} 

function setOldPoints() {
	jQuery("#OldPointsLink").css("display","none");
	jQuery("(#OldPointsForm").css("display","block");
	jQuery("#PointsPlusLink").css("display","inline");
	jQuery("#PointsPlusForm").css("display","none");
	jQuery("#OldPointsResult").css("display","block");
	jQuery("#PointsPlusResult").css("display","none");
	jQuery("#wwCalculatorHeader").html("Weight Watchers Points Calculator");
}

function setPointsPlus() {
	jQuery("#OldPointsLink").css("display","inline");
	jQuery("(#OldPointsForm").css("display","none");
	jQuery("#PointsPlusLink").css("display","none");
	jQuery("#PointsPlusForm").css("display","block");
	jQuery("#OldPointsResult").css("display","none");
	jQuery("#PointsPlusResult").css("display","block");
	jQuery("#wwCalculatorHeader").html("Weight Watchers PointsPlus Calculator");
}

function setFormInputLabels(div) {
	var $inputs = jQuery("#"+div+" input[type=text]");
	$inputs.each(function() {
		jQuery(this).val(this.name).focus(function() {
			if (jQuery(this).val() == this.name)
				jQuery(this).val("");
		}).blur(function() {
			if (jQuery(this).val() == "")
				jQuery(this).val(this.name);
		});
	});
}

function doOldPoints() {
	var cals = jQuery("#OldPointsForm input[name=Calories]").val();
	var fat = jQuery("#OldPointsForm input[name=Fat]").val();
	var fiber = jQuery("#OldPointsForm input[name=Fiber]").val();
	if (fiber > 4) fiber = 4;
	var points = Math.round((cals/50 + fat/12 + fiber/5)*10)/10;
	if (isNaN(points))
		jQuery("#OldPointsResult").html("--- Points");
	else
		jQuery("#OldPointsResult").html(points+" Points");
}

function doPointsPlus() {
	var protein = jQuery("#PointsPlusForm input[name=Protein]").val();
	var carbs = jQuery("#PointsPlusForm input[name=Carbs]").val();
	var fat = jQuery("#PointsPlusForm input[name=Fat]").val();
	var fiber = jQuery("#PointsPlusForm input[name=Fiber]").val();
	var points = Math.round((protein/10.93 + carbs/9.206 + fat/3.886 - fiber/12.45)*10)/10;
	if (isNaN(points))
		jQuery("#PointsPlusResult").html("--- Points");
	else
		jQuery("#PointsPlusResult").html(points+" Points");
}