/* ------------------------------------------------------------------------
 Do it when you're ready dawg!
 ------------------------------------------------------------------------- */



tabs = {
    init: function () {
        $('.tabs').each(function () {

            var th = $(this),
                    tContent = $('.tab-content', th),
                    navA = $('ul.nav a', th);

            tContent.not().hide();
            tab_act = $('ul.nav .selected a').attr('href');
            $(tab_act).show();

            navA.click(function () {
                var th = $(this),
                        tmp = th.attr('href');
                tContent.not($(tmp.slice(tmp.indexOf('#'))).fadeIn(600)).hide();
                $(th).parent().addClass('selected').siblings().removeClass('selected');
                Cufon.refresh();
                return false;
            });
        });
    },
    tab: function () {
        var year = res = document.location.href.split('#')[1];
        if (year == undefined) {
            year = 2015;
        }
        var linkArray = $("ul.nav a");
        for (var index in linkArray) {
            if (linkArray[index].hash === '#' + year) {
                $(linkArray[index]).parent().addClass('selected').siblings().removeClass('selected');
                Cufon.refresh();
            }
        }

    }
};

