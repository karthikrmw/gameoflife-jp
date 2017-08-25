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
 }
post {
 success {
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:
true
 }
 }

}
