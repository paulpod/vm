module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');

    var defaultreg = 'CU57&nbsp;ABC';

    });

    






    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-3-got', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == 1) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v11', {'back' : back});
    } else if (x == 2) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c', {'back' : back});
    } else if (x == 3) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c2', {'back' : back});
    }
 
	});



    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Pass EVL ref number variations into flow */

    app.get('/examples/elements/evl-3-flow', function (req, res) {

    var next = req.query.nextlink;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var email = req.query.email;
    var kind = req.query.kind;
    var paynum = req.query.paynum;

    
    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D MMM YYYY");
   




    if (kind == 'v5c') {
        if (paynum == 1) {
            var sorntax = "Note: You are taxing a vehicle previously declared off the road within 2 days of the end of the current month.</p><p>Your vehicle tax will start on the <strong>1st of the next month</strong>. You are not taxed until then.";
        }
    }

    res.render('examples/elements/' + next, {'back' : back, 'defaultreg' : defaultreg, 'paynum' : paynum, 'email' : email, 'today' : today, 'kind' : kind, 'sorntax' : sorntax});
    
 
    });







    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Special flow for Paydd-email form ... passes payer name into default of account name */

    app.get('/examples/elements/evl-paydd-email-flow', function (req, res) {

    var next = req.query.nextlink;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    /* refresh the email var by taking the 2nd confirm field */
    var email = req.query.email2;
    var kind = req.query.kind;
    var paynum = req.query.paynum;
    var payer = req.query.payer;

    console.log(kind);
    console.log(paynum);

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");


    if (kind == 'v5c') {
        if (paynum == 1) {
            console.log(sorntax);
            var sorntax = "Note: You are taxing a vehicle previously declared off the road within 2 days of the end of the current month.</p><p>Your vehicle tax will start on the <strong>1st of the next month</strong>. You are not taxed until then.";
        }
    }

    res.render('examples/elements/' + next, {'back' : back, 'defaultreg' : defaultreg, 'paynum' : paynum, 'email' : email, 'today' : today, 'kind' : kind, 'sorntax' : sorntax, 'payer' : payer});
    
 
    });






    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Pass nextpage for SORN FLOW */

    app.get('/examples/elements/sorn-flow', function (req, res) {

    var next = req.query.nextlink;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var email = req.query.email;
    var kind = req.query.kind;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMMM YYYY");


    res.render('examples/elements/' + next, {'back' : back, 'defaultreg' : defaultreg, 'email' : email, 'today' : today, 'kind' : kind});
    
 
    });



	

     /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-7-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == "v11") {
        console.log(x);
        res.render('examples/elements/evl-7-v11', {'back' : back});
    } else if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c', {'back' : back});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c2', {'back' : back});
    } else {
        console.log(x);
        res.render('examples/elements/evl-7-other', {'back' : back});
    }
 
    });





    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* revised two step payment process - DD + Card first   */

    app.get('/examples/elements/evl-paymethod', function (req, res) {

    var paymethod = req.query.paymethod;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");
    
    res.render('examples/elements/evl-renewal-type-' + paymethod, {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
    
    });

    /* - - - - - - - - - - - - - - - - - - - - - - -  */
    /* revised two step payment process - DD + Cards  */

    app.get('/examples/elements/evl-paynum', function (req, res) {

    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;

    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");
    
    res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind, 'paynum' : paynum});
    
    });







    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* Multiple routes from How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewals', function (req, res) {


    var paymethod = req.query.paymethod;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");


    if (paymethod != undefined) {
        if (paynum == undefined) {
            /* catch if the user has pressed first set of radios only - card vs dd  */
            res.render('examples/elements/evl-renewal-period-' + paymethod, {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
        } else {
            /* render correct summary page for payment vs duration type 1, 2, 3, 4 or 5  */
            res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'paynum' : paynum, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
        };
    } else {
        res.render('examples/elements/evl-renewal-period-three', {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind})
    }

    

    });





    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* Multiple routes from How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewal-picto', function (req, res) {


    var payperiod = req.query.payperiod;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMM YYYY");


    if (payperiod != undefined) {
        if (paynum == undefined) {
            /* catch if the user has pressed first set of radios only - 1 vs 6, 12 month  */
            res.render('examples/elements/evl-renewal-period-' + payperiod, {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
        } else {
            /* render correct summary page for payment vs duration type 1, 2, 3, 4 or 5  */
            res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'paynum' : paynum, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
        };
    } else {
        res.render('examples/elements/evl-renewal-period-picto', {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind})
    }

    

    });








    /* - - - - - - - - - - - - - - - - - - - -- - -  */
    /* Re-simplified How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewal-three', function (req, res) {


    var payperiod = req.query.payperiod;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }

    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMMM YYYY");
    var month = now.format("MMMM");
    now.add(1, 'months');
    var nextmonth = now.format("MMMM");

    if (kind == 'v5c') {
        console.log(sorntax);
        var sorntax = "Note: You are taxing a vehicle previously declared off the road within 2 days of the end of the current month.</p><p>Your vehicle tax will start on the <strong>1st of the next month</strong>. If you need to drive it before then, you must tax it at a post office.";
        var taxedfrom = "<li><span>Start date </span><strong>1st " + nextmonth + "</strong></li>";
    } else {
        var taxedfrom = "<li><span>Start date </span><strong>" + today + "</strong></li>";
    }
    


    if (paynum != undefined) {
        /* render correct summary page for payment vs duration type 1, 2, 3, 4 or 5  */
        res.render('examples/elements/evl-period-check' + paynum, {'back' : back, 'paynum' : paynum, 'defaultreg' : defaultreg, 'today' : today, 'month' : month, 'kind' : kind, 'nextmonth' : nextmonth, 'sorntax' : sorntax, 'taxedfrom' : taxedfrom});
    } else {
        res.render('examples/elements/evl-renewal-period-three', {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind})
    }

    

    });









    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-11-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.reftype;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2-chooser', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "warn") {
        console.log(x);
        res.render('examples/elements/evl-11-lastchance-chooser', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });





    /* - - - - - - - - - - - - - - - - - - - */
    /* Chooser for lastchance letter type */

    app.get('/examples/elements/evl-lastchance', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.reftype;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "doc11") {
        console.log(x);
        res.render('examples/elements/evl-11-lastchance-doc11', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "doc16") {
        console.log(x);
        res.render('examples/elements/evl-11-lastchance-doc16', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });





    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages SORN to entrypoint */

    app.get('/examples/elements/sorn-begin', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    var moment = require("moment");
    var now = moment(new Date());
    var today = now.format("D MMMM YYYY");
    var month = now.format("MMMM");


    if (x == "v11") {
        console.log(x);
        res.render('examples/elements/sorn-v11', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/sorn-v5c2-chooser', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "warn") {
        console.log(x);
        res.render('examples/elements/sorn-warn-chooser', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/sorn-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'today' : today, 'kind' : kind});
    }

    });






    /* - - - - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL New Keeper V5c named vs V5C/2 */

    app.get('/examples/elements/evl-11-newkeeper', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c-newkeeper', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2-newkeeper', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });




    /* - - - - - - - - - - - - - - - - - - - - - - */
    /* Pages for SORN New Keeper V5c named vs V5C/2 */

    app.get('/examples/elements/sorn-newkeeper', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/sorn-v5c', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/sorn-v5c2-newkeeper', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/sorn-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });







    /* - - - - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL warning letters v11 or v5c doc refs */

    app.get('/examples/elements/evl-11-warning', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v11-lc") {
        console.log(x);
        res.render('examples/elements/evl-11-v11-lc', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c-w") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c-w', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });


     /* - - - - - - - - - - - - - - - - - - - - - - */
    /* Pages for SORN via warning letters v11 or v5c doc refs */

    app.get('/examples/elements/sorn-warning', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;
    var regmark = req.query.regmark;
    var kind = req.query.kind;


    if (regmark == undefined) {
        var defaultreg = 'CU57\xA0ABC';
    } else {
        var defaultreg = regmark;
    }


    if (x == "v11-lc") {
        console.log(x);
        res.render('examples/elements/sorn-v11-lc', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else if (x == "v5c-w") {
        console.log(x);
        res.render('examples/elements/sorn-v5c-w', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    } else {
        console.log(x);
        res.render('examples/elements/sorn-vehicle-details', {'back' : back, 'defaultreg' : defaultreg, 'kind' : kind});
    }

    });





    /* - - - - - - - - - - - - - - - - - - - - – */
    /* FLOW for VM -- add today, etc into flows */

    app.get('/examples/elements/vm-flow', function (req, res) {

    var next = req.query.nextlink;
    var vars = req.query;
   


    

    var moment = require("moment");
    var now = moment(new Date()); 
    var today = now.format("D - MM - YYYY");
    var todayday = now.format("D");
    var todaymon = now.format("MM");
    var todayyear = now.format("YYYY");
   


    console.log(vars); 
    res.render('examples/elements/' + next, {'vars' : vars, 'today' : today, 'todayday' : todayday, 'todaymon' : todaymon, 'todayyear' : todayyear});
 
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
