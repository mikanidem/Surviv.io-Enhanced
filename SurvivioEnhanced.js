// ==UserScript==
// @name         Survivio | Enhanced |
// @version      0.0.9
// @icon         https://surviv.io/favicon.ico
// @description  Surviv.io Enhanced
// @author       Filip K Zhõng
// @namespace    SurvivEnhanced

// Extra Info
// Made by: Filip K. Zhõng
// Version: 0.0.9
// For: Surviv.io

// Support Server: https://discordapp.com/invite/AHZYHxV

// - Note:
    // 3rd party extensions (or code changes) is not official or supported by the developers of the game,
    // they take no responsibility for 3rd party and doesn't recommend it neither,
    // all usage of it is on own risk and extensions THAT GIVES YOU A ADVANTAGE is not allowed!
// - Disclaim:
    // This script doesn't contain any hackusations, or code that gives you a unfair advantage
    // The adblur in this script still supports the game, as the ads still appear (even if they are blured out)
    // This script is used through tampermonkey or resource override, if the game patches it, deal with it, it's not a vanilla!

// <========== MATCH ==========> \\

// @match        http://surviv.io/*
// @match        https://surviv.io/*
// @match        http://surviv.io/?region=na&zone=sfo
// @match        http://surviv.io/?region=na&zone=mia
// @match        http://surviv.io/?region=na&zone=nyc
// @match        http://surviv.io/?region=na&zone=chi
// @match        http://surviv.io/?region=sa&zone=sao
// @match        http://surviv.io/?region=eu&zone=fra
// @match        http://surviv.io/?region=eu&zone=waw
// @match        http://surviv.io/?region=as&zone=sgp
// @match        http://surviv.io/?region=as&zone=nrt
// @match        http://surviv.io/?region=as&zone=hkg
// @match        http://surviv.io/?region=kr&zone=sel
// @match        https://surviv.io/?region=na&zone=sfo
// @match        https://surviv.io/?region=na&zone=mia
// @match        https://surviv.io/?region=na&zone=nyc
// @match        https://surviv.io/?region=na&zone=chi
// @match        https://surviv.io/?region=sa&zone=sao
// @match        https://surviv.io/?region=eu&zone=fra
// @match        https://surviv.io/?region=eu&zone=waw
// @match        https://surviv.io/?region=as&zone=sgp
// @match        https://surviv.io/?region=as&zone=nrt
// @match        https://surviv.io/?region=as&zone=hkg
// @match        https://surviv.io/?region=kr&zone=sel
// @match        http://surviv2.io*
// @match        https://surviv2.io*
// @match        http://2dbattleroyale.com*
// @match        https://2dbattleroyale.com*
// @match        http://2dbattleroyale.org*
// @match        https://2dbattleroyale.org*
// @match        http://piearesquared.info*
// @match        https://piearesquared.info*
// @match        http://thecircleisclosing.com*
// @match        https://thecircleisclosing.com*
// @match        http://archimedesofsyracuse.info*
// @match        https://archimedesofsyracuse.info*
// @match        http://secantsecant.com*
// @match        https://secantsecant.com*
// @match        http://parmainitiative.com*
// @match        https://parmainitiative.com*
// @match        http://nevelskoygroup.com*
// @match        https://nevelskoygroup.com*
// @match        http://kugahi.com*
// @match        https://kugahi.com*
// @match        http://chandlertallowmd.com*
// @match        https://chandlertallowmd.com*
// @match        http://ot38.club*
// @match        https://ot38.club*
// @match        http://kugaheavyindustry.com*
// @match        https://kugaheavyindustry.com*
// @match        http://rarepotato.com*
// @match        https://rarepotato.com*
// @match        http://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        https://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        http://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*
// @match        https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*


// @grant        none

// ==/UserScript==

// <---------- Notes ----------> \\
// <--->||mapIds||<--->
// 0 - Normal
// 1 - Desert [desertMode]
// 2 - Woods [woodsMode]
// 3 - 50v50 [factionMode]
// 4 - Potato [potatoMode]
// 5 - Savannah [sniperMode]
// 6 - Halloween [N/A]
// 7 - Cobalt[perkMode]
// <--->||getGameModeStyles||<--->
// 1 - solo
// 2 - duo
// 4 - squad

