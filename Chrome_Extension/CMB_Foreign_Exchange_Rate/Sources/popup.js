var rateGenerator = {
  urlCMB_: "http://fx.cmbchina.com/hq/",
  
  requestRates: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.urlCMB_, true);
    req.onload = this.parseRates_.bind(this);
    req.send(null);
  },

  parseRates_: function (e) {
    var node = document.createElement('HTML');
	node.innerHTML = e.target.responseText;
	var table = node.getElementsByClassName('data')[0];
	for (var i = table.rows.length - 1; i >= 0; i--) {
	  table.rows[i].deleteCell(9);
	  table.rows[i].deleteCell(8);
	  table.rows[i].deleteCell(3);
	}
	document.body.appendChild(table);
  },
};

document.addEventListener('DOMContentLoaded', function () {
  rateGenerator.requestRates();
});
