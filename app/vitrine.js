$(document).ready(function (event){
    $('#menu').click(function (event){
        if($('#navbarText').css('display') === 'none'){
            $('#navbarText').show()
        }else{
            $('#navbarText').hide()
        }
    })
})