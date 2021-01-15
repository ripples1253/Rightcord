#!/bin/bash
# Original script by https://github.com/GermanBread
# Lightcord unified Linux installer by Germanbread

# Some variables
ALLOW_NIXOS='false'

GLOBAL_INSTALL_DIR='/opt'
LOCAL_INSTALL_DIR="$HOME/.lightcord"

# URL for downloads
ICON='https://raw.githubusercontent.com/Lightcord/Lightcord/master/discord.png'
LC_APPIMAGE='https://lightcord.org/api/gh/releases/Lightcord/Lightcord/dev/lightcord-linux-x86_64.AppImage'
LC='https://lightcord.org/api/v1/gh/releases/Lightcord/Lightcord/dev/lightcord-linux-x64.zip'
# Fallback URL
ALT_LC_APPIMAGE='https://github.com/Lightcord/Lightcord/releases/latest/download/Lightcord-linux-x86_64.AppImage'
ALT_LC='https://github.com/Lightcord/Lightcord/releases/latest/download/lightcord-linux-x64.zip'

# Some helper funtions
function Info {
    tput setaf 8
    tput bold
    printf "==> "
    tput setaf 15
    printf "$1\n"
    tput sgr0
}
function SubInfo {
    tput setaf 8
    printf "> "
    printf "$1\n"
    tput sgr0
}
function Warning {
    tput setaf 3
    tput bold
    printf "==> "
    tput setaf 11
    printf "$1\n"
    tput sgr0
}
function Error {
    tput setaf 1
    tput bold
    printf "==> "
    tput setaf 9
    printf "$1\n"
    tput sgr0
}

if [[ $TERM == dumb ]]; then
    exit
fi

if [[ "$(whoami)" == "root" ]]; then
    Error "Don't run this script as root"
    exit
fi

cat << "logo_end"
  _    _      _   _                 _
 | |  (_)__ _| |_| |_ __ ___ _ _ __| |
 | |__| / _` | ' \  _/ _/ _ \ '_/ _` |
 |____|_\__, |_||_\__\__\___/_| \__,_|
        |___/
  Unified Linux Installer and Updater

logo_end

# First, we need to figure out what kind of install the user wants (AppImage or System-wide?)
printf "Please select\n"
printf "1: Install Lightcord for all users\n"
printf "2: Install Lightcord only for you (Appimage install)\n"
printf "\n"

#Repeat only if the user hasn't entered an integer...
while ! [[ $method =~ ^[0-9]+$ ]]; 
do
    read method;
    # If the entered value was not an integer, prompt the user again
    if ! [[ $method =~ ^[0-9]+$ ]]; then
        sleep 1
        printf "$(tput setaf 9)Please try again$(tput sgr0)\n"
        printf "1: Install Lightcord for all users\n"
        printf "2: Install Lightcord only for you (Appimage install)\n"
        printf "\n"
    fi
done

if [[ $method == 1 ]]; then
    Warning "Warning:\n\tBlindly running software as root is a massive security issue.\n\tIf you don't fully trust the software you're running DON'T RUN IT AS ROOT.\n\tIf you know exactly what you are doing, continue.\n\tOtherwise restart this script and choose the second option."
    if [ -d "/nix" ] && [ $ALLOW_NIXOS == 'false' ]; then
        Error "Error:\n\tUsing the global install option on NixOS is not supported due to the way this distribution handles software not present in the repositories.\n\tUse the AppImage install method instead.\n\tIf you still plan on installing Lightcord this way, change the \"OVERRIDE_NIXOS\" variable in this script to any value other than \"true\".\n\tYou can also modify the installation path variables if you want LC at a specific location."
        exit;
    fi  # We want to prevent NixOS users from installing LC this way because:
        # A) NixOS is very "special" i.e. it blocks LC from running
        # B) /opt gets cleared upon boot
    Info "Please enter your password to proceed"
    sudo -K
    if [[ "$(sudo whoami)" != "root" ]]; then
        Error "Authentication failed"
        exit
    fi
    Info "Authentication complete"
fi

