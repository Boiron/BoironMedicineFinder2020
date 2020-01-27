angular.module('ngSpecialOffer', [])

    .factory('$specialOffer', ['$q', '$localStorage', function($q, $localStorage) {

        'use strict';

        return {

            init : function (config) {
                if ($localStorage.specialOffers === undefined) {
                    $localStorage.specialOffers = {};
                }
                if ($localStorage.specialOffers[config.id] === undefined) {
                    $localStorage.specialOffers[config.id] = {};
                    $localStorage.specialOffers[config.id].enabled = true;
                    $localStorage.specialOffers[config.id].countOpens = 1;
                }
                var onAgree = function () {
                    $localStorage.specialOffers[config.id].enabled = false;
                    config.onAgree();
                };
                var onDecline = function () {
                    $localStorage.specialOffers[config.id].enabled = false;
                    config.onDecline();
                };
                var onRemindMeLater = function () {
                    $localStorage.specialOffers[config.id].countOpens = 1;
                    config.onRemindMeLater();
                };
                
                    if ($localStorage.specialOffers[config.id].countOpens >= config.showOnCount && $localStorage.specialOffers[config.id].enabled) {
                        var clickHandler = function (buttonIndex) {
                            switch (buttonIndex) {
                                case 1:
                                    onAgree();
                                    break;
                                case 2:
                                    onDecline();
                                    break;
                                case 3:
                                    onRemindMeLater();
                                    break;
                            }
                        };
                        var buttonLabels = [config.agreeLabel, config.declineLabel, config.remindLabel];
                        navigator.notification.confirm(config.text, clickHandler, config.title, buttonLabels);
                    } else if ($localStorage.specialOffers[config.id].enabled) {
                        $localStorage.specialOffers[config.id].countOpens++;
                    }
               
            },

            appStoreUrl : function (iosAppId) {
                var reviewURL = '';
                if (window.device && parseInt(window.device.version) >= 7) {
                    reviewURL = 'itms-apps://itunes.apple.com/en/app/id' + iosAppId;
                } else {
                    reviewURL = 'itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=' + iosAppId + '&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software';
                }
                return reviewURL;
            },

            googlePlayUrl : function (androidAppId) {
                return 'market://details?id=' + androidAppId;
            }

        };

    }]);
