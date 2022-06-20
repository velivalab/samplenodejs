pipeline {

    environment {
        snConnection = ""
        appName = "samples"
        deployableName = "dev"
        dataFormat = "json" //Known issue: dataFormat is added to the fileName
        fileName = "configData/deployablesVar" //Known issue: the file extension to remove
        target = "deployable"
        namePath = "vars"
        exporterName = "returnDataForNodeName"
        exporterArgs = '{"nodeName": "v1.0.0"}'
        exporterFormat = "json"
        outputFileName = "exporterData_${BUILD_ID}.${exporterFormat}"
        changeSetId = ""
        snapshotName = ""
        publishStatus = ""
        exportStatus = ""
    }

    agent any
    tools {nodejs "nodejs"}

    stages {
        stage('build') {
             steps {
                echo sh(returnStdout: true, script: 'env')
                git url: 'https://gitlab.com/cyr-riv/samples.git', branch: 'main', credentialsId: 'f60b85ef-bba6-4325-8431-de9e8595164d'
                sh 'node -v'
                dir ('samples-app') {
                    sh 'npm --version'
                    sh 'npm install -g @angular/cli'
                    sh 'npm install'
                    sh 'ng --version'
                    sh 'npm run build'
                    zip zipFile: "samples-app-${BUILD_ID}.zip", dir:'dist/samples-app', archive:true
                    archiveArtifacts artifacts: '**/*.zip', onlyIfSuccessful: true
                }
            }
        }
        stage('test') {
            steps {
                dir ('samples-app') {
                    sh 'npm test'
                }
            }
        }
        stage('approve change') {
        steps {
                sh 'echo "Approche Change"'
            }
        }
/*        stage('deploy to DEV'){
            steps {
                echo "Get latest snapshot of appclication: $appName for environment: $deployableName"
                script {
                    def jsonString = snDevOpsConfigGetSnapshots(
                        applicationName: "${appName}", 
                        deployableName: "${deployableName}",
                        changeSetId: "${changeSetId}")
                    echo "Result: $jsonString"
                    def jsonObj = readJSON text: jsonString
                    assert jsonObj[0]['validation'] == 'passed' // check if validation passed
                    snapshotName = jsonObj[0].name
                }
                echo "Latest snapshot name: $snapshotName"
            }
            steps {
                echo "Export snapshot of appclication: $appName for environment: $deployableName to file: $outputFileName"
                sh "touch $outputFileName"
                script {
                    exportStatus = snDevOpsConfigExport(
                        applicationName: "${appName}", 
                        deployableName: "${deployableName}",
                        snapshotName: "${snapshotName}",
                        exporterName: "${exporterName}",
                        exporterArgs: "${exporterArgs}",
                        exporterFormat: "${exporterFormat}",
                        fileName: "${outputFileName}")
                }
                echo "Result: $exportStatus"
                sh "jq . $outputFileName"
            }
        } */
    }
}

