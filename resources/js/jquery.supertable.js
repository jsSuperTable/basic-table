jQuery.fn.jsTable = function(tableData) {
    // Usually iterate over the items and return for chainability:
    return this.each(function() {

        if (tableData.length == 0) {
            return 0;
        }
        var keys = Object.keys(tableData[0]);
        var table = this;
        var trs = table.getElementsByTagName('tr');

        var columns = trs[0].getElementsByTagName('th');
        var lastRowIndex = trs.length;
        var row = table.insertRow(lastRowIndex++);
        for (var j = 0; j < keys.length; j++) {
            var cell = row.insertCell(j);
            var key = keys[j];
            cell.innerHTML = '<input type="text" placeholder="Type Here"/>';
        }

        if (columns.length == keys.length) {
            for (var i = 0; i < tableData.length; i++) {
                var row = table.insertRow(lastRowIndex++);

                for (var j = 0; j < keys.length; j++) {
                    var cell = row.insertCell(j);
                    var key = keys[j];
                    cell.innerHTML = tableData[i][key];
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