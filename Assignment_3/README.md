#Assignment:
Convert the collection to a k6 script and generate a html report.

##Description:

### To convert collection to a k6 script 
  1. Firstly export the collection from postman 

  2. Install the k6 converter
      + npm install -g postman-to-k6

  3. Now convert the collection into k6 script
      + postman-to-k6 path/to/postman_collection.json > k6_script.js

Replace path/to/postman_collection.json with the path to your exported Postman collection file and k6_script.js with the name you want to give to your k6 script.


  4. Edit the test script as needed.
  
  5. Now run the test script.

  6. To create an html report:
     
     > Firstly add the module to your code

		+ import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

	> And then outside the default function , wrap it with th ehandle summary( data) function which k6 calls at the end of the any test.

+ export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

Note: summary.html-> Name of the html report.

	+ Now when you will run the test script the html file will be created.

