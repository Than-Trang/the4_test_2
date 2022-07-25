// // Set the date we're counting down to
// var countDownDate = new Date("Aug 28, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="the4s_countdown"
//   document.getElementById("the4s_countdown_day").innerHTML = days;
//   document.getElementById("the4s_countdown_hours").innerHTML = hours;
//   document.getElementById("the4s_countdown_minutes").innerHTML = minutes;
//   document.getElementById("the4s_countdown_seconds").innerHTML = seconds;
 
//   document.getElementById("the4s_countdown_day_2").innerHTML = days;
//   document.getElementById("the4s_countdown_hours_2").innerHTML = hours;
//   document.getElementById("the4s_countdown_minutes_2").innerHTML = minutes;
//   document.getElementById("the4s_countdown_seconds_2").innerHTML = seconds;
//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("the4s_countdown_day").innerHTML = "0";
//     document.getElementById("the4s_countdown_hours").innerHTML = "0";
//     document.getElementById("the4s_countdown_minutes").innerHTML = "0";
//     document.getElementById("the4s_countdown_seconds").innerHTML = "0";

//     document.getElementById("the4s_countdown_day_2").innerHTML = "0";
//     document.getElementById("the4s_countdown_hours_2").innerHTML = "0";
//     document.getElementById("the4s_countdown_minutes_2").innerHTML = "0";
//     document.getElementById("the4s_countdown_seconds_2").innerHTML = "0";
//   }
// }, 1000);
$('[data-countdown]').each(function() {

  let $this = $(this);
  finalDate = $(this).data('countdown');
  console.log(finalDate)
  $(this).countdown(finalDate, function(event) {
    $this.html(event.strftime(`<div class="the4s_wrap_countdown">
    <div class="the4s_number_countdown" id="the4s_countdown_day">
    %D
    </div>
    <p>days</p>
</div>
<div class="the4s_wrap_countdown">
    <div class="the4s_number_countdown" id="the4s_countdown_hours">
    %H
    </div>
    <p>hours</p>
</div>
<div class="the4s_wrap_countdown">
    <div class="the4s_number_countdown" id="the4s_countdown_minutes">
    %M
    </div>
    <p>mins</p>
</div>
<div class="the4s_wrap_countdown">
    <div class="the4s_number_countdown" id="the4s_countdown_seconds">
    %S
    </div>
    <p>secs</p>
</div>`));
  });
  });