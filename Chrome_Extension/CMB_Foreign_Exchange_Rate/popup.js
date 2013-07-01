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
	var rates = node.getElementsByClassName('data');
	document.body.appendChild(rates[0]);
  },
};

document.addEventListener('DOMContentLoaded', function () {
  rateGenerator.requestRates();
});
