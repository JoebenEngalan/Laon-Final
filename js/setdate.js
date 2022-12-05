function setdate1() {
  var days = 14;
  var newDate = new Date(Date.now()+days*24*60*60*1000);
  var mm = newDate.getUTCMonth() + 1; //months from 1-12
  var add_month = ['January', 'February', 'March','April', 
                  'May', 'June', 'July','August', 'September', 
                  'October','November', 'December'][mm-1] || '';

  var add_day = newDate.getUTCDate();
  var add_year = newDate.getUTCFullYear();

  document.getElementById('title').value = add_month +" "+ add_day;
  document.getElementById('deadline-hours').value = "8";
  document.getElementById('deadline-minutes').value = "00";
  document.getElementById('deadline-month').value = add_month;
  document.getElementById('deadline-day').value = add_day;
  document.getElementById('deadline-year').value = add_year;
  console.log(add_month);
  console.log(add_day);
}

function setdate2() {
  var days = 21;
  var newDate = new Date(Date.now()+days*24*60*60*1000);
  var mm = newDate.getUTCMonth() + 1; //months from 1-12
  var add_month = ['January', 'February', 'March','April', 
                  'May', 'June', 'July','August', 'September', 
                  'October','November', 'December'][mm-1] || '';
  
  var add_day = newDate.getUTCDate();
  var add_year = newDate.getUTCFullYear();

  document.getElementById('title').value = add_month +" "+ add_day;
  document.getElementById('deadline-hours').value = "8";
  document.getElementById('deadline-minutes').value = "00";

  document.getElementById('deadline-month').value = add_month;
  document.getElementById('deadline-day').value = add_day;
  document.getElementById('deadline-year').value = add_year;
  console.log(add_month);
  console.log(add_day);
}