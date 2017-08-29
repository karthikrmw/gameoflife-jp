 stage('build') {
node{
 
 sh 'mvn clean package'
 sh 'echo "build ran"'
 sh 'echo "testing auto build"'
 archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:true
 junit '**/target/surefire-reports/*.xml'

 }
}
stage ('approval to deploy to dev') {
input message: 'Do you want to deploy to DEV? ' , submitter: 'sheetal'
node{


timeout(time: 7, unit: 'DAYS')
 
sh 'echo "in approvalstep"'     
}

 }

stage ('Deploy to DEV') {
node{



build job:'../Tomcat deploy to DEV' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
}
}
