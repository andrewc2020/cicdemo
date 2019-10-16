# cicdemo

This is a worked example from the circleci blog post by Collins Wekesa

https://circleci.com/blog/state-management-for-flutter-apps-with-mobx/

Had several failed workflows until the small naming glitch was put right.

problem: the deployment of the image fails with deployments.extensions "ci-cd" not found

There may be two reasons.
1. the deployment may not exist
2. the deployment may not have the expected name

 kubectrl create -f deployment.yaml 
 will create a deployment named deployment.apps/[container] rather than deployment/[container] as found in the post. 
 
 So .apps was inserted in the line in this line in the deployment.sh as follows.

 kubectl set image deployment.apps/${DEPLOYMENT_NAME} ${CONTAINER_NAME}=gcr.io/${PROJECT_ID}/${REG_ID}:$CIRCLE_SHA1 

 This obtained a successful circleci deployment

 Note also a test has to be added to the project as it fails if none is found.


