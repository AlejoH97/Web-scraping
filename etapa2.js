var jobList = document.getElementsByClassName("row job-search-result");
var  result = [];
for (i = 0; i < jobList.length; i++) {
  result.push({
    title: jobList[i].querySelector("h3").innerHTML, 
    url: jobList[i].querySelector("a").href, 
    location: jobList[i].querySelector("p").innerHTML
  });
}
var jobs = {jobs: result}
jobs