// <========== GUN HUD ==========> \\
(function() {
    'use strict';
    var elems = document.getElementsByClassName('ui-weapon-name')
    console.log(elems);
    for (var ii = 0; ii < elems.length; ii++) {
        elems[ii].addEventListener('DOMSubtreeModified', function() {
            var weaponName = this.textContent;
            var border = 'solid';
            switch (weaponName) {
                // <---------- Default ----------> \\
                default:
                    border = '#ffffff';
                    border = 'solid';
                    break;
                // <---------- Melees ----------> \\
                    //Default HEX Classes
                    // Knifes: #959595 || #76787A
                    // Knuckles:
                    // Katanas:
                    // Axes: #8B5123
// <------------------------------------------------------------> \\
                case "Fists":
                    border += '#ffffff';
                    break;
                    // <-----Karmabit----->
                case "Karambit":
                    border +='#76787A';
                    break;
                case "Karambit Rugged":
                    border +='#16163B';
                    break;
                case "Karmabit Prismatic":
                    border +='#34D682';
                    break;
                case "Karmabit Drowned":
                    border +='#0CBCCC';
                    break;
                    // <-----Bayonet----->
                case "Bayonet":
                    border +='#76787A';
                    break;
                case "Bayonet Rugged":
                    border +='#76787A';
                    break;
                case "Bayonet Woodland":
                    border +='#5AA415';
                    break;
                    // <-----Huntsman----->
                case "Huntsman":
                    border +='#76787A';
                    break;
                case "Huntsman Rugged":
                    border +='#A0441E';
                    break;
                case "Huntsman Burnished":
                    border +='#DACF76';
                    break;
                    // <-----Bowie----->
                case "Bowie":
                    border +='#76787A';
                    break;
                case "Bowie Vintage":
                    border +='#B6B6B6';
                    break;
                case "Bowie Frontier":
                    border +='#BA4B2E';
                    break;
                    // <-----Axe----->
                case "Wood Axe":
                    border +='#95500E';
                    break;
                case "Blood Axe":
                    border +='#568A09';
                    break;
                case "Fire Axe":
                    border +='#B40000';
                    break;
                    // <-----Katana----->
                case "Katana":
                    border +='#858585';
                    break;
                case "Katana Rusted":
                    border +='#875F37';
                    break;
                case "Katana Orchid":
                    border +='#C189CB';
                    break;
                    // <-----Naginata----->
                case 'Naginata':
                    border += '#3C3C3C';
                    break;
                    // <-----Machetes----->
                case "Machete": //Machete Taiga
                    border +='#685F40';
                    break;
                case "Kukri": //Tallow's Kukri
                    border +='#685F40';
                    break;
                    // <-----Hammers----->
                case "Stone Hammer":
                    border +='#585A5C';
                    break;
                case "Sledgehammer":
                    border +='#585A5C';
                    break;
                    // <-----Hook----->
                case "Hook":
                    border +='#888A8B';
                    break;
                    // <-----Pan----->
                case "Pan":
                    border +='#484848';
                    break;
                    // <-----Knuckles----->
                case "Knuckles":
                    border +='#63452D';
                    break;
                case "Knuckles Rusted":
                    border +='#63452D';
                    break;
                case "Knuckles Heroic":
                    border +='#90700D';
                    break;
                    // <-----Saw----->
                case "Bonesaw": //Bonesaw Rusted
                    border += '#461904';
                    break;
                    // <-----Cobalt----->
// <---NOTES--->
// Scout: 11326819 || #acd563 ||
// Sniper: 9293531 || #8dcedb ||
// Medic: 14449116 || #dc79dc ||
// Demo: 13068903 || #c76a67 ||
// Assault: 14339929 || #dacf59 ||
// Tank: 15382883 || #eab963 ||
                case "Spade": //Trench Spade
                    border +='#dacf59';
                    break;
                case "Crowbar": //Scouting Crowbar
                    border +='#ACD563';
                    break;
                case "Kukri": //Marksman's Recurve
                    border +='#8dcedb';
                    break;
                case "Bonesaw": //The Separator
                    border +='#dc79dc';
                    break;
                case "Katana": //Hakai no Katana
                    border +='#c76a67';
                    break;
                case "War Hammer": //Panzerhammer
                    border +='#eab963';
                    break;
                    // <===GUNS===>
                    // <---------- YELLOW: 9mm ----------> \\
                case 'CZ-3A1':
                case 'G18C':
                case 'M9':
                case 'M93R':
                case 'MAC-10':
                case 'MP5':
                case 'P30L':
                case 'Dual P30L':
                case 'UMP9':
                case 'Vector':
                case 'VSS':
                    border += '#FFAE00';
                    break;
                    // <---------- RED: 12 Gauge ----------> \\
                case 'M1100':
                case 'M870':
                case 'MP220':
                case 'Saiga-12':
                case 'SPAS-12':
                case 'Super 90':
                case 'USAS-12':
                    border += '#FF0000';
                    break;
                    // <---------- BLUE: 7.62 mm ----------> \\
                case 'AK-47':
                case 'AN-94':
                case 'BAR M1918':
                case 'BLR 81':
                case 'DP-28':
                case 'Groza':
                case 'Groza-S':
                case 'M1 Garand':
                case 'M39 EMR':
                case 'Mosin-Nagant':
                case 'OT-38':
                case 'OTs-38':
                case 'PKP Pecheneg':
                case 'SCAR-H':
                case 'SV-98':
                case 'SVD-63':
                    border += '#0066FF';
                    break;
                    // <---------- GREEN: 5.56mm ----------> \\
                case 'FAMAS':
                case 'L86A2':
                case 'M249':
                case 'M416':
                case 'M4A1-S':
                case 'Mk 12 SPR':
                case 'QBB-97':
                case 'Scout Elite':
                    border += '#039E00';
                    break;
                    // <---------- Purple: .45 ACP ----------> \\
                case 'M1911':
                case 'M1A1':
                case 'Mk45G':
                case 'Model 94':
                case 'Peacemaker':
                case 'Vector 45':
                    border += '#7900FF';
                    break;
                    // <---------- FLARE ----------> \\
                case 'Flare Gun':
                border += '#D44600';
                    break;
                    // <---------- .50 AE ----------> \\
                case 'DEagle 50':
                    border += '#292929';
                    break;
                    // <---------- .308 Subsonic ----------> \\

                case 'AWM-S':
                case 'Mk 20 SSR':
                    border += '#465000';
                    break;
                    // <---------- Potato ----------> \\
                case 'Potato Cannon':
                    border += '#935924';
                    break;
                    // <---------- CURSED: 9 mm ----------> \\
                case 'M9 Cursed':
                    border += '#323232';
                    break;
                    // <---------- Trowables ----------> \\
                case 'Frag':
                    border += '#837516';
                    break;
                case 'MIRV':
                    border += '#940000';
                    break;
                case 'Potato':
                    border += '#958359';
                    break;
                case 'Smoke':
                border += '#DDDDDD';
                    break;
                case 'Snowball':
                    border += '#74D4F8';
                    break;
                case 'Strobe':
                    border += '#FFF205';
                    break;
                case 'Iron Bomb':
                    border += '#FFF205';
                    break;
            }
            // <---------- GUN END ----------> \\
            console.log(border);
            this.parentNode.style.border = border;
        }, false);
    }
})();
// <========== ARMOR HUD ==========> \\
(function() {
    'use strict';
    var elems = document.getElementsByClassName('ui-armor-level');
    console.log(elems);
    for (var ii = 0; ii < elems.length; ii++) {
        elems[ii].addEventListener('DOMSubtreeModified', function() {
            var armorlv = this.textContent;
            var border = 'solid';
            switch (armorlv) {
                default: border = '#000000';
                    border = 'solid';
                    break;
                case 'Lvl. 0':
                    border += '#ffffff';
                    break;
                case 'Lvl. 1':
                    border += '#ffffff';
                    break;
                case 'Lvl. 2':
                    border += '#808080';
                    break;
                case 'Lvl. 3':
                    border += '#0C0C0C';
                    break;
                case 'Lvl. 4':
                    border += '#FFF00F';
                    break;
            }
            console.log(border);

            this.parentNode.style.border = border;
        }, false);
    }
})();
// <========== ARMOR END ==========> \\
// <========== HUD END ==========> \\
// <========== Streamer Mode ==========> \\

