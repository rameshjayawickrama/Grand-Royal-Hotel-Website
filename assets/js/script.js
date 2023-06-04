$(".pgbtn1").click(function(){
  $(this).css({
    backgroundColor: 'transparent',
    color: 'rgb(0, 128, 255)',
    border: '2px solid rgb(0, 128, 255)'
  })
  $(".pgbtn2").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pgbtn3").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pg1").fadeIn(500)
  $(".pg1").css({
    display: 'flex',
  })
  $(".pg2").css({
    display: 'none',
  })
  $(".pg3").css({
    display: 'none',
  })
})

$(".pgbtn2").click(function(){
  $(this).css({
    backgroundColor: 'transparent',
    color: 'rgb(0, 128, 255)',
    border: '2px solid rgb(0, 128, 255)'
  })
  $(".pgbtn1").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pgbtn3").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pg1").css({
    display: 'none',
  })
  $(".pg2").fadeIn(500)
  $(".pg2").css({
    display: 'flex'
  })
  $(".pg3").css({
    display: 'none',
  })
})

$(".pgbtn3").click(function(){
  $(this).css({
    backgroundColor: 'transparent',
    color: 'rgb(0, 128, 255)',
    border: '2px solid rgb(0, 128, 255)'
  })
  $(".pgbtn1").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pgbtn2").css({
    backgroundColor: 'rgb(0, 128, 255)',
    color: 'white',
    border: 'none'
  })
  $(".pg1").css({
    display: 'none',
  })
  $(".pg2").css({
    display: 'none',
  })
  $(".pg3").fadeIn(500)
  $(".pg3").css({
    display: 'flex',
  })
})


function openDatePicker(inputId) {
  var input = document.querySelector(`input[name="${inputId}"]`);
  if (input) {
      input.click();
  }
}