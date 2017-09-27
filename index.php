<!DOCTYPE html>
<html>
  <head>
    <title>臺中市教育程度分析</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="/js/taichung_num.js"></script>
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.js"></script>
     <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/portfolio-item.css" rel="stylesheet">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      html,body {
        font-family: 微軟正黑體;
      }
      #map {
        height: 450px;
        width:750px;
      }
      /* Optional: Makes the sample page fill the window. */

      .arc text {
        font: 10px sans-serif;
        text-anchor: middle;
      }
      
      .arc path {
        stroke: #fff;
      }
      
      .box{width:1100px; float:left;}
      .zone{width:100%; height:100%;}
      
      #town_click{
        margin:0px;
      }

    </style>
  </head>
  <body>
    <!--div id="map"></div>
    <h2 id="town_slip" class="text-muted">在地圖上滑動或點選以顯示數據</h2>
    <h2 id="town_click" class="text-muted"></h2>
    <p id = "school_num"></p>
    <h3 id="school_name" class="text-muted"></h3>
    <p id="school_describute" class="text-muted"></p-->
    

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Home</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container">

        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 id="town_click" class="text-muted page-header">臺中市
                </h1>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">

            <div class="col-md-10 col-lg-8">
                <h3 id="town_slip" class="text-muted">在地圖上滑動或點選以顯示數據</h3>
                <div id="map"></div>
            </div>

            <div class="col-md-2 col-lg-4">
                <h3 id="school_num_text"></h3>
                <p id = "school_num"></p>
                <h3 id="school_name" class="text-muted"></h3>
                <p id="school_describute" class="text-muted"></p>
            </div>

        </div>
        <!-- /.row -->

        <div class="row edu_chart">

            <div class="col-lg-12">
                <h3 id="edu_text" class="page-header"></h3>
            </div>
            
            <div class="box">
                <canvas id="chart-area" class="zone" width="900" height="500"></canvas>
            </div>
            
        </div>
        <!-- /.row -->
        
        <div class="row edu_chart">

            <div class="col-lg-12">
                <h3 id="edu_text2" class="page-header"></h3>
            </div>

            <div class="box">
                <canvas id="chart-area2" class="zone" width="900" height="500"></canvas>
            </div>

        </div>

        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; BigData demo 2017</p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <script src="/js/main.js"></script>
    
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCDNF8aSNQR6STp814uuav8o1mS9Sf4Nk&callback=initMap">
    </script>
    
  </body>
</html>