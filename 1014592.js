/*marketgid.comV3.0*/ ! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function(e, t, i) {
    e.exports = i(1)
}, function(e, t, n) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    window.MarketGidBaseBlockC1014592 = function(e, t, n, o, a, s) {
        var c = this;
        if (this.context = t, this.root = this.context.document.getElementById(e), this.containerId = o, this.uniqId = a, this.fallbackMode = n, this.page = 1, this.iteration = 1, this.adlink = "", this.template = "", this.id = 1014592, this.originalId = 1014592, this.tickerShow = 0, this.pvid = 0, this.linkerLinks = [], this.muid = "", this.botRadarMetrics = -1, this.cookieStorage = {}, this.sharedCookieStorage = {}, this.afterPreRenderNewsHooks = [], this.beforeLoadNewsHooks = [], this.afterLoadNewsHooks = [], this.afterInjectScriptHooks = [], this.afterPrepareCappingDataHooks = [], this.afterSendCappingHooks = [], this.prerenderStatus = !0, this.afterInitHooks = [], this.blocksAddress = "", this.tickerPrefix = "", this.countLoadBlocks = 0, this.preTemplate = "", this.postTemplate = "", this.banners = {}, this.crashStep = 0, this.useTimeTracking = !1, this.autoSizeTitle = "16", this.loadedDefault = !1, this.teaserHashes = {}, this.teaserData = {}, this.json = [], this.servicerData = {}, this.versionWidget = s, this.sspPerformance = "10" >= Math.ceil(100 * Math.random()), this.doubleClickType = "", this.doubleClickCheckId = 0, this.doubleClickEnabled = !1, this.widgetConstructorData = JSON.parse('{"type":"in-article","subType":"in-article-impact","sidebarWidthCorrect":0,"font":"roboto","textPosition":"right","width":0,"kind":"wages","formatChanged":true,"imageScaleOnHover":"","imageShadow":"","isToaster":1,"isDragDown":1,"isInterstitial":0,"frequencyCappingShow":3,"frequencyCappingTime":2,"interstitialAfter":3,"popupFrequency":15,"button":1,"widgetTypeDescription":1,"autoplacement":"off","mctable":{"styles":{"borderWidth":0,"borderColor":"","backgroundColor":""}},"mctitle":{"styles":{"fontSize":16,"fontWeight":"bold","fontStyle":"normal","textDecoration":"none","textAlign":"left","color":"#474747","text-transform":"uppercase"}},"mcprice":{"show":"false","styles":{"fontSize":14,"fontWeight":"bold","color":"#2a3a7b","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"opensans"}},"widgetTitleSettings":{"styles":{"fontSize":14,"font":"roboto","color":"#2b397b","text-transform":"uppercase"}},"mcimage":{"size":200,"size-width":492,"size-height":277,"styles":{"borderWidth":0,"borderColor":"#ffffff","borderStyle":"solid","padding":0}},"mcdesc":{"styles":{"display":"block","fontSize":11,"fontWeight":"normal","color":"#666666","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"opensans"}},"mcdomain":{"styles":{"display":"block","fontSize":10,"fontWeight":"normal","color":"#868585","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"roboto"}},"mgline":{"styles":{"borderStyle":"solid","borderWidth":1,"borderColor":"#e9e9e9","height":"170","width":"150","borderRadius":"0","margin":"2"}},"mgbox":{"styles":{"maxWidth":1220}},"media":{"position":"bottom","minWidth":250,"minHeight":150,"opacity":80,"duration":1,"videoOverlay":1},"theme":"#2b397b","colsMobile":1,"rows":"1","cols":"1","sidebarScrollPercent":"0","showWidgetButton":"true","showEffectButton":"false","colorButton":"","blur":"auto","customGradient":"","teaserCardShadow":"0","teaserFixedWidth":"0","is_int_exchange":"0","imageFormat":46,"imgType":"super"}'), this.globalSettings = JSON.parse('{"capping_observer_threshold":"0.5","current_language":"en","timer_toaster_inactivity":"8","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10"}'), this.preRenderSizes = {}, c.clickHandlers = [], c.observerWidgetHooks = [], c.observerTeasersHooks = [], this.sspDoubleClickHash = [], this.fakeMode = 0, this.requestParams = {}, c.webProtocol = "https:", this.clickHandlerList = {
                onSiteNotificationClick: {
                    handler: "onSiteNotificationHandler",
                    priority: 8
                },
                onSmartDoubleClick: {
                    handler: "onSmartDoubleClickHandler",
                    priority: 10
                },
                onAntifraudStatisticsClick: {
                    handler: "onAntifraudStatisticsClickHandler",
                    priority: 15
                },
                sspDoubleClick: {
                    handler: "sspDoubleClickHandler",
                    priority: 20
                },
                activateDelayLink: {
                    handler: "activateDelayLinkHandler",
                    priority: 30
                },
                accidentalClicks: {
                    handler: "accidentalClicksHandler",
                    priority: 50
                },
                externalCountersLink: {
                    handler: "externalCountersLinkHandler",
                    priority: 100
                },
                returnedRefreshClick: {
                    handler: "returnedRefreshClickHandler",
                    priority: 120
                },
                internalExchangeLogger: {
                    handler: "internalExchangeLoggerHandler",
                    priority: 150
                },
                invisibleDoubleClickLink: {
                    handler: "invisibleDoubleClickLinkHandler",
                    priority: 150
                },
                showDesktopDoubleClick: {
                    handler: "showDesktopDoubleClickButton",
                    priority: 150
                },
                showMobileDoubleClick: {
                    handler: "showDoubleClickButton",
                    priority: 150
                },
                hangNiceLinkListener: {
                    handler: "hangNiceLinkListener",
                    priority: 200
                },
                clickHeatMapElement: {
                    handler: "clickHeatMapElement",
                    priority: 400
                },
                closeWidgetClick: {
                    handler: "closeWidget",
                    priority: 600
                }
            }, c.context.self !== c.context.top) {
            var l = c.context.document.referrer.split("/");
            c.intExchangeProtocol = 0 == l[0].indexOf("http") ? l[0] : "https:"
        } else {
            var d = c.context.document.location.protocol;
            c.intExchangeProtocol = 0 == d.indexOf("http") ? d : "https:"
        }
        c.sourceName = "", this.templates = [], this.templateId = 0, c.setStyles = function(e) {
            c.styles = e.replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//")
        }, c.setTemplate = function(e) {
            e = (e = (e = e.replace(/^\s*[\r\n]|\s{2,}/gm, "")).replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//")).replace('src="//', 'src="' + c.webProtocol + "//"), c.templateText = e.replace('href="//', 'href="' + c.webProtocol + "//")
        }, this.servicerDomain = "servicer.mgid.com", c.setTemplate('<div class="mgbox">\x3c!--advertPrefix--\x3e    {foreach}        <div class="mgline">            {if $banner}{$banner}{/if}            {if $teaser}                                <div class="image-with-text">                                        <div class="mcimg">                        <a {$target} {$href} >                            <div class="image-container">                                <img class="mcimg" {$src} />                                                                    \x3c!--intExchangeWagesImagePlace--\x3e                                                            </div>                        </a>                    </div>                                            <div class="text-elements">    <div class="text_on_hover">                    <div class="mcdomain-top mcdomain" style="display: none;"><a {$target} {$href}>\x3c!--intExhangeWagesSourcePlace--\x3e{$source}</a></div>                <div class="mctitle"><a {$target} {$href}>{$title}</a></div>                    <div class="mcdesc"><a {$target} {$href}>{$desc}</a></div>                            <div class="mglbtn"><a {$target} {$href}>{$cta}<span>&rarr;</span></a></div>                <div class="fake">                            <div class="mcdomain"><a {$target} {$href}>{$source}</a></div>                                </div>        <div class="mgtobottom">                            <div class="mcdomain"><a {$target} {$href}>\x3c!--intExhangeWagesSourcePlace--\x3e{$source}</a></div>                                </div>    </div></div>                                    </div>            {/if}        </div>    {/foreach}</div>'), c.setStyles("@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,greek,vietnamese'); @import url('https://fonts.googleapis.com/css?family=Open+Sans'); .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: none; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; width: 100%; max-width: 100%; font-family: 'Helvetica', 'Open Sans', sans-serif; font-weight: 700; } .mgline { background: #ffffff; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; border: none; box-sizing: border-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; vertical-align: top; position: relative; width: 100%; max-width: 100%; margin: 0; } .mgline .image-with-text { width: 100% !important; height: auto; max-width: 1200px; margin: 0 auto; position: relative; } @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { .mgline .image-with-text { height: 100% !important; } } @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) { .mgline .image-with-text { height: 100% !important; } } .mgline .image-container { position: relative; } div.mcimg { padding: 0; text-align: center; display: block !important; float: left; width: 50%; max-width: 200px; margin-right: 15px; margin-bottom:20px} img.mcimg { border-style: none; width: 100%; height: auto !important; max-width: 200px; max-height: 328px; box-sizing: border-box; display: block  ; margin: 0; border-radius:3px} .mgline .text-elements { margin-right: 1%; } .mgline .text-elements a { text-decoration: none; } .mctitle { text-align: left; margin: 5px 0 5px; } .mctitle a { font-weight: 700; font-size: 22px; line-height: 1.2; font-style: normal; text-decoration: none; color: #000; font-family: 'Roboto', sans-serif; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 52px; -webkit-line-clamp: 2; -webkit-box-orient: vertical; } .mgline:hover .mctitle a {color:#c00;text-decoration: none; } .mcdomain { display: block; text-align: left; margin: 2% 0 2px; } .mcdomain a { font-weight: 700; font-size: 17px; line-height: 1.1; letter-spacing: 0.1em; font-style: normal; text-decoration: none; color: #b24d31; font-family: 'Roboto', sans-serif; display: block; overflow: hidden; text-transform: uppercase; } .mcdesc { display: block; text-align: left; margin: 1% 0 0; } .mcdesc a { font-weight: 700; font-size: 18px; line-height: 1.1; font-style: normal; text-decoration: none; color: #696969; font-family: 'Roboto', sans-serif; display: block; text-transform: none; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 38px; -webkit-line-clamp: 2; -webkit-box-orient: vertical; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .mgline .text-elements .fake { display: block; visibility: hidden; height: 2px; } .mglbtn { display:none!Important;position: absolute; bottom: 10%; right: 15px; text-align: left; color: #fff; font-size: 11px; line-height: 1.1; font-family: 'Helvetica', 'Open Sans', sans-serif; box-sizing: border-box; text-transform: uppercase; border-radius: 2px; } .mglbtn > a { text-decoration: none; color: #fff; font-weight: 500; background: #ffffff; padding: 10px 15px 10px 10px; font-size: 17px; font-family: 'Roboto', sans-serif; } .mglbtn span { position: relative; top: 0; left: 5px; font-size: 20px; } img.mcimgad { position: absolute; bottom: 0; right: 0; z-index: 999; opacity: 0.7; width: 20px; height: 20px; display: none; } span.mghead { display: none !important; } .mgarrowbox, .mgbuybox { display: none; } .mcdomain-top { display: none !important; } .mcdomain { display: none; } span.mghead { display: none !important; } @media (max-width: 480px) { img.mcimg{max-width:100%!important}div.mcimg { float: none !important; margin:  0 !important; width: 100% !important; max-width: 100% !important; margin-bottom:20px} .mgline .text-elements { margin: 2% !important; } .mctitle a { font-size: 20px !important; max-height: 48px !important; } .mcdomain a { font-size: 15px !important; } .mcdesc a { font-size: 16px !important; max-height: 34px !important; } .mglbtn { position: relative !important; left: 0 !important; padding: 20px 0 10px !important; display: flex; width: 100%; } .mglbtn > a { display: block; width: 100%; text-align: center; font-size: 15px !important; } } 		"), c.adBlockStyles = "", c.adBlockStyles = c.adBlockStyles.replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//"), c.clickTracking = "", c.loadedType = "", c.funcBlocks = {}, c.teaserData = {}, c.browserId = -1, c.deviceType = "desktop", c.hrefAttr = "href", c.enabledCooperationTypes = ["wages"], c.consentData = "", c.cmpEnabled = !1, c.uspString = "", c.uspEnabled = !1, c.cookieMatchingDomain = "cm.mgid.com", c.context._mgIntExchangeNews = c.context._mgIntExchangeNews || {}, c.iframePlacementType = 0, c.networkInformationType = "unknown", c.networkInformationEffectiveType = "unknown", c.networkInformationSaveData = 0, c.pageUrl = "", c.refererUrl = "", c.processHooks = function(e, t) {
            for (var i = 0; i < c[e].length; i++) {
                var n = c[e][i];
                try {
                    c.log("".concat(e, " hook ").concat(n, " start")), c[n].apply(c, t)
                } catch (t) {
                    c.log("".concat(e, " hook ").concat(n, " error: ").concat(t.message))
                }
            }
        }, this.MarketCutStr = function(e, t, n) {
            if (e.length <= t) return e;
            var r = new Array,
                o = (r = e.split(" "))[0] + " ";
            for (i = 1; i < r.length; i++) {
                if ((o + r[i]).length > t) return o + (void 0 === n || n ? "..." : "");
                o += r[i] + " "
            }
            return e
        }, this.MarketParseStr = function(e, t) {
            var i, n = new Array,
                r = "";
            for (n = e.split(" "), i = 0; i < n.length; i++) n[i].length > t && n[i].search(/&\w+;/) < 0 ? r += n[i].substr(0, t) + " " + n[i].substr(t) + " " : r += n[i] + " ";
            return r
        }, this.prepareTitle = function(e) {
            return e = this.MarketCutStr(e, 75, 1)
        }, this.prepareDesc = function(e) {
            return e = this.MarketCutStr(e, 75)
        }, this.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, c.fixGetElementsByClassNameHandler = function(e) {
            null == e.getElementsByClassName && (e.getElementsByClassName = function(e) {
                for (var t = [], i = new RegExp("\\b" + e + "\\b"), n = this.getElementsByTagName("*"), r = 0; r < n.length; r++) {
                    var o = n[r].className;
                    i.test(o) && t.push(n[r])
                }
                return t
            })
        }, this.hidePreloadDiv = function() {
            c.fallbackMode ? c.fallbackMode && 0 == this.countLoadBlocks && (c.root.innerHTML = "", c.context.document.getElementById("M525000PreloadC1014592") && (c.context.document.getElementById("M525000PreloadC1014592").style.display = "none")) : c.context.document.getElementById("MarketGidPreloadC" + this.containerId) ? c.context.document.getElementById("MarketGidPreloadC" + this.containerId).style.display = "none" : c.context.document.getElementById("M525000PreloadC" + this.containerId) ? c.context.document.getElementById("M525000PreloadC" + this.containerId).style.display = "none" : c.context.document.getElementById("MarketGidPreloadN" + this.containerId) ? this.context.document.getElementById("MarketGidPreloadN" + this.containerId).style.display = "none" : c.context.document.getElementById("M525000PreloadN" + this.containerId) && (c.context.document.getElementById("M525000PreloadN" + this.containerId).style.display = "none")
        }, this.MarketGidPrerenderNews = function(e) {
            var t = c.templateFunc(c, e);
            this.root && t && (this.fallbackMode && 0 == this.countLoadBlocks && (this.root.innerHTML = ""), "function" == typeof c.parseAdvertLink && (c.refreshAdvertLink(), t = c.parseAdvertLink(t)), this.addPreRenderTemplate(t)), 1 == c.fakeMode && c.prerenderStatus && c.processHooks("afterPreRenderNewsHooks")
        }, this.MarketGidLoadNews = function(e, t) {
            if (this.hidePreloadDiv(), c.iteration = 1, void 0 !== t) {
                if (c.servicerData = t, void 0 !== t.dt && (c.deviceType = t.dt), void 0 !== t.brid && (c.browserId = t.brid), c.servicerData.templateId = c.servicerData.hasOwnProperty("config") && c.servicerData.config.hasOwnProperty("templateId") ? c.servicerData.config.templateId : 0, void 0 !== c.servicerData && void 0 !== c.servicerData.css && (c.styles = c.servicerData.css, c.addStyle("split_style", c.servicerData.css), c.removeStyle("main")), void 0 !== c.servicerData && void 0 !== c.servicerData.t && "" !== c.servicerData.t) {
                    var i = c.servicerData.t.replace(/\r?\n/g, "");
                    c.setTemplate(i)
                }
                if (c.servicerData.hasOwnProperty("templateId") && c.templates[c.servicerData.templateId] && (void 0 === c.isElastic || 0 == c.countLoadBlocks)) {
                    var n = this.context.document.createElement("script");
                    n.type = "text/javascript", n.charset = "utf-8", n.src = c.webProtocol + "//" + c.templates[c.servicerData.templateId];
                    this.root.parentNode.appendChild(n);
                    var r = 5,
                        o = setInterval((function() {
                            var t = function() {
                                var e, t = c.context._mgtemplates;
                                for (e in t)
                                    if ((t[e].widgetId == c.id || t[e].widgetId == c.originalId) && t[e].templateId == c.servicerData.templateId) return t[e];
                                return null
                            }();
                            if (null === t) {
                                if (--r >= 0) return;
                                new Image(0, 0).src = c.webProtocol + "//c.mgid.com/widget-template-timeout?id=" + c.id
                            } else c.templateId = t.templateId, c.removeStyle("main"), c.addStyle("main", t.styles), c.setTemplate(t.template);
                            clearInterval(o), c.MarketGidLoadNews(e)
                        }), c.servicerData.tsi || 15);
                    return
                }
            }
            if (0 == c.fakeMode && c.processHooks("beforeLoadNewsHooks"), this.isArray(e)) {
                c.json = e;
                i = c.templateFunc(c, e);
                if (0 == c.fakeMode && void 0 !== c.servicerData.lib) {
                    var a = c.webProtocol + "//cdn.mgid.com/js/wglibs/mgWidget_" + c.servicerData.lib + ".js";
                    if (c.servicerData.config && c.servicerData.config.testWidgetLib) {
                        var s = c.servicerData.config.testWidgetLib.match(/mgWidget_(VID\d+)/);
                        null !== s && (c.servicerData.lib = s[1]), a = c.servicerData.config.testWidgetLib + "?r=" + c.pageUrl
                    }
                    c.context._mgq = c.context._mgq || [], c.context._mgq.push(["_mgload", {
                        lib: c.servicerData.lib,
                        cid: c.id,
                        sid: 525e3,
                        config: void 0 !== c.servicerData.config ? c.servicerData.config : {},
                        vr_playlist: void 0 !== c.servicerData.vr_playlist ? c.servicerData.vr_playlist : [],
                        template: "",
                        styles: "",
                        paramsData: {
                            isSmart: !1
                        },
                        subnetDomain: c.currentSubnetDomain,
                        countersDomain: "c.mgid.com",
                        lang: c.servicerData.sl,
                        cappingData: {
                            dt: c.servicerData.dt,
                            ts: c.servicerData.ts,
                            tt: c.servicerData.tt,
                            h2: c.servicerData.h2,
                            psid: c.servicerData.psid,
                            isBot: c.servicerData.isBot,
                            subnet: c.currentSubnet,
                            lang: "en"
                        },
                        rootElement: c.root
                    }]), -1 == c.root.className.indexOf("_mgw_1014592") && (c.root.className += (0 == c.root.className.length ? "" : " ") + "_mgw_1014592"), -1 == c.root.className.indexOf("_mgVideoBlock_1014592") && (c.root.className += (0 == c.root.className.length ? "" : " ") + "_mgVideoBlock_1014592");
                    var l = this.context.document.createElement("script");
                    l.type = "text/javascript", l.charset = "utf-8", l.src = a, c.context.document.head.appendChild(l),
                        function e() {
                            void 0 !== c.context._mgwqp ? c.context._mgwqp() : setTimeout((function() {
                                e()
                            }), 50)
                        }()
                }
                this.root && i && ("function" == typeof c.parseAdvertLink && e.length > 0 && (i = c.parseAdvertLink(i)), this.fallbackMode && 0 == this.countLoadBlocks && (this.root.innerHTML = ""), this.addTemplate(i), this.renderBanners(!0))
            } else if (this.root && 0 == this.countLoadBlocks) return void(this.root.innerHTML = "");
            if (c.servicerData && c.servicerData.muidn && c.servicerData.pvid && 0 != c.pvid && c.servicerData.pvid == c.pvid) try {
                c.context.localStorage && c.context.localStorage.setItem("mgMuidn", c.servicerData.muidn)
            } catch (e) {}
            this.cookieStorage.page = this.page, this.cookieStorage.time = (new Date).getTime(), this.setCookie();
            for (var d = this.root.getElementsByTagName("a"), u = 0; u < d.length; u++) d[u].rel = "nofollow noopener";
            this.countLoadBlocks++, 0 == c.fakeMode ? c.processHooks("afterLoadNewsHooks") : "function" == typeof c.responsiveInit && c.responsiveInit()
        }, this.addTemplate = this.addPreRenderTemplate = function(e) {
            this.root.insertAdjacentHTML("beforeend", this.preTemplate + e + this.postTemplate)
        }, this.getViewportHeight = function() {
            var e = this.context.document,
                t = this.context,
                i = "documentElement",
                n = "clientHeight",
                r = "clientWidth",
                o = "scrollTop";
            return c.isAmp() ? void 0 !== t["intersectionRect1014592_" + c.uniqId] ? {
                c: t["intersectionRect1014592_" + c.uniqId].height,
                s: t["intersectionRect1014592_" + c.uniqId].y
            } : {
                c: t.intersectionRect1014592.height,
                s: t.intersectionRect1014592.y
            } : t.innerWidth ? {
                c: t.innerHeight,
                s: t.pageYOffset
            } : e[i] && e[i][r] ? {
                c: e[i][n],
                s: e[i][o]
            } : e.body[r] ? {
                c: e.body[n],
                s: e.body[o]
            } : 0
        }, this.renderItem = function(e, t, i) {
            var n, r = [];
            if ("html" in e) {
                e.h && (c.teaserData[e.h] = {
                    type: "banner",
                    coopType: "w",
                    imp: void 0 !== e.imp ? e.imp : [],
                    page: c.page,
                    iteration: c.iteration
                });
                var o = "mgBanner_1014592_" + this.page + "_" + this.iteration,
                    a = '<iframe id="' + o + '" scrolling="no" style="' + ("width: " + (void 0 !== e.width ? e.width + "px" : "100%") + "; height: " + (void 0 !== e.height ? e.height + "px" : "100%") + "; border: 0px; margin: auto; overflow: hidden; position: relative;z-index: 1;") + '"></iframe>';
                r.push("mgline-banner"), c.addStyle("mgline-banner", ".mgline-banner {  display: inline-flex;\n  background: initial;\n  }"), void 0 === e.rs && (e.rs = !1), e.iteration = c.iteration, this.banners[o] = e, e = ["", this.iteration]
            } else a = "";
            if (c.isArray(e)) {
                var s = c.prepareTeaserData(e);
                void 0 !== s.hash && void 0 !== s.id && (c.teaserHashes[s.id] = s.hash), r.push("teaser-" + s.id), "l" in s.other && null != s.other.l.match(/[\?|&]u=/) && r.push("dsp"), "type" in s.other && (r.push("type-" + s.other.type), "v" == s.other.type && r.push("vrline"));
                var l = s.price.replace(new RegExp("[^0-9.]"), ""),
                    d = s.priceold.replace(new RegExp("[^0-9.]"), ""),
                    u = s.hash;
                "" !== a && this.banners[o] && this.banners[o].h && (u = this.banners[o].h);
                for (var h = [
                        [/\{\*.*?\*\}/, ""],
                        [/\{\$href\}/g, "v" !== s.other.type ? c.hrefAttr + '="' + c.prepareNiceHref(s.hash) + '" data-hash="' + s.hash + '"' : ""],
                        [/\{\$pmc_item\}/, c.id],
                        [/\{\$hash\}/g, s.hash],
                        [/\{\$target\}/g, void 0 !== s.other.type && "i" == s.other.type || void 0 !== c.servicerData.ats && c.servicerData.ats ? 'target="_top"' : 'target="_blank"'],
                        [/(class\=\".*?)(mgline)([^\"]*\")/, "$1$2 " + r.join(" ") + '$3 data-i="' + u + '"'],
                        [/\{\$source\}/g, s.source],
                        [/\{\$src\}/g, 'width="492" height="277" data-i="' + s.id + '" src="' + (n = s.other.i, (n && 0 === n.indexOf("//") ? c.webProtocol + n : n) + '" nopin="nopin"')],
                        [/\{\$title\}/g, c.htmlEntities(s.title)],
                        [/\{\$desc\}/g, c.htmlEntities(s.desc)],
                        [/\{\$iteration\}/g, c.iteration],
                        [/\$iteration/g, c.iteration],
                        [/this\.iteration/g, c.iteration],
                        [/\{\$price\}/g, s.price],
                        [/\{\$priceold\}/g, s.priceold],
                        [/\{\$discount\}/g, s.discount],
                        [/\{if \$price\}/g, "{if '' != " + l + "}"],
                        [/\{if !\$price\}/g, "{if '' == " + l + "}"],
                        [/\{if \$priceold\}/g, "{if '' != " + d + "}"],
                        [/\{if \$price != " "\}/g, "{if " + s.price.trim().length + " != 0}"],
                        [/\{if \$price == " "\}/g, "{if " + s.price.trim().length + " == 0}"],
                        [/\$priceold/g, s.priceold],
                        [/\$price/g, s.price],
                        [/\{if \$rep\}/g, "{if p.isReplic}"],
                        [/\{\$banner\}/g, a],
                        [/\{if \$teaser\}/g, "{if '' == '" + a + "'}"],
                        [/\{if \$banner\}/g, "{if '' != '" + a + "'}"],
                        [/\{\$category\}/g, s.other.category || ""],
                        [/\{\$cta\}/g, void 0 !== s.other.cta ? s.other.cta : ""],
                        [/\{if \$cta\}/g, void 0 !== s.other.cta ? "{if '' != " + s.other.cta + "}" : ""],
                        [/\{if !\$cta\}/g, void 0 !== s.other.cta ? "{if '' == " + s.other.cta + "}" : ""],
                        [/\{\$sourceName\}/g, c.sourceName],
                        [/\{\$vd\}/g, void 0 !== s.other.vd ? c.getTimeBySeconds(s.other.vd) : ""],
                        [/\{\$vv\}/g, void 0 !== s.other.vv ? s.other.vv : ""],
                        [/\{\$vr\}/g, void 0 !== s.other.vr ? s.other.vr : ""],
                        [/\{if \$vd\}/g, "{if '" + (void 0 !== s.other.vd ? s.other.vd : "") + "' != ''}"],
                        [/\{if \$vv\}/g, "{if '" + (void 0 !== s.other.vv ? s.other.vv : "") + "' != ''}"],
                        [/\{if \$vr\}/g, "{if '" + (void 0 !== s.other.vr ? s.other.vr : "") + "' != ''}"]
                    ], f = 0; f < h.length; f++) t = t.replace(h[f][0], h[f][1]);
                for (t = t.replace(/\r?\n/g, "");;) {
                    if (t == (t = t.replace(/\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g, (function(e, t, i) {
                            return c.expressionParser(t) ? i : ""
                        })))) break
                }
                if (void 0 !== s.other.i && s.other.i.match(/\.mp4/)) {
                    var p = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(t),
                        m = p ? p[1] + "px;" : "100%;",
                        g = p ? p[2] + "px;" : "100%;";
                    t = t.replace(/<img( class="mcimg"[^>]+)/, '<video autoplay loop muted class="mcvideo" $1'), c.addStyle("video", "video.mcvideo { border-style: solid;\n  border-color: #ffffff;\n  border-width: 0;\n  width: 100% !important;\n  height: auto !important;\n  max-width: " + m + "\n  max-height: " + g + "\n  box-sizing: border-box;\n  display: block; }")
                }
                if (1 === s.other.extimg && c.preRenderSizes[i]) {
                    var v = {
                            width: (m = c.preRenderSizes[i].width) + "px !important",
                            height: (g = c.preRenderSizes[i].height) + "px !important",
                            "object-fit": "cover",
                            "-o-object-fit": "cover",
                            "object-position": "top",
                            "-o-object-position": "top"
                        },
                        y = "";
                    Object.keys(v).forEach((function(e) {
                        y += e + ":" + v[e] + ";"
                    })), t = t.replace(/<img( class="mcimg")/, '<img class="mcimg" style="' + y + '"')
                }
                return this.iteration++, t
            }
        }, this.renderBanners = function(e, t) {
            for (var i in c.banners)
                if (c.banners[i].rs != e) {
                    if (!e) {
                        if (c.banners[i].iteration != t) continue;
                        c.banners[i].rs = !1
                    }
                    var n = c.root.querySelector("#" + i),
                        r = c.banners[i].html,
                        o = !1;
                    if (c.banners[i].clickUrl && -1 !== r.indexOf("${CLICK_PIXEL}")) {
                        var a = c.allowReturnParams;
                        c.allowReturnParams = !0, r = r.replace(/\${CLICK_PIXEL}/g, c.banners[i].clickUrl + c.getAntifraudQueryParameter(c.banners[i].clickUrl)), o = !0, c.allowReturnParams = a
                    }
                    n.contentWindow.document.open(), n.contentWindow.document.write('<html><body style="margin: 0;">' + r + "</body></html>"), n.contentWindow.document.close(), o || function(e) {
                        n.contentWindow.document.body.addEventListener("click", (function(t) {
                            for (var i = t.target, n = !1; i.parentElement;) {
                                if ("A" === i.tagName) {
                                    n = !0;
                                    break
                                }
                                i = i.parentElement
                            }
                            n && ((new Image).src = c.banners[e].clickUrl + c.getAntifraudQueryParameter(c.banners[e].clickUrl))
                        }), !0)
                    }(i)
                }
        }, c.renderLazyBanners = function(e) {
            "banner" == c.teaserData[e].type && c.renderBanners(!1, c.teaserData[e].iteration)
        }, c.sendJsTrackers = function(e) {
            if (Array.isArray(c.teaserData[e].other.jst))
                for (var t = function(t) {
                        var i = "<script>window.onerror = function() { return true; };<\/script>";
                        i += c.teaserData[e].other.jst[t];
                        var n = c.context.document.createElement("iframe");
                        n.style.display = "none", n.sandbox = "allow-scripts", "srcdoc" in n ? n.srcdoc = i : (n.src = c.webProtocol + "//cdn.mgid.com" + "/widgets/framehost.html#".concat(e, "_").concat(t), c.context.addEventListener("message", (function(r) {
                            r.origin === c.webProtocol + "//cdn.mgid.com" && r.data === "loaded #".concat(e, "_").concat(t) && n.contentWindow.postMessage(i, "*")
                        }), !1)), c.root.appendChild(n)
                    }, i = 0; i < c.teaserData[e].other.jst.length; i++) t(i)
        }, this.expressionMap = {
            "||": function(e) {
                for (var t in e)
                    if (c.expressionParser(e[t])) return !0;
                return !1
            },
            "&&": function(e) {
                for (var t in e)
                    if (!c.expressionParser(e[t])) return !1;
                return !0
            },
            "==": function(e) {
                return c.expressionParser(e[0]) == c.expressionParser(e[1])
            },
            "!=": function(e) {
                return c.expressionParser(e[0]) != c.expressionParser(e[1])
            },
            "+": function(e) {
                return c.expressionParser(e[0]) + c.expressionParser(e[1])
            },
            "-": function(e) {
                return c.expressionParser(e[0]) - c.expressionParser(e[1])
            },
            "*": function(e) {
                return c.expressionParser(e[0]) * c.expressionParser(e[1])
            },
            "/": function(e) {
                return c.expressionParser(e[0]) / c.expressionParser(e[1])
            },
            "%": function(e) {
                return c.expressionParser(e[0]) % c.expressionParser(e[1])
            }
        }, this.expressionParser = function(e) {
            for (var t in c.expressionMap)
                if (-1 !== e.indexOf(t)) return c.expressionMap[t](e.split(t));
            return (e || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "")
        }, this.generateTemplate = function(e) {
            return c.templateText = e, c.templateFunc = function(e, t) {
                var i = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(c.templateText);
                if (i) {
                    for (var n = void 0 !== i[1] ? i[1] : "", r = 0; r < t.length; r++) n += e.renderItem(t[r], i[2], r);
                    return n += void 0 !== i[3] ? i[3] : ""
                }
            }, !0
        }, this.getPageCount = function() {
            var e = parseInt("0"),
                t = parseInt("20");
            return e && t ? Math.min(e, t) : e || t
        }, this.init = function() {
            "object" !== ("undefined" == typeof JSON ? "undefined" : r(JSON)) && (this.hidePreloadDiv(), console.log("Unsupported browser"));
            var e = c.root.parentNode;
            if (e && e.id.indexOf("ScriptRoot") > 0 && "function" == typeof e.attachShadow && -1 === c.context.navigator.userAgent.indexOf("Headless")) {
                var t = c.context.document.createElement("div");
                t.id = c.root.id, e.attachShadow({
                    mode: "closed"
                }).appendChild(t), e.removeChild(c.root), c.root = t
            }
            if (this.root) {
                this.getCookie();
                var i = parseInt(this.cookieStorage.page);
                this.linkerLinks = this.root.getElementsByTagName("a");
                var n = this.context.MarketGidPageOffset ? parseInt(this.context.MarketGidPageOffset) : 0;
                c.addClickHandler(c.clickHandlerList.hangNiceLinkListener.handler, c.clickHandlerList.hangNiceLinkListener.priority), c.addEvent(c.root, "mouseup", c.eventsHangNiceLinkListener), c.addEvent(c.root, "contextmenu", c.eventsHangNiceLinkListener), c.addEvent(c.root, "touchstart", c.eventsHangNiceLinkListener);
                var o = c.getPageCount();
                if (null != i && i < o && i > 0 ? this.page = i + 1 : (i > o - 1 || i < 1) && (this.page = 1 + n), (new Date).getTime() - (null != this.cookieStorage.time ? this.cookieStorage.time : 0) >= 6e5 && (this.page = 1 + n), this.page || (this.page = 1), this.pageUnlim = this.page - 1, this.cookieStorage.page = this.page, this.setCookie(), !this.context.document.cookie) {
                    var a = new Date;
                    this.page = a.getSeconds() % o + 1
                }
                if (this.blocksAddress = c.webProtocol + "//" + this.servicerDomain + "/", c.clickTracking = void 0 !== c.context.MGClickTracking ? c.context.MGClickTracking : "", c.adBlockStatement = !1, c.adBlockStatement && c.setTemplate(""), !c.generateTemplate(c.templateText)) return;
                c.context.onClickExcludes = c.context.onClickExcludes || [], c.context.onClickExcludes.push(c.root), c.adBlockStatement ? c.addStyle("adBlockMain", c.adBlockStyles) : c.addStyle("main", c.styles), c.addEvent(c.root, "click", c.widgetClickHandler), c.addEvent(c.root, "auxclick", c.widgetClickHandler), c.afterPrepareCappingDataHooks.push("renderLazyBanners"), c.afterPrepareCappingDataHooks.push("sendJsTrackers"), c.processHooks("afterInitHooks")
            }
        }, this.resetPage = function() {
            this.page = 1
        }, this.getMostTopWindow = function() {
            for (var e = c.context; e != e.parent;) try {
                e.parent.document.body;
                e = e.parent
            } catch (e) {
                break
            }
            return e
        }, c.getDevicePixelRatio = function() {
            var e = 1;
            return void 0 !== c.context.devicePixelRatio ? e = c.context.devicePixelRatio : void 0 !== c.context.screen.systemXDPI && void 0 !== c.context.screen.logicalXDPI && c.context.screen.systemXDPI > c.context.screen.logicalXDPI && (e = c.context.screen.systemXDPI / c.context.screen.logicalXDPI), e % 1 == 0 || (e = e.toFixed(3)), e
        }, this.getCbusterParameter = function() {
            return "cbuster=" + (this.context.MG_CacheBuster || (new Date).getTime() + "" + Math.floor(1e9 * Math.random() + 1))
        }, this.injectScript = function(e, t) {
            void 0 === c.updatePrecalcRect ? c.injectionScriptMethod(e, t) : c.updatePrecalcRect((function() {
                c.injectionScriptMethod(e, t)
            }))
        }, this.injectionScriptMethod = function(e, t) {
            c.adBlockStatement && (c.requestParams.limitads = "limitads=3", c.requestParams.adb = "adb=1");
            var i = c.context.document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.referrerPolicy = "strict-origin-when-cross-origin";
            var n = e ? "fs/" : "",
                o = c.blocksAddress + n;
            if (o += "1014592/" + c.page, t && (c.requestParams.rsh = "rsh=" + t, c.requestParams.initial_composite = "initial_composite=" + c.id), void 0 !== c.context.MGi && (c.requestParams.iso = "iso=" + c.context.MGi, c.requestParams.token = "token=31db3a9bb2ffa2b4d48f9abb00a0b3e6"), c.requestParams.pv = "pv=5", void 0 !== c.context["ampOptions1014592_" + c.uniqId]) {
                try {
                    var a = JSON.parse(c.context["ampOptions1014592_" + c.uniqId])
                } catch (e) {}
                c.requestParams.src_id = "src_id=" + (void 0 !== a && void 0 !== a.src_id ? a.src_id : c.sourceName)
            }
            c.requestParams.cbuster = c.getCbusterParameter();
            var s = "";
            if (JSON.parse('["wages"]').indexOf("int_exchange") >= 0) {
                var l = c.context.document.querySelector('meta[property="og:url"]'),
                    d = c.context.document.querySelector('meta[property="og:title"]');
                if (c.context !== c.context.top) {
                    try {
                        l = c.context.parent.document.querySelector('meta[property="og:url"]'), d = c.context.parent.document.querySelector('meta[property="og:title"]')
                    } catch (e) {}
                    if (!l) try {
                        l = c.context.context.canonicalUrl
                    } catch (e) {}
                }
                l && (s = "object" === r(l) ? l.getAttribute("content") : l, c.requestParams.ogurl = "ogurl=" + encodeURIComponent(s)), d && (c.requestParams.ogtitle = "ogtitle=" + encodeURIComponent(d.getAttribute("content")))
            }
            if ("" != c.uniqId && (c.requestParams.uniqId = "uniqId=" + c.uniqId), c.getActiveChilds().length && (c.requestParams.childs = "childs=" + c.getActiveChilds().join(",")), void 0 !== c.context.MG_setRequestNonPersonalizedAds && 1 == c.context.MG_setRequestNonPersonalizedAds && (c.requestParams.npa = "npa=1"), 0 != c.getInternalIds().length && (c.requestParams.viewedInternalIds = "exclude_int_exchange=" + c.getInternalIds().join(",")), c.cmpEnabled) {
                var u = {
                    consentData: "",
                    gdprApplies: !1
                };
                if ("" != c.consentData && void 0 !== c.consentData.gdprApplies && void 0 !== c.consentData.consentData) u = c.consentData;
                else if (c.context.localStorage) try {
                    null != (f = JSON.parse(c.context.localStorage.getItem("MG_ConsentData"))) && void 0 !== f.gdprApplies && void 0 !== f.consentData && (u = f)
                } catch (e) {}
                c.requestParams.consentData = "consentData=" + u.consentData, c.requestParams.gdprApplies = "gdprApplies=" + u.gdprApplies
            }
            if (c.uspEnabled) {
                var h = "";
                if ("" != c.uspString) h = c.uspString;
                else if (c.context.localStorage) try {
                    var f;
                    null != (f = c.context.localStorage.getItem("MG_uspString")) && "" != f && (h = f)
                } catch (e) {}
                c.requestParams.uspString = "uspString=" + h
            }
            try {
                var p = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                void 0 !== p.type && (c.networkInformationType = p.type, c.requestParams.nit = "nit=" + c.networkInformationType), void 0 !== p.effectiveType && (c.networkInformationEffectiveType = p.effectiveType, c.requestParams.niet = "niet=" + c.networkInformationEffectiveType), void 0 !== p.saveData && (c.networkInformationSaveData = p.saveData ? 1 : 0, c.requestParams.nisd = "nisd=" + p.saveData)
            } catch (e) {} - 1 == o.indexOf("?") ? o += "?" : o += "&";
            var m = [];
            for (var g in c.requestParams) m.push(c.requestParams[g]);
            var v = c.context.self !== c.context.top,
                y = !0,
                b = !1,
                k = c.context,
                w = c.context;
            if (v)
                for (;;) {
                    try {
                        k.frameElement && "" != k.frameElement.src && (y = !1), k.document.body
                    } catch (e) {
                        k = w, b = !0, y = !1;
                        break
                    }
                    if (k == k.parent) break;
                    w = k, k = k.parent
                }
            var x = "";
            try {
                c.isAmp() ? (c.iframePlacementType = 3, c.pageUrl = void 0 !== c.context.context.sourceUrl ? c.context.context.sourceUrl : "", c.refererUrl = void 0 !== c.context.context.referrer ? c.context.context.referrer : "", x = "" != c.pageUrl ? c.pageUrl : c.refererUrl) : (c.pageUrl = k.document.location.href, c.refererUrl = k.document.referrer || "", x = c.refererUrl, v && !y && (b ? c.iframePlacementType = 2 : (x = c.pageUrl, c.iframePlacementType = 1)))
            } catch (e) {
                c.iframePlacementType = 2
            }
            if (0 != c.iframePlacementType && m.push("iframe=" + c.iframePlacementType), m.push("ref=" + encodeURIComponent(x)), "function" == typeof c.contextUriParse) {
                var C = c.contextUriParse();
                s && s == C || m.push("cxurl=" + encodeURIComponent(C))
            }
            try {
                if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 18e5 < Date.now()) {
                    var E = c.refererUrl.match(/:\/\/([^\/:]+)/i);
                    sessionStorage.MG_Session_pr = E && E[1] ? E[1] : "", sessionStorage.MG_Session_lu = c.pageUrl
                }
                sessionStorage.MG_Session_lastUpdate = Date.now(), sessionStorage && sessionStorage.MG_Session_pr && m.push("pr=" + encodeURIComponent(sessionStorage.MG_Session_pr)), sessionStorage && sessionStorage.MG_Session_lu && m.push("lu=" + encodeURIComponent(sessionStorage.MG_Session_lu))
            } catch (e) {}
            var S = c.getMostTopWindow();
            void 0 === S._mgPageView525000 ? (S._mgPageView525000 = !0, m.push("pageView=1")) : m.push("pageView=0"), c.pvid = (new Date).getTime().toString(16) + (Math.round(1e9 * Math.random()) + 2147483648).toString(16), m.push("pvid=" + c.pvid), c.isAmp() ? m.push("implVersion=12") : c.isTurbo() ? m.push("implVersion=13") : "" != c.versionWidget && m.push("implVersion=" + c.versionWidget), m.push("dpr=" + c.getDevicePixelRatio());
            try {
                if (c.context.localStorage) {
                    var _ = c.context.localStorage.getItem("mgMuidn");
                    _ && (m.push("muid=" + _), c.muid = _)
                }
            } catch (e) {}
            o += m.join("&"), i.src = o, c.sspPerformance && (i.onload = function() {
                c.context.performance.getEntries().map((function(e) {
                    if (e.name === o) {
                        var t = Math.ceil(e.responseEnd - e.startTime);
                        new Image(0, 0).src = c.webProtocol + "//c.mgid.com/widget-ssp-performance?time=" + t
                    }
                }))
            }), c.context.document.head.appendChild(i), i.onerror = function() {
                c.isAdblock = !0
            }, 0 == c.fakeMode && c.processHooks("afterInjectScriptHooks")
        }, this.getActiveChilds = function() {
            return []
        }, this.addClickHandler = function(e, t) {
            c.clickHandlers.push({
                handler: e,
                priority: t
            }), c.clickHandlers.sort((function(e, t) {
                return e.priority < t.priority ? -1 : 1
            }))
        }, this.widgetClickHandler = function(e) {
            var t;
            if ((e || (e = c.context.event), e.target || (e.target = e.srcElement), "A" != (t = e.target).tagName) && null === (t = c.getParentLink(t))) return;
            if (t.hasAttribute("data-hash") || t.matches(".mg-close-action"))
                for (var i = 0; i < c.clickHandlers.length; i++) try {
                    if (!c[c.clickHandlers[i].handler](t, e)) return
                } catch (e) {}
        }, this.start = function() {
            if (c.root && 0 == c.countLoadBlocks) {
                ! function(e) {
                    if ("function" == typeof c.context.__cmp) {
                        c.cmpEnabled = !0;
                        try {
                            c.context.__cmp("getConsentData", null, (function(e) {
                                c.consentData = e, c.context.localStorage && c.context.localStorage.setItem("MG_ConsentData", JSON.stringify(e))
                            })), setTimeout((function() {
                                e()
                            }), 50)
                        } catch (t) {
                            e()
                        }
                    } else e()
                }((function() {
                    ! function(e) {
                        if ("function" == typeof c.context.__uspapi) {
                            c.uspEnabled = !0;
                            try {
                                c.context.__uspapi("getUSPData", 1, (function(e, t) {
                                    t && (c.uspString = e.uspString || "", c.context.localStorage && "" != c.uspString && c.context.localStorage.setItem("MG_uspString", c.uspString))
                                })), setTimeout((function() {
                                    e()
                                }), 50)
                            } catch (t) {
                                e()
                            }
                        } else e()
                    }((function() {
                        c.injectScript()
                    }))
                }))
            }
        }, this.addEvent = function(e, t, i) {
            e.addEventListener ? "touchstart" !== t && "touchmove" !== t || !c.isPassiveSupported() ? e.addEventListener(t, i, !1) : e.addEventListener(t, i, {
                passive: !0
            }) : e.attachEvent("on" + t, i)
        }, this.removeEvent = function(e, t, i) {
            e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
        }, this.getMainCssSelector = function() {
            return "#" + (this.realRoot ? this.realRoot.id : this.root.id)
        }, this.doubleClickHandler = function(e, t) {
            t = parseInt(0 | t);
            var i = [],
                n = new Image(0, 0),
                r = e.getAttribute("data-hash");
            i.push("url=" + encodeURIComponent(e)), i.push("uuid=" + c.servicerData.rid), i.push("hash=" + r), i.push("cid=1014592"), i.push("gb_uid=57349495"), i.push("h2=" + c.servicerData.h2), i.push("type=" + c.doubleClickType), i.push("checkId=" + c.doubleClickCheckId), t && i.push("isOut=" + t), n.src = c.webProtocol + "//c.mgid.com/doubleclick?" + i.join("&")
        }, this.adBlockDetect = function() {
            var e = 0,
                t = 1,
                i = function(e) {
                    return !e.offsetHeight
                };
            return function(e) {
                var t, n, r, o, a = e.length;
                for (t = 0; t < a; t++) {
                    r = e[t], o = void 0, (o = c.context.document.createElement("div")).className = r, o.innerHTML = ".", o.style.padding = "1px", c.root.appendChild(o);
                    var s = i(n = o);
                    if (c.root.removeChild(n), s) return !0
                }
                return !1
            }(["banner_ad", "sponsored_ad"]) ? t : e
        }
    };
    var o = !1,
        a = !1,
        s = !1,
        c = !1;
    if (document.getElementById("MG_ID")) {
        var l = document.getElementById("MG_ID").innerHTML,
            d = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "MarketGidScriptRootC" + l : "M525000ScriptRootC" + l;
        parent.window.document.getElementById(d) && (o = !0)
    } else {
        d = document.getElementById("MarketGidScriptRootC1014592") || document.getElementById("MarketGidScriptRootC1014592") ? "MarketGidScriptRootC1014592" : (document.getElementById("M525000ScriptRootC1014592"), "M525000ScriptRootC1014592");
        document.getElementById(d) && (o = !0, a = !0, s = !0)
    }(document.getElementById("MarketGidComposite1014592") || document.getElementById("M525000Composite1014592")) && (o = !0, a = !0);
    var u = void 0 !== window.uniqId ? window.uniqId : ("00000" + Math.round(1e5 * Math.random()).toString(16)).slice(-5);
    if (!o) {
        if (document.getElementById("MG_ID")) {
            l = document.getElementById("MG_ID").innerHTML, d = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "MarketGidScriptRootG" + l : "M525000ScriptRootG" + l;
            parent.window.document.getElementById(d) && (o = !0)
        } else {
            d = document.getElementById("MarketGidScriptRootG57349495") ? "MarketGidScriptRootG57349495" : "M525000ScriptRootG57349495";
            document.getElementById(d) && (o = !0, a = !0, s = !0)
        }(document.getElementById("MarketGid0") || document.getElementById("M525000Widget0")) && (o = !0, a = !0), c = !0
    }
    if (o) {
        var h;
        if (c)
            if (a)
                if (s) {
                    (g = document.createElement("div")).id = "MarketGid0", document.getElementById(d).appendChild(g), window.MarketGidInfC1014592 = new MarketGidBaseBlockC1014592(g.id, window, !1, 57349495, u, 11)
                } else {
                    d = document.getElementById("MarketGid0") ? "MarketGid0" : "M525000Widget0", m = document.getElementById("MarketGid0") ? "1" : "2";
                    document.getElementById(d).innerHTML = "", window.MarketGidInfC1014592 = new window.MarketGidBaseBlockC1014592(d, window, !0, 0, u, m)
                }
        else {
            l = document.getElementById("MG_ID").innerHTML;
            (g = parent.window.document.createElement("div")).id = "MarketGid0";
            d = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "MarketGidScriptRootG" + l : "M525000ScriptRootG" + l, m = parent.window.document.getElementById("MarketGidScriptRootG" + l) ? "6" : "8";
            parent.window.document.getElementById(d).appendChild(g), window.MarketGidInfC1014592 = new window.MarketGidBaseBlockC1014592(g.id, parent.window, !1, l, u, m)
        } else if (a)
            if (s) {
                v = "" != u ? "_" + u : "";
                var f = (document.getElementById("M525000}ScriptRootC1014592") || document.getElementById("M525000ScriptRootC1014592") || document.getElementById("MarketGidScriptRootC1014592"), 1014592);
                if (!window.document.getElementById("MarketGidComposite" + f) || !window.document.getElementById("M525000Composite" + f)) {
                    (g = window.document.createElement("div")).id = "MarketGidComposite" + f + v;
                    var p = window.document.getElementById("MarketGidScriptRootC" + f) ? "MarketGidScriptRootC" + f : "M525000ScriptRootC" + f;
                    window.document.getElementById(p).appendChild(g), window.document.getElementById(p).id = p + v
                }
                y = window.document.getElementById("MarketGidPreloadC" + f) ? "MarketGidPreloadC" + f : "M525000PreloadC" + f;
                window.document.getElementById(y) && (window.document.getElementById(y).id = y + v);
                var d = document.getElementById("MarketGidComposite" + f + v) ? "MarketGidComposite" + f + v : "M525000Composite" + f + v;
                window.MarketGidInfC1014592 = new window.MarketGidBaseBlockC1014592(d, window, !1, f + v, u, 11)
            } else {
                d = document.getElementById("MarketGidComposite1014592") ? "MarketGidComposite1014592" : "M525000Composite1014592";
                var m = document.getElementById("MarketGidComposite1014592") ? "3" : "4";
                document.getElementById(d).innerHTML = "", window.MarketGidInfC1014592 = new window.MarketGidBaseBlockC1014592(d, window, !1, 0, u, m)
            }
        else {
            var g, v = "_" + u,
                l = document.getElementById("MG_ID").innerHTML;
            (g = parent.window.document.createElement("div")).id = "MarketGidComposite1014592" + v;
            var d = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "MarketGidScriptRootC" + l : "M525000ScriptRootC" + l,
                m = parent.window.document.getElementById("MarketGidScriptRootC" + l) ? "9" : "10";
            parent.window.document.getElementById(d).id = d + v;
            var y = parent.window.document.getElementById("MarketGidPreloadC" + l) ? "MarketGidPreloadC" + l : "M525000PreloadC" + l;
            parent.window.document.getElementById(y) && (parent.window.document.getElementById(y).id = y + v), d += v, parent.window.document.getElementById(d).appendChild(g), window.MarketGidInfC1014592 = new window.MarketGidBaseBlockC1014592(g.id, parent.window, !1, l + v, u, m)
        }
        n(2), window.MarketGidCMainBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Main = "MarketGidCMainBlock1014592", n(3), window.MarketGidCSubnetsBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Subnets = "MarketGidCSubnetsBlock1014592", n(4), window.MarketGidCAdvertLinkBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.AdvertLink = "MarketGidCAdvertLinkBlock1014592", n(5).call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), n(6), window.MarketGidCInternalExchangeBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.InternalExchange = "MarketGidCInternalExchangeBlock1014592", n(7), window.MarketGidCColorBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Color = "MarketGidCColorBlock1014592", n(8), window.MarketGidCUtilsBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Utils = "MarketGidCUtilsBlock1014592", n(9), window.MarketGidCMonitorBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Monitor = "MarketGidCMonitorBlock1014592", n(10), window.MarketGidCChangeColorBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.ChangeColor = "MarketGidCChangeColorBlock1014592", n(12), window.MarketGidCRejectBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Reject = "MarketGidCRejectBlock1014592", n(13), window.MarketGidCCriteoBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Criteo = "MarketGidCCriteoBlock1014592", n(14), window.MarketGidCAmpRenderBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.AmpRender = "MarketGidCAmpRenderBlock1014592", n(15), window.MarketGidCInternalExchangeLoggerBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.InternalExchangeLogger = "MarketGidCInternalExchangeLoggerBlock1014592", n(16), window.MarketGidCMgqBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Mgq = "MarketGidCMgqBlock1014592", n(17), window.MarketGidCStylesheetsBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Stylesheets = "MarketGidCStylesheetsBlock1014592", n(18), window.MarketGidCCookieBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Cookie = "MarketGidCCookieBlock1014592", n(19), window.MarketGidCObserverBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Observer = "MarketGidCObserverBlock1014592", n(20), window.MarketGidCSspDoubleClickBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.SspDoubleClick = "MarketGidCSspDoubleClickBlock1014592", n(21), window.MarketGidCSendDimensionsBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.SendDimensions = "MarketGidCSendDimensionsBlock1014592", n(22), window.MarketGidCAntifraudBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Antifraud = "MarketGidCAntifraudBlock1014592", n(24), window.MarketGidCAntifraudStatisticsBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.AntifraudStatistics = "MarketGidCAntifraudStatisticsBlock1014592", n(26), window.MarketGidCRtbBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Rtb = "MarketGidCRtbBlock1014592", n(27), window.MarketGidCDiscountBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Discount = "MarketGidCDiscountBlock1014592", n(28), window.MarketGidCActivateDelayBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.ActivateDelay = "MarketGidCActivateDelayBlock1014592", n(29), window.MarketGidCIframeSizeChangerBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.IframeSizeChanger = "MarketGidCIframeSizeChangerBlock1014592", "wages".length > 0 && (n(30), window.MarketGidCAccidentalClicksBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.AccidentalClicks = "MarketGidCAccidentalClicksBlock1014592"), n(31), window.MarketGidCExternalCountersBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.ExternalCounters = "MarketGidCExternalCountersBlock1014592", n(32), window.MarketGidCYandexTurboBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.YandexTurbo = "MarketGidCYandexTurboBlock1014592", n(33), window.MarketGidCContentPreviewBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.ContentPreview = "MarketGidCContentPreviewBlock1014592", n(34), window.MarketGidCCountersBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Counters = "MarketGidCCountersBlock1014592";
        var b = JSON.parse('{"type":"in-article","subType":"in-article-impact","sidebarWidthCorrect":0,"font":"roboto","textPosition":"right","width":0,"kind":"wages","formatChanged":true,"imageScaleOnHover":"","imageShadow":"","isToaster":1,"isDragDown":1,"isInterstitial":0,"frequencyCappingShow":3,"frequencyCappingTime":2,"interstitialAfter":3,"popupFrequency":15,"button":1,"widgetTypeDescription":1,"autoplacement":"off","mctable":{"styles":{"borderWidth":0,"borderColor":"","backgroundColor":""}},"mctitle":{"styles":{"fontSize":16,"fontWeight":"bold","fontStyle":"normal","textDecoration":"none","textAlign":"left","color":"#474747","text-transform":"uppercase"}},"mcprice":{"show":"false","styles":{"fontSize":14,"fontWeight":"bold","color":"#2a3a7b","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"opensans"}},"widgetTitleSettings":{"styles":{"fontSize":14,"font":"roboto","color":"#2b397b","text-transform":"uppercase"}},"mcimage":{"size":200,"size-width":492,"size-height":277,"styles":{"borderWidth":0,"borderColor":"#ffffff","borderStyle":"solid","padding":0}},"mcdesc":{"styles":{"display":"block","fontSize":11,"fontWeight":"normal","color":"#666666","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"opensans"}},"mcdomain":{"styles":{"display":"block","fontSize":10,"fontWeight":"normal","color":"#868585","textAlign":"left","fontStyle":"normal","textDecoration":"none","font":"roboto"}},"mgline":{"styles":{"borderStyle":"solid","borderWidth":1,"borderColor":"#e9e9e9","height":"170","width":"150","borderRadius":"0","margin":"2"}},"mgbox":{"styles":{"maxWidth":1220}},"media":{"position":"bottom","minWidth":250,"minHeight":150,"opacity":80,"duration":1,"videoOverlay":1},"theme":"#2b397b","colsMobile":1,"rows":"1","cols":"1","sidebarScrollPercent":"0","showWidgetButton":"true","showEffectButton":"false","colorButton":"","blur":"auto","customGradient":"","teaserCardShadow":"0","teaserFixedWidth":"0","is_int_exchange":"0","imageFormat":46,"imgType":"super"}');
        ("in-article" === b.type && "off" !== (null !== (h = b.autoplacement) && void 0 !== h ? h : "off") || ("in-article" === b.type && b.autoplacement, 0)) && (n(35), window.MarketGidCInArticleWidgetBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.InArticleWidget = "MarketGidCInArticleWidgetBlock1014592"); - 1 !== ["header-widget-carousel", "in-article-carousel"].indexOf("in-article-impact") && (n(37), window.MarketGidCCarouselWidgetBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.CarouselWidget = "MarketGidCCarouselWidgetBlock1014592"), window.MarketGidCGradientBlock1014592 = function(e) {
            e.afterLoadNewsHooks.push("gradientRendering"), e.gradientRendering = function() {
                var t = e.root.querySelectorAll("[class*=mgline-blur]");
                if (0 !== t.length)
                    for (var i, n = 0; n < t.length; n++) {
                        var r = "",
                            o = "",
                            a = "",
                            s = /\bmgline-[^\s]*\b/.exec(t[n].classList.value),
                            c = /\bmgline-[^\s]*\b-mob/.exec(t[n].classList.value);
                        s && (r = "to " + (a = "blur" == (a = s[0].split("-").pop()) ? "bottom" : a) + ","), c && (o = "to " + (a = c[0].split("-")[2]) + ",");
                        var l = t[n],
                            d = t[n].getElementsByClassName("text-elements")[0];
                        if (t[n].getElementsByClassName("mctitle")[0]) {
                            var u = t[n].getElementsByClassName("mctitle")[0].getElementsByTagName("a")[0],
                                h = t[n].getElementsByClassName("mcdomain"),
                                f = t[n].querySelector("img.mcimg").getAttribute("src"),
                                p = "";
                            "" !== p && (i = void 0, i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p), p = i ? parseInt(i[1], 16) + "," + parseInt(i[2], 16) + "," + parseInt(i[3], 16) : "");
                            "function" == typeof fetch && "" === p ? function(t, i, n, r, o, a) {
                                e.colorAverage(f).then((function(s) {
                                    (e.context.matchMedia("(max-width: 480px)").matches || "mobile" === e.deviceType) && (o = a);
                                    var c = .299 * s.r + .587 * s.g + .114 * s.b > 186 ? "#000" : "#fff",
                                        l = "linear-gradient(" + o + "transparent, rgba(" + s.r + "," + s.g + "," + s.b + ", 0.25) 15%,rgba(" + s.r + "," + s.g + "," + s.b + ", 0.85) 30%,rgb(" + s.r + "," + s.g + "," + s.b + ") 45%)";
                                    t.style.background = "rgb(" + s.r + "," + s.g + "," + s.b + ")", i.style.background = l, n.style.color = c, Object.keys(r).forEach((function(e) {
                                        r[e].firstElementChild.style.color = "#fff"
                                    }))
                                }))
                            }(l, d, u, h, r, o) : function(t, i, n, r, o) {
                                if ((e.context.matchMedia("(max-width: 480px)").matches || "mobile" === e.deviceType) && (r = o), "" === p) var a = "linear-gradient(" + r + "transparent,rgba(0,0,0, 0.25) 15%,rgba(0,0,0, 0.85) 30%,rgb(0,0,0) 45%)";
                                else a = "linear-gradient(" + r + "transparent,rgba(" + p + ", 0.25) 15%,rgba(" + p + ", 0.85) 30%,rgb(" + p + ") 45%)";
                                t.style.background = a, i.style.color = "#fff", Object.keys(n).forEach((function(e) {
                                    n[e].firstElementChild.style.color = "#fff"
                                }))
                            }(d, u, h, r, o);
                            var m = e.autoSizeTitle - Math.round(u.clientHeight / e.autoSizeTitle);
                            u.style.fontSize = m + "px", u.style.lineHeight = m + "px"
                        }
                    }
            }
        }, window.MarketGidCGradientBlock1014592.call(window.MarketGidInfC1014592, window.MarketGidInfC1014592), window.MarketGidInfC1014592.funcBlocks.Gradient = "MarketGidCGradientBlock1014592";
        var k = !0;
        window.mg_loaded_525000_1014592, 0, k && (window.MarketGidInfC1014592.init(), void 0 === window.MarketGidInfC1014592.context.MarketGidC1014592DisableStart && (window.mg_loaded_525000_1014592 = !0, window.MarketGidInfC1014592.start()))
    }
}, function(e, t, i) {
    window.MarketGidCMainBlock1014592 = function(e) {
        e.afterPrepareCappingDataHooks.push("setCappingRealShowTime"), e.observerWidgetHooks.push("setWidgetRealShowTime"), e.cappingRealShowTime = 0, e.widgetRealShowTime = 0, e.addEvent(e.root, "mousemove", (function(t) {
            e.root.mouseX = t.pageX - e.root.offsetLeft, e.root.mouseY = t.pageY - e.root.offsetTop
        })), e.prepareHref = function(t, i, n) {
            var r = "",
                o = e.teaserData[t];
            if (n && void 0 !== e.context._mgExternalLinkChanger && 1 === e.context._mgExternalLinkChanger) {
                r = n.protocol + "//" + n.hostname + n.pathname;
                var a = n.search;
                if ("" != a)
                    for (var s = (a = a.replace("?", "")).split("&"), c = 0; c < s.length; c++) {
                        var l = s[c].split("=");
                        "k" != l[0] && "dc" != l[0] && (r += (0 == c ? "?" : "&") + s[c])
                    }
            } else r = e.clickTracking + e.webProtocol, o ? o.link && (r = /^http[s]?:/.test(o.link) ? e.clickTracking + o.link : "i" == o.coopType ? e.clickTracking + e.intExchangeProtocol + o.link : e.clickTracking + e.webProtocol + o.link) : r = "#";
            var d = "";
            void 0 !== e.clickableDelay && e.clickableDelay && "function" == typeof e.isWagesLink && e.isWagesLink(n) && (d = "dc=1");
            var u = e.getQueryParameterByName("dc");
            if (u && (d = "dc=" + parseInt(u)), "" !== e.getClickZone() && "" == d && (d = "dc=" + e.getClickZone()), "" !== d && (r += (r.indexOf("?") >= 0 ? "&" : "?") + d), "function" == typeof e.getAntifraudParams && o && "i" != o.coopType && (r += e.getAntifraudQueryParameter(r, i, n)), e.cappingRealShowTime && (r += (r.indexOf("?") >= 0 ? "&" : "?") + "crst=" + e.cappingRealShowTime), e.widgetRealShowTime && (r += (r.indexOf("?") >= 0 ? "&" : "?") + "wrst=" + e.widgetRealShowTime), e.clickTracking && -1 !== r.indexOf(e.clickTracking) && (r = e.clickTracking + encodeURIComponent(r.replace(e.clickTracking, ""))), e.templateId && (r += (r.indexOf("?") >= 0 ? "&" : "?") + "tpl=" + e.templateId), -1 !== e.botRadarMetrics && (r += (r.indexOf("?") >= 0 ? "&" : "?") + "brm=" + e.botRadarMetrics), n && (wct = e.getParameterFromLink(n, "wct")) && (r += (-1 === r.indexOf("?") ? "?" : "&") + wct), void 0 !== i && "click" === i.type) {
                var h = "." + e.extractClass(i.target),
                    f = i.target.tagName;
                "A" === f && (f = i.target.parentNode.tagName, h = "." + e.extractClass(i.target.parentNode)), o && "i" === o.coopType || (r += (r.indexOf("?") >= 0 ? "&" : "?") + "ce=" + f + h)
            }
            if (o && "i" != o.coopType) try {
                if (e.context.localStorage) {
                    var p = e.context.localStorage.getItem("mgMuidn");
                    "string" == typeof p && p.length > 0 && r.indexOf("muid") < 0 && (r += (r.indexOf("?") >= 0 ? "&" : "?") + "muid=" + p)
                }
            } catch (e) {}
            return r
        }, e.getParameterFromLink = function(e, t) {
            var i = e.search;
            if ("" === i) return null;
            for (var n = i.replace("?", "").split("&"), r = 0; r < n.length; r++)
                if (n[r].split("=")[0] === t) return n[r];
            return null
        }, e.getClickZone = function() {
            var t = JSON.parse("[]");
            if (0 == t.length) return "";
            if (void 0 === t.top || void 0 === t.left || void 0 === t.right || void 0 === t.bottom) return "";
            var i = e.root.offsetHeight,
                n = e.root.offsetWidth,
                r = [];
            r.top = parseInt(i / 100 * t.top), r.left = parseInt(n / 100 * t.left), r.right = n - parseInt(n / 100 * t.right), r.bottom = i - parseInt(i / 100 * t.bottom);
            var o = e.root.mouseX,
                a = e.root.mouseY;
            return [
                [2, 3, 4],
                [5, "", 6],
                [7, 8, 9]
            ][a <= r.top ? 0 : a >= r.bottom ? 2 : 1][o <= r.left ? 0 : o >= r.right ? 2 : 1]
        }, e.getAntifraudQueryParameter = function(t, i, n) {
            var r = e.getAntifraudParams(i, n),
                o = "";
            if (r) {
                var a = "";
                a = e.id, o = (t.indexOf("?") >= 0 ? "&" : "?") + "k=" + a + "f" + r
            }
            var s = e.getFrPt();
            if (s) {
                o ? o += "&fp=" + s : o = (t.indexOf("?") >= 0 ? "&" : "?") + "fp=" + s
            }
            return o
        }, e.prepareNiceHref = function(t, i, n) {
            var r, o = e.teaserData[t];
            if (1 == o.other.sdl && "i" != o.coopType) {
                if (r = e.clickTracking, void 0 !== o.other.dl && "" != o.other.dl) r += o.other.dl;
                else {
                    var a = decodeURIComponent(o[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")).toLowerCase(),
                        s = decodeURIComponent(o[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")).replace(/\s/g, "_");
                    r += e.webProtocol + "//" + (a ? a + "/" : "") + s
                }
                e.clickTracking && -1 !== r.indexOf(e.clickTracking) && (r = e.clickTracking + encodeURIComponent(r.replace(e.clickTracking, "")))
            } else r = e.prepareHref(t, i, n);
            return r
        }, e.transliterate = function(e) {
            var t = {
                "Ð": "YO",
                "Ð™": "I",
                "Ð¦": "TS",
                "Ð£": "U",
                "Ðš": "K",
                "Ð•": "E",
                "Ð": "N",
                "Ð“": "G",
                "Ð¨": "SH",
                "Ð©": "SCH",
                "Ð—": "Z",
                "Ð¥": "H",
                "Ðª": "",
                "Ñ‘": "yo",
                "Ð¹": "i",
                "Ñ†": "ts",
                "Ñƒ": "u",
                "Ðº": "k",
                "Ðµ": "e",
                "Ð½": "n",
                "Ð³": "g",
                "Ñˆ": "sh",
                "Ñ‰": "sch",
                "Ð·": "z",
                "Ñ…": "h",
                "ÑŠ": "'",
                "Ð¤": "F",
                "Ð«": "I",
                "Ð’": "V",
                "Ð": "a",
                "ÐŸ": "P",
                "Ð ": "R",
                "Ðž": "O",
                "Ð›": "L",
                "Ð”": "D",
                "Ð–": "ZH",
                "Ð­": "E",
                "Ñ„": "f",
                "Ñ‹": "i",
                "Ð²": "v",
                "Ð°": "a",
                "Ð¿": "p",
                "Ñ€": "r",
                "Ð¾": "o",
                "Ð»": "l",
                "Ð´": "d",
                "Ð¶": "zh",
                "Ñ": "e",
                "Ð¯": "Ya",
                "Ð§": "CH",
                "Ð¡": "S",
                "Ðœ": "M",
                "Ð˜": "I",
                "Ð¢": "T",
                "Ð¬": "",
                "Ð‘": "B",
                "Ð®": "YU",
                "Ñ": "ya",
                "Ñ‡": "ch",
                "Ñ": "s",
                "Ð¼": "m",
                "Ð¸": "i",
                "Ñ‚": "t",
                "ÑŒ": "",
                "Ð±": "b",
                "ÑŽ": "yu",
                " ": "_",
                "Ñ–": "i",
                "Ð†": "I",
                "Ñ—": "i",
                "Ð‡": "I"
            };
            return e.split("").map((function(e) {
                return e.match(/[a-z0-9_\-]/i) ? e : t[e] || ""
            })).join("")
        }, e.getQueryParameterByName = function(t) {
            t = t.replace(/[\[\]]/g, "\\$&");
            var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e.context.location.href);
            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
        }, e.getParentLink = function(e) {
            for (; e && "BODY" !== e.tagName;) {
                if ("A" == e.tagName) return e;
                e = e.parentNode
            }
            return null
        }, e.extractClass = function(e) {
            if (e && void 0 !== e.className) {
                var t = e.className.replace(/\s/g, ".").split(".")[0];
                if (t) return t.replace(1014592, "")
            }
            return ""
        }, e.findClosest = function(e, t) {
            for (var i; e.parentNode;) {
                i = e.parentNode.querySelectorAll(t);
                for (var n = 0; n < i.length; n++)
                    if (e.isEqualNode(i[n])) return i[n];
                e = e.parentNode
            }
            return null
        }, e.prepareTeaserData = function(t) {
            var i = {};
            i.source = e.htmlEntities(t[0]), i.id = e.htmlEntities(t[1]), i.title = void 0 !== t[3] ? e.prepareTitle(t[3]) : "", i.desc = void 0 !== t[4] ? e.prepareDesc(t[4]) : "", i.mirror = e.subnetMirrors[e.currentSubnet], i.key = t[6], i.price = void 0 !== t[7] ? e.htmlEntities(t[7]).replace(".00", "") : "", i.priceold = void 0 !== t[8] ? e.htmlEntities(t[8]).replace(".00", "") : "";
            var n = 100 * (1 - parseFloat(i.price) / parseFloat(i.priceold));
            n <= 1 || n > 100 ? (i.priceold = "", i.discount = "") : i.discount = Math.floor(n) + "%", i.hash = t[9], i.other = void 0 !== t[10] ? t[10] : {}, void 0 !== i.other.i && (i.other.i = e.htmlEntities(i.other.i));
            var r = i.title.toLowerCase(),
                o = i.desc.toLowerCase(),
                a = ["ÐºÐ¾Ð¿Ð¸Ñ", "Ð¿Ð¾Ð´Ð´ÐµÐ»ÐºÐ°", "Ñ€ÐµÐ¿Ð»Ð¸ÐºÐ°", "ÐºÐ°Ðº Ð¾Ñ€Ð¸Ð³Ð¸Ð½Ð°Ð»"];
            if ("1" == t[5]) {
                i.isReplic = !0;
                for (var s = 0; s < a.length; s++)
                    if (e.prepareTitle(r).indexOf(a[s]) > -1 || e.prepareDesc(o).indexOf(a[s]) > -1) {
                        i.isReplic = !1;
                        break
                    } 0
            } else i.isReplic = !1;
            return "desktop" != e.deviceType && (i.other.sdl = 0), t.other = i.other, e.teaserData[i.hash] = t, e.teaserData[i.hash].type = "teaser", e.teaserData[i.hash].id = i.id, e.teaserData[i.hash].source = i.source, e.teaserData[i.hash].img = i.other.i, e.teaserData[i.hash].link = void 0 !== i.other.l ? i.other.l : null, e.teaserData[i.hash].mirror = i.mirror, e.teaserData[i.hash].coopType = void 0 !== i.other.type ? i.other.type : null, e.teaserData[i.hash].clicktrackers = void 0 !== i.other.clicktrackers ? i.other.clicktrackers : [], e.teaserData[i.hash].cdomain = i.other.cdomain || null, e.teaserData[i.hash].ccid = i.other.ccid || null, e.teaserData[i.hash].ch = i.other.ch || null, e.teaserData[i.hash].imp = void 0 !== i.other.imp ? i.other.imp : [], e.teaserData[i.hash].iteration = e.iteration, e.teaserData[i.hash].page = e.page, "i" == e.teaserData[i.hash].coopType && (e.context._mgIntExchangeNews[i.id] = 1), i
        }, e.getInternalIds = function() {
            return Object.keys(e.context._mgIntExchangeNews)
        }, e.tox64String = function(e, t) {
            t = void 0 !== t && t;
            for (var i, n, r, o, a, s, c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = "", u = 0; u < e.length;) i = e.charCodeAt(u++), n = e.charCodeAt(u++), r = e.charCodeAt(u++), o = i >> 2, a = (3 & i) << 4 | n >> 4, s = isNaN(n) ? 64 : (15 & n) << 2 | r >> 6, c = isNaN(r) ? 64 : 63 & r, d += l.charAt(o) + l.charAt(a) + l.charAt(s) + l.charAt(c);
            return !0 === t && (d = d.replace("+", "-").replace("/", "_").replace("=", "*")), d
        }, e.hangNiceLinkListener = function(t, i) {
            if (!e.loadedDefault) {
                var n = t.getAttribute("data-hash");
                return void 0 !== e.teaserData[n] && void 0 !== e.teaserData[n].other && void 0 !== e.teaserData[n].other.sdl && (e.teaserData[n].other.sdl = 0), t[e.hrefAttr] = e.prepareHref(n, i, t), !0
            }
        }, e.eventsHangNiceLinkListener = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement);
            var i = t.target;
            "A" != i.tagName && null === (i = e.getParentLink(i)) || i.hasAttribute("data-hash") && e.hangNiceLinkListener(i, t)
        }, e.htmlToElement = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.firstChild
        }, e.htmlToElements = function(t) {
            var i = e.context.document.createElement("div");
            return i.innerHTML = t, Array.prototype.slice.call(i.childNodes)
        }, e.isHiddenElement = function(e) {
            for (;
                "BODY" !== e.tagName;) {
                if ("fixed" != e.style.position && null == e.offsetParent) return !0;
                if ("hidden" == e.style.visibility) return !0;
                if ("none" == e.style.display) return !0;
                e = e.parentNode
            }
            return !1
        }, e.getTimeBySeconds = function(e) {
            var t = "",
                i = new Date(1e3 * e).toISOString().substr(11, 8);
            if (1 === e.indexOf(":") || 2 === e.indexOf(":")) i = e;
            else {
                if (Number.isNaN(parseInt(e))) return "00:00";
                t = i.split(":")
            }
            return "00" === t[0] && (i = t[1] + ":" + t[2]), i
        }, e.htmlEntities = function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }, e.random = function(e, t) {
            return Math.floor(e + Math.random() * (t - e + 1))
        }, e.getCurrentTimestamp = function() {
            return Math.floor(Date.now() / 1e3)
        }, e.setCappingRealShowTime = function() {
            e.cappingRealShowTime = e.getCurrentTimestamp()
        }, e.setWidgetRealShowTime = function(t, i) {
            t && i >= .01 && (e.widgetRealShowTime = e.getCurrentTimestamp())
        }, e.isMobile = function() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || w.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
        }, e.isPassiveSupported = function() {
            if (void 0 !== e.passiveIsSupported) return e.passiveIsSupported;
            e.passiveIsSupported = !1;
            try {
                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        e.passiveIsSupported = !0
                    }
                }))
            } catch (e) {}
            return e.passiveIsSupported
        }
    }
}, function(e, t) {
    window.MarketGidCSubnetsBlock1014592 = function(e) {
        e.afterInitHooks.push("subnetsLoad"), e.currentSubnet = "", e.subnetMirrors = {}, e.subnetMirrorServicers = {}, e.subnetMirrorsImages = {}, e.subnetMirrorsAdvert = {}, e.subnetMirrorsAdLinkBlocks = {}, e.subnetMirrorsUtm = {}, e.subnetDashboardDomains = {}, e.subnetMirrorNames = {};
        var t = JSON.parse('{"0":{"id":0,"informer_prefix":"MarketGid","mirror":"mgid.com","mirrorName":"marketgid","imageDomain":"mgid.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"https:\\/\\/widgets.mgid.com\\/%lang\\/%utm%id\\" target=\\"_blank\\"><img style=\\"display: inline-block;width: 65px!important; height: 27px;\\" src=\\"https:\\/\\/cdn.mgid.com\\/images\\/logos\\/ByMGID.svg\\" alt=\\"Mgid\\" title=\\"Mgid\\"><\\/a><\\/div><\\/div><style>.mghead{ font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:5px 0 0px 5px;float:left;}.mgheader{  display: none !Important; width: 100% !important;margin-bottom:0px;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.mgid.com","utm":"?utm_source={domain}&utm_medium=referral&utm_campaign=widgets&utm_content=","servicer":"servicer.mgid.com"},"1":{"id":1,"informer_prefix":"MarketGid","mirror":"fem.mgid.com","mirrorName":"lady","imageDomain":"mgid.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"http:\\/\\/mgid.com\\/advertisers%utm%id\\" target=\\"_blank\\"> by <img style=\\"display: inherit!important;width: auto!important;\\" src=\\"\\/\\/cdn.mgid.com\\/images\\/mgid_logo_mini_43x20.png\\" alt=\\"Mgid\\" title=\\"Mgid\\"><\\/a><\\/div><\\/div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: none !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}<\\/style>","dashboardDomain":"dashboard.mgid.com","utm":"?utm_source=widget_fem&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.mgid.com"},"2":{"id":2,"informer_prefix":"Adskeeper","mirror":"adskeeper.co.uk","mirrorName":"adskeeper","imageDomain":"adskeeper.co.uk","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"\\/\\/widgets.adskeeper.com\\/%utm%id\\" target=\\"_blank\\"><img src=\\"\\/\\/cdn.adskeeper.co.uk\\/images\\/adskeeper_logo_mini_71x16.png\\" alt=\\"Adskeeper\\" title=\\"Adskeeper\\"><\\/a><\\/div><\\/div><style>.mghead{line-height:20px;vertical-align:middle;font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: none !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.adskeeper.co.uk","utm":"?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.adskeeper.co.uk"},"3":{"id":3,"informer_prefix":"LentaInform","mirror":"lentainform.com","mirrorName":"lentainform","imageDomain":"lentainform.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id widgets_logo\\"><a href=\\"http:\\/\\/partner.lentainform.com\\" target=\\"_blank\\"><\\/a><\\/div><\\/div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https:\\/\\/cdn.lentainform.com\\/images\\/lentainform\\/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https:\\/\\/cdn.lentainform.com\\/images\\/lentainform\\/widgets_lentainform_hover.png) no-repeat}<\\/style>","dashboardDomain":"dashboard.lentainform.com","utm":"?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.lentainform.com"},"5":{"id":5,"informer_prefix":"IdealMedia","mirror":"idealmedia.com","mirrorName":"idealmedia.com","imageDomain":"idealmedia.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"http:\\/\\/idealmedia.com\\/\\" target=\\"_blank\\"><img style=\\"display: inline-block;width: 43px;\\" src=\\"\\/\\/cdn.mirs.com\\/images\\/im_logo_mini_43x20.svg\\" alt=\\"IdealMedia\\" title=\\"IdealMedia\\"><\\/a><\\/div><\\/div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ \\u00a0display: none !Important; width: 100% !important; margin-bottom:-7px;}div.mg_addad%id{text-align: right; margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.idealmedia.com","utm":"?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.idealmedia.com"}}');
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var n = t[i];
                e.subnetMirrors[n.id] = n.mirror, e.subnetMirrorServicers[n.id] = n.servicer, e.subnetMirrorNames[n.mirrorName] = n.id, e.subnetMirrorsImages[n.id] = n.imageDomain, e.subnetMirrorsAdLinkBlocks[n.id] = n.adLinkBlock, e.subnetMirrorsUtm[n.id] = n.utm, "marketgid" === n.mirrorName && (e.subnetDashboardDomains[n.id] = e.webProtocol + "//" + n.dashboardDomain)
            } var r = [];
        r.push({
            id: 1014592
        });
        var o = JSON.parse("[]");
        for (var a in o) o.hasOwnProperty(a) && r.push({
            id: o[a].childId
        });
        this.subnetsLoad = function() {
            for (var i = 0; i < r.length; i++) {
                var n = r[i].id;
                for (var a in t) t.hasOwnProperty(a) && function() {
                    var i = t[a];
                    1 !== i.id && function(t) {
                        e.context[i.informer_prefix + "LoadGoods" + t + ("" !== e.uniqId ? "_" + e.uniqId : "")] = function(n, r) {
                            if (e.originalId = e.id, e.id = t, e.loadedType = "goods", e.currentSubnet = i.id, e.currentSubnetDomain = i.mirror, e.originalId !== e.id && void 0 !== o[e.id] && void 0 !== o[e.id].customFuncBlocks) {
                                var a = o[e.id].customFuncBlocks;
                                for (var s in a)
                                    if (a.hasOwnProperty(s)) {
                                        var c = a[s];
                                        window["".concat("MarketGidC").concat(c, "Block").concat(1014592)].call(window["".concat("MarketGidInfC1014592")], window["".concat("MarketGidInfC1014592")]), window["".concat("MarketGidInfC1014592")].funcBlocks["".concat(c)] = "".concat("MarketGidC").concat(c, "Block").concat(1014592)
                                    }
                            }
                            e.MarketGidLoadNews(n, r)
                        }, e.context[i.informer_prefix + "CReject" + t] = e.MarketGidReject
                    }(n)
                }()
            }
        }, e.getSubnetByMirror = function(t) {
            var i = 0;
            return void 0 !== e.subnetMirrorNames[t] && (i = e.subnetMirrorNames[t]), i
        }
    }
}, function(e, t, i) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    window.MarketGidCAdvertLinkBlock1014592 = function(e) {
        e.beforeLoadNewsHooks.push("refreshAdvertLink"), e.afterLoadNewsHooks.push("initAdvertPopup"), e.getAdvertLinkValue = function() {
            return parseInt(3)
        }, e.removeElements = function(e) {
            for (var t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
        }, e.refreshAdvertLink = function() {
            var t = e.getAdvertLinkValue();
            if (t) try {
                var i = e.subnetMirrorsAdLinkBlocks[e.currentSubnet].replace(/%id/g, e.id),
                    n = "";
                n = "Promoted Content";
                var r = navigator.language.substr(0, 2),
                    o = -1 !== ["es", "vi", "hi", "ru", "uk"].indexOf(r) ? r : "";
                0, i = (i = (i = (i = (i = i.replace("%WIDGET_TITLE%", n)).replace("%lang/", "" === o ? "" : o + "/")).replace(/\((\'|\")?\/\//g, "($1" + e.webProtocol + "//")).replace('src="//', 'src="' + e.webProtocol + "//")).replace('href="//', 'href="' + e.webProtocol + "//");
                var a = "";
                if ("" === a) {
                    a = e.subnetMirrorsUtm[e.currentSubnet];
                    var s = e.context.document.location.hostname;
                    if (e.context !== e.context.top) {
                        var c = e.context.document.referrer.match(/:\/\/(.[^/]+)/);
                        null !== c && (s = c[1])
                    }
                    a = a.replace("{domain}", s)
                }
                e.tickerPrefix = i.replace(/%utm/, a);
                var l = document.createElement("div");
                if (1 === t) return;
                l.innerHTML = e.tickerPrefix, 2 === t && e.removeElements(l.getElementsByClassName("mg_addad" + e.id)), 3 === t && e.removeElements(l.getElementsByClassName("mghead")), e.tickerPrefix = l.innerHTML
            } catch (e) {} else e.tickerPrefix = ""
        }, e.parseAdvertLink = function(t) {
            var i = "\x3c!--advertPrefix--\x3e",
                n = t.indexOf(i) > t.length / 2;
            return n && (e.fixGetElementsByClassNameHandler(e.root), e.removeElements(e.root.getElementsByClassName("mg_addad" + e.id))), (n || 0 === e.countLoadBlocks) && (t = t.indexOf(i) >= 0 ? t.replace(i, this.tickerPrefix) : e.tickerPrefix + t), t
        }, e.initAdvertPopup = function() {
            if (e.context.top === e.context.self && "banner" !== e.widgetConstructorData.type && "exit-pop-up" !== e.widgetConstructorData.type && -1 !== ["tablet", "desktop"].indexOf(e.deviceType) && void 0 === e.context._mgDisableAdvertPopup && n("MarketGidC") + "ConstructorBlock1014592" != "function") {
                var t = e.root.querySelector(".mg_addad" + e.id);
                t && t.addEventListener("click", e.showAdvertPopup)
            }
        }, e.showAdvertPopup = function(t) {
            var i = e.findClosest(t.target, "[data-advert-url]");
            if (!i) return null;
            t.preventDefault();
            var n = (void 0 !== e.realRoot ? e.realRoot : e.root).parentNode,
                r = n.querySelector("._mgAdvertPopupC1014592"),
                o = n.querySelector("._mgPopupInner"),
                a = function e(t, i, n) {
                    if (!(n <= 0)) {
                        var r = (i - t.scrollTop) / n * 10;
                        setTimeout((function() {
                            t.scrollTop = t.scrollTop + r, t.scrollTop !== i && e(t, i, n - 10)
                        }), 10)
                    }
                };
            if (!r) {
                for (var s = e.htmlToElements('<style>\n    ._mgAdvertPopupC1014592 {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0px;\n        left: 0px;\n        font-family: "PTSans", Arial, sans-serif;\n        font-size: 16px;\n        color: #696969;\n        line-height: 1.3;\n        z-index: 999;\n\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    ._mgAdvertPopupC1014592 iframe {\n        width: 100%;\n        height: 377px;\n    }\n    ._mgAdvertPopupC1014592 ._mgPopupShadow {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        opacity: 0.4;\n        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";\n        z-index: 1;\n    }\n    ._mgAdvertPopupC1014592 ._mgPopupInner {\n        position: relative;\n        top: 50%;\n        margin-left: -375px;\n        left: 50%;\n        padding: 36px;\n        width: 750px;\n        background-color: #f8f8f8;\n        z-index: 2;\n\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    ._mgAdvertPopupC1014592 ._mgPopupInner.fixPop {\n        position: absolute!important;\n        top: 30px!important;\n        margin-top: 0!important;\n    }\n    ._mgAdvertPopupC1014592 ._mgClosePopup {\n        position: absolute;\n        overflow: hidden;\n        top: 5px;\n        right: 5px;\n        height: 21px;\n        width: 21px;\n        text-indent: -9999px;\n        background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center;\n        background-color: transparent;\n    }\n    ._mgAdvertPopupC1014592 ._mgClosePopup:hover {\n        background-color: #dfdfdf;\n    }\n</style>\n\n<div class="_mgAdvertPopupC1014592">\n    <div class="_mgPopupShadow"></div>\n    <div class="_mgPopupInner">\n        <a href="#" class="_mgClosePopup" title="Close"></a>\n        <iframe frameborder="0"></iframe>\n    </div>\n</div>'), c = 0; c < s.length; c++) n.appendChild(s[c]);
                if (!(r = n.querySelector("._mgAdvertPopupC1014592"))) return !1;
                o = r.querySelector("._mgPopupInner");
                var l = r.querySelector("._mgPopupShadow");
                o.style.marginTop = -o.clientHeight / 2 + "px", l.addEventListener("click", (function(t) {
                    null == e.findClosest(t.target, "._mgPopupInner") && r.setAttribute("style", "display: none")
                }));
                var d = r.querySelector("._mgClosePopup");
                d && d.addEventListener("click", (function(e) {
                    e.preventDefault(), r.setAttribute("style", "display: none")
                }));
                var u = r.querySelector("iframe");
                u.setAttribute("src", i.getAttribute("data-advert-url"));
                var h = e.context.addEventListener ? "addEventListener" : "attachEvent";
                (0, e.context[h])("attachEvent" == h ? "onmessage" : "message", (function(t) {
                    var i = t.message ? "message" : "data",
                        n = JSON.parse(t[i]);
                    if (void 0 === n.target || "correct-popup-height" !== n.target) return !0;
                    u.style.height = n.height + "px", n.safariIPad && (n.keyboard ? (a(e.context.document.body, 0, 500), o.classList.add("fixPop")) : o.classList.remove("fixPop")), o.style.marginTop = -o.clientHeight / 2 + "px"
                }), !1)
            }
            r.setAttribute("style", "display: block"), o.className.indexOf("fixPop") >= 0 && a(e.context.document.body, 0, 500)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = null;
        e.log = function(i) {
            null === t && "1" == e.getQueryParameterByName("mgwdebug") && (t = !0), t && console.log("WIDGET_".concat(1014592, "_").concat(e.uniqId), i)
        }
    }
}, function(e, t, i) {
    window.MarketGidCInternalExchangeBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("initIntExchangeLabels"), e.initIntExchangeLabels = function() {
            if (-1 !== e.enabledCooperationTypes.indexOf("int_exchange") || "3" === e.currentSubnet)
                for (var t = function(e) {
                        for (var t = [], i = [e]; i.length > 0;)
                            for (var n = i.pop(), r = 0; r < n.childNodes.length; r++) {
                                var o = n.childNodes[r];
                                o.nodeType === Node.COMMENT_NODE ? t.push(o) : i.push(o)
                            }
                        return t
                    }(e.root), i = 0; i < t.length; i++) {
                    var n = t[i],
                        r = e.findClosest(n, ".mgline");
                    if (r && -1 !== r.className.indexOf("type-w")) {
                        var o = e.context.document.createElement("IMG");
                        o.setAttribute("height", 20), "intExchangeWagesImagePlace" === n.data && (o.className = "mcimgad", o.src = e.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_ad.svg");
                        var a = r.querySelector("a"),
                            s = a["data-hash"] || a.getAttribute("data-hash");
                        s && e.teaserData[s] && e.teaserData[s].source && "intExhangeWagesSourcePlace" === n.data && (o.className = "mcimgsrc", o.src = e.webProtocol + "//cdn.mgid.com/images/mgid/int_exchange_wages_src.svg"), o.src && n.parentNode.replaceChild(o, n)
                    }
                }
        }
    }
}, function(e, t) {
    window.MarketGidCColorBlock1014592 = function(e) {
        e.colorAverage = function(e) {
            var n = {
                r: 0,
                g: 0,
                b: 0
            };
            return fetch(e, {
                mode: "cors"
            }).then((function(e) {
                return e.arrayBuffer()
            })).then((function(e) {
                e = "data:image/png;base64," + (e = btoa(new Uint8Array(e).reduce((function(e, t) {
                    return e + String.fromCharCode(t)
                }), "")));
                return new Promise((function(r) {
                    var o = new Image;
                    o.src = e, o.onload = function() {
                        var e = document.createElement("canvas");
                        e.width = 32, e.height = 32;
                        var a = e.getContext("2d");
                        a.drawImage(o, 0, 0, 32, 32);
                        for (var s = a.getImageData(0, 0, 32, 32), c = -4, l = 0;
                            (c += 4) < s.data.length;) ++l, n.r += s.data[c], n.g += s.data[c + 1], n.b += s.data[c + 2];
                        n.r = Math.floor(n.r / l), n.g = Math.floor(n.g / l), n.b = Math.floor(n.b / l);
                        var d = t(n.r, n.g, n.b);
                        d.l > .8 && (n = i(d.h, d.s, .8)), r(n)
                    }
                }))
            }))
        };
        var t = function(e, t, i) {
                e /= 255, t /= 255, i /= 255;
                var n, r, o = Math.max(e, t, i),
                    a = Math.min(e, t, i),
                    s = (o + a) / 2;
                if (o == a) n = r = 0;
                else {
                    var c = o - a;
                    switch (r = s > .5 ? c / (2 - o - a) : c / (o + a), o) {
                        case e:
                            n = (t - i) / c + (t < i ? 6 : 0);
                            break;
                        case t:
                            n = (i - e) / c + 2;
                            break;
                        case i:
                            n = (e - t) / c + 4
                    }
                    n /= 6
                }
                return {
                    h: n,
                    s: r,
                    l: s
                }
            },
            i = function(e, t, i) {
                var n, r, o;
                if (0 == t) n = r = o = i;
                else {
                    var a = function(e, t, i) {
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
                        },
                        s = i < .5 ? i * (1 + t) : i + t - i * t,
                        c = 2 * i - s;
                    n = a(c, s, e + 1 / 3), r = a(c, s, e), o = a(c, s, e - 1 / 3)
                }
                return {
                    r: Math.floor(255 * n),
                    g: Math.floor(255 * r),
                    b: Math.floor(255 * o)
                }
            }
    }
}, function(e, t) {
    window.MarketGidCUtilsBlock1014592 = function(e) {
        e.utils = {}, e.utils.getScroll = function() {
            var t = e.utils.getWindow();
            return {
                top: t.document.body.scrollTop || t.document.documentElement.scrollTop || 0,
                left: t.document.body.scrollLeft || t.document.documentElement.scrollLeft || 0
            }
        }, e.utils.getRect = function(t, i) {
            var n = t.getBoundingClientRect(),
                r = {
                    top: n.top,
                    bottom: n.bottom,
                    left: n.left,
                    right: n.right,
                    height: n.height ? n.height : n.bottom - n.top,
                    width: n.width ? n.width : n.right - n.left
                };
            if (e.context.self !== e.context.top) {
                var o = e.utils.getFrame();
                if (o) {
                    var a = o.getBoundingClientRect();
                    r.top += a.top, r.bottom += a.top, r.left += a.left, r.right += a.left
                }
            }
            if (i) {
                var s = e.utils.getScroll();
                r.top += s.top, r.bottom += s.top, r.left += s.left, r.right += s.left
            }
            return r
        }, e.utils.getViewportSize = function() {
            var t = e.utils.getWindow();
            return {
                width: t.innerWidth || t.document.documentElement.clientWidth,
                height: t.innerHeight || t.document.documentElement.clientHeight
            }
        };
        var t = void 0;
        e.utils.getWindow = function() {
            if (void 0 === t) {
                var i = e.context;
                if (e.context.parent != e.context.self) try {
                    void 0 !== e.context.top.document && (i = e.context.top)
                } catch (e) {}
                t = i
            }
            return t
        };
        var i = void 0;
        e.utils.getFrame = function() {
            if (void 0 === i) try {
                var t = e.context;
                for (t.frameElement; t.frameElement; t = t.parent) t.frameElement;
                i = frame
            } catch (e) {
                i = null
            }
            return i
        }
    }
}, function(e, t, i) {
    window.MarketGidCMonitorBlock1014592 = function(e) {
        this.afterLoadNewsHooks.push("monitorInit"), this.shownBlocks = {}, this.monitorTimeout = null, this.isFirstByType = {}, this.isFirstByCid = {}, this.monitorInit = function() {
            if ("function" != typeof e.VisData) {
                var t = !0,
                    i = e.context.self;
                try {
                    e.context.self !== e.context.top && e.context.top.location.href && (i = e.context.top)
                } catch (e) {
                    t = !1
                }
                e.VisData = function() {
                    try {
                        if (!t) return function(e) {
                            return !e || {
                                extTf: !1
                            }
                        };
                        var n, r, o = {
                            hidden: "visibilitychange",
                            webkitHidden: "webkitvisibilitychange",
                            mozHidden: "mozvisibilitychange",
                            msHidden: "msvisibilitychange"
                        };
                        for (n in o)
                            if (n in document) {
                                r = o[n];
                                break
                            } var a, s, c, l, d, u = -1,
                            h = -1,
                            f = -1,
                            p = 1,
                            m = !1,
                            g = "function" == typeof document.hasFocus ? function() {
                                var e = i.document.hasFocus();
                                e != p && (a = (new Date).getTime()), m |= e, p = e
                            } : function() {
                                p = 1
                            };
                        setInterval(g, 100), e.addEvent(i.document, r, (function() {
                            i.document[n] ? u = 0 : setTimeout((function() {
                                u = 1
                            }), 100), d = (new Date).getTime()
                        })), e.addEvent(i.document, "mouseleave", (function() {
                            f = 0, s = (new Date).getTime()
                        })), e.addEvent(i.document, "mouseenter", (function() {
                            f = 1, s = (new Date).getTime()
                        })), e.addEvent(i.document, "touchmove", (function() {
                            f = 2, s = (new Date).getTime()
                        }));
                        var v = 0;
                        e.addEvent(i.document, "keydown", (function() {
                            v = 1, c = (new Date).getTime()
                        }));
                        var y = 0,
                            b = 0;
                        e.addEvent(i.document, "click", (function(e) {
                            b = 1, y = (new Date).getTime();
                            for (var t = e.target; t.parentElement;) {
                                if ("A" === t.tagName) {
                                    b = 2;
                                    break
                                }
                                t = t.parentElement
                            }
                        })), e.addEvent(i, "blur", (function() {
                            h = "IFRAME" == i.document.activeElement.tagName ? 2 : 0, l = (new Date).getTime()
                        })), e.addEvent(i, "focus", (function() {
                            h = 1, l = (new Date).getTime()
                        }));
                        var k = 0,
                            w = null,
                            x = function() {
                                w = (new Date).getTime(), k = 1
                            };
                        i.document.addEventListener ? (i.document.addEventListener("mousewheel", x, !1), i.document.addEventListener("DOMMouseScroll", x, !1)) : i.document.attachEvent("onmousewheel", x);
                        var C = 0;
                        try {
                            var E = new Image;
                            E.__defineGetter__("id", (function() {
                                C = 1
                            })), console.debug(E)
                        } catch (e) {
                            C = -1
                        }
                        return function(e) {
                            g();
                            var t = p && (0 !== u || 0 !== h || -1 !== f || k);
                            if (e) {
                                var i = {
                                        extVs: t,
                                        extTv: u,
                                        extWv: h,
                                        extMa: f,
                                        extHf: p,
                                        extCl: b,
                                        extKp: v,
                                        extMw: k,
                                        extDg: C,
                                        extFt: m
                                    },
                                    n = (new Date).getTime();
                                return y && (i.extClt = n - y), w && (i.extMwt = n - w), l && (i.extWvt = n - l), s && (i.extMat = n - s), d && (i.extTvt = n - d), a && (i.extHft = n - a), c && (i.extKpt = n - c), i
                            }
                            return t
                        }
                    } catch (e) {
                        return function(e) {
                            return !e || {}
                        }
                    }
                }()
            }
            var n = /([A-Za-z0-9\-_\*]{64})/,
                r = parseFloat('{"capping_observer_threshold":"0.5","current_language":"en","timer_toaster_inactivity":"8","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10"}'.capping_observer_threshold);
            if ((!r || r <= 0 || r > 1 || Number(r) != r) && (r = .9), "function" == typeof IntersectionObserver && 3 === e.servicerData.cv) {
                var o = 0,
                    a = 0,
                    s = [],
                    c = null,
                    l = function() {
                        for (var t = 0, i = 0; i < s.length; i++)
                            if (s[i])
                                if (s[i].dataset.shown) t++;
                                else if (s[i].dataset.observeStart > 0) {
                            var n = parseFloat(s[i].dataset.observeTime) + ((new Date).getTime() - s[i].dataset.observeStart);
                            n > 1e3 && (e.intersectionObserver.unobserve(s[i]), e.intersectionObserver.observe(s[i]))
                        }
                        t < o && setTimeout(arguments.callee, 100)
                    };
                if (!e.intersectionObserver) {
                    e.intersectionObserver = new IntersectionObserver((function(t) {
                        for (var i = {}, n = 0, o = function(o) {
                                var a, s = t[o];
                                if (!s.target.dataset.i || s.target.dataset.shown) return "continue";
                                if (s.target.width + s.target.height == 0) return e.intersectionObserver.unobserve(s.target), a = s.target, setTimeout((function() {
                                    e.intersectionObserver.observe(a)
                                }), 100), "continue";
                                if (s.intersectionRatio >= r)
                                    if (0 == s.target.dataset.observeStart) s.target.dataset.observeStart = (new Date).getTime();
                                    else {
                                        var c = (new Date).getTime() - s.target.dataset.observeStart;
                                        s.target.dataset.observeTime = parseFloat(s.target.dataset.observeTime) + c
                                    }
                                else s.target.dataset.observeTime = 0, s.target.dataset.observeStart = 0;
                                s.target.dataset.observeTime >= 1e3 && (s.target.dataset.shown = 1, e.intersectionObserver.unobserve(s.target), i[s.target.dataset.i] = e.getTeaserCappingData(s.target), n++)
                            }, a = 0; a < t.length; a++) o(a);
                        n && e.prepareCappingData(i, e.servicerData.cv)
                    }), {
                        threshold: [0, r, 1]
                    })
                }
                var d = [],
                    u = null,
                    h = function() {
                        c || (c = setTimeout(l, 100)), u = null;
                        for (var t = d.pop(); t; t = d.pop()) e.intersectionObserver.observe(t)
                    },
                    f = function(e) {
                        d.push(e), s.push(e), o++, u && clearTimeout(u), o < a ? u = setTimeout(h, 100) : h()
                    };
                ! function() {
                    var t = e.root.getElementsByClassName("mgline");
                    if (t.length)
                        for (var i = 0; i < t.length; i++)
                            if (!t[i].dataset.observing) {
                                var r = n.exec(t[i].dataset.i);
                                r && r[1] ? function() {
                                    t[i].dataset.observeTime = 0, t[i].dataset.observeStart = 0, t[i].dataset.observing = "yes";
                                    var n, r, o = t[i].querySelectorAll("img.mcimg");
                                    o.length > 0 ? (n = t[i], r = new Image, e.addEvent(r, "load", (function() {
                                        f(n)
                                    })), e.addEvent(r, "error", (function() {
                                        f(n)
                                    })), r.src = o[0].src) : f(t[i]), a++
                                }() : t[i].dataset.observing = "no"
                            }
                }()
            } else this.monitorTimeout || function() {
                for (var t, i = {}, o = e.root.getElementsByClassName("mgline"), a = [], s = 0; s < o.length; s++) {
                    var c = n.exec(o[s].dataset.i);
                    c && c[1] && !e.shownBlocks[o[s].dataset.i] && (o[s].dataset.observing ? a.push(o[s]) : (t = void 0, (t = o[s].querySelectorAll("img.mcimg")).length > 0 ? function(i) {
                        var n = new Image;
                        e.addEvent(n, "load", (function() {
                            i.dataset.observing = "yes"
                        })), e.addEvent(n, "error", (function() {
                            i.dataset.observing = "yes"
                        })), n.src = t[0].src
                    }(o[s]) : o[s].dataset.observing = "yes"))
                }
                for (var l = 0; l < a.length; l++) {
                    var d = a[l];
                    e.elementViewportIntersection(d) >= r && (i[d.dataset.i] = e.getTeaserCappingData(d))
                }
                e.prepareCappingData(i, "2"), e.monitorTimeout = setTimeout(arguments.callee, 1e3)
            }()
        }, this.getTeaserImageDims = function(t) {
            if (t) {
                var i = t.querySelectorAll("img.mcimg");
                if (i.length > 0) return e.utils.getRect(i[0], !1)
            }
            return {
                width: 0,
                height: 0
            }
        }, this.getTeaserCappingData = function(t) {
            var i = e.utils.getRect(t, !0),
                n = e.getTeaserImageDims(t);
            return {
                width: Math.round(n.width),
                height: Math.round(n.height),
                atf: i.top < e.utils.getViewportSize().height,
                align: e.getTeaserAlign(i),
                desc: e.isTeaserElementVisible(t, "mcdesc"),
                price: e.isTeaserElementVisible(t, "mcprice"),
                domain: e.isTeaserElementVisible(t, "mcdomain")
            }
        }, this.prepareCappingData = function(t, i) {
            var n = [],
                r = [],
                o = [],
                a = [];
            for (var s in t) {
                var c = s;
                if (!e.shownBlocks[c]) {
                    var l = t[s].width + "|" + t[s].height + "|" + ((t[s].desc ? 1 : 0) + (t[s].price ? 2 : 0) + (t[s].domain ? 4 : 0) + (t[s].atf ? 8 : 0) + ("right" == t[s].align ? 16 : 0) + ("left" == t[s].align ? 32 : 0)) + "|";
                    if (c && e.teaserData[c]) {
                        e.shownBlocks[c] = 1;
                        var d = e.teaserData[c].coopType;
                        e.teaserData[c].ch && e.teaserData[c].ccid && e.teaserData[c].cdomain && (a = (o = e.prepareMultiCappingData(o, c, l, d, i)).counter)[d][e.teaserData[c].cdomain] > 20 && (e.multiSendCappingData(o[d]), o[d] = [], a = []), (r = (n = e.prepareSingleCappingData(n, c, l, d, i)).counter)[d] > 20 && (e.sendCappingData(n[d]), n[d] = "", r[d] = 0);
                        var u = e.teaserData[c].imp;
                        for (var h in u) e.sendCustomCounter(u[h]);
                        "w" === d && e.sspDoubleClickHash.push(c), e.processHooks("afterPrepareCappingDataHooks", [c])
                    }
                }
            }
            for (var f in r) r[f] > 0 && e.sendCappingData(n[f]);
            for (var p = 0, m = Object.keys(a); p < m.length; p++) {
                var g = a[m[p]];
                Object.keys(a[g]).length > 0 && e.multiSendCappingData(o[g])
            }
        }, this.sensorsToJsFlags = function() {
            var t = 0;
            try {
                var i = e.VisData(!0);
                if (i) {
                    if (!1 === i.extTf) return 3;
                    1 === i.extVs && (t = 1), i.extHf && (t += 2), i.extWv < 0 ? t += 12 : i.extWv < 3 && (t += i.extWv << 2), i.extTv < 0 ? t += 48 : i.extTv < 3 && (t += i.extTv << 4), i.extMa < 0 ? t += 192 : i.extMa < 3 && (t += i.extMa << 6), i.extCl > 0 && i.extCl < 3 && (t += i.extCl << 8), 1 == i.extMw && (t += 1024), 1 == i.extKp && (t += 2048), 0 != i.extDg && (t += 4096), 2 != i.extMa && 1 == i.extMw && i.extMwt < 1500 && (t += 8192), Number(i.extHft) === i.extHft && i.extHft >= 0 && i.extHft < 1500 && (!i.extWvt || i.extWvt < 1500) && (!i.extTvt || i.extTvt < 1500) && (t += 16384), i.extFt && (t += 32768), t <<= 1
                }
            } catch (e) {
                t = 1
            }
            return t
        }, this.prepareMultiCappingData = function(t, i, n, r, o) {
            var a = e.teaserData[i].cdomain,
                s = e.teaserData[i].ch,
                c = e.teaserData[i].ccid,
                l = "pv=" + o;
            return -1 == l.indexOf("extjs") && (l += "&extjs=" + this.sensorsToJsFlags()), void 0 === t[r] && (t[r] = [], void 0 === t.counter && (t.counter = []), void 0 === t.counter[r] && (t.counter[r] = [])), void 0 === t[r][a] && (t[r][a] = [], t.counter[r][a] = 0), void 0 === t[r][a][c] && (t[r][a][c] = ""), l += "&v=" + n + s, ("0" == o || e.isFirstByType[r + c]) && e.isFirstByCid[r + c] || (l += "&f" + r + "=1", e.isFirstByType[r + c] = 1, e.isFirstByCid[r + c] = 1), t[r][a][c] += l, t.counter[r][a]++, t
        }, this.prepareSingleCappingData = function(t, i, n, r, o) {
            return void 0 === t[r] && (t[r] = "pv=" + o, void 0 === t.counter && (t.counter = [])), void 0 === t.counter[r] && (t.counter[r] = 0), t[r] += "&v=" + n + i, "0" == o || e.isFirstByType[r] || (t[r] += "&f" + r + "=1", e.isFirstByType[r] = 1), -1 == t[r].indexOf("extjs") && (t[r] += "&extjs=" + this.sensorsToJsFlags()), t.counter[r]++, t
        }, this.multiSendCappingData = function(t) {
            for (var i in t)
                if (t.hasOwnProperty(i))
                    for (var n in t[i])
                        if (t[i].hasOwnProperty(n)) {
                            var r = t[i][n] + "&cid=" + n;
                            e.sendCappingData(r, i)
                        }
        }, this.sendCappingData = function(t, i) {
            var n = document.createElement("IMG"),
                r = t.search("&cid="),
                o = t.search("pv=0&") >= 0;
            if (t += "&imgdim=1", -1 != r) t.substr(r + 5).split("&")[0];
            o ? "undefined" == typeof cid && (t += "&cid=" + e.id.toString()) : ((void 0 === e.context._mgwcapping || -1 == e.context._mgwcapping.indexOf(e.id.toString()) || "undefined" != typeof cid && -1 == e.context._mgwcapping.indexOf(cid.toString())) && (t = "f=1&" + t), e.context._mgwcapping = e.context._mgwcapping || [], "undefined" == typeof cid ? (t += "&cid=" + e.id.toString(), e.context._mgwcapping.push(e.id.toString())) : e.context._mgwcapping.push(cid)), e.servicerData && (e.servicerData.h2 && (t += "&h2=" + e.servicerData.h2), e.servicerData.rid && (t += "&rid=" + e.servicerData.rid), e.servicerData.tt && (t += "&tt=" + e.servicerData.tt), e.servicerData.ts && (t += "&ts=" + e.servicerData.ts), e.servicerData.psid && (t += "&psid=" + e.servicerData.psid));
            var a = e.getMostTopWindow();
            void 0 === a._mgPageImp525000 ? (a._mgPageImp525000 = !0, t += "&pageImp=1") : t += "&pageImp=0";
            try {
                if (e.context.localStorage) {
                    var s = e.context.localStorage.getItem("mgMuidn");
                    "string" == typeof s && s.length > 0 && (t += "&muid=" + s)
                }
            } catch (e) {}
            var c = e.webProtocol + "//";
            c += void 0 !== i ? i : "c.mgid.com", t += "&" + e.getCbusterParameter(), t += "&tpl=" + e.templateId, n.src = c + "/c?" + t, e.processHooks("afterSendCappingHooks")
        }, this.elementViewportIntersection = function(t) {
            var i = e.utils.getRect(t, !0);
            for (var n in i) i.hasOwnProperty(n) && (i[n] = Math.floor(i[n]));
            var r = e.utils.getViewportSize(),
                o = e.utils.getScroll();
            r.top = o.top, r.bottom = o.top + r.height, r.left = o.left, r.right = o.left + r.width;
            var a = i.width * i.height;
            return a ? Math.max(0, Math.min(i.right, r.right) - Math.max(i.left, r.left)) * Math.max(0, Math.min(i.bottom, r.bottom) - Math.max(i.top, r.top)) / a : 0
        }, this.getParentTeaserBlock = function(t) {
            for (var i = t; i != e.root && i != e.context;) {
                if (i.className.indexOf("mgline") >= 0) return i;
                i = i.parentNode
            }
            return null
        }, this.isTeaserElementVisible = function(t, i) {
            e.fixGetElementsByClassNameHandler(t);
            var n = t.getElementsByClassName(i);
            if (n.length > 0) {
                var r = n[0].getBoundingClientRect();
                return r.right - r != 0 && r.bottom - r.top != 0
            }
            return !1
        }, this.getTeaserAlign = function(t) {
            var i = e.context.document.body.scrollWidth;
            return t.right < .3 * i ? "left" : t.left >= .7 * i ? "right" : "center"
        }, this.sendCustomCounter = function(e) {
            document.createElement("img").src = e
        }
    }
}, function(e, t) {
    window.MarketGidCChangeColorBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("changeColorButton"), e.changeColorButton = function() {
            "function" == typeof fetch && e.root.querySelectorAll("img.mcimg").forEach((function(t) {
                var i = e.findClosest(t, ".mgline");
                i && e.colorAverage(t.src).then((function(e) {
                    var t = "rgb(" + e.r + "," + e.g + "," + e.b + ")";
                    i.querySelector(".mglbtn a").style.background = t, i.querySelector(".mcdomain a").style.color = t
                })).catch((function(e) {}))
            }))
        }
    }
}, function(e, t) {
    window.MarketGidCSmartDoubleClickBlock1014592 = function(e) {
        e.isDisabledDoubleClick = !1;
        var t = JSON.parse("null");
        if (t) {
            var i = {
                    undefined: -1,
                    desktop: 1,
                    mobile: 2,
                    tablet: 3,
                    smarttv: 4
                },
                n = 0,
                r = e.getCurrentTimestamp(),
                o = [function(t) {
                    return s(t, "device", i[e.deviceType] || "")
                }, function(t) {
                    return s(t, "browser", e.browserId)
                }, function(t) {
                    return s(t, "click_time", e.getCurrentTimestamp() - r)
                }, function(t) {
                    return s(t, "width", e.root.offsetWidth)
                }, function(t) {
                    return s(t, "height", e.root.offsetHeight)
                }, function(t) {
                    return s(t, "click_y", e.root.mouseY)
                }, function(t) {
                    return s(t, "click_x", e.root.mouseX)
                }, function(t) {
                    return s(t, "hw_ratio", e.root.offsetHeight / e.root.offsetWidth)
                }],
                a = function(e) {
                    var t = 0;
                    for (var i in o)
                        if (o[i]) {
                            var n = o[i](e);
                            if (!1 === n) return !1;
                            t += n
                        } return t / Object.keys(e).length
                },
                s = function(e, t, i) {
                    return e.hasOwnProperty(t) ? (e[t].hasOwnProperty("value") && i === e[t].value || !!(e[t].hasOwnProperty("min") && i >= e[t].min && i <= e[t].max)) && e[t].percent : 0
                };
            e.onSmartDoubleClickHandler = function() {
                var i = e.random(1, 100),
                    r = function() {
                        for (var e in t)
                            if (t[e]) {
                                var i = a(t[e]);
                                if (!1 !== i) return n = e, i
                            } return n = 0, 100
                    }();
                return e.isDisabledDoubleClick = r < i, e.doubleClickCheckId = e.isDisabledDoubleClick ? 0 : n, !0
            }, e.smartDoubleClickHook = function() {
                e.addClickHandler(e.clickHandlerList.onSmartDoubleClick.handler, e.clickHandlerList.onSmartDoubleClick.priority)
            }, e.afterInjectScriptHooks.push("smartDoubleClickHook")
        }
    }
}, function(e, t) {
    window.MarketGidCRejectBlock1014592 = function(e) {
        e.isInsertedRejectStyles = !1, e.MarketGidReject = function() {
            var t = e.subnetDashboardDomains[e.getSubnetByMirror(10)];
            e.fixGetElementsByClassNameHandler(e.root);
            for (var i = e.root.getElementsByClassName("mgline"), n = 0; n < i.length; n++) ! function(i) {
                if (!(i.className.indexOf("dsp") >= 0)) {
                    e.fixGetElementsByClassNameHandler(i);
                    for (var n = i.getElementsByClassName("mcimg"), r = !1, o = 0; o < n.length; o++)
                        if ("DIV" == n[o].tagName) {
                            r = n[o];
                            break
                        } if (r) {
                        e.fixGetElementsByClassNameHandler(r);
                        var a = r.getElementsByClassName("close-informer"),
                            s = i.className.match(/teaser-([0-9]+)/);
                        if (null != s) {
                            var c = i.className.match(/type-(w|e|i)/);
                            if (null != c && "i" != c[1] && 0 == a.length) {
                                var l = t;
                                l += "/publisher/blocked";
                                var d = e.context.document.createElement("a"),
                                    u = e.context.getComputedStyle(r);
                                d.className = "close-informer", d.href = l + "/teaser/" + s[1] + "/widget/" + ("w" == c[1] ? "57349495/type/goods" : "0/type/news"), d.target = "_blank", d.rel = "nofollow", d.style.top = parseInt(u.borderTopWidth) + 3 + "px", d.style.right = parseInt(u.borderRightWidth) + 3 + "px", r.style.position = "relative", r.appendChild(d)
                            }
                        }
                    }
                }
            }(i[n])
        }, e.initRejectStyles = function() {
            if (!e.isInsertedRejectStyles) {
                e.addStyle("reject", '\ndiv.mcimg a.close-informer {\nwidth: 14px;\nheight: 14px;\nbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\ndisplay: block;\nopacity: 0;\nposition: absolute;\nright: 3px;\ntop: 3px;\nz-index: 1;\ncursor: pointer;\n}\ndiv.mgline:hover a.close-informer {\nopacity: 0.7;\n-moz-transition: all 0.3s ease-out;\n-o-transition: all 0.3s ease-out;\n-webkit-transition: all 0.3s ease-out;\n-ms-transition: all 0.3s ease-out;\ntransition: all 0.3s ease-out;\n}\ndiv.mgline a.close-informer:hover {\nopacity: 1;\n-moz-transition: all 0.3s ease-out;\n-o-transition: all 0.3s ease-out;\n-webkit-transition: all 0.3s ease-out;\n-ms-transition: all 0.3s ease-out;\ntransition: all 0.3s ease-out;\n}\ndiv.mcimg {\nposition: relative;\ndisplay: inline-block;\n}\ndiv.image-with-price {\nposition: relative;\n}\n.mgline .image-container {\nwidth: auto;\nmargin: 0 auto;\nposition: relative;\n}'), e.isInsertedRejectStyles = !0
            }
        }, e.beforeLoadNewsHooks.push("initRejectStyles")
    }
}, function(e, t, i) {
    window.MarketGidCCriteoBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("initCriteoHandlers"), e.initCriteoHandlers = function() {
            var t = "LoadCriteoAllPlaces" + e.id;
            "" !== e.uniqId && (t += "_" + e.uniqId), e.context[t] = e.LoadCriteoAllPlaces
        }, e.LoadCriteoAllPlaces = function(t) {
            e.criteoNurl = t.l;
            var i = e.context.document.createElement("script");
            e.criteoParams = t.pos, i.type = "text/javascript", i.async = "async", i.src = "https://static.criteo.net/js/ld/publishertag.js";
            var n = e.context.document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n), e.context.Criteo = e.context.Criteo || {}, e.context.Criteo.events = e.context.Criteo.events || [], e.context.Criteo.events.push((function() {
                var i = {
                    placements: [{
                        slotid: e.root.id,
                        zoneid: t.z,
                        nativeCallback: function(t) {
                            e.ProcessCriteo(t)
                        }
                    }]
                };
                e.context.Criteo.Passback.RequestBids(i, 1500)
            })), e.context.Criteo.events.push((function() {
                e.context.Criteo.Passback.RenderAd({
                    adUnit: e.root.id,
                    passback: function(e) {}
                })
            }))
        }, e.ProcessCriteo = function(t) {
            var i;
            e.countLoadBlocks = 0, e.root.innerHTML = "", e.addStyle("criteo", e.styles), e.iteration = 1;
            var n = [],
                r = e.json,
                o = "";
            "advertiser" in t && "domain" in t.advertiser && (o = t.advertiser.domain);
            var a = t.products.length;
            for (i = 0; i < a; i++) e.criteoPlacement = i, void 0 !== r[i] && (r[e.criteoPlacement][0] = o, r[e.criteoPlacement][1] = i + 1, r[e.criteoPlacement][3] = t.products[i].title, r[e.criteoPlacement][4] = t.products[i].description, r[e.criteoPlacement][7] = t.products[i].price, r[e.criteoPlacement][8] = "", r[e.criteoPlacement][10].i = e.webProtocol + "//imggprx.mgid.com/i/resize?img=" + encodeURIComponent(t.products[i].image.url) + "&size=46", r[e.criteoPlacement][10].l = e.criteoParams[i] + "&u=" + e.tox64String(t.products[i].click_url, !0), r[e.criteoPlacement][10].adc = [], n.push(e.teaserHashes[r[i].id]));
            for (e.MarketGidLoadNews(r), i = 0; i < a; i++)
                if (e.criteoPlacement = i, void 0 !== r[i] && t.hasOwnProperty("privacy") && t.privacy.hasOwnProperty("optout_click_url") && t.privacy.hasOwnProperty("optout_image_url")) {
                    var s = e.root.getElementsByClassName("mgline")[e.criteoPlacement].getElementsByClassName("mcimg")[0],
                        c = e.context.document.createElement("DIV");
                    c.style.position = "absolute", c.style.zIndex = "100", c.style.left = "90%", c.style.top = "0";
                    var l = e.context.document.createElement("A");
                    l.setAttribute("href", t.privacy.optout_click_url), l.setAttribute("target", "_blank");
                    var d = e.context.document.createElement("IMG");
                    if (d.setAttribute("src", t.privacy.optout_image_url), l.appendChild(d), c.appendChild(l), s.appendChild(c), t.hasOwnProperty("impression_pixels"))
                        for (var u in t.impression_pixels)
                            if (t.impression_pixels[u].hasOwnProperty("url")) {
                                var h = e.context.document.createElement("IMG");
                                h.src = t.impression_pixels[u].url, e.context.document.body.appendChild(h)
                            }
                } var f = e.context.document.createElement("IMG");
            f.src = e.criteoNurl + "&ads=" + n.join(","), e.context.document.body.appendChild(f)
        }
    }
}, function(e, t) {
    window.MarketGidCAmpRenderBlock1014592 = function(e) {
        e.ampResized = [], e.ampRenderStart = function() {
            e.context.context.renderStart({
                width: e.precalcRect.width,
                height: e.precalcRect.height
            })
        }, e.ampResize = function() {
            setTimeout((function() {
                var t = e.root.getBoundingClientRect();
                e.context.context.requestResize(t.width, t.height).then((function() {
                    e.ampResizeDenied = !1, e.updateSizeStatement(t.width, t.height)
                }), (function() {
                    e.ampResizeDenied = !0
                }))
            }), 100), void 0 === e.ampResizeInterval && (e.ampResizeInterval = setInterval((function() {
                var t = e.root.getBoundingClientRect();
                void 0 !== e.ampResizeDenied && e.ampResizeDenied ? e.context.context.requestResize(t.width, t.height) : Math.floor(t.width) === e.ampResized.width && Math.floor(t.height) === e.ampResized.height || e.context.context.requestResize(t.width, t.height)
            }), 100))
        }, e.isAmp = function() {
            return void 0 !== e.context.context && void 0 !== e.context.context.data && void 0 !== e.context.context.data.widget || void 0 !== e.context.boundingClientRect1014592 && void 0 !== e.context.intersectionRect1014592
        }, e.updateSizeStatement = function(t, i) {
            e.ampResized.width = t, e.ampResized.height = i
        }, e.isAmp() && (e.afterInitHooks.push("ampRenderStart"), e.afterLoadNewsHooks.push("ampResize"))
    }
}, function(e, t) {
    window.MarketGidCInternalExchangeLoggerBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("iExchangeLoggerInit"), e.internalExchangeLoggerHandler = function(t) {
            var i = t.getAttribute("data-hash");
            if (e.teaserData[i] && "i" == e.teaserData[i].coopType) {
                var n = document.createElement("IMG"),
                    r = "cid=" + e.id + "&tid=" + e.teaserData[i].id + "&h=" + i;
                void 0 !== e.servicerData.isBot && (r += "&bot=" + e.servicerData.isBot), void 0 !== e.servicerData.tt && (r += "&tt=" + e.servicerData.tt), void 0 !== e.servicerData.ts && (r += "&ts=" + e.servicerData.ts), void 0 !== e.servicerData.psid && (r += "&psid=" + e.servicerData.psid), void 0 !== e.servicerData.dt && (r += "&dt=" + e.servicerData.dt);
                var o = "//c.mgid.com/clie?" + (r += "&ce=" + t.parentNode.tagName + ("." + e.extractClass(t.parentNode)));
                n.src = e.webProtocol + o, n.onerror = function() {}
            }
            return !0
        }, e.iExchangeLoggerInit = function() {
            e.addClickHandler(e.clickHandlerList.internalExchangeLogger.handler, e.clickHandlerList.internalExchangeLogger.priority)
        }
    }
}, function(e, t, i) {
    window.MarketGidCMgqBlock1014592 = function(e) {
        this.isLongCheck = !1, this.afterInitHooks.push("mgqInit"), this.mgqWorker = function() {
            for (var t = e.context._mgq.length, i = e.context._mgq.slice(0), n = 0, r = 0; r < t; r++) {
                var o = i[r];
                if ("function" == typeof e.context[o[0]]) {
                    try {
                        e.context[o[0]].apply(e.context, o.slice(1))
                    } catch (t) {
                        e.log("mgq error: ".concat(t.message))
                    }
                    e.context._mgq.splice(r - n, 1), n++
                }
            }
            e.context._mgqi || (e.context._mgqi = e.context.setInterval((function() {
                e.mgqWorker()
            }), 5)), e.isLongCheck || (new Date).getTime() - e.context._mgqt > 1e4 && (e.isLongCheck = !0, e.context.clearInterval(e.context._mgqi), e.context._mgqi = e.context.setInterval((function() {
                e.mgqWorker()
            }), 100))
        }, this.mgqInit = function() {
            e.context._mgq = e.context._mgq || [], void 0 === e.context._mgqp && (e.context._mgqp = e.mgqWorker, e.context._mgqt = (new Date).getTime(), e.mgqWorker())
        }
    }
}, function(e, t) {
    window.MarketGidCStylesheetsBlock1014592 = function(e) {
        e.stylesDom = {}, e.isIE = "undefined" == typeof Proxy, e.addStyle = function(t, i, n) {
            t += "_" + e.uniqId, !e.isIE && void 0 === n && t in e.stylesDom || "" !== (i = (i = (i = (i = i.replace(/((@media|@supports not) \([^(]*\) {)/g, "$1}")).replace(/((?:^|}|,)\W*)((?:\w+)?\.(?:mc|mg|row)[\-\w]+)/g, "$1" + e.getMainCssSelector() + " $2")).replace(/(((@media|@supports not) \([^(]*\) \{)\})/g, "$2")).replace(/video-cdn\.(.+)\/mgPlayer/g, e.currentSubnetDomain)) && (e.isIE ? e.injectStyle(i, t, n) : e.stylesDom[t] = {
                style: i,
                container: n
            })
        }, e.removeStyle = function(t) {
            t += "_" + e.uniqId, !e.isIE && t in e.stylesDom ? delete e.stylesDom[t] : e.clearStyle(t)
        }, e.isIE || (e.stylesDom = new Proxy(e.stylesDom, {
            set: function(t, i, n) {
                var r = n.container,
                    o = n.style;
                return e.injectStyle(o, i, r), t[i] = n, !0
            },
            has: function(t, i) {
                return (null !== e.root.querySelector("style#" + i) || void 0 === t[i]) && void 0 !== t[i]
            },
            deleteProperty: function(t, i) {
                return e.clearStyle(i), delete t[i], !0
            }
        })), e.injectStyle = function(t, i, n) {
            if (n) {
                var r = n;
                if (r.className = "MarketGidC1014592", r.styleSheet) r.styleSheet.cssText = t;
                else {
                    for (; r.firstChild;) r.removeChild(r.firstChild);
                    r.appendChild(e.context.document.createTextNode(t))
                }
            } else {
                var o = e.context.document.createElement("style");
                o.setAttribute("id", i), o.className = "MarketGidC1014592", o.type = "text/css", (void 0 !== e.realRoot ? e.realRoot : e.root).appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.context.document.createTextNode(t))
            }
        }, e.clearStyle = function(t) {
            var i = e.root.querySelector("#" + t);
            null !== i && i.parentNode.removeChild(i)
        }
    }
}, function(e, t, i) {
    window.MarketGidCCookieBlock1014592 = function(e) {
        this.storageName = "MarketGidStorage" + (this.context.MarketGidPageOffset ? this.context.MarketGidPageOffset : ""), this.getCookieValue = function() {
            var e = this.context.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")),
                t = {};
            if (e) try {
                t = JSON.parse(decodeURIComponent(e[1]))
            } catch (e) {}
            return t
        }, this.getCookie = function() {
            var e = this.getCookieValue();
            void 0 !== e.C1014592 ? this.cookieStorage = e.C1014592 : this.cookieStorage = {}, void 0 !== e[0] ? this.sharedCookieStorage = e[0] : this.sharedCookieStorage = {}
        }, this.setCookie = function() {
            var e = this.getCookieValue();
            e.C1014592 = this.cookieStorage, e[0] = this.sharedCookieStorage;
            var t = encodeURIComponent(JSON.stringify(e));
            this.context.document.cookie = this.storageName + "=" + t + ";path=/"
        }
    }
}, function(e, t) {
    function i(e, t) {
        var i;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (i = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return n(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                i && (e = i);
                var r = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            c = !1;
        return {
            s: function() {
                i = e[Symbol.iterator]()
            },
            n: function() {
                var e = i.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, a = e
            },
            f: function() {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (c) throw a
                }
            }
        }
    }

    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }
    window.MarketGidCObserverBlock1014592 = function(e) {
        e.context.IntersectionObserver && (e.afterLoadNewsHooks.push("initWidgetObserver"), e.initWidgetObserver = function() {
            e.widgetObserver = new IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var i = t.isIntersecting ? "shown" : "hidden";
                    if (t.target == e.root) e.log("Observer. Widget ".concat(i, ". Ratio: ").concat(t.intersectionRatio)), e.processHooks("observerWidgetHooks", [t.isIntersecting, t.intersectionRatio]);
                    else
                        for (var n = 0; n < e.observerTeasersHooks.length; n++) {
                            var r = 1,
                                o = 1;
                            try {
                                r = e.teaserData[t.target.dataset.i].iteration, o = e.teaserData[t.target.dataset.i].page
                            } catch (e) {}
                            e.log("Observer. Teaser[".concat(o, ", ").concat(r, "] ").concat(i, ". Ratio: ").concat(t.intersectionRatio)), e.processHooks("observerTeasersHooks", [t.target, t.isIntersecting, t.intersectionRatio, r, o])
                        }
                }))
            }), {
                threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
            }), e.widgetObserver.observe(e.root);
            var t, n = i(e.root.getElementsByClassName("mgline"));
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    e.widgetObserver.observe(r)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
        })
    }
}, function(e, t, i) {
    window.MarketGidCSspDoubleClickBlock1014592 = function(e) {
        e.afterSendCappingHooks.push("doubleClickCappingEvent"), e.afterInjectScriptHooks.push("servicerDoubleClick"), e.doubleClickType = "ssp";
        e.doubleclickStyles = ".MarketGidDButton1014592{display:       inline-block;", e.doubleclickStyles += 'width:         80px;height:        80px;background-color: RGBA(0,0,0,0.4);border:        2px solid white;border-radius:        999px;color:         white !important;font:          normal 500 24px/80px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);', e.doubleclickStyles += "text-align:    center;text-shadow:   none;position: absolute;text-decoration: none !important;transition:all 1s;}.MarketGidDLayout1014592{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#MarketGidComposite1014592 .mgline {position:relative}", e.addStyle("ssp_doubleclick", e.doubleclickStyles), e.hashTimer = [], e.servicerDoubleClickStatus = !1, e.sspDoubleClickHook = function() {
            e.addClickHandler(e.clickHandlerList.sspDoubleClick.handler, e.clickHandlerList.sspDoubleClick.priority)
        }, e.renderDoubleClick = function(t) {
            var i = e.context.document.createElement("div");
            i.classList.add("MarketGidDLayout1014592");
            var n = t.closest(".mgline");
            null !== n && n.appendChild(i);
            var r = e.context.document.createElement("a");
            r.classList.add("MarketGidDButton1014592");
            var o = t.getAttribute("href");
            ("string" == typeof o || o instanceof String) && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "wct=" + e.doubleClickType), r.href = o, r.setAttribute("data-hash", t.getAttribute("data-hash"));
            var a = (1 - 80 / n.offsetHeight) / 2 * 100,
                s = n.offsetWidth / 80 * .98;
            r.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)", r.style.backgroundPosition = "center", r.style.top = a + "%";
            var c = s > 1 ? (1 - 80 / n.offsetWidth) / 2 * 100 : 0;
            r.style.left = c + "%", s < 1 && (r.style.transform = "scale3d(" + s + "," + s + "," + s + ")", r.style.webkitTransform = "scale3d(" + s + "," + s + "," + s + ")", r.style.transformOrigin = "left", r.style.webkitTransformOrigin = "left"), r.target = "_blank", i.appendChild(r), setTimeout((function() {
                s = s < 1 ? s : 1, r.style.transform = "scale3d(" + s + "," + s + "," + s + ")"
            }), 10), setTimeout((function() {
                i.parentNode.removeChild(i)
            }), 1e4)
        }, e.doubleClickCappingEvent = function() {
            if (void 0 !== e.sspDoubleClickHash)
                for (var t = 0; t < e.sspDoubleClickHash.length; t++) void 0 === e.hashTimer[e.sspDoubleClickHash[t]] && (e.hashTimer[e.sspDoubleClickHash[t]] = (new Date).getTime())
        }, e.sspDoubleClickHandler = function(t, i) {
            var n = t.getAttribute("data-hash"),
                r = (new Date).getTime();
            return n in e.hashTimer && r - e.hashTimer[n] > e.servicerData.dc || "w" !== e.teaserData[n].coopType || "MarketGidDButton1014592" === t.className ? (e.doubleClickHandler(t, !0), !0) : (e.doubleClickHandler(t), i.preventDefault(), e.renderDoubleClick(t), !1)
        }, e.servicerDoubleClick = function() {
            e.addStyle("ssp_doubleclick", e.doubleclickStyles);
            var t = setInterval((function() {
                !0 !== e.servicerDoubleClickStatus ? void 0 !== e.servicerData.dc && e.root.querySelectorAll("a[data-hash]").length > 0 && (e.sspDoubleClickHook(), e.servicerDoubleClickStatus = !0) : clearInterval(t)
            }), 100)
        }
    }
}, function(e, t, n) {
    window.MarketGidCSendDimensionsBlock1014592 = function(e) {
        e.afterPreRenderNewsHooks.push("calcPreRenderingBlock"), e.blankImage = "data:image/gif;base64,R0lGODlh7AEVAfAAAAAAAAAAACH5BAEAAAAALAAAAADsARUBAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fwY+/v/D2CAAg5IYIEGHohgggouyGCDMxUAADs=", e.precalcRect = {}, e.calcPreRenderingBlock = function() {
            setTimeout((function() {
                "function" == typeof e.initIframeSizeChange && e.initIframeSizeChange(), e.fixGetElementsByClassNameHandler(e.root);
                var t = e.root.getBoundingClientRect();
                e.root.getElementsByClassName("mgbox")[0] && (t = e.root.getElementsByClassName("mgbox")[0].getBoundingClientRect()), e.precalcRect.width = parseInt(t.width ? t.width : t.right - t.left), e.precalcRect.height = parseInt(t.height ? t.height : t.bottom - t.top), e.precalcRect.top = t.top, e.precalcRect.bottom = t.bottom, e.requestParams.w = "w=" + e.precalcRect.width, e.requestParams.h = "h=" + e.precalcRect.height;
                var n = 0,
                    r = e.root.getElementsByClassName("mgline"),
                    o = "1".split(",").map(Number) || [];
                for (e.preRenderSizes || (e.preRenderSizes = {}), i = 0; i < r.length; i++) {
                    var a = i + 1,
                        s = r[i].getBoundingClientRect(),
                        c = r[i].getElementsByClassName("mcimg")[0];
                    if (void 0 !== c) {
                        var l = c.getBoundingClientRect();
                        e.preRenderSizes[a - 1] = {
                            height: l.height,
                            width: l.width
                        }
                    }
                    if (-1 !== o.indexOf(a)) {
                        var d = parseInt(s.height ? s.height : s.bottom - s.top),
                            u = parseInt(s.width ? s.width : s.right - s.left);
                        e.requestParams["p" + a + "_w"] = "p" + a + "_w=" + u, e.requestParams["p" + a + "_h"] = "p" + a + "_h=" + d
                    }
                    void 0 !== h && h < s.top && 0 === n && (n = i);
                    var h = s.top
                }
                0 == n && (n = r.length), e.requestParams.cols = "cols=" + n, e.fakeMode = !1, e.root = e.realRoot, null !== e.root.querySelector("#preRenderingBlock1014592_" + e.uniqId) && e.root.removeChild(e.root.querySelector("#preRenderingBlock1014592_" + e.uniqId)), e.root.style.overflow = "visible", e.root.style.visibility = "visible", e.root.style.width = e.precalcRect.width + "px", e.root.style.height = e.precalcRect.height + "px", e.afterLoadNewsHooks.push("clearReservationStyles"), e.clearReservationStyles = function() {
                    e.root.style.width = "auto", e.root.style.height = "auto"
                }, e.loadedType = "", e.currentSubnet = "", e.countLoadBlocks = e.countLoadBlocksContainer, e.template = "", e.iteration = 1, "function" == typeof e.widgetPreloadCallback && e.widgetPreloadCallback()
            }), 50)
        }, e.updatePrecalcRect = function(t) {
            e.loadedType = "goods", e.currentSubnet = "0", e.fakeMode = !0, e.realRoot = e.root, e.countLoadBlocksContainer = e.countLoadBlocks;
            var i = e.context.document.createElement("div");
            i.id = "preRenderingBlock1014592_" + e.uniqId, i.style.visibility = "hidden";
            var n = e.context.document.createElement("div");
            n.id = e.root.id, i.appendChild(n), e.root.appendChild(i), e.root = n, e.root.style.overflow = "hidden";
            var r = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
                o = [];
            for (var a = 1; a <= 1; a++) o.push(["", a, "", r, r, "", "", "", "", "", {
                i: e.blankImage
            }]);
            e.MarketGidPrerenderNews(o), "function" == typeof t && (e.widgetPreloadCallback = t)
        }
    }
}, function(e, t, i) {
    var n = i(23),
        r = n.Config,
        o = n.AntiFraud;
    window.MarketGidCAntifraudBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("hangAFListener"), e.afterInitHooks.push("initAntiFraud"), e.allowReturnParams = !1;
        var t = new r({
            loggerEnabled: !1,
            logger: "MarketGidInfC1014592",
            afShortEnabled: !0,
            modulePrefix: "MarketGidC",
            informerPrefix: "MarketGid",
            typePrefix: "C",
            disableCookies: !1,
            id: e.id,
            context: e.context,
            root: e.root,
            iframePlacementType: e.iframePlacementType,
            propertiesDom: '{"props":{"3":"window.close","13":"window.navigator.taintEnabled","16":"window.EventTarget.toString","18":"window.navigator.appName","20":"window.ApplicationCacheErrorEvent","22":"window.clearImmediate","23":"window.CryptoKey","25":"window.external.AddSearchProvider","32":"window.chrome.search","33":"window.clientInformation.vendor","40":"window.TouchEvent","43":"window.DeviceMotionEvent","46":"window.navigator.webkitGetGamepads","49":"window.Notification","56":"window.BeforeLoadEvent","57":"window.Entity","72":"window.AnalyserNode","74":"window.ArrayBufferView","76":"window.HTMLBaseFontElement","86":"window.self.SharedWorker","87":"window.Touch","91":"window.DOMException.ABORT_ERR","92":"window.Set","98":"window.document.createTouch","138":"window.NaN","139":"window.document.prepend","163":"window.SiteBoundCredential","165":"window.CanvasCaptureMediaStreamTrack"},"rules":{"contains":{"3":["({command:\\"window.close.self\\"})"],"18":["MicrosoftInternetExplorer"],"33":["GoogleInc."]},"not_empty":[13,16,18,20,22,23,25,32,40,43,46,49,56,57,76,86,87,91,92,98,138,139,163,165],"undefined":[25,46,72,74,87]}}',
            useFingerprint: !0
        });
        e.antifraud = new o(t), e.initAntiFraud = function() {
            e.antifraud.initialize()
        }, e.getAntifraudParams = function(t, i) {
            return !1 === e.allowReturnParams ? "" : (i = i || e.context.document.createElement("A"), t = t || e.context.document.createEvent("MouseEvent"), e.antifraud.generateHash(t, i))
        }, e.getFrPt = function() {
            return e.antifraud.getFnPt()
        }, e.reWriteHref = function(t, i) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement);
            var n = i["data-hash"] || i.getAttribute("data-hash");
            void 0 !== n && "A" == i.tagName && (i[e.hrefAttr] = e.prepareNiceHref(n, t, i))
        }, e.linkMouseDown = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement), e.allowReturnParams = !0;
            var i = t.target;
            if (("A" == i.tagName || null != (i = e.getParentLink(i))) && i.hasAttribute("data-hash")) {
                var n = 0;
                parseInt(i["data-rel"]) && (n = parseInt(i["data-rel"])), n >> 1 & 8 || (i["data-rel"] = n + 16), e.reWriteHref(t, i)
            }
        }, e.linkClick = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement), e.allowReturnParams = !0;
            var i = t.target;
            "A" != i.tagName && null == (i = e.getParentLink(i)) || i.hasAttribute("data-hash") && (e.reWriteHref(t, i), e.context.setTimeout((function() {
                e.allowReturnParams = !1, e.reWriteHref(t, i)
            }), 100))
        }, e.linkMouseOver = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement), e.allowReturnParams = !0;
            var i = t.target;
            if (("A" == i.tagName || null != (i = e.getParentLink(i))) && i.hasAttribute("data-hash")) {
                var n = 0;
                parseInt(i["data-rel"]) && (n = parseInt(i["data-rel"])), n % 2 != 1 && (i["data-rel"] = n + 1), e.reWriteHref(t, i)
            }
        }, e.linkMouseMove = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement), e.allowReturnParams = !0;
            var i = t.target;
            if (("A" == i.tagName || null != (i = e.getParentLink(i))) && i.hasAttribute("data-hash")) {
                var n = 0;
                parseInt(i["data-rel"]) && (n = parseInt(i["data-rel"])), (n >> 1) % 2 != 1 && (i["data-rel"] = n + 2), e.reWriteHref(t, i)
            }
        }, e.linkTouchStart = function(t) {
            e.allowReturnParams = !0;
            var i = t.target;
            if (("A" == i.tagName || null != (i = e.getParentLink(i))) && i.hasAttribute("data-hash")) {
                var n = 0;
                parseInt(i["data-rel"]) && (n = parseInt(i["data-rel"])), n >> 1 & 2 || (i["data-rel"] = n + 4), e.reWriteHref(t, i)
            }
        }, e.linkTouchEnd = function(t) {
            t || (t = e.context.event), t.target || (t.target = t.srcElement), e.allowReturnParams = !0;
            var i = t.target;
            if (("A" == i.tagName || null != (i = e.getParentLink(i))) && i.hasAttribute("data-hash")) {
                var n = 0;
                parseInt(i["data-rel"]) && (n = parseInt(i["data-rel"])), n >> 1 & 4 || (i["data-rel"] = n + 8), e.reWriteHref(t, i)
            }
        }, e.fixTimeImageLoaded = function() {
            e.afImgLoaded || (e.afImgLoaded = (new Date).getTime())
        }, e.getQueryParam = function(e, t) {
            for (var i = "", n = e.search.substring(1).split("&"), r = 0; r < n.length; r++) {
                var o = n[r].split("=");
                if (o[0] === t) {
                    i = decodeURIComponent(o[1]);
                    break
                }
            }
            return i
        }, e.hangAFListener = function(t) {
            void 0 === t && (t = e.root), e.addEvent(t, "mousedown", e.linkMouseDown), e.addEvent(t, "mouseup", e.linkClick), e.addEvent(t, "mouseover", e.linkMouseOver), e.addEvent(t, "mousemove", e.linkMouseMove), e.addEvent(t, "touchstart", e.linkTouchStart), e.addEvent(t, "touchend", e.linkTouchEnd), e.antifraud.setWidgetEvents()
        }
    }
}, function(module, exports) {
    module.exports = function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                enumerable: !0,
                get: n
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, i) {
            if (1 & i && (e = t(e)), 8 & i) return e;
            if (4 & i && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & i && "string" != typeof e)
                for (var r in e) t.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 4)
    }([function(e, t, i) {
        "use strict";

        function n(e) {
            if (null == e || isNaN(e)) return "";
            for (var t = parseInt(e, 10).toString(8), i = Math.ceil(t.length / 2), n = "", r = 0; r < i; r++) n += a(t.substr(2 * r, 2));
            return n
        }

        function r(e) {
            e = e.toString(), e = unescape(encodeURIComponent(e));
            for (var t, i, n, r, o, a, s, c = "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=", l = "", d = 0; d < e.length;) 64, r = (t = e.charCodeAt(d++)) >> 2, o = (3 & t) << 4 | (i = e.charCodeAt(d++)) >> 4, n = e.charCodeAt(d++), a = isNaN(i) ? 64 : (15 & i) << 2 | n >> 6, s = isNaN(n) ? 64 : 63 & n, l += c.charAt(r) + c.charAt(o) + c.charAt(a) + c.charAt(s);
            return l
        }

        function o(e) {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_".substr(e, 1)
        }

        function a(e) {
            return {
                "00": "A",
                "01": "B",
                "02": "C",
                "03": "D",
                "04": "E",
                "05": "F",
                "06": "G",
                "07": "H",
                10: "I",
                11: "J",
                12: "K",
                13: "L",
                14: "M",
                15: "N",
                16: "O",
                17: "P",
                20: "Q",
                21: "R",
                22: "S",
                23: "T",
                24: "U",
                25: "V",
                26: "W",
                27: "X",
                30: "Y",
                31: "Z",
                32: "a",
                33: "b",
                34: "c",
                35: "d",
                36: "e",
                37: ".",
                40: "g",
                41: "h",
                42: "i",
                43: "j",
                44: "k",
                45: "l",
                46: "m",
                47: "n",
                50: "o",
                51: "p",
                52: "q",
                53: "r",
                54: "s",
                55: "t",
                56: "u",
                57: "v",
                60: "0",
                61: "1",
                62: "2",
                63: "3",
                64: "4",
                65: "5",
                66: "6",
                67: "7",
                70: "8",
                71: "9",
                72: "w",
                73: "x",
                74: "y",
                75: "z",
                76: "-",
                77: "_",
                0: "!",
                1: "*",
                2: ";",
                3: ":",
                4: "=",
                5: "+",
                6: "$",
                7: "~"
            } [e]
        }

        function s(e, t) {
            var i = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                n = e.length;
            if (n <= t) return e;
            var r = i ? n - t : 0;
            return e.substr(r, t)
        }

        function c(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
        }

        function l(e, t, i) {
            e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
        }
        i.d(t, "b", (function() {
            return n
        })), i.d(t, "c", (function() {
            return o
        })), i.d(t, "f", (function() {
            return r
        })), i.d(t, "e", (function() {
            return s
        })), i.d(t, "a", (function() {
            return c
        })), i.d(t, "d", (function() {
            return l
        }))
    }, function(e, t, i) {
        var n, r;
        ! function(o, a, s) {
            "use strict";
            "undefined" != typeof window && i(3) ? void 0 === (r = "function" == typeof(n = s) ? n.call(t, i, t, e) : n) || (e.exports = r) : e.exports ? e.exports = s() : a.exports ? a.exports = s() : a.FrPt = s()
        }(0, this, (function() {
            "use strict";
            void 0 === Array.isArray && (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            });
            var e = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var i = [0, 0, 0, 0];
                    return i[3] += e[3] + t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] + t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] + t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] + t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
                },
                t = function(e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var i = [0, 0, 0, 0];
                    return i[3] += e[3] * t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] * t[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += e[3] * t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] * t[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[2] * t[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[3] * t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
                },
                i = function(e, t) {
                    return 32 == (t %= 64) ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                },
                n = function(e, t) {
                    return 0 == (t %= 64) ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                },
                r = function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                },
                o = function(e) {
                    return e = r(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = r(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), r(e, [0, e[0] >>> 1])
                },
                a = function(a, s) {
                    s = s || 0;
                    for (var c = (a = a || "").length % 16, l = a.length - c, d = [0, s], u = [0, s], h = [0, 0], f = [0, 0], p = [2277735313, 289559509], m = [1291169091, 658871167], g = 0; g < l; g += 16) h = [255 & a.charCodeAt(g + 4) | (255 & a.charCodeAt(g + 5)) << 8 | (255 & a.charCodeAt(g + 6)) << 16 | (255 & a.charCodeAt(g + 7)) << 24, 255 & a.charCodeAt(g) | (255 & a.charCodeAt(g + 1)) << 8 | (255 & a.charCodeAt(g + 2)) << 16 | (255 & a.charCodeAt(g + 3)) << 24], f = [255 & a.charCodeAt(g + 12) | (255 & a.charCodeAt(g + 13)) << 8 | (255 & a.charCodeAt(g + 14)) << 16 | (255 & a.charCodeAt(g + 15)) << 24, 255 & a.charCodeAt(g + 8) | (255 & a.charCodeAt(g + 9)) << 8 | (255 & a.charCodeAt(g + 10)) << 16 | (255 & a.charCodeAt(g + 11)) << 24], h = t(h, p), h = i(h, 31), h = t(h, m), d = r(d, h), d = i(d, 27), d = e(d, u), d = e(t(d, [0, 5]), [0, 1390208809]), f = t(f, m), f = i(f, 33), f = t(f, p), u = r(u, f), u = i(u, 31), u = e(u, d), u = e(t(u, [0, 5]), [0, 944331445]);
                    switch (h = [0, 0], f = [0, 0], c) {
                        case 15:
                            f = r(f, n([0, a.charCodeAt(g + 14)], 48));
                        case 14:
                            f = r(f, n([0, a.charCodeAt(g + 13)], 40));
                        case 13:
                            f = r(f, n([0, a.charCodeAt(g + 12)], 32));
                        case 12:
                            f = r(f, n([0, a.charCodeAt(g + 11)], 24));
                        case 11:
                            f = r(f, n([0, a.charCodeAt(g + 10)], 16));
                        case 10:
                            f = r(f, n([0, a.charCodeAt(g + 9)], 8));
                        case 9:
                            f = r(f, [0, a.charCodeAt(g + 8)]), f = t(f, m), f = i(f, 33), f = t(f, p), u = r(u, f);
                        case 8:
                            h = r(h, n([0, a.charCodeAt(g + 7)], 56));
                        case 7:
                            h = r(h, n([0, a.charCodeAt(g + 6)], 48));
                        case 6:
                            h = r(h, n([0, a.charCodeAt(g + 5)], 40));
                        case 5:
                            h = r(h, n([0, a.charCodeAt(g + 4)], 32));
                        case 4:
                            h = r(h, n([0, a.charCodeAt(g + 3)], 24));
                        case 3:
                            h = r(h, n([0, a.charCodeAt(g + 2)], 16));
                        case 2:
                            h = r(h, n([0, a.charCodeAt(g + 1)], 8));
                        case 1:
                            h = r(h, [0, a.charCodeAt(g)]), h = t(h, p), h = i(h, 31), h = t(h, m), d = r(d, h)
                    }
                    return d = r(d, [0, a.length]), u = r(u, [0, a.length]), d = e(d, u), u = e(u, d), d = o(d), u = o(u), d = e(d, u), u = e(u, d), ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
                },
                s = {
                    preprocessor: null,
                    audio: {
                        timeout: 1e3,
                        excludeIOS11: !0
                    },
                    fonts: {
                        swfContainerId: "fingerprintjs2",
                        swfPath: "flash/compiled/FontList.swf",
                        userDefinedFonts: [],
                        extendedJsFonts: !1
                    },
                    screen: {
                        detectScreenOrientation: !0
                    },
                    plugins: {
                        sortPluginsFor: [/palemoon/i],
                        excludeIE: !1
                    },
                    extraComponents: [],
                    excludes: {
                        enumerateDevices: !0,
                        pixelRatio: !0,
                        doNotTrack: !0,
                        fontsFlash: !0
                    },
                    NOT_AVAILABLE: "not available",
                    ERROR: "error",
                    EXCLUDED: "excluded"
                },
                c = function(e, t) {
                    if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                    else if (e.length === +e.length)
                        for (var i = 0, n = e.length; i < n; i++) t(e[i], i, e);
                    else
                        for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
                },
                l = function(e, t) {
                    var i = [];
                    return null == e ? i : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (c(e, (function(e, n, r) {
                        i.push(t(e, n, r))
                    })), i)
                },
                d = function(e) {
                    if (null == navigator.plugins) return e.NOT_AVAILABLE;
                    for (var t = [], i = 0, n = navigator.plugins.length; i < n; i++) navigator.plugins[i] && t.push(navigator.plugins[i]);
                    return u(e) && (t = t.sort((function(e, t) {
                        return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                    }))), l(t, (function(e) {
                        var t = l(e, (function(e) {
                            return [e.type, e.suffixes]
                        }));
                        return [e.name, e.description, t]
                    }))
                },
                u = function(e) {
                    for (var t, i = !1, n = 0, r = e.plugins.sortPluginsFor.length; n < r; n++)
                        if (t = e.plugins.sortPluginsFor[n], navigator.userAgent.match(t)) {
                            i = !0;
                            break
                        } return i
                },
                h = function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                f = function() {
                    var e = document.createElement("canvas"),
                        t = null;
                    try {
                        t = e.getContext("webgl") || e.getContext("experimental-webgl")
                    } catch (t) {}
                    return t || (t = null), t
                },
                p = function(e) {
                    var t = e.getExtension("WEBGL_lose_context");
                    null != t && t.loseContext()
                },
                m = [{
                    key: "userAgent",
                    getData: function(e) {
                        e(navigator.userAgent)
                    }
                }, {
                    key: "webdriver",
                    getData: function(e, t) {
                        e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                    }
                }, {
                    key: "language",
                    getData: function(e, t) {
                        e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "colorDepth",
                    getData: function(e, t) {
                        e(window.screen.colorDepth || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "deviceMemory",
                    getData: function(e, t) {
                        e(navigator.deviceMemory || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "pixelRatio",
                    getData: function(e, t) {
                        e(window.devicePixelRatio || t.NOT_AVAILABLE)
                    }
                }, {
                    key: "hardwareConcurrency",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "screenResolution",
                    getData: function(e, t) {
                        e(function(e) {
                            var t = [window.screen.width, window.screen.height];
                            return e.screen.detectScreenOrientation && t.sort().reverse(), t
                        }(t))
                    }
                }, {
                    key: "availableScreenResolution",
                    getData: function(e, t) {
                        e(function(e) {
                            if (window.screen.availWidth && window.screen.availHeight) {
                                var t = [window.screen.availHeight, window.screen.availWidth];
                                return e.screen.detectScreenOrientation && t.sort().reverse(), t
                            }
                            return e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "timezoneOffset",
                    getData: function(e) {
                        e((new Date).getTimezoneOffset())
                    }
                }, {
                    key: "timezone",
                    getData: function(e, t) {
                        return window.Intl && window.Intl.DateTimeFormat ? void e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : void e(t.NOT_AVAILABLE)
                    }
                }, {
                    key: "sessionStorage",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.sessionStorage
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "localStorage",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.localStorage
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "indexedDb",
                    getData: function(e, t) {
                        e(function(e) {
                            try {
                                return !!window.indexedDB
                            } catch (t) {
                                return e.ERROR
                            }
                        }(t))
                    }
                }, {
                    key: "addBehavior",
                    getData: function(e) {
                        e(!(!document.body || !document.body.addBehavior))
                    }
                }, {
                    key: "openDatabase",
                    getData: function(e) {
                        e(!!window.openDatabase)
                    }
                }, {
                    key: "cpuClass",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.cpuClass || e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "platform",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "doNotTrack",
                    getData: function(e, t) {
                        e(function(e) {
                            return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                        }(t))
                    }
                }, {
                    key: "plugins",
                    getData: function(e, t) {
                        "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(function(e) {
                            var t = [];
                            return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? t = l(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                                try {
                                    return new window.ActiveXObject(t), t
                                } catch (t) {
                                    return e.ERROR
                                }
                            })) : t.push(e.NOT_AVAILABLE), navigator.plugins && (t = t.concat(d(e))), t
                        }(t)) : e(d(t))
                    }
                }, {
                    key: "canvas",
                    getData: function(e, t) {
                        return h() ? void e(function(e) {
                            var t = Math.PI,
                                i = [],
                                n = document.createElement("canvas");
                            n.width = 2e3, n.height = 200, n.style.display = "inline";
                            var r = n.getContext("2d");
                            return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), i.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.font = e.dontUseFakeFontInCanvas ? "11pt Arial" : "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * t, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * t, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * t, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * t, !0), r.arc(75, 75, 25, 0, 2 * t, !0), r.fill("evenodd"), n.toDataURL && i.push("canvas fp:" + n.toDataURL()), i
                        }(t)) : void e(t.NOT_AVAILABLE)
                    }
                }, {
                    key: "webglVendorAndRenderer",
                    getData: function(e) {
                        return function() {
                            if (!h()) return !1;
                            var e = f(),
                                t = !!window.WebGLRenderingContext && !!e;
                            return p(e), t
                        }() ? void e(function() {
                            try {
                                var e = f(),
                                    t = e.getExtension("WEBGL_debug_renderer_info"),
                                    i = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                                return p(e), i
                            } catch (t) {
                                return null
                            }
                        }()) : void e()
                    }
                }, {
                    key: "adBlock",
                    getData: function(e) {
                        e(function() {
                            var e = document.createElement("div");
                            e.innerHTML = "&nbsp;", e.className = "adsbox";
                            var t = !1;
                            try {
                                document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                            } catch (e) {
                                t = !1
                            }
                            return t
                        }())
                    }
                }, {
                    key: "hasLiedLanguages",
                    getData: function(e) {
                        e(function() {
                            if (void 0 !== navigator.languages) try {
                                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }())
                    }
                }, {
                    key: "hasLiedResolution",
                    getData: function(e) {
                        e(window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight)
                    }
                }, {
                    key: "hasLiedOs",
                    getData: function(e) {
                        e(function() {
                            var e, t = navigator.userAgent.toLowerCase(),
                                i = navigator.oscpu,
                                n = navigator.platform.toLowerCase();
                            if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("windows") || 0 <= t.indexOf("win16") || 0 <= t.indexOf("win32") || 0 <= t.indexOf("win64") || 0 <= t.indexOf("win95") || 0 <= t.indexOf("win98") || 0 <= t.indexOf("winnt") || 0 <= t.indexOf("wow64") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") || 0 <= t.indexOf("x11") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") || 0 <= t.indexOf("ipod") || 0 <= t.indexOf("crios") || 0 <= t.indexOf("fxios") ? "iOS" : 0 <= t.indexOf("macintosh") || 0 <= t.indexOf("mac_powerpc)") ? "Mac" : "Other", ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows" !== e && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e && -1 === t.indexOf("cros")) return !0;
                            if (void 0 !== i) {
                                if (0 <= (i = i.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
                                if (0 <= i.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
                                if (0 <= i.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
                                if ((-1 === i.indexOf("win") && -1 === i.indexOf("linux") && -1 === i.indexOf("mac")) != ("Other" === e)) return !0
                            }
                            return 0 <= n.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || (0 <= n.indexOf("linux") || 0 <= n.indexOf("android") || 0 <= n.indexOf("pike")) && "Linux" !== e && "Android" !== e || (0 <= n.indexOf("mac") || 0 <= n.indexOf("ipad") || 0 <= n.indexOf("ipod") || 0 <= n.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || !(0 <= n.indexOf("arm") && "Windows Phone" === e) && !(0 <= n.indexOf("pike") && 0 <= t.indexOf("opera mini")) && ((0 > n.indexOf("win") && 0 > n.indexOf("linux") && 0 > n.indexOf("mac") && 0 > n.indexOf("iphone") && 0 > n.indexOf("ipad") && 0 > n.indexOf("ipod")) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)
                        }())
                    }
                }, {
                    key: "hasLiedBrowser",
                    getData: function(e) {
                        e(function() {
                            var e, t = navigator.userAgent.toLowerCase(),
                                i = navigator.productSub;
                            if (0 <= t.indexOf("edge/") || 0 <= t.indexOf("iemobile/")) return !1;
                            if (0 <= t.indexOf("opera mini")) return !1;
                            if (("Chrome" == (e = 0 <= t.indexOf("firefox/") ? "Firefox" : 0 <= t.indexOf("opera/") || 0 <= t.indexOf(" opr/") ? "Opera" : 0 <= t.indexOf("chrome/") ? "Chrome" : 0 <= t.indexOf("safari/") ? 0 <= t.indexOf("android 1.") || 0 <= t.indexOf("android 2.") || 0 <= t.indexOf("android 3.") || 0 <= t.indexOf("android 4.") ? "AOSP" : "Safari" : 0 <= t.indexOf("trident/") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== i) return !0;
                            var n, r = eval.toString().length;
                            if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                            if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
                            if (33 === r && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
                            try {
                                throw "a"
                            } catch (e) {
                                try {
                                    e.toSource(), n = !0
                                } catch (e) {
                                    n = !1
                                }
                            }
                            return n && "Firefox" !== e && "Other" !== e
                        }())
                    }
                }, {
                    key: "touchSupport",
                    getData: function(e) {
                        e(function() {
                            var e, t = 0;
                            void 0 === navigator.maxTouchPoints ? void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints) : t = navigator.maxTouchPoints;
                            try {
                                document.createEvent("TouchEvent"), e = !0
                            } catch (t) {
                                e = !1
                            }
                            return [t, e, "ontouchstart" in window]
                        }())
                    }
                }, {
                    key: "fontsFlash",
                    getData: function(e, t) {
                        return void 0 !== window.swfobject ? window.swfobject.hasFlashPlayerVersion("9.0.0") ? t.fonts.swfPath ? void
                        function(e, t) {
                            var i = "___fp_swf_loaded";
                            window[i] = function(t) {
                                e(t)
                            };
                            var n = t.fonts.swfContainerId;
                            ! function(e) {
                                var t = document.createElement("div");
                                t.setAttribute("id", (void 0).fonts.swfContainerId), document.body.appendChild(t)
                            }(), window.swfobject.embedSWF(t.fonts.swfPath, n, "1", "1", "9.0.0", !1, {
                                onReady: i
                            }, {
                                allowScriptAccess: "always",
                                menu: "false"
                            }, {})
                        }((function(t) {
                            e(t)
                        }), t): e("missing options.fonts.swfPath"): e("flash not installed"): e("swf object not loaded")
                    },
                    pauseBefore: !0
                }, {
                    key: "audio",
                    getData: function(e, t) {
                        var i = t.audio;
                        if (i.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                        var n = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                        if (null == n) return e(t.NOT_AVAILABLE);
                        var r = new n(1, 44100, 44100),
                            o = r.createOscillator();
                        o.type = "triangle", o.frequency.setValueAtTime(1e4, r.currentTime);
                        var a = r.createDynamicsCompressor();
                        c([
                            ["threshold", -50],
                            ["knee", 40],
                            ["ratio", 12],
                            ["reduction", -20],
                            ["attack", 0],
                            ["release", .25]
                        ], (function(e) {
                            void 0 !== a[e[0]] && "function" == typeof a[e[0]].setValueAtTime && a[e[0]].setValueAtTime(e[1], r.currentTime)
                        })), o.connect(a), a.connect(r.destination), o.start(0), r.startRendering();
                        var s = setTimeout((function() {
                            return r.oncomplete = function() {}, r = null, e("audioTimeout")
                        }), i.timeout);
                        r.oncomplete = function(t) {
                            var i;
                            try {
                                clearTimeout(s), i = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                                    return e + Math.abs(t)
                                }), 0).toString(), o.disconnect(), a.disconnect()
                            } catch (t) {
                                return void e(t)
                            }
                            e(i)
                        }
                    }
                }, {
                    key: "enumerateDevices",
                    getData: function(e, t) {
                        return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? void navigator.mediaDevices.enumerateDevices().then((function(t) {
                            e(t.map((function(e) {
                                return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                            })))
                        })).catch((function(t) {
                            e(t)
                        })) : e(t.NOT_AVAILABLE)
                    }
                }],
                g = function() {
                    throw new Error("'new FrPt()' is deprecated")
                };
            return g.get = function(e, t) {
                t ? !e && (e = {}) : (t = e, e = {}),
                    function(e, t) {
                        if (null == t) return e;
                        var i, n;
                        for (n in t) null == (i = t[n]) || Object.prototype.hasOwnProperty.call(e, n) || (e[n] = i)
                    }(e, s), e.components = e.extraComponents.concat(m);
                var i = {
                        data: [],
                        addPreprocessedComponent: function(t, n) {
                            "function" == typeof e.preprocessor && (n = e.preprocessor(t, n)), i.data.push({
                                key: t,
                                value: n
                            })
                        }
                    },
                    n = -1;
                ! function r(o) {
                    if ((n += 1) >= e.components.length) t(i.data);
                    else {
                        var a = e.components[n];
                        if (e.excludes[a.key]) r(!1);
                        else {
                            if (!o && a.pauseBefore) return n -= 1, void setTimeout((function() {
                                r(!0)
                            }), 1);
                            try {
                                a.getData((function(e) {
                                    i.addPreprocessedComponent(a.key, e), r(!1)
                                }), e)
                            } catch (e) {
                                i.addPreprocessedComponent(a.key, e + ""), r(!1)
                            }
                        }
                    }
                }(!1)
            }, g.getPromise = function(e) {
                return new Promise((function(t) {
                    g.get(e, t)
                }))
            }, g.getV18 = function(e, t) {
                return null == t && (t = e, e = {}), g.get(e, (function(i) {
                    for (var n, r = [], o = 0; o < i.length; o++)
                        if ((n = i[o]).value === (e.NOT_AVAILABLE || "not available")) r.push({
                            key: n.key,
                            value: "unknown"
                        });
                        else if ("plugins" === n.key) r.push({
                        key: "plugins",
                        value: l(n.value, (function(e) {
                            var t = l(e[2], (function(e) {
                                return e.join ? e.join("~") : e
                            })).join(",");
                            return [e[0], e[1], t].join("::")
                        }))
                    });
                    else if (-1 !== ["canvas", "webgl"].indexOf(n.key) && Array.isArray(n.value)) r.push({
                        key: n.key,
                        value: n.value.join("~")
                    });
                    else if (-1 === ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(n.key)) n.value ? r.push(n.value.join ? {
                        key: n.key,
                        value: n.value.join(";")
                    } : n) : r.push({
                        key: n.key,
                        value: n.value
                    });
                    else {
                        if (!n.value) continue;
                        r.push({
                            key: n.key,
                            value: 1
                        })
                    }
                    var s = a(l(r, (function(e) {
                        return e.value
                    })).join("~~~"), 31);
                    t(s, r)
                }))
            }, g.x64hash128 = a, g.VERSION = "2.1.0", g
        }))
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        function _typeof(e) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function _defineProperties(e, t) {
            for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }

        function _createClass(e, t, i) {
            return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
        }
        var _Mathabs = Math.abs;
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return DomExtractor
        }));
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            DomExtractor = function() {
                function DomExtractor(e) {
                    _classCallCheck(this, DomExtractor), this.config = e, this.context = e.context
                }
                return _createClass(DomExtractor, [{
                    key: "isSessionStorageEnabled",
                    value: function() {
                        var e = null;
                        if ("sessionStorage" in this.context) try {
                            this.context.sessionStorage.setItem("svs", 1), e = this.context.sessionStorage.getItem("svs")
                        } catch (e) {}
                        return e ? 1 : 0
                    }
                }, {
                    key: "getBrowserFlag",
                    value: function() {
                        var e = 0;
                        return (this.context.opera || void 0 !== this.context.opr) && (e += 1), (this.context.opera && this.context.opera.buildNumber || void 0 !== this.context.opr) && (e += 2), (this.context.document.all || this.context.MSStream) && (e += 4), (!this.context.btoa || this.context.navigator.msPointerEnabled || void 0 !== this.context.clearImmediate) && (e += 8), this.context.chrome && (e += 16), void 0 !== this.context.mozInnerScreenX && (e += 32), this.context.external || (e += 64), e
                    }
                }, {
                    key: "isJavaEnabled",
                    value: function() {
                        return this.context.navigator.javaEnabled() ? 1 : 0
                    }
                }, {
                    key: "isFlashEnabled",
                    value: function() {
                        var e = 0;
                        if (void 0 !== this.context.navigator.plugins && "object" === _typeof(this.context.navigator.plugins["Shockwave Flash"])) e = 1;
                        else if (void 0 !== this.context.ActiveXObject) try {
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = 1)
                        } catch (e) {}
                        return e
                    }
                }, {
                    key: "isCookieEnabled",
                    value: function() {
                        return this.context.navigator.cookieEnabled ? 1 : 0
                    }
                }, {
                    key: "isLocalStorageEnabled",
                    value: function() {
                        var e = null;
                        if ("localStorage" in this.context) try {
                            this.context.localStorage.setItem("svs", 1), e = this.context.localStorage.getItem("svs")
                        } catch (e) {}
                        return e ? 1 : 0
                    }
                }, {
                    key: "groupBitParams",
                    value: function() {
                        var e = 0;
                        return this.isJavaEnabled() && (e += 1), this.isFlashEnabled() && (e += 2), this.isCookieEnabled() && (e += 4), this.isLocalStorageEnabled() && (e += 8), this.isSessionStorageEnabled() && (e += 16), this.isTouchStart() && (e += 32), e
                    }
                }, {
                    key: "isTouchStart",
                    value: function() {
                        return void 0 !== this.context.ontouchstart
                    }
                }, {
                    key: "getSnapshotProperties",
                    value: function(propertiesDom) {
                        propertiesDom = propertiesDom || {
                            props: {
                                3: "this.context['close']",
                                13: "this.context['navigator']['taintEnabled']",
                                16: "this.context['EventTarget']['toString']",
                                18: "this.context['navigator']['appName']",
                                20: "this.context['ApplicationCacheErrorEvent']",
                                22: "this.context['clearImmediate']",
                                23: "this.context['CryptoKey']",
                                25: "this.context['external']['AddSearchProvider']",
                                32: "this.context['chrome']['search']",
                                33: "this.context['clientInformation']['vendor']",
                                40: "this.context['TouchEvent']",
                                43: "this.context['DeviceMotionEvent']",
                                46: "this.context['navigator']['webkitGetGamepads']",
                                49: "this.context['Notification']",
                                56: "this.context['BeforeLoadEvent']",
                                57: "this.context['Entity']",
                                72: "this.context['AnalyserNode']",
                                74: "this.context['ArrayBufferView']",
                                76: "this.context['HTMLBaseFontElement']",
                                86: "this.context['self']['SharedWorker']",
                                87: "this.context['Touch']",
                                91: "this.context['DOMException']['ABORT_ERR']",
                                92: "this.context['Set']",
                                98: "this.context['document']['createTouch']",
                                138: "this.context['NaN']",
                                139: "this.context['document']['prepend']",
                                163: "this.context['SiteBoundCredential']",
                                165: "this.context['CanvasCaptureMediaStreamTrack']"
                            },
                            rules: {
                                contains: {
                                    3: ['({command:"this.context.close.self"})'],
                                    18: ["MicrosoftInternetExplorer"],
                                    33: ["GoogleInc."]
                                },
                                not_empty: [13, 16, 18, 20, 22, 23, 25, 32, 40, 43, 46, 49, 56, 57, 76, 86, 87, 91, 92, 98, 138, 139, 163, 165],
                                undefined: [25, 46, 72, 74, 87]
                            }
                        };
                        var snapshotProperties = "";
                        for (var i in propertiesDom.props) {
                            i = parseInt(i, 10);
                            var node = this.context,
                                value = "";
                            try {
                                node = eval(propertiesDom.props[i])
                            } catch (e) {
                                node = "undefined", this.config.loggerEnabled && this.context[this.config.logger + "Logger"].sendData("Antifraud Error. Property: " + i + ". " + e.message + ". " + e.stack)
                            }
                            if (value = (node + "").replace(/\s/g, ""), propertiesDom.rules.contains && i in propertiesDom.rules.contains)
                                for (var j in propertiesDom.rules.contains[i]) snapshotProperties += -1 === value.indexOf(propertiesDom.rules.contains[i][j]) ? "0" : "1";
                            propertiesDom.rules.empty && -1 !== propertiesDom.rules.empty.indexOf(i) && (snapshotProperties += "" === value ? "1" : "0"), propertiesDom.rules.not_empty && -1 !== propertiesDom.rules.not_empty.indexOf(i) && (snapshotProperties += "undefined" !== value && "" !== value ? "1" : "0"), propertiesDom.rules.undefined && -1 !== propertiesDom.rules.undefined.indexOf(i) && (snapshotProperties += "undefined" === value ? "1" : "0")
                        }
                        for (var sizeChar = 6, n = Math.ceil(snapshotProperties.length / sizeChar), chars = "", _i = 0; _i < n; _i++) {
                            var part = snapshotProperties.substr(_i * sizeChar, sizeChar),
                                dec = parseInt(part, 2);
                            chars += _utils__WEBPACK_IMPORTED_MODULE_0__.c(dec)
                        }
                        return chars
                    }
                }, {
                    key: "getRectOfElement",
                    value: function(e) {
                        try {
                            var t = e.getBoundingClientRect()
                        } catch (i) {
                            t = {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 0,
                                width: 0
                            }
                        }
                        var i = {
                            top: t.top,
                            bottom: t.bottom,
                            left: t.left,
                            right: t.right,
                            height: t.height ? t.height : t.bottom - t.top,
                            width: t.width ? t.width : t.right - t.left
                        };
                        if (this.context.self !== this.context.top) {
                            var n = this.getFrameElement();
                            if (n) {
                                var r = n.getBoundingClientRect();
                                i.top += r.top, i.bottom += r.top, i.left += r.left, i.right += r.left
                            }
                        }
                        return i
                    }
                }, {
                    key: "getFrameElement",
                    value: function() {
                        if (void 0 === this.topIFrame) try {
                            var e, t;
                            for (t = (e = this.context).frameElement; e.frameElement; e = e.parent) t = e.frameElement;
                            this.topIFrame = t
                        } catch (e) {
                            this.topIFrame = null
                        }
                        return this.topIFrame
                    }
                }, {
                    key: "getCoordinatesClickOfWindow",
                    value: function(e) {
                        var t = 0,
                            i = 0;
                        return e.clientX || e.clientY ? (t = e.clientX, i = e.clientY) : e.touches && e.touches[0] && (t = e.touches[0].clientX, i = e.touches[0].clientY), {
                            x: t,
                            y: i
                        }
                    }
                }, {
                    key: "getCoordinatesClickOfPage",
                    value: function(e) {
                        var t = 0,
                            i = 0;
                        return e || (e = this.context.event), e.pageX || e.pageY ? (t = e.pageX, i = e.pageY) : e.touches && e.touches[0] ? (t = e.touches[0].pageX, i = e.touches[0].pageY) : (e.clientX || e.clientY) && (t = e.clientX + (this.context.document.documentElement.scrollLeft || this.context.document.body.scrollLeft) - this.context.document.documentElement.clientLeft, i = e.clientY + (this.context.document.documentElement.scrollTop || this.context.document.body.scrollTop) - this.context.document.documentElement.clientTop), {
                            x: t,
                            y: i
                        }
                    }
                }, {
                    key: "getCoordsElementOfPage",
                    value: function(e) {
                        var t = 0,
                            i = 0;
                        do {
                            t += e.offsetLeft, i += e.offsetTop
                        } while (e = e.offsetParent);
                        return {
                            x: t,
                            y: i
                        }
                    }
                }, {
                    key: "getCoordsClickOfWindow",
                    value: function(e) {
                        var t = 0,
                            i = 0;
                        return e.clientX || e.clientY ? (t = e.clientX, i = e.clientY) : e.touches && e.touches[0] && (t = e.touches[0].clientX, i = e.touches[0].clientY), {
                            x: t,
                            y: i
                        }
                    }
                }, {
                    key: "getMaxTouchPoints",
                    value: function() {
                        return void 0 === this.context.navigator.maxTouchPoints ? 99 : this.context.navigator.maxTouchPoints
                    }
                }, {
                    key: "getDeviceOrientation",
                    value: function(e) {
                        if (this.context.DeviceOrientationEvent) {
                            var t = !0,
                                i = 0;
                            _utils__WEBPACK_IMPORTED_MODULE_0__.a(this.context, "deviceorientation", (function(n) {
                                var r = Math.round,
                                    o = r(n.gamma),
                                    a = r(n.beta),
                                    s = r(n.alpha);
                                t && (i++, t = !1, setTimeout((function() {
                                    t = !0
                                }), 1e3)), e(parseInt(o) + "|" + parseInt(a) + "|" + parseInt(s) + "|" + parseInt(i))
                            }))
                        } else e("0|0|0|0")
                    }
                }, {
                    key: "getCoordsClickOfPage",
                    value: function(e) {
                        var t = 0,
                            i = 0;
                        return e || (e = this.context.event), e.pageX || e.pageY ? (t = e.pageX, i = e.pageY) : e.touches && e.touches[0] ? (t = e.touches[0].pageX, i = e.touches[0].pageY) : (e.clientX || e.clientY) && (t = e.clientX + (this.context.document.documentElement.scrollLeft || this.context.document.body.scrollLeft) - this.context.document.documentElement.clientLeft, i = e.clientY + (this.context.document.documentElement.scrollTop || this.context.document.body.scrollTop) - this.context.document.documentElement.clientTop), {
                            x: t,
                            y: i
                        }
                    }
                }, {
                    key: "isTransparent",
                    value: function(e) {
                        for (; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        for (; e.parentNode;) {
                            if (.2 >= this.context.getComputedStyle(e).getPropertyValue("opacity")) return 1;
                            if (e === this.context.document.body) break;
                            e = e.parentNode
                        }
                        return 0
                    }
                }, {
                    key: "getCountMimeTypes",
                    value: function() {
                        var e = 0;
                        return void 0 !== this.context.navigator.mimeTypes && (e = this.context.navigator.mimeTypes.length), e
                    }
                }, {
                    key: "isOnLine",
                    value: function() {
                        var e = 1;
                        return void 0 !== this.context.navigator.onLine && (e = this.context.navigator.onLine ? 1 : 0), e
                    }
                }, {
                    key: "generateBatteryInfo",
                    value: function(e) {
                        this.context.navigator.getBattery && this.context.navigator.getBattery().then((function(t) {
                            e(+t.charging, 100 * t.level)
                        }))
                    }
                }, {
                    key: "generateCurrentGeoPosition",
                    value: function(e) {
                        var t = this;
                        try {
                            this.context.navigator.permissions.query({
                                name: "geolocation"
                            }).then((function(i) {
                                "granted" === i.state && t.context.navigator.geolocation.getCurrentPosition((function(t) {
                                    e(t.coords)
                                }))
                            }))
                        } catch (e) {}
                    }
                }, {
                    key: "getSupportedImageMimeTypes",
                    value: function() {
                        var e = 0;
                        try {
                            var t = this.context.document.createElement("canvas");
                            if (t.getContext && t.getContext("2d")) {
                                var i = {
                                    1: "image/webp",
                                    2: "image/jpeg",
                                    4: "image/jxr",
                                    8: "image/jp2",
                                    16: "image/gif"
                                };
                                for (var n in i) 0 === t.toDataURL(i[n]).indexOf("data:" + i[n]) && (e |= n)
                            }
                        } catch (e) {}
                        return e
                    }
                }, {
                    key: "isSupportHtml5",
                    value: function() {
                        var e = this.context.document.createElement("canvas");
                        return e.getContext && e.getContext("2d") ? 1 : 0
                    }
                }, {
                    key: "getScreenX",
                    value: function() {
                        var e = 0;
                        return void 0 !== this.context.screenX && (e = _Mathabs(this.context.screenX)), e
                    }
                }, {
                    key: "getScreenY",
                    value: function() {
                        var e = 0;
                        return void 0 !== this.context.screenY && (e = _Mathabs(this.context.screenY)), e
                    }
                }, {
                    key: "isAnyImageLoaded",
                    value: function(e) {
                        for (var t = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/, i = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/, n = this.config.root.getElementsByTagName("IMG"), r = this.config.root.getElementsByTagName("VIDEO"), o = [], a = 0; a < n.length; a++) o.push(n[a]);
                        for (var s = 0; s < r.length; s++) o.push(r[s]);
                        for (var c = 0; c < o.length; c++) t.exec(o[c].src) || i.exec(o[c].src), _utils__WEBPACK_IMPORTED_MODULE_0__.a(o[c], "load", e)
                    }
                }, {
                    key: "getHardwareConcurrency",
                    value: function() {
                        var e = 0;
                        return void 0 !== this.context.navigator.hardwareConcurrency && (e = this.context.navigator.hardwareConcurrency), e
                    }
                }, {
                    key: "getPlugins",
                    value: function() {
                        var e = "";
                        if (void 0 !== this.context.navigator.plugins) {
                            for (var t = this.context.navigator.plugins, i = [], n = 0; n < t.length; n++) i.push(t[n].name);
                            e = _utils__WEBPACK_IMPORTED_MODULE_0__.e(i.join("|").replace(/\s/g, ""), 300)
                        }
                        return e
                    }
                }, {
                    key: "getNetwrokInformation",
                    value: function() {
                        var e = {
                            networkInformationType: "unknown",
                            networkInformationEffectiveType: "unknown",
                            networkInformationSaveData: 0
                        };
                        try {
                            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                            void 0 !== t.type && (e.networkInformationType = t.type), void 0 !== t.effectiveType && (e.networkInformationEffectiveType = t.effectiveType), void 0 !== t.saveData && (e.networkInformationSaveData = t.saveData ? 1 : 0)
                        } catch (t) {}
                        return e
                    }
                }]), DomExtractor
            }()
    }, function(e) {
        (function(t) {
            e.exports = t
        }).call(this, {})
    }, function(e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }

        function r(e, t) {
            for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var i, n = 0; n < t.length; n++)(i = t[n]).enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        i.r(t), i.d(t, "Application", (function() {
            return p
        })), i.d(t, "AntiFraud", (function() {
            return h
        })), i.d(t, "Config", (function() {
            return f
        })), i.d(t, "addEvent", (function() {
            return s.a
        })), i.d(t, "removeEvent", (function() {
            return s.d
        }));
        var s = i(0),
            c = i(2),
            l = function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.cookieStorage = {}, this.sharedCookieStorage = {}, this.config = t, this.context = t.context, this.storageName = t.informerPrefix + "Storage" + (this.context[t.informerPrefix + "PageOffset"] ? this.context[t.informerPrefix + "PageOffset"] : "")
                }
                return function(e, t, i) {
                    t && n(e.prototype, t)
                }(e, [{
                    key: "initialize",
                    value: function() {
                        var e = this.getCookieValue();
                        this.cookieStorage = void 0 === e[this.config.typePrefix + this.config.id] ? {} : e[this.config.typePrefix + this.config.id], this.sharedCookieStorage = void 0 === e[0] ? {} : e[0]
                    }
                }, {
                    key: "setCookie",
                    value: function() {
                        if (!this.config.disableCookies) {
                            var e = this.getCookieValue();
                            e[this.config.typePrefix + this.config.id] = this.cookieStorage, e[0] = this.sharedCookieStorage;
                            var t = encodeURIComponent(JSON.stringify(e));
                            this.context.document.cookie = this.storageName + "=" + t + ";path=/"
                        }
                    }
                }, {
                    key: "getCookieValue",
                    value: function() {
                        if (!this.config.disableCookies) {
                            var e = this.context.document.cookie.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")),
                                t = {};
                            if (e) try {
                                t = JSON.parse(decodeURIComponent(e[1]))
                            } catch (t) {}
                            return t
                        }
                        return {}
                    }
                }]), e
            }(),
            d = i(1),
            u = i.n(d),
            h = function() {
                function e(t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.domExtractor = new c.a(t), this.cookieManager = new l(t), this.config = t, this.miliSecondsFromScroll = null, this.afCookieData = "", this.afPrimaryReferrer = "", this.afReferrer = "", this.afHref = "", this.afDeepSession = "", this.afMgLoaded = s.b((new Date).getTime()), this.afImgLoaded = 0, this.afSnapshotProperties = "", this.afCoords = "", this.afDeviceOrientation = "", this.afCoordsClickAndLinkOfPage = "", this.afBrowserFlag = 0, this.afPlugins = "", this.afCountMimeTypes = 0, this.afFocus = 1, this.afBrowserHookMask = 0, this.afCharging = -1, this.afLevel = -1, this.afImageMimeTypes = 0, this.afGeoPosition = "0|0", this.timerFromScroll = null, this.networkInformation = "unknown|unknown|0", this.frPrHash = ""
                }
                return function(e, t, i) {
                    t && r(e.prototype, t)
                }(e, [{
                    key: "initialize",
                    value: function() {
                        var e = new Date;
                        this.cookieManager.initialize(), this.setReferrers(), this.setDeepSession(), this.setCookieData(e), this.setNetworkInformation(), this.afMgLoaded = s.b(e.getTime()), this.afSnapshotProperties = this.domExtractor.getSnapshotProperties(this.config.propertiesDom), this.afBrowserFlag = this.domExtractor.getBrowserFlag(), this.afBrowserHookMask = this.domExtractor.getBrowserFlag(), this.afPlugins = s.f(this.domExtractor.getPlugins()), this.afImageMimeTypes = this.domExtractor.getSupportedImageMimeTypes(), this.afCountMimeTypes = this.domExtractor.getCountMimeTypes(), this.setEvents()
                    }
                }, {
                    key: "generateHash",
                    value: function(e, t) {
                        var i = new Date,
                            n = this.domExtractor.getCoordsClickOfWindow(e),
                            r = this.domExtractor.getRectOfElement(t),
                            o = this.domExtractor.isTransparent(t);
                        this.setCoords(t), this.setCoordsClickAndLinkOfPage(e, t);
                        for (var a = "", c = 1; c <= 48 * Math.ceil((this.afBrowserFlag + 1) / 68); c++)
                            if (0 != c % 26 && (6 != c % 26 || 0 != (c % 26 + 5) % 11)) {
                                a += 1 === c ? String.fromCharCode(98 + c % 26) : "f";
                                var l = "";
                                if (48 < c) break;
                                1 === c ? l = this.afCookieData : 3 === c ? l = this.afMgLoaded : 4 === c ? l = s.b(i.getTime()) : 7 === c ? l = s.f(n.x + "|" + n.y) : 9 === c ? l = s.b(r.left) : 10 === c ? l = s.b(this.miliSecondsFromScroll) : 11 === c ? l = s.b(r.top) : 13 === c ? l = s.f(r.width + "|" + r.height) : 15 === c ? l = this.afSnapshotProperties : 17 === c ? l = s.b(this.afBrowserFlag) : 18 === c ? l = s.b(t["data-rel"]) : 19 === c ? l = this.afHref : 20 === c ? l = this.afReferrer : 21 === c ? l = this.afPrimaryReferrer : 22 === c ? l = s.b(this.afDeepSession) : 23 === c ? l = s.f(this.afCoordsClickAndLinkOfPage) : 24 === c ? l = s.f(this.afDeviceOrientation) : 25 === c ? l = s.f(this.afGeoPosition) : 27 === c ? l = s.b(this.config.iframePlacementType) : 28 === c ? l = s.c(this.groupBitParams()) : 29 === c ? l = s.f(this.afCoords) : 30 === c ? l = s.b(this.domExtractor.context.screen.width) : 31 === c ? l = s.b(this.domExtractor.context.screen.height) : 33 === c ? l = s.b(this.afImgLoaded) : 34 === c ? l = s.b(o) : 35 === c ? l = s.f(this.domExtractor.context.navigator.userAgent) : 36 === c ? l = this.afPlugins : 37 === c ? l = s.f(parseInt(this.afCountMimeTypes) + "|" + parseInt(this.afImageMimeTypes)) : 38 === c ? l = s.f(this.domExtractor.context.navigator.platform) : 39 === c ? l = s.f(-i.getTimezoneOffset()) : 40 === c ? l = s.f(this.afCharging + "|" + this.afLevel) : 41 === c ? l = s.f(this.domExtractor.context.screen.availWidth + "|" + this.domExtractor.context.screen.availHeight) : 42 === c ? l = s.f(this.networkInformation) : 43 === c ? l = s.b(this.domExtractor.getScreenX()) : 44 === c ? l = s.b(this.domExtractor.getScreenY()) : 45 === c ? l = s.b(this.afBrowserHookMask) : 46 === c ? l = s.b(this.domExtractor.getMaxTouchPoints()) : 47 === c ? l = s.b(this.domExtractor.isSupportHtml5()) : 48 === c && (l = s.b(this.domExtractor.isOnLine())), a += l
                            } return encodeURIComponent(a)
                    }
                }, {
                    key: "getFnPt",
                    value: function() {
                        return this.frPrHash
                    }
                }, {
                    key: "setWidgetEvents",
                    value: function() {
                        var e = this;
                        this.domExtractor.isAnyImageLoaded((function() {
                            e.afImgLoaded || (e.afImgLoaded = (new Date).getTime())
                        }))
                    }
                }, {
                    key: "packReferrers",
                    value: function(e, t, i) {
                        for (var n = [this.afPrimaryReferrer, this.afReferrer, this.afHref], r = [e, t, i], o = 0, a = 0, s = 0; s < r.length; s++) o += r[s], a += n[s].length;
                        if (a <= o) return n;
                        for (var c, l = [0, 0, 0], d = [], u = 0; u < n.length; u++) c = -1, 8 <= n[u].length && (c = n[u].indexOf("/", 8)), -1 == c ? (d[u] = n[u], n[u] = "") : (d[u] = n[u].substr(0, c), n[u] = n[u].substr(c)), r[u] -= d[u].length;
                        var h = d.slice(),
                            f = [];
                        for (h[0] == h[1] ? f[0] = "++" : h[0] == h[2] && (f[0] = "::"), h[1] == h[2] && (f[1] = ";;");;) {
                            for (var p = 0, m = 0; m < n.length; m++)
                                if (l[m] || n[m].length) l[m] || (p = 1, d[m] += n[m][0], n[m] = 1 == n[m].length ? "" : n[m].substr(1), r[m]--, r[m] || (l[m] = 1));
                                else {
                                    l[m] = 1;
                                    for (var g = 0; g < l.length; g++)
                                        if (!l[g]) {
                                            r[g] += r[m], r[m] = 0;
                                            break
                                        }
                                } if (!p)
                                for (var v = 0; v < n.length; v++)
                                    if (n[v].length) {
                                        for (var y = 0; y < r.length; y++)
                                            if (r[y]) {
                                                l[v] = 0, r[v] = r[y], r[y] = 0, p = 1;
                                                break
                                            } if (p) break
                                    } if (!p) break
                        }
                        for (var b in f) d[b] = d[b].split(h[b]).join(f[b]);
                        return d
                    }
                }, {
                    key: "groupBitParams",
                    value: function() {
                        var e = 0;
                        return this.domExtractor.isJavaEnabled() && (e += 1), this.domExtractor.isFlashEnabled() && (e += 2), this.domExtractor.isCookieEnabled() && (e += 4), this.domExtractor.isLocalStorageEnabled() && (e += 8), this.domExtractor.isSessionStorageEnabled() && (e += 16), e
                    }
                }, {
                    key: "setNetworkInformation",
                    value: function() {
                        var e = this.domExtractor.getNetwrokInformation();
                        this.networkInformation = e.networkInformationType + "|" + e.networkInformationEffectiveType + "|" + e.networkInformationSaveData
                    }
                }, {
                    key: "setCookieData",
                    value: function(e) {
                        var t = Math.floor;
                        this.afCookieData = e.getTime() + "" + this.config.id + t(100 * Math.random()) + 2 * t(4 * Math.random()), this.afCookieData += 1, this.afCookieData = s.b(s.e(this.afCookieData, 16, 1)), void 0 === this.cookieManager.sharedCookieStorage[this.config.cookieDataKey] && (this.cookieManager.sharedCookieStorage[this.config.cookieDataKey] = this.afCookieData, this.cookieManager.setCookie())
                    }
                }, {
                    key: "setCoordsClickAndLinkOfPage",
                    value: function(e, t) {
                        var i = this.domExtractor.getCoordsClickOfPage(e),
                            n = this.domExtractor.getCoordsElementOfPage(t);
                        this.afCoordsClickAndLinkOfPage = parseInt(i.x) + "|" + parseInt(i.y) + "|" + parseInt(n.x) + "|" + parseInt(n.y)
                    }
                }, {
                    key: "setCoords",
                    value: function(e) {
                        var t = e.getBoundingClientRect();
                        this.afCoords = parseInt(t.height) + "|" + parseInt(t.width) + "|" + parseInt(t.x) + "|" + parseInt(t.y)
                    }
                }, {
                    key: "setEvents",
                    value: function() {
                        var e = this;
                        if (s.a(this.domExtractor.context.document, "focus", (function() {
                                e.afFocus = 1
                            })), s.a(this.domExtractor.context.document, "blur", (function() {
                                e.afFocus = 0
                            })), s.a(this.domExtractor.context.document, "scroll", (function(t) {
                                t || (t = e.domExtractor.context.event), t.target || (t.target = t.srcElement), e.miliSecondsFromScroll = 0, e.domExtractor.context.clearInterval(e.timerFromScroll), e.timerFromScroll = e.domExtractor.context.setInterval((function() {
                                    e.miliSecondsFromScroll++
                                }), 100)
                            })), this.domExtractor.getDeviceOrientation((function(t) {
                                e.afDeviceOrientation = t
                            })), this.domExtractor.generateBatteryInfo((function(t, i) {
                                e.afCharging = t, e.afLevel = i
                            })), this.domExtractor.generateCurrentGeoPosition((function(t) {
                                e.afGeoPosition = t.latitude + "|" + t.longitude
                            })), this.config.useFingerprint) try {
                            u.a.get((function(t) {
                                e.frPrHash = u.a.x64hash128(t.map((function(e) {
                                    return e.value
                                })).join(), 31)
                            }))
                        } catch (e) {
                            this.config.loggerEnabled && this.domExtractor.context[this.config.logger + "Logger"].sendData("Antifraud Error fingerprint. Property: " + e.message + ". " + e.stack)
                        }
                    }
                }, {
                    key: "setReferrers",
                    value: function() {
                        void 0 === this.cookieManager.sharedCookieStorage.svspr ? (this.afPrimaryReferrer = s.e(this.domExtractor.context.document.referrer, 500), this.cookieManager.sharedCookieStorage.svspr = this.afPrimaryReferrer, this.cookieManager.setCookie()) : this.afPrimaryReferrer = this.cookieManager.sharedCookieStorage.svspr, this.afReferrer = this.domExtractor.context.hasOwnProperty("referer") ? this.domExtractor.context.referer : this.domExtractor.context.document.referrer, this.afHref = this.domExtractor.context.document.location.href;
                        var e = this.config.afShortEnabled ? this.packReferrers(70, 50, 50) : this.packReferrers(300, 300, 300);
                        this.afPrimaryReferrer = s.f(s.e(e[0], 100)), this.afReferrer = s.f(s.e(e[1], 100)), this.afHref = s.f(s.e(e[2], 100))
                    }
                }, {
                    key: "setDeepSession",
                    value: function() {
                        if (void 0 !== this.cookieManager.sharedCookieStorage.svsds) {
                            this.afDeepSession = this.cookieManager.sharedCookieStorage.svsds;
                            var e = this.config.modulePrefix + "SvsdsFlag";
                            void 0 === this.domExtractor.context[e] && (this.afDeepSession++, this.domExtractor.context[e] = !0)
                        } else this.afDeepSession = 1;
                        this.cookieManager.sharedCookieStorage.svsds = this.afDeepSession, this.cookieManager.setCookie()
                    }
                }]), e
            }(),
            f = function e(t) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this.loggerEnabled = t.loggerEnabled, this.logger = t.logger, this.afShortEnabled = t.afShortEnabled, this.modulePrefix = t.modulePrefix, this.id = t.id, this.informerPrefix = t.informerPrefix || "MarketGid", this.typePrefix = t.typePrefix || "", this.disableCookies = t.disableCookies || !1, this.context = t.context || window, this.root = t.root || this.context.document, this.iframePlacementType = t.iframePlacementType || 0, this.cookieDataKey = t.cookieDataKey || "TejndEEDj", this.propertiesDom = t.propertiesDom, this.useFingerprint = t.useFingerprint || !1
            },
            p = function() {
                function e() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, e);
                    var i = new f({
                        loggerEnabled: !1,
                        modulePrefix: "Transit",
                        id: 206,
                        cookieDataKey: "TejndE37EDj206"
                    });
                    this.app = new h(i), this.afRealHref = "", this.linksCount = 0, this.forceEvents = t.forceEvents || !1
                }
                return function(e, t, i) {
                    t && a(e.prototype, t)
                }(e, [{
                    key: "run",
                    value: function() {
                        this.app.initialize(), this.initAntiFraud()
                    }
                }, {
                    key: "initAntiFraud",
                    value: function() {
                        var e = this,
                            t = document.getElementsByTagName("a");
                        (t.length !== this.linksCount || !0 === this.forceEvents) && this.bindEvents(t), setTimeout((function() {
                            return e.initAntiFraud()
                        }), 750)
                    }
                }, {
                    key: "bindEvents",
                    value: function(e) {
                        var t = this;
                        this.linksCount = e.length, this.forceEvents = !1;
                        for (var i, n = 0; n < e.length; n++) i = e[n], /\/(ghits|[rt]+news|nr)\//i.test(i.href) && (Object(s.a)(i, "mousedown", (function(e) {
                            t.linkMouseDown(e, this)
                        })), Object(s.a)(i, "mouseup", (function(e) {
                            t.linkClick(e, this)
                        })), Object(s.a)(i, "mouseover", (function(e) {
                            t.linkMouseOver(e, this)
                        })), Object(s.a)(i, "mousemove", (function(e) {
                            t.linkMouseMove(e, this)
                        })), Object(s.a)(i, "touchstart", (function(e) {
                            t.linkTouchStart(e, this)
                        })), Object(s.a)(i, "touchend", (function(e) {
                            t.linkTouchEnd(e, this)
                        })));
                        this.app.setWidgetEvents()
                    }
                }, {
                    key: "bindAntiFraudParams",
                    value: function(e, t) {
                        var i = t.href.indexOf("?k=f"),
                            n = t.href.indexOf("&k=f"),
                            r = t.href.indexOf("?"); - 1 === i ? -1 !== n && (t.href = t.href.substr(0, n)) : t.href = t.href.substr(0, i), this.afRealHref = t.href, this.afActiveEl = t, t.href += -1 === i && -1 !== r ? "&k=f" : "?k=f", t.href += this.app.generateHash(e, t), this.dispatchKEvent(t, "generated")
                    }
                }, {
                    key: "dispatchKEvent",
                    value: function(e, t) {
                        var i = document.createEvent("Events");
                        i.initEvent(t, !0, !1), i.timeG = Date.now(), e.dispatchEvent(i)
                    }
                }, {
                    key: "linkClick",
                    value: function(e, t) {
                        var i = this;
                        this.bindAntiFraudParams(e, t), setTimeout((function() {
                            return i.reWriteHref()
                        }), 100)
                    }
                }, {
                    key: "linkMouseOver",
                    value: function(e, t) {
                        this.bindAntiFraudParams(e, t);
                        var i = parseInt(t["data-rel"]) ? parseInt(t["data-rel"]) : 0;
                        1 != i % 2 && (t["data-rel"] = i + 1)
                    }
                }, {
                    key: "linkMouseMove",
                    value: function(e, t) {
                        var i = parseInt(t["data-rel"]) ? parseInt(t["data-rel"]) : 0;
                        1 != (i >> 1) % 2 && (t["data-rel"] = i + 2)
                    }
                }, {
                    key: "linkTouchStart",
                    value: function(e, t) {
                        this.bindAntiFraudParams(e, t);
                        var i = parseInt(t["data-rel"]) ? parseInt(t["data-rel"]) : 0;
                        2 & i >> 1 || (t["data-rel"] = i + 4)
                    }
                }, {
                    key: "linkTouchEnd",
                    value: function(e, t) {
                        var i = parseInt(t["data-rel"]) ? parseInt(t["data-rel"]) : 0;
                        4 & i >> 1 || (t["data-rel"] = i + 8)
                    }
                }, {
                    key: "linkMouseDown",
                    value: function(e, t) {
                        var i = parseInt(t["data-rel"]) ? parseInt(t["data-rel"]) : 0;
                        8 & i >> 1 || (t["data-rel"] = i + 16)
                    }
                }, {
                    key: "reWriteHref",
                    value: function() {
                        this.afRealHref && this.afActiveEl && (this.afActiveEl.href = this.afRealHref)
                    }
                }]), e
            }()
    }])
}, function(e, t, i) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, i) {
        return t && r(e.prototype, t), i && r(e, i), e
    }
    window.MarketGidCAntifraudStatisticsBlock1014592 = function(e) {
        var t = i(25),
            r = function() {
                function t() {
                    n(this, t)
                }
                return o(t, null, [{
                    key: "getClosestDistanceInSquare",
                    value: function(e, t) {
                        var i = e.x - t.x,
                            n = e.y - t.y,
                            r = t.width - i,
                            o = t.height - n;
                        return Math.min(i, n, r, o)
                    }
                }, {
                    key: "getInnerElementPercent",
                    value: function(e, t) {
                        var i = e.getBoundingClientRect(),
                            n = Math.abs(i.width * i.height),
                            r = i.width,
                            o = i.height;
                        i.top < 0 && (o += i.top), i.left < 0 && (r += i.left);
                        var a = i.top + i.height;
                        t.height < a && (o -= a - t.height);
                        var s = i.left + i.width;
                        return t.width < s && (r -= s - t.width), 100 * ((r = r > 0 ? r : 0) * (o = o > 0 ? o : 0)) / n
                    }
                }, {
                    key: "findTeaserElement",
                    value: function(t) {
                        return e.findClosest(t, "div[data-i]")
                    }
                }, {
                    key: "findImageElementOfTeaser",
                    value: function(e) {
                        return e.querySelector("img.mcimg")
                    }
                }, {
                    key: "getViewportSize",
                    value: function() {
                        return {
                            width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                            height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                        }
                    }
                }]), t
            }(),
            a = function() {
                function t(e) {
                    n(this, t), this.parameters = e, this.initialWidgetCoordinates = {
                        x: 0,
                        y: 0
                    }
                }
                return o(t, [{
                    key: "onWidgetLoadEvent",
                    value: function() {
                        var t = e.root.getBoundingClientRect();
                        this.initialWidgetCoordinates = {
                            x: t.x + window.scrollX,
                            y: t.y + window.scrollY
                        }
                    }
                }, {
                    key: "onContextFocusEvent",
                    value: function() {
                        this.parameters.isTabActive = !0
                    }
                }, {
                    key: "onContextBlurEvent",
                    value: function() {
                        this.parameters.isTabActive = !1
                    }
                }, {
                    key: "onWidgetClickEvent",
                    value: function(t, i) {
                        this.setWidgetCoordinates(), this.setClickCoordinates(i), this.parameters.action = "click", this.parameters.clickTime = e.getCurrentTimestamp(), this.parameters.widgetOnLoadDisposition = this.getWidgetDisposition();
                        var n = r.findTeaserElement(t);
                        if (n) {
                            var o = n.getBoundingClientRect();
                            this.parameters.isHidden = !n.offsetParent, this.parameters.teaserCoordinateX = o.x, this.parameters.teaserCoordinateY = o.y, this.parameters.teaserWidth = o.width, this.parameters.teaserHeight = o.height, this.parameters.clickToBorderDistance = r.getClosestDistanceInSquare({
                                x: i.clientX,
                                y: i.clientY
                            }, o), this.parameters.teaserViewportPercent = r.getInnerElementPercent(n, r.getViewportSize());
                            var a = r.findImageElementOfTeaser(n);
                            a && this.setImageProperties(a)
                        }
                    }
                }, {
                    key: "onContextScrollEvent",
                    value: function() {
                        this.parameters.lastScrollTime = e.getCurrentTimestamp()
                    }
                }, {
                    key: "onContextResizeEvent",
                    value: function() {
                        this.parameters.lastPageResizeTime = e.getCurrentTimestamp()
                    }
                }, {
                    key: "onRootResizeEvent",
                    value: function() {
                        this.parameters.lastWidgetResizeTime = e.getCurrentTimestamp()
                    }
                }, {
                    key: "onRootTouchEndEvent",
                    value: function(e) {
                        var t = e.changedTouches.item(0);
                        t && (this.parameters.tapRadiusX = t.radiusX, this.parameters.tapRadiusY = t.radiusY)
                    }
                }, {
                    key: "setWidgetCoordinates",
                    value: function() {
                        var t = e.root.getBoundingClientRect();
                        this.parameters.widgetCoordinateX = t.x, this.parameters.widgetCoordinateY = t.y
                    }
                }, {
                    key: "setImageProperties",
                    value: function(e) {
                        var t = e.getBoundingClientRect();
                        this.parameters.imageWidth = t.width, this.parameters.imageHeight = t.height
                    }
                }, {
                    key: "getWidgetDisposition",
                    value: function() {
                        return this.parameters.widgetCoordinateX + window.scrollX !== this.initialWidgetCoordinates.x || this.parameters.widgetCoordinateY + window.scrollY !== this.initialWidgetCoordinates.y
                    }
                }, {
                    key: "setClickCoordinates",
                    value: function(e) {
                        e.clientX || e.clientY ? (this.parameters.clickCoordinateX = e.clientX, this.parameters.clickCoordinateY = e.clientY) : e.touches && e.touches[0] && (this.parameters.clickCoordinateX = e.touches[0].clientX, this.parameters.clickCoordinateY = e.touches[0].clientY)
                    }
                }]), t
            }(),
            s = function() {
                function i(e) {
                    n(this, i), this.parameters = e
                }
                return o(i, [{
                    key: "send",
                    value: function(t, i) {
                        var n = new XMLHttpRequest;
                        n.open("POST", e.webProtocol + "//c.mgid.com/aws", !0), n.setRequestHeader("Content-Type", "application/json"), n.send(btoa(JSON.stringify({
                            rid: i,
                            showHash: t,
                            parameters: this.getEncodedParameters(t, i)
                        })))
                    }
                }, {
                    key: "getEncodedParameters",
                    value: function(e, i) {
                        var n = {
                            stringify: function(e) {
                                var t = {
                                    ct: btoa(e.ciphertext.toString())
                                };
                                return e.iv && (t.iv = e.iv.toString()), e.salt && (t.s = btoa(e.salt.toString()) + Math.random().toString(36).slice(-2)), JSON.stringify(t).replace(/\s/g, "")
                            }
                        };
                        return btoa(t.encrypt(JSON.stringify(this.parameters), e + i, {
                            format: n
                        }).toString())
                    }
                }]), i
            }(),
            c = new function e() {
                n(this, e), this.action = "undefined", this.isTabActive = !0, this.clickTime = 0, this.lastScrollTime = 0, this.lastPageResizeTime = 0, this.lastWidgetResizeTime = 0, this.widgetCoordinateX = 0, this.widgetCoordinateY = 0, this.tapRadiusX = 0, this.tapRadiusY = 0, this.isHidden = !1, this.clickToBorderDistance = 0, this.teaserCoordinateX = 0, this.teaserCoordinateY = 0, this.teaserWidth = 0, this.teaserHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.teaserViewportPercent = 0, this.widgetOnLoadDisposition = !1, this.clickCoordinateX = 0, this.clickCoordinateY = 0
            },
            l = new s(c),
            d = new a(c);
        e.initAntifraudStatistics = function() {
            d.onWidgetLoadEvent(), e.addEvent(e.context, "focus", (function() {
                return d.onContextFocusEvent()
            })), e.addEvent(e.context, "blur", (function() {
                return d.onContextBlurEvent()
            })), e.addEvent(e.context, "scroll", (function() {
                return d.onContextScrollEvent()
            })), e.addEvent(e.context, "resize", (function() {
                return d.onContextResizeEvent()
            })), e.addEvent(e.root, "resize", (function() {
                return d.onRootResizeEvent()
            })), e.addEvent(e.root, "touchend", (function(e) {
                return d.onRootTouchEndEvent(e)
            })), e.addClickHandler(e.clickHandlerList.onAntifraudStatisticsClick.handler, e.clickHandlerList.onAntifraudStatisticsClick.priority)
        }, e.onAntifraudStatisticsClickHandler = function(t, i) {
            return d.onWidgetClickEvent(t, i), l.send(t.getAttribute("data-hash"), e.servicerData.rid), !0
        }, e.afterLoadNewsHooks.push("initAntifraudStatistics")
    }
}, function(e, t) {
    var i, n, r = function(e, t) {
        var i = {},
            n = i.lib = {},
            r = function() {},
            o = n.Base = {
                extend: function(e) {
                    r.prototype = this;
                    var t = new r;
                    return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                        t.$super.init.apply(this, arguments)
                    }), t.init.prototype = t, t.$super = this, t
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            a = n.WordArray = o.extend({
                init: function(e, t) {
                    e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                },
                toString: function(e) {
                    return (e || c).stringify(this)
                },
                concat: function(e) {
                    var t = this.words,
                        i = e.words,
                        n = this.sigBytes;
                    if (e = e.sigBytes, this.clamp(), n % 4)
                        for (var r = 0; r < e; r++) t[n + r >>> 2] |= (i[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (n + r) % 4 * 8;
                    else if (65535 < i.length)
                        for (r = 0; r < e; r += 4) t[n + r >>> 2] = i[r >>> 2];
                    else t.push.apply(t, i);
                    return this.sigBytes += e, this
                },
                clamp: function() {
                    var t = this.words,
                        i = this.sigBytes;
                    t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, t.length = e.ceil(i / 4)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0), e
                },
                random: function(t) {
                    for (var i = [], n = 0; n < t; n += 4) i.push(4294967296 * e.random() | 0);
                    return new a.init(i, t)
                }
            }),
            s = i.enc = {},
            c = s.Hex = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; n < e; n++) {
                        var r = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        i.push((r >>> 4).toString(16)), i.push((15 & r).toString(16))
                    }
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new a.init(i, t / 2)
                }
            },
            l = s.Latin1 = {
                stringify: function(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                    return i.join("")
                },
                parse: function(e) {
                    for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new a.init(i, t)
                }
            },
            d = s.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(l.stringify(e)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return l.parse(unescape(encodeURIComponent(e)))
                }
            },
            u = n.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new a.init, this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var i = this._data,
                        n = i.words,
                        r = i.sigBytes,
                        o = this.blockSize,
                        s = r / (4 * o);
                    if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o, r = e.min(4 * t, r), t) {
                        for (var c = 0; c < t; c += o) this._doProcessBlock(n, c);
                        c = n.splice(0, t), i.sigBytes -= r
                    }
                    return new a.init(c, r)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(), e
                },
                _minBufferSize: 0
            });
        n.Hasher = u.extend({
            cfg: o.extend(),
            init: function(e) {
                this.cfg = this.cfg.extend(e), this.reset()
            },
            reset: function() {
                u.reset.call(this), this._doReset()
            },
            update: function(e) {
                return this._append(e), this._process(), this
            },
            finalize: function(e) {
                return e && this._append(e), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(e) {
                return function(t, i) {
                    return new e.init(i).finalize(t)
                }
            },
            _createHmacHelper: function(e) {
                return function(t, i) {
                    return new h.HMAC.init(e, i).finalize(t)
                }
            }
        });
        var h = i.algo = {};
        return i
    }(Math);
    n = (i = r).lib.WordArray, i.enc.Base64 = {
            stringify: function(e) {
                var t = e.words,
                    i = e.sigBytes,
                    n = this._map;
                e.clamp(), e = [];
                for (var r = 0; r < i; r += 3)
                    for (var o = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, a = 0; 4 > a && r + .75 * a < i; a++) e.push(n.charAt(o >>> 6 * (3 - a) & 63));
                if (t = n.charAt(64))
                    for (; e.length % 4;) e.push(t);
                return e.join("")
            },
            parse: function(e) {
                var t = e.length,
                    i = this._map;
                (r = i.charAt(64)) && -1 != (r = e.indexOf(r)) && (t = r);
                for (var r = [], o = 0, a = 0; a < t; a++)
                    if (a % 4) {
                        var s = i.indexOf(e.charAt(a - 1)) << a % 4 * 2,
                            c = i.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                        r[o >>> 2] |= (s | c) << 24 - o % 4 * 8, o++
                    } return n.create(r, o)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        },
        function(e) {
            function t(e, t, i, n, r, o, a) {
                return ((e = e + (t & i | ~t & n) + r + a) << o | e >>> 32 - o) + t
            }

            function i(e, t, i, n, r, o, a) {
                return ((e = e + (t & n | i & ~n) + r + a) << o | e >>> 32 - o) + t
            }

            function n(e, t, i, n, r, o, a) {
                return ((e = e + (t ^ i ^ n) + r + a) << o | e >>> 32 - o) + t
            }

            function o(e, t, i, n, r, o, a) {
                return ((e = e + (i ^ (t | ~n)) + r + a) << o | e >>> 32 - o) + t
            }
            for (var a = r, s = (l = a.lib).WordArray, c = l.Hasher, l = a.algo, d = [], u = 0; 64 > u; u++) d[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
            l = l.MD5 = c.extend({
                _doReset: function() {
                    this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(e, r) {
                    for (var a = 0; 16 > a; a++) {
                        var s = e[c = r + a];
                        e[c] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                    }
                    a = this._hash.words;
                    var c = e[r + 0],
                        l = (s = e[r + 1], e[r + 2]),
                        u = e[r + 3],
                        h = e[r + 4],
                        f = e[r + 5],
                        p = e[r + 6],
                        m = e[r + 7],
                        g = e[r + 8],
                        v = e[r + 9],
                        y = e[r + 10],
                        b = e[r + 11],
                        k = e[r + 12],
                        w = e[r + 13],
                        x = e[r + 14],
                        C = e[r + 15],
                        E = t(E = a[0], I = a[1], _ = a[2], S = a[3], c, 7, d[0]),
                        S = t(S, E, I, _, s, 12, d[1]),
                        _ = t(_, S, E, I, l, 17, d[2]),
                        I = t(I, _, S, E, u, 22, d[3]);
                    E = t(E, I, _, S, h, 7, d[4]), S = t(S, E, I, _, f, 12, d[5]), _ = t(_, S, E, I, p, 17, d[6]), I = t(I, _, S, E, m, 22, d[7]), E = t(E, I, _, S, g, 7, d[8]), S = t(S, E, I, _, v, 12, d[9]), _ = t(_, S, E, I, y, 17, d[10]), I = t(I, _, S, E, b, 22, d[11]), E = t(E, I, _, S, k, 7, d[12]), S = t(S, E, I, _, w, 12, d[13]), _ = t(_, S, E, I, x, 17, d[14]), E = i(E, I = t(I, _, S, E, C, 22, d[15]), _, S, s, 5, d[16]), S = i(S, E, I, _, p, 9, d[17]), _ = i(_, S, E, I, b, 14, d[18]), I = i(I, _, S, E, c, 20, d[19]), E = i(E, I, _, S, f, 5, d[20]), S = i(S, E, I, _, y, 9, d[21]), _ = i(_, S, E, I, C, 14, d[22]), I = i(I, _, S, E, h, 20, d[23]), E = i(E, I, _, S, v, 5, d[24]), S = i(S, E, I, _, x, 9, d[25]), _ = i(_, S, E, I, u, 14, d[26]), I = i(I, _, S, E, g, 20, d[27]), E = i(E, I, _, S, w, 5, d[28]), S = i(S, E, I, _, l, 9, d[29]), _ = i(_, S, E, I, m, 14, d[30]), E = n(E, I = i(I, _, S, E, k, 20, d[31]), _, S, f, 4, d[32]), S = n(S, E, I, _, g, 11, d[33]), _ = n(_, S, E, I, b, 16, d[34]), I = n(I, _, S, E, x, 23, d[35]), E = n(E, I, _, S, s, 4, d[36]), S = n(S, E, I, _, h, 11, d[37]), _ = n(_, S, E, I, m, 16, d[38]), I = n(I, _, S, E, y, 23, d[39]), E = n(E, I, _, S, w, 4, d[40]), S = n(S, E, I, _, c, 11, d[41]), _ = n(_, S, E, I, u, 16, d[42]), I = n(I, _, S, E, p, 23, d[43]), E = n(E, I, _, S, v, 4, d[44]), S = n(S, E, I, _, k, 11, d[45]), _ = n(_, S, E, I, C, 16, d[46]), E = o(E, I = n(I, _, S, E, l, 23, d[47]), _, S, c, 6, d[48]), S = o(S, E, I, _, m, 10, d[49]), _ = o(_, S, E, I, x, 15, d[50]), I = o(I, _, S, E, f, 21, d[51]), E = o(E, I, _, S, k, 6, d[52]), S = o(S, E, I, _, u, 10, d[53]), _ = o(_, S, E, I, y, 15, d[54]), I = o(I, _, S, E, s, 21, d[55]), E = o(E, I, _, S, g, 6, d[56]), S = o(S, E, I, _, C, 10, d[57]), _ = o(_, S, E, I, p, 15, d[58]), I = o(I, _, S, E, w, 21, d[59]), E = o(E, I, _, S, h, 6, d[60]), S = o(S, E, I, _, b, 10, d[61]), _ = o(_, S, E, I, l, 15, d[62]), I = o(I, _, S, E, v, 21, d[63]);
                    a[0] = a[0] + E | 0, a[1] = a[1] + I | 0, a[2] = a[2] + _ | 0, a[3] = a[3] + S | 0
                },
                _doFinalize: function() {
                    var t = this._data,
                        i = t.words,
                        n = 8 * this._nDataBytes,
                        r = 8 * t.sigBytes;
                    i[r >>> 5] |= 128 << 24 - r % 32;
                    var o = e.floor(n / 4294967296);
                    for (i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), t.sigBytes = 4 * (i.length + 1), this._process(), i = (t = this._hash).words, n = 0; 4 > n; n++) r = i[n], i[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                    return t
                },
                clone: function() {
                    var e = c.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            }), a.MD5 = c._createHelper(l), a.HmacMD5 = c._createHmacHelper(l)
        }(Math),
        function() {
            var e, t = r,
                i = (e = t.lib).Base,
                n = e.WordArray,
                o = (e = t.algo).EvpKDF = i.extend({
                    cfg: i.extend({
                        keySize: 4,
                        hasher: e.MD5,
                        iterations: 1
                    }),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e)
                    },
                    compute: function(e, t) {
                        for (var i = (s = this.cfg).hasher.create(), r = n.create(), o = r.words, a = s.keySize, s = s.iterations; o.length < a;) {
                            c && i.update(c);
                            var c = i.update(e).finalize(t);
                            i.reset();
                            for (var l = 1; l < s; l++) c = i.finalize(c), i.reset();
                            r.concat(c)
                        }
                        return r.sigBytes = 4 * a, r
                    }
                });
            t.EvpKDF = function(e, t, i) {
                return o.create(i).compute(e, t)
            }
        }(), r.lib.Cipher || function(e) {
            var t = (p = r).lib,
                i = t.Base,
                n = t.WordArray,
                o = t.BufferedBlockAlgorithm,
                a = p.enc.Base64,
                s = p.algo.EvpKDF,
                c = t.Cipher = o.extend({
                    cfg: i.extend(),
                    createEncryptor: function(e, t) {
                        return this.create(this._ENC_XFORM_MODE, e, t)
                    },
                    createDecryptor: function(e, t) {
                        return this.create(this._DEC_XFORM_MODE, e, t)
                    },
                    init: function(e, t, i) {
                        this.cfg = this.cfg.extend(i), this._xformMode = e, this._key = t, this.reset()
                    },
                    reset: function() {
                        o.reset.call(this), this._doReset()
                    },
                    process: function(e) {
                        return this._append(e), this._process()
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function(e) {
                        return {
                            encrypt: function(t, i, n) {
                                return ("string" == typeof i ? m : f).encrypt(e, t, i, n)
                            },
                            decrypt: function(t, i, n) {
                                return ("string" == typeof i ? m : f).decrypt(e, t, i, n)
                            }
                        }
                    }
                });
            t.StreamCipher = c.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var l = p.mode = {},
                d = function(e, t, i) {
                    var n = this._iv;
                    n ? this._iv = void 0 : n = this._prevBlock;
                    for (var r = 0; r < i; r++) e[t + r] ^= n[r]
                },
                u = (t.BlockCipherMode = i.extend({
                    createEncryptor: function(e, t) {
                        return this.Encryptor.create(e, t)
                    },
                    createDecryptor: function(e, t) {
                        return this.Decryptor.create(e, t)
                    },
                    init: function(e, t) {
                        this._cipher = e, this._iv = t
                    }
                })).extend();
            u.Encryptor = u.extend({
                processBlock: function(e, t) {
                    var i = this._cipher,
                        n = i.blockSize;
                    d.call(this, e, t, n), i.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n)
                }
            }), u.Decryptor = u.extend({
                processBlock: function(e, t) {
                    var i = this._cipher,
                        n = i.blockSize,
                        r = e.slice(t, t + n);
                    i.decryptBlock(e, t), d.call(this, e, t, n), this._prevBlock = r
                }
            }), l = l.CBC = u, u = (p.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var i, r = (i = (i = 4 * t) - e.sigBytes % i) << 24 | i << 16 | i << 8 | i, o = [], a = 0; a < i; a += 4) o.push(r);
                    i = n.create(o, i), e.concat(i)
                },
                unpad: function(e) {
                    e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                }
            }, t.BlockCipher = c.extend({
                cfg: c.cfg.extend({
                    mode: l,
                    padding: u
                }),
                reset: function() {
                    c.reset.call(this);
                    var e = (t = this.cfg).iv,
                        t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor;
                    else i = t.createDecryptor, this._minBufferSize = 1;
                    this._mode = i.call(t, this, e && e.words)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else t = this._process(!0), e.unpad(t);
                    return t
                },
                blockSize: 4
            });
            var h = t.CipherParams = i.extend({
                    init: function(e) {
                        this.mixIn(e)
                    },
                    toString: function(e) {
                        return (e || this.formatter).stringify(this)
                    }
                }),
                f = (l = (p.format = {}).OpenSSL = {
                    stringify: function(e) {
                        var t = e.ciphertext;
                        return ((e = e.salt) ? n.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a)
                    },
                    parse: function(e) {
                        var t = (e = a.parse(e)).words;
                        if (1398893684 == t[0] && 1701076831 == t[1]) {
                            var i = n.create(t.slice(2, 4));
                            t.splice(0, 4), e.sigBytes -= 16
                        }
                        return h.create({
                            ciphertext: e,
                            salt: i
                        })
                    }
                }, t.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: l
                    }),
                    encrypt: function(e, t, i, n) {
                        n = this.cfg.extend(n);
                        var r = e.createEncryptor(i, n);
                        return t = r.finalize(t), r = r.cfg, h.create({
                            ciphertext: t,
                            key: i,
                            iv: r.iv,
                            algorithm: e,
                            mode: r.mode,
                            padding: r.padding,
                            blockSize: e.blockSize,
                            formatter: n.format
                        })
                    },
                    decrypt: function(e, t, i, n) {
                        return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(i, n).finalize(t.ciphertext)
                    },
                    _parse: function(e, t) {
                        return "string" == typeof e ? t.parse(e, this) : e
                    }
                })),
                p = (p.kdf = {}).OpenSSL = {
                    execute: function(e, t, i, r) {
                        return r || (r = n.random(8)), e = s.create({
                            keySize: t + i
                        }).compute(e, r), i = n.create(e.words.slice(t), 4 * i), e.sigBytes = 4 * t, h.create({
                            key: e,
                            iv: i,
                            salt: r
                        })
                    }
                },
                m = t.PasswordBasedCipher = f.extend({
                    cfg: f.cfg.extend({
                        kdf: p
                    }),
                    encrypt: function(e, t, i, n) {
                        return i = (n = this.cfg.extend(n)).kdf.execute(i, e.keySize, e.ivSize), n.iv = i.iv, (e = f.encrypt.call(this, e, t, i.key, n)).mixIn(i), e
                    },
                    decrypt: function(e, t, i, n) {
                        return n = this.cfg.extend(n), t = this._parse(t, n.format), i = n.kdf.execute(i, e.keySize, e.ivSize, t.salt), n.iv = i.iv, f.decrypt.call(this, e, t, i.key, n)
                    }
                })
        }(),
        function() {
            for (var e = r, t = e.lib.BlockCipher, i = e.algo, n = [], o = [], a = [], s = [], c = [], l = [], d = [], u = [], h = [], f = [], p = [], m = 0; 256 > m; m++) p[m] = 128 > m ? m << 1 : m << 1 ^ 283;
            var g = 0,
                v = 0;
            for (m = 0; 256 > m; m++) {
                var y = (y = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4) >>> 8 ^ 255 & y ^ 99;
                n[g] = y, o[y] = g;
                var b = p[g],
                    k = p[b],
                    w = p[k],
                    x = 257 * p[y] ^ 16843008 * y;
                a[g] = x << 24 | x >>> 8, s[g] = x << 16 | x >>> 16, c[g] = x << 8 | x >>> 24, l[g] = x, x = 16843009 * w ^ 65537 * k ^ 257 * b ^ 16843008 * g, d[y] = x << 24 | x >>> 8, u[y] = x << 16 | x >>> 16, h[y] = x << 8 | x >>> 24, f[y] = x, g ? (g = b ^ p[p[p[w ^ b]]], v ^= p[p[v]]) : g = v = 1
            }
            var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            i = i.AES = t.extend({
                _doReset: function() {
                    for (var e = (i = this._key).words, t = i.sigBytes / 4, i = 4 * ((this._nRounds = t + 6) + 1), r = this._keySchedule = [], o = 0; o < i; o++)
                        if (o < t) r[o] = e[o];
                        else {
                            var a = r[o - 1];
                            o % t ? 6 < t && 4 == o % t && (a = n[a >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a]) : (a = n[(a = a << 8 | a >>> 24) >>> 24] << 24 | n[a >>> 16 & 255] << 16 | n[a >>> 8 & 255] << 8 | n[255 & a], a ^= C[o / t | 0] << 24), r[o] = r[o - t] ^ a
                        } for (e = this._invKeySchedule = [], t = 0; t < i; t++) o = i - t, a = t % 4 ? r[o] : r[o - 4], e[t] = 4 > t || 4 >= o ? a : d[n[a >>> 24]] ^ u[n[a >>> 16 & 255]] ^ h[n[a >>> 8 & 255]] ^ f[n[255 & a]]
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, a, s, c, l, n)
                },
                decryptBlock: function(e, t) {
                    var i = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = i, this._doCryptBlock(e, t, this._invKeySchedule, d, u, h, f, o), i = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = i
                },
                _doCryptBlock: function(e, t, i, n, r, o, a, s) {
                    for (var c = this._nRounds, l = e[t] ^ i[0], d = e[t + 1] ^ i[1], u = e[t + 2] ^ i[2], h = e[t + 3] ^ i[3], f = 4, p = 1; p < c; p++) {
                        var m = n[l >>> 24] ^ r[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ i[f++],
                            g = n[d >>> 24] ^ r[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & l] ^ i[f++],
                            v = n[u >>> 24] ^ r[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & d] ^ i[f++];
                        h = n[h >>> 24] ^ r[l >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & u] ^ i[f++], l = m, d = g, u = v
                    }
                    m = (s[l >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ i[f++], g = (s[d >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & l]) ^ i[f++], v = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & d]) ^ i[f++], h = (s[h >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & u]) ^ i[f++], e[t] = m, e[t + 1] = g, e[t + 2] = v, e[t + 3] = h
                },
                keySize: 8
            });
            e.AES = t._createHelper(i)
        }(), e.exports = r.AES
}, function(e, t, i) {
    window.MarketGidCRtbBlock1014592 = function(e) {
        this.afterLoadNewsHooks.push("cmPixelLoad"), this.cmPixelLoad = function(t) {
            if (!e.context["i.js.loaded"] && e.cookieMatchingDomain) {
                e.context["i.js.loaded"] = !0;
                var i = window.MarketGidInfC1014592.context.document.createElement("script");
                i.charset = "utf-8";
                var n = e.webProtocol + "//" + e.cookieMatchingDomain + "/i.js?" + e.getCbusterParameter();
                "string" == typeof t && "" != t && (n += t), i.src = n, i.type = "text/javascript", i.async = !0, i.onerror = function() {
                    e.context["i.js.loaded"] = !1
                }, (void 0 !== window.MarketGidInfC1014592.realRoot ? window.MarketGidInfC1014592.realRoot : window.MarketGidInfC1014592.root).parentNode.appendChild(i)
            }
            if (!e.context["i-noref.js.loaded"] && e.cookieMatchingDomain) {
                e.context["i-noref.js.loaded"] = !0;
                var r = document.createElement("IFRAME");
                r.src = "about:blank", r.frameBorder = 0, r.style.position = "absolute", r.style.top = "0px", r.style.left = "-1px", r.style.width = "0px", r.style.height = "0px", r.style.display = "none", r.onload = function() {
                    var t = this.contentDocument.createElement("script");
                    t.charset = "utf-8";
                    var i = e.webProtocol + "//" + e.cookieMatchingDomain + "/i-noref.js?" + e.getCbusterParameter();
                    t.src = i, t.type = "text/javascript", t.async = !0, t.onerror = function() {
                        e.context["i-noref.js.loaded"] = !1
                    }, this.contentDocument.body.appendChild(t)
                }, document.body.appendChild(r)
            }
        }
    }
}, function(e, t) {
    function i(e, t) {
        var i;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (i = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return n(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                i && (e = i);
                var r = 0,
                    o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, s = !0,
            c = !1;
        return {
            s: function() {
                i = e[Symbol.iterator]()
            },
            n: function() {
                var e = i.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, a = e
            },
            f: function() {
                try {
                    s || null == i.return || i.return()
                } finally {
                    if (c) throw a
                }
            }
        }
    }

    function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }
    window.MarketGidCDiscountBlock1014592 = function(e) {
        this.afterLoadNewsHooks.push("discountsLoader"), this.discountMouseOver = function(t) {
            e.helpIE(this);
            var i = this.getElementsByClassName("mcpriceold57349495"),
                n = this.getElementsByClassName("mcprice57349495"),
                r = this.getElementsByClassName("mcdiscount57349495");
            i.length > 0 && (i[0].style.display = "none", n.length > 1 && (n[1].style.display = "none"), r.length > 0 && (r[0].style.display = "inline"))
        }, this.discountMouseOut = function(t) {
            e.helpIE(this);
            var i = this.getElementsByClassName("mcdiscount57349495"),
                n = this.getElementsByClassName("mcprice57349495"),
                r = this.getElementsByClassName("mcpriceold57349495");
            r.length > 0 && (i.length > 0 && (i[0].style.display = "none"), n.length > 1 && (n[1].style.display = "inline"), r[0].style.display = "inline")
        }, this.discountsLoader = function() {
            if (this.root) {
                this.helpIE(this.root);
                var e, t = i(this.root.getElementsByClassName("mcteaser57349495"));
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        n.onmouseout = this.discountMouseOut, n.onmouseover = this.discountMouseOver
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            }
        }, this.helpIE = function(e) {
            void 0 === e.getElementsByClassName && (e.getElementsByClassName = function(e) {
                for (var t = [], i = new RegExp("\\b" + e + "\\b"), n = this.getElementsByTagName("*"), r = 0; r < n.length; r++) {
                    var o = n[r].className;
                    i.test(o) && t.push(n[r])
                }
                return t
            })
        }
    }
}, function(e, t, i) {
    window.MarketGidCActivateDelayBlock1014592 = function(e) {
        var t;
        e.clickableDelay = !1;
        var i = !1;
        e.afterLoadNewsHooks.push("initActivateDelay"), e.isWagesLink = function(t) {
            var i = t.getAttribute("data-hash");
            return e.teaserData[i] && "w" === e.teaserData[i].coopType
        }, e.isCloseLink = function(e) {
            return e.classList.contains("mg-close-button-div-inner")
        }, e.activateDelayLinkHandler = function(t, n) {
            return !!i || (!!(e.clickableDelay && e.isWagesLink(t) || e.isCloseLink(t)) || (void 0 !== e.servicerData.dc || (e.doubleClickType = "delay", e.doubleClickHandler(t), e.linksBlocked = !0, n.preventDefault(), !1)))
        }, e.initActivateDelay = function(n, r, o) {
            if (!t) {
                t = !0;
                var a = parseInt(2e3);
                0, e.addClickHandler(e.clickHandlerList.activateDelayLink.handler, e.clickHandlerList.activateDelayLink.priority), e.context.setTimeout((function() {
                    i = !0, e.linksBlocked = !1, e.clickableDelay = !1
                }), a)
            }
        }
    }
}, function(e, t, i) {
    window.MarketGidCIframeSizeChangerBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("initIframeSizeChange"), e.initIframeSizeChange = function() {
            var t = null;
            try {
                if (void 0 !== t && null != t || (t = e.context.parent.document.getElementById(e.context.name)), void 0 !== t) try {
                    var i = e.context.parent.document.getElementById(t.name + "__container__").parentNode;
                    i.style.width = "initial", i.style.height = "initial"
                } catch (e) {}
            } catch (t) {
                return e.log("SafeFrame. Checking for support..."), void(e.isSafeFrameSupported() && e.isSafeFrameAllowedPush() ? (e.log("SafeFrame. Supported"), e.safeFrameRegister(), e.safeFrameExpand()) : e.log("SafeFrame. Unsupported!"))
            }
            if (null != t) {
                var n = "0".split("*");
                void 0 !== n[0] && (t.width = n[0] + "px"), void 0 !== n[1] && (t.height = n[1] + "px")
            }
        }, e.isSafeFrameSupported = function() {
            return void 0 !== e.context.$sf
        }, e.isSafeFrameAllowedPush = function() {
            return e.context.$sf.ext.supports()["exp-push"]
        }, e.safeFrameExpand = function() {
            e.log("SafeFrame. Expanding...");
            var t = e.context.$sf.ext.geom().exp,
                i = {
                    push: !0,
                    t: t.t,
                    l: t.l,
                    r: t.r,
                    b: t.b
                };
            e.context.$sf.ext.expand(i)
        }, e.safeFrameRegister = function() {
            e.log("SafeFrame. Register..."), e.context.$sf.ext.register(300, 250, (function(t, i) {
                e.log("SafeFrame. " + t + "; " + JSON.stringify(i))
            }))
        }
    }
}, function(e, t) {
    window.MarketGidCAccidentalClicksBlock1014592 = function(e) {
        e.afterInitHooks.push("accidentalClicksLoad"), e.accidentalClicksDelay = 1e3 * (parseInt(e.globalSettings.accidental_clicks_delay) || 5), e.accidentalClicksDisableTypes = "wages".split(","), e.teasersClickTimes = {}, e.accidentalClicksHandler = function(t, i) {
            if (2 === i.button) return !0;
            var n = t.getAttribute("data-hash"),
                r = (new Date).getTime();
            if (e.doubleClickEnabled && void 0 === e.servicerData.dc) return !0;
            if (void 0 !== e.servicerData.dc && n in e.hashTimer && r - e.hashTimer[n] < e.servicerData.dc) return !0;
            switch (e.teaserData[n].coopType) {
                case "w":
                    if (-1 == e.accidentalClicksDisableTypes.indexOf("wages")) return !0;
                    break;
                case "e":
                    if (-1 == e.accidentalClicksDisableTypes.indexOf("exchange")) return !0;
                    break;
                case "i":
                    if (-1 == e.accidentalClicksDisableTypes.indexOf("int_exchange")) return !0;
                    break;
                default:
                    return !0
            }
            return e.teasersClickTimes.hasOwnProperty(n) && (new Date).getTime() - e.teasersClickTimes[n] <= e.accidentalClicksDelay ? (i.preventDefault(), e.doubleClickType = "accidental", e.doubleClickHandler(t), !1) : (e.teasersClickTimes[n] = (new Date).getTime(), !0)
        }, e.accidentalClicksLoad = function() {
            e.addClickHandler(e.clickHandlerList.accidentalClicks.handler, e.clickHandlerList.accidentalClicks.priority)
        }
    }
}, function(e, t) {
    window.MarketGidCExternalCountersBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("handleExternalCountersListener"), e.externalCountersLinkHandler = function(t, i) {
            var n = t.getAttribute("data-hash");
            if (Array.isArray(e.teaserData[n].clicktrackers)) {
                var r = e.teaserData[n].clicktrackers;
                if (r.length)
                    for (var o = 0; o < r.length; o++) {
                        e.context.document.createElement("IMG").src = r[o]
                    }
            }
            return !0
        }, e.handleExternalCountersListener = function() {
            e.addClickHandler(e.clickHandlerList.externalCountersLink.handler, e.clickHandlerList.externalCountersLink.priority)
        }
    }
}, function(e, t) {
    window.MarketGidCYandexTurboBlock1014592 = function(e) {
        e.isTurbo = function() {
            return null != e.root.parentNode && void 0 !== e.root.parentNode.dataset && void 0 !== e.root.parentNode.dataset.widget
        }, e.executeTurboCallback = function() {
            var t = e.root.getBoundingClientRect();
            setInterval((function() {
                t = e.root.getBoundingClientRect(), e.context.parent.postMessage({
                    message: "loading-succeed",
                    height: t.height,
                    width: t.width
                }, "*")
            }), 100)
        }, e.isTurbo() && e.afterLoadNewsHooks.push("executeTurboCallback")
    }
}, function(e, t) {
    window.MarketGidCContentPreviewBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("addPreviewEvent"), e.preloadAnimationStyles = ".image-container {\noverflow: hidden;}\n.preload {\n  background: #2a397b;\n  left: -100%;\n  position: absolute;\n  top: 0;\n  height: 4px;\n  width: 100%;\n  z-index: 2;\n  -webkit-animation: preloadAnimation linear .8s;\n  -moz-animation: preloadAnimation linear .8s;\n  -ms-animation: preloadAnimation linear .8s;\n  -o-animation: preloadAnimation linear .8s;\n  animation: preloadAnimation linear .8s;\n  -webkit-animation-iteration-count: 1;\n  -moz-animation-iteration-count: 1;\n  -ms-animation-iteration-count: 1;\n  -o-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n@keyframes preloadAnimation {\n  0% {\n    transform: translateX(0)\n  }\n  90% {\n    transform: translateX(100%)\n  }\n  100% {\n    transform: translateY(-2px)\n  }\n}\n@-moz-keyframes preloadAnimation {\n  0% {\n    -moz-transform: translateX(0)\n  }\n  90% {\n    -moz-transform: translateX(100%)\n  }\n  100% {\n    -moz-transform: translateY(-2px)\n  }\n}\n@-ms-keyframes preloadAnimation {\n  0% {\n    -ms-transform: translateX(0)\n  }\n  90% {\n    -ms-transform: translateX(100%)\n  }\n  100% {\n    -ms-transform: translateY(-2px)\n  }\n}", e.addPreviewEvent = function() {
            e.addEvent(e.root, "mouseover", (function(t) {
                e.injectPreview(t)
            })), e.addEvent(e.root, "touchstart", (function(t) {
                e.injectPreview(t)
            })), e.addEvent(e.root, "mouseout", (function(t) {
                e.removePreview(t)
            })), e.addEvent(e.root, "touchend", (function(t) {
                e.removePreview(t)
            })), e.addStyle("contentPreview", e.preloadAnimationStyles)
        }, e.injectPreview = function(t) {
            if ("mcimg" === t.target.className) {
                var i = t.target.parentNode.parentNode.dataset.hash;
                if (void 0 !== e.teaserData[i] && void 0 !== e.teaserData[i].other.vp) {
                    var n = e.context.document.createElement("div");
                    n.setAttribute("class", "preload"), e.addEvent(n, "animationend", (function(e) {
                        e.target.parentNode.removeChild(e.target)
                    })), t.target.parentNode.appendChild(n), setTimeout((function() {
                        var n = e.context.document.createElement("video");
                        n.src = e.teaserData[i].other.vp, n.classList.add("previewContent"), n.loop = "loop", n.autoplay = !0, n.setAttribute("playsinline", ""), n.muted = "muted", n.style.position = "absolute", n.style.top = 0, n.style.left = 0, n.style.width = "100%", t.target.parentNode.appendChild(n)
                    }), 100)
                }
            }
        }, e.removePreview = function(t) {
            var i = t.target;
            "mouseout" === t.type && (i = t.relatedTarget);
            for (var n = e.root.querySelectorAll("video.previewContent"), r = 0; r < n.length; r++) null == i || null == i.parentNode || void 0 === i.parentNode.classList || i.parentNode.classList.contains("image-container") && n[r] === i.parentNode.querySelector("video.previewContent") || (n[r].parentNode.querySelector("img.mcimg").style.display = "block", n[r].parentNode.removeChild(n[r]))
        }
    }
}, function(e, t, i) {
    window.MarketGidCCountersBlock1014592 = function(e) {
        this.afterLoadNewsHooks.push("countersLoad"), this.countersLoad = function() {
            if (parseInt(e.id) !== parseInt(1014592)) {
                var t = e.childWidgetsData[e.id];
                t && t.hasNewsWidget ? t.newsWidgetIdPartner : null
            }
        }
    }
}, function(e, t, i) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var r = i(36);
    window.MarketGidCInArticleWidgetBlock1014592 = function(e) {
        e.beforeLoadNewsHooks.push("hideInArticleWidgetBlock"), e.afterLoadNewsHooks.push("initInArticleWidget");
        e.context.document;
        var t = 0,
            i = 0;

        function o(e, t, i) {
            function o(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }
            o(t) && o(i) || console.error("SmartInformerCreator.constructor: Provided percentages must be numeric only. _percentageFrom: " + t + " _percentageTo: " + i + " given"), t || console.warn("SmartInformerCreator.constructor: Percentage from was excepted but it was not given. Default value (30% will be used)"), i || console.warn("SmartInformerCreator.constructor: Percentage to was excepted but it was not given. Default value (60% will be used)"), (t < 0 || t > 100) && console.error("SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. " + t + " given"), (i < 0 || i > 100) && console.error("SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. " + t + " given"), t > i && console.error("SmartInformerCreator.constructor: _percentageFrom > _percentageTo. This must be _percentageFrom < _percentageTo");
            var a = this,
                s = e;
            s.parentNode && s.parentNode.removeChild(s);
            var c, l, d, u, h, f = null == t ? 30 : t,
                p = null == i ? 60 : i,
                m = 0,
                g = 0,
                v = 0,
                y = !1,
                b = {};

            function k(e) {
                if (e.id) {
                    var t = parent.document.getElementById(e.id);
                    return t ? t.parentNode : null
                }
                if (e.classList && e.classList.length) {
                    var i = [];
                    [].forEach.call(e.classList, (function(e) {
                        i.push(e)
                    }));
                    var n = parent.document.getElementsByClassName(i.join(" "));
                    return n.length && void 0 !== n[0] ? n[0].parentNode : null
                }
                return e.parentNode ? w(e.parentNode) : null
            }

            function w(e, t, i) {
                var n = t || !1,
                    r = i || 0;
                if (e[0] && n && 1 === r) {
                    var o = e[0];
                    if (o.id) return parent.document.getElementById(o.id);
                    if (o.classList && o.classList.length) {
                        var a = [];
                        return [].forEach.call(o.classList, (function(e) {
                            a.push(e)
                        })), parent.document.querySelector(o.tagName + "." + a.join(".")).parentNode
                    }
                    return null
                }
                var s = null;
                return Array.isHTMLCollection(e) && e.length ? [].forEach.call(e, (function(e) {
                    s = k(e)
                })) : s = k(e), s
            }

            function x(e) {
                return !(0 !== g || !a.articleAcceptedWidth) || e <= g && a.articleAcceptedWidth <= e
            }

            function C(e) {
                if (!e || !e.parentNode) return e;
                if (x(T(e.parentNode))) {
                    var t = function(e) {
                        if (!e.children) return console.warn("SmartInformerCreator._getChildWithSuitableWidth: Children were waited but, " + n(e.children) + "given"), null;
                        var t = null;
                        if (e.children) return [].forEach.call(e.children, (function(e) {
                            !t && (t = x(T(e)) ? e : null)
                        })), t;
                        return x(T(e.children[0])) ? e.children[0] : null
                    }(e.parentNode);
                    return t || e.parentNode
                }
                return C(e.parentNode)
            }

            function E(e, t) {
                if (m <= 300) return console.warn("SmartInformerCreator._insert: Article is too small to render informer block"), void(y = !0);
                var i = t || !1,
                    n = function e(t) {
                        var i = Array.prototype.indexOf.call(t.parentNode.children, t),
                            n = t.parentNode.children[i + 1];
                        return n && !n.clientHeight ? e(n) : n
                    }(e);
                if (I(e, ["FIGURE", "IMG", "TABLE", "IFRAME", "TIME", "CODE"])) return e.parentNode.insertBefore(d, e.nextSibling), d = parent.document.getElementById(d.id), void(s.parentNode || (d.appendChild(s), y = !0));
                if (function(e, t) {
                        if (!t || !t.length) return console.warn("SmartInformerCreator._hasChildWithClass: tags MUST NOT be empty array"), !1;
                        if (void 0 === e) return !1;
                        if (!e.children || 0 === e.children.length) return !1;
                        var i = !1;
                        return [].forEach.call(e.children, (function(e) {
                            e.children && e.children.length > 0 && [].forEach.call(e.children, (function(e) {
                                i || (i = I(e, t))
                            })), i || t.forEach((function(t) {
                                i || (i = e.classList.contains(t))
                            }))
                        })), i
                    }(n, ["SC_TBlock", "fb_iframe_widget", "twitter-tweet-button", "adsbygoogle"])) E(n, !1);
                else {
                    if ("IMG" !== e.tagName && !x(e.clientWidth) || -1 != e.className.indexOf("size-full") && !x(e.clientWidth)) {
                        var r = C(e);
                        return r.parentNode ? r.parentNode.insertBefore(d, r) : e.parentNode.insertBefore(d, i ? e : e.nextSibling), void S(s)
                    } - 1 != ["H1", "H2", "H3", "H4", "H5", "H6"].indexOf(e.tagName) || _(n, ["UL", "OL"]) || _(n, ["FIGURE", "IMG", "TABLE", "IFRAME", "TIME", "CODE"]) ? void 0 !== n.nextSibling ? e.parentNode.insertBefore(d, n.nextSibling) : console.error("SmartInformerCreator._insert: Cant insert informer block after image - it does not exist") : I(e, ["INS"]) ? e.parentNode.insertBefore(d, n) : e.parentNode.insertBefore(d, i ? e : e.nextSibling), S(s)
                }
            }

            function S(e) {
                d.id != d.id && (d = parent.document.getElementById(d.id)).appendChild(e), y = !0
            }

            function _(e, t) {
                return void 0 !== e && -1 != t.indexOf(e.tagName) || I(e, t)
            }

            function I(e, t) {
                if (!t || !t.length) return console.warn("SmartInformerCreator._hasChildTags: tags MUST NOT be empty array"), !1;
                if (void 0 === e) return !1;
                if (!e.children || 0 === e.children.length) return !1;
                var i = !1;
                return [].forEach.call(e.children, (function(e) {
                    e.children && e.children.length > 0 && [].forEach.call(e.children, (function(e) {
                        i || (i = I(e, t))
                    })), i || -1 != t.indexOf(e.tagName) && (i = !0)
                })), i
            }

            function T(e) {
                if (e && !L(e)) {
                    var t = e.clientWidth;
                    return t || (e.children && 0 === e.children.length && 0 === t ? t : e.children ? ([].forEach.call(e.children, (function(e) {
                        t = e.children ? T(e) : e.clientWidth + T(e) + M(e, "right")
                    })), t) : t)
                }
            }

            function A(e) {
                var t = 0;
                if (parent.document.createRange) {
                    var i = parent.document.createRange();
                    if (i.selectNodeContents(e), i.getBoundingClientRect) {
                        var n = i.getBoundingClientRect();
                        n && (t = n.bottom - n.top)
                    }
                }
                return t
            }

            function M(e, t) {
                try {
                    var i = (e.currentStyle || window.parent.getComputedStyle(e))["margin" + (n = t.toLowerCase(), n.charAt(0).toUpperCase() + n.slice(1))].replace("px", "");
                    return o(i) ? parseInt(i) : 0
                } catch (t) {
                    return "#text" === e.nodeName ? A(e) : 0
                }
                var n
            }

            function D(e) {
                if (!y && e && !L(e) && void 0 !== e.clientHeight) {
                    var t = 0;
                    if (0 !== (t = O(e) ? A(e) : function e(t) {
                            if (t) {
                                var i = 0;
                                return (i = O(t) ? A(t) : t.clientHeight) ? i + M(t, "bottom") + M(t, "top") : (t.children && 0 === t.children.length && 0 === i || [].forEach.call(t.children, (function(t) {
                                    i = t.children ? e(t) : t.clientHeight + M(t, "bottom") + M(t, "top")
                                })), i)
                            }
                        }(e)) && (v += t, !b.beforeGoal)) {
                        if (b.neededGoal) {
                            if (I(e, ["P", "BLOCKQUOTE", "PRE"])) return v -= t, void[].forEach.call(e.children, (function(e) {
                                D(e)
                            }));
                            if (-1 != ["TR", "TD", "THEAD", "TBODY", "TFOOTER", "TABLE"].indexOf(e.tagName)) {
                                return void E(function e(t) {
                                    return "TABLE" === t.tagName ? t : t.parentNode && "TABLE" !== t.parentNode.tagName ? e(t.parentNode) : t.parentNode
                                }(e))
                            }
                            return -1 != ["LI", "INS", "IMG", "TABLE"].indexOf(e.tagName) ? "LI" === e.tagName && f <= 10 ? void E(e, !0) : void E(e.parentNode) : void E(e)
                        }
                        if (b.afterGoal) {
                            if ((v -= t) + t < m && -1 != ["IFRAME", "IMG", "FIGURE", "TIME", "CODE"].indexOf(e.tagName)) return void E(e);
                            if ((t >= m || v + t >= m) && e.children && e.children.length) return void N(e);
                            if (-1 != ["P", "BLOCKQUOTE", "PRE", "SPAN"].indexOf(e.tagName)) return -1 != ["BLOCKQUOTE", "PRE"].indexOf(e.tagName) ? e.children ? void[].forEach.call(e.children, (function(e) {
                                D(e)
                            })) : void E(e) : I(e, ["IMG", "FIGURE", "IFRAME"]) ? void E(function e(t, i) {
                                if (!i) return console.warn("SmartInformerCreator._getFirstChildByTag: - tag MUST NOT be empty array"), !1;
                                if (void 0 === t) return console.warn("SmartInformerCreator._getFirstChildByTag: - Node MUST NOT be empty "), !1;
                                if (!t.children || 0 === t.children.length) return !1;
                                var n = null;
                                return [].forEach.call(t.children, (function(t) {
                                    t.children && t.children.length > 0 && [].forEach.call(t.children, (function(t) {
                                        n || (n = e(t, i))
                                    })), n || -1 != i.indexOf(t.tagName) && (n = t)
                                })), n
                            }(e, ["IMG", "FIGURE", "IFRAME"])) : f >= 70 && v + t <= m ? void E(e) : void E(e, !0);
                            N(e)
                        }
                    }
                }
            }

            function N(e) {
                e && (e.children && e.children.length ? [].forEach.call(e.children, (function(e) {
                    D(e)
                })) : function e(t) {
                    t.parentNode.children.length > 1 ? D(t.nextSibling) : e(t.parentNode.nextSibling)
                }(e))
            }
            Object.defineProperties(this, {
                articleAcceptedWidth: {
                    get: function() {
                        return g - 20 * g / 100
                    }
                }
            }), Object.defineProperties(b, {
                beforeGoal: {
                    get: function() {
                        return 0 === v || v <= u
                    }
                },
                neededGoal: {
                    get: function() {
                        return v >= u && v <= h
                    }
                },
                afterGoal: {
                    get: function() {
                        return v >= h || v <= m
                    }
                }
            });
            var P = ["native_ad", "adds", "td-post-next-prev", "adsb30", "sadserver", "adsbygoogle", "fb-share-button", "fb_iframe_widget", "fb-comments", "td_block_related_posts", "td-post-sharing", "td-post-sharing-top", "sharing", "shareaholic-ui", "comments", "related", "share", "at-share-btn-elements", "post-footer"],
                B = ["ad-space", "fb_comments_div", "ad-space", "div-gpt-ad", "MarketGidScript", "MarketGidScriptRoot", "disqus_comments_div", "ScriptRoot", "Preload", "MarketGidComposite", "SC_TBlock", e.id];

            function L(e) {
                var t = !1;
                return B.forEach((function(i) {
                    !t && e.id && (t = e.id.includes(i))
                })), !!t || (P.forEach((function(i) {
                    !t && e.className && "svg" !== e.tagName && (t = -1 != e.className.indexOf(i))
                })), e.children && e.children[2] && "INS" === e.children[2].tagName && e.children[2].classList && e.children[2].classList.contains("adsbygoogle") && (t = !0), t)
            }

            function O(e) {
                return e.nodeType === Node.TEXT_NODE
            }

            function R(e) {
                if (e && "FOOTER" !== e.tagName && !L(e)) {
                    if (("Microsoft Internet Explorer" == navigator.appName || (navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) && "[object Text]" === Object.prototype.toString.call(e) && "" === e.nodeValue.trim()) return 0;
                    var t = 0;
                    if (O(e) ? t += A(e) : "BR" === e.tagName && e.nextSibling && "BR" === e.nextSibling.tagName ? t += function(e) {
                            var t = e.parentNode,
                                i = e.currentStyle || window.parent.getComputedStyle(t),
                                n = i.fontSize.replace("px", ""),
                                r = i.lineHeight.replace("px", "");
                            return (n = o(n) ? parseInt(n) : 0) + (r = o(r) ? parseInt(r) : 0)
                        }(e) : t += e.clientHeight + M(e, "bottom") + M(e, "top"), t) !(e.childNodes && 0 === e.childNodes.length) && ! function e(t) {
                        if (!t.children || 0 === t.children) return !0;
                        var i = !0;
                        return [].forEach.call(t.children, (function(t) {
                            i && (0 === t.clientHeight ? !i && t.children && t.children.length && (i = e(t)) : i = !1)
                        })), i
                    }(e) || 0 === t ? [].forEach.call(e.childNodes, (function(e) {
                        R(e)
                    })) : m += t
                }
            }

            function G(e) {
                if (e) {
                    var t = e.clientWidth + M(e, "left") + M(e, "right");
                    t && ((e.children && 0 === e.children.length || function e(t) {
                        if (!t.children || 0 === t.children) return 0 === t.clientWidth;
                        var i = !1;
                        return [].forEach.call(t.children, (function(t) {
                            i || (0 === t.clientWidth ? i = !0 : t.children && t.children.length && (i = e(t)))
                        })), i
                    }(e)) && 0 !== t && -1 != ["P", "PRE", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].indexOf(e.tagName) ? g <= t && (g = t) : e.children && [].forEach.call(e.children, (function(e) {
                        G(e)
                    })))
                }
            }

            function H() {
                l && (R(l), G(l), u = m * f / 100, h = m * p / 100)
            }
            return function(e) {
                    (d = e).classList.add("yui3-cssreset");
                    var t = {
                        animation: "none",
                        "animation-delay": "0",
                        "animation-direction": "normal",
                        "animation-duration": "0",
                        "animation-fill-mode": "none",
                        "animation-iteration-count": "1",
                        "animation-name": "none",
                        "animation-play-state": "running",
                        "animation-timing-function": "ease",
                        "backface-visibility": "visible",
                        background: "0",
                        "background-attachment": "scroll",
                        "background-clip": "borderBox",
                        "background-color": "transparent",
                        "background-image": "none",
                        "background-origin": "paddingBox",
                        "background-position": "0 0",
                        "background-position-x": "0",
                        "background-position-y": "0",
                        "background-repeat": "repeat",
                        "background-size": "auto auto",
                        border: "0",
                        "border-style": "none",
                        "border-width": "medium",
                        "border-color": "inherit",
                        "border-bottom": "0",
                        "border-bottom-color": "inherit",
                        "border-bottom-left-radius": "0",
                        "border-bottom-right-radius": "0",
                        "border-bottom-style": "none",
                        "border-bottom-width": "medium",
                        "border-collapse": "separate",
                        "border-image": "none",
                        "border-left": "0",
                        "border-left-color": "inherit",
                        "border-left-style": "none",
                        "border-left-width": "medium",
                        "border-radius": "0",
                        "border-right": "0",
                        "border-right-color": "inherit",
                        "border-right-style": "none",
                        "border-right-width": "medium",
                        "border-spacing": "0",
                        "border-top": "0",
                        "border-top-color": "inherit",
                        "border-top-left-radius": "0",
                        "border-top-right-radius": "0",
                        "border-top-style": "none",
                        "border-top-width": "medium",
                        bottom: "auto",
                        "box-shadow": "none",
                        "box-sizing": "contentBox",
                        "caption-side": "top",
                        clear: "none",
                        clip: "auto",
                        color: "inherit",
                        columns: "auto",
                        "column-count": "auto",
                        "column-fill": "balance",
                        "column-gap": "normal",
                        "column-rule": "medium none currentColor",
                        "column-rule-color": "currentColor",
                        "column-rule-style": "none",
                        "column-rule-width": "none",
                        "column-span": "1",
                        "column-width": "auto",
                        content: "normal",
                        "counter-increment": "none",
                        "counter-reset": "none",
                        cursor: "auto",
                        direction: "ltr",
                        display: "inline",
                        "empty-cells": "show",
                        font: "normal",
                        "font-family": "inherit",
                        "font-size": "medium",
                        "font-style": "normal",
                        "font-variant": "normal",
                        "font-weight": "normal",
                        height: "auto",
                        hyphens: "none",
                        left: "auto",
                        "letter-spacing": "normal",
                        "line-height": "normal",
                        "list-style": "none",
                        "list-style-image": "none",
                        "list-style-position": "outside",
                        "list-style-type": "disc",
                        margin: "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "margin-right": "0",
                        "margin-top": "10px",
                        "max-height": "none",
                        "max-width": "none",
                        "min-height": "0",
                        "min-width": "0",
                        opacity: "1",
                        orphans: "0",
                        outline: "0",
                        "outline-color": "invert",
                        "outline-style": "none",
                        "outline-width": "medium",
                        overflow: "visible",
                        "overflow-x": "visible",
                        "overflow-y": "visible",
                        padding: "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "padding-right": "0",
                        "padding-top": "0",
                        "page-break-after": "auto",
                        "page-break-before": "auto",
                        "page-break-inside": "auto",
                        perspective: "none",
                        "perspective-origin": "50% 50%",
                        position: "static",
                        quotes: "'\\201C' '\\201D' '\\2018' '\\2019'",
                        right: "auto",
                        tabSize: "8",
                        "table-layout": "auto",
                        "text-align": "inherit",
                        "text-alignLast": "auto",
                        "text-decoration": "none",
                        "text-decoration-color": "inherit",
                        "text-decoration-line": "none",
                        "text-decoration-style": "solid",
                        "text-indent": "0",
                        "text-shadow": "none",
                        "text-transform": "none",
                        top: "auto",
                        transform: "none",
                        "transform-style": "flat",
                        transition: "none",
                        "transition-delay": "0s",
                        "transition-duration": "0s",
                        "transition-property": "none",
                        "transition-timing-fFunction": "ease",
                        "unicode-bidi": "normal",
                        "vertical-align": "baseline",
                        visibility: "visible",
                        "white-space": "normal",
                        widows: "0",
                        width: "100%",
                        "word-spacing": "normal",
                        "z-index": "auto"
                    };
                    Object.keys(t).forEach((function(e) {
                        d.style.setProperty(e, t[e], "important")
                    }))
                }(e),
                function() {
                    var e = parent.document.location;
                    if (c = new r({
                            spec: e.href,
                            host: e.host,
                            prePath: e.protocol + "//" + e.host,
                            scheme: e.protocol.substr(0, e.protocol.indexOf(":")),
                            pathBase: e.protocol + "//" + e.host + e.pathname.substr(0, e.pathname.lastIndexOf("/") + 1)
                        }, parent.document.cloneNode(!0)).parse(), !(l = w(c.rootElements, !0, c.rootElements.length)) && c.selector) try {
                        l = document.querySelector(c.selector)
                    } catch (e) {
                        console.error(e)
                    }! function() {
                        if (l && l.parentNode && l.parentNode.children[0] && "HEADER" === l.parentNode.children[0].tagName) return void(l = l.parentNode);
                        if (l && "wrap" === l.id && "content" === l.children[0].id) return void(l = l.children[0]);
                        var e = parent.document.querySelector("a.logo.custom-logo-18");
                        if (e) return void(l = parent.document.getElementsByClassName("content_text")[0]);
                        if (e = parent.document.querySelector("div#page-wrap > center>img")) return void(l = parent.document.getElementsByClassName("detail-left-side")[0]);
                        if (l) {
                            var t = null,
                                i = !1;
                            if (["div.td-pb-row > div.td-pb-span8.td-main-content > div.td-ss-main-content > article", "div.entry-content"].forEach((function(e) {
                                    i || (t = l.querySelector(e)) && (l = t, i = !0)
                                })), i) return
                        }
                        if (l && l.classList.contains("post-body") && l.classList.contains("entry-content")) return void(l = l.parentNode);
                        null === l && c.rootElements && Array.isHTMLCollection(c.rootElements) && [].forEach.call(c.rootElements, (function(e) {
                            "ARTICLE" === e.tagName ? l = parent.document.querySelector(e.tagName) : "articleBody" === e.getAttribute("itemprop") ? l = parent.document.querySelector('div[itemprop="articleBody"]') : "main" === e.getAttribute("role") ? l = parent.document.querySelector('main[role="main"]') : "" !== e.getAttribute("data-io-article-url") ? l = parent.document.querySelector('div[class="media m-t"]') : console.info("SmartInformerCreator._parseArticle: Cant parse article. You should add this new condition to the code")
                        }));
                        if (l) return;
                        console.error("SmartInformerCreator._parseArticle: Article In DOM not recognized")
                    }()
                }(), H(), {
                    create: function() {
                        var e;
                        l ? (l.children || l.length || console.error("SmartInformerCreator._initiateCreating: Article cant be without any children"), 0 === m && H(), l.length ? [].forEach.call(l, (function(e) {
                            [].forEach.call(e.children, (function(e) {
                                D(e)
                            }))
                        })) : ([].forEach.call(l.children, (function(t) {
                            e = t, D(t)
                        })), y || E(e))) : console.error("SmartInformerCreator._initiateCreating: Article was not found")
                    }
                }
        }
        "top" === e.widgetConstructorData.autoplacement ? (t = 10, i = 20) : "middle" === e.widgetConstructorData.autoplacement ? (t = 45, i = 55) : "bottom" === e.widgetConstructorData.autoplacement && (t = 90, i = 99), e.hideInArticleWidgetBlock = function() {
                (void 0 !== e.realRoot ? e.realRoot : e.root).style.display = "none"
            }, e.initInArticleWidget = function() {
                try {
                    new o(void 0 !== e.realRoot ? e.realRoot : e.root, t, i).create()
                } catch (t) {
                    return (void 0 !== e.realRoot ? e.realRoot : e.root).style.display = "block", console.log("error:", t), !1
                }(void 0 !== e.realRoot ? e.realRoot : e.root).style.display = "block"
            }, "document" in e && ("classList" in parent.document.createElement("_") && (!parent.document.createElementNS || "classList" in parent.document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
                "use strict";
                if ("Element" in e) {
                    var t = "classList",
                        i = "prototype",
                        n = e.Element[i],
                        r = Object,
                        o = String[i].trim || function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        },
                        a = Array[i].indexOf || function(e) {
                            for (var t = 0, i = this.length; i > t; t++)
                                if (t in this && this[t] === e) return t;
                            return -1
                        },
                        s = function(e, t) {
                            this.name = e, this.code = DOMException[e], this.message = t
                        },
                        c = function(e, t) {
                            if ("" === t) throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(t)) throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return a.call(e, t)
                        },
                        l = function(e) {
                            for (var t = o.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], n = 0, r = i.length; r > n; n++) this.push(i[n]);
                            this._updateClassName = function() {
                                e.setAttribute("class", "" + this)
                            }
                        },
                        d = l[i] = [],
                        u = function() {
                            return new l(this)
                        };
                    if (s[i] = Error[i], d.item = function(e) {
                            return this[e] || null
                        }, d.contains = function(e) {
                            return -1 !== c(this, e += "")
                        }, d.add = function() {
                            var e, t = arguments,
                                i = 0,
                                n = t.length,
                                r = !1;
                            do {
                                e = t[i] + "", -1 === c(this, e) && (this.push(e), r = !0)
                            } while (++i < n);
                            r && this._updateClassName()
                        }, d.remove = function() {
                            var e, t, i = arguments,
                                n = 0,
                                r = i.length,
                                o = !1;
                            do {
                                for (e = i[n] + "", t = c(this, e); - 1 !== t;) this.splice(t, 1), o = !0, t = c(this, e)
                            } while (++n < r);
                            o && this._updateClassName()
                        }, d.toggle = function(e, t) {
                            e += "";
                            var i = this.contains(e),
                                n = i ? !0 !== t && "remove" : !1 !== t && "add";
                            return n && this[n](e), !0 === t || !1 === t ? t : !i
                        }, d.toString = function() {
                            return this.join(" ")
                        }, r.defineProperty) {
                        var h = {
                            get: u,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            r.defineProperty(n, t, h)
                        } catch (e) {
                            (void 0 === e.number || -2146823252 === e.number) && (h.enumerable = !1, r.defineProperty(n, t, h))
                        }
                    } else r[i].__defineGetter__ && n.__defineGetter__(t, u)
                }
            }(e), function() {
                "use strict";
                var e = parent.document.createElement("_");
                if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
                    var t = function(e) {
                        var t = DOMTokenList.prototype[e];
                        DOMTokenList.prototype[e] = function(e) {
                            var i, n = arguments.length;
                            for (i = 0; n > i; i++) e = arguments[i], t.call(this, e)
                        }
                    };
                    t("add"), t("remove")
                }
                if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
                    var i = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(e, t) {
                        return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e)
                    }
                }
                e = null
            }()), Array.isHTMLCollection || (Array.isHTMLCollection = function(e) {
                return "[object HTMLCollection]" === Object.prototype.toString.call(e)
            }), [].includes || (Array.prototype.includes = function(e) {
                "use strict";
                var t = Object(this),
                    i = parseInt(t.length) || 0;
                if (0 === i) return !1;
                var n, r = parseInt(arguments[1]) || 0;
                for (r >= 0 ? n = r : (n = i + r) < 0 && (n = 0); n < i;) {
                    var o = t[n];
                    if (e === o || e != e && o != o) return !0;
                    n++
                }
                return !1
            }),
            function() {
                var e = [].indexOf || function(e) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                };
                (function() {
                    function t(e) {
                        null == e && (e = {}), this.options = {}, this.setOptions(this.default_options), this.setOptions(e)
                    }
                    return t.prototype.default_options = {
                        selectors: ["id", "class", "tag", "nthchild"]
                    }, t.prototype.setOptions = function(e) {
                        var t, i, n;
                        for (t in null == e && (e = {}), i = [], e) n = e[t], this.default_options.hasOwnProperty(t) ? i.push(this.options[t] = n) : i.push(void 0);
                        return i
                    }, t.prototype.isElement = function(e) {
                        return !(1 !== (null != e ? e.nodeType : void 0))
                    }, t.prototype.getParents = function(e) {
                        var t, i;
                        if (i = [], this.isElement(e))
                            for (t = e; this.isElement(t);) i.push(t), t = t.parentNode;
                        return i
                    }, t.prototype.getTagSelector = function(e) {
                        return this.sanitizeItem(e.tagName.toLowerCase())
                    }, t.prototype.sanitizeItem = function(e) {
                        return e.split("").map((function(e) {
                            return ":" === e ? "\\" + ":".charCodeAt(0).toString(16).toUpperCase() + " " : /[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(e) ? "\\" + e : escape(e).replace(/\%/g, "\\")
                        })).join("")
                    }, t.prototype.getIdSelector = function(e) {
                        var t, i;
                        return null == (t = e.getAttribute("id")) || "" === t || /\s/.exec(t) || /^\d/.exec(t) || (i = "#" + this.sanitizeItem(t), 1 !== e.ownerDocument.querySelectorAll(i).length) ? null : i
                    }, t.prototype.getClassSelectors = function(e) {
                        var t, i, n;
                        return n = [], null != (t = e.getAttribute("class")) && "" !== (t = (t = t.replace(/\s+/g, " ")).replace(/^\s|\s$/g, "")) && (n = function() {
                            var e, n, r, o;
                            for (o = [], e = 0, n = (r = t.split(/\s+/)).length; e < n; e++) i = r[e], o.push("." + this.sanitizeItem(i));
                            return o
                        }.call(this)), n
                    }, t.prototype.getAttributeSelectors = function(t) {
                        var i, n, r, o, a, s, c;
                        for (c = [], n = ["id", "class"], r = 0, o = (a = t.attributes).length; r < o; r++) s = (i = a[r]).nodeName, e.call(n, s) < 0 && c.push("[" + i.nodeName + "=" + i.nodeValue + "]");
                        return c
                    }, t.prototype.getNthChildSelector = function(e) {
                        var t, i, n, r, o, a;
                        if (null != (r = e.parentNode))
                            for (t = 0, i = 0, n = (a = r.childNodes).length; i < n; i++)
                                if (o = a[i], this.isElement(o) && (t++, o === e)) return ":nth-child(" + t + ")";
                        return null
                    }, t.prototype.testSelector = function(e, t) {
                        var i, n;
                        return i = !1, null != t && "" !== t && 1 === (n = e.ownerDocument.querySelectorAll(t)).length && n[0] === e && (i = !0), i
                    }, t.prototype.getAllSelectors = function(t) {
                        var i;
                        return i = {
                            t: null,
                            i: null,
                            c: null,
                            a: null,
                            n: null
                        }, e.call(this.options.selectors, "tag") >= 0 && (i.t = this.getTagSelector(t)), e.call(this.options.selectors, "id") >= 0 && (i.i = this.getIdSelector(t)), e.call(this.options.selectors, "class") >= 0 && (i.c = this.getClassSelectors(t)), e.call(this.options.selectors, "attribute") >= 0 && (i.a = this.getAttributeSelectors(t)), e.call(this.options.selectors, "nthchild") >= 0 && (i.n = this.getNthChildSelector(t)), i
                    }, t.prototype.testUniqueness = function(e, t) {
                        var i;
                        return 1 === (i = e.parentNode.querySelectorAll(t)).length && i[0] === e
                    }, t.prototype.testCombinations = function(e, t, i) {
                        var n, r, o, a, s, c, l;
                        for (r = 0, a = (c = this.getCombinations(t)).length; r < a; r++)
                            if (n = c[r], this.testUniqueness(e, n)) return n;
                        if (null != i)
                            for (o = 0, s = (l = t.map((function(e) {
                                    return i + e
                                }))).length; o < s; o++)
                                if (n = l[o], this.testUniqueness(e, n)) return n;
                        return null
                    }, t.prototype.getUniqueSelector = function(e) {
                        var t, i, n, r, o;
                        for (o = this.getAllSelectors(e), i = 0, n = (r = this.options.selectors).length; i < n; i++) switch (r[i]) {
                            case "id":
                                if (null != o.i) return o.i;
                                break;
                            case "tag":
                                if (null != o.t && this.testUniqueness(e, o.t)) return o.t;
                                break;
                            case "class":
                                if (null != o.c && 0 !== o.c.length && (t = this.testCombinations(e, o.c, o.t))) return t;
                                break;
                            case "attribute":
                                if (null != o.a && 0 !== o.a.length && (t = this.testCombinations(e, o.a, o.t))) return t;
                                break;
                            case "nthchild":
                                if (null != o.n) return o.n
                        }
                        return "*"
                    }, t.prototype.getSelector = function(e) {
                        var t, i, n, r, o, a, s, c, l, d;
                        for (t = [], n = 0, o = (s = this.getParents(e)).length; n < o; n++) i = s[n], null != (l = this.getUniqueSelector(i)) && t.push(l);
                        for (d = [], r = 0, a = t.length; r < a; r++)
                            if (i = t[r], d.unshift(i), c = d.join(" > "), this.testSelector(e, c)) return c;
                        return null
                    }, t.prototype.getCombinations = function(e) {
                        var t, i, n, r, o, a, s;
                        for (null == e && (e = []), s = [
                                []
                            ], t = n = 0, o = e.length - 1; 0 <= o ? n <= o : n >= o; t = 0 <= o ? ++n : --n)
                            for (i = r = 0, a = s.length - 1; 0 <= a ? r <= a : r >= a; i = 0 <= a ? ++r : --r) s.push(s[i].concat(e[t]));
                        return s.shift(), s = (s = s.sort((function(e, t) {
                            return e.length - t.length
                        }))).map((function(e) {
                            return e.join("")
                        }))
                    }, t
                })()
            }.call(e.context)
    }
}, function(e, t, i) {
    function n(e, t) {
        if (t && t.documentElement) e = t, t = arguments[2];
        else if (!e || !e.documentElement) throw new Error("First argument to Readability constructor should be a document object.");
        var i;
        t = t || {}, this._doc = e, this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._articleSiteName = null, this._attempts = [], this._debug = !!t.debug, this._maxElemsToParse = t.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = t.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = t.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(t.classesToPreserve || []), this._keepClasses = !!t.keepClasses, this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug ? (i = function(e) {
            var t = e.nodeName + " ";
            if (e.nodeType == e.TEXT_NODE) return t + '("' + e.textContent + '")';
            var i = e.className && "." + e.className.replace(/ /g, "."),
                n = "";
            return e.id ? n = "(#" + e.id + i + ")" : i && (n = "(" + i + ")"), t + n
        }, this.log = function() {
            if ("undefined" != typeof dump) {
                var e = Array.prototype.map.call(arguments, (function(e) {
                    return e && e.nodeName ? i(e) : e
                })).join(" ");
                dump("Reader: (Readability) " + e + "\n")
            } else if ("undefined" != typeof console) {
                var t = ["Reader: (Readability) "].concat(arguments);
                console.log.apply(console, t)
            }
        }) : this.log = function() {}
    }
    n.prototype = {
        FLAG_STRIP_UNLIKELYS: 1,
        FLAG_WEIGHT_CLASSES: 2,
        FLAG_CLEAN_CONDITIONALLY: 4,
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        DEFAULT_MAX_ELEMS_TO_PARSE: 0,
        DEFAULT_N_TOP_CANDIDATES: 5,
        DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
        DEFAULT_CHAR_THRESHOLD: 500,
        REGEXPS: {
            unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
            okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
            positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
            negative: /hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
            extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
            byline: /byline|author|dateline|writtenby|p-author/i,
            replaceFonts: /<(\/?)font[^>]*>/gi,
            normalize: /\s{2,}/g,
            videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
            shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
            nextLink: /(next|weiter|continue|>([^\|]|$)|Â»([^\|]|$))/i,
            prevLink: /(prev|earl|old|new|<|Â«)/i,
            whitespace: /^\s*$/,
            hasContent: /\S$/,
            srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
            b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i
        },
        DIV_TO_P_ELEMS: ["A", "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL", "SELECT"],
        ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
        PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
        DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
        PHRASING_ELEMS: ["ABBR", "AUDIO", "B", "BDO", "BR", "BUTTON", "CITE", "CODE", "DATA", "DATALIST", "DFN", "EM", "EMBED", "I", "IMG", "INPUT", "KBD", "LABEL", "MARK", "MATH", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PROGRESS", "Q", "RUBY", "SAMP", "SCRIPT", "SELECT", "SMALL", "SPAN", "STRONG", "SUB", "SUP", "TEXTAREA", "TIME", "VAR", "WBR"],
        CLASSES_TO_PRESERVE: ["page"],
        HTML_ESCAPE_MAP: {
            lt: "<",
            gt: ">",
            amp: "&",
            quot: '"',
            apos: "'"
        },
        _postProcessContent: function(e) {
            this._fixRelativeUris(e), this._keepClasses || this._cleanClasses(e)
        },
        _removeNodes: function(e, t) {
            if (this._docJSDOMParser && e._isLiveNodeList) throw new Error("Do not pass live node lists to _removeNodes");
            for (var i = e.length - 1; i >= 0; i--) {
                var n = e[i],
                    r = n.parentNode;
                r && (t && !t.call(this, n, i, e) || r.removeChild(n))
            }
        },
        _replaceNodeTags: function(e, t) {
            if (this._docJSDOMParser && e._isLiveNodeList) throw new Error("Do not pass live node lists to _replaceNodeTags");
            for (var i = e.length - 1; i >= 0; i--) {
                var n = e[i];
                this._setNodeTag(n, t)
            }
        },
        _forEachNode: function(e, t) {
            Array.prototype.forEach.call(e, t, this)
        },
        _someNode: function(e, t) {
            return Array.prototype.some.call(e, t, this)
        },
        _everyNode: function(e, t) {
            return Array.prototype.every.call(e, t, this)
        },
        _concatNodeLists: function() {
            var e = Array.prototype.slice,
                t = e.call(arguments),
                i = t.map((function(t) {
                    return e.call(t)
                }));
            return Array.prototype.concat.apply([], i)
        },
        _getAllNodesWithTag: function(e, t) {
            return e.querySelectorAll ? e.querySelectorAll(t.join(",")) : [].concat.apply([], t.map((function(t) {
                var i = e.getElementsByTagName(t);
                return Array.isArray(i) ? i : Array.from(i)
            })))
        },
        _cleanClasses: function(e) {
            var t = this._classesToPreserve,
                i = (e.getAttribute("class") || "").split(/\s+/).filter((function(e) {
                    return -1 != t.indexOf(e)
                })).join(" ");
            for (i ? e.setAttribute("class", i) : e.removeAttribute("class"), e = e.firstElementChild; e; e = e.nextElementSibling) this._cleanClasses(e)
        },
        _fixRelativeUris: function(e) {
            var t = this._doc.baseURI,
                i = this._doc.documentURI;

            function n(e) {
                if (t == i && "#" == e.charAt(0)) return e;
                try {
                    return new URL(e, t).href
                } catch (e) {}
                return e
            }
            var r = this._getAllNodesWithTag(e, ["a"]);
            this._forEachNode(r, (function(e) {
                var t = e.getAttribute("href");
                if (t)
                    if (0 === t.indexOf("javascript:"))
                        if (1 === e.childNodes.length && e.childNodes[0].nodeType === this.TEXT_NODE) {
                            var i = this._doc.createTextNode(e.textContent);
                            e.parentNode.replaceChild(i, e)
                        } else {
                            for (var r = this._doc.createElement("span"); e.childNodes.length > 0;) r.appendChild(e.childNodes[0]);
                            e.parentNode.replaceChild(r, e)
                        }
                else e.setAttribute("href", n(t))
            }));
            var o = this._getAllNodesWithTag(e, ["img", "picture", "figure", "video", "audio", "source"]);
            this._forEachNode(o, (function(e) {
                var t = e.getAttribute("src"),
                    i = e.getAttribute("poster"),
                    r = e.getAttribute("srcset");
                if (t && e.setAttribute("src", n(t)), i && e.setAttribute("poster", n(i)), r) {
                    var o = r.replace(this.REGEXPS.srcsetUrl, (function(e, t, i, r) {
                        return n(t) + (i || "") + r
                    }));
                    e.setAttribute("srcset", o)
                }
            }))
        },
        _getArticleTitle: function() {
            var e = this._doc,
                t = "",
                i = "";
            try {
                "string" != typeof(t = i = e.title.trim()) && (t = i = this._getInnerText(e.getElementsByTagName("title")[0]))
            } catch (e) {}
            var n = !1;

            function r(e) {
                return e.split(/\s+/).length
            }
            if (/ [\|\-\\\/>Â»] /.test(t)) n = / [\\\/>Â»] /.test(t), r(t = i.replace(/(.*)[\|\-\\\/>Â»] .*/gi, "$1")) < 3 && (t = i.replace(/[^\|\-\\\/>Â»]*[\|\-\\\/>Â»](.*)/gi, "$1"));
            else if (-1 !== t.indexOf(": ")) {
                var o = this._concatNodeLists(e.getElementsByTagName("h1"), e.getElementsByTagName("h2")),
                    a = t.trim();
                this._someNode(o, (function(e) {
                    return e.textContent.trim() === a
                })) || (r(t = i.substring(i.lastIndexOf(":") + 1)) < 3 ? t = i.substring(i.indexOf(":") + 1) : r(i.substr(0, i.indexOf(":"))) > 5 && (t = i))
            } else if (t.length > 150 || t.length < 15) {
                var s = e.getElementsByTagName("h1");
                1 === s.length && (t = this._getInnerText(s[0]))
            }
            var c = r(t = t.trim().replace(this.REGEXPS.normalize, " "));
            return c <= 4 && (!n || c != r(i.replace(/[\|\-\\\/>Â»]+/g, "")) - 1) && (t = i), t
        },
        _prepDocument: function() {
            var e = this._doc;
            this._removeNodes(this._getAllNodesWithTag(e, ["style"])), e.body && this._replaceBrs(e.body), this._replaceNodeTags(this._getAllNodesWithTag(e, ["font"]), "SPAN")
        },
        _nextElement: function(e) {
            for (var t = e; t && t.nodeType != this.ELEMENT_NODE && this.REGEXPS.whitespace.test(t.textContent);) t = t.nextSibling;
            return t
        },
        _replaceBrs: function(e) {
            this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                for (var t = e.nextSibling, i = !1;
                    (t = this._nextElement(t)) && "BR" == t.tagName;) {
                    i = !0;
                    var n = t.nextSibling;
                    t.parentNode.removeChild(t), t = n
                }
                if (i) {
                    var r = this._doc.createElement("p");
                    for (e.parentNode.replaceChild(r, e), t = r.nextSibling; t;) {
                        if ("BR" == t.tagName) {
                            var o = this._nextElement(t.nextSibling);
                            if (o && "BR" == o.tagName) break
                        }
                        if (!this._isPhrasingContent(t)) break;
                        var a = t.nextSibling;
                        r.appendChild(t), t = a
                    }
                    for (; r.lastChild && this._isWhitespace(r.lastChild);) r.removeChild(r.lastChild);
                    "P" === r.parentNode.tagName && this._setNodeTag(r.parentNode, "DIV")
                }
            }))
        },
        _setNodeTag: function(e, t) {
            if (this.log("_setNodeTag", e, t), this._docJSDOMParser) return e.localName = t.toLowerCase(), e.tagName = t.toUpperCase(), e;
            for (var i = e.ownerDocument.createElement(t); e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode.replaceChild(i, e), e.readability && (i.readability = e.readability);
            for (var n = 0; n < e.attributes.length; n++) try {
                i.setAttribute(e.attributes[n].name, e.attributes[n].value)
            } catch (e) {}
            return i
        },
        _prepArticle: function(e) {
            this._cleanStyles(e), this._markDataTables(e), this._fixLazyImages(e), this._cleanConditionally(e, "form"), this._cleanConditionally(e, "fieldset"), this._clean(e, "object"), this._clean(e, "embed"), this._clean(e, "h1"), this._clean(e, "footer"), this._clean(e, "link"), this._clean(e, "aside");
            var t = this.DEFAULT_CHAR_THRESHOLD;
            this._forEachNode(e.children, (function(e) {
                this._cleanMatchedNodes(e, (function(e, i) {
                    return this.REGEXPS.shareElements.test(i) && e.textContent.length < t
                }))
            }));
            var i = e.getElementsByTagName("h2");
            if (1 === i.length) {
                var n = (i[0].textContent.length - this._articleTitle.length) / this._articleTitle.length;
                if (Math.abs(n) < .5) {
                    (n > 0 ? i[0].textContent.includes(this._articleTitle) : this._articleTitle.includes(i[0].textContent)) && this._clean(e, "h2")
                }
            }
            this._clean(e, "iframe"), this._clean(e, "input"), this._clean(e, "textarea"), this._clean(e, "select"), this._clean(e, "button"), this._cleanHeaders(e), this._cleanConditionally(e, "table"), this._cleanConditionally(e, "ul"), this._cleanConditionally(e, "div"), this._removeNodes(this._getAllNodesWithTag(e, ["p"]), (function(e) {
                return 0 === e.getElementsByTagName("img").length + e.getElementsByTagName("embed").length + e.getElementsByTagName("object").length + e.getElementsByTagName("iframe").length && !this._getInnerText(e, !1)
            })), this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                var t = this._nextElement(e.nextSibling);
                t && "P" == t.tagName && e.parentNode.removeChild(e)
            })), this._forEachNode(this._getAllNodesWithTag(e, ["table"]), (function(e) {
                var t = this._hasSingleTagInsideElement(e, "TBODY") ? e.firstElementChild : e;
                if (this._hasSingleTagInsideElement(t, "TR")) {
                    var i = t.firstElementChild;
                    if (this._hasSingleTagInsideElement(i, "TD")) {
                        var n = i.firstElementChild;
                        n = this._setNodeTag(n, this._everyNode(n.childNodes, this._isPhrasingContent) ? "P" : "DIV"), e.parentNode.replaceChild(n, e)
                    }
                }
            }))
        },
        _initializeNode: function(e) {
            switch (e.readability = {
                contentScore: 0
            }, e.tagName) {
                case "DIV":
                    e.readability.contentScore += 5;
                    break;
                case "PRE":
                case "TD":
                case "BLOCKQUOTE":
                    e.readability.contentScore += 3;
                    break;
                case "ADDRESS":
                case "OL":
                case "UL":
                case "DL":
                case "DD":
                case "DT":
                case "LI":
                case "FORM":
                    e.readability.contentScore -= 3;
                    break;
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                case "TH":
                    e.readability.contentScore -= 5
            }
            e.readability.contentScore += this._getClassWeight(e)
        },
        _removeAndGetNext: function(e) {
            var t = this._getNextNode(e, !0);
            return e.parentNode.removeChild(e), t
        },
        _getNextNode: function(e, t) {
            if (!t && e.firstElementChild) return e.firstElementChild;
            if (e.nextElementSibling) return e.nextElementSibling;
            do {
                e = e.parentNode
            } while (e && !e.nextElementSibling);
            return e && e.nextElementSibling
        },
        _checkByline: function(e, t) {
            if (this._articleByline) return !1;
            if (void 0 !== e.getAttribute) var i = e.getAttribute("rel"),
                n = e.getAttribute("itemprop");
            return !(!("author" === i || n && -1 !== n.indexOf("author") || this.REGEXPS.byline.test(t)) || !this._isValidByline(e.textContent)) && (this._articleByline = e.textContent.trim(), !0)
        },
        _getNodeAncestors: function(e, t) {
            t = t || 0;
            for (var i = 0, n = []; e.parentNode && (n.push(e.parentNode), !t || ++i !== t);) e = e.parentNode;
            return n
        },
        _grabArticle: function(e) {
            this.log("**** grabArticle ****");
            var t = this._doc,
                i = null !== e;
            if (!(e = e || this._doc.body)) return this.log("No body found in document. Abort."), null;
            for (var n = e.innerHTML;;) {
                for (var r = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS), o = [], a = this._doc.documentElement; a;) {
                    var s = a.className + " " + a.id;
                    if (this._isProbablyVisible(a))
                        if (this._checkByline(a, s)) a = this._removeAndGetNext(a);
                        else {
                            if (r) {
                                if (this.REGEXPS.unlikelyCandidates.test(s) && !this.REGEXPS.okMaybeItsACandidate.test(s) && !this._hasAncestorTag(a, "table") && "BODY" !== a.tagName && "A" !== a.tagName) {
                                    this.log("Removing unlikely candidate - " + s), a = this._removeAndGetNext(a);
                                    continue
                                }
                                if ("complementary" == a.getAttribute("role")) {
                                    this.log("Removing complementary content - " + s), a = this._removeAndGetNext(a);
                                    continue
                                }
                            }
                            if ("DIV" !== a.tagName && "SECTION" !== a.tagName && "HEADER" !== a.tagName && "H1" !== a.tagName && "H2" !== a.tagName && "H3" !== a.tagName && "H4" !== a.tagName && "H5" !== a.tagName && "H6" !== a.tagName || !this._isElementWithoutContent(a)) {
                                if (-1 !== this.DEFAULT_TAGS_TO_SCORE.indexOf(a.tagName) && o.push(a), "DIV" === a.tagName) {
                                    for (var c = null, l = a.firstChild; l;) {
                                        var d = l.nextSibling;
                                        if (this._isPhrasingContent(l)) null !== c ? c.appendChild(l) : this._isWhitespace(l) || (c = t.createElement("p"), a.replaceChild(c, l), c.appendChild(l));
                                        else if (null !== c) {
                                            for (; c.lastChild && this._isWhitespace(c.lastChild);) c.removeChild(c.lastChild);
                                            c = null
                                        }
                                        l = d
                                    }
                                    if (this._hasSingleTagInsideElement(a, "P") && this._getLinkDensity(a) < .25) {
                                        var u = a.children[0];
                                        a.parentNode.replaceChild(u, a), a = u, o.push(a)
                                    } else this._hasChildBlockElement(a) || (a = this._setNodeTag(a, "P"), o.push(a))
                                }
                                a = this._getNextNode(a)
                            } else a = this._removeAndGetNext(a)
                        }
                    else this.log("Removing hidden node - " + s), a = this._removeAndGetNext(a)
                }
                var h = [];
                this._forEachNode(o, (function(e) {
                    if (e.parentNode && void 0 !== e.parentNode.tagName) {
                        var t = this._getInnerText(e);
                        if (!(t.length < 25)) {
                            var i = this._getNodeAncestors(e, 3);
                            if (0 !== i.length) {
                                var n = 0;
                                n += 1, n += t.split(",").length, n += Math.min(Math.floor(t.length / 100), 3), this._forEachNode(i, (function(e, t) {
                                    if (e.tagName && e.parentNode && void 0 !== e.parentNode.tagName) {
                                        if (void 0 === e.readability && (this._initializeNode(e), h.push(e)), 0 === t) var i = 1;
                                        else i = 1 === t ? 2 : 3 * t;
                                        e.readability.contentScore += n / i
                                    }
                                }))
                            }
                        }
                    }
                }));
                for (var f = [], p = 0, m = h.length; p < m; p += 1) {
                    var g = h[p],
                        v = g.readability.contentScore * (1 - this._getLinkDensity(g));
                    g.readability.contentScore = v, this.log("Candidate:", g, "with score " + v);
                    for (var y = 0; y < this._nbTopCandidates; y++) {
                        var b = f[y];
                        if (!b || v > b.readability.contentScore) {
                            f.splice(y, 0, g), f.length > this._nbTopCandidates && f.pop();
                            break
                        }
                    }
                }
                var k, w = f[0] || null,
                    x = !1;
                if (null === w || "BODY" === w.tagName) {
                    w = t.createElement("DIV"), x = !0;
                    for (var C = e.childNodes; C.length;) this.log("Moving child out:", C[0]), w.appendChild(C[0]);
                    e.appendChild(w), this._initializeNode(w)
                } else if (w) {
                    for (var E = [], S = 1; S < f.length; S++) f[S].readability.contentScore / w.readability.contentScore >= .75 && E.push(this._getNodeAncestors(f[S]));
                    if (E.length >= 3)
                        for (k = w.parentNode;
                            "BODY" !== k.tagName;) {
                            for (var _ = 0, I = 0; I < E.length && _ < 3; I++) _ += Number(E[I].includes(k));
                            if (_ >= 3) {
                                w = k;
                                break
                            }
                            k = k.parentNode
                        }
                    w.readability || this._initializeNode(w), k = w.parentNode;
                    for (var T = w.readability.contentScore, A = T / 3;
                        "BODY" !== k.tagName;)
                        if (k.readability) {
                            var M = k.readability.contentScore;
                            if (M < A) break;
                            if (M > T) {
                                w = k;
                                break
                            }
                            T = k.readability.contentScore, k = k.parentNode
                        } else k = k.parentNode;
                    for (k = w.parentNode;
                        "BODY" != k.tagName && 1 == k.children.length;) k = (w = k).parentNode;
                    w.readability || this._initializeNode(w)
                }
                var D = t.createElement("DIV");
                i && (D.id = "readability-content");
                for (var N = Math.max(10, .2 * w.readability.contentScore), P = (k = w.parentNode).children, B = 0, L = P.length; B < L; B++) {
                    var O = P[B],
                        R = !1;
                    if (this.log("Looking at sibling node:", O, O.readability ? "with score " + O.readability.contentScore : ""), this.log("Sibling has score", O.readability ? O.readability.contentScore : "Unknown"), O === w) R = !0;
                    else {
                        var G = 0;
                        if (O.className === w.className && "" !== w.className && (G += .2 * w.readability.contentScore), O.readability && O.readability.contentScore + G >= N) R = !0;
                        else if ("P" === O.nodeName) {
                            var H = this._getLinkDensity(O),
                                W = this._getInnerText(O),
                                z = W.length;
                            (z > 80 && H < .25 || z < 80 && z > 0 && 0 === H && -1 !== W.search(/\.( |$)/)) && (R = !0)
                        }
                    }
                    R && (this.log("Appending node:", O), -1 === this.ALTER_TO_DIV_EXCEPTIONS.indexOf(O.nodeName) && (this.log("Altering sibling:", O, "to div."), O = this._setNodeTag(O, "DIV")), D.appendChild(O), B -= 1, L -= 1)
                }
                if (this._debug && this.log("Article content pre-prep: " + D.innerHTML), this._prepArticle(D), this._debug && this.log("Article content post-prep: " + D.innerHTML), x) w.id = "readability-page-1", w.className = "page";
                else {
                    var j = t.createElement("DIV");
                    j.id = "readability-page-1", j.className = "page";
                    for (var F = D.childNodes; F.length;) j.appendChild(F[0]);
                    D.appendChild(j)
                }
                this._debug && this.log("Article content after paging: " + D.innerHTML);
                var V = !0,
                    U = this._getInnerText(D, !0).length;
                if (U < this._charThreshold)
                    if (V = !1, e.innerHTML = n, this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) this._removeFlag(this.FLAG_STRIP_UNLIKELYS), this._attempts.push({
                        articleContent: D,
                        textLength: U
                    });
                    else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) this._removeFlag(this.FLAG_WEIGHT_CLASSES), this._attempts.push({
                    articleContent: D,
                    textLength: U
                });
                else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY), this._attempts.push({
                    articleContent: D,
                    textLength: U
                });
                else {
                    if (this._attempts.push({
                            articleContent: D,
                            textLength: U
                        }), this._attempts.sort((function(e, t) {
                            return t.textLength - e.textLength
                        })), !this._attempts[0].textLength) return null;
                    D = this._attempts[0].articleContent, V = !0
                }
                if (V) {
                    var q = [k, w].concat(this._getNodeAncestors(k));
                    return this._someNode(q, (function(e) {
                        if (!e.tagName) return !1;
                        var t = e.getAttribute("dir");
                        return !!t && (this._articleDir = t, !0)
                    })), D
                }
            }
        },
        _isValidByline: function(e) {
            return ("string" == typeof e || e instanceof String) && ((e = e.trim()).length > 0 && e.length < 100)
        },
        _unescapeHtmlEntities: function(e) {
            if (!e) return e;
            var t = this.HTML_ESCAPE_MAP;
            return e.replace(/&(quot|amp|apos|lt|gt);/g, (function(e, i) {
                return t[i]
            })).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, (function(e, t, i) {
                var n = parseInt(t || i, t ? 16 : 10);
                return String.fromCharCode(n)
            }))
        },
        _getArticleMetadata: function() {
            var e = {},
                t = {},
                i = this._doc.getElementsByTagName("meta"),
                n = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,
                r = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
            return this._forEachNode(i, (function(e) {
                var i = e.getAttribute("name"),
                    o = e.getAttribute("property"),
                    a = e.getAttribute("content");
                if (a) {
                    var s = null,
                        c = null;
                    if (o && (s = o.match(n)))
                        for (var l = s.length - 1; l >= 0; l--) c = s[l].toLowerCase().replace(/\s/g, ""), t[c] = a.trim();
                    !s && i && r.test(i) && (c = i, a && (c = c.toLowerCase().replace(/\s/g, "").replace(/\./g, ":"), t[c] = a.trim()))
                }
            })), e.title = t["dc:title"] || t["dcterm:title"] || t["og:title"] || t["weibo:article:title"] || t["weibo:webpage:title"] || t.title || t["twitter:title"], e.title || (e.title = this._getArticleTitle()), e.byline = t["dc:creator"] || t["dcterm:creator"] || t.author, e.excerpt = t["dc:description"] || t["dcterm:description"] || t["og:description"] || t["weibo:article:description"] || t["weibo:webpage:description"] || t.description || t["twitter:description"], e.siteName = t["og:site_name"], e.title = this._unescapeHtmlEntities(e.title), e.byline = this._unescapeHtmlEntities(e.byline), e.excerpt = this._unescapeHtmlEntities(e.excerpt), e.siteName = this._unescapeHtmlEntities(e.siteName), e
        },
        _isSingleImage: function(e) {
            return "IMG" === e.tagName || 1 === e.children.length && "" === e.textContent.trim() && this._isSingleImage(e.children[0])
        },
        _unwrapNoscriptImages: function(e) {
            var t = Array.from(e.getElementsByTagName("img"));
            this._forEachNode(t, (function(e) {
                for (var t = 0; t < e.attributes.length; t++) {
                    var i = e.attributes[t];
                    switch (i.name) {
                        case "src":
                        case "srcset":
                        case "data-src":
                        case "data-srcset":
                            return
                    }
                    if (/\.(jpg|jpeg|png|webp)/i.test(i.value)) return
                }
                e.parentNode.removeChild(e)
            }));
            var i = Array.from(e.getElementsByTagName("noscript"));
            this._forEachNode(i, (function(t) {
                var i = e.createElement("div");
                if (i.innerHTML = t.innerHTML, this._isSingleImage(i)) {
                    var n = t.previousElementSibling;
                    if (n && this._isSingleImage(n)) {
                        var r = n;
                        "IMG" !== r.tagName && (r = n.getElementsByTagName("img")[0]);
                        for (var o = i.getElementsByTagName("img")[0], a = 0; a < r.attributes.length; a++) {
                            var s = r.attributes[a];
                            if ("" !== s.value && ("src" === s.name || "srcset" === s.name || /\.(jpg|jpeg|png|webp)/i.test(s.value))) {
                                if (o.getAttribute(s.name) === s.value) continue;
                                var c = s.name;
                                o.hasAttribute(c) && (c = "data-old-" + c), o.setAttribute(c, s.value)
                            }
                        }
                        t.parentNode.replaceChild(i.firstElementChild, n)
                    }
                }
            }))
        },
        _removeScripts: function(e) {
            this._removeNodes(this._getAllNodesWithTag(e, ["script"]), (function(e) {
                return e.nodeValue = "", e.removeAttribute("src"), !0
            })), this._removeNodes(this._getAllNodesWithTag(e, ["noscript"]))
        },
        _hasSingleTagInsideElement: function(e, t) {
            return 1 == e.children.length && e.children[0].tagName === t && !this._someNode(e.childNodes, (function(e) {
                return e.nodeType === this.TEXT_NODE && this.REGEXPS.hasContent.test(e.textContent)
            }))
        },
        _isElementWithoutContent: function(e) {
            return e.nodeType === this.ELEMENT_NODE && 0 == e.textContent.trim().length && (0 == e.children.length || e.children.length == e.getElementsByTagName("br").length + e.getElementsByTagName("hr").length)
        },
        _hasChildBlockElement: function(e) {
            return this._someNode(e.childNodes, (function(e) {
                return -1 !== this.DIV_TO_P_ELEMS.indexOf(e.tagName) || this._hasChildBlockElement(e)
            }))
        },
        _isPhrasingContent: function(e) {
            return e.nodeType === this.TEXT_NODE || -1 !== this.PHRASING_ELEMS.indexOf(e.tagName) || ("A" === e.tagName || "DEL" === e.tagName || "INS" === e.tagName) && this._everyNode(e.childNodes, this._isPhrasingContent)
        },
        _isWhitespace: function(e) {
            return e.nodeType === this.TEXT_NODE && 0 === e.textContent.trim().length || e.nodeType === this.ELEMENT_NODE && "BR" === e.tagName
        },
        _getInnerText: function(e, t) {
            t = void 0 === t || t;
            var i = e.textContent.trim();
            return t ? i.replace(this.REGEXPS.normalize, " ") : i
        },
        _getCharCount: function(e, t) {
            return t = t || ",", this._getInnerText(e).split(t).length - 1
        },
        _cleanStyles: function(e) {
            if (e && "svg" !== e.tagName.toLowerCase()) {
                for (var t = 0; t < this.PRESENTATIONAL_ATTRIBUTES.length; t++) e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[t]); - 1 !== this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) && (e.removeAttribute("width"), e.removeAttribute("height"));
                for (var i = e.firstElementChild; null !== i;) this._cleanStyles(i), i = i.nextElementSibling
            }
        },
        _getLinkDensity: function(e) {
            var t = this._getInnerText(e).length;
            if (0 === t) return 0;
            var i = 0;
            return this._forEachNode(e.getElementsByTagName("a"), (function(e) {
                i += this._getInnerText(e).length
            })), i / t
        },
        _getClassWeight: function(e) {
            if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;
            var t = 0;
            return "string" == typeof e.className && "" !== e.className && (this.REGEXPS.negative.test(e.className) && (t -= 25), this.REGEXPS.positive.test(e.className) && (t += 25)), "string" == typeof e.id && "" !== e.id && (this.REGEXPS.negative.test(e.id) && (t -= 25), this.REGEXPS.positive.test(e.id) && (t += 25)), t
        },
        _clean: function(e, t) {
            var i = -1 !== ["object", "embed", "iframe"].indexOf(t);
            this._removeNodes(this._getAllNodesWithTag(e, [t]), (function(e) {
                if (i) {
                    for (var t = 0; t < e.attributes.length; t++)
                        if (this.REGEXPS.videos.test(e.attributes[t].value)) return !1;
                    if ("object" === e.tagName && this.REGEXPS.videos.test(e.innerHTML)) return !1
                }
                return !0
            }))
        },
        _hasAncestorTag: function(e, t, i, n) {
            i = i || 3, t = t.toUpperCase();
            for (var r = 0; e.parentNode;) {
                if (i > 0 && r > i) return !1;
                if (e.parentNode.tagName === t && (!n || n(e.parentNode))) return !0;
                e = e.parentNode, r++
            }
            return !1
        },
        _getRowAndColumnCount: function(e) {
            for (var t = 0, i = 0, n = e.getElementsByTagName("tr"), r = 0; r < n.length; r++) {
                var o = n[r].getAttribute("rowspan") || 0;
                o && (o = parseInt(o, 10)), t += o || 1;
                for (var a = 0, s = n[r].getElementsByTagName("td"), c = 0; c < s.length; c++) {
                    var l = s[c].getAttribute("colspan") || 0;
                    l && (l = parseInt(l, 10)), a += l || 1
                }
                i = Math.max(i, a)
            }
            return {
                rows: t,
                columns: i
            }
        },
        _markDataTables: function(e) {
            for (var t = e.getElementsByTagName("table"), i = 0; i < t.length; i++) {
                var n = t[i];
                if ("presentation" != n.getAttribute("role"))
                    if ("0" != n.getAttribute("datatable"))
                        if (n.getAttribute("summary")) n._readabilityDataTable = !0;
                        else {
                            var r = n.getElementsByTagName("caption")[0];
                            if (r && r.childNodes.length > 0) n._readabilityDataTable = !0;
                            else {
                                if (["col", "colgroup", "tfoot", "thead", "th"].some((function(e) {
                                        return !!n.getElementsByTagName(e)[0]
                                    }))) this.log("Data table because found data-y descendant"), n._readabilityDataTable = !0;
                                else if (n.getElementsByTagName("table")[0]) n._readabilityDataTable = !1;
                                else {
                                    var o = this._getRowAndColumnCount(n);
                                    o.rows >= 10 || o.columns > 4 ? n._readabilityDataTable = !0 : n._readabilityDataTable = o.rows * o.columns > 10
                                }
                            }
                        }
                else n._readabilityDataTable = !1;
                else n._readabilityDataTable = !1
            }
        },
        _fixLazyImages: function(e) {
            this._forEachNode(this._getAllNodesWithTag(e, ["img", "picture", "figure"]), (function(e) {
                if (e.src && this.REGEXPS.b64DataUrl.test(e.src)) {
                    if ("image/svg+xml" === this.REGEXPS.b64DataUrl.exec(e.src)[1]) return;
                    for (var t = !1, i = 0; i < e.attributes.length; i++) {
                        var n = e.attributes[i];
                        if ("src" !== n.name && /\.(jpg|jpeg|png|webp)/i.test(n.value)) {
                            t = !0;
                            break
                        }
                    }
                    if (t) {
                        var r = e.src.search(/base64\s*/i) + 7;
                        e.src.length - r < 133 && e.removeAttribute("src")
                    }
                }
                if (!(e.src || e.srcset && "null" != e.srcset) || -1 !== e.className.toLowerCase().indexOf("lazy"))
                    for (var o = 0; o < e.attributes.length; o++)
                        if ("src" !== (n = e.attributes[o]).name && "srcset" !== n.name) {
                            var a = null;
                            if (/\.(jpg|jpeg|png|webp)\s+\d/.test(n.value) ? a = "srcset" : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(n.value) && (a = "src"), a)
                                if ("IMG" === e.tagName || "PICTURE" === e.tagName) e.setAttribute(a, n.value);
                                else if ("FIGURE" === e.tagName && !this._getAllNodesWithTag(e, ["img", "picture"]).length) {
                                var s = this._doc.createElement("img");
                                s.setAttribute(a, n.value), e.appendChild(s)
                            }
                        }
            }))
        },
        _cleanConditionally: function(e, t) {
            if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                var i = "ul" === t || "ol" === t;
                this._removeNodes(this._getAllNodesWithTag(e, [t]), (function(e) {
                    var n = function(e) {
                        return e._readabilityDataTable
                    };
                    if ("table" === t && n(e)) return !1;
                    if (this._hasAncestorTag(e, "table", -1, n)) return !1;
                    var r = this._getClassWeight(e);
                    if (this.log("Cleaning Conditionally", e), r + 0 < 0) return !0;
                    if (this._getCharCount(e, ",") < 10) {
                        for (var o = e.getElementsByTagName("p").length, a = e.getElementsByTagName("img").length, s = e.getElementsByTagName("li").length - 100, c = e.getElementsByTagName("input").length, l = 0, d = this._getAllNodesWithTag(e, ["object", "embed", "iframe"]), u = 0; u < d.length; u++) {
                            for (var h = 0; h < d[u].attributes.length; h++)
                                if (this.REGEXPS.videos.test(d[u].attributes[h].value)) return !1;
                            if ("object" === d[u].tagName && this.REGEXPS.videos.test(d[u].innerHTML)) return !1;
                            l++
                        }
                        var f = this._getLinkDensity(e),
                            p = this._getInnerText(e).length;
                        return a > 1 && o / a < .5 && !this._hasAncestorTag(e, "figure") || !i && s > o || c > Math.floor(o / 3) || !i && p < 25 && (0 === a || a > 2) && !this._hasAncestorTag(e, "figure") || !i && r < 25 && f > .2 || r >= 25 && f > .5 || 1 === l && p < 75 || l > 1
                    }
                    return !1
                }))
            }
        },
        _cleanMatchedNodes: function(e, t) {
            for (var i = this._getNextNode(e, !0), n = this._getNextNode(e); n && n != i;) n = t.call(this, n, n.className + " " + n.id) ? this._removeAndGetNext(n) : this._getNextNode(n)
        },
        _cleanHeaders: function(e) {
            this._removeNodes(this._getAllNodesWithTag(e, ["h1", "h2"]), (function(e) {
                return this._getClassWeight(e) < 0
            }))
        },
        _flagIsActive: function(e) {
            return (this._flags & e) > 0
        },
        _removeFlag: function(e) {
            this._flags = this._flags & ~e
        },
        _isProbablyVisible: function(e) {
            return (!e.style || "none" != e.style.display) && !e.hasAttribute("hidden") && (!e.hasAttribute("aria-hidden") || "true" != e.getAttribute("aria-hidden") || e.className && e.className.indexOf && -1 !== e.className.indexOf("fallback-image"))
        },
        parse: function() {
            if (this._maxElemsToParse > 0) {
                var e = this._doc.getElementsByTagName("*").length;
                if (e > this._maxElemsToParse) throw new Error("Aborting parsing document; " + e + " elements found")
            }
            this._unwrapNoscriptImages(this._doc), this._removeScripts(this._doc), this._prepDocument();
            var t = this._getArticleMetadata();
            this._articleTitle = t.title;
            var i = this._grabArticle();
            if (!i) return null;
            if (this.log("Grabbed: " + i.innerHTML), this._postProcessContent(i), !t.excerpt) {
                var n = i.getElementsByTagName("p");
                n.length > 0 && (t.excerpt = n[0].textContent.trim())
            }
            var r = i.textContent;
            return {
                title: this._articleTitle,
                byline: t.byline || this._articleByline,
                dir: this._articleDir,
                content: i.innerHTML,
                textContent: r,
                length: r.length,
                excerpt: t.excerpt,
                rootElements: i.children[0].children,
                siteName: t.siteName || this._articleSiteName
            }
        }
    }, e.exports = n
}, function(e, t, i) {
    window.MarketGidCCarouselWidgetBlock1014592 = function(e) {
        e.afterLoadNewsHooks.push("carouselInit"), e.isInsertedCarouselStyles = !1;
        var t = e.context;
        t.Hammer = i(38);
        var n = t.document;
        e.carouselInit = function() {
            var i = void 0 !== e.realRoot ? e.realRoot : e.root,
                n = new r("cdn.mgid.com", i);
            i.style.display = "block", n.init(), i.style.display = "block", n.calculateHeight(), n.decorateSlider(), e.addEvent(t, "scroll", (function() {
                i.style.display = "block", n.mgboxWidth = i.clientWidth - 2, n.calculateHeight(), n.movingSide = "none", n.currentCarouselShift = 0, n.transitionalMoving = !0, n.mgsliderEl.style.left = n.currentCarouselShift + "px", n.decorateSlider()
            }))
        }, t.Element.prototype.isVisible = function() {
            "use strict";

            function e(e, i) {
                return t.getComputedStyle ? n.defaultView.getComputedStyle(e, null)[i] : e.currentStyle ? e.currentStyle[i] : void 0
            }
            return function t(i, r, o, a, s, c, l) {
                var d = i.parentNode;
                return !! function(e) {
                    for (; e = e.parentNode;)
                        if (e == n) return !0;
                    return !1
                }(i) && (9 === d.nodeType || "0" !== e(i, "opacity") && "none" !== e(i, "display") && "hidden" !== e(i, "visibility") && (void 0 !== r && void 0 !== o && void 0 !== a && void 0 !== s && void 0 !== c && void 0 !== l || (r = i.offsetTop, s = i.offsetLeft, a = r + i.offsetHeight, o = s + i.offsetWidth, c = i.offsetWidth, l = i.offsetHeight), !d || ("hidden" === e(d, "overflow") || "scroll" === e(d, "overflow") ? !(s + 2 > d.offsetWidth + d.scrollLeft || s + c - 2 < d.scrollLeft || r + 2 > d.offsetHeight + d.scrollTop || r + l - 2 < d.scrollTop) : (i.offsetParent === d && (s += d.offsetLeft, r += d.offsetTop), t(d, r, o, a, s, c, l)))))
            }(this)
        }, t.Array.prototype.findIndex || Object.defineProperty(t.Array.prototype, "findIndex", {
            value: function(e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var t = Object(this),
                    i = t.length >>> 0;
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var n = arguments[1], r = 0; r < i;) {
                    var o = t[r];
                    if (e.call(n, o, r, t)) return r;
                    r++
                }
                return -1
            }
        });
        var r = function(i, r) {
            this.root = r, this.mgboxWidth = 0, this.currentFirstVisibleIndex = 0, this.currentLastVisibleIndex = 0, this.currentCarouselShift = 0, this.lastSlidePartialVisible = !0, this.firstSlidePartialVisible = !1, this.slides = [], this.mgsliderEl = null, this.mgsliderPrev = null, this.mgsliderNext = null, this.cdnDomain = i, this.transitionalMoving = !1, this.movingSide = "none", this.mouseXCoord = 0, Object.defineProperties(this, {
                lastVisibleSlide: {
                    get: function() {
                        return this.slides[this.currentLastVisibleIndex]
                    }
                },
                firstVisibleSlide: {
                    get: function() {
                        return this.slides[this.currentFirstVisibleIndex]
                    }
                }
            }), this.init = function() {
                var i = r.querySelector(".mgbox"),
                    o = n.createElement("div");
                o.className = "mgslider-box", this.mgsliderEl = n.createElement("div"), this.slides = r.querySelectorAll(".mgline"), this.mgsliderEl.className = "mgslider", this.mgsliderPrev = n.createElement("div"), this.mgsliderPrev.className = "mgslider-prev", this.mgsliderPrev.style.display = "none", this.mgsliderPrev.innerHTML = '<img src="' + e.webProtocol + "//" + this.cdnDomain + '/test/carousel/img/scroll-arrow-to-left.svg">', this.mgsliderNext = n.createElement("div"), this.mgsliderNext.className = "mgslider-next", this.mgsliderNext.style.display = "block", this.mgsliderNext.innerHTML = '<img src="' + e.webProtocol + "//" + this.cdnDomain + '/test/carousel/img/scroll-arrow-to-right.svg">', i.appendChild(o), o.appendChild(this.mgsliderEl), o.appendChild(this.mgsliderPrev), o.appendChild(this.mgsliderNext);
                var a = this;
                [].forEach.call(this.slides, (function(e) {
                    a.mgsliderEl.appendChild(e)
                })), 0 === this.slides.length ? o.style.display = "none" : 0 !== this.slides.length && "none" === o.style.display && (o.style.display = "block"), this.mgsliderPrev.addEventListener("click", (function() {
                    a.move("right")
                })), this.mgsliderNext.addEventListener("click", (function() {
                    a.move("left")
                })), this.mgsliderNext.addEventListener("mouseover", (function() {
                    a.lastVisibleSlide && a.lastVisibleSlide.getAttribute("data-opacity") < 1 && (a.lastVisibleSlide.style.opacity = "0.6")
                })), this.mgsliderPrev.addEventListener("mouseover", (function() {
                    a.firstVisibleSlide && a.firstVisibleSlide.getAttribute("data-opacity") < 1 && (a.firstVisibleSlide.style.opacity = "0.6")
                })), this.mgsliderNext.addEventListener("mouseout", (function() {
                    a.lastVisibleSlide && (a.lastVisibleSlide.style.opacity = "1")
                })), this.mgsliderPrev.addEventListener("mouseout", (function() {
                    a.firstVisibleSlide && (a.firstVisibleSlide.style.opacity = "1")
                }));
                var s = new t.Hammer(this.mgsliderEl);
                s.set({
                    touchAction: "auto"
                }), s.on("swipeleft", (function() {
                    a.move("left")
                })), s.on("swiperight", (function() {
                    a.move("right")
                })), ["webkitTransitionEnd", "oTransitionEnd", "transitionend", "msTransitionEnd"].forEach((function(e) {
                    a.mgsliderEl.addEventListener(e, (function() {
                        a.decorateSlider()
                    }), !1)
                }));
                for (var c = 0; c < this.slides.length; c++) ! function(e) {
                    a.slides[e].addEventListener("click", (function() {
                        a.slides[e].getAttribute("data-opacity") < 1 && a.move(a.slides[e].offsetLeft + a.currentCarouselShift < 10 ? "right" : "left")
                    })), a.slides[e].addEventListener("mouseover", (function(t) {
                        a.slides[e].getAttribute("data-opacity") < 1 && !a.transitionalMoving && (a.slides[e].style.opacity = "0.6")
                    })), a.slides[e].addEventListener("mousemove", (function(e) {
                        a.mouseXCoord = e.clientX
                    })), a.slides[e].addEventListener("mouseout", (function() {
                        a.slides[e].style.opacity = "1"
                    }))
                }(c);
                [].forEach.call(n.querySelectorAll(".mgline a"), (function(e) {
                    ["click", "dblclick", "auxclick"].forEach((function(t) {
                        return e.addEventListener(t, (function(t) {
                            var i = function(e, t) {
                                var i, r;
                                for (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some((function(e) {
                                        return "function" == typeof n.body[e] && (i = e, !0)
                                    })); e;) {
                                    if ((r = e.parentElement) && r[i](t)) return r;
                                    e = r
                                }
                                return null
                            }(e, ".mgline");
                            if (!1 === i.getAttribute("data-clickable") || !1 === i.getAttribute("data-href")) return t.preventDefault(), !1
                        }))
                    }))
                }))
            }, this.calculateHeight = function() {
                var e = this.root.clientWidth,
                    t = 300,
                    i = 1,
                    n = parseInt(!1);
                if (e < 480 && !n) t = e / (i + .6) - 12;
                else
                    for (; t > 230;) t = e / (i + .6) - 12, i += 1;
                [].forEach.call(this.slides, (function(e) {
                    e.style.width = t + "px"
                }))
            }, this.decorateSlider = function() {
                this.mgboxWidth = this.root.clientWidth - 2, this.currentFirstVisibleIndex = null, this.currentLastVisibleIndex = 0;
                for (var t = 0; t < this.slides.length; t++) this.slides[t].setAttribute("data-opacity", "1"), this.slides[t].setAttribute("data-href", 1), this.slides[t].style.opacity = "1", this.slides[t].isVisible() ? (this.slides[t].setAttribute("data-clickable", 1), null === this.currentFirstVisibleIndex && (this.currentFirstVisibleIndex = t), this.currentLastVisibleIndex = t) : this.slides[t].setAttribute("data-clickable", 0);
                if (this.firstVisibleSlide) {
                    var i = this.lastVisibleSlide.offsetLeft + this.lastVisibleSlide.clientWidth + this.currentCarouselShift;
                    if (this.lastSlidePartialVisible = i > this.mgboxWidth, this.firstSlidePartialVisible = this.firstVisibleSlide.offsetLeft + this.currentCarouselShift < 0, !this.firstSlidePartialVisible && this.currentFirstVisibleIndex < 1) {
                        if (this.mgsliderPrev.style.display = "none", this.wasMoved) {
                            this.firstVisibleSlide.setAttribute("data-href", 0);
                            var n = this;
                            setTimeout((function() {
                                n.firstVisibleSlide.setAttribute("data-href", 1)
                            }), 1e3)
                        }
                    } else {
                        this.firstVisibleSlide.setAttribute("data-opacity", "0.6"), this.firstVisibleSlide.setAttribute("data-href", 0), this.mgsliderPrev.style.display = "block";
                        var r = this.mouseXCoord - this.firstVisibleSlide.offsetLeft - this.currentCarouselShift;
                        "right" === this.movingSide && !e.isMobile() && r > 0 && (this.firstVisibleSlide.style.opacity = "0.6"), e.isMobile() && (this.firstVisibleSlide.style.opacity = "0.6")
                    }
                    if (!this.lastSlidePartialVisible && this.currentLastVisibleIndex > this.slides.length - 2) {
                        this.mgsliderNext.style.display = "none", this.lastVisibleSlide.setAttribute("data-href", 0);
                        var o = this;
                        setTimeout((function() {
                            o.lastVisibleSlide.setAttribute("data-href", 1)
                        }), 1e3)
                    } else {
                        this.lastVisibleSlide.setAttribute("data-opacity", "0.6"), this.lastVisibleSlide.setAttribute("data-href", 0), this.mgsliderNext.style.display = "block";
                        var a = this.mouseXCoord - this.lastVisibleSlide.offsetLeft - this.currentCarouselShift;
                        "left" === this.movingSide && !ismobile() && a < this.lastVisibleSlide.clientWidth && (this.lastVisibleSlide.style.opacity = "0.6"), e.isMobile() && (this.lastVisibleSlide.style.opacity = "0.6")
                    }
                    this.transitionalMoving = !1
                }
            }, this.move = function(e) {
                if (!this.transitionalMoving) {
                    if (this.wasMoved = !0, "left" === e) {
                        if (!this.lastSlidePartialVisible && this.currentLastVisibleIndex > this.slides.length - 2) return;
                        var t = this.mgboxWidth - this.slides[this.slides.length - 1].offsetLeft - this.slides[this.slides.length - 1].clientWidth - 6;
                        !this.firstSlidePartialVisible && this.currentFirstVisibleIndex < 1 ? this.currentCarouselShift -= .7 * (this.slides[this.currentLastVisibleIndex].clientWidth + 2 + 10) : this.currentLastVisibleIndex > this.slides.length - 2 ? this.currentCarouselShift = t : this.currentCarouselShift -= this.slides[this.currentLastVisibleIndex - 1].clientWidth + 2 + 10, this.currentCarouselShift < t && (this.currentCarouselShift = t), this.movingSide = "left"
                    } else if ("right" === e) {
                        if (!this.firstSlidePartialVisible && this.currentFirstVisibleIndex < 1) return;
                        this.firstSlidePartialVisible && this.currentFirstVisibleIndex < 1 ? this.currentCarouselShift = 0 : !this.lastSlidePartialVisible && this.currentLastVisibleIndex > this.slides.length - 2 ? this.currentCarouselShift += .7 * (this.slides[this.currentLastVisibleIndex - 1].clientWidth + 2 + 10) : this.currentCarouselShift += this.slides[this.currentLastVisibleIndex - 1].clientWidth + 2 + 10, this.movingSide = "right"
                    }
                    this.transitionalMoving = !0, this.mgsliderEl.style.left = this.currentCarouselShift + "px", [].forEach.call(this.slides, (function(e) {
                        e.style.opacity = "1", e.setAttribute("data-opacity", "1")
                    }))
                }
            }
        }
    }
}, function(e, t, i) {
    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */
    ! function(t, i, n, r) {
        "use strict";
        var o, a = ["", "webkit", "Moz", "MS", "ms", "o"],
            s = i.createElement("div"),
            c = Math.round,
            l = Math.abs,
            d = Date.now;

        function u(e, t, i) {
            return setTimeout(y(e, i), t)
        }

        function h(e, t, i) {
            return !!Array.isArray(e) && (f(e, i[t], i), !0)
        }

        function f(e, t, i) {
            var n;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (void 0 !== e.length)
                for (n = 0; n < e.length;) t.call(i, e[n], n, e), n++;
            else
                for (n in e) e.hasOwnProperty(n) && t.call(i, e[n], n, e)
        }

        function p(e, i, n) {
            var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = t.console && (t.console.warn || t.console.log);
                return o && o.call(t.console, r, n), e.apply(this, arguments)
            }
        }
        o = "function" != typeof Object.assign ? function(e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
            }
            return t
        } : Object.assign;
        var m = p((function(e, t, i) {
                for (var n = Object.keys(t), r = 0; r < n.length;)(!i || i && void 0 === e[n[r]]) && (e[n[r]] = t[n[r]]), r++;
                return e
            }), "extend", "Use `assign`."),
            g = p((function(e, t) {
                return m(e, t, !0)
            }), "merge", "Use `assign`.");

        function v(e, t, i) {
            var n, r = t.prototype;
            (n = e.prototype = Object.create(r)).constructor = e, n._super = r, i && o(n, i)
        }

        function y(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function b(e, t) {
            return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
        }

        function k(e, t) {
            return void 0 === e ? t : e
        }

        function w(e, t, i) {
            f(S(t), (function(t) {
                e.addEventListener(t, i, !1)
            }))
        }

        function x(e, t, i) {
            f(S(t), (function(t) {
                e.removeEventListener(t, i, !1)
            }))
        }

        function C(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function E(e, t) {
            return e.indexOf(t) > -1
        }

        function S(e) {
            return e.trim().split(/\s+/g)
        }

        function _(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function I(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function T(e, t, i) {
            for (var n = [], r = [], o = 0; o < e.length;) {
                var a = t ? e[o][t] : e[o];
                _(r, a) < 0 && n.push(e[o]), r[o] = a, o++
            }
            return i && (n = t ? n.sort((function(e, i) {
                return e[t] > i[t]
            })) : n.sort()), n
        }

        function A(e, t) {
            for (var i, n, r = t[0].toUpperCase() + t.slice(1), o = 0; o < a.length;) {
                if ((n = (i = a[o]) ? i + r : t) in e) return n;
                o++
            }
        }
        var M = 1;

        function D(e) {
            var i = e.ownerDocument || e;
            return i.defaultView || i.parentWindow || t
        }
        var N = "ontouchstart" in t,
            P = void 0 !== A(t, "PointerEvent"),
            B = N && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            L = ["x", "y"],
            O = ["clientX", "clientY"];

        function R(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                b(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function G(e, t, i) {
            var n = i.pointers.length,
                r = i.changedPointers.length,
                o = 1 & t && n - r == 0,
                a = 12 & t && n - r == 0;
            i.isFirst = !!o, i.isFinal = !!a, o && (e.session = {}), i.eventType = t,
                function(e, t) {
                    var i = e.session,
                        n = t.pointers,
                        r = n.length;
                    i.firstInput || (i.firstInput = H(t));
                    r > 1 && !i.firstMultiple ? i.firstMultiple = H(t) : 1 === r && (i.firstMultiple = !1);
                    var o = i.firstInput,
                        a = i.firstMultiple,
                        s = a ? a.center : o.center,
                        c = t.center = W(n);
                    t.timeStamp = d(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = V(s, c), t.distance = F(s, c),
                        function(e, t) {
                            var i = t.center,
                                n = e.offsetDelta || {},
                                r = e.prevDelta || {},
                                o = e.prevInput || {};
                            1 !== t.eventType && 4 !== o.eventType || (r = e.prevDelta = {
                                x: o.deltaX || 0,
                                y: o.deltaY || 0
                            }, n = e.offsetDelta = {
                                x: i.x,
                                y: i.y
                            });
                            t.deltaX = r.x + (i.x - n.x), t.deltaY = r.y + (i.y - n.y)
                        }(i, t), t.offsetDirection = j(t.deltaX, t.deltaY);
                    var u = z(t.deltaTime, t.deltaX, t.deltaY);
                    t.overallVelocityX = u.x, t.overallVelocityY = u.y, t.overallVelocity = l(u.x) > l(u.y) ? u.x : u.y, t.scale = a ? (h = a.pointers, f = n, F(f[0], f[1], O) / F(h[0], h[1], O)) : 1, t.rotation = a ? function(e, t) {
                            return V(t[1], t[0], O) + V(e[1], e[0], O)
                        }(a.pointers, n) : 0, t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length,
                        function(e, t) {
                            var i, n, r, o, a = e.lastInterval || t,
                                s = t.timeStamp - a.timeStamp;
                            if (8 != t.eventType && (s > 25 || void 0 === a.velocity)) {
                                var c = t.deltaX - a.deltaX,
                                    d = t.deltaY - a.deltaY,
                                    u = z(s, c, d);
                                n = u.x, r = u.y, i = l(u.x) > l(u.y) ? u.x : u.y, o = j(c, d), e.lastInterval = t
                            } else i = a.velocity, n = a.velocityX, r = a.velocityY, o = a.direction;
                            t.velocity = i, t.velocityX = n, t.velocityY = r, t.direction = o
                        }(i, t);
                    var h, f;
                    var p = e.element;
                    C(t.srcEvent.target, p) && (p = t.srcEvent.target);
                    t.target = p
                }(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function H(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: c(e.pointers[i].clientX),
                clientY: c(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: d(),
                pointers: t,
                center: W(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function W(e) {
            var t = e.length;
            if (1 === t) return {
                x: c(e[0].clientX),
                y: c(e[0].clientY)
            };
            for (var i = 0, n = 0, r = 0; r < t;) i += e[r].clientX, n += e[r].clientY, r++;
            return {
                x: c(i / t),
                y: c(n / t)
            }
        }

        function z(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }

        function j(e, t) {
            return e === t ? 1 : l(e) >= l(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
        }

        function F(e, t, i) {
            i || (i = L);
            var n = t[i[0]] - e[i[0]],
                r = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + r * r)
        }

        function V(e, t, i) {
            i || (i = L);
            var n = t[i[0]] - e[i[0]],
                r = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(r, n) / Math.PI
        }
        R.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(D(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(D(this.element), this.evWin, this.domHandler)
            }
        };
        var U = {
            mousedown: 1,
            mousemove: 2,
            mouseup: 4
        };

        function q() {
            this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, R.apply(this, arguments)
        }
        v(q, R, {
            handler: function(e) {
                var t = U[e.type];
                1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var X = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            },
            Y = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            Z = "pointerdown",
            $ = "pointermove pointerup pointercancel";

        function J() {
            this.evEl = Z, this.evWin = $, R.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        t.MSPointerEvent && !t.PointerEvent && (Z = "MSPointerDown", $ = "MSPointerMove MSPointerUp MSPointerCancel"), v(J, R, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    r = X[n],
                    o = Y[e.pointerType] || e.pointerType,
                    a = "touch" == o,
                    s = _(t, e.pointerId, "pointerId");
                1 & r && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : 12 & r && (i = !0), s < 0 || (t[s] = e, this.callback(this.manager, r, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: o,
                    srcEvent: e
                }), i && t.splice(s, 1))
            }
        });
        var K = {
            touchstart: 1,
            touchmove: 2,
            touchend: 4,
            touchcancel: 8
        };

        function Q() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, R.apply(this, arguments)
        }

        function ee(e, t) {
            var i = I(e.touches),
                n = I(e.changedTouches);
            return 12 & t && (i = T(i.concat(n), "identifier", !0)), [i, n]
        }
        v(Q, R, {
            handler: function(e) {
                var t = K[e.type];
                if (1 === t && (this.started = !0), this.started) {
                    var i = ee.call(this, e, t);
                    12 & t && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var te = {
            touchstart: 1,
            touchmove: 2,
            touchend: 4,
            touchcancel: 8
        };

        function ie() {
            this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, R.apply(this, arguments)
        }

        function ne(e, t) {
            var i = I(e.touches),
                n = this.targetIds;
            if (3 & t && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var r, o, a = I(e.changedTouches),
                s = [],
                c = this.target;
            if (o = i.filter((function(e) {
                    return C(e.target, c)
                })), 1 === t)
                for (r = 0; r < o.length;) n[o[r].identifier] = !0, r++;
            for (r = 0; r < a.length;) n[a[r].identifier] && s.push(a[r]), 12 & t && delete n[a[r].identifier], r++;
            return s.length ? [T(o.concat(s), "identifier", !0), s] : void 0
        }
        v(ie, R, {
            handler: function(e) {
                var t = te[e.type],
                    i = ne.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });

        function re() {
            R.apply(this, arguments);
            var e = y(this.handler, this);
            this.touch = new ie(this.manager, e), this.mouse = new q(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function oe(e, t) {
            1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, ae.call(this, t)) : 12 & e && ae.call(this, t)
        }

        function ae(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var i = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches;
                setTimeout((function() {
                    var e = n.indexOf(i);
                    e > -1 && n.splice(e, 1)
                }), 2500)
            }
        }

        function se(e) {
            for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var r = this.lastTouches[n],
                    o = Math.abs(t - r.x),
                    a = Math.abs(i - r.y);
                if (o <= 25 && a <= 25) return !0
            }
            return !1
        }
        v(re, R, {
            handler: function(e, t, i) {
                var n = "touch" == i.pointerType,
                    r = "mouse" == i.pointerType;
                if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) oe.call(this, t, i);
                    else if (r && se.call(this, i)) return;
                    this.callback(e, t, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var ce = A(s.style, "touchAction"),
            le = void 0 !== ce,
            de = function() {
                if (!le) return !1;
                var e = {},
                    i = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
                    e[n] = !i || t.CSS.supports("touch-action", n)
                })), e
            }();

        function ue(e, t) {
            this.manager = e, this.set(t)
        }
        ue.prototype = {
            set: function(e) {
                "compute" == e && (e = this.compute()), le && this.manager.element.style && de[e] && (this.manager.element.style[ce] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return f(this.manager.recognizers, (function(t) {
                        b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    })),
                    function(e) {
                        if (E(e, "none")) return "none";
                        var t = E(e, "pan-x"),
                            i = E(e, "pan-y");
                        if (t && i) return "none";
                        if (t || i) return t ? "pan-x" : "pan-y";
                        if (E(e, "manipulation")) return "manipulation";
                        return "auto"
                    }(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    i = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault();
                else {
                    var n = this.actions,
                        r = E(n, "none") && !de.none,
                        o = E(n, "pan-y") && !de["pan-y"],
                        a = E(n, "pan-x") && !de["pan-x"];
                    if (r) {
                        var s = 1 === e.pointers.length,
                            c = e.distance < 2,
                            l = e.deltaTime < 250;
                        if (s && c && l) return
                    }
                    if (!a || !o) return r || o && 6 & i || a && 24 & i ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };

        function he(e) {
            this.options = o({}, this.defaults, e || {}), this.id = M++, this.manager = null, this.options.enable = k(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
        }

        function fe(e) {
            return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function pe(e) {
            return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
        }

        function me(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function ge() {
            he.apply(this, arguments)
        }

        function ve() {
            ge.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ye() {
            ge.apply(this, arguments)
        }

        function be() {
            he.apply(this, arguments), this._timer = null, this._input = null
        }

        function ke() {
            ge.apply(this, arguments)
        }

        function we() {
            ge.apply(this, arguments)
        }

        function xe() {
            he.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Ce(e, t) {
            return (t = t || {}).recognizers = k(t.recognizers, Ce.defaults.preset), new Ee(e, t)
        }
        he.prototype = {
            defaults: {},
            set: function(e) {
                return o(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (h(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = me(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return h(e, "dropRecognizeWith", this) || (e = me(e, this), delete this.simultaneous[e.id]), this
            },
            requireFailure: function(e) {
                if (h(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === _(t, e = me(e, this)) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (h(e, "dropRequireFailure", this)) return this;
                e = me(e, this);
                var t = _(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                var t = this,
                    i = this.state;

                function n(i) {
                    t.manager.emit(i, e)
                }
                i < 8 && n(t.options.event + fe(i)), n(t.options.event), e.additionalEvent && n(e.additionalEvent), i >= 8 && n(t.options.event + fe(i))
            },
            tryEmit: function(e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(33 & this.requireFail[e].state)) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = o({}, e);
                if (!b(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, v(ge, he, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = 6 & t,
                    r = this.attrTest(e);
                return n && (8 & i || !r) ? 16 | t : n || r ? 4 & i ? 8 | t : 2 & t ? 4 | t : 2 : 32
            }
        }), v(ve, ge, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: 30
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    r = e.direction,
                    o = e.deltaX,
                    a = e.deltaY;
                return r & t.direction || (6 & t.direction ? (r = 0 === o ? 1 : o < 0 ? 2 : 4, i = o != this.pX, n = Math.abs(e.deltaX)) : (r = 0 === a ? 1 : a < 0 ? 8 : 16, i = a != this.pY, n = Math.abs(e.deltaY))), e.direction = r, i && n > t.threshold && r & t.direction
            },
            attrTest: function(e) {
                return ge.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = pe(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), v(ye, ge, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), v(be, he, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime > t.time;
                if (this._input = e, !n || !i || 12 & e.eventType && !r) this.reset();
                else if (1 & e.eventType) this.reset(), this._timer = u((function() {
                    this.state = 8, this.tryEmit()
                }), t.time, this);
                else if (4 & e.eventType) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
            }
        }), v(ke, ge, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            }
        }), v(we, ge, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: 30,
                pointers: 1
            },
            getTouchAction: function() {
                return ve.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return 30 & i ? t = e.overallVelocity : 6 & i ? t = e.overallVelocityX : 24 & i && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && l(t) > this.options.velocity && 4 & e.eventType
            },
            emit: function(e) {
                var t = pe(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), v(xe, he, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return ["manipulation"]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    r = e.deltaTime < t.time;
                if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                if (n && r && i) {
                    if (4 != e.eventType) return this.failTimeout();
                    var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        a = !this.pCenter || F(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, a && o ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = u((function() {
                        this.state = 8, this.tryEmit()
                    }), t.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = u((function() {
                    this.state = 32
                }), this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Ce.VERSION = "2.0.7", Ce.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [ke, {
                    enable: !1
                }],
                [ye, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [we, {
                    direction: 6
                }],
                [ve, {
                        direction: 6
                    },
                    ["swipe"]
                ],
                [xe],
                [xe, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [be]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };

        function Ee(e, t) {
            var i;
            this.options = o({}, Ce.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((i = this).options.inputClass || (P ? J : B ? ie : N ? re : q))(i, G), this.touchAction = new ue(this, this.options.touchAction), Se(this, !0), f(this.options.recognizers, (function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }), this)
        }

        function Se(e, t) {
            var i, n = e.element;
            n.style && (f(e.options.cssProps, (function(r, o) {
                i = A(n.style, o), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = e.oldCssProps[i] || ""
            })), t || (e.oldCssProps = {}))
        }
        Ee.prototype = {
            set: function(e) {
                return o(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    var i;
                    this.touchAction.preventDefaults(e);
                    var n = this.recognizers,
                        r = t.curRecognizer;
                    (!r || r && 8 & r.state) && (r = t.curRecognizer = null);
                    for (var o = 0; o < n.length;) i = n[o], 2 === t.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(e), !r && 14 & i.state && (r = t.curRecognizer = i), o++
                }
            },
            get: function(e) {
                if (e instanceof he) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (h(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (h(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        i = _(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (void 0 !== e && void 0 !== t) {
                    var i = this.handlers;
                    return f(S(e), (function(e) {
                        i[e] = i[e] || [], i[e].push(t)
                    })), this
                }
            },
            off: function(e, t) {
                if (void 0 !== e) {
                    var i = this.handlers;
                    return f(S(e), (function(e) {
                        t ? i[e] && i[e].splice(_(i[e], t), 1) : delete i[e]
                    })), this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && function(e, t) {
                    var n = i.createEvent("Event");
                    n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
                }(e, t);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var r = 0; r < n.length;) n[r](t), r++
                }
            },
            destroy: function() {
                this.element && Se(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, o(Ce, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Ee,
            Input: R,
            TouchAction: ue,
            TouchInput: ie,
            MouseInput: q,
            PointerEventInput: J,
            TouchMouseInput: re,
            SingleTouchInput: Q,
            Recognizer: he,
            AttrRecognizer: ge,
            Tap: xe,
            Pan: ve,
            Swipe: we,
            Pinch: ye,
            Rotate: ke,
            Press: be,
            on: w,
            off: x,
            each: f,
            merge: g,
            extend: m,
            assign: o,
            inherit: v,
            bindFn: y,
            prefixed: A
        }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = Ce, "function" == typeof define && define.amd ? define((function() {
            return Ce
        })) : e.exports ? e.exports = Ce : t.Hammer = Ce
    }(window, document)
}]);
