$(document).ready(function(){
    $("a").on("click",function(){
        $("html,body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000)
        return false;
    })
})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();