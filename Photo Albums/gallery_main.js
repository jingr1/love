function switchAlbum(album_id)
{
    jQuery('#main').quicksand(jQuery('#album_' + album_id).find('div'), function() {
        activatePP();
    });
    items = jQuery('#main').find('div').children('a');
    jQuery.each(items, function () {
        if (jQuery(this).attr('rel')) {
            jQuery(this).attr('rel', 'prettyPhoto[' + album_id + ']');
        }
    });
    jQuery(".gallery-filters > li > a").removeClass('sel');
    jQuery("#album_filter_" + album_id).addClass('sel');
}
