(function($) {

    $.fn.dropDownTable = function( options ) {

        var i = 1;

        // Establish our default settings
        var settings = $.extend({

            elementHtml : null,
            appendClassName : null,
            tableClassName : null,
            dropdownTableInputClassName : null,
            tableSearchInputClassName : null,
            trIndexAsText : null,
            searchableTableID : null
        }, options);

        $(settings.appendClassName).hide();

        return this.each( function() {

            if ( settings.elementHtml ) {

                $(settings.appendClassName).css('position','absolute');
                $(settings.appendClassName).css('margin-top','33px');
                $(settings.appendClassName).css('margin-left','14px');
                $(settings.appendClassName).css('padding','0px 10px 10px');
                $(settings.appendClassName).css('background-color','rgb(238, 238, 238)');

                $(settings.tableSearchInputClassName).css('margin-top','20px');

                $( document ).on( "click", "html", function() {

                    if(i==1){
                        $(settings.elementHtml).appendTo(  settings.appendClassName );
                        i++;
                    }

                    if ($(event.target).closest(settings.dropdownTableInputClassName +","+ settings.tableSearchInputClassName).length) {
                        $(settings.appendClassName).show();
                    }else{
                        $(settings.appendClassName).hide();
                    }

                    $( settings.searchableTableID ).searchable();
                });

                $( document ).on( "click", settings.tableClassName+' tr', function() {
                    var rowText = $(this).find('td').eq(settings.trIndexAsText).text();
                    console.log(rowText);

                    $(settings.dropdownTableInputClassName).val(rowText);

                });
            }
        });

    }

}(jQuery));

