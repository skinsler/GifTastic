$( document ).ready(function() {
    topics = ["Looney Tunes","The Simpsons","Tom and Jerry","Scooby-Doo, Where Are You!","SpongeBob SquarePants","The Flintstones","Futurama","Batman: The Animated Series","Family Guy","South Park","Avatar: The Last Airbender","Dexter's Laboratory","Rugrats","Teen Titans","Pokémon","The Fairly OddParents","Popeye the Sailor","Teenage Mutant Ninja Turtles"];

    function renderButtons() {

        for (let i=0;i<topics.length;i++) {
            let button = $("<button>");
            button.addClass("btn btn-primary topic-btn m-1");
            button.attr("data-name", topics[i]);
            button.text(topics[i]);
            $("#buttons").append(button);
        };

    };

    renderButtons();

    $(document).on("click", ".topic-btn", function(){
        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          topic + "&api_key=IaQJ9HSoYke3qaiDntRKVdWxOLor3XLC&limit=10&rating=g";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            console.log(response);
            var results = response.data;
    
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");
    
              var rating = results[i].rating;
    
              var p = $("<p>").text("Rating: " + rating);

              var stillImageUrl = results[i].images.fixed_height_still.url;
              var animatedImageUrl = results[i].images.fixed_height.url;
    
              var stillImage = $("<img>");
              stillImage.attr("src", stillImageUrl);
              stillImage.attr("data-still", stillImageUrl);
              stillImage.attr("data-animate", animatedImageUrl);
              stillImage.attr("data-state", "still");
              var animatedImage = (results[i].images.fixed_height.url);
    
              gifDiv.prepend(p);
              gifDiv.prepend(stillImage);
    
              $("#gifs").prepend(gifDiv);
            }
          });
      });
    
    $(document).on("click", "img", function(){  
  
        let animatedUrl = $(this).attr("data-animate");
        let stillUrl = $(this).attr("data-still");
        let state = $(this).attr("data-state");
           
        if ( state === "still") {
          $(this).attr("src", animatedUrl);
          $(this).attr("data-state", "animating");
        }
        else {
          $(this).attr("src", stillUrl);
          $(this).attr("data-state", "still");  
        };

    });




});


