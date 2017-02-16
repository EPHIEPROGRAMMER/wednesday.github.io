$(document).ready(function() {
        $("button#meow").click(function() {
          $("ul#cat").prepend("<li>MEOW!! MEOW!!</li>");
          $("ul#dog").prepend("<li>WOOF!! WOOF!!</li>");
           $('li').css('background-color', 'green');
          });


          $("button#woof").click(function() {
            $("ul#cat").prepend("<li>MEOW!</li>");
            $("ul#dog").prepend("<li>WOOF!</li>");
            $('li').css('background-color', 'green');
          });


          });

          $(document).ready(function() {
             $("p").click(function() {
               $("img").show();
             });
           });

           $(document).ready(function() {
            $("p").click(function() {
              $(".walrus-showing").toggle();
              $(".walrus-hidden").toggle();
            });
          });
