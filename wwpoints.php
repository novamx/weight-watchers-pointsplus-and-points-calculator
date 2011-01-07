<?php

/*
 Plugin Name: Weight Watchers Points & PointsPlus Widget
 Plugin URI: http://www.zekemoore.com
 Description: Compute Weight Watchers points from nutritional data, using both old "Points" and new "PointsPlus" algorithms.
 Author: Zeke Moore
 Author URI: http://www.zekemoore.com
 Version: 1.0
*/


function widget_wwpoints($args) {
	extract($args);
	$widget_title = "<span id=\"wwCalculatorHeader\">Weight Watchers Calculator</span>";
	echo $before_widget.$before_title.$widget_title.$after_title;	
	
	echo "<div id=\"wwPointsForm\" />\n";
	
	echo "<p><span id=\"OldPointsLink\">Use old Points</span><span id=\"PointsPlusLink\">Use PointsPlus</span></p>\n";

	echo "<form id=\"OldPointsForm\" action=\"\" method=\"post\">\n";
	echo "<input type=\"text\" name=\"Calories\" /> cals<br />\n";
	echo "<input type=\"text\" name=\"Fat\" /> g fat<br />\n";
	echo "<input type=\"text\" name=\"Fiber\" /> g fiber<br />\n";
	echo "<input type=\"submit\" value=\"Compute Points\" />\n";
	echo "</form>\n";

	echo "<form id=\"PointsPlusForm\" action=\"\" method=\"post\">\n";
	echo "<input type=\"text\" name=\"Protein\" /> g protein<br />\n";
	echo "<input type=\"text\" name=\"Carbs\" /> g carbohydrate<br />\n";
	echo "<input type=\"text\" name=\"Fat\" /> g fat<br />\n";
	echo "<input type=\"text\" name=\"Fiber\" /> g fiber<br />\n";
	echo "<input type=\"submit\" value=\"Compute PointsPlus\" />\n";
	echo "</form>\n";

	echo "<p id=\"OldPointsResult\"></p>\n";
	echo "<p id=\"PointsPlusResult\"></p>\n";
	
	echo "</div>\n";
	echo "<script type=\"text/javascript\">\n";
	echo "wwpoints_init();";
	echo "</script>\n";
	
	echo $after_widget;
}

function initialize_the_wwpoints_widget() {
	register_sidebar_widget(__("WW Points & PointsPlus"),"widget_wwpoints");
}

function add_jquery_to_the_wwpoints_widget() {
	wp_enqueue_script("jquery");
}

function add_custom_javascript_to_the_wwpoints_widget() {
	wp_enqueue_script('wwpoints', get_bloginfo('wpurl')."/wp-content/plugins/weight-watchers-pointsplus-and-points-calculator/wwpoints.js");
}

function add_custom_css_to_the_wwpoints_widget() {
	echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"".get_bloginfo("wpurl")
		."/wp-content/plugins/weight-watchers-pointsplus-and-points-calculator/wwpoints.css\" />\n";
}

add_action("init","add_jquery_to_the_wwpoints_widget");
add_action("init","add_custom_javascript_to_the_wwpoints_widget");
add_action("wp_head","add_custom_css_to_the_wwpoints_widget");
add_action("plugins_loaded","initialize_the_wwpoints_widget");

