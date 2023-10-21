function gardenApi() {
  this.http = new XMLHttpRequest();
}

// GET method
gardenApi.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  var self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