(function() {
        'use strict';
    setInterval(function() {
// <---------- Party Fix ---------->
        if(document.querySelector(`#btn-start-team`)) document.querySelector(`#btn-start-team`).style.display = "block";
// <---------- Surviv-Related Ads AdBlock ---------->
        let blurElements_ad = document.querySelectorAll
    // <---Ads Div ID--->
        // <---Game Page--->
        (`#ad-block-left, #surviv-io_300x600, #surviv-io_300x250, #surviv-io_728x90, #ad-block-top, #surviv-io_300x250_2, #surviv-io_300x250_mobile_2`);
        //#surviv-io_728x90_Leaderboard, #surviv-io_300x250_leaderboard, #surviv-io_728x90_playerprofile, #surviv-io_300x250_playerprofile
        //<---Ads Div ID END--->
        for(let i = 0; i < blurElements_ad.length; i++)
        blurElements_ad[i].style.filter = "blur(10px) opacity(75%)";
// <---------- Partys & Others ---------->
        document.querySelector(`#background, #modal-customize`).style.filter = "";
        let blurElements = document.querySelectorAll(`#team-url, #team-code,`); //.account-player-name, .account-avatar, .featured-streamer > a, #featured-youtuber a`)
        for(let i = 0; i < blurElements.length; i++)
        blurElements[i].style.filter = "blur(10px)";
// <---------- Shadow optimizations ---------->
        let removeShadowElements = document.querySelectorAll(`#news-block, #social-share-block, #start-menu, #team-menu, #ad-block-left`);
        for(let i = 0; i < removeShadowElements.length; i++)
        removeShadowElements[i].style.boxShadow = "";
    });
})();
// <========== Streamer Mode End ==========> \\
// <========== Solo Buttons ==========> \\
// <---------- Function DUO ---------->

