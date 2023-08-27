(function($) {
    $(function () {

      const hum = $('#hamburger, .close')
      const nav = $('.sp-nav')
      hum.on('click', function(){
         nav.toggleClass('toggle');
      });

        $('.sub-menu > a').on('click', function (e) {
            e.preventDefault();
            var $subNav = $(this).next('.sub-menu-nav');
            if ($subNav.css("display") === "none") {
                $(this).addClass('is-active');
                $subNav.velocity('slideDown', {duration: 400});
            } else {
                $(this).removeClass('is-active');
                $subNav.velocity('slideUp', {duration: 400});
            }
        });
    });

    var webStorage = function () {
        if (sessionStorage.getItem('access')) {
          /*
            2回目以降アクセス時の処理
          */
          $(".loading").addClass('is-active');
        } else {
          /*
            初回アクセス時の処理
          */
          sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
          $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
          setTimeout(function () {
            // ローディングを数秒後に非表示にする
            $(".loading").addClass('is-active');
            $(".loading-animation").removeClass('is-active');
          }, 2000); // ローディングを表示する時間
        }
      }
      webStorage();
})(jQuery)

lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'fadeDuration': 600,
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })

lightGallery(document.getElementById('lightgallery'));

