// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


var example = angular.module('app', ['ionic.native','ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova', 'ngSpecialOffer', 'ngStorage'])

.config(function($stateProvider, $ionicConfigProvider, $sceDelegateProvider){
  $ionicConfigProvider.tabs.position('bottom'); 
 
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  
})




.run(['$ionicPlatform', '$specialOffer', function($ionicPlatform, $specialOffer) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // $ionicPlatform.on('deviceready', function(){
    //   branchInit();
    // });

    // $ionicPlatform.on("resume", function() {
    //   branchInit();
    // });
    
    // function branchInit() {
    //   // Branch initialization
    //   Branch.initSession().then(function(data) {
    //     var link = data['$custom_data']
    //     $location.url(link);
    //   });
    // }

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    $specialOffer.init({
        id           : 'Boiron Medicine Finder',
        showOnCount  : 3,
        title        : 'Enjoying the App?',
        text         : 'If you have a moment to spare, please rate the Boiron Medicine Finder.',
        agreeLabel   : 'Rate App',
        remindLabel  : 'Remind Me Later',
        declineLabel : 'Not Interested',
        onAgree      : function () {
            // agree
            if(device.platform === "iOS") {
              window.open($specialOffer.appStoreUrl("711449645"));
            } else {
              window.open("market://details?id=com.boironusa.medfinder&hl=en_US");
            }
        },
        onDecline   : function () {
            // declined
        },
        onRemindMeLater : function () {
            // will be reminded in 5 more uses
        }
  });
});
}])