(function () {
'use strict';
function DUO(){
document.getElementById("btn-create-team").click();
    setTimeout(function(){
document.getElementById("btn-team-queue-mode-1").click();
document.getElementById("btn-team-fill-none").click();
document.getElementById("btn-start-team").click();
}
,750);

}

// <---------- Function DUO ---------->
// <---------- DUO Button ---------->
    var SoloDuo = document.createElement("button");
  SoloDuo.innerHTML = "Play Solo 'Duo'";
  SoloDuo.setAttribute("id", "btn-start-solo btns-quick-start");
  SoloDuo.setAttribute("class", "btn-darken menu-option btn-team-option menu-column menu-block");
//height: 40px;
//width: 128px;

SoloDuo;{
  SoloDuo.style.align = "center";
  SoloDuo.style.background = "#50AFAB";
  SoloDuo.style.border = "#408E8B";
  SoloDuo.style.color = "#E5F1F0";
  SoloDuo.style.cursor = "pointer";
  SoloDuo.style.width = "50%";
  SoloDuo.style.radius = "15px";
  SoloDuo.style.shadow = "0 5px #408E8B";
        }
// <---------- DUO Button ---------->
// <---------- DUO Button Click ---------->

  window.myFunc = function () {
  DUO();
  };
  SoloDuo.addEventListener('click', window.myFunc);
  document.getElementById("btns-quick-start").parentNode.appendChild(SoloDuo);
    var reference = document.getElementById('btn-help');
reference.parentNode.insertBefore(SoloDuo, reference);
})();

// <---------- DUO Button Click ---------->

(function () {
'use strict';
function SQUAD(){
document.getElementById("btn-create-team").click();
    setTimeout(function(){
document.getElementById("btn-team-queue-mode-2").click();
document.getElementById("btn-team-fill-none").click();
document.getElementById("btn-start-team").click();
}
,750);

}

// <---------- Function SQUAD ---------->
// <---------- SQUAD Button ---------->
    var SoloSquad = document.createElement("button");
  SoloSquad.innerHTML = "Play Solo 'Squad'";
  SoloSquad.setAttribute("id", "btn-start-solo btns-quick-start");
  SoloSquad.setAttribute("class", "btn-darken menu-option btn-team-option menu-column menu-block");

//height: 40px;
//width: 128px;

SoloSquad;{
  SoloSquad.style.align = "center";
  SoloSquad.style.background = "#50AFAB";
  SoloSquad.style.border = "#408E8B";
  SoloSquad.style.color = "#E5F1F0";
  SoloSquad.style.cursor = "pointer";
  SoloSquad.style.width = "50%";
  SoloSquad.style.radius = "15px";
  SoloSquad.style.shadow = "0 5px #408E8B";
        }
// <---------- SQUAD Button ---------->
// <---------- SQUAD Button Click ---------->

  window.myFunc = function () {
  SQUAD();
  };
  SoloSquad.addEventListener('click', window.myFunc);
  document.getElementById("btns-quick-start").parentNode.appendChild(SoloSquad);
    var reference = document.getElementById('btn-help');
reference.parentNode.insertBefore(SoloSquad, reference);
})();

// <========== Buttons END==========> \\
// <-########## SCRIPT END ##########-> \\
