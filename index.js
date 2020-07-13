var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });
doc.table(1, 1, generateData(100), headers, { autoSize: true });
  
// Don't forget, that there are CORS-Restrictions. So if you want to run it without a Server in your Browser you need to transform the image to a dataURL
// Use http://dataurl.net/#dataurlmaker
var doc = new jsPDF();

doc.addImage("/examples/images/MOTHEO_Logo.png", "JPEG", 155, 8,45, 25);
doc.addImage("/examples/images/Banner.png", "JPEG", 1, 31,210, 1);
doc.addImage("/examples/images/Image.png", "JPEG", 1, 32,210, 15);

doc.setFontSize(17);
doc.setFont('Lithos Pro Light');
doc.setTextColor(15, 72, 120);
doc.text(15, 41, 'PROGESS REPORTING');

doc.setFontSize(22);
doc.setFont('Gill Sans Nova');
doc.text(15, 60, 'This Months Overview');

doc.setFontSize(16);
doc.setFont('Gill Sans Nova');
doc.setTextColor(51, 51, 51);
doc.text(15, 70, 'Date  June 2020');

doc.rect(15, 80, 60, 35); 
doc.rect(78, 80, 60, 35);
doc.rect(141, 80, 60, 35);

doc.addImage("/examples/images/Group.png", "JPEG",40, 82, 10, 10);
doc.addImage("/examples/images/Staff Interactions.png", "JPEG",102, 82, 10, 10);
doc.addImage("/examples/images/Interactions.png", "JPEG",165, 82, 10, 10);

doc.setFontSize(18);
doc.setFont('Gill Sans Nova');
doc.setTextColor(15, 72, 120);
doc.text(43, 100, '4');
doc.text(26, 108, 'Overdue Clients');

doc.setFontSize(18);
doc.setFont('Gill Sans Nova');
doc.setTextColor(15, 72, 120);
doc.text(105, 100, '4');
doc.text(91, 108, 'Inactive Staff');

doc.setFontSize(18);
doc.setFont('Gill Sans Nova');
doc.setTextColor(15, 72, 120);
doc.text(168, 100, '5');
doc.text(149, 108, 'Client Interaction');

doc.setFontSize(16);
doc.setFont('Gill Sans Nova');
doc.setTextColor(51, 51, 51);
doc.text(15, 127, 'Overdue Clients');


{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>

var generateData = function(amount) {
    var result = [];
    var data = {
      coin: "100",
      game_group: "GameGroup",
      game_name: "XPTO2",
      game_version: "25",
      machine: "20485861",
      vlt: "0"
    };
    for (var i = 0; i < amount; i += 1) {
      data.id = (i + 1).toString();
      result.push(Object.assign({}, data));
    }
    return result;
  };
  
  function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }
  
  var headers = createHeaders([
    "id",
    "coin",
    "game_group",
    "game_name",
    "game_version",
    "machine",
    "vlt"
  ]); */}