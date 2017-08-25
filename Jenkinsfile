pipeline {
 agent any
 stages {
 stage('build') {
 steps {
 sh 'mvn clean package'
 sh 'echo "build ran"'
 sh 'echo "testing auto build"'
 }
 }
stage ('approve') {
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
}
post {
 success {
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:
true
 }
 }

}
