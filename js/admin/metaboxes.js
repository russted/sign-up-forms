
/* jQuery Time Picker
 * original code from Anders Fajerson  https://github.com/perifer
 */
(function(a){function g(a){a.setFullYear(2001),a.setMonth(0),a.setDate(0);return a}function f(a,b){if(a){var c=a.split(b.separator),d=parseFloat(c[0]),e=parseFloat(c[1]);b.show24Hours||(d===12&&a.indexOf("AM")!==-1?d=0:d!==12&&a.indexOf("PM")!==-1&&(d+=12));var f=new Date(0,0,0,d,e,0);return g(f)}return null}function e(a,b){return typeof a=="object"?g(a):f(a,b)}function d(a){return(a<10?"0":"")+a}function c(a,b){var c=a.getHours(),e=b.show24Hours?c:(c+11)%12+1,f=a.getMinutes();return d(e)+b.separator+d(f)+(b.show24Hours?"":c<12?" AM":" PM")}function b(b,c,d,e){b.value=a(c).text(),a(b).change(),a.browser.msie||b.focus(),d.hide()}a.fn.timePicker=function(b){var c=a.extend({},a.fn.timePicker.defaults,b);return this.each(function(){a.timePicker(this,c)})},a.timePicker=function(b,c){var d=a(b)[0];return d.timePicker||(d.timePicker=new jQuery._timePicker(d,c))},a.timePicker.version="0.3",a._timePicker=function(d,h){var i=!1,j=!1,k=e(h.startTime,h),l=e(h.endTime,h),m="selected",n="li."+m;a(d).attr("autocomplete","OFF");var o=[],p=new Date(k);while(p<=l)o[o.length]=c(p,h),p=new Date(p.setMinutes(p.getMinutes()+h.step));var q=a('<div class="time-picker'+(h.show24Hours?"":" time-picker-12hours")+'"></div>'),r=a("<ul></ul>");for(var s=0;s<o.length;s++)r.append("<li>"+o[s]+"</li>");q.append(r),q.appendTo("body").hide(),q.mouseover(function(){i=!0}).mouseout(function(){i=!1}),a("li",r).mouseover(function(){j||(a(n,q).removeClass(m),a(this).addClass(m))}).mousedown(function(){i=!0}).click(function(){b(d,this,q,h),i=!1});var t=function(){if(q.is(":visible"))return!1;a("li",q).removeClass(m);var b=a(d).offset();q.css({top:b.top+d.offsetHeight,left:b.left}),q.show();var e=d.value?f(d.value,h):k,i=k.getHours()*60+k.getMinutes(),j=e.getHours()*60+e.getMinutes()-i,n=Math.round(j/h.step),o=g(new Date(0,0,0,0,n*h.step+i,0));o=k<o&&o<=l?o:k;var p=a("li:contains("+c(o,h)+")",q);p.length&&(p.addClass(m),q[0].scrollTop=p[0].offsetTop);return!0};a(d).focus(t).click(t),a(d).blur(function(){i||q.hide()});var u=a.browser.opera||a.browser.mozilla?"keypress":"keydown";a(d)[u](function(c){var e;j=!0;var f=q[0].scrollTop;switch(c.keyCode){case 38:if(t())return!1;e=a(n,r);var g=e.prev().addClass(m)[0];g?(e.removeClass(m),g.offsetTop<f&&(q[0].scrollTop=f-g.offsetHeight)):(e.removeClass(m),g=a("li:last",r).addClass(m)[0],q[0].scrollTop=g.offsetTop-g.offsetHeight);return!1;case 40:if(t())return!1;e=a(n,r);var i=e.next().addClass(m)[0];i?(e.removeClass(m),i.offsetTop+i.offsetHeight>f+q[0].offsetHeight&&(q[0].scrollTop=f+i.offsetHeight)):(e.removeClass(m),i=a("li:first",r).addClass(m)[0],q[0].scrollTop=0);return!1;case 13:if(q.is(":visible")){var k=a(n,r)[0];b(d,k,q,h)}return!1;case 27:q.hide();return!1}return!0}),a(d).keyup(function(a){j=!1}),this.getTime=function(){return f(d.value,h)},this.setTime=function(b){d.value=c(e(b,h),h),a(d).change()}},a.fn.timePicker.defaults={step:30,startTime:new Date(0,0,0,0,0,0),endTime:new Date(0,0,0,23,30,0),separator:":",show24Hours:!0}})(jQuery)

/**
 * Custom jQuery
 */
jQuery(document).ready(function($) {

	// Time select
	// time / formatting options available and code at https://github.com/perifer/timePicker
	$('.inkling_timepicker').each(function (){
		$('#' + jQuery(this).attr('id')).timePicker({
			startTime: "07.00",
			endTime: "22.00",
			show24Hours: false,
			separator: '.',
			step: 30
  		});
	});

	// Datepicker
	$('.inkling_datepicker').each(function (){
		$('#' + jQuery(this).attr('id')).datepicker({
			firstDay: 1,
			dateFormat: 'yy-mm-dd'
		});
	});

	var pID = jQuery('#post_ID').val();

	if (!pID)
		pID = '0';

	// Remove the borders from certain last list items.
	$( 'table.inkling_metabox tr:nth-last-child(1)' ).css( 'border', '0' );

	// Character counter
	$('.char_counter').each(function(){
		// get current number of characters
		var length = $(this).val().length;
		$(this).parent().find('.counter').html( length );
		// bind on key up event
		$(this).keyup(function(){
			var new_length = $(this).val().length;
			$(this).parent().find('.counter').val( new_length );
		});
	});

	$('#submit').mousedown( function() {
		tinyMCE.triggerSave();
    });


	// File and image upload handling
	//-------------------------------------------------------------------------------------------//
	var formfield;
	var uploadStatus = true;

	$('.upload_file').change(function() {
		//formfield = $(this).attr('name');
		//$('#' + formfield + '_id').val("");
	});

	$('.upload_button').live('click', function() {
		var $el = $(this);
        event.preventDefault();

        // Create the media frame.
        frame = wp.media.frames.customHeader = wp.media({
            library: { // remove these to show all
                type: 'image', // specific mime
                //author: userSettings.uid // specific user-posted attachment
            },
            button: {
                //text: $el.data('update'), // button text
                close: true // whether click closes
            },
			editing:    true,
        });

		frame.on('open', function() {
			var selection = frame.state().get('selection');
			var selected = $el.parent().find('.upload_file_id').val().split('|')[0]; // the id of the image
			//alert(selected);
			if (selected) {
				selection.add(wp.media.attachment(selected));
			}
		});

        // When an image is selected, run a callback.
        frame.on( 'select', function() {
            // Grab the selected attachment.
            var attachment = frame.state().get('selection').first();
			$el.parent().find('.upload_file_id').val( attachment.attributes.id + '|' + attachment.attributes.url + '|' + attachment.attributes.filename  );
            $el.parent().find('.upload_file').val( attachment.attributes.url );
            $el.parent().find('.inkling_upload_status').html('<img src="' + attachment.attributes.url + '" alt="" /><a href="#" class="remove_file_button" title="'+inkling.remove_image+'" rel="' + attachment.attributes.id + '">'+inkling.remove_image+'</a>');
        });

        frame.open();

	});

	$('.remove_file_button').live('click', function() {
		$(this).parent().parent().find('.upload_file_id').val('');
		$(this).parent().parent().find('.upload_file').val('');
		$(this).parent().html("");
		return false;
	});

});