
/*
    jquery.selectjs
    ^^^^^^^^^^^^^^^

    Description: Select Options
    Version: Version 0.0.1
    Author: Arifur Rahman (https://github.com/arifcseru)
*/

(function( $ ) {

    $.selectjs = function(element, options) {

        /*
            #Default data for plugin
        */
       var defaults =  {
		title: "Demo Select",
		firstOption: "-Select-",
		elementName: "select-element",
		elementId: "select-element",
        searchable: false,
        pagination: false,
        valueGeneration: true,
		actionButtons : false,
		data : ["No Data"],
        perPage : 5,
        onchangeEvent : function(){

        }
	};

        var plugin = this;
        plugin.settings = {};
        var $element = $(element);


        /*
            #Initliazes plugin
        */
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.drawElement(plugin.getRefineArray(plugin.settings.data));
        };

        /*
        #Generates HTML for table (nav)
        */
       plugin.getRefineArray = function(values) {
        var refined = []; 
        for (var i = 0; i < values.length; i++) {
            if (refined.indexOf(values[i])==-1) {
                refined.push(values[i]);
            }
        }

        return refined;
    };
    /*
    #Generates HTML for table (nav)
    */
    plugin.getOptions = function(values) {
        var options = []; 
        for (var i = 0; i < values.length; i++) {
            if (options.indexOf(values[i])==-1) {
                var option = {
                    text: values[i],
                    value: values[i]
                };
                if (plugin.settings.valueGeneration) {
                    option = {
                        text: values[i],
                        value: i
                    };
                }
                options.push(option);
            }
        }

        return options;
    };
        /*
        #Generates HTML for  select options
        */
        plugin.drawElement = function(labels) {
            var select = document.createElement("select");
            select.name = plugin.settings.elementName;
            select.id = plugin.settings.elementId;
            select.onchange = plugin.settings.onchangeEvent;
            var option = document.createElement("option");
                option.text = plugin.settings.firstOption;
                option.value = '';
                select.appendChild(option);

            for (var i = 0; i < labels.length; i++) {
                var option = document.createElement("option");
                var value = plugin.settings.valueGeneration ? i : labels[i];

                option.text = labels[i];
                option.value = value;
                select.appendChild(option);
            }
            var h1 = document.createElement("h2");
            h1.innerHTML = plugin.settings.title;
            //$element[0].parent().appendChild("<h1>Select Bookmarks Folder</h1>");
            $element[0].appendChild(h1);
            $element[0].appendChild(select);
            return 1;
        };

        plugin.init();

    };

    $.fn.selectjs = function(options) {
        return this.each(function() {
            if (undefined === $(this).data('selectjs')) {
                var plugin = new $.selectjs(this, options);
                    $(this).data('selectjs', plugin);
            }
        });

    };

}( jQuery ));
