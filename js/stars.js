let tl2 = anime.timeline({

    }).add({
      targets: '.star',
      scale: [
          {value: 0, easing: 'easeOutSine', duration: 300},
          {value: 1, easing: 'easeInOutQuad', duration: 2000},
        ],
        delay: anime.stagger(200, {grid: [50, 5], from: 'center'})
    })

    let tl = anime.timeline({
      loop:true
    })
    .add({
        targets: '.star',

        opacity: [
          {value: 0, easing: 'easeOutSine', duration: 300},
          {value: 0.3, easing: 'easeInOutQuad', duration: 6000},
          {value: 0, easing: 'easeInOutQuad', duration: 2000}
        ],

        delay: anime.stagger(200, {grid: [50, 5], from: 'center'})
      });
