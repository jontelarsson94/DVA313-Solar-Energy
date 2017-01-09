//set module and controller that we can use in html/php file
angular.module('index', []).controller('indexCtrl', function($scope, $http) {

  $scope.number = 112;
  $scope.next = 0;

  $scope.getIndataDefaultsPerson = function (){
    $http.get("api/get_indata_defaults_person.php")

    .success(function (response) {
      if(response.success == true){
        $scope.indata_defaults = response.defaults;
        $scope.rows = {16: 23, 23: 27, 27: 31, 31: 40, 40: 46, 46: 52, 52: 58, 58: 71, 71: 77, 77: 100};
      }else {

      }
    });
  }

  $scope.setNext = function(setter){
    $scope.next = setter;
  }

  $scope.getIndataDefaultsCompany = function (){
    $http.get("api/get_indata_defaults_company.php")

    .success(function (response) {
      if(response.success == true){
        $scope.indata_defaults = response.defaults;
        $scope.rows = {16: 23, 23: 27, 27: 31, 31: 40, 40: 46, 46: 52, 52: 58, 58: 71, 71: 77, 77: 100};
      }else {

      }
    });
  }

  $scope.getNumber = function(num) {
    return new Array(num);
  }

  $scope.getExtendedDefaultsPerson = function (){
    $http.get("api/get_extended_defaults_person.php")

    .success(function (response) {
      if(response.success == true){
        $scope.extended_defaults = response.defaults;
        $scope.rowsex = {11: 15, 15: 28, 28: 49, 49: 55, 55: 59, 59: 63, 63: 100};
      }else {

      }
    });
  }

  $scope.getExtendedDefaultsCompany = function (){
    $http.get("api/get_extended_defaults_company.php")

    .success(function (response) {
      if(response.success == true){
        $scope.extended_defaults = response.defaults;
        $scope.rowsex = {11: 15, 15: 28, 28: 49, 49: 55, 55: 59, 59: 63, 63: 100};
      }else {

      }
    });
  }


});

$('[data-toggle="popover"]').popover();

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('#myModal').modal('show');
    window.firstEnter = true;

});

$('[data-toggle="tooltip"]').tooltip();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

/*******************************
*  Whats left is:              *
*  Indata-55                   *
*  Indata-72                   *
*  Indata-73                   *
*  Indata-74                   *
*  Indata-83                   *
*  Indata-84                   *
*  Indata-88                   *
*  Indata-89                   *
*  Indata-93                   *
*  Indata-94                   *
********************************/

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function toNum(str){
  str = str.replace(/\s+/g, '');
  return parseInt(str);
}

