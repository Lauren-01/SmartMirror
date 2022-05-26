var groot = 0;

function weer() {
    WeatherForecastDisplay.attach(".horizontalweatherForecast");
}

/*
	WeatherForecastDisplay encapsulates the weather forecast
*/
var WeatherForecastDisplay=(function() {
    //used for looking up a simple text value for the month.
    var MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    /*
    * WeatherForecastWidget - encapsulates data retrieval and displau
    */
    function WeatherForecastWidget(selector) {

        //Initialize the widget using the container parameters
        this.config={
            "location":selector.attr("data-location"),
            "unitGroup":selector.attr("data-unitGroup") || "us",
            "key": selector.attr("data-key") 
        }
        
        //the root HTML tag selector
        this.selector=selector;

        //weather forecasta data
        this.data=null;

        var me=this;
        //constructs Weather API request and then loads the weather forecast data from the Weather API
        this.loadForecastData=function() {
            me.refresh();
            //endpoint
            var uri="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?";
            //parameters
            uri+="unitGroup="+me.config.unitGroup+"&locationMode=single&aggregateHours=24&contentType=json&iconSet=icons1&location="+me.config.location+"&key="+me.config.key;
            $.get(uri, function( rawResult ) {
                me.data=rawResult;
                me.refresh();
            });
        }

        //displays the weather data inside the container tag
        this.refresh=function() {
            //me refers to the WeatherForecastWidget instance
            var root=$(me.selector);

            //no data at all - exit
            if (!me.data) {
                $(me.selector).html("No data available for "+me.config.location);
                return;
            }

            var locationData=me.data.location;

            var forecastValues=locationData.values;

            //sets up the basic skeleton HTML for the forecast display
            root.toggleClass("forecastwidget", true);
            root.html("<div class='location'></div>"+
                        "<div class='days'></div>"+
                        "<div class='footer'><a href='https://www.visualcrossing.com/weather-api' title='Weather Data by Visual Crossing' target='_blank'>Credit</a>");

            //use the container size to decide how to display the forecast
            //and how many days
            var rect=root.get(0).getBoundingClientRect()
            
            var isVertical=rect.height>rect.width;
            root.children(".days").toggleClass("vertical", isVertical);

            root.children(".location").html(me.config.location);
            forecastValues.forEach(function(d) {
                //create a new day div with children
                var dayElement=$("<div class='day'>"+
                        "<div class='date'></div>"+
                        "<div class='icon'></div>"+
                        "<div class='maxt'></div>"+
                        "<div class='mint'></div>"+
                        "<div class='conditions'></div>"+
                        "</div>");
                
                //add the day to the days element
                root.find(".days").append(dayElement);
                
                //temperature and conditions are simply inserted into the appropriate div
                dayElement.find(".maxt").html(Math.round(d.maxt));
                dayElement.find(".mint").html(Math.round(d.mint));
                dayElement.find(".conditions").html(d.conditions);
                

                var date= new Date(d.datetimeStr);
                
                dayElement.find(".date").html(MONTHS[date.getMonth()]+" "+date.getDate());
                
                var icon=dayElement.find(".icon");
                icon.toggleClass(d.icon,true);
            });
        }
    }
    
    var attach=function(selector) {

        var instance=new WeatherForecastWidget($(selector) );
        instance.loadForecastData();
        return instance;
    }
    return {
        "attach":attach
    }
    
})();
