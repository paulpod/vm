module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {res.render('index')});


    



    





    /* - - - - - - - - - - - - - - - - - - - - – */
    /* FLOW for VM -- add today, etc into flows */

    app.get('/examples/elements/vm-flow', function (req, res, next) {


    // get the next page
    var next = req.query.nextlink;

    // as long as it's not trying to return from a check/change
    if(/chexx/.test(next)){
      var next = 'vm-acqpp/vm-acquire-check';
    }


    // get all the other variables from the page
    var pagevars = req.query;

    // get the older variables from the session
    var objectMerge = require('object-merge');
    var sess = req.session;
    sessvars = sess.vars;


    // merge the sets of variables from
    // the page and the session
    var merged = objectMerge(sessvars, pagevars);
    sess.vars = merged;

    console.log(merged);
    

    //doing things with dates, but
    //only used on a couple of pages
    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D - MM - YYYY");
    var todayday = now.format("D");
    var todaymon = now.format("MM");
    var todayyear = now.format("YYYY");


    var continuelink = "<div class='form-group' style='margin-top:2em'><input type='submit' class='button' value='Continue'></div>"
   
   

    res.render('examples/elements/' + next, {'button' : continuelink, 'vars' : merged, 'today' : today, 'todayday' : todayday, 'todaymon' : todaymon, 'todayyear' : todayyear});
    });




    /* - - - - - - - - - - - - - - - - - - - - - - - –  */
    /* FLOW for VM -- add today, etc into DISPOSE flows */

    app.get('/examples/elements/vm-disflow', function (req, res, next) {


    // get the next page
    var next = req.query.nextlink;

    // as long as it's not trying to return from a check/change
    if(/chexx/.test(next)){
      var next = 'vm-dispp/vm-check';
    }


    // get all the other variables from the page
    var pagevars = req.query;

    // get the older variables from the session
    var objectMerge = require('object-merge');
    var sess = req.session;
    sessvars = sess.vars;


    // merge the sets of variables from
    // the page and the session
    var merged = objectMerge(sessvars, pagevars);
    sess.vars = merged;

    console.log(merged);
    

    //doing things with dates, but
    //only used on a couple of pages
    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D - MM - YYYY");
    var todayday = now.format("D");
    var todaymon = now.format("MM");
    var todayyear = now.format("YYYY");


    var continuelink = "<div class='form-group' style='margin-top:2em'><input type='submit' class='button' value='Continue'></div>"
   
   

    res.render('examples/elements/' + next, {'button' : continuelink, 'vars' : merged, 'today' : today, 'todayday' : todayday, 'todaymon' : todaymon, 'todayyear' : todayyear});
    });






    /* - - - - - - - - - - - - - - - - - - - - – */
    /* BRANCH for VM -- add today, etc into flows */

    app.get('/examples/elements/vm-branch', function (req, res, next) {

    var next = req.query.nextlink;
    var branch = req.query.branch;

    // get all the other variables from the page
    var pagevars = req.query;

    // get the older variables from the session
    var objectMerge = require('object-merge');
    var sess = req.session;
    sessvars = sess.vars;

    // merge the sets of variables from
    // the page and the session
    var merged = objectMerge(sessvars, pagevars);
    sess.vars = merged;

    console.log(sess.vars);



    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D MMM YYYY");

    var continuelink = "<div class='form-group' style='margin-top:2em'><input type='submit' class='button' value='Continue'></div>"
   
   


    res.render('examples/elements/' + next + '-' + branch, {'button' : continuelink, 'vars' : merged, 'today' : today});
 
    });








    /* - - - - - - - - - - - - - - - - - - - - – - - - */
    /* CHECKER for VM -- go back and change an answer */

    app.get('/examples/elements/vm-check', function (req, res, next) {

    // get the page to jump back to
    var next = req.query.checklink;

    // get all the other variables from the page
    var pagevars = req.query;

    // get the older variables from the session
    var objectMerge = require('object-merge');
    var sess = req.session;
    sessvars = sess.vars;

    // merge the sets of variables from
    // the page and the session
    var merged = objectMerge(sessvars, pagevars);
    sess.vars = merged;

    console.log(sess.vars);


   
    

    //doing things with dates, but
    //only used on a couple of pages
    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D - MM - YYYY");
    var todayday = now.format("D");
    var todaymon = now.format("MM");
    var todayyear = now.format("YYYY");

    var changelink = "<div class='form-group' style='margin-top:2em'><input type='hidden' name='nextlink' value='chexx'><input type='submit' class='button' value='Save change'></div>"
   

    res.render('examples/elements/' + next, {'button' : changelink, 'vars' : merged, 'today' : today, 'todayday' : todayday, 'todaymon' : todaymon, 'todayyear' : todayyear});
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
