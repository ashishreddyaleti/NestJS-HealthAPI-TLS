pipeline{
    agent any
    environment {
        dockerImagename = "reddyashishaleti/nestjs-tls"
        appimage = ""
    }
    stages{
        stage('Build Image'){
            steps{
                script {
                    dockerImage = docker.build dockerImagename
                }
                
            }
        }
        stage('PUSH IMAGE'){
            environment {
                dockerCredentilals = 'dockerCred'
            }
            steps{
                script {
                    def appimage = docker.build dockerImagename + "$BUILD_NUMBER"
                    docker.withRegistry('https://registry.hub.docker.com', 'Dockerhub') {
                        appimage.push()
                        appimage.push('latest')
                        
                    }
                }

            }
        }
        stage('Remove Docker Image'){
            steps {
                sh 'docker rmi reddyashishaleti/nestjs-tls"$BUILD_NUMBER"
                    

            }

        }
       
         }


    }
    
