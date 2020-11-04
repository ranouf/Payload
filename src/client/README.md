# How to make the app run in https in localhost with the certificate trusted by chrome?
- open chrome://flags/#allow-insecure-localhost
- enable 'Allow invalid certificates for resources loaded from localhost.' and reboot chrome

- run npm run start-ssl
- open https://localhost:4200 
- click on "/!\ Not Secured", then "certicate"
- in "Details" tab, click on "Copy to file"
- follow the instructions and generate the certificate
- run inetcpl.cpl
- in "Content" tab, click Certificates
- in "Trusted Root Certication Authorities" tab, click "Import" button
- follow the instructions and import the certificate
- re-run ng serve --ssl
- reboot chrome
