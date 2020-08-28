$('#sidebar-btn').on('click', function () {
        console.log('click')
        $('.sidebar-container').toggleClass('active');
        $('body').css('overflow', 'hidden')
    });
    $('.sidebar-container .overlay').on('click', function () {
        $('.sidebar-container').removeClass('active');
        $('body').css('overflow', 'initial')
    });

    $('.main-list-item a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('item--active');
        $(this).next().slideToggle();
    })