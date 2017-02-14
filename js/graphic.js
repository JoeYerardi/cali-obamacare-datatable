//google sheets key
var key =
  "https://docs.google.com/spreadsheets/d/1cU72AveRa53d9hX7nLIIYscTMycuF9O6JRiEQGnnbOI/pubhtml?gid=0&single=true";

//"data" refers to the column name with no spaces and no capitals, punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "county",
  "title": "County"
}, {
  "data": "medi-calenrolleesunderacaxpansion",
  "title": "Medi-Cal Enrollees Under ACA Expansion"
}, {
  "data": "totalmedi-calenrollees",
  "title": "Total Medi-Cal Enrollees"
}, {
  "data": "subsidizedcoveredcaliforniaenrollees",
  "title": "Subsidized Covered California Enrollees"
}, {
  "data": "totalcoveredcaliforniaenrollees",
  "title": "Total Covered California Enrollees"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [0, "desc"]
      ],
      "pagingType": "simple"
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
