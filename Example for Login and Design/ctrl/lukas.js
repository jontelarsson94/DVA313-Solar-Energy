//Column N, O and P - second cash flow table

//Column N
/*function calculateN(){
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
    //calculateO();
    //calculateI82();
}*/

//Column O
/*function calculateO(){
  $("#o-60").val(  parseInt($("#n-60").val()) );

    for(var i = 61; i < 111; i++){
        if( parseInt($("#indata-24").val()) >  parseInt($("#a-" +i).val()))
            $("#o-"+i).val(Math.round(  Math.round(parseInt($("#o-"+(i-1)).val())) +  Math.round(parseInt($("#n-"+i).val())) ));
    }
    //calculateD83();
    //google.charts.setOnLoadCallback(drawLineChart1);
}*/

//Column P
function calculateP(){
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
      header: 'Future Energy Center',
      footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },

      content: [
        // --- page 1 ---
        //Input Values
        { text: 'Solar Economic Calculator', fontSize: 18, margin: [0, 0, 0, 10] },
        { text: 'Your input values:', fontSize: 16, margin: [0, 0, 0, 8] },
        {
          columns: [
            {
              width: '50%',
              text: 'Indata och resultat'
            },
            {
              width: '50%',
              text: 'Extended'
            }
          ],
          // optional space between columns
          columnGap: 30, margin: [0, 0, 0, 5]
        },

        //tables on first page
        {
          columns: [
            {
              width: '50%',
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [{ text: 'Anläggning', style: 'tableHeader' }, { text: '', style: 'tableHeader'}],
                  [ { text: 'Anläggningens effekt', style: 'tableDescription'}, { text: '100,0', style: 'tableValue'} ],
                  [ { text: 'Modulyta', style: 'tableDescription'}, { text: '667', style: 'tableValue'} ],
                  [ { text: 'Säkringsstorlek i anslutningspunkten', style: 'tableDescription'}, { text: '150', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                ],
              },
              layout: 'lightHorizontalLines',
            },
            {
              width: '50%',
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader'}],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
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
          text: 'Cash Flow',
          style: 'header',
          pageBreak: 'before',
          pageOrientation: 'landscape'
        },
        '\n\n\n--- Table with 19 x 55 ---',
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
                          width: 200,
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
          columnGap: 30, margin: [0, 0, 0, 5]
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                        {
                          width: 200,
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
          columnGap: 30, margin: [0, 0, 0, 5]
        },
        {
          columns: [
            {
              width: '50%',
              stack: [
                        {
                          width: 200,
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
          columnGap: 30, margin: [0, 0, 0, 5]
        },

        // --- page 3 end ---

        // --- page 4 ---
        // Output Values and Results
        {
          text: 'Output values and results',
          style: 'header',
          pageBreak: 'before',
          pageOrientation: 'portrait'
        },
        { text: 'Your output values:', fontSize: 16, margin: [0, 0, 0, 8] },
        {
          columns: [
            {
              width: '50%',
              text: 'Beräknad produktionskostnad (LCOE)'
            },
            {
              width: '50%',
              text: 'Beräknad lönsamhet'
            }
          ],
          // optional space between columns
          columnGap: 30, margin: [0, 0, 0, 5]
        },

        //tables for Profitability and Production Cost
        {
          columns: [
            {
              width: '50%',
              table: {
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader'}],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                ],
              },
              layout: 'lightHorizontalLines',
            },
            {
              width: '50%',
              table: {
                headerRows: 1,
                widths: [ '70%', '30%' ],

                body: [
                  [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader'}],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                  [ { text: 'Value 1', style: 'tableDescription'}, { text: 'Value 2', style: 'tableValue'} ],
                ]
              },
              layout: 'lightHorizontalLines',
            }
          ],
          // optional space between columns
          columnGap: 30
        },
        '\n\n\n--- Diagram Intäkter ---',
        // --- page 4 end ---

  ],

  // --- styles ---
  styles: {
     tableValue: {
       fontSize: 8,
       alignment: 'right',
     },
     tableDescription: {
       fontSize: 8,
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
  		tableHeader: {
  			bold: true,
  			fontSize: 13,
  			color: 'black'
  		},
      },
      defaultStyle: {
        fontSize: 12,
      }
      // --- style end ---

  };

    // open PDF file in new tab
    pdfMake.createPdf(docDefinition).open('results.pdf');
  }
