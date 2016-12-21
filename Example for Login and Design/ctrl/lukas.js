function createPDF(){
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
        '\n\n\n--- Diagrams ---',
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
