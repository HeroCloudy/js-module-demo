(function (m, w) {
    function dating() {
        console.log('铁器时代 - IIFE')
        console.log('两人开始约会....')

        m.intro()
        w.intro()
    }

    window.dating = {
        dating
    }
})(man, woman)
