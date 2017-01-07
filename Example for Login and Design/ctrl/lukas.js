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
        { text: 'Your input values:', fontSize: 16, margin: [0, 0, 0, 8] },


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
                  [ { text: 'Investeringskostnad solcellsanläggning, utan stöd eller ROT-avdrag', style: 'tableDescription'}, { text: $("#indata-32").val(), style: 'tableValue'} ],
                  [ { text: 'Investeringsstöd', style: 'tableDescription'}, { text: $("#indata-33").val(), style: 'tableValue'} ],
                  [ { text: 'Bygglov', style: 'tableDescription'}, { text: $("#indata-35").val(), style: 'tableValue'} ],
                  [ { text: 'Projektledning och upphandling', style: 'tableDescription'}, { text: $("#indata-36").val(), style: 'tableValue'} ],
                  [ { text: 'Besiktning efter färdigställande', style: 'tableDescription'}, { text: $("#indata-37").val(), style: 'tableValue'} ],
                  [ { text: 'Utbildning', style: 'tableDescription'}, { text: $("#indata-38").val(), style: 'tableValue'} ],

                  [ { text: 'Summa investering under livslängden', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag eller investeringsstöd', style: 'tableDescription'}, { text: $("#indata-41").val(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag', style: 'tableDescription'}, { text: $("#indata-42").val(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd', style: 'tableDescription'}, { text: $("#indata-43").val(), style: 'tableValue'} ],

                  [ { text: 'Driftkostnad', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Årlig fast driftkostnad som inte beror på anläggningens storlek', style: 'tableDescription'}, { text: $("#indata-47").val(), style: 'tableValue'} ],
                  [ { text: 'Årlig rörlig driftkostnad som beror på anläggningens storlek', style: 'tableDescription'}, { text: $("#indata-48").val(), style: 'tableValue'} ],
                  [ { text: 'Summa årliga kostnader', style: 'tableDescription'}, { text: $("#indata-49").val(), style: 'tableValue'} ],

                  [ { text: 'Energiutbyte', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Energiutbyte första året', style: 'tableDescription'}, { text: $("#indata-53").val(), style: 'tableValue'} ],
                  [ { text: 'Summa solelproduktion under livslängden', style: 'tableDescription'}, { text: $("#indata-54").val(), style: 'tableValue'} ],
                  [ { text: 'Summa solelproduktion berättigad till elcertifikat', style: 'tableDescription'}, { text: $("#indata-55").val(), style: 'tableValue'} ],

                  [ { text: 'Intäkter', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Andel egenanvänd el', style: 'tableDescription'}, { text: $("#indata-60").val(), style: 'tableValue'} ],
                  [ { text: 'Pris köpt el', style: 'tableDescription'}, { text: $("#indata-61").val(), style: 'tableValue'} ],
                  [ { text: 'Pris såld el', style: 'tableDescription'}, { text: $("#indata-62").val(), style: 'tableValue'} ],
                  [ { text: 'Ersättning från nätägare', style: 'tableDescription'}, { text: $("#indata-63").val(), style: 'tableValue'} ],
                  [ { text: 'Elcertifikatvärde', style: 'tableDescription'}, { text: $("#indata-64").val(), style: 'tableValue'} ],
                  [ { text: 'Andel solel som ger elcertifikat', style: 'tableDescription'}, { text: $("#indata-65").val(), style: 'tableValue'} ],
                  [ { text: 'Kvotplikt medelvärde', style: 'tableDescription'}, { text: $("#indata-66").val(), style: 'tableValue'} ],
                  [ { text: 'Ursprungsgarantier värde', style: 'tableDescription'}, { text: $("#indata-67").val(), style: 'tableValue'} ],
                  [ { text: 'Antal år med skattereduktion', style: 'tableDescription'}, { text: $("#indata-68").val(), style: 'tableValue'} ],

                  [ { text: 'Beräknad produktionskostnad (LCOE)', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag eller investeringsstöd', style: 'tableDescription'}, { text: $("#indata-72").val(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag', style: 'tableDescription'}, { text: $("#indata-73").val(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd', style: 'tableDescription'}, { text: $("#indata-74").val(), style: 'tableValue'} ],

                  [ { text: 'Beräknad lönsamhet', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Utan ROT-avdrag och investeringsstöd, med eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-82").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-83").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: $("#indata-84").val(), style: 'tableValue'} ],
                  [ { text: 'Med ROT-avdrag och eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-87").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-88").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: $("#indata-89").val(), style: 'tableValue'} ],
                  [ { text: 'Med investeringsstöd och eventuell skattereduktion', style: 'tableSubSection'}, { text: '', } ],
                  [ { text: 'Nuvärde', style: 'tableDescription'}, { text: $("#indata-92").val(), style: 'tableValue'} ],
                  [ { text: 'Diskonterad återbetalningstid', style: 'tableDescription'}, { text: $("#indata-93").val(), style: 'tableValue'} ],
                  [ { text: 'Internränta (IRR)', style: 'tableDescription'}, { text: $("#indata-94").val(), style: 'tableValue'} ],
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
                  [ { text: 'Extended', style: 'tableHeader' }, { text: '', }],
                  [ { text: 'Anläggning', style: 'sectionHeader' }, { text: '', }],
                  [ { text: 'Verkningsgrad solcellsmoduler', style: 'tableDescription'}, { text: $("#extended-12").val(), style: 'tableValue'} ],

                  [ { text: 'Investering', style: 'sectionHeader' }, { text: '', }],
                  [ { text: 'Tak för investeringsstöd', style: 'tableDescription'}, { text: $("#extended-16").val(), style: 'tableValue'} ],
                  [ { text: 'ROT-avdrag arbetskostnad', style: 'tableDescription'}, { text: $("#extended-17").val(), style: 'tableValue'} ],
                  [ { text: 'Tak för ROT-avdrag', style: 'tableDescription'}, { text: $("#extended-18").val(), style: 'tableValue'} ],
                  [ { text: 'Kostnad för köp eller preparering av mark', style: 'tableDescription'}, { text: $("#extended-20").val(), style: 'tableValue'} ],
                  [ { text: 'Nätanslutningskostnad', style: 'tableDescription'}, { text: $("#extended-21").val(), style: 'tableValue'} ],
                  [ { text: 'Antal byten av växelriktare', style: 'tableDescription'}, { text: $("#extended-23").val(), style: 'tableValue'} ],
                  [ { text: 'Antal år till byte av växelriktare', style: 'tableDescription'}, { text: $("#extended-24").val(), style: 'tableValue'} ],
                  [ { text: 'Kostnad för byte av växelriktare', style: 'tableDescription'}, { text: $("#extended-25").val(), style: 'tableValue'} ],

                  [ { text: 'Driftkostnader', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Elcertifikathantering', style: 'tableDescription'}, { text: $("#extended-30").val(), style: 'tableValue'} ],
                  [ { text: 'Fastighetsskatt', style: 'tableDescription'}, { text: $("#extended-31").val(), style: 'tableValue'} ],
                  [ { text: 'Inmatningsabonnemang', style: 'tableDescription'}, { text: $("#extended-32").val(), style: 'tableValue'} ],
                  [ { text: 'Loggning', style: 'tableDescription'}, { text: $("#extended-33").val(), style: 'tableValue'} ],
                  [ { text: 'Resor', style: 'tableDescription'}, { text: $("#extended-34").val(), style: 'tableValue'} ],
                  [ { text: 'Servitut', style: 'tableDescription'}, { text: $("#extended-35").val(), style: 'tableValue'} ],
                  [ { text: 'Uttagsabonnemang', style: 'tableDescription'}, { text: $("#extended-36").val(), style: 'tableValue'} ],
                  [ { text: 'Övrigt', style: 'tableDescription'}, { text: $("#extended-37").val(), style: 'tableValue'} ],
                  [ { text: 'Summa årlig fast driftkostnad', style: 'tableDescription'}, { text: $("#extended-38").val(), style: 'tableValue'} ],
                  [ { text: 'Försäkring', style: 'tableDescription'}, { text: $("#extended-41").val(), style: 'tableValue'} ],
                  [ { text: 'Hyra av yta', style: 'tableDescription'}, { text: $("#extended-42").val(), style: 'tableValue'} ],
                  [ { text: 'Underhåll av yta', style: 'tableDescription'}, { text: $("#extended-43").val(), style: 'tableValue'} ],
                  [ { text: 'Rengöring av moduler', style: 'tableDescription'}, { text: $("#extended-44").val(), style: 'tableValue'} ],
                  [ { text: 'Tillsyn', style: 'tableDescription'}, { text: $("#extended-45").val(), style: 'tableValue'} ],
                  [ { text: 'Summa årlig rörlig driftkostnad', style: 'tableDescription'}, { text: $("#extended-46").val(), style: 'tableValue'} ],

                  [ { text: 'Restvärde', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Restvärde', style: 'tableDescription'}, { text: $("#extended-50").val(), style: 'tableValue'} ],
                  [ { text: 'Rivningskostnad', style: 'tableDescription'}, { text: $("#extended-51").val(), style: 'tableValue'} ],
                  [ { text: 'Summa kostnader vid avslut', style: 'tableDescription'}, { text: $("#extended-52").val(), style: 'tableValue'} ],

                  [ { text: 'Systemdegradering', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Årlig degradering av utbytet', style: 'tableDescription'}, { text: $("#extended-56").val(), style: 'tableValue'} ],

                  [ { text: 'Energiutbyte', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Tillgänglighet', style: 'tableDescription'}, { text: $("#extended-60").val(), style: 'tableValue'} ],

                  [ { text: 'Intäkter', style: 'sectionHeader'}, { text: '', } ],
                  [ { text: 'Antal år med elcertifikat', style: 'tableDescription'}, { text: $("#extended-64").val(), style: 'tableValue'} ],
                  [ { text: 'Skattereduktion', style: 'tableDescription'}, { text: $("#extended-65").val(), style: 'tableValue'} ],
                  [ { text: 'Tak för skattereduktion', style: 'tableDescription'}, { text: $("#extended-66").val(), style: 'tableValue'} ],
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
        // --- page 3 end ---

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
     tableSubSection: {
       italics: true,
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
      sectionHeader: {
        bold: true,
  			fontSize: 10,
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
