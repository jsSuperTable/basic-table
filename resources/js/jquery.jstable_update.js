jQuery.fn.jsTable = function(tableData) {
    // Table generation from json input
    return this.each(function() {
        var tbody = tableData.tbody;
        var thead = tableData.thead;
        var searchable = tableData.searchable;
		
        if (tbody.length == 0) {
            return 0;
        }
		var columns = tableData.thead;
        var keys = Object.keys(tbody[0]);
		
        var table = this;
        var trs = table.getElementsByTagName('tr');
		var lastRowIndex = trs.length;
		
		if (trs && trs.length>0) {
			columns = trs[0].getElementsByTagName('th');
			var row = table.insertRow(lastRowIndex++);
			for (var j = 0; j < keys.length; j++) {
				var cell = row.insertCell(j);
				var key = keys[j];
				if (searchable[j]) {
					cell.innerHTML = '<input type="text" placeholder="Type Here"/>';
				} else {
					cell.innerHTML = '';
				}
				
			}
		} else {
			var row = table.insertRow(0);
			for (var j = 0; j < thead.length; j++) {
				var cell = row.insertCell(j);
				var thData = thead[j];
				cell.innerHTML = thData;
			}
			var row = table.insertRow(1);
			for (var j = 0; j < thead.length; j++) {
				var cell = row.insertCell(j);
				if (searchable[j]) {
					cell.innerHTML = '<input type="text" placeholder="Type Here"/>';
				} else {
					cell.innerHTML = '';
				}
			}
		}
        
        
        if (columns.length == keys.length) {
			lastRowIndex = 2;
            for (var i = 0; i < tbody.length; i++) {
                var row = table.insertRow(lastRowIndex++);

                for (var j = 0; j < keys.length; j++) {
                    var cell = row.insertCell(j);
                    var key = keys[j];
                    cell.innerHTML = tbody[i][key];
                }
            }
        } else {
            alert('Unable to draw!');
        }
        var table = this;
        table.style = "text-align:center;";
        table.className = "table table-hover";
        table.width = "500px";
        table.border = 1;

        var trs = table.getElementsByTagName('tr');
        for (var i = 0; i < trs.length; i++) {
            var tds = trs[i].getElementsByTagName('td');
            for (var j = 0; j < tds.length; j++) {
                var td = tds[j];
                td.style = "text-align:left;";
            }
        }
        return 1;
    });
};

var tableData = {
    "thead": ["Name", "Father Name", "District", "SSN"],
    "searchable": [true, false, false, false],
    "addButton": false,
    "editButton": false,
    "deleteButton": false,
    "rowEdit": false,
    "tbody": [{
        "name": "Halim Mia",
        "fatherName": "Hasan Juber",
        "district": "Kishorgonj",
        "ssn": "88711231"
    }, {
        "name": "Kashem Molla",
        "fatherName": "Jamal Bari",
        "district": "Mymensingh",
        "ssn": "88711234"
    }]
};
$('#example').jsTable(tableData);