case $method in
    1)
    #Standard installer
    tput setaf 208
    tput sgr0
    printf "Please select\n"
    printf "1: Install Lightcord\n"
    printf "2: Uninstall Lightcord\n"
    printf "3: Update Lightcord\n"
    printf "\n"

    #Repeat only if the user hasn't entered an integer...
    while ! [[ $selection =~ ^[0-9]+$ ]]; 
    do
        read selection;
        # If the entered value was not an integer, prompt the user again
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
        1) # Install LC
        Info "Installing Lightcord"
        SubInfo "Preparing"
        rm -rf Lightcord.*;
        rm -rf Lightcord;
        rm -rf lightcord-linux-x64.*;
        SubInfo "Downloading Lightcord"
        wget -O lightcord-linux-x64.zip $LC;
        if [ $? > '0' ]; then
            SubInfo "Trying alternate URL"
            wget -O lightcord-linux-x64.zip $ALT_LC;
        fi
        unzip lightcord-linux-x64.zip -d Lightcord; 
        cd Lightcord; 
        chmod +x ./lightcord; 
        cd ..; 
        sudo mv Lightcord/ $GLOBAL_INSTALL_DIR; 
        SubInfo "Downloading Lightcord icon"
        wget -O lightcord.png $ICON; 
        sudo mkdir -p /usr/share/pixmaps;
        sudo mv lightcord.png /usr/share/pixmaps; 
        SubInfo "Creating Desktop entry"
        echo -e "[Desktop Entry]\nName=Lightcord\nComment[fr_FR]=Un client Discord simple et personalisable\nComment=A simple - customizable - Discord Client\nExec=$GLOBAL_INSTALL_DIR/Lightcord/lightcord\nIcon=lightcord\nTerminal=false\nType=Application\nCategories=Network;InstantMessaging;P2P;" > Lightcord.desktop
        sudo mv Lightcord.desktop /usr/share/applications/Lightcord.desktop
        sudo chmod +x /usr/share/applications/Lightcord.desktop;
        SubInfo "Cleaning up"
        rm -rf Lightcord.*;
        rm -rf Lightcord;
        rm -rf lightcord-linux-x64.*;
        rm 0
        ;;

        2) # Uninstall LC
        Info "Uninstalling Lightcord"
        SubInfo "Deleting Lightcord folder"
        sudo rm -r $GLOBAL_INSTALL_DIR/Lightcord;
        SubInfo "Deleting Lightcord icon"
        sudo rm /usr/share/pixmaps/lightcord.png;
        SubInfo "Deleting Desktop entry"
        sudo rm /usr/share/applications/Lightcord.desktop;
        sudo rm -f /home/*/.local/share/applications/Lightcord.desktop;
        ;;

        3) # Update LC
        Info 'Updating Lightcord'
        SubInfo "Preparing"
        rm -rf Lightcord.*;
        rm -rf Lightcord;
        rm -rf lightcord-linux-x64.*;
        SubInfo "Deleting Lightcord"
        sudo rm -r $GLOBAL_INSTALL_DIR/Lightcord;
        SubInfo "Downloading Lightcord"
        wget -O lightcord-linux-x64.zip $LC;
        if [ $? > '0' ]; then
            SubInfo "Trying alternate URL"
            wget -O lightcord-linux-x64.zip $ALT_LC;
        fi
        unzip lightcord-linux-x64.zip -d Lightcord; 
        cd Lightcord; 
        chmod +x ./lightcord; 
        cd ..; 
        sudo mv Lightcord/ $GLOBAL_INSTALL_DIR; 
        SubInfo "Cleaning up"
        rm -rf Lightcord.*;
        rm -rf Lightcord;
        rm -rf lightcord-linux-x64.*;
        rm 0
        ;;

        *) # Do nothing
        Error 'Aborting install'
        ;;
    esac
    ;;

    2)
    # Appimage installer
    if [[ $TERM == dumb ]]; then
        exit;
    fi

    tput setaf 208
    tput sgr0


    printf "Please select\n";
    printf "1: Install Lightcord\n";
    printf "2: Uninstall Lightcord\n";
    printf "3: Update Lightcord\n"
    printf "\n";

    while ! [[ $selection =~ ^[0-9]+$ ]];
    do
        read selection;
        # If the entered value was not an integer, prompt the user again
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
        1) # Install LC
        Info 'Installing Lightcord'
        SubInfo "Downloading Lightcord"
        wget -O lightcord.AppImage $LC_APPIMAGE;
        if [ $? > '0' ]; then
            SubInfo "Trying alternate URL"
            wget -O lightcord.AppImage $ALT_LC_APPIMAGE;
        fi
        SubInfo "Downloading Lightcord icon"
        wget -O lightcord.png $ICON;
        mkdir -p $LOCAL_INSTALL_DIR;
        mv lightcord.AppImage $LOCAL_INSTALL_DIR;
        chmod +x $LOCAL_INSTALL_DIR/lightcord.AppImage ;
        mkdir -p ~/.local/share/icons/hicolor/512x512/apps
        mv lightcord.png ~/.local/share/icons/hicolor/512x512/apps;
        SubInfo "Creating local desktop entry"
        echo -e "[Desktop Entry]\nName=Lightcord\nComment[fr_FR]=Un client Discord simple et personalisable\nComment=A simple - customizable - Discord Client\nExec=$LOCAL_INSTALL_DIR/lightcord.AppImage\nIcon=lightcord\nTerminal=false\nType=Application\nCategories=Network;InstantMessaging;P2P;" >> ~/.local/share/applications/lightcord.desktop;
        SubInfo "Cleaning up"
        rm 0
        ;;

        2) # Uninstall LC
        Info 'Uninstalling Lightcord'
        SubInfo "Deleting Lightcord folder"
        rm -r $LOCAL_INSTALL_DIR;
        SubInfo "Deleting Lightcord icon"
        rm ~/.local/share/icons/hicolor/512x512/apps/lightcord.png;
        SubInfo "Deleting desktop entry"
        rm ~/.local/share/applications/lightcord.desktop;
        ;;

        3) # Update LC
        Info 'Updating Lightcord'
        SubInfo "Deleting Lightcord"
        rm $LOCAL_INSTALL_DIR/lightcord.AppImage;
        SubInfo "Downloading Lightcord"
        wget -O lightcord.AppImage $LC_APPIMAGE;
        if [ $? > '0' ]; then
            SubInfo "Trying alternate URL"
            wget -O lightcord.AppImage $ALT_LC_APPIMAGE;
        fi
        mkdir -p $LOCAL_INSTALL_DIR;
        mv lightcord.AppImage $LOCAL_INSTALL_DIR;
        chmod +x $LOCAL_INSTALL_DIR/lightcord.AppImage;
        SubInfo "Cleaning up"
        rm 0
        ;;
        
        *)
        Error 'Aborting install'
        ;;
    esac
    ;;

    *)
    Error 'Aborting install'
    ;;
esac

printf "Do you want to keep the install script? [y/N] "; # Ask if the script should delete itself
read a;

case $a in
    y)
    Info "Kept install script"
    exit;
    ;;
    Y)
    Info "Kept install script"
    exit;
    ;;
esac

# Remove the script
rm LULI.sh;
Info "Removed install script"
exit;
