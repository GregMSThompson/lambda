Lambda Test
===========

This project contains a lambda function that is used to query the NASA api for earth images.
An example endpoint can be access via the link [https://itzwj9h4pe.execute-api.us-east-1.amazonaws.com/default/lambda_test](https://itzwj9h4pe.execute-api.us-east-1.amazonaws.com/default/lambda_test).

The endpoint will return json in the following format:  
{  
&nbsp;&nbsp;"earth_engine_url":"**image_url**"  
}

Installation Instructions
-------------------------

1. Log into your aws [console](https://aws.amazon.com/console/).
2. Open the lambda service, by either selecting the link under the **Compute** header or typing the word **lambda** into the search bar.
3. On the lambda page click on the **Create function** button in the top right hand corner.
4. On the function setup page.
5. Give the function a name _i.e_ lambda_test.
6. Runtime should be nodejs 8.10.
7. Select create a new role and give the role an appropriate name like **lambda_test**.
8. In order to create the role, select a policy to use as the template. In the example we use _Simple microservice permissions_ which gives our new function access to the cloudwatch logs. _N.B_ dynamoDB read / write access is also added, although not needed in our case.
9. Finish the creation by selecting the **Create function** button.
10. On the function page add an api gateway trigger from the **Add triggers** menu on the left of the page.

Note on roles
-------------

When creating a function for production use it is advised to pre-create the role for the function in **IAM** first, so that the permissions can be taylored to fit the functions requirements.
