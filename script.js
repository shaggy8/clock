setInterval(clock, 1000);

function clock () {
  var h = document.getElementsByClassName('h')[0];
  var min = document.getElementsByClassName('min')[0];
  var sec = document.getElementsByClassName('sec')[0];

  var time = new Date;

  if ( time.getHours() < 10) {
    h.innerHTML = '0' + time.getHours();
  } else {
    h.innerHTML = time.getHours();
  }
  
  if ( time.getMinutes() < 10) {
    min.innerHTML = '0' + time.getMinutes();
  } else {
    min.innerHTML = time.getMinutes();
  }
  
  if ( time.getSeconds() < 10) {
    sec.innerHTML = '0' + time.getSeconds();
  } else {
    sec.innerHTML = time.getSeconds();
  }
}