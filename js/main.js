var map;
$(".edu_chart").hide();
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 24.20, lng: 120.855645}
        });
        
        // Load GeoJSON.
        map.data.loadGeoJson('/taichung_town.json');
        
        // Add some style.
        map.data.setStyle(function(feature) {
          var color = 'white';
          if (feature.getProperty('clicked')) {
            color = 'red';
          }
          return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: color,
            strokeColor: 'gray',
            strokeWeight: 2,
            fillOpacity: 0.4
          });
        });
        
        map.data.addListener('click', function(event) {
          if(typeof event.feature.getProperty('COUNTYNAME') !== 'undefined') {
            map.data.revertStyle();
            map.data.overrideStyle(event.feature, {fillColor: 'yellow'});
            if(typeof features != 'undefined'){
              for (var i = 0; i < features.length; i++){
                map.data.remove(features[i]);
              }
            }
            var Cunli = event.feature.getProperty('COUNTYNAME') + event.feature.getProperty('TOWNNAME');
            town_name = event.feature.getProperty('TOWNNAME')
            $('#town_click').html('<div>' + Cunli + '</div>').removeClass('text-muted');
            $('#school_name').html('').removeClass('text-muted');
            $('#school_describute').html('').removeClass('text-muted');

            $.getJSON('/geojson/'+taichung_num[town_name]+'.json', function (data) {
              features = map.data.addGeoJson(data);
              
              // Setup event handler to remove GeoJSON features

            }); 
            $.ajax({
              url: "/taichung_town_school_num.php",
              data:"town_num="+taichung_num[town_name],
              type:"POST",
              datatype:"json",
              error:function(){
                alert("錯誤!");
              },
              success: function(result){
                $("#school_num_text").text($("#town_click").text()+"各級學校數量")
                $("#school_num").html(result);
            }});
            
            $.ajax({
              url: "/taichung_town_edu.php",
              data:"town_name="+"臺中市"+town_name,
              type:"POST",
              datatype:"json",
              error:function(){
                alert("錯誤!");
              },
              success: function(result){
                $(".edu_chart").show();
                var pop = JSON.parse(result)
                pop.shift()
                pop.shift()
                edu = pop
                //alert(edu)
                var array2 = [],
                    array3 = [];
                for (var i=0;i<edu.length;i++){
                    if ((i+2)%2==0) {
                        array3.push(edu[i]);
                    }
                    else {
                        array2.push(edu[i]);
                    }
                }
                
                //var sum = array2.map(function (num, idx) {
                //  return num + array3[idx];
                //});
                var sum = []
                for( var i = 0; i < array2.length; i++)
                {
                    sum.push(parseInt(array2[i])+parseInt(array3[i]));
                }

                data = {
                    datasets: [{
                        data: edu,
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#E6C3C3", "#D2691E","#FFBF00","#6B8E23","#00477D","#F08080", "#B87333","#FFD700","#9ACD32","#5C50E6","#B22222", "#FFB366","#E6D933","#8CE600","#6633CC","#E60000", "#F28500",
                                            "#FFFF99","#99E64D","#9932CC","#FF7F50", "#D2B48C","#CCCC4D","#8FBC8F","#EE82EE","#FF4500", "#FF9900","#FFFF4D","#98FB98","#FF66CC","#A0522D", "#996B1F","#FFFF00","#008000","#E6005C","#E69966", "#DAA520","#CCFF00","#89CFF0","#990036","#FF007F"],
                        
                    }],
                
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        '博畢_男','博畢_女','博肄_男','博肄_女','碩畢_男','碩畢_女','碩肄_男','碩肄_女','大畢_男','大畢_女','大肄_男','大肄_女','二畢_男','二畢_女','二肄_男','二肄_女','後二畢_男','後二畢_女','後二肄_男','後二肄_女','前三肄_男','前三肄_女','高畢_男',
                        '高畢_女','高肄_男','高肄_女','職畢_男','職畢_女','職肄_男','職肄_女','國畢_男','國畢_女','國肄_男','國肄_女','初畢_男','初畢_女','初肄_男','初肄_女','小畢_男','小畢_女','小肄_男','小肄_女','自修_男','自修_女','不識_男','不識_女'
                    ],
                };
                $("#edu_text").text($("#town_click").text()+"各級教育程度人數")
                var ctx = document.getElementById("chart-area").getContext("2d");
                var myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data,
                        //options: options
                });
                
                data2 = {
                    datasets: [{
                        data: sum,
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#E6C3C3", "#D2691E","#FFBF00","#6B8E23","#00477D","#F08080", "#B87333","#FFD700","#9ACD32","#5C50E6","#B22222", "#FFB366","#E6D933","#8CE600","#6633CC","#E60000","#FFFF99","#99E64D"],
                        
                    }],
                
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        '博畢','博肄','碩畢','碩肄','大畢','大肄','二畢','二肄','後二畢','後二肄','前三肄','高畢','高肄','職畢','職肄','國畢','國肄','初畢','初肄','小畢','小肄','自修','不識'],
                };
                $("#edu_text2").text($("#town_click").text()+"各級教育程度人數(不分男女)")
                var ctx = document.getElementById("chart-area2").getContext("2d");
                var myDoughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: data2,
                        //options: options
                });
            }});
            
            
                
          }
          else{
            var name = event.feature.getProperty('Name')
            var description = event.feature.getProperty('description')
            $('#school_name').html('<div>' + name + '</div>').removeClass('text-muted');
            $('#school_describute').html('<div>' + description + '</div>').removeClass('text-muted');
          }
        });

      map.data.addListener('mouseover', function (event) {
        if(typeof event.feature.getProperty('COUNTYNAME') !== 'undefined') {
          var Cunli = event.feature.getProperty('COUNTYNAME') + event.feature.getProperty('TOWNNAME');
        }
        else{
          var Cunli = event.feature.getProperty('Name')
        }
          //map.data.revertStyle();
          //map.data.overrideStyle(event.feature, {fillColor: 'white'});
          
          $('#town_slip').html('<div>' + Cunli + '</div>').removeClass('text-muted');
        });
        
      map.data.addListener('mouseout', function (event) {
          $('#town_slip').html('在地圖上滑動或點選以顯示數據').addClass('text-muted');
        });
    
      }
       
       