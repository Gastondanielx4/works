let d = document;

export function responsive (video,padreVideo, mapa, padreMapa) {
    let $video = d.getElementById(video),
        $divVideo = d.getElementById(padreVideo),
        $divMapa = d.getElementById(padreMapa),
        $mapa = d.getElementById(mapa);
       
    const pxLimites = matchMedia("(min-width: 1000px)");
    const cambiarSegunLimites = (mql) => {
      if (mql.matches){}
      else {
        $mapa.parentNode.removeChild($mapa); 
        $divVideo.innerHTML = `<a href="${$video.src}"> Ver Video</a>`;
        $divMapa.innerHTML = `<a href="${$mapa.src}" target="_blank" > Ver Mapa</a>`;
      }
    }
    pxLimites.addListener(cambiarSegunLimites);
    cambiarSegunLimites(pxLimites)
}