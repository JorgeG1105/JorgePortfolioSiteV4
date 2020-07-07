//Navbar logic
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars fa-2x'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times fa-2x'></i>");
        }
    });
})

//Scrolling Effect
$(document).ready(function(){
    let scrollLink = $('.scroll');

    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })
})

//Form Validation
$('.submit-btn').click(function(e){
    e.preventDefault();
    console.log('Submit clicked!')

    var name = $('.name-field').val()
    var email = $('.email-field').val()
    var message = $('.msg-field').val()
    var errormsg = $('.error-msg')
    errormsg.empty()

    //Name Validation
    if(name.length > 2){
        errormsg.append('Name is valid ')
    }
    else {
        errormsg.append('Name is not valid! Needs more than 2 characters!')
    }

    //Email Validation
    if(email.length > 5 && email.includes('@') && email.includes('.')){
        errormsg.append('Email is valid ')
    }
    else {
        errormsg.append('Email is not valid! Must be greater than 5 characters, include an @ sign and a `.` ')
    }

    //Message Validation
    if(message.length > 10){
        errormsg.append('Message is Valid ')
    }
    else {
        errormsg.append('Message is not valid! Must be greater than 20 characters.')
    }

})
