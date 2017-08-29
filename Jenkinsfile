 stage('build') {
node{
 
 sh 'mvn clean package'
 sh 'echo "build ran"'
 sh 'echo "testing auto build"'
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:true
 junit '**/target/surefire-reports/*.xml'

 }
}
milestone 1
stage ('approval to deploy to dev') {
node{


timeout(time: 7, unit: 'DAYS')
} 
     input message: 'Do you want to deploy to DEV? ' , submitter: 'sheetal'

 }

stage ('Deploy to DEV') {
node{



build job:'../Tomcat deploy to DEV' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}
