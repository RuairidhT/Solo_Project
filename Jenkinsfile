pipeline{
        agent any
        stages{
		stage('---clearprev---'){
                        steps{
                                sh "sudo rm -rf /var/www/html/*"
                        }
                }
		stage('---pushhtml---'){
                        steps{
                                sh "sudo cp -r /var/lib/jenkins/workspace/solo_project /var/www/html"
                        }
                }
	}
}