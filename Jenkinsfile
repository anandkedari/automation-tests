pipeline {
    agent any
    tools {
        nodejs 'Node'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run web'
            }
        }
    }
}