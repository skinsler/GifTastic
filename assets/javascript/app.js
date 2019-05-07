topics = ["Looney Tunes","The Simpsons","Tom and Jerry","Scooby-Doo, Where Are You!","SpongeBob SquarePants","The Flintstones","Futurama","Batman: The Animated Series","Family Guy","South Park","Avatar: The Last Airbender","Dexter's Laboratory","Rugrats","Teen Titans","Pokémon","The Fairly OddParents","Popeye the Sailor","Teenage Mutant Ninja Turtles"];

$( document ).ready(function() {

    for (let i=0;i<topics.length;i++) {
        let button = $("<button>");
        button.addClass("topic-btn");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttons").append(button);
    };


    $(document).on("click", ".topic-btn", function(){
        var person = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          person + "&api_key=IaQJ9HSoYke3qaiDntRKVdWxOLor3XLC&limit=10&rating=g";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            console.log(response);

            }
          });
      });
        




});


