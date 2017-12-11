pipeline {
    agent none
    stages {
        stage('Build and Test') {
            agent {
                node{
                    label "abc"
                }
            }

            steps {
                sh 'mvn clean package'
                sh 'echo "build ran"'
                sh 'echo "testing auto build"'
                archiveArtifacts artifacts: 'gameoflife-web/target/gameoflife.war', fingerprint:true
                junit '**/target/surefire-reports/*.xml'

            }
        }

        stage ('Deploy to Integration') {
            agent {node{
                label "abc"}
            }

            steps {
                build job:'Deploy GOL' , parameters:[string(name: 'BRANCH_NAME', value: "${env.BRANCH_NAME}")]
            }
        }

        stage ('Approval to deploy to UAT ') {
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
                milestone(1)
            }
        }

        stage ('Approval to deploy to PROD') {

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
