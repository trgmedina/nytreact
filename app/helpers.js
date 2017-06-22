var axios = require("axios");

module.exports = {

	getArticles: function(topic, start, end) {

    var key = "24371e2b71ab4fb6b8c732e3fc7c4e25";

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': key,
        'q': topic,
        'begin_date': start + "0101",
        'end_date': end + "0101"
      });

    return axios.get(url);  
  };
};