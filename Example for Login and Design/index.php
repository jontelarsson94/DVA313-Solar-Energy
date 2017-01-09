<?php
require_once "src/service/UserService.php";

session_start();
$userService = new UserService();

require_once "src/action/form.php";
?>



<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Kostnad och lönsamhet för solceller</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {packages: ['corechart']});
    </script>

    <!-- Theme CSS -->
    <link href="css/agency.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php
        include "view/modal/login.php";
        include "view/modal/privacy_policy.php"
    ?>

    <!-- Google Chart -->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" scr="js/charts/line_chart.js"></script>


</head>

<body id="page-top" class="index" ng-app="index" ng-controller="indexCtrl" ng-cloak>

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Meny <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Future Energy Center</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <<?php
                    if(isset($_SESSION["admin"])){
                      if($_SESSION["admin"] == 1){
                        echo"<li>
                              <a class='page-scroll' href='#changeDefaultsAdmin'>Ändra standardvärden</a>
                            </li>";
                      }
                      elseif ($_SESSION["admin"] == 0) {
                        echo"<li>
                              <a class='page-scroll' href='user.php'>Change defaults</a>
                            </li>";
                      }
                    } ?>
                    <li>
                        <a class="page-scroll" href="#calculatorId">Kalkylator</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#about">Om oss</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Kontakt</a>
                    </li>
                    <li>

                    <!-- Buttons for Login and Loggout -->
                      <?php

                      if (isset($_SESSION["admin"])) {
                        echo "<a href='?form=logout' class='page-scroll'>
                        <span class='glyphicon glyphicon-user' aria-hidden='true'></span> Log-out</a>";
                      }else {
                        echo "<a href='' data-toggle='modal' class='page-scroll' data-target='#loginModal'>";
                        echo "<span class='glyphicon glyphicon-user' aria-hidden='true'></span> Logga in</a>";
                      }
                      ?>
                    </li>
                </ul>

            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Förnybar Energi</div>
                <div class="intro-heading">Kostnad och lönsamhet för solceller</div>
                <a href="#services" class="page-scroll btn btn-xl">Börja räkna nu</a>
            </div>
        </div>
    </header>

    <!-- Calculator Section -->
    <section id="services">
        <div class="container">

        <?php
        if (isset($_SESSION["admin"]) && $_SESSION["admin"] == 1) {
        ?>
          <div class="row">
              <div class="col-lg-12 text-center" id="changeDefaultsAdmin">
              <br>
                  <h2 class="section-heading">Ändra standardvärden</h2>
                  <!--<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->
              </div>
          </div>

          <form class="form-group" action="api/upload_excel.php" method="post" enctype="multipart/form-data">
            Välf fil att ladda upp:
            <input class="form-control-file" type="file" name="fileToUpload" id="fileToUpload">
            <br>
            <input class="btn btn-primary" type="submit" value="Ladda upp standardvärden" name="submit">
          </form>
          <br>
          <form method="get" action="excel/start_default.xlsx">
            <button class="btn btn-info" type="submit">Ladda ner mall</button>
          </form>
          <br>
          <form method="get" action="excel/default_solar.xlsx">
            <button class="btn btn-info" type="submit">Ladda ner nuvarande excel fil</button>
          </form>
        <?php
        }
        ?>
        <?php
if(isset($_GET['upload']) && $_GET['upload'] == true){
?>
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h3>Uppladningen av nya standardvärden lyckades!</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Stäng</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
<?php
  }
