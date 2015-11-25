module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
        res.render('index');

        var defaultreg = 'CU57&nbsp;ABC';

    });



    





    /* - - - - - - - - - - - - - - - - - - - - – */
    /* FLOW for VM -- add today, etc into flows */

    app.get('/examples/elements/vm-flow', function (req, res, next) {



    var next = req.query.nextlink;
    

    var pagevars = req.query;
    


    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D - MM - YYYY");
    var todayday = now.format("D");
    var todaymon = now.format("MM");
    var todayyear = now.format("YYYY");
   
var objectMerge = require('object-merge');
    var sess = req.session;

    sessvars = sess.vars;
    var merged = objectMerge(sessvars, pagevars);

    console.log(merged);
    sess.vars = merged;

   



    res.render('examples/elements/' + next, {'vars' : pagevars, 'today' : today, 'todayday' : todayday, 'todaymon' : todaymon, 'todayyear' : todayyear});
 
    });


    /* - - - - - - - - - - - - - - - - - - - - – */
    /* BRANCH for VM -- add today, etc into flows */

    app.get('/examples/elements/vm-branch', function (req, res) {

    var next = req.query.nextlink;
    var branch = req.query.branch;
    var vars = req.query;



    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D MMM YYYY");
   


    res.render('examples/elements/' + next + '-' + branch, {'vars' : vars, 'today' : today});
 
    });






	
    /* - - - - - - - - - - - - - - */
    /* Using idealpostcode to get  */
    /* addresses for a postcode    */

    app.get('/examples/elements/find-postcode', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
      var next = req.query.nextlink;
      var vars = req.query;

      var postcode = req.query.postcode;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        //console.log(results); 
        res.render('examples/elements/' + next + '-' + 'address.html', {'vars' : vars, 'postcode' : postcode, 'result' : results})

      });

    });





    /* - - - - - - - - - - - - - - - - */
    /* Using idealpostcode to playback */
    /* full address into a form from   */
    /* the user chosen udprn           */

    app.get('/examples/elements/chosen-address', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
      var next = req.query.nextlink;
      var vars = req.query;

      var selectedudp = req.query.udprn;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupUdprn(selectedudp, function (error, address) {
        if (error) {
        // Implement some error handling
        }

        //console.log(address); 
        res.render('examples/elements/' + next + '-' + 'address-playback.html', {'vars' : vars, 'address' : address})

      });

    });





  }
};
