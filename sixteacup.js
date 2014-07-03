// Expand hit target on product grid
if ($(".product-grid li").length > 0){
	 $(".product-grid li  a").bigTarget({
    	hoverClass: 'active',
	    clickZone : 'li:eq(0)'
	    });
}