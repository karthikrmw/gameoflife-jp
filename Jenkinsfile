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
timeout(time: 7, unit: 'DAYS') {
     input message: 'Do you want to deploy to DEV?'
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