function addBody(){

  var bodies = new Array();

  var body1 = new Array(
              { text: 'Cash Flow', style: 'tableHeader', colSpan: 19 },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' });
  bodies.push(body1);

  var body2 = new Array(
              { text: '' },
              { text: 'Energiproduktion (kWh)', style: 'cashFlowHeader', colSpan: 2, fillColor: '#66ffff' },
              { text: '' },
              { text: 'Investering nuvärden (kr)', style: 'cashFlowHeader', colSpan: 4, fillColor: '#ffc000' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Intäkter nuvärden (kr)', style: 'cashFlowHeader', colSpan: 6, fillColor: '#ffff00' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Resultat nuvärden (kr)', style: 'cashFlowHeader', colSpan: 6, fillColor: '#99ff66' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' });
  bodies.push(body2);

  var body3 = new Array(
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Utan stöd', style: 'cashFlowHeader'},
              { text: 'Med ROT-avdrag', style: 'cashFlowHeader'},
              { text: 'Med investeringsstöd', style: 'cashFlowHeader'},
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Utan stöd', style: 'cashFlowHeader', colSpan: 2},
              { text: '' },
              { text: 'Med ROT-avdrag', style: 'cashFlowHeader', colSpan: 2},
              { text: '' },
              { text: 'Med investeringsstöd', style: 'cashFlowHeader', colSpan: 2},
              { text: '' });
  bodies.push(body3);

  var body4 = new Array(
              { text: 'År', style: 'cashFlowHeader'},
              { text: 'Energi efter degradering', style: 'cashFlowHeader'},
              { text: 'Energi nuvärde', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Årliga kostnader', style: 'cashFlowHeader'},
              { text: 'Egenanvänd el', style: 'cashFlowHeader'},
              { text: 'Såld el', style: 'cashFlowHeader'},
              { text: 'Ersättning nätägare', style: 'cashFlowHeader'},
              { text: 'Elcertifikat', style: 'cashFlowHeader'},
              { text: 'Ursprungsgarantier', style: 'cashFlowHeader'},
              { text: 'Skattereduktion', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'});
  bodies.push(body4);

  //var restBody = new Array();
  for(var i = 4; i < 55; i++) {

              var restBody = new Array( 
                { text: parseInt($("#a-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#b-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#c-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#d-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#e-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#f-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#g-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#h-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#i-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#j-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#k-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#l-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#m-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#n-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#o-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#p-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#q-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#r-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#s-"+i).val()).toLocaleString(), style: 'cashFlowValue'});

              bodies.push(restBody);
            }
            var restBody = new Array({ text: 'Summa', style: 'cashFlowHeader', fontSize: 13},
                { text: parseInt($("#b-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#c-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#d-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#e-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#f-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#g-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#h-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#i-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#j-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#k-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#l-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#m-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#n-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#p-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#r-55").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'});
            bodies.push(restBody);
    return bodies;
}


function addBodySecond(){

  var bodies = new Array();

  var body1 = new Array(
              { text: 'Cash Flow with IRR', style: 'tableHeader', colSpan: 19 },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' });
  bodies.push(body1);

  var body2 = new Array(
              { text: '' },
              { text: 'Energiproduktion (kWh)', style: 'cashFlowHeader', colSpan: 2, fillColor: '#66ffff' },
              { text: '' },
              { text: 'Investering nuvärden (kr)', style: 'cashFlowHeader', colSpan: 4, fillColor: '#ffc000' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Intäkter nuvärden (kr)', style: 'cashFlowHeader', colSpan: 6, fillColor: '#ffff00' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Resultat nuvärden (kr)', style: 'cashFlowHeader', colSpan: 6, fillColor: '#99ff66' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' });
  bodies.push(body2);

  var body3 = new Array(
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Utan stöd', style: 'cashFlowHeader'},
              { text: 'Med ROT-avdrag', style: 'cashFlowHeader'},
              { text: 'Med investeringsstöd', style: 'cashFlowHeader'},
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: '' },
              { text: 'Utan stöd', style: 'cashFlowHeader', colSpan: 2},
              { text: '' },
              { text: 'Med ROT-avdrag', style: 'cashFlowHeader', colSpan: 2},
              { text: '' },
              { text: 'Med investeringsstöd', style: 'cashFlowHeader', colSpan: 2},
              { text: '' });
  bodies.push(body3);

  var body4 = new Array(
              { text: 'År', style: 'cashFlowHeader'},
              { text: 'Energi efter degradering', style: 'cashFlowHeader'},
              { text: 'Energi nuvärde', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Investering', style: 'cashFlowHeader'},
              { text: 'Årliga kostnader', style: 'cashFlowHeader'},
              { text: 'Egenanvänd el', style: 'cashFlowHeader'},
              { text: 'Såld el', style: 'cashFlowHeader'},
              { text: 'Ersättning nätägare', style: 'cashFlowHeader'},
              { text: 'Elcertifikat', style: 'cashFlowHeader'},
              { text: 'Ursprungsgarantier', style: 'cashFlowHeader'},
              { text: 'Skattereduktion', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'},
              { text: 'Summa per år', style: 'cashFlowHeader'},
              { text: 'Ackumulerat', style: 'cashFlowHeader'});
  bodies.push(body4);

  //var restBody = new Array();
  for(var i = 60; i < 111; i++) {

              var restBody = new Array( 
                { text: parseInt($("#a-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#b-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#d-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#e-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#f-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#g-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#h-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#i-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#j-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#k-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#l-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#m-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#n-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#o-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#p-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#q-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#r-"+i).val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#s-"+i).val()).toLocaleString(), style: 'cashFlowValue'});

              bodies.push(restBody);
            }
            var restBody = new Array({ text: 'Summa', style: 'cashFlowHeader', fontSize: 13},
                { text: parseInt($("#b-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#d-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#e-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#f-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#g-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#h-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#i-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#j-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#k-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#l-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#m-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: parseInt($("#n-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#p-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'},
                { text: parseInt($("#r-111").val()).toLocaleString(), style: 'cashFlowValue'},
                { text: '', style: 'cashFlowValue'});
            bodies.push(restBody);
    return bodies;
}

function createPDF(){
    var imgURILineChart1 = document.getElementById("lineChart1").src;
    var imgURILineChart2 = document.getElementById("lineChart2").src;
    var imgURILineChart3 = document.getElementById("lineChart3").src;

    var imgURIPieChart1 = document.getElementById("pieChart1").src;
    var imgURIPieChart2 = document.getElementById("pieChart2").src;
    var imgURIPieChart3 = document.getElementById("pieChart3").src;

    var docDefinition = {
      // a string or { width: number, height: number }
      pageSize: 'A4',

      // by default we use portrait, you can change it to landscape if you wish
      pageOrientation: 'portrait',

      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [ 40, 60, 40, 60 ],

      // header and footer
      header: {
        margin: 8,
        columns: [
            { table: {
                    widths: [ '50%','50%'],
                    body: [
                        [
                            { text: 'Future Energy Center', width: 80, height: 60, },
                            { text: '', }
                        ]
                    ]
                },
                layout: 'noBorders'
            }
        ]
      },

      footer: function(page, pages) {
          return {
              columns: [
                  '',
                  {
                      alignment: 'right',
                      text: [
                          '\n',
                          { text: page.toString(), italics: true },
                          ' of ',
                          { text: pages.toString(), italics: true }
                      ]
                  }
              ],
              margin: [0, 0, 30, 0]
          };
      },


      content: [
        // --- page 1 ---
        //Input Values
        { text: 'Solar Economic Calculator', fontSize: 18, margin: [0, 0, 0, 10] },
        //{ text: 'Your input values:', fontSize: 16, margin: [0, 0, 0, 8] },


        //tables on first page
        {
          columns: [
            {
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [ { text: 'Indata och resultat', style: 'tableHeader' }, { text: '', }],

                  [ { text: 'Anläggning', style: 'sectionHeader' }, { text: '', }],
                  [ { text: 'Anläggningens effekt', style: 'tableDescription'}, { text: $("#indata-18").val(), style: 'tableValue'} ],
                  [ { text: 'Modulyta', style: 'tableDescription'}, { text: $("#indata-19").val(), style: 'tableValue'} ],
                  [ { text: 'Säkringsstorlek i anslutningspunkten', style: 'tableDescription'}, { text: $("#indata-20").val(), style: 'tableValue'} ],

                  [ { text: 'Ekonomisk livslängd (N)', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Ekonomisk livslängd', style: 'tableDescription'}, { text: $("#indata-24").val(), style: 'tableValue'} ],

                  [ { text: 'Kalkylränta (R)', style: 'sectionHeader'}, { text: '' } ],
                  [ { text: 'Kalkylränta', style: 'tableDescription'}, { text: $("#indata-28").val(), style: 'tableValue'} ],

                  [ { text: 'Investering', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Investeringskostnad solcellsanläggning, utan stöd eller ROT-avdrag', style: 'tableDescription'}, { text: parseInt($("#indata-32").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Investeringsstöd', style: 'tableDescription'}, { text: parseInt($("#indata-33").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Bygglov', style: 'tableDescription'}, { text: parseInt($("#indata-35").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Projektledning och upphandling', style: 'tableDescription'}, { text: parseInt($("#indata-36").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Besiktning efter färdigställande', style: 'tableDescription'}, { text: parseInt($("#indata-37").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Utbildning', style: 'tableDescription'}, { text: parseInt($("#indata-38").val()).toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Summa investering under livslängden', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag eller investeringsstöd', style: 'tableDescription'}, { text: $("#indata-41").val(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag', style: 'tableDescription'}, { text: $("#indata-42").val().toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd', style: 'tableDescription'}, { text: $("#indata-43").val().toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Driftkostnad', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Årlig fast driftkostnad som inte beror på anläggningens storlek', style: 'tableDescription'}, { text: $("#indata-47").val(), style: 'tableValue'} ],
                  [ { text: 'Årlig rörlig driftkostnad som beror på anläggningens storlek', style: 'tableDescription'}, { text: $("#indata-48").val(), style: 'tableValue'} ],
                  [ { text: 'Summa årliga kostnader', style: 'tableDescription'}, { text: $("#indata-49").val(), style: 'tableValue'} ],

                  [ { text: 'Energiutbyte', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Energiutbyte första året', style: 'tableDescription'}, { text: parseInt($("#indata-53").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Summa solelproduktion under livslängden', style: 'tableDescription'}, { text: $("#indata-54").val(), style: 'tableValue'} ],
                  [ { text: 'Summa solelproduktion berättigad till elcertifikat', style: 'tableDescription'}, { text: $("#indata-55").val(), style: 'tableValue'} ],

                  [ { text: 'Intäkter', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Andel egenanvänd el', style: 'tableDescription'}, { text: parseInt($("#indata-60").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Pris köpt el', style: 'tableDescription'}, { text: parseInt($("#indata-61").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Pris såld el', style: 'tableDescription'}, { text: parseInt($("#indata-62").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Ersättning från nätägare', style: 'tableDescription'}, { text: parseInt($("#indata-63").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Elcertifikatvärde', style: 'tableDescription'}, { text: parseInt($("#indata-64").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Andel solel som ger elcertifikat', style: 'tableDescription'}, { text: parseInt($("#indata-65").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Kvotplikt medelvärde', style: 'tableDescription'}, { text: parseInt($("#indata-66").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Ursprungsgarantier värde', style: 'tableDescription'}, { text: parseInt($("#indata-67").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Antal år med skattereduktion', style: 'tableDescription'}, { text: parseInt($("#indata-68").val()).toLocaleString(), style: 'tableValue', pageBreak: 'after'} ],

                  [ { text: 'Beräknad produktionskostnad (LCOE)', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag eller investeringsstöd', style: 'tableDescription'}, { text: parseInt($("#indata-72").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag', style: 'tableDescription'}, { text: parseInt($("#indata-73").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd', style: 'tableDescription'}, { text: parseInt($("#indata-74").val()).toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Beräknad lönsamhet', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag och investeringsstöd, med eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-82").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-83").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: parseInt($("#indata-84").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag och eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-87").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-88").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: parseInt($("#indata-89").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd och eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-92").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-93").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: parseInt($("#indata-94").val()).toLocaleString(), style: 'tableValue'} ],
                ],
              },
              layout: 'lightHorizontalLines',
            },
            {
              width: '50%',
              table: {
              width: '50%',
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [ { text: 'Extended', style: 'tableHeader' }, { text: '', }],
                  [ { text: 'Anläggning', style: 'sectionHeader' }, { text: '', }],
                  [ { text: 'Verkningsgrad solcellsmoduler', style: 'tableDescription'}, { text: parseInt($("#extended-12").val()).toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Investering', style: 'sectionHeader' }, { text: '', }],
                  [ { text: 'Tak för investeringsstöd', style: 'tableDescription'}, { text: parseInt($("#extended-16").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'ROT-avdrag arbetskostnad', style: 'tableDescription'}, { text: parseInt($("#extended-17").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Tak för ROT-avdrag', style: 'tableDescription'}, { text: parseInt($("#extended-18").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Kostnad för köp eller preparering av mark', style: 'tableDescription'}, { text: parseInt($("#extended-20").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Nätanslutningskostnad', style: 'tableDescription'}, { text: parseInt($("#extended-21").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Antal byten av växelriktare', style: 'tableDescription'}, { text: parseInt($("#extended-23").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Antal år till byte av växelriktare', style: 'tableDescription'}, { text: parseInt($("#extended-24").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Kostnad för byte av växelriktare', style: 'tableDescription'}, { text: $("#extended-25").val(), style: 'tableValue'} ],

                  [ { text: 'Driftkostnader', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Elcertifikathantering', style: 'tableDescription'}, { text: parseInt($("#extended-30").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Fastighetsskatt', style: 'tableDescription'}, { text: parseInt($("#extended-31").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Inmatningsabonnemang', style: 'tableDescription'}, { text: parseInt($("#extended-32").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Loggning', style: 'tableDescription'}, { text: parseInt($("#extended-33").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Resor', style: 'tableDescription'}, { text: parseInt($("#extended-34").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Servitut', style: 'tableDescription'}, { text: parseInt($("#extended-35").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Uttagsabonnemang', style: 'tableDescription'}, { text: parseInt($("#extended-36").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Övrigt', style: 'tableDescription'}, { text: parseInt($("#extended-37").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Summa årlig fast driftkostnad', style: 'tableDescription'}, { text: $("#extended-38").val(), style: 'tableValue'} ],
                  [ { text: 'Försäkring', style: 'tableDescription'}, { text: parseInt($("#extended-41").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Hyra av yta', style: 'tableDescription'}, { text: parseInt($("#extended-42").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Underhåll av yta', style: 'tableDescription'}, { text: parseInt($("#extended-43").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Rengöring av moduler', style: 'tableDescription'}, { text: parseInt($("#extended-44").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Tillsyn', style: 'tableDescription'}, { text: parseInt($("#extended-45").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Summa årlig rörlig driftkostnad', style: 'tableDescription'}, { text: $("#extended-46").val(), style: 'tableValue'} ],

                  [ { text: 'Restvärde', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Restvärde', style: 'tableDescription'}, { text: parseInt($("#extended-50").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Rivningskostnad', style: 'tableDescription'}, { text: parseInt($("#extended-51").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Summa kostnader vid avslut', style: 'tableDescription'}, { text: $("#extended-52").val(), style: 'tableValue'} ],

                  [ { text: 'Systemdegradering', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Årlig degradering av utbytet', style: 'tableDescription'}, { text: parseInt($("#extended-56").val()).toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Energiutbyte', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Tillgänglighet', style: 'tableDescription'}, { text: parseInt($("#extended-60").val()).toLocaleString(), style: 'tableValue'} ],

                  [ { text: 'Intäkter', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Antal år med elcertifikat', style: 'tableDescription'}, { text: parseInt($("#extended-64").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Skattereduktion', style: 'tableDescription'}, { text: parseInt($("#extended-65").val()).toLocaleString(), style: 'tableValue'} ],
                  [ { text: 'Tak för skattereduktion', style: 'tableDescription'}, { text: parseInt($("#extended-66").val()).toLocaleString(), style: 'tableValue'} ],
                ]
              },
              layout: 'lightHorizontalLines',
            }
          ],
          // optional space between columns
          columnGap: 30
        },
        // --- page 1 end ---

        // --- page 2 ---
        // Cash Flow table
        {
          text: '',
          style: 'header',
          pageBreak: 'before',
          pageOrientation: 'landscape',
          // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
          pageMargins: [ 5, 5, 5, 5 ],
        },

        { table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ 'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', ],

          body: addBody()
        },

        layout: {
                            hLineWidth: function(i, node) {
                                return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
                            },
                            vLineWidth: function(i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 0 : 0.5;
                            },
                            hLineColor: function(i, node) {
                                return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                            },
                            vLineColor: function(i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                            },
                            // paddingLeft: function(i, node) { return 4; },
                            // paddingRight: function(i, node) { return 4; },
                            // paddingTop: function(i, node) { return 2; },
                            // paddingBottom: function(i, node) { return 2; }
            }
        },

        {
          text: '',
          style: 'header',
          pageBreak: 'before',
          pageOrientation: 'landscape',
          // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
          pageMargins: [ 5, 5, 5, 5 ],
        },

        { table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ 'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', 'auto',
                    'auto', 'auto', 'auto', 'auto', ],

          body: addBodySecond()
        },
        
        layout: {
                            hLineWidth: function(i, node) {
                                return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
                            },
                            vLineWidth: function(i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 0 : 0.5;
                            },
                            hLineColor: function(i, node) {
                                return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                            },
                            vLineColor: function(i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                            },
                            // paddingLeft: function(i, node) { return 4; },
                            // paddingRight: function(i, node) { return 4; },
                            // paddingTop: function(i, node) { return 2; },
                            // paddingBottom: function(i, node) { return 2; }
            }
        },


        // --- page 2 end ---

        // --- page 3 ---
        // Diagrams
        {
          text: 'Diagrams',
          style: 'header',
          pageBreak: 'before',
          pageOrientation: 'portrait'
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURIPieChart1,
                        }
                    ]
            },
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURILineChart1,
                        }
                    ]
            }
          ],
          // optional space between columns
          columnGap: 0, margin: [0, 0, 0, 5]
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURIPieChart2,
                        }
                    ]
            },
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURILineChart2,
                        }
                    ]
            }
          ],
          // optional space between columns
          columnGap: 0, margin: [0, 0, 0, 5]
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURIPieChart3,
                        }
                    ]
            },
            {
              width: '50%',
              stack: [
                        {
                          width: 250,
                          image: imgURILineChart3,
                        }
                    ]
            }
          ],
          // optional space between columns
          columnGap: 0, margin: [0, 0, 0, 5]
        },
        {},
        // --- page 3 end ---

  ],

  // --- styles ---
  styles: {

     // table
     tableValue: {
       fontSize: 8,
       alignment: 'right',
     },
     tableDescription: {
       fontSize: 8,
     },
     tableSubSection: {
       italics: true,
       fontSize: 8,
     },
     tableHeader: {
       bold: true,
       fontSize: 13,
       color: 'black'
     },
     sectionHeader: {
       bold: true,
       fontSize: 10,
       color: 'black'
     },
     cashFlowHeader: {
       fontSize: 5,
       alignment: 'center',
       color: 'black'
     },
     cashFlowValue: {
       fontSize: 7,
       alignment: 'right',
     },

     header: {
       fontSize: 18,
       bold: true,
       margin: [0, 0, 0, 10]
     },
     subheader: {
       fontSize: 16,
       bold: true,
       margin: [0, 10, 0, 5]
     },
     tableExample: {
       margin: [0, 5, 0, 15]
     },
   },
      defaultStyle: {
        fontSize: 12,
      }
      // --- style end ---

  };

    // open PDF file in new tab
    pdfMake.createPdf(docDefinition).download('results.pdf');
  }


function IRR(values, guess) {
  // Credits: algorithm inspired by Apache OpenOffice
  
  // Calculates the resulting amount
  var irrResult = function(values, dates, rate) {
    var r = rate + 1;
    var result = values[0];
    for (var i = 1; i < values.length; i++) {
      result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
    }
    return result;
  }

  // Calculates the first derivation
  var irrResultDeriv = function(values, dates, rate) {
    var r = rate + 1;
    var result = 0;
    for (var i = 1; i < values.length; i++) {
      var frac = (dates[i] - dates[0]) / 365;
      result -= frac * values[i] / Math.pow(r, frac + 1);
    }
    return result;
  }

  // Initialize dates and check that values contains at least one positive value and one negative value
  var dates = [];
  var positive = false;
  var negative = false;
  for (var i = 0; i < values.length; i++) {
    dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
    if (values[i] > 0) positive = true;
    if (values[i] < 0) negative = true;
  }
  
  // Return error if values does not contain at least one positive value and one negative value
  if (!positive || !negative) return '#NUM!';

  // Initialize guess and resultRate
  var guess = (typeof guess === 'undefined') ? 0.1 : guess;
  var resultRate = guess;
  
  // Set maximum epsilon for end of iteration
  var epsMax = 1e-10;
  
  // Set maximum number of iterations
  var iterMax = 50;

  // Implement Newton's method
  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;
  do {
    resultValue = irrResult(values, dates, resultRate);
    newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
  } while(contLoop && (++iteration < iterMax));

  if(contLoop) return '#NUM!';

  // Return internal rate of return
  return resultRate;
}

function calculateI84(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#n-"+i ).val()))
  }
  var i84 = IRR(cashFlowArray, 0.0000001);
  i84 = i84*100;
  $( "#indata-84" ).val(i84.toFixed(1));
}

function calculateI89(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#p-"+i ).val()))
  }
  var i89 = IRR(cashFlowArray, 0.0000001);
  i89 = i89*100;
  $( "#indata-89" ).val(i89.toFixed(1));
}

function calculateI94(){
  var cashFlowArray = new Array();
  for(var i = 60; i <= 110; i++){
    cashFlowArray.push(parseInt($( "#r-"+i ).val()))
  }
  var i94 = IRR(cashFlowArray, 0.0000001);
  i94 = i94*100;
  $( "#indata-94" ).val(i94.toFixed(1));
}


function drawLineChart1() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = toNum($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#o-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Utan ROT-avdrag eller investeringsstöd',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart1'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart1").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawLineChart2() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = toNum($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#q-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Med ROT-avdrag',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart2'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart2").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawLineChart3() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'År');
   data.addColumn('number', 'Kassaflöde');

   //some necessary variables
   var ekonomisk_livslangd = toNum($( "#indata-24" ).val());
   var currentO = 0;

   //loop through the rows 4-54 of O column
   for(var i = 4; i < 55; i++){

     if(i <= (ekonomisk_livslangd + 4)) {
       //get the value of the current O column's cell
       currentO = parseInt($( "#s-" + i ).val());

       //add the values (year, cell value) to the linear diagram
       data.addRows([[((i-4).toString()), currentO]]);
    }
   }

   // Set chart options
   var options = {'title' : 'Ackumulerat nuvärde - Med investeringsstöd',
      hAxis: {
         title: 'År'
      },
      vAxis: {
         title: 'Ackumelerat nuvärde (kr)'
      },
      'height':400,
      pointsVisible: true
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.LineChart(document.getElementById('lineChart3'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("lineChart3").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

//when changes are made to d-55 and g-55, fire the "google.charts.setOnLoadCallback(drawPieChart1);"
function drawPieChart1() {

   //some necessary variables
   var investering = parseInt($( "#d-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader utan ROT-avdrag och investeringsstöd',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart1'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart1").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawPieChart2() {

   //some necessary variables
   var investering = parseInt($( "#e-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader med ROT-avdrag',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart2'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart2").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function drawPieChart3() {

   //some necessary variables
   var investering = parseInt($( "#f-55" ).val());
   var arliga_kostnader = parseInt($( "#g-55" ).val());
   var total_summa = investering + arliga_kostnader;

   var localeInvestering = investering.toLocaleString();
   var localeArliga_kostnader = arliga_kostnader.toLocaleString();
   var localeTotal_summa = total_summa.toLocaleString();

   //find out what percentage a number is of the total sum
   investering = (investering / total_summa) * 100;
   arliga_kostnader = (arliga_kostnader / total_summa) * 100;

   var investering_str = "Investering = " + localeInvestering + " kr";
   var arliga_kostnader_str = "Årliga kostnader = " + localeArliga_kostnader + " kr";

   // Define the chart to be drawn
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Calculation');
   data.addColumn('number', 'Percentage');
   data.addRows([
      [investering_str, investering],
      [arliga_kostnader_str, arliga_kostnader]
   ]);

   // Set chart options
   var options = {'title':'Kostnader med investeringsstöd',
      'height':400};

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('pieChart3'));

   google.visualization.events.addListener(chart, 'ready', function () {
    document.getElementById("pieChart3").src = chart.getImageURI();
   });

   chart.draw(data, options);
}

function CalculateSecondDEF() {
    var d_111val;
    var e_111val;
    var f_111val;
    var i = 1;
    var j = 61;
    var Investeringskostnad = parseInt($("#indata-32").val());
    var Installerad_effekt = toNum($("#indata-18").val());
    var ROT_avdrag = parseInt($("#extended-17").val()) / 100;
    var Tak_ROT_avdrag = parseInt($("#extended-18").val());
    var Investeringsstod = parseInt($("#indata-33").val()) / 100;
    var Tak_Investeringsstod = parseInt($("#extended-16").val());
    var Antal_ar_till_byte_av_vaxelriktare = parseInt($("#extended-24").val());
    var Antal_byten_av_vaxelriktare = parseInt($("#extended-23").val());
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Kostnad_vaxelriktarbyte = toNum($("#extended-25").val());
    var Kalkylranta = parseInt($("#indata-28").val()) / 100;
    var Restvarde = parseInt($("#extended-50").val());
    var Rivningskostnad = parseInt($("#extended-51").val());

    var d_60val = (-1) * ((Investeringskostnad * Installerad_effekt) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
    $("#d-60").val(d_60val);
    d_111val = d_60val;

    if ((Investeringskostnad * Installerad_effekt * ROT_avdrag) <= Tak_ROT_avdrag) {
        var e_60val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - ROT_avdrag)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-60").val(Math.round(e_60val));
        e_111val = Math.round(e_60val);
        //  -(Investeringskostnad*Installerad_effekt*(1-ROT_avdrag)+SUM('Dina indata & Resultat'!D35:D38))"
    } else {
        // -(Investeringskostnad*Installerad_effekt-Tak_ROT_avdrag+SUM('Dina indata & Resultat'!D35:D38))
        var e_60val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_ROT_avdrag) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-60").val(Math.round(e_60val));
        e_111val = Math.round(e_60val);
    }

    if (Investeringskostnad * Installerad_effekt * Investeringsstod <= Tak_Investeringsstod) {
        //-(Investeringskostnad*Installerad_effekt*(1-Investeringsstod)+SUM('Dina indata & Resultat'!D35:D38))
        var f_60val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - Investeringsstod)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-60").val(Math.round(f_60val));
        f_111val = Math.round(f_60val);
    } else {
        //-(Investeringskostnad*Installerad_effekt-Tak_Investeringsstod+SUM('Dina indata & Resultat'!D35:D38))
        var f_60val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_Investeringsstod) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-60").val(Math.round(f_60val));
        f_111val = Math.round(f_60val);

    }

    var j = 61;
    for (i = 1; i < 50; i++) {
        var val1;
        var val2;
        if ((i / Antal_ar_till_byte_av_vaxelriktare <= Antal_byten_av_vaxelriktare) && (i < Ekonomisk_livslangd) && (i / Antal_ar_till_byte_av_vaxelriktare == 1 || i / Antal_ar_till_byte_av_vaxelriktare == 2 || i / Antal_ar_till_byte_av_vaxelriktare == 3)) {
            -(Kostnad_vaxelriktarbyte * Installerad_effekt)
            val1 = -(Kostnad_vaxelriktarbyte * Installerad_effekt);
        } else {
            val1 = 0;
        }
        if (i == Ekonomisk_livslangd) {
            val2 = (Restvarde - Rivningskostnad);
        } else {
            val2 = 0;
        }
        var sum = Math.round(val1) + Math.round(val2);
        d_111val = d_111val + Math.round(sum);
        e_111val = e_111val + Math.round(sum);
        f_111val = f_111val + Math.round(sum);
        var value = Math.round(val1 + val2);
        $("#d-" + j).val(value);
        $("#e-" + j).val(value);
        $("#f-" + j).val(value);
        j++;
    }
    $("#d-111").val(Math.round(d_111val));
    $("#e-111").val(Math.round(e_111val));
    $("#f-111").val(Math.round(f_111val));

    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
}

//calculate production cost for the cell D72
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD72() {

  //start the calculation and save the result in a variable - send in "41" for cell D41
  var productionCostD72 = calculateProductionCost("41");

  //assign the result to the correct input box on the website
  $( "#indata-72" ).val( productionCostD72 );
}


//calculate production cost for the cell D73
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD73() {

  //start the calculation and save the result in a variable - send in "42" for cell D42
  var productionCostD73 = calculateProductionCost("42");

  //assign the result to the correct input box on the website
  $( "#indata-73" ).val( productionCostD73 );
}


//calculate production cost for the cell D74
//in the tab "dina indata & result" in the given excel file
function calculateProductionCostD74() {

  //start the calculation and save the result in a variable - send in "43" for cell D43
  var productionCostD74 = calculateProductionCost("43");

  //assign the result to the correct input box on the website
  $( "#indata-74" ).val( productionCostD74 );
}

function calcPv(rate, nper, pmt) {

  var pv_value = 0;
  var x = 0;
  var y = 0;

  if ( rate == 0 ) { // Interest rate is 0
    pv_value = -((pmt * nper));
  } else {
    x = Math.pow(1 + rate, -nper);
    y = Math.pow(1 + rate, nper);
    pv_value = - ( x * ( rate - pmt + y * pmt )) / rate;
  }
  return (pv_value);
}

//calculate the production cost
//(you have to send in either "41", "42" or "43" to this function)
function calculateProductionCost(X){

  //some error handling if you do not send in "41", "42" or "43" to the function:
  if(X != "41" && X != "42" && X != "43"){
    console.log("ERROR: input parameter to the function 'calculateProductionCost' is not '41', '42' or '43'");
    return 0;
  }

  //300/(1+.0938)^1 + 300/(1+.0938)^2 + 300/(1+.0938)^3
  //(9.38, 3, 300)
  //(D28, D24, -D49)
  //values from the tab "indata & result" in the given excel file:
  var inDX = toNum($( "#indata-" + X ).val()); //here you will retrieve the value of either cell D41, D42 or D43
  var inD28 = toNum($( "#indata-28" ).val()) / 100;
  var inD24 = toNum($( "#indata-24" ).val());
  var inD49 = toNum($( "#indata-49" ).val());
  var inD18 = toNum($( "#indata-18" ).val());
  //value from the tab "grundläggande antaganden" in the given excel file:
  var extD52 = toNum($( "#extended-52" ).val());
  //value from the tab "kassaflöden" in the given excel file:
  var cashflowC55 = parseInt($( "#c-55" ).val());

  //for i = 1; i <= D24; i++{

  var pv = calcPv(inD28, inD24, -inD49);

  //-('Grundläggande antaganden'!D52)/(1+D28)^D24)/(Kassaflöden!C55/D18)

  //perform the calculation for production cost
  //(D41+NUVÄRDE(D28;D24;-D49)-('Grundläggande antaganden'!D52)/(1+D28)^D24)/(Kassaflöden!C55/D18)
  //"inD49 / Math.pow((1 + inD28), inD24))" - same formula as "nuvärde år n = A / (1+kalkylränta)^n":
  var productionCost = (inDX + (pv) - (extD52) / (Math.pow((1 + inD28), inD24))) / (cashflowC55 / inD18);
  //return the calculated production cost but with only 3 decimals:
  return (productionCost.toFixed(3));
}

function calculateD83() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#o-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < toNum($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-83").val(numberWithSpaces(val));
    } else {
        var ErrorStr = ">Livslängd ('" + toNum($("#indata-24").val()) + "')år";
        $("#indata-83").val(ErrorStr);
    }


}

//calculate INtada and result D88 col
function calculateD88() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#q-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < toNum($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-88").val(numberWithSpaces(val));
    } else {
        var ErrorStr = ">Livslängd ('" + toNum($("#indata-24").val()) + "')år";
        $("#indata-88").val(ErrorStr);
    }


}

//calculate INtada and result D93 col
function calculateD93() {
    var count = 0;
    for (var i = 5; i < 55; i++) {
        if (parseInt($("#s-" + i).val()) < 0) {
            count = count + 1;
        }
    }
    if (count < toNum($("#indata-24").val())) {
        var val = count + 1;
        $("#indata-93").val(val);
    } else {
        var ErrorStr = ">Livslängd ('" + toNum($("#indata-24").val()) + "')år";
        $("#indata-93").val(ErrorStr);
    }

}


function calculateI55(){
  var e64 = toNum($( "#extended-64" ).val());
  var sum = 0; //set sum counter to 0
  var currentA, currentB = 0;

  //loop through row 4-54 in column A and B of the cashflow table
  for(var i = 4; i < 55; i++){
  //retrieve the current A and B cell's value
    currentA = parseInt($( "#a-" + i ).val());
    currentB = parseInt($( "#b-" + i ).val());

  //if currentA <= "elcertifikatår" then add currentB to the sum
  if(currentA <= e64)
    sum = sum + currentB;
  }

  sum = Math.round(sum); //get spaces between the numbers (easier to read), and round the result.

  $( "#indata-55" ).val(numberWithSpaces(sum));
}

function calculateI41(){
  $("#indata-41").val(  numberWithSpaces(-Math.round(toNum($("#d-55").val())/+($("#indata-18").val()))) );
}

function calculateI42(){
  $("#indata-42").val(  numberWithSpaces(-Math.round(toNum($("#e-55").val())/+($("#indata-18").val()))) );
}

function calculateI43(){
  $("#indata-43").val(  numberWithSpaces(-Math.round(toNum($("#f-55").val())/+($("#indata-18").val()))) );
}

function calculateI54(){
  $("#indata-54").val(  numberWithSpaces(Math.round(toNum($("#b-55").val()))) );
}

function calculateI82(){
  $("#indata-82").val(  numberWithSpaces($("#n-55").val()) );
}

function calculateI87(){
  $("#indata-87").val(  numberWithSpaces($("#p-55").val()) );
}

function calculateI92(){
  $("#indata-92").val(  numberWithSpaces($("#r-55").val()) );
}

function calculateSecondS(){
  $("#s-60").val(  parseInt($("#r-60").val()) );

    for(var i = 61; i < 111; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
}

function calculateS(){
  $("#s-4").val(  parseInt($("#r-4").val()) );

    for(var i = 5; i < 55; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#s-"+i).val(  parseInt($("#s-"+(i-1)).val()) +  parseInt($("#r-"+i).val()) );
    }
    calculateD93();
}

function calculateSecondR(){
  var r111 = 0;

    for(var i = 60; i < 111; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r111 = r111 +  parseInt($("#r-"+i).val());
    }
    $("#r-111").val(r111); 
    calculateSecondS();
}

function calculateR(){
  var r55 = 0;

    for(var i = 4; i < 55; i++){
            $("#r-"+i).val(  parseInt($("#f-"+i).val()) +  parseInt($("#g-"+i).val()) +  parseInt($("#h-"+i).val()) +  parseInt($("#i-"+i).val()) +  parseInt($("#j-"+i).val()) +  parseInt($("#k-"+i).val()) +  parseInt($("#l-"+i).val()) +  parseInt($("#m-"+i).val()) );
            r55 = r55 +  Math.round(parseInt($("#r-"+i).val()));
    }
    $("#r-55").val(r55);
    $("#indata-94").val("");
    calculateS();
    calculateI92();
}

function calculateSecondQ(){
  $("#q-60").val(  parseInt($("#p-60").val()) );

    for(var i = 61; i < 111; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(  parseInt($("#q-"+(i-1)).val()) +  parseInt($("#p-"+i).val()) );
    }
}

function calculateQ(){
  $("#q-4").val(  parseInt($("#p-4").val()) );

    for(var i = 5; i < 55; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#q-"+i).val(Math.round(  Math.round(parseInt($("#q-"+(i-1)).val())) +  Math.round(parseInt($("#p-"+i).val())) ));
    }
    calculateD88();
}

function calculateSecondO(){
  $("#o-60").val(  parseInt($("#n-60").val()) );

    for(var i = 61; i < 111; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(Math.round(  Math.round(parseInt($("#o-"+(i-1)).val())) +  Math.round(parseInt($("#n-"+i).val())) ));
    }
    //calculateD83();
    //google.charts.setOnLoadCallback(drawLineChart1);
}

function calculateO(){
  $("#o-4").val(  parseInt($("#n-4").val()) );

    for(var i = 5; i < 55; i++){
        if( toNum($("#indata-24").val()) >=  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(Math.round(  Math.round(parseInt($("#o-"+(i-1)).val())) +  Math.round(parseInt($("#n-"+i).val())) ));
    }
    calculateD83();
}

function calculateSecondN(){
  var n111 = 0;

    for(var i = 60; i < 111; i++){
            $("#n-"+i).val(Math.round(  parseInt($("#d-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())));
            n111 = n111 +  Math.round(parseInt($("#n-"+i).val()));
    }
    $("#n-111").val(n111);
    calculateSecondO();
}

//Must be called every time D, G, H, I, J, K, L or M is calculated
function calculateN(){
  var n55 = 0;

    for(var i = 4; i < 55; i++){
            $("#n-"+i).val(Math.round(  parseInt($("#d-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())));
            n55 = n55 +  Math.round(parseInt($("#n-"+i).val()));
    }
    $("#n-55").val(n55);
    //alert("n55-" + n55);
    $("#indata-84").val("");
    calculateO();
    calculateI82();
}

function calculateSecondP(){
  var p111 = 0;

    for(var i = 60; i < 111; i++){
            $("#p-"+i).val( Math.round( parseInt($("#e-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())) );
            p111 = p111 +  Math.round(parseInt($("#p-"+i).val()));
    }
    $("#p-111").val(Math.round(p111));
    //calculateQ();
    //calculateI87();
    calculateSecondQ()
}

function calculateP(){
  var p55 = 0;

    for(var i = 4; i < 55; i++){
            $("#p-"+i).val( Math.round( parseInt($("#e-"+i).val()))
                          +  Math.round(parseInt($("#g-"+i).val()))
                          +  Math.round(parseInt($("#h-"+i).val()))
                          +  Math.round(parseInt($("#i-"+i).val()))
                          +  Math.round(parseInt($("#j-"+i).val()))
                          +  Math.round(parseInt($("#k-"+i).val()))
                          +  Math.round(parseInt($("#l-"+i).val()))
                          +  Math.round(parseInt($("#m-"+i).val())) );
            p55 = p55 +  Math.round(parseInt($("#p-"+i).val()));
    }
    $("#p-55").val(Math.round(p55));
    $("#indata-89").val("");
    calculateQ();
    calculateI87();
}

function calculateSecondH() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_kopt_el = $("#indata-61").val();
    /*alert("Ekonomisk_livslangd-"+Ekonomisk_livslangd);
    alert("Andel_egenanvand_el-"+Andel_egenanvand_el);
    alert("Pris_kopt_el-"+Pris_kopt_el);*/
    var i = 1;
    var j = 61;
    var sum = 0;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var valh = Math.round(parseInt($("#b-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el);
            $("#h-" + j).val(valh);
            //alert(valh);
            sum = sum + valh;
        } else {
            $("#h-" + j).val(0);
        }
        j++;
    }
    $("#h-111").val(sum);
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
}

//Whenever one of these is calculated, we should calculate c first
function calculateH() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_kopt_el = $("#indata-61").val();
    /*alert("Ekonomisk_livslangd-"+Ekonomisk_livslangd);
    alert("Andel_egenanvand_el-"+Andel_egenanvand_el);
    alert("Pris_kopt_el-"+Pris_kopt_el);*/
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var valh = Math.round(parseInt($("#c-" + j).val()) * Andel_egenanvand_el * Pris_kopt_el);
            $("#h-" + j).val(valh);
            //alert(valh);
            sum = sum + valh;
        }else{
            $("#h-" + j).val(0);
        }
        j++;
    }
    $("#h-55").val(sum);
    calculateN();
    calculateP();
    calculateR();
    calculateSecondH();
}

function calculateSecondI() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Pris_sald_el = $("#indata-62").val();
    var i = 1;
    var j = 61;
    var sum = 0;
    //OM(Ekonomisk_livslängd>=A61;B61*(1-Andel_egenanvänd_el)*Pris_såld_el;0)
    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = Math.round(parseInt($("#b-" + j).val()) *  (1-Andel_egenanvand_el) * Pris_sald_el);
            $("#i-" + j).val(ival);
            sum = sum + ival;
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    //alert("i-"+sum);
    $("#i-111").val(sum);
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
}

function calculateI() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Pris_sald_el = $("#indata-62").val();
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var ival = Math.round(parseInt($("#c-" + j).val()) * (1 - Andel_egenanvand_el) * Pris_sald_el);
            $("#i-" + j).val(ival);
            sum = sum + ival;
        } else {
            $("#i-" + j).val(0);
        }
        j++;
    }
    //alert("i-"+sum);
    $("#i-55").val(sum);
    calculateN();
    calculateP();
    calculateR();
    calculateSecondI();
}

function calculateSecondJ() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val()) / 100;
    var Ersattning_fran_natagare = $("#indata-63").val();
    var i = 1;
    var j = 61;
    var sum = 0;

    for (i = 1; i < 51; i++) {
        if (Ekonomisk_livslangd >= i) {
            var jval = Math.round(parseInt($("#b-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el));
            $("#j-" + j).val(jval);
            sum = sum + jval;
        } else {
            $("#j-" + j).val(0);
        }

        j++;

    }
    //alert("j-"+sum);
    $("#j-111").val(sum);
    calculateSecondN();
    calculateSecondP();
    calculateSecondR();
}


function calculateJ() {
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Andel_egenanvand_el = parseInt($("#indata-60").val())/100;
    var Ersattning_fran_natagare = $("#indata-63").val();
    var  i=1;
    var j = 5;
    var sum = 0;

    for (i = 1; i < 50; i++) {
        if (Ekonomisk_livslangd >= i) {
            var jval = Math.round(parseInt($("#c-" + j).val()) * Ersattning_fran_natagare * (1 - Andel_egenanvand_el));
            $("#j-" + j).val(jval);
            sum = sum + jval;
        } else {
            $("#j-" + j).val(0);
        }

        j++;

    }
    //alert("j-"+sum);
    $("#j-55").val(sum);
    calculateN();
    calculateP();
    calculateR();
    calculateSecondJ();

}

function calculateDEF() {
    var d_55val;
    var e_55val;
    var f_55val;
    var i = 1;
    var j = 5;
    var Investeringskostnad = parseInt($("#indata-32").val());
    var Installerad_effekt = +($("#indata-18").val());
    var ROT_avdrag = parseInt($("#extended-17").val()) / 100;
    var Tak_ROT_avdrag = parseInt($("#extended-18").val());
    var Investeringsstod = parseInt($("#indata-33").val()) / 100;
    var Tak_Investeringsstod = parseInt($("#extended-16").val());
    var Antal_ar_till_byte_av_vaxelriktare = parseInt($("#extended-24").val());
    var Antal_byten_av_vaxelriktare = parseInt($("#extended-23").val());
    var Ekonomisk_livslangd = toNum($("#indata-24").val());
    var Kostnad_vaxelriktarbyte = toNum($("#extended-25").val());
    var Kalkylranta = parseInt($("#indata-28").val()) / 100;
    var Restvarde = parseInt($("#extended-50").val());
    var Rivningskostnad = parseInt($("#extended-51").val());

    var d_4val = (-1) * ((Investeringskostnad * Installerad_effekt) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
    $("#d-4").val(d_4val);
    d_55val = d_4val;

    if ((Investeringskostnad * Installerad_effekt * ROT_avdrag) <= Tak_ROT_avdrag) {
        var e_4val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - ROT_avdrag)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-4").val(Math.round(e_4val));
        e_55val = Math.round(e_4val);
        //  -(Investeringskostnad*Installerad_effekt*(1-ROT_avdrag)+SUM('Dina indata & Resultat'!D35:D38))"
    } else {
        // -(Investeringskostnad*Installerad_effekt-Tak_ROT_avdrag+SUM('Dina indata & Resultat'!D35:D38))
        var e_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_ROT_avdrag) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#e-4").val(Math.round(e_4val));
        e_55val = Math.round(e_4val);
    }

    //Investeringskostnad*Installerad_effekt*Investeringsstod<=Tak_Investeringsstod
    if (Investeringskostnad * Installerad_effekt * Investeringsstod <= Tak_Investeringsstod) {
        //-(Investeringskostnad*Installerad_effekt*(1-Investeringsstod)+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt * (1 - Investeringsstod)) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(Math.round(f_4val));
        f_55val = Math.round(f_4val);
    } else {
        //-(Investeringskostnad*Installerad_effekt-Tak_Investeringsstod+SUM('Dina indata & Resultat'!D35:D38))
        var f_4val = (-1) * ((Investeringskostnad * Installerad_effekt) - (Tak_Investeringsstod) + (parseInt($("#indata-35").val()) + parseInt($("#indata-36").val()) + parseInt($("#indata-37").val()) + parseInt($("#indata-38").val())));
        $("#f-4").val(Math.round(f_4val));
        f_55val = Math.round(f_4val);
    }

    //alert($("#d-4").val() + "    " + $("#e-4").val() + "   " + $("#f-4").val());

    for (i = 1; i < 50; i++) {
        var val1;
        var val2;
        if ((i / Antal_ar_till_byte_av_vaxelriktare <= Antal_byten_av_vaxelriktare) && (i < Ekonomisk_livslangd) && (i / Antal_ar_till_byte_av_vaxelriktare == 1 || i / Antal_ar_till_byte_av_vaxelriktare == 2 || i / Antal_ar_till_byte_av_vaxelriktare == 3)) {
            val1 = -((Kostnad_vaxelriktarbyte * Installerad_effekt)) / Math.pow(1 + Kalkylranta, i);
        } else {
            val1 = 0;
        }

        if (i == Ekonomisk_livslangd) {
            //(Restvarde-Rivningskostnad)/(1+Kalkylranta)^A5
            val2 = (Restvarde - Rivningskostnad) / Math.pow(1 + Kalkylranta, i);
        } else {
            val2 = 0;
        }

        var sum = Math.round(val1) + Math.round(val2);
        //alert(sum);
        d_55val = d_55val + Math.round(sum);
        e_55val = e_55val + Math.round(sum);
        f_55val = f_55val + Math.round(sum);

        var value = Math.round(val1 + val2);
        $("#d-" + j).val(value);
        $("#e-" + j).val(value);
        $("#f-" + j).val(value);
        //if (value != 0) { alert(i); }
        $( "#pieChart1" ).hide();
        $( "#pieChart2" ).hide();
        $( "#pieChart3" ).hide();
        $( "#lineChart1" ).hide();
        $( "#lineChart2" ).hide();
        $( "#lineChart3" ).hide();

        j++;
    }


    $("#d-55").val(Math.round(d_55val));
    $("#e-55").val(Math.round(e_55val));
    $("#f-55").val(Math.round(f_55val));

    calculateN();
    calculateP();
    calculateR();
    calculateI41();
    calculateI42();
    calculateI43();
    CalculateSecondDEF();

}

function calculateSecondB(){
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var result = $( "#b-" + i ).val();
    var second = i+56;
    //give the cell (input field) that value
    $( "#b-" + second ).val( Math.round(result) );
  }
  var sum = $( "#b-55" ).val();
  //give the sum-cell the value of all the cells together
  $( "#b-111" ).val( Math.round(sum) );

  calculateSecondH();
  calculateSecondI();
  calculateSecondJ();
}

function calculateB(){
  //give different variables the value that is in that input field
  //If the cell is in "indata & resultat", then the id will be #indata-row
  //If the cell is in "grundläggande antaganden", then the id will be #extended-row
  //If the cell is in "Kassaflöden", then the id will be #column-row so for example A5 in the table will be #a-5
  var p24 = toNum($( "#indata-24" ).val());
  var p18 = +($( "#indata-18" ).val());
  var e60 = toNum($( "#extended-60" ).val());
  e60 = e60 / 100; // divide by 100 since it is a % unit
  var p53 = toNum($( "#indata-53" ).val());
  var e56 = toNum($( "#extended-56" ).val());
  e56 = e56/100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var current = $( "#a-" + i ).val();
    var result = 0;
    if(+current <= +p24){
      //perform the calculation and save result in a variable
      result = Math.round(p18 * e60 * p53 * (Math.pow((1-e56), (current-1))));
      //
      sum = sum + result;
    }
    //give the cell (input field) that value
    $( "#b-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#b-55" ).val( Math.round(sum) );

  calculateI54();
  calculateI55();
  calculateSecondB();
}

function calculateC(){
  var p28 = toNum($( "#indata-28" ).val());
  p28 = p28 / 100;
  //set sum counter to 0
  var sum = 0;
  //loop through all the ids for that column
  for(var i = 5; i < 55; i++){
    var currentB = $( "#b-" + i ).val();
    var currentA = $( "#a-" + i ).val();
    var result = Math.round(currentB/Math.pow((1+p28), currentA));
    sum = sum + result;
    $( "#c-" + i ).val( Math.round(result) );
  }
  //give the sum-cell the value of all the cells together
  $( "#c-55" ).val( Math.round(sum) );
  calculateH();
  calculateI();
  calculateJ();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

function calculateSecondG(){
  //OM(A62<=Ekonomisk_livslängd;-(Årlig_fast_driftkostnad+Årlig_rörlig_driftkostnad);0)

  var p24 = toNum($("#indata-24").val());
  //p28 = p28 / 100;
  var p47 = toNum($("#indata-47").val());
  var p48 = toNum($("#indata-48").val());
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  var j = 1;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 60; i < 111; i++){
    //var currentA = $( "#a-" + i ).val();

    if(j <= +p24){
      result = -(p47+p48);
      sum = sum + Math.round(result);
    }
    $( "#g-" + i ).val( Math.round(result) );
    result = 0;
    j++;
  }
  //give the sum-cell the value of all the cells together
  $( "#g-111" ).val( Math.round(sum) );
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
}


function calculateG(){
  var p24 = toNum($("#indata-24").val());
  var p28 = parseInt($("#indata-28").val())/100;
  //p28 = p28 / 100;
  var p47 = toNum($("#indata-47").val());
  var p48 = toNum($("#indata-48").val());
  //set sum counter to 0
  var sum = 0;
  var result = 0;
  var j = 1;
  //loop through all the ids for that column
  //skipping 8-13
  for(var i = 5; i < 55; i++){
    //var currentA = $( "#a-" + i ).val();
    if(j <= +p24){
      result = -(p47+p48)/Math.pow((1+p28), j);
      sum = sum + Math.round(result);
    }
    $( "#g-" + i ).val( Math.round(result) );
    result = 0;
    j++;
  }
  //give the sum-cell the value of all the cells together
  $( "#g-55" ).val( Math.round(sum) );
  calculateN();
  calculateP();
  calculateR();
  calculateSecondG();
}

//CALCULATE SECOND CASHFLOW TABLE COLUMNS K,L,M:
function calculateSecondK(){
  var p64 = toNum($( "#indata-64" ).val());
  var p65 = toNum($( "#indata-65" ).val());
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = toNum($( "#indata-66" ).val());
  p66 = p66 / 100;
  var e64 = toNum($( "#extended-64" ).val());
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = $( "#a-" + i ).val();
    currentB = $( "#b-" + i ).val();
    result = 0;

    if(+e64 >= +currentA)
      //perform the calculation and save the result in a variable
      result = Math.round( currentB * p65 * (1-p66) * p64 );
    //else result = 0

    $( "#k-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum
  }

  $( "#k-111" ).val( sum ); //give the sum-cell the total calculated sum
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
}

function calculateK(){
  var p64 = toNum($( "#indata-64" ).val());
  var p65 = toNum($( "#indata-65" ).val());
  p65 = p65 / 100; // divide by 100 since it is a % unit
  var p66 = toNum($( "#indata-66" ).val());
  p66 = p66 / 100;
  var e64 = toNum($( "#extended-64" ).val());
  var sum = 0; //set sum counter to 0

  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val(); //improvement (?) - put declaration of "currentA", "currentC", "result" before the for-loop, to avoid creating several different variables?
    var currentC = $( "#c-" + i ).val();
    var result = 0;

    if(+e64 >= +currentA)
      //perform the calculation and save the result in a variable
      result = currentC * p65 * (1-p66) * p64;
    //else result = 0

    $( "#k-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum

    //var testStr1 = "result of K" + i + "=" + result;
    //alert(testStr1); //test
  }

  $( "#k-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum

  //var testStr2 = "total K sum=" + sum;
  //alert(testStr2); //test
  calculateSecondK();
  calculateN();
  calculateP();
  calculateR();
}

function calculateSecondM(){
  var p24 = toNum($( "#indata-24" ).val());
  var p28 = toNum($( "#indata-28" ).val());
  p28 = p28 / 100; // divide by 100 since it is a % unit
  var p60 = toNum($( "#indata-60" ).val());
  p60 = p60 / 100;
  var p68 = toNum($( "#indata-68" ).val());
  var e65 = toNum($( "#extended-65" ).val());
  var e66 = toNum($( "#extended-66" ).val());
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = toNum($( "#a-" + i ).val());
    currentB = toNum($( "#b-" + i ).val());
    result = 0;

    //perform calculations if necessary
    if(+p24 >= +currentA && +p68 >= +currentA) {
      if((currentB * (1-p60) * e65) > (+e66))
        result = Math.round(18000 / Math.pow((1+p28), currentA));
      else
        result = Math.round(currentB * (1-p60) * e65);
    }
    //else result = 0;

    $( "#m-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum
  }

  $( "#m-111" ).val( sum ); //give the sum-cell the total calculated sum
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
}

function calculateM(){
  var p24 = toNum($( "#indata-24" ).val());
  var p28 = toNum($( "#indata-28" ).val());
  p28 = p28 / 100; // divide by 100 since it is a % unit
  var p60 = toNum($( "#indata-60" ).val());
  p60 = p60 / 100;
  var p68 = toNum($( "#indata-68" ).val());
  var e65 = toNum($( "#extended-65" ).val());
  var e66 = toNum($( "#extended-66" ).val());
  var sum = 0; //set sum counter to 0

  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    var currentC = $( "#c-" + i ).val();
    var result = 0;

    //perform calculations if necessary
    if(+p24 >= +currentA && +p68 >= +currentA) {
      if((currentC * (1-p60) * e65) > (+e66))
        result = Math.round(18000 / Math.pow((1+p28), currentA));
      else
        result = Math.round(currentC * (1-p60) * e65);
    }
    //else result = 0;

    $( "#m-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum

    //var testStr1 = "result of M" + i + "=" + result;
    //alert(testStr1); //test
  }

  $( "#m-55" ).val( Math.round(sum) ); //give the sum-cell the total calculated sum

  //var testStr2 = "total M sum=" + sum;
  //alert(testStr2); //test
  calculateSecondM();
  calculateN();
  calculateP();
  calculateR();
}

function calculateSecondL(){
  var p24 = toNum($( "#indata-24" ).val());
  var p67 = toNum($( "#indata-67" ).val());
  var sum = 0; //set sum counter to 0

  var currentA, currentB = 0;
  var result = 0;
  
  //loop through the necessary ids for that column (row 61-110)
  for(var i = 61; i < 111; i++){
    currentA = $( "#a-" + i ).val();
    currentB = $( "#b-" + i ).val();
    result = 0;

    if(+p24 >= +currentA)
      //perform the calculation and save the result in a variable
      result = Math.round( currentB * p67 );
    //else result = 0

    $( "#l-" + i ).val( result ); //give the specific cell (input field) that value
    sum = sum + ( result ); //increase the sum
  }

  $( "#l-111" ).val( sum );
  calculateSecondN();
  calculateSecondP();
  calculateSecondR();
}

function calculateL(){
  var p24 = toNum($( "#indata-24" ).val());
  var p67 = toNum($( "#indata-67" ).val());
  var sum = 0; //set sum counter to 0

  //loop through the necessary ids for that column (row 5-54)
  for(var i = 5; i < 55; i++){
    var currentA = $( "#a-" + i ).val();
    var currentC = $( "#c-" + i ).val();
    var result = 0;

    if(+p24 >= +currentA)
      //perform the calculation and save the result in a variable
      result = currentC * p67;
    //else result = 0

    $( "#l-" + i ).val( Math.round(result) ); //give the specific cell (input field) that value
    sum = sum + result; //increase the sum

    //var testStr1 = "result of L" + i + "=" + result;
    //alert(testStr1); //test
  }

  $( "#l-55" ).val( Math.round(sum) );

  //var testStr2 = "total L sum=" + sum;
  //alert(testStr2); //test
  calculateSecondL();
  calculateN();
  calculateP();
  calculateR();
}

//This will always calculate cash flow column D, E and F, dont call calculateDEF after this one
function calculateE25(){
  var p18 = +($( "#indata-18" ).val());
  var choosen = $("input[name=optradio]:checked").val()
  var result;
  if(choosen == 2){
    result = 1000;
  }
  else{
    result = 1000*1.25;
  }
  if(choosen == 2 && p18 <= 100){
    result = 1500;
  }
  else if(p18 <= 100){
    result = 1500*1.25;
  }
  if(choosen == 2 && p18 <= 30){
    result = 2000;
  }
  else if(p18 <= 30){
    result = 2000*1.25;
  }
  if(choosen == 2 && p18 <= 10){
    result = 3000;
  }
  else if(p18 <= 10){
    result = 3000*1.25;
  }
  $( "#extended-25" ).val( numberWithSpaces(Math.round(result)) );

  calculateDEF();
}

function calculateE52(){
  var e50 = toNum($( "#extended-50" ).val());
  var e51 = toNum($( "#extended-51" ).val());
  var p28 = toNum($( "#indata-28" ).val());
  var p24 = toNum($( "#indata-24" ).val());
  var p18 = +($( "#indata-18" ).val());
  var result = (+e50 - +e51)/Math.pow((1+(p28 * 0.01)), p24)/p18;
  $( "#extended-52" ).val( numberWithSpaces(Math.round(result)) );
}

function calculateI25(){
  var e41 = toNum($( "#extended-41" ).val());
  var e42 = toNum($( "#extended-42" ).val());
  var e43 = toNum($( "#extended-43" ).val());
  var e44 = toNum($( "#extended-44" ).val());
  var e45 = toNum($( "#extended-45" ).val());
  var result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(numberWithSpaces(Math.round(result)) );
  $( "#indata-48" ).val(numberWithSpaces(Math.round(result)) );

  var p18 = +($( "#indata-18" ).val());
  var p47 = toNum($( "#indata-47" ).val());
  var p48 = toNum($( "#indata-48" ).val());
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( numberWithSpaces(Math.round(result)) );
}

function calculateI49(){
  var p18 = +($( "#indata-18" ).val());
  var p47 = toNum($( "#indata-47" ).val());
  var p48 = toNum($( "#indata-48" ).val());
  result = (+p47 + +p48)/p18
  $( "#indata-49" ).val( numberWithSpaces(Math.round(result)) );

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

//This doesnt work the first time we enter with mouse, but second time it works?
function calculateE38AndI47(){
  var e30 = toNum($( "#extended-30" ).val());
  var e31 = toNum($( "#extended-31" ).val());
  var e32 = toNum($( "#extended-32" ).val());
  var e33 = toNum($( "#extended-33" ).val());
  var e34 = toNum($( "#extended-34" ).val());
  var e35 = toNum($( "#extended-35" ).val());
  var e36 = toNum($( "#extended-36" ).val());
  var e37 = toNum($( "#extended-37" ).val());
  var result = +e30 + +e31 + +e32 + +e33 + +e34 + +e35 + +e36 + +e37;
  $( "#extended-38" ).val(numberWithSpaces(Math.round(result)) );
  $( "#indata-47" ).val(numberWithSpaces(Math.round(result)) );

  //alert(result);
  calculateI49();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

function calculateE46AndI48(){
  var e41 = toNum($( "#extended-41" ).val());
  var e42 = toNum($( "#extended-42" ).val());
  var e43 = toNum($( "#extended-43" ).val());
  var e44 = toNum($( "#extended-44" ).val());
  var e45 = toNum($( "#extended-45" ).val());
  result = +e41 + +e42 + +e43 + +e44 + +e45;
  $( "#extended-46" ).val(numberWithSpaces(Math.round(result)) );
  $( "#indata-48" ).val(numberWithSpaces(Math.round(result)) );

  calculateI49();
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
}

function calculateI19(){
  var p18 = +($( "#indata-18" ).val());
  var e12 = toNum($( "#extended-12" ).val());
  var result = p18/(e12*0.01);
  $( "#indata-19" ).val( numberWithSpaces(Math.round(result)) );
}

$('#calculations').on('mouseenter', '', function(ev){

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

if(firstEnter == true){
  //calculating p19
  calculateI19();
  calculateE25();
  calculateE52();
  calculateI25();
  calculateE46AndI48();

  //calculating e38 and p48
  calculateE38AndI47();
  calculateI49();
  calculateB();
  calculateC();
  calculateDEF();
  calculateG();
  calculateH();
  calculateI();
  calculateJ();
  calculateK();
  calculateL();
  calculateM();
  calculateN();
  calculateO();
  calculateP();
  calculateQ();
  calculateR();
  calculateS();

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
  firstEnter = false;
}


});

$('#buttonArea').on('mouseleave', '', function(ev){
  //calculating p19
  calculateI19();
  calculateE25();
  calculateE52();
  calculateI25();
  calculateE46AndI48();

  //calculating e38 and p48
  calculateE38AndI47();
  calculateI49();
  calculateB();
  calculateC();
  calculateDEF();
  calculateG();
  calculateH();
  calculateI();
  calculateJ();
  calculateK();
  calculateL();
  calculateM();
  calculateN();
  calculateO();
  calculateP();
  calculateQ();
  calculateR();
  calculateS();

  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();

});

$('#calculations').on('change', '#indata-20', function(ev){
  $( "#indata-20" ).val(numberWithSpaces($( "#indata-20" ).val()) );
});
$('#calculations').on('change', '#indata-24', function(ev){
  $( "#indata-24" ).val(numberWithSpaces($( "#indata-24" ).val()) );
});

//calculating p19, p49
$('#calculations').on('keyup', '#indata-18', '#extended-12', function(ev){
  calculateI19();
  calculateI49();
});

//calculating e38, p47, p49
$('#calculations').on('keyup', '#extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37', function(ev){
  calculateE38AndI47();
  calculateI49();
});

//calculating e46, p48, p49
$('#calculations').on('keyup', '#extended-41, #extended-42, #extended-43, #extended-44, #extended-45', function(ev){
  calculateI25();
});

$('#calculations').on('keyup', '#extended-50, #extended-51, #indata-28, #indata-24, #indata-18', function(ev){
  calculateE52();
});

$('#calculations').on('keyup', '#indata-18', function(ev){
  calculateE25();
});

$('#calculations').on('click', '#personToggle, #companyToggle', function(ev){

});

//make B, C and G

//Always use #calculations as the identifier in the $('#calculations')
//Then look in the excel sheet and in the formula for that cell there will be a number of different cells that make the calculations.
//Whenever any of these cells get changed, the calculations should be performed. This is all the other ids after the .on('keyup')
//So basically just copy this function and change the different ids to match the formula in your cell.
$('#calculations').on('keyup', '#indata-24, #indata-18, #extended-60, #indata-53, #extended-56', function(ev){
calculateB();
calculateC();
calculateK();
calculateM();
calculateL();
});

$('#calculations').on('keyup', '#indata-28', function(ev){
  calculateC();
  calculateK();
  calculateM();
  calculateL();
});

$('#calculations').on('keyup', '#indata-24, #indata-28, #extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-38, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45, #extended-46', function(ev){
  calculateG();
});

//column K
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#extended-64, #indata-65, #indata-66, #indata-64', function(ev){
  calculateK();
});

//column M
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#indata-24, #indata-68, #indata-60, #extended-65, #extended-66, #indata-28', function(ev){
  calculateM();
});

//column L
//(when changes are made to column A and C then you need to call this function as well, at least C column) <====== IMPORTANT
$('#calculations').on('keyup', '#indata-24, #indata-67', function(ev){
  calculateL();
});

//Column D, E, F
$('#calculations').on('keyup', '#indata-32, #indata-35, #indata-36, #indata-37, #indata-38, #indata-33, #indata-24, #indata-28, #indata-35, #extended-17, #extended-18, #extended-16, #extended-24, #extended-23, #extended-50, #extended-51', function(ev){
  calculateE25();
});

//Column H, I, J
$('#calculations').on('keyup', '#indata-60, #indata-61, #indata-62, #indata-63', function(ev){
  calculateC();
});

$('#calculations').on('keyup', '#indata-60, #indata-61, #indata-62, #indata-63', function(ev){
  calculateC();
});

$('#calculations').on('keyup', '#indata-24', function(ev){
  calculateO();
  calculateQ();
  calculateS();
  calculateSecondO();
  calculateSecondQ();
  calculateSecondS();
});

$('#calculations').on('keyup', '#indata-18', function(ev){
  calculateI41();
  calculateI42();
  calculateI43();
});

$('#calculations').on('keyup', '#indata-41, #indata-42, #indata-43, #indata-28, #indata-24, #indata-49, #indata-18, #extended-50, #extended-51', function(ev){
  calculateProductionCostD72();
  calculateProductionCostD73();
  calculateProductionCostD74();
});

$('#calculations').on('keyup', '#extended-30, #extended-31, #extended-32, #extended-33, #extended-34, #extended-35, #extended-36, #extended-37, #extended-41, #extended-42, #extended-43, #extended-44, #extended-45', function(ev){
  calculateE38AndI47();
  calculateE46AndI48();
});

$('#calculations').on('keyup', '#extended-64', function(ev){
  calculateI55();
});

$('#calculations').on('click', '#click-84', function(ev){
  calculateI84();
});

$('#calculations').on('click', '#click-89', function(ev){
  calculateI89();
});

$('#calculations').on('click', '#click-94', function(ev){
  calculateI94();
});

$("#diagramBtn").click(function(){
  $( "#pieChart1" ).show();
  $( "#pieChart2" ).show();
  $( "#pieChart3" ).show();
  $( "#lineChart1" ).show();
  $( "#lineChart2" ).show();
  $( "#lineChart3" ).show();
  google.charts.setOnLoadCallback(drawLineChart1);
  google.charts.setOnLoadCallback(drawLineChart2);
  google.charts.setOnLoadCallback(drawLineChart3);
  google.charts.setOnLoadCallback(drawPieChart1);
  google.charts.setOnLoadCallback(drawPieChart2);
  google.charts.setOnLoadCallback(drawPieChart3);
});

$("#createPDFBtn").click(function(){
  $( "#pieChart1" ).show();
  $( "#pieChart2" ).show();
  $( "#pieChart3" ).show();
  $( "#lineChart1" ).show();
  $( "#lineChart2" ).show();
  $( "#lineChart3" ).show();
  google.charts.setOnLoadCallback(drawLineChart1);
  google.charts.setOnLoadCallback(drawLineChart2);
  google.charts.setOnLoadCallback(drawLineChart3);
  google.charts.setOnLoadCallback(drawPieChart1);
  google.charts.setOnLoadCallback(drawPieChart2);
  google.charts.setOnLoadCallback(drawPieChart3);
  calculateI84();
  calculateI89();
  calculateI94();
  createPDF();
});
