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
        stage('web-tests') {
            steps {
                sh 'npm run web:chrome'
            }
        }
        stage('api-tests') {
            steps {
                sh 'npm run api'
            }
        }

    }
}