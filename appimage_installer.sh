#!/bin/bash
# Original script by https://github.com/GermanBread

appimage='https://lightcord.org/api/gh/releases/Lightcord/Lightcord/dev/lightcord-linux-x86_64.AppImage'
icon='https://raw.githubusercontent.com/Lightcord/Lightcord/master/discord.png'
if [[ $TERM == dumb ]]; then
    exit;
fi

if [[ $(whoami) = "root" ]] ; then
    printf "[$(tput setaf 9 && tput blink)PANIC$(tput sgr0)] $(tput setaf 9)Do not run this script as root!$(tput sgr0)\n";
    exit;
fi


tput setaf 208
cat << "EOF"
  _    _      _   _                 _
 | |  (_)__ _| |_| |_ __ ___ _ _ __| |
 | |__| / _` | ' \  _/ _/ _ \ '_/ _` |
 |____|_\__, |_||_\__\__\___/_| \__,_|
        |___/
    AppImage Installer and Updater
    
EOF
tput sgr0


printf "Please select\n";
printf "1: Install Lightcord\n";
printf "2: Uninstall Lightcord\n";
printf "3: Update Lightcord\n"
printf "\n";

while ! [[ $selection =~ ^[0-9]+$ ]]; 
do
    read selection;
    #if the entered value was not an integer, show this
    if ! [[ $selection =~ ^[0-9]+$ ]]; then
        sleep 1;
        printf "$(tput setaf 9)Please try again$(tput sgr0)\n";
        printf "1: Install Lightcord\n";
        printf "2: Uninstall Lightcord\n";
        printf "3: Update Lightcord\n"
        printf "\n";
    fi
done


case $selection in
    1)
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Installing Lightcord$(tput sgr0)\n";
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Downloading Lightcord$(tput sgr0)\n";
    wget -O lightcord.AppImage $appimage;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Downloading Icon$(tput sgr0)\n";
    wget -O lightcord.png $icon;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Moving Lightcord AppImage to ~/.lightcord$(tput sgr0)\n";
    mkdir -p ~/.lightcord;
    mv lightcord.AppImage ~/.lightcord;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Setting Executable Permissions$(tput sgr0)\n";
    chmod +x ~/.lightcord/lightcord.AppImage ;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Installing Icon$(tput sgr0)\n";
    mv lightcord.png ~/.local/share/icons/hicolor/512x512/apps;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Installing Desktop File$(tput sgr0)\n";
    echo -e "[Desktop Entry]\nName=Lightcord\nComment[fr_FR]=Un client Discord simple et personalisable\nComment=A simple - customizable - Discord Client\nExec=${HOME}/.lightcord/lightcord.AppImage\nIcon=lightcord\nTerminal=false\nType=Application\nCategories=Network;InstantMessaging;P2P;" >> ~/.local/share/applications/lightcord.desktop;
    ;;

    2)
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Deleting Lightcord AppImage$(tput sgr0)\n";
    rm -rf ~/.lightcord;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Deleting Icon$(tput sgr0)\n";
    rm ~/.local/share/icons/hicolor/512x512/apps/lightcord.png;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Deleting Desktop File$(tput sgr0)\n";
    rm ~/.local/share/applications/lightcord.desktop;
    printf "[$(tput setaf 10 && tput blink)FINISH$(tput sgr0)] Uninstall complete\n";
    ;;

    3)
    #Uninstall
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Updating Lightcord$(tput sgr0)\n";
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Deleting Lightcord AppImage$(tput sgr0)\n";
    rm -f ~/.lightcord/lightcord.AppImage;
    #Install
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Downloading Lightcord$(tput sgr0)\n";
    wget -O lightcord.AppImage $appimage;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Moving Lightcord AppImage to ~/.lightcord$(tput sgr0)\n";
    mkdir -p ~/.lightcord;
    mv lightcord.AppImage ~/.lightcord;
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 7)Setting Executable Permissions$(tput sgr0)\n";
    chmod +x ~/.lightcord/lightcord.AppImage ;
    printf "[$(tput setaf 10 && tput blink)FINISH$(tput sgr0)] Update complete\n";
    ;; 
    *)
    printf "[$(tput setaf 12 && tput blink)INFO$(tput sgr0)] $(tput setaf 12)Exiting script$(tput sgr0)\n";
    ;;
esac

