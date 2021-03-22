[![Discord](https://img.shields.io/discord/705908350218666117?logo=discord&style=flat-square&color=%237289DA)](https://discord.gg/7eFff2A)
![JS](https://img.shields.io/badge/--yellow?logo=javascript&style=flat-square)
![TS](https://img.shields.io/badge/--blue?logo=typescript&style=flat-square)
[![HitCount](http://hits.dwyl.com/Lightcord/Lightcord.svg)](http://hits.dwyl.com/Lightcord/Lightcord)
<br />
[![PayPal](https://img.shields.io/badge/donate-PayPal-blue?logo=PayPal&style=flat-square)](https://paypal.me/jenwina)
[![BTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochon/cryptodonate/master/badges/bitcoin.json&style=flat-square)](https://papycochon.github.io/cryptodonate/btc.html?address=14hL2fPS2ASoe8Hcif87EqCS5AGHrepGKp&note=https://github.com/Lightcord/Lightcord)
[![CDN](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochon/cryptodonate/master/badges/cdn.json&style=flat-square)](https://papycochon.github.io/cryptodonate/cdn.html?address=CbdW3pR4HBWJ6wyc1JeNXP4L2fh8QiL85v&note=https://github.com/Lightcord/Lightcord)
[![BCH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochon/cryptodonate/master/badges/bitcoincash.json&style=flat-square)](https://papycochon.github.io/cryptodonate/bch.html?address=qzqwhfyvkl324fue86r55q656nftfmxkhsn6qugenq&note=https://github.com/Lightcord/Lightcord)
[![XMR](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochon/cryptodonate/master/badges/monero.json&style=flat-square)](https://papycochon.github.io/cryptodonate/xmr.html?address=42pGf1KHHpqaifJd3TtWSdcTmhGVwFp24cGxDoqaYLQJ6rH4pM7KqtUdTpoyxHScDTSJpPA2Bnv19b1bs2uPXgSMH2KYkwj&note=https://github.com/Lightcord/Lightcord)
[![ETH](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochon/cryptodonate/master/badges/ethereum.json&style=flat-square)](https://papycochon.github.io/cryptodonate/eth.html?address=0xEFE45F22Ee844bf2Ba0E4d853FA0bC8c028fAfFe&note=https://github.com/Lightcord/Lightcord)
[![LTC](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/papycochob/cryptodonate/master/badges/litecoin.json&style=flat-square)](https://papycochon.github.io/cryptodonate/ltc.html?address=LNTmfMjHJgTHaB7rj8ZuWWuU1XkP2YeGCA&note=https://github.com/Lightcord/Lightcord)
---
# Lightcord
A simple and customizable Discord client

## What's This?
[Lightcord](https://lightcord.org) is a simple and customizable client for Discord.
It includes [BandagedBD](https://github.com/rauenzi/BetterDiscordApp), [Glasstron](https://github.com/AryToNeX/Glasstron) and a [discord.js-like api](https://github.com/Lightcord/Lightcord/tree/master/DiscordJS).

## Information
Lightcord doesn't just *patch* Discord with its content. If it did, Discord updates could easily break it. That's why Lightcord is a standalone Discord client. Just grab the latest release and launch!

## Installing 
You can download a release from the [releases tab](https://github.com/Lightcord/Lightcord/releases).

## Windows

You can install Lightcord with [scoop](https://github.com/lukesampson/scoop).

```powershell
scoop bucket add extras
scoop install lightcord
```

## AUR (Unofficial)
You need to install the `base-devel` and `git` packages first

**For compilation** https://aur.archlinux.org/packages/lightcord-git/

`git clone https://aur.archlinux.org/lightcord-git.git && cd lightcord-git && makepkg -si`

**For precompiled binaries** https://aur.archlinux.org/packages/lightcord-bin/

`git clone https://aur.archlinux.org/lightcord-bin.git && cd lightcord-bin && makepkg -si`

**For AppImage**

`git clone https://aur.archlinux.org/lightcord-appimage.git && cd lightcord-appimage && makepkg -si`

An AUR helper such as `yay` can also be used

## Other Linux Distributions
You can also install it with our *express install script*, which will automatically do the following:
- Download the latest Lightcord stable release from the official dev server.
- Extract the file and rename it to a more conventional ¨Lightcord¨ folder.
- Install the Lightcord files in /opt/.
- Add execution rights to the Lightcord executable to allow launching.
- Download an appropriate .desktop file and install it in /usr/share/applications.
- Add execution rights to the .desktop file to allow launching.
- Download the Lightcord icon in the .svg format and install it in /usr/share/pixmaps.

## Running From Source
Prerequisites: [Node.js](https://nodejs.org/en/) and NPM
To run from source, follow these instructions:
```sh
git clone https://github.com/Lightcord/Lightcord
cd Lightcord
npm run devInstall
npm test
```
*You will have to do that every time you pull/clone*
<br/>
Lightcord will then launch. If you see the Lightcord icon, you're good to go! 
![icon](https://github.com/Lightcord/Lightcord/blob/master/imagery/68747470733a2f2f692e696d6775722e636f6d2f72486e73504e4f2e706e67.png?raw=true)
<br />
Any time you want to launch, just run:
```sh
npm run run
```

*You can install on GNU/Linux with our install script or the AUR*

## Express Install Script

- This script requires the `unzip` package to be installed. Use your package manager of choice to install it.
- To install, paste `sh -c "$(curl -s https://raw.githubusercontent.com/Lightcord/Lightcord/master/LULI.sh)"` in terminal and press enter. The installer will guide you through the rest.

## Features
* **BetterDiscord built in** - Use almost any BetterDiscord plugin or theme!
* **Easy custom rich presence** - Our method of doing this ensures you won't get banned!
* **Made for Privacy** - Lightcord automatically blocks Discord's trackers and blurs your email, keeping your data safe!
* **Free Emotes** - Send any emote to other Lightcord users!
* **Token Login** - (user/bot) [Make **server** calls with bots]
* **AdBlock** - Automatically block bots and ads in your DMs!
* **Always On Top** - Lightcord will always be shown in front of any other windows!
* **Experiments** - Access Discord's hidden experiments with a single click!
* **Tabs** - Have multiple tabs open to do more!
* **HypeSquad Housing** - Easily change your HypeSquad house, no test required!
* **Badges** - Important people like the developers have special badges to make sure you know who is who!

### Planned Features
* **Username History** - Keep track of your past usernames!
* **New Plugin Directory** - Easily install or edit themes and plugins!

## BetterDiscord
A modified version of Bandaged Better Discord comes preinstalled, making theming and adding plugins easy.

## Plugins & Themes
Plugins and themes are not in the standard BetterDiscord folder. They have been moved because BetterDiscord only supports the stable, PTB, and canary releases of Discord. Using the same directory could cause problems with settings.

They are located in `%AppData%/Lightcord_BD`. This is the main folder for BetterDiscord.
