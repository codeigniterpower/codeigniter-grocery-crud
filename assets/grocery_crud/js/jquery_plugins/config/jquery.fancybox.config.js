$(function() {
    if ($('.image-thumbnail').length > 0) {
        $('.image-thumbnail').fancybox({
            'transitionIn': 'none',
            'transitionOut': 'none',
            'speedIn': 600,
            'speedOut': 200,
            'overlayShow': false
        });
    }
});	