.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    $cordovaDeeplinks.route({
      '/page1/tab4/coldurticaria': {
        target: 'tabsController.coldUrticaria',
        parent: 'tabsController.allergy'
      },
      '/page1/tab4/page14': {
        target: 'tabsController.eyeIrritation',
        parent: 'tabsController.allergy'
      },
      '/page1/tab4/page9': {
        target: 'tabsController.hayFever',
        parent: 'tabsController.allergy'
      },
      '/page1/tab4/page22': {
        target: 'tabsController.hives',
        parent: 'tabsController.allergy'
      },
      '/page1/tab4/page13': {
        target: 'tabsController.itchyNose',
        parent: 'tabsController.allergy'
      },
      '/page1/tab4/page15': {
        target: 'tabsController.nasalCongestionFromAllergies',
        parent: 'tabsController.findNasalCongestionMedicines'
      },
      '/page1/tab4/page72': {
        target: 'tabsController.coldOrFlu',
        parent: 'tabsController.findBodyAchesMedicines'
      },
      '/page1/tab4/page52': {
        target: 'tabsController.fromMuscularOverexertion',
        parent: 'tabsController.findBodyAchesMedicines'
      },
      '/page1/tab4/page74': {
        target: 'tabsController.chills',
        parent: 'tabsController.findColdAndFluMedicines'
      },
      '/page1/tab4/page32': {
        target: 'tabsController.cold',
        parent: 'tabsController.findColdAndFluMedicines'
      },
      '/page1/tab4/page206': {
        target: 'tabsController.chestCongestion',
        parent: 'tabsController.findCoughAndThroatMedicines'
      },
      '/page1/tab4/page77': {
        target: 'tabsController.barkingCough',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page78': {
        target: 'tabsController.coughTriggeredByColdAir',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page79': {
        target: 'tabsController.coughWorseAtNight',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page80': {
        target: 'tabsController.coughWorseInBed',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page81': {
        target: 'tabsController.coughWorseWhenSpeaking',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page82': {
        target: 'tabsController.coughWorseWithMotion',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page83': {
        target: 'tabsController.coughWorsenedByCold',
        parent: 'tabsController.findDryCoughMedicines'
      },
      '/page1/tab4/page85': {
        target: 'tabsController.fitfulCoughHypersalivation',
        parent: 'tabsController.findFitfulCoughMedicines'
      },
      '/page1/tab4/page86': {
        target: 'tabsController.fitfulCoughWithNausea',
        parent: 'tabsController.findFitfulCoughMedicines'
      },
        '/page1/tab4/page88': {
          target: 'tabsController.hoarsenessFromVoiceExertion',
          parent: 'tabsController.findHoarsenessMedicines'
        },
        '/page1/tab4/page89': {
          target: 'tabsController.hoarsenessWhenStartingToSpeak',
          parent: 'tabsController.findHoarsenessMedicines'
        },
        '/page1/tab4/page90': {
          target: 'tabsController.hoarsenessWithBitonalVoice',
          parent: 'tabsController.findHoarsenessMedicines'
        },
        '/page1/tab4/page91': {
          target: 'tabsController.hoarsenessWithCroupyCough',
          parent: 'tabsController.findHoarsenessMedicines'
        },
        '/page1/tab4/page92': {
          target: 'tabsController.hoarsenessWorseWithHumidity',
          parent: 'tabsController.findHoarsenessMedicines'
        },
      '/page1/tab4/page207': {
        target: 'tabsController.lossOfVoice',
        parent: 'tabsController.findCoughAndThroatMedicines'
      },
      '/page1/tab4/page209': {
        target: 'tabsController.overindulgence',
        parent: 'tabsController.findSnoringMedicines'
      },
      '/page1/tab4/page210': {
        target: 'tabsController.snoringFromPostnasalDrip',
        parent: 'tabsController.findSnoringMedicines'
      },
      '/page1/tab4/page211': {
        target: 'tabsController.snoringOther',
        parent: 'tabsController.findSnoringMedicines'
      },
      '/page1/tab4/page126': {
        target: 'tabsController.soreThroatFeelingOfSplinterInThroat',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page127': {
        target: 'tabsController.soreThroatItchingPainImprovedByColdLiquids',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page128': {
        target: 'tabsController.soreThroatWithBadTasteInTheMouth',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page129': {
        target: 'tabsController.soreThroatWithCroupyCough',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page130': {
        target: 'tabsController.soreThroatWithExcessiveSalivation',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page131': {
        target: 'tabsController.soreThroatWithPainRadiatingToTheEars',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page132': {
        target: 'tabsController.soreThroatWithPainWhenSwallowing',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page133': {
        target: 'tabsController.soreThroatWorseAtNight',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page134': {
        target: 'tabsController.soreThroatOther',
        parent: 'tabsController.findSoreThroatMedicines'
      },
      '/page1/tab4/page517': {
        target: 'tabsController.wetCoughDifficultToExpectorate',
        parent: 'tabsController.findWetCoughMedicines'
      },
      '/page1/tab4/page518': {
        target: 'tabsController.wetCoughThickPhlegm',
        parent: 'tabsController.findWetCoughMedicines'
      },
      '/page1/tab4/page519': {
        target: 'tabsController.wetCoughWithBronchialIrritation',
        parent: 'tabsController.findWetCoughMedicines'
      },
      '/page1/tab4/page520': {
        target: 'tabsController.wetCoughWorseWhenInBed',
        parent: 'tabsController.findWetCoughMedicines'
      },
      '/page1/tab4/page521': {
        target: 'tabsController.wetCoughWorseWhenLyingDown',
        parent: 'tabsController.findWetCoughMedicines'
      },
      '/page1/tab4/page94': {
        target: 'tabsController.crustyNostrilsFromThickGreenishDischarge',
        parent: 'tabsController.findCrustyNostrilMedicines'
      },
      '/page1/tab4/page95': {
        target: 'tabsController.crustyNostrilsFromWateryDischarge',
        parent: 'tabsController.findCrustyNostrilMedicines'
      },
      '/page1/tab4/page96': {
        target: 'tabsController.earCongestionImprovedBySwallowing',
        parent: 'tabsController.findColdAndFluMedicines'
      },
        '/page1/tab4/page35': {
          target: 'tabsController.earachesColdWeather',
          parent: 'tabsController.findEaracheMedicines'
        },
        '/page1/tab4/page36': {
          target: 'tabsController.earachesTeething',
          parent: 'tabsController.findEaracheMedicines'
        },
        '/page1/tab4/page37': {
          target: 'tabsController.earachesModerateFever',
          parent: 'tabsController.findEaracheMedicines'
        },
      '/page1/tab4/page107': {
        target: 'tabsController.fluSymptoms',
        parent: 'tabsController.findColdAndFluMedicines'
      },
      '/page1/tab4/page108': {
        target: 'tabsController.lossOfSmellAndTaste',
        parent: 'tabsController.findColdAndFluMedicines'
      },
      '/page1/tab4/page109': {
        target: 'tabsController.moderateOrLowFever',
        parent: 'tabsController.findColdAndFluMedicines'
      },
      '/page1/tab4/page110': {
        target: 'tabsController.postnasalDrip',
        parent: 'tabsController.findColdAndFluMedicines'
      },
        '/page1/tab4/page16': {
          target: 'tabsController.runnyNoseWithDryness',
          parent: 'tabsController.findRunnyNoseMedicines'
        },
        '/page1/tab4/page17': {
          target: 'tabsController.runnyNoseWithBurning',
          parent: 'tabsController.findRunnyNoseMedicines'
        },
      '/page1/tab4/page23': {
        target: 'tabsController.sinusCongestion',
        parent: 'tabsController.findColdAndFluMedicines'
      },
        '/page1/tab4/page121': {
          target: 'sinusPainPainAtTheBaseOfTheNoseBetweenTheEyes',
          parent: 'tabsController.coldAndFluSinusPainMeds'
        },
        '/page1/tab4/page123': {
          target: 'tabsController.sinusPainPainInTheUpperJaw',
          parent: 'tabsController.coldAndFluSinusPainMeds'
        },
        '/page1/tab4/page124': {
          target: 'tabsController.sinusPainWithThickGreenishDischarge',
          parent: 'tabsController.coldAndFluSinusPainMeds'
        },
        '/page1/tab4/page125': {
          target: 'tabsController.sinusPainOther',
          parent: 'tabsController.coldAndFluSinusPainMeds'
        },
      '/page1/tab4/page25': {
        target: 'tabsController.sneezing',
        parent: 'tabsController.findColdAndFluMedicines'
      },
        '/page1/tab4/page136': {
          target: 'tabsController.stuffyNoseCloggedEars',
          parent: 'tabsController.findStuffyNoseMedicines'
        },
        '/page1/tab4/page137': {
          target: 'tabsController.stuffyNoseThickGreenishDischarge',
          parent: 'tabsController.findStuffyNoseMedicines'
        },
        '/page1/tab4/page138': {
          target: 'tabsController.stuffyNoseTriggeredByDampnessAndCold',
          parent: 'tabsController.findStuffyNoseMedicines'
        },
        '/page1/tab4/page139': {
          target: 'tabsController.stuffyNoseOther',
          parent: 'tabsController.findStuffyNoseMedicines'
        },
        '/page1/tab4/page235': {
          target: 'tabsController.acneOnTheForeheadAndTheBack',
          parent: 'tabsController.acne'
        },
        '/page1/tab4/page246': {
          target: 'tabsController.acnePustularAcne',
          parent: 'tabsController.acne'
        },
        '/page1/tab4/page247': {
          target: 'tabsController.acneOther',
          parent: 'tabsController.acne'
        },
        '/page1/tab4/page248': {
          target: 'tabsController.athleteSFootWithItching',
          parent: 'tabsController.athleteSFoot'
        },
        '/page1/tab4/page249': {
          target: 'tabsController.athleteSFootWithOozing',
          parent: 'tabsController.athleteSFoot'
        },
        '/page1/tab4/page233': {
          target: 'tabsController.blackEye',
          parent: 'tabsController.findSkinMedicinesFirstAid'
        },
        '/page1/tab4/page250': {
          target: 'tabsController.blisters',
          parent: 'tabsController.findSkinMedicinesFirstAid'
        },
        '/page1/tab4/page263': {
          target: 'tabsController.boilsOnsetOfBoils',
          parent: 'tabsController.boils'
        },
        '/page1/tab4/page264': {
          target: 'tabsController.boilsRecurrentBoils',
          parent: 'tabsController.boils'
        },
        '/page1/tab4/page265': {
          target: 'tabsController.boilsOther',
          parent: 'tabsController.boils'
        },
        '/page1/tab4/page251': {
          target: 'tabsController.burnsBlisters',
          parent: 'tabsController.burns'
        },
        '/page1/tab4/page252': {
          target: 'tabsController.burnsPinkSkinItching',
          parent: 'tabsController.burns'
        },
        '/page1/tab4/page253': {
          target: 'tabsController.burnsRedSkinBurning',
          parent: 'tabsController.burns'
        },
        '/page1/tab4/page254': {
          target: 'tabsController.chappedLipsOnLowerLipsWithDryLips',
          parent: 'tabsController.chappedLips'
        },
        '/page1/tab4/page255': {
          target: 'tabsController.chappedLipsPerleche',
          parent: 'tabsController.chappedLips'
        },
        '/page1/tab4/page256': {
          target: 'tabsController.coldSoresCrustStage',
          parent: 'tabsController.coldSores'
        },
        '/page1/tab4/page257': {
          target: 'tabsController.coldSoresOnset',
          parent: 'tabsController.coldSores'
        },
        '/page1/tab4/page258': {
          target: 'tabsController.coldSoresSmallBlisters',
          parent: 'tabsController.coldSores'
        },
        '/page1/tab4/page259': {
          target: 'tabsController.fissuresCrackedSkin',
          parent: 'tabsController.fissures'
        },
        '/page1/tab4/page260': {
          target: 'tabsController.fissuresFingers',
          parent: 'tabsController.fissures'
        },
        '/page1/tab4/page261': {
          target: 'tabsController.fissuresThinPainfulBleedingEasily',
          parent: 'tabsController.fissures'
        },
        '/page1/tab4/page262': {
          target: 'tabsController.fissuresWithOozingAndDryCrustySkin',
          parent: 'tabsController.fissures'
        },
        '/page1/tab4/page266': {
          target: 'tabsController.frostnipBurning',
          parent: 'tabsController.frostnip'
        },
        '/page1/tab4/page267': {
          target: 'tabsController.frostnipItchingAtNight',
          parent: 'tabsController.frostnip'
        },
        '/page1/tab4/page268': {
          target: 'tabsController.frostnipSwollen',
          parent: 'tabsController.frostnip'
        },
        '/page1/tab4/page271': {
          target: 'tabsController.insectBitesChiggers',
          parent: 'tabsController.findInsectBiteMedicines'
        },
        '/page1/tab4/page272': {
          target: 'tabsController.insectBitesMisquitoes',
          parent: 'tabsController.findInsectBiteMedicines'
        },
        '/page1/tab4/page273': {
          target: 'tabsController.insectBitesSpiders',
          parent: 'tabsController.findInsectBiteMedicines'
        },
        '/page1/tab4/page274': {
          target: 'tabsController.insectBitesWaspsBees',
          parent: 'tabsController.findInsectBiteMedicines'
        },
        '/page1/tab4/page275': {
          target: 'tabsController.itchingAtNight',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page276': {
          target: 'tabsController.itchingFromDrySkin',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page296': {
          target: 'tabsController.itchingFromSkinAllergy',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page297': {
          target: 'tabsController.itchingInElderlyPersons',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page299': {
          target: 'tabsController.itchingOfSurgicalWounds',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page300': {
          target: 'tabsController.itchingOfWarts',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page301': {
          target: 'tabsController.itchingTriggeredByDampnessAndCold',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page302': {
          target: 'tabsController.itchingTriggeredByTheContactOfWool',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page303': {
          target: 'tabsController.itchingWhenUndressing',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page304': {
          target: 'tabsController.itchingWithBurningPain',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page305': {
          target: 'tabsController.itchingWorseWithHeatOrWater',
          parent: 'tabsController.findItchingMedicines'
        },
        '/page1/tab4/page310': {
          target: 'tabsController.pricklyHeatMiliariaItchingIsWorsenedByContactWithWater',
          parent: 'tabsController.findPricklyHeatMiliariaMedicines'
        },
        '/page1/tab4/page311': {
          target: 'tabsController.pricklyHeatMiliariaItchingWithHypersensitivityToTouch',
          parent: 'tabsController.findPricklyHeatMiliariaMedicines'
        },
        '/page1/tab4/page312': {
          target: 'tabsController.scarsFromBurns',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page307': {
          target: 'tabsController.scarsFromChickepox',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page314': {
          target: 'tabsController.scarsFromSurgery',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page315': {
          target: 'tabsController.scarsPainfulScars',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page335': {
          target: 'tabsController.scarsThickScars',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page317': {
          target: 'tabsController.scarsWithItching',
          parent: 'tabsController.findScarMedicines'
        },
        '/page1/tab4/page318': {
          target: 'tabsController.shinglesWithBluishWhiteVesicles',
          parent: 'tabsController.findShinglesOrZosterPainMeds'
        },
        '/page1/tab4/page319': {
          target: 'tabsController.shinglesWithBurningAndLargeVesicles',
          parent: 'tabsController.findShinglesOrZosterPainMeds'
        },
        '/page1/tab4/page320': {
          target: 'tabsController.shinglesWithItchingAndSmallClearVesicles',
          parent: 'tabsController.findShinglesOrZosterPainMeds'
        },
        '/page1/tab4/page321': {
          target: 'tabsController.shinglesWorsenedByTouchOrJolts',
          parent: 'tabsController.findShinglesOrZosterPainMeds'
        },
        '/page1/tab4/page322': {
          target: 'tabsController.smallWoundsFromASharpObject',
          parent: 'tabsController.findSmallWoundMedicines'
        },
        '/page1/tab4/page323': {
          target: 'tabsController.smallWoundsPunctureWounds',
          parent: 'tabsController.findSmallWoundMedicines'
        },
        '/page1/tab4/page325': {
          target: 'tabsController.sunburnPinkSkinItching',
          parent: 'tabsController.findSunburnMedicines'
        },
        '/page1/tab4/page326': {
          target: 'tabsController.sunburnRedSkinItching',
          parent: 'tabsController.findSunburnMedicines'
        },
        '/page1/tab4/page324': {
          target: 'tabsController.sunAllergyBeforeExposure',
          parent: 'tabsController.findSunAllergyMedicines'
        },
        '/page1/tab4/page19': {
          target: 'tabsController.sunAllergyAfterExposure',
          parent: 'tabsController.findSunAllergyMedicines'
        },
        '/page1/tab4/page327': {
          target: 'tabsController.sunInducedSkinRash',
          parent: 'tabsController.findSkinMedicinesFirstAid'
        },
        '/page1/tab4/page328': {
          target: 'tabsController.turfBurn',
          parent: 'tabsController.findSkinMedicinesFirstAid'
        },
        '/page1/tab4/page316': {
          target: 'tabsController.wartsAroundTheNails',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page330': {
          target: 'tabsController.wartsFlatTranslucent',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page331': {
          target: 'tabsController.wartsHardCallousedWarts',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page332': {
          target: 'tabsController.wartsOnTheFace',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page333': {
          target: 'tabsController.wartsSingleLargePlantarWart',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page334': {
          target: 'tabsController.wartsUnderTheNails',
          parent: 'tabsController.findWartMedicines'
        },
        '/page1/tab4/page28': {
          target: 'tabsController.weals',
          parent: 'tabsController.findSkinMedicinesFirstAid'
        },
    }).subscribe(function(match) {
      $timeout(function() {
        $state.go(match.$route.parent, match.$args);
        $timeout(function() {
          $state.go(match.$route.target, match.$args);
        }, 800);
      }, 100);
    }, function(nomatch) {
      console.warn('No match', nomatch);
    });
  });
}])

