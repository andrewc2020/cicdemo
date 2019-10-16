# cicdemo

This is a worked example from the circleci blog post by Collins Wekesa

CI/CD for Node.js projects: using CircleCI, Kubernetes, and Docker with deployment to the Google Cloud Platform

Had several failed workflows until the small naming glitch was put right. That small typo aside, it was an extremely helpful guide.

problem: the deployment of the image fails with deployments.extensions "ci-cd" not found

There may be two reasons.
1. the deployment may not exist
2. the deployment may not have the expected name

 To fix problem 1 use the command below to create the deployment from the yaml file.

 kubectrl create -f deployment.yaml 
 will create a deployment named deployment.apps/[container] rather than deployment/[container] as found in the post. 

 To fix problem 2 .apps was added to the deployment/container command string in deployment.sh.
 
 

 kubectl set image deployment.apps/${DEPLOYMENT_NAME} ${CONTAINER_NAME}=gcr.io/${PROJECT_ID}/${REG_ID}:$CIRCLE_SHA1 

 

 Note also a test has to be added to the project as it fails if none is found.

 As gcloud docker is deprecated, these lines were used in the shell instead

 gcloud auth configure-docker
docker push gcr.io/${PROJECT_ID}/${REG_ID}:$CIRCLE_SHA1


