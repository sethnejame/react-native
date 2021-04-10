To run this project on either Windows or Mac, install Expo:

1) Make sure you're running npm version 6.14.8 and node version 12.19.0 or later
    - If you're unsure which versions of either you are using, from the CLI type "npm -v" or "node -v"

2) Install Expo globally from the CLI by typing "npm install --global expo-cli"
    - To create a new React Native app, type "expo init my-project" from the CLI
    - To run this React Native app, type "expo start" in the root directory of your already created project.
        Note that in order to be able to start up your native app, you need to have an emulator installed

3) For Mac/Windows, download and install Android Studio and configure the env vars necessary to use it:
    - After installation, click on the Configure button in the bottom right of the "Welcome" screen and select "Settings" on
        Windows or "Preferences" on Mac.  In the new window that pops up, select "System Settings" and then "Android SDK". In
        the new window that pops up, copy the "Android SDK Location" url at the top of the screen.
    - Set a new ANDROID_HOME system env var in Windows equal to the value you just copied (user env var, not system)
        Also, set a new JAVA_HOME var equal to your default install directory (usually C:\Program Files\Android\Android Studio\jre\jre)
    - On Mac, open a terminal and check which shell you're using.  If you're using bash, you'll need to edit the .bash_profile or .bashrc
        file.  If it says zsh shell, you'll need to edit either the .zprofile or .zshrc file.  
        1) Open the file w/ the command "mate .bash_profile" and add the following export statement with the url you just copied from 
        Android Studio: export ANDROID_SDK=/Users/user-home/Library/Android/sdk
        2) Next, add the Android build tools on the line that says "PATH=~/.npm-global/bin:$PATH".  At the end of $PATH,
        add :/Users/user-home/Library/Android/skd/platform-tools (PATH=~/.npm-global/bin:$PATH:/Users/user-home/Library/Android/skd/platform-tools)
        3) If Android Studio is still open, restart it to register the new environment vars.

4) Open up Android Studio and create a "No Activity" project. Accept the defaults from the wizard and click "Finish"
    - Access the AVD manager by clicking on Help > Find Action > (Type AVD Manager)
    - A new window will pop up. Click on the Create Virtual Device Button.  Select a Pixel device to get started and hit Next.
    - If you see a screen called "System Image", look for the item labeled "Q".  If there's an option to download it, download it.
        The "Q" stands for quick-boot and will "warm reboot" when you restart your app, which is faster than a cold reboot.
    - After downloading Q, click next and make sure the start orientation is set to portrait.
    - In Windows, if you get an error in the following window called "VT-x is disabled in BIOS" then you need to enable
        virtualization.
    - Click finish and you'll have your first virtual device.

5) Start your virtual device.
6) Run your app from the CLI in the root dir of your project by typing "expo start"


