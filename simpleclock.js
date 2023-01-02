let rightnow = new Date (),
      weekday = rightnow.getDay (),
      themonth = rightnow.getMonth (),
      thedate = rightnow.getDate(),
      theyear = rightnow.getFullYear ();

      ds = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
     date_div = document.getElementById ("write_date");
       themonth++;
      date_div.innerHTML = ds[weekday] + ', ' +  themonth + '/' + thedate + '/' + theyear ;

       const Myclock = () =>{ let time = new Date (),
        hours = time.getHours (),
        mins = time.getMinutes(),
        secs = time.getSeconds(),
        ap = (hours >=12) ? 'pm' : 'am',
        my_div = document.getElementById('showtime');
        hours = (hours>=13)? hours -=12: hours;
        hours = (hours<1) ? 12: hours;
        mins = (mins<10) ?  "0" + mins  : mins; 
        secs = (secs<10) ? '0' + secs : secs;
        
        my_div.innerHTML= hours + ':' + mins + ':' + secs + '' + ap;

setTimeout(() => { Myclock(); 
    
}, 1000);
      }
      Myclock (); 





 