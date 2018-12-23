//  实现一个插件机制的模板
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        root.returnExports = factory()
    }
}(typeof self !== 'undefined' ? self : this, function () {
    function extend(o, n, override) {
        for (var p in n) {
            if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override)) {
                o[p] = n[p]
            }
        }
    }
    var eventUtil = {
        addEvent: function (element, type, handler) {
            if (element.addEventListener) {
                // dom2 
                element.addEventListener(type, handler, false)
            } else if (element.attachEvent) {
                // ie
                element.attachEvent('on' + type, handler)
            } else {
                // dom 0
                element['on' + type] = handler
            }
        },
        removeEvent: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false)
            } else if (element.datachEvent) {
                element.datachEvent('on' + type, handler)
            } else {
                element['on' + type] = null
            }
        },
        getEvent: function (event) {
            return event ? event : window.event
        },
        getRelatedTarget: function (event) {
            if (event.getRelatedTarget) {
                return event.getRelatedTarget
            } else if (event.toElement) {
                return event.toElement
            } else if (event.formElement) {
                return event.formElement
            } else {
                return null
            }
        },
        getTarget: function (event) {
            // 返回事件目标源对象
            return event.target || event.srcElement
        },
        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault()
            } else {
                event.returnValue = false
            }
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = false
            }
        }
    }
    function Plugin(selector, userOptions) {
        if (!(this instanceof Plugin)) return new Plugin(selector, userOptions);
        this.init(selector, userOptions)
    }
    Plugin.prototype = {
        constructor: Plugin,
        options: {},
        init: function (selector, userOptions) {
            extend(this.options, userOptions, true)
        }
    }
    return Plugin
}))
