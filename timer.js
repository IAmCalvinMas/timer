/*
 * title: time difference
 * description: calculates the time difference between two dates
 * author: calvinmas@spacemilk
 */


function assignDates( date ){
  
  return [

    date.getFullYear(), 
    date.getMonth(), 
    date.getDate(), 
    date.getHours(), 
    date.getMinutes(), 
    date.getSeconds()
  ];
}


function calculateDateDiff( date1, date2 ){


  if( date1.getTime() < date2.getTime() ){

    let placeholder = date1;
    date1 = date2;
    date2 = placeholder;
  }

  date1 = assignDates( date1 );
  date2 = assignDates( date2 );

  const dateDiff = [];


  const dateBaseSys = date => [ 

    0, 11, 
    [
      31, date[0] % 4 == 0 ? 29 : 28, 
      31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ][date[1]], 24, 60, 60 
  ];

  date1.forEach( (item, index, array) => {

    let pointer = array.length - 1 - index;
	
    if( date1[pointer] < date2[pointer] ){
       
      date1[pointer] += dateBaseSys(array)[pointer];
      date1[pointer - 1] -= 1;
    }

    dateDiff[pointer] = date1[pointer] - date2[pointer];
  });

  return dateDiff;
}


setInterval(

  () => console.log( 

    calculateDateDiff( new Date(), new Date(1974, 08, 09)) 
  ), 
  1000
);
