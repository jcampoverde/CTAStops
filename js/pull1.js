$.getJSON('http://data.cityofchicago.org/resource/5cq6-qygt.json', function(busstops){
  $('#busstoplist').empty();
  
  $.each(busstops, function(i, lstop){
    $('#busstoplist').append(generateLStopLink(busstop));
  });
  
  $('#busstoplist').listview('refresh');
});

function generateLStopLink(busstop){
  return '<li><a href="javascript:void(0)'
    + '"onclick="goToStopDetailPage(\''
    + busstop.stop_name
    + '\',\''
    + busstop.station_descriptive_name +'\')">'
    + busstop.stop_name
    + '</a></li>';
   
}

function goToStopDetailPage(stopName){
  
  //create the page html template
var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
               + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
               + stopName + "</h4></div></div>");
               
 //append the new page to the page container
 stopPage.appendTo( $.mobile.pageContainer );
 
 //go to the newly create page
 $.mobile.changePage( stopPage );
}