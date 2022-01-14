//로그인버튼 눌렀을 때
$(document).ready(function(){
    $('.login-btn').click(function(){
        $('.login-btn').css("display","none");
        $('.welcome').css("display","flex")
        
        setTimeout(function(){
            $('#wrap').css("display","none");
            $('body').toggleClass('changed');
            $('#wrap2').css("display","flex");
        }, 2000);

    });
      
});

//날씨
$(document).ready(function() {
    function success(position) {
        let weatherIcon = {
                  '01' : 'fas fa-sun',
                  '02' : 'fas fa-cloud',
                  '03' : 'fas fa-cloud',
                  '04' : 'fas fa-cloud-meatball',
                  '09' : 'fas fa-cloud-sun-rain',
                  '10' : 'fas fa-cloud-showers-heavy',
                  '11' : 'fas fa-poo-storm',
                  '13' : 'fas fa-snowflake',
                  '50' : 'fas fa-smog'
                };
    
                let weathername = {
                  '01' : '맑음',
                  '02' : '약간흐림',
                  '03' : '흐림',
                  '04' : '흐림',
                  '09' : '흐림 후 비',
                  '10' : '매우흐림',
                  '11' : '폭풍',
                  '13' : '눈',
                  '50' : '안개'
                };
    
                let weatherImg = {
                  '01' : 'sunny.png',
                  '02' : 'cloudy.png',
                  '03' : 'cloudy.png',
                  '04' : 'cloudy.png',
                  '09' : 'heavyrain.png',
                  '10' : 'heavyrain.png',
                  '11' : 'heavyrain.png',
                  '13' : 'snowing.png',
                  '50' : 'snow.png'
                }
    
    
    
    
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const API_KEY = "16cb45b73013edf5a37346f24ea3b990";
    
        // status.textContent = '';
    
        console.dir("latitude : " + latitude)
        console.dir("longitude : " + longitude)
    
        $.ajax({
                  url:'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + API_KEY + '&units=metric',
                  dataType:'json',
                  type:'GET',
                  success:function(data){
                  var $Icon = (data.weather[0].icon).substr(0,2);
                  var $Temp = Math.floor(data.main.temp) + '°';
                  var $city = data.name;
                  $('.CurrIcon').append( '<i class= "' + weatherIcon[$Icon] + '"></i>');
                  $('.CurrTemp').prepend($Temp + '<div class="weather-name" style="margin-left:15px;">'+ weathername[$Icon] + '</div>');
                //   $('.weather').css({"background":"url(resources/image/"+ weatherImg[$Icon] +")","background-size":"cover"});
                //  $('.weather').css({"background":"url(resources/image/cloudy.png)","background-size":"cover"});
    
    
                 
    
    
    
                  }
                
                
                })
    
    
    }
    
    function error() {
        status.textContent = 'Unable to retrieve your location';
    }
    
    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
    
    
    
    })
