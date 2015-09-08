![project logo](http://res.cloudinary.com/drsedusa/image/upload/v1441593295/raspi-ionic-logo_me1nju.png)

##Synopsis
A simple IOT project using the Ionic Framework to create a simple app that turns on an LED on a breadboard connected to Raspberry Pi.

##Motivation
I decided to create this project after I learnt about how to use Node,js to interact with the Raspberry Pi GPIO pins.  I also decided to build a simple mobile app using the Ionic Framework to interact with the Raspberry Pi via a simple API call.

##Installation
For anyone who has never played around with a Raspberry Pi here's a great <a href="https://www.raspberrypi.org/wp-content/uploads/2012/04/quick-start-guide-v2_1.pdf" target="_blank">quick start guide</a> from the official <a href="https://www.raspberrypi.org/" target="_blank">raspberrypi.org</a> website.
The project assumes that you have a Raspberry Pi at your disposal (any of the models) and that you are able to run it 'headless' (i.e. with no keyboard or display).  Here is a <a href="https://www.raspberrypi.org/forums/viewtopic.php?f=91&t=74176" target="_blank">tutorial on how to setup the Raspberry Pi 'headless'</a>.

####Installing Node.JS on your Raspberry Pi
You will need to have Node.js installed on your Raspberry Pi before proceeding with this project.  You can follow the steps in this <a href="http://weworkweplay.com/play/raspberry-pi-nodejs/" target="_blank">tutorial on how to setup Node.js on your Raspberry Pi</a> or simply type out the following commands after you ssh into your raspberry pi.
```
$ > wget http://node-arm.herokuapp.com/node_latest_armhf.deb
$ > sudo dpkg -i node_latest_armhf.deb
```

####Installing Git
```
$ > sudo apt-get install git
```
After installing Git on your Pi I recommend checking out the <a href="http://git-scm.com/book/en/v2" target="_blank">Pro Git book</a> (by Scott Chacon and Ben Straub) to learn how to use it.
In order to pull code from Github you will need to add your SSH key to your Github settings (after you create a Github account).  You can obtain your SSH key by running the following commands in the command-line on your raspberry pi.
```
$ > ssh-keygen -t -rsa  
$ > cat ~/.ssh/id_rsa.pub
```

####Download the Github source code to the Pi
Download the source code from the repository to your raspberry pi and install the modules in the package.json file.
```
$ > git clone https://github.com/sedusa/raspi-ionic-iot.git
$ > cd raspi-ionic-iot/raspi-iot/
$ > npm install 
```

####Installing ngrok
<a href="https://ngrok.com/" traget="_blank">ngrok</a> is a reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later inspection and replay.
![ngrok](http://res.cloudinary.com/drsedusa/image/upload/v1441640018/ngrok_tdkroh.png)

We will be using ngrok to create a secure tunnel from a public endpoint which the ionic app will use to interact (making an API call) with the locally running server on the Raspberry Pi.

To install ngrok on the raspberry pi first start by downloading the source, then unzip it.
```
$ > sudo wget https://dl.ngrok.com/ngrok_2.0.19_linux_arm.zip
$ > unzip ngrok_2.0.19_linux_arm.zip
```
That's the whole installation process for ngrok.

####Setting up the breadboard
![breadboard](http://res.cloudinary.com/drsedusa/image/upload/v1441678222/breadboard_hu1alv.png)

####Running the code on the Raspberry Pi
Begin by running the following command (make sure you are in the raspi-iot folder)
```
$ > node raspi-led.js
```
This should start the node server on port 8088.  Note: If you happen to run into the 'Error: EACCES, permission denied' then run the command with a **sudo**.

Now run ngrok
```
$ > ./ngrok http -subdomain=led 8088
```
A console screen similar to the one below will show up

![ngrok console screen](http://res.cloudinary.com/drsedusa/image/upload/v1441679765/ngrok-screen_pndgss.png)

####Running the Ionic App
Begin by downloading the <a href="https://itunes.apple.com/us/app/ionic-view/id849930087?mt=8" target="_blank">Ionic view app from the AppStore</a> or from the <a href="https://play.google.com/store/apps/details?id=com.ionic.viewapp&hl=en" target="_blank">Google Play Store</a>

Once the app is downloaded on your mobile device click on **Preview Shared App** option and enter the App ID **afb048d3**


**Click on the video below to shows how the app interacts with the Raspberry Pi**

<a href="http://www.youtube.com/watch?feature=player_embedded&v=9yw8BysEuNY
" target="_blank"><img src="http://img.youtube.com/vi/9yw8BysEuNY/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


