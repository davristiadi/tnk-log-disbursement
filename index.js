function getDisbursementValue() {
    return axios
        .get(`http://192.168.30.130:3000/log/total-disbursement`)
        .then(function(response) {
            return parseInt(response.data.data.f0_);
        })
}

(function() {
    var currentValue;

    getDisbursementValue().then(function(response) {
        currentValue = response;
    });
    
    setInterval(function() {
        odometer.innerHTML = currentValue;
        currentValue = currentValue + Math.floor((Math.random() * 1000000) + 1);
    }, 3000);
})();