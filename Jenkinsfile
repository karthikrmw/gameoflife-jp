pipeline {
 agent any
 stages {
 stage('build') {
 steps {
 sh 'mvn clean package'
 sh 'echo "build ran"'
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
