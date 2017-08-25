pipeline {
 agent any
 stages {
 stage('build') {
 steps {
 sh 'mvn clean package'
 sh 'echo "build ran"'
 sh 'echo "testing auto build"'
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:
true

 }
}

stage ('approval to deploy to dev') {
steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to DEV?'
}
 }
}
stage ('Deploy to DEV') {
steps {
build job:'../Tomcat deploy to DEV' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}
stage ('approval to deploy to uat') {
steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to UAT?',submitter: 'sheetal'
}
 }
}
stage ('Deploy to UAT') {
steps {
build job:'../Tomcat deploy to UAT' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}
stage ('approval to deploy to prod') {
steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to PROD',submitter: 'sheetal'
}
 }
}
stage ('Deploy to PROD') {
steps {
build job:'../Tomcat deploy to PROD' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]



 }
 
}
}
