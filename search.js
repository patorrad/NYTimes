// Search results


var APIKey = "bkJRZXjNGZvmIAqMGxbDHWdxVOfpfYMs";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=elections&api-key=" + APIKey;
// + searchTerm + numRecord + yearStart + yearEnd +

    $.ajax({
      url: queryURL,
      method: "GET"
     
      
    }).then(function(response) {
      $("#searchTerm") 
      $("#numRecord")
      $("#yearStart")
      $("#yearEnd")
      console.log(response.response.docs);
    });