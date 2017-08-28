pipeline {
 stages {
 stage('build') {
agent {node{
 label "abc"}
}
 
steps {
 sh 'mvn clean package'
 sh 'echo "build ran"'
 sh 'echo "testing auto build"'
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:true
 junit '**/target/surefire-reports/*.xml'

 }
}

stage ('approval to deploy to dev') {
agent {node{
 label "abc"}
}

steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to DEV? ' , submitter: 'sheetal'
}
 }
}
stage ('Deploy to DEV') {
agent {node{
 label "abc"}
}

steps {
agent {node{
 label "abc"}
}

build job:'../Tomcat deploy to DEV' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}

stage ('test') {
agent {node{
 label "abc"}
}

steps {
input message: 'Deploy to uat'
}
}

stage ('approval to deploy to uat ') {
agent {node{
 label "abc"}
}

steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to UAT?',submitter: 'sheetal'
}
 }
}
stage ('Deploy to UAT') {
agent {node{
 label "abc"}
}

steps {
build job:'../Tomcat deploy to UAT' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}
stage ('approval to deploy to prod') {
agent {node{
 label "abc"}
}

steps {
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to PROD',submitter: 'sheetal'
}
 }
}

stage ('Deploy to PROD') {
agent {node{
 label "abc"}
}

steps {
build job:'../Tomcat deploy to PROD' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]



 }
 
}
}
}
