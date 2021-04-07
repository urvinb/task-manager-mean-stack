pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/urvinb/task-manager-mean-stack.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'cd api'
        sh 'npm install'
        sh 'npm start'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}