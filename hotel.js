$(document).ready(()=>{
    $('.f-i').click(function(){
        const pastid = $('.facilities-icons div.active').attr('for');
        const fade = 200;
        $(`#${pastid}`).fadeOut({duration:fade});
        $('.facilities-icons div.active').removeClass('active');
        $(this).addClass('active');
        const id = $(this).attr('for');
        setTimeout(()=>{
            $(`#${id}`).fadeIn({duration:fade});
        },fade)
        
    })
	
}) 