?>

          <!-- Pie Chart -->
          <div id="line_chart"></div>

            <div class="row" id="calculatorId">
            <br>
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Kalkylator</h2>
                    <div class="panel-group" id="accordion">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                            Hur du använder kalkylatorn</a>
                          </h4>
                        </div>
                        <div id="collapse1" class="panel-collapse collapse">
                          <div class="panel-body"><h3>Gör så här:</h3>
                          <p>1. Justera de förvalda ingångsvärdena under "Indata och Resultat". Följ anvisningarna för inmatning.</p>
                          <p>2. Använd räknehjälpen i fliken "Grundläggande antaganden" för att beräkna de årliga kostnaderna. </p>
                          <p>3. Titta igenom fliken "Grundläggande antaganden", för att se om antagandena stämmer för din anläggning.</p>
                          <p>4. Resultat visas i flikarna "Indata och Resultat", ….</p>
                          <p>5. Ändra dina indata och se hur det påverkar resultaten. </p>
                          <br>
                          <h3>Resultaten beräknas för tre olika fall:</h3>
                          <p>1. Utan ROT-avdrag och investeringsstöd, med eventuell skattereduktion.</p>
                          <p>2. Med ROT-avdrag och eventuell skattereduktion.</p>
                          <p>3. Med investeringsstöd och eventuell skattereduktion.</p>
                          </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                            Ordlista</a>
                          </h4>
                        </div>
                        <div id="collapse2" class="panel-collapse collapse">
                          <div class="panel-body"><h3>Produktionskostnad:</h3>
                          <p>Produktionskostnaden beräknas som LCOE = Levelized Cost Of Electricity. Principen är att alla kostnader under livslängden divideras med solelproduktionen under livslängden. En nuvärdesberäkning görs av kostnader och solelproduktion med hjälp av en kalkylränta. När det gäller solelproduktionen tas även hänsyn till att den minskar något med tiden efter det första driftåret.</p>
                          <img src="img/produktionskostnad.png" alt="produktionskostnad">
                          <p>N = Ekonomisk livslängd (år)</p>
                          <p>R = Kalkylränta (%)</p>
                          <br>
                          <h3>Nuvärde:</h3>
                          <p>Kostnader och intäkter beräknas som nuvärde med hjälp av kalkylräntan. Beräkningarna görs med PV-funktionen i Excel eller med formeln: </p>
                          <img src="img/nuvarde.png">
                          <p>A = kostnad eller intäkt som ska nuvärdesberäknas (kr)</p>
                          <br>
                          <h3>Diskonterad återbetalningstid</h3>
                          <p>Den diskonterade återbetalningstiden är antagen som det år då det ackumulerade nuvärdet av kassaflödet blir positivt.</p>
                          <br>
                          <h3>Internränta (IRR)</h3>
                          <p>Internräntan är den räntesats som investeringen avkastar. Beräkningarna görs med värden för kassaflöden utan nuvärdesberäkning.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            <div id="calculations">
            <br><br>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs nav-justified" role="tablist">
                <li role="presentation" class="active"><a href="#private" aria-controls="home" role="tab" data-toggle="tab">Indata</a></li>
                <li role="presentation"><a href="#extended" aria-controls="profile" role="tab" data-toggle="tab">Grundläggande antaganden</a></li>
                <li role="presentation"><a href="#result" aria-controls="profile" role="tab" data-toggle="tab">Resultat</a></li>
              </ul>
              <br>

              <div class="col-md-7"></div>
                    <div class="col-md-4">
                    <p>Klicka för att ändra standardvärden som passar dig!</p>
                      <div data-toggle="buttons" class="btn-group btn-group-justified" id="buttonArea">
                        <div class="btn-group" id="personToggle" ng-click="getIndataDefaultsPerson(); getExtendedDefaultsPerson()">
                          <label class="btn btn-primary active"><input type="radio" name="optradio" id="radioPerson" checked="checked" ng-click="getIndataDefaultsPerson(); getExtendedDefaultsPerson()" value="1">Privatperson</label>
                        </div>
                        <div class="btn-group" id="companyToggle" ng-click="getIndataDefaultsCompany(); getExtendedDefaultsCompany()">
                          <label class="btn btn-primary"><input type="radio" name="optradio" id="radioCompany" value="2" ng-click="getIndataDefaultsCompany(); getExtendedDefaultsCompany()">Företag</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="row"></div>
                    <br>

              <!-- Tab panes -->
              <div class="tab-content" id="input-tabs">
                <div role="tabpanel" class="tab-pane active" id="private" ng-init="getIndataDefaultsPerson()"></br>

                  <form>
                    <div class="row form-group" ng-repeat="default in indata_defaults" ng-if="default.row < 70 && default.type == 'Heading'">
                      <!--Accordion start -->
                      <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#col-{{default.row}}">
                              {{default.name}}</a>
                            </h4>
                          </div>
                          <div id="col-{{default.row}}" class="panel-collapse collapse">
                            <div class="panel-body">
                              <div class="col-md-12" ng-repeat="rest in indata_defaults" ng-if="rest.row > default.row && rest.row < rows[default.row]">
                                <div class="col-md-2"></div>
                                <div class="col-md-6">
                                  <br>
                                  <p ng-if="rest.type == NULL">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Result'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'IRR'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Subheading'"><i>{{rest.name}}</i></p>
                                </div>
                                <br>
                                <div class="col-md-3 input-group">

                                  <div ng-if="rest.type ==NULL || rest.type == 'Result'" class="input-group">
                                    <input ng-if="rest.type == NULL" type="text" class="form-control" id="indata-{{rest.row}}" aria-label="..." value="{{rest.value}}">
                                    <input ng-if="rest.type == 'Result'" type="text" class="form-control" id="indata-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.type == NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="Min: {{rest.min}} | Max: {{rest.max}}" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button ng-if="rest.type != NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>


                                    </div>
                                  </div>
                                  <div ng-if="rest.type == 'IRR'" class="input-group">
                                    <input type="text" class="form-control" id="indata-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button id="click-{{rest.row}}" class="btn btn-default">Räkna ut</button>

                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion end -->
                    </div>
                  </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="extended"  ng-init="getExtendedDefaultsPerson()"></br>
                  <form>
                    <div class="row form-group" ng-repeat="extended in extended_defaults" ng-if="extended.type == 'Heading'">
                      <!--Accordion start -->
                      <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#colex-{{extended.row}}">
                              {{extended.name}}</a>
                            </h4>
                          </div>
                          <div id="colex-{{extended.row}}" class="panel-collapse collapse">
                            <div class="panel-body">
                              <div class="col-md-12" ng-repeat="rest in extended_defaults" ng-if="rest.row > extended.row && rest.row < rowsex[extended.row]">
                                <div class="col-md-2"></div>
                                <div class="col-md-6">
                                  <br>
                                  <p ng-if="rest.type == NULL">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Result'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'IRR'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Subheading'"><i>{{rest.name}}</i></p>
                                </div>
                                <br>
                                <div class="col-md-3 input-group">

                                  <div ng-if="rest.type ==NULL || rest.type == 'Result'" class="input-group">
                                    <input ng-if="rest.type == NULL" type="text" class="form-control" id="extended-{{rest.row}}" aria-label="..." value="{{rest.value}}">
                                    <input ng-if="rest.type == 'Result'" type="text" class="form-control" id="extended-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.type == NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="Min: {{rest.min}} | Max: {{rest.max}}" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button ng-if="rest.type != NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>


                                    </div>
                                  </div>
                                  <div ng-if="rest.type == 'IRR'" class="input-group">
                                    <input type="text" class="form-control" id="indata-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button id="click-{{rest.row}}" class="btn btn-default">Räkna ut</button>

                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion end -->
                    </div>
                  </form>
                </div>
                <div role="tabpanel" class="tab-pane" id="result"></br>
                  <form>
                    <div class="row form-group" ng-repeat="default in indata_defaults" ng-if="default.row > 70 && default.type == 'Heading'">
                    <!--Accordion start -->
                      <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                          <div class="panel-heading">
                            <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#accordion" href="#col-{{default.row}}">
                              {{default.name}}</a>
                            </h4>
                          </div>
                          <div id="col-{{default.row}}" class="panel-collapse collapse">
                            <div class="panel-body">
                              <div class="col-md-12" ng-repeat="rest in indata_defaults" ng-if="rest.row > default.row && rest.row < rows[default.row]">
                                <div class="col-md-2"></div>
                                <div class="col-md-6">
                                  <br>
                                  <p ng-if="rest.type == NULL">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Result'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'IRR'">{{rest.name}}</p>
                                  <p ng-if="rest.type == 'Subheading'"><i>{{rest.name}}</i></p>
                                </div>
                                <br>
                                <div class="col-md-3 input-group">

                                  <div ng-if="rest.type ==NULL || rest.type == 'Result'" class="input-group">
                                    <input ng-if="rest.type == NULL" type="text" class="form-control" id="indata-{{rest.row}}" aria-label="..." value="{{rest.value}}">
                                    <input ng-if="rest.type == 'Result'" type="text" class="form-control" id="indata-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.type == NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="Min: {{rest.min}} | Max: {{rest.max}}" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button ng-if="rest.type != NULL && rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>


                                    </div>
                                  </div>
                                  <div ng-if="rest.type == 'IRR'" class="input-group">
                                    <input type="text" class="form-control" id="indata-{{rest.row}}" readonly="readonly" value="{{rest.value}}">
                                    <div class="input-group-btn">

                                      <!-- Buttons -->
                                      <a role="button" class="btn btn-default disabled">{{rest.unit}}</a>
                                      <button ng-if="rest.comment != NULL" type="button" class="btn btn-default" data-container="body" style="background-color: #fed136"
                                        data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="{{rest.comment}}">
                                        <span style="color:white" class="glyphicon glyphicon-paperclip" ></span>
                                      </button>
                                      <button id="click-{{rest.row}}" class="btn btn-default">Räkna ut</button>

                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion end -->
                    </div>
                  </form>
                  <div class="row">
                    <button class="btn btn-primary col-md-12" id="diagramBtn">Räkna ut diagram</button>
                    <div id="pieChart1" class="col-md-5"></div>
                    <div id="lineChart1" class="col-md-7"></div>
                    <div id="pieChart2" class="col-md-5"></div>
                    <div id="lineChart2" class="col-md-7"></div>
                    <div id="pieChart3" class="col-md-5"></div>
                    <div id="lineChart3" class="col-md-7"></div>
                    <br>
                  </div>
                  <div class="row">
                  <br><br>
                    <div>
                      <button id="createPDFBtn" class="btn btn-primary col-md-12">Ladda ner PDF</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div ng-repeat="i in getNumber(number) track by $index" ng-if="$index >= 4" id="cashflowDiv">
              <input ng-if="$index <= 54" type="hidden" id="a-{{$index}}" value="{{$index-4}}">
              <input ng-if="$index >= 60 " type="hidden" id="a-{{$index}}" value="{{$index-60}}">
              <input type="hidden" id="b-{{$index}}" value="0">
              <input type="hidden" id="c-{{$index}}" value="0">
              <input type="hidden" id="d-{{$index}}" value="0">
              <input type="hidden" id="e-{{$index}}" value="0">
              <input type="hidden" id="f-{{$index}}" value="0">
              <input type="hidden" id="g-{{$index}}" value="0">
              <input type="hidden" id="h-{{$index}}" value="0">
              <input type="hidden" id="i-{{$index}}" value="0">
              <input type="hidden" id="j-{{$index}}" value="0">
              <input type="hidden" id="k-{{$index}}" value="0">
              <input type="hidden" id="l-{{$index}}" value="0">
              <input type="hidden" id="m-{{$index}}" value="0">
              <input type="hidden" id="n-{{$index}}" value="0">
              <input type="hidden" id="o-{{$index}}" value="0">
              <input type="hidden" id="p-{{$index}}" value="0">
              <input type="hidden" id="q-{{$index}}" value="0">
              <input type="hidden" id="r-{{$index}}" value="0">
              <input type="hidden" id="s-{{$index}}" value="0">
            </div>
    </section>





    <!-- About Section -->
    <section id="about" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Om oss</h2>
                    <h3 class="section-subheading text-muted">
                      Future Energy Center
                    </h3>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <p class="large text-muted">
                      Projektets syfte är att utveckla en heltäckande
                      analysmodell för investeringsbeslut för
                      solcellsanläggningar. Modellen ska baseras på en
                      internationellt etablerad modell för analys av
                      produktionskostnad av energi (Levelized Cost Of Energy)
                      som ska anpassas till svenska förhållanden.
                    </p>

                    <table class="table table-striped" style="text-align:left">
                       <tr>
                         <td>Projektnamn:</td>
                         <td>Investeringskalkyl för solceller</td>
                       </tr>
                       <tr>
                         <td>Forskningsinriktning:</td>
                         <td>Future Energy Center</td>
                       </tr>
                       <tr>
                         <td>Projektledare:</td>
                         <td>Bengt Stridh , Mälardalens högskola</td>
                       </tr>
                       <tr>
                         <td>Projektperiod:</td>
                         <td>2015/07/01 - 2016/09/01</td>
                       </tr>
                       <tr>
                         <td>Deltagare:</td>
                         <td>
                           Mälardalens högskola, Stockholm stad och en
                           referensgrupp på ca 50 personer, bestående av
                           byggherrar, fastighetsägare, leverantörer,
                           konsulter och elbolag.
                         </td>
                       </tr>
                       <tr>
                         <td>Ansvar:</td>
                         <td>
                           Mälardalens högskola och Stockholms stad har lag ner mycket tid och arbete på att säkerställa resultatet från räknemallen är korrekt i alla avseenden. Vi kan emellertid inte garantera att det inte förekommer fel. Med hänsyn till att räknemallen tillhandahålls utan kostnad för användaren friskriver sig därför Mälardalens högskola och Stockholm stad, inom ramen för gällande lag, allt ansvar för eventuella förluster som uppstår som en följd av dess användning. All användning av räknemallen sker under eget ansvar.
                         </td>
                       </tr>
                      </table>

                </div>
            </div>
        </div>
    </section>


    <!-- Clients Aside -->
    <aside class="clients">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <img src="img/logos/mdh_logo.png" class="img-responsive img-centered" alt="">
                </div>
                <div class="col-md-2 col-sm-6">
                    <img src="img/logos/fe_logo.png" class="img-responsive img-centered" alt="">
                </div>
                <div class="col-md-4 col-sm-6">
                    <img src="img/logos/stockholms-stad_logo.png" class="img-responsive img-centered" alt="">
                </div>
                <div class="col-md-3 col-sm-6">
                    <img src="img/logos/energimyndigheten_logo.png" class="img-responsive img-centered" alt="">
                </div>
            </div>
        </div>
    </aside>


    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Kontakta oss</h2>
                    <!--<h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Ditt namn *" id="name" required data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Din email *" id="email" required data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input type="tel" class="form-control" placeholder="Ditt telefonnummer *" id="phone" required data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea class="form-control" placeholder="Ditt meddelande *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" class="btn btn-xl">Skicka meddelande</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <span class="copyright">Copyright &copy; Future Energy Center 2016</span>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <!--<li><a href="#"><i class="fa fa-twitter"></i></a>
                        </li>-->
                        <li><a href="https://www.facebook.com/futureenergymdh/?fref=ts"><i class="fa fa-facebook"></i></a>
                        </li>
                        <!--<li><a href="#"><i class="fa fa-linkedin"></i></a>
                        </li>-->
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                        
                        <!--
                        <li><a href="" data-toggle='modal' data-target="#portfolioModal1">Terms of Use</a>
                        </li>
                        -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Portfolio Modals -->
    <!-- Use the modals below to showcase details about your portfolio projects! -->

    <!-- Portfolio Modal 1 -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/roundicons-free.png" alt="">
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <p>
                                    <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                                <ul class="list-inline">
                                    <li>Date: July 2014</li>
                                    <li>Client: Round Icons</li>
                                    <li>Category: Graphic Design</li>
                                </ul>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Portfolio Modal 2 -->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>Project Heading</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/startup-framework-preview.png" alt="">
                                <p><a href="http://designmodo.com/startup/?u=787">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
                                <p>You can preview Startup Framework <a href="http://designmodo.com/startup/?u=787">here</a>.</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Portfolio Modal 3 -->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/treehouse-preview.png" alt="">
                                <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>
                                <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Portfolio Modal 4 -->
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/golden-preview.png" alt="">
                                <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>
                                <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Portfolio Modal 5 -->
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/escape-preview.png" alt="">
                                <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>
                                <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Portfolio Modal 6 -->
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-responsive img-centered" src="img/portfolio/dreams-preview.png" alt="">
                                <p>Dreams is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p>
                                <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>

    <!-- PDF Javascript -->
    <script src='js/pdfmake.min.js'></script>
    <script src='js/vfs_fonts.js'></script>

    <script src='js/finance.js'></script>

    <!-- Theme JavaScript -->
    <script src="js/agency.min.js"></script>

    <!-- Angular scripts -->
    <script src="lib/js/angular.min.js"></script>
    <script src="ctrl/index.js"></script>
    <script src="ctrl/charlie.js"></script>
    <script src="ctrl/sebastian.js"></script>
    <script src="ctrl/lukas.js"></script>
    <script src="ctrl/aliyah.js"></script>
    <script src="ctrl/avalika.js"></script>

</body>

</html>
