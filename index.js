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

var generateData = function(amount) {
  var result = [];
  var data = {
    Client_name: "Andy Sekoto",
    Company: "DHET",
    Allocated_Staff_Member: "Jane Doe",
    Silence_Duration: "40",
    Client_Status: "Overdue"
    
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
      width: 80,
      align: "center",
      padding: 30
    });
  }
  return result;
}

var headers = createHeaders([
  "Client_name",
  "Company",
  "Allocated_Staff_Member",
  "Silence_Duration",
  "Client_Status"
  
]);

doc.table(15, 130, generateData(4), headers, { autoSize: true });
