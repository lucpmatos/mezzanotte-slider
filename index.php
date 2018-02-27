<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>Mezzanotte Slider</title>
    <link rel="stylesheet" href="css/mezzanotte-slider.css">
  </head>
  <body style="width:900px;height:auto;margin:auto;">
    <div id="qualquerNome">
      <ul>
        <li><img src="img/slide1.jpg" alt=""></li>
        <li><img src="img/slide2.jpg" alt=""></li>
        <li><img src="img/slide3.jpg" alt=""></li>
        <li><img src="img/slide4.jpg" alt=""></li>
        <li><img src="img/slide3.jpg" alt=""></li>
      </ul>
    </div>
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/mezzanotte-slider.js"></script>
    <script>
      $(document).ready(function(){
        $('#qualquerNome').mezzanotteSlider({
          // controls:false
          auto:true,
          // tempRoll:1000
        });
      });
    </script>
  </body>
</html>
