function generateTable(jobs){
    var body = document.getElementsByTagName('body')[0];
    var tableContainer = document.getElementById('content');
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
    var table = document.createElement('table');
    table.classList.add("table");
    table.style.width = '100%';

    var tableHead = document.createElement('thead');
    var tableBody = document.createElement('tbody');

    var th = document.createElement("th");
    th.innerHTML = "#";
    tableHead.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Job Title";
    tableHead.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Location";
    tableHead.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "URL";
    tableHead.appendChild(th);

    tableHead.classList.add("thead-light");
    table.appendChild(tableHead);

    var jobs = jobs.jobs;

    for (var i = 0; i < jobs.length; i++) {
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(i+1));
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(jobs[i].title));
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(jobs[i].location));
        tr.appendChild(td);

        var td = document.createElement('td');
        var link = document.createElement("a");
        link.setAttribute("href", jobs[i].url);
        var linkImage = document.createElement("img");
        linkImage.setAttribute("src", "images/link.png");
        linkImage.setAttribute("width", 20);
        linkImage.setAttribute("height", 20);
        link.appendChild(linkImage);
        td.appendChild(link);
        tr.appendChild(td);

        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    tableContainer.appendChild(table);
}


var jobs = {jobs: [{location: "Scottsdale, AZ", title: "Accounts Payable Specialist", url: "https://www.iceenterprise.com/careers/job/?job_id=2284917"},
    {location: "Scottsdale, AZ", title: "Chief Technology Officer", url: "https://www.iceenterprise.com/careers/job/?job_id=2308797"},
    {location: "Scottsdale, AZ", title: "Solution Architect", url: "https://www.iceenterprise.com/careers/job/?job_id=2329616"},
    {location: "Las Vegas, NV", title: "Inside Sales Representative (Base + Bonus &amp; Commission) Remote", url: "https://www.iceenterprise.com/careers/job/?job_id=2346453"}
    ]};
generateTable(jobs);