/*
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController.fluSymptoms', {
    url: '/page107',
    templateUrl: 'templates/fluSymptoms.html',
    controller: 'fluSymptomsCtrl'
  })
  .state('tabController.fluSymptoms', {
    url: '#/page1/tab3/page107',
    views: {
      'tab3': {
        templateUrl: 'templates/fluSymptoms.html',
        controller: 'fluSymptomsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('page1/home');

})

*/


/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});



example.controller("ExampleController", function($scope, $cordovaSocialSharing) {
// Message, title, image, and url
    $scope.shareAnywhere = function() {
      navigator.screenshot.save(function(error,res){
        if(error){
        console.error(error);
        }else{
        console.log('ok',res.filePath);
        
        let url = document.URL;
        let link = url.split('#/')
        imageLink = res.filePath;
        $cordovaSocialSharing.share("", "", 'file://'+imageLink, "https://medfinder.app.link/b6I6Zz06S0/?$custom_data="+link[1])
        
        }
        },'jpg',50,'myScreenShot');
        
        }
});

angular.module('starter', ['ionic'])
.run(function(previewData, localStorage, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (typeof analytics !== 'undefined') {
      analytics.startTrackerWithId('UA-49563724-4');
      analytics.trackView('$state.current.name');
      console.log("starting analytics");
  }
  else
  {
    console.log("Google analytics could not be loaded")
  }


    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

/* deep linking extra stuff
.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    $cordovaDeeplinks.route({
      '/product/:productId': {
        target: 'product',
        parent: 'products'
      }
    }).subscribe(function(match) {
      $timeout(function() {
        $state.go(match.$route.parent, match.$args);
        $timeout(function() {
          $state.go(match.$route.target, match.$args);
        }, 800);
      }, 100);
    }, function(nomatch) {
      console.warn('No match', nomatch);
    });
  });
}])

/* 
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('product', {
    url: '/product/:productId',
    templateUrl: 'templates/product.html',
    controller: 'ProductCtrl'
  })
  .state('products', {
    url: '/product',
    templateUrl: 'templates/products.html',
    controller: 'ProductsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/product');

});
*/

/*cordova.plugins.diagnostic.isLocationAuthorized(function(enabled){
  console.log("Location is " + (enabled ? "enabled" : "disabled"));
  if(!enabled){
    cordova.plugins.diagnostic.requestLocationAuthorization(function(status){
        console.log("Authorization status is now: "+status);
    }, function(error){
        console.error(error);
    });
  }
}, function(error){
  console.error("The following error occurred: "+error);
});
*/


var showApp = angular.module('showApp', [])

.controller('mainController', function($scope) {

  $scope.goCats = false;
  
});


