Assignment:
Creating a k6 project, writing test script for an API and configuring virtual users in ramp-up and down fashion. Along with this creating a new custom trend.

Pre-requisite:
1. Install k6
-->  sudo apt-get install k6

Description:
--> Firstly created a file with .js extension.
--> Import the neccessary libraries from k6
	as import { name } from ‘k6’
--> Prepare the test in init context
      i.e Define the trends and Virtual users in init context.
--> Make requests in Virtual user code or default function
	i.e export default function()
	{
 	  “   “
	}	
--> Run the test by “ k6 run “filename”.js
--> Now can see the built in and custom metrics in output.
