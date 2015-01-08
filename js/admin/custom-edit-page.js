jQuery(document).ready(function($) {

	// register sortable examples
    // registerSortable(".hero-slide", ".hero-slider", false);
    // registerSortable(".team-member-fact", ".team-member-facts", true);
    /**
     * function which appends sortable to the _items_wrapper (_item is sortable item)
     * _item_is_child_sortable param tells if the inner child of item is also sortable (prevents event buubling etc.)
     */
	function registerSortable(_item, _items_wrapper, _item_is_child_sortable) {
        var handleForSorting;
        if (!_item_is_child_sortable) {
            handleForSorting = 'h4:not(.child)';
        } else {
            handleForSorting = 'h4.child';
        }
        var radio_checked = new Array();
		$( _items_wrapper ).find(handleForSorting).css({"cursor" : "move"}).addClass("sortable-item").attr("title", inkling.move);
		$( _items_wrapper ).sortable({
			placeholder: "sortable-placeholder",
			axis: "y",
			forceHelperSize: true,
			forcePlaceholderSize: true,
			handle: handleForSorting,
			start: function () {
                var $sender = $(this);

                $sender.find(_item).each(function() {
                    $(this).find("input[type='radio']").each(function() {
                        if ($(this).is(":checked")) {
                            radio_checked.push($(this).attr("id"));
                        }
                    });
                });
            },
			stop: function( event, ui ) {
                console.log(radio_checked);
				var $sender = $(this);
                //console.log(ui.item);
                //console.log($sender);
				$counter = 0;
				// we need to rename the fields when we sort them (so they are properly indexed in array we send in $_POST)
				$sender.find(_item).each(function( key, value ) {
					$this = $(this);
                    $item = ui.item;
                    if (!_item_is_child_sortable) {
                        $(this).find("span.counter:not(.child-counter)").html($counter+1);
                    } else {
                        $(this).find("span.counter").html($counter+1);
                    }
					$(this).find("input,textarea").each(function() {
						if ($(this).attr("name") != undefined) {
                            var $this = $(this);
							var $this_value = $(this).val();
                            var $this_is_checked = $(this).is(":checked");
                            console.log('---- new item ----');
                            console.log('item value: ' + $this_value);
                            console.log('is this checked: ' + $this_is_checked);
                            var name = $(this).attr('name');
                            console.log('name before changing: ' + name);
                            var ocurrences_count = name.match(/\[[0-9]\]/gi);
                            console.log('name index ocurrences count: ' + ocurrences_count);
                            var j = 0;
                            $(this).attr('name', name.replace(/\[[0-9]\]/gi,function (match, pos, original) {
                                    j++;
                                    if ($this.hasClass('child') && !_item_is_child_sortable) {
                                        console.log("for child");
                                        return (j == 1) ? "["+ $counter + "]" : match;
                                    } else {
                                        console.log("default");
                                        return (ocurrences_count.length == j) ? "["+ $counter + "]" : match;
                                    }

                                })
                            );
                            name = $(this).attr('name');
                            console.log('name after change: ' + name);
                            // ugly hack
							// radio button group become unchecked on sortable so we need to store the selected value in a variable and recheck it after renaming
							for (var i = 0; i < radio_checked.length; ++i) {
                                $('#' + radio_checked[i]).attr("checked", "checked");
                            };

                            // we need to refresh the editor after sort event (known jQuery UI glitch)
                            if ($(this).hasClass("cleditor")) {
                                $(this).cleditor()[0].refresh();
                            }
						}
					});
					$counter++;
				});
			}
		}).disableSelection();
	}

    // register add examples
    // registerAddNew('.add-new-slide', '.hero-slide', '.hero-slider', true, '', '');
    // registerAddNew('.add-new-team-member', '.team-member', '.team-members', true, '.team-member-fact', '.team-member-facts');
    // function which append add to the items list (adding of a new item in list)
    // _button_selector is the button which executes add
    // _item_selector is the item which clone will be added on button click
    // _items_wrapper is the parent holding the list of items (to it the new item will be appended)
    // _isParent param tells us if the item has also child list of items which can be added
    // _re_register_child_item is the selector for child item (we need this because sortable needs to be reapendded to clones)
    // _re_register_child_item is the wrapper selector for child items (we need this because sortable needs to be reapendded to clones)
	function registerAddNew(_button_selector, _item_selector, _items_wrapper, _isParent, _re_register_child_item, _re_register_childs_wrapper) {
		$(document).on('click', _button_selector, function() {
			var $sender = $(this);
			var itemForm = $sender.parent().find(_item_selector + ":first").clone();
            if (itemForm.find('.child-list').length > 0) {
                itemForm.find('.child-list > div:not(:first)').remove();
            }
            var itemFormParent = $sender.parent();
			var nmb_of_items = $sender.parent().find(_item_selector).size();
			if (_isParent) {
                itemForm
                .find("span.counter:not(.child-counter)")
                .html(parseInt(nmb_of_items)+1);
            } else {
                itemForm
                .find("span.counter")
                .html(parseInt(nmb_of_items)+1);
            }


			itemForm.find("input,textarea").each(function() {
                $this = $(this);
				if ($(this).attr("name") != undefined) {
					if ($(this).attr("type") == 'text' || $(this).attr("type") == 'hidden' || $(this).is("textarea")) {
						$(this).val("");
					}
                    var name = $(this).attr('name');
                    var ocurrences_count = name.match(/\[[0-9]\]/gi);
                    var j = 0;
                    $(this).attr('name', name.replace(/\[[0-9]\]/gi,function (match, pos, original) {
                            j++;
                            if ($this.hasClass('child') && _isParent) {
                                return (j == 1) ? "["+ nmb_of_items + "]" : match;
                            } else {
                                return (ocurrences_count.length == j) ? "["+ nmb_of_items + "]" : match;
                            }
                        })
                    );

                    if ($(this).hasClass("cleditor")) {
                        $textarea_parent = $(this).parent().parent();
                        $textarea_middle_parent = $(this).parent();
                        //console.log($textarea_parent);
                        //console.log($textarea_middle_parent);
                        $this_textarea = $(this).clone(true).off();
                        //console.log($this_textarea);
                        $this_textarea.attr("style", "");
                        $textarea_middle_parent.remove();
                        $this_textarea.removeClass("cleditor");
                        $this_textarea.addClass("newcleditor");
                        $this_textarea.val("");
                        $textarea_parent.append($this_textarea);
                    }
				}
			});

			itemForm.find("img").attr("src", itemForm.find("img").data("dummy-src"));
			// current title
	    	$input_upload_text = itemForm.find(".btn-upload").val();
	    	// toggle title
	    	$input_upload_toggle_text = itemForm.find(".btn-upload").data("toggle-title");
	    	// toggle becomes current
	    	itemForm.find(".btn-upload").val($input_upload_toggle_text);
	    	// current becomes toggle
	    	itemForm.find(".btn-upload").data("toggle-title", $input_upload_text);
            itemForm.insertBefore($sender);
            $(".newcleditor").cleditor({
                height: 100,
                controls:     // controls to add to the toolbar
                "bold italic underline strikethrough subscript superscript removeformat source",
                bodyStyle: "padding: 5px; min-height: 50px; margin: 0px; font-family: 'Open Sans',sans-serif;color: #444;font-size: 14px;line-height: 1.4em;"
            });
            $(".newcleditor").removeClass("newcleditor").addClass("cleditor");

            if ( _isParent && $(_item_selector).find('.ui-sortable').length > 0) {
                //$(_item_selector).find('.ui-sortable').sortable( "refresh" );
                registerSortable(_re_register_child_item, _re_register_childs_wrapper, true);
            }

		});
	}

    // register remove examples
    // registerRemove('.remove-slide', '.hero-slide', '.hero-slider', false);
    // registerRemove('.remove-team-member', '.team-member', '.team-members', true);
    // function which append remove to the item
    // _button_selector is the button which executes remove
    // _item_selector is the item which will be removed on button click
    // _items_wrapper is the parent holding the lsit of items
    // _isParent param tells usif the item has also child list of items which can be removed
	function registerRemove(_button_selector, _item_selector, _items_wrapper, _isParent) {
		$(document).on('click', _button_selector, function() {
			var $sender = $(this);
			var itemForm = $(this).parents(_item_selector);
			var nmb_of_slides = itemForm.parent().find(_item_selector).size();
            var parent = itemForm.parent();
			if (nmb_of_slides == 1) {
				alert(inkling.min_one_slide_error);
				return false;
			}
			if (confirm(inkling.confirm_delete))
			{
				itemForm.remove();
					$counter = 0;

                    parent.find(_item_selector).each(function( key, value ) {
                        if (_isParent) {
                            $(this).find("span.counter:not(.child-counter)").html($counter+1);
                        } else {
                            $(this).find("span.counter").html($counter+1);
                        }
                        $(this).find("input,textarea").each(function() {
                            if ($(this).attr("name") != undefined) {
                                var $this = $(this);
                                var $this_value = $(this).val();
                                //console.log("checked: " + $(this).attr("name") + "value: " + $this_value);
                                var name = $(this).attr('name');
                                var ocurrences_count = name.match(/\[[0-9]\]/gi);
                                var j = 0;
                                $(this).attr('name', name.replace(/\[[0-9]\]/gi,function (match, pos, original) {
                                        j++;
                                        if ($this.hasClass('child') && _isParent) {
                                            return (j == 1) ? "["+ $counter + "]" : match;
                                        } else {
                                            return (ocurrences_count.length == j) ? "["+ $counter + "]" : match;
                                        }
                                    })
                                );
                                // ugly hack
                                // radio button group become unchecked on sortable so we need to store the selected value in a variable and recheck it after renaming
                                if ($(this).is(":checked") && $(this).attr("type") == "radio")  {
                                    $("input[name='"+$(this).attr("name")+"'][value='" + $this_value + "']").attr('checked', 'checked');
                                }

                                // we need to refresh the editor after sort event (known jQuery UI glitch)
                                if ($(this).hasClass("cleditor")) {
                                    $(this).cleditor()[0].refresh();
                                }
                            }
                        });
                        $counter++;
                    });
			}

		});
	}

	var custom_uploader;

	$(document).on('click', '.btn-upload-remove', function(e) {
		e.preventDefault();
		var $this = $(this);
        var $input_parent = $(this).parent();
        var $input_upload = $(this).parent().find(".btn-upload");
        var $input_field_attachment_id = $input_parent.find('input[name*="attachment_id"]');
        var $input_field_filename = $input_parent.find('input[name*="filename"]');
        var $input_field_fullpath = $input_parent.find('input[name*="fullpath"]');
        var $image = $input_parent.find('img');

        $input_parent.removeClass("has-image");
        $image.attr("src", $image.data("dummy-src"));
        $input_field_attachment_id.val("");
        $input_field_filename.val("");
        $input_field_fullpath.val("");

        // current title
    	$input_upload_text = $input_upload.val();
    	// toggle title
    	$input_upload_toggle_text = $input_upload.data("toggle-title");
    	// toggle becomes current
    	$input_upload.val($input_upload_toggle_text);
    	// current becomes toggle
    	$input_upload.data("toggle-title", $input_upload_text);
	});

    // select media / upload popup handler
    $(document).on('click', '.btn-upload' , function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input_parent = $(this).parent();
        var $input_field_attachment_id = $input_parent.find('input[name*="attachment_id"]');
        var $input_field_filename = $input_parent.find('input[name*="filename"]');
        var $input_field_fullpath = $input_parent.find('input[name*="fullpath"]');
        var $image = $input_parent.find('img');
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: inkling.choose_image,
            button: {
               text: inkling.select
            },
            multiple: false
        });
        custom_uploader.on('open', function() {
        	if ($input_parent.hasClass("has-image")) {
        		var selection = wp.media.frames.file_frame.state().get('selection');
				ids = $input_field_attachment_id.val().split(',');
				ids.forEach(function(id) {
					attachment = wp.media.attachment(id);
					attachment.fetch();
					selection.add( attachment ? [ attachment ] : [] );
				});
			}
        });
        custom_uploader.on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            //console.log(attachment);
            if ($input_field_attachment_id.val() == "") { // if previous is not set switch titles
            	$input_parent.addClass("has-image");
	            // current title
		    	$this_text = $this.val();
		    	// toggle title
		    	$this_toggle_text = $this.data("toggle-title");
		    	// toggle becomes current
		    	$this.val($this_toggle_text);
		    	// current becomes toggle
		    	$this.data("toggle-title", $this_text);
            }

            $input_field_attachment_id.val(attachment.id);
            $input_field_filename.val(attachment.filename);
            $input_field_fullpath.val(attachment.url);
            $image.attr("src", attachment.url);

	    });
        custom_uploader.open();
    });

	$(".section-helper").click(function(e) {
    	e.preventDefault();
    	if ($(this).parents(".postbox").find(".section-helper-wrapper").hasClass("hidden")) { // display help
    		$(this).parents(".postbox").find(".section-helper-wrapper").hide().removeClass("hidden").slideDown();
    	}
    	else { // hide help
    		$(this).parents(".postbox").find(".section-helper-wrapper").slideUp().addClass("hidden").show();
    	}
    	// current title
    	$this_text = $(this).html();
    	// toggle title
    	$this_toggle_text = $(this).data("toggle-title");
    	// toggle becomes current
    	$(this).html($this_toggle_text);
    	// current becomes toggle
    	$(this).data("toggle-title", $this_text);
    });

    // toggles expand / close section
	$(".section-expander").click(function(e) {
    	e.preventDefault();
    	e.stopPropagation();

    	var last_selected_section_class_array = $(this).parents('.postbox').attr('class').split(' ');
        var last_selected_section = last_selected_section_class_array[last_selected_section_class_array.length-1];

    	if ($(this).parents(".postbox").find(".inside").hasClass("hidden")) { // display
    		$(this).parents(".postbox").find(".inside").hide().removeClass("hidden").slideDown();
    		window.location.hash = last_selected_section;
            var post_action = $("#post").attr("action").split("#");
            $("#post").attr("action", post_action[0] + '#' + last_selected_section);
    	}
    	else { // hide
    		$(this).parents(".postbox").find(".inside").slideUp().addClass("hidden").show();
    	}
    	// current title
    	$this_text = $(this).html();
    	// toggle title
    	$this_toggle_text = $(this).data("toggle-title");
    	// toggle becomes current
    	$(this).html($this_toggle_text);
    	// current becomes toggle
    	$(this).data("toggle-title", $this_text);

    });

    // binds that store the value of the url field in hidden field
    $(document).on("change", ".url_selector", function() {
        if ($(this).is(":checked")) {
            if ($(this).val() == "1") { //url from page selected, show dropdown and hide input
                $(this).parent("p").find("select.page_url").removeClass("hidden");
                $(this).parent("p").find("select.overlay_url").addClass("hidden");
                $(this).parent("p").find("input.custom_url").addClass("hidden");
                $(this).parent("p").find(".url_overlay_id_holder").val("");
                $(this).parent("p").find("select.page_url").val("");
                $(this).parent("p").find("input.custom_url").val("");
            } else if ($(this).val() == "2") { // overlay selected
                $(this).parent("p").find("select.page_url").addClass("hidden");
                $(this).parent("p").find("select.overlay_url").removeClass("hidden");
                $(this).parent("p").find("input.custom_url").addClass("hidden");
                $(this).parent("p").find(".url_id_holder").val("");
                $(this).parent("p").find(".url_value_holder").val("");
                $(this).parent("p").find("select.overlay_url").val("");
                $(this).parent("p").find("input.custom_url").val("");
            }
            else { // custom url selected, hide dropdown, show input
                $(this).parent("p").find("select.page_url").addClass("hidden");
                $(this).parent("p").find("select.overlay_url").addClass("hidden");
                $(this).parent("p").find("input.custom_url").removeClass("hidden");
                $(this).parent("p").find(".url_overlay_id_holder").val("");
                $(this).parent("p").find("input.custom_url").val("");
            }
        }
        // $(this).parent("p").find(".url_id_holder").val("");
        // $(this).parent("p").find(".url_value_holder").val("");
        // $(this).parent("p").find(".url_overlay_id_holder").val("");
    });

    $("select.page_url").each(function() {
        $(this).parent("p").find(".url_value_holder").val($(this).val());
        $(this).parent("p").find(".url_id_holder").val($(this).find("option:selected").attr("data-page-id"));
    });

    $("select.overlay_url").each(function() {
        $(this).parent("p").find(".url_overlay_id_holder").val($(this).find("option:selected").val());
    });

    $("input.custom_url").each(function () {
        $(this).parent("p").find(".url_value_holder").val($(this).val());
    });

    $(document).on("change", "select.page_url", function() {
        $(this).parent("p").find(".url_value_holder").val($(this).val());
        $(this).parent("p").find(".url_id_holder").val($(this).find("option:selected").attr("data-page-id"));

    });

    $(document).on("change", "select.overlay_url", function() {
        $(this).parent("p").find(".url_overlay_id_holder").val($(this).find("option:selected").val());
    });

    $(document).on("keyup input", "input.custom_url", function() {
        $(this).parent("p").find(".url_value_holder").val($(this).val());
    });

    if (window.location.hash != '')
	{
		var hash = window.location.hash;
		hash = hash.substring(1, hash.length);
		$("."+hash).find('.section-expander').trigger('click');
	}

	$("textarea.cleditor").cleditor({
		height: 100,
		controls:     // controls to add to the toolbar
		"bold italic underline strikethrough subscript superscript removeformat source",
		bodyStyle: "padding: 5px; min-height: 50px; margin: 0px; font-family: 'Open Sans',sans-serif;color: #444;font-size: 14px;line-height: 1.4em;"
	});

	$(document).on("click", "input[type=submit]", function() {
		var regexReplace = [
			[/<div>/gi,  '<br>'],  //replace div to br
			[/<\/div>/gi,  '']  //replace close div tag with empty
		  ];

		$("textarea.cleditor").each(function() {
			var textarea_val = $(this).val();
			// Edit content
		    $.each(regexReplace, function(index, item) {
		    	textarea_val = textarea_val.replace(item[0], item[1]);
		    });
            //textarea_val = textarea_val.replace(/<[\/]{0,1}(span|SPAN)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(div|DIV)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(font|FONT)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(ul|UL)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(li|LI)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(ol|OL)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<[\/]{0,1}(ol|OL)[^><]*>/g,"");
            textarea_val = textarea_val.replace(/<br><br><br>/gi,'<br><br>');
            textarea_val = textarea_val.replace(/<br><br><br><br>/gi,'<br><br>');
		    $(this).val(textarea_val);

		    //console.log($(this).val());
		});
		return true;
	});

    var viewPortSize = $(window).height();
    $(window).scroll(function() {
        if ($(document).scrollTop() > viewPortSize) {
            $(".submitdiv:last").attr("style", "");
            $(".submitdiv:last").css({"position" : "fixed", "top" : '50px' });
        } else {
            $(".submitdiv:last").attr("style", "");
            $(".submitdiv:last").css({"position" : "relative" });
        }
    });
});
