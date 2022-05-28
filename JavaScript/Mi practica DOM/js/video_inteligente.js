let d = document

export default function videoInteligente(video) {


    let $video = d.querySelectorAll(video);
    
/* 
    const cb = (entries) => {
        console.log("entries", entries);
        let altEntries = entries.getAttribute("alt");
        console.log(altEntries);
        entries.forEach((entry) => {
            let $altVideo = entry.target.getAttribute("alt")
            console.log($altVideo);
            console.log(entry);
            //console.log("entry", entry);
            if(entry.isIntersecting){
               d.querySelector(`video [alt= ${$altVideo}]`).style.visibilty="visible";
            }else{
               // d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");  
            }
        })
    }
    

    const observer = new IntersectionObserver(cb,{
        //root
        //rootMargin:"-250px"
        threshold: [0.5, 0.75],
    });
    //console.log("observer", observer);
    
    $video.forEach(el => observer.observe(el))
    
 */


/*  */
    d.addEventListener("visibilitychange", function() {
        if ($video.visibilityState === 'visible') {
          //console.log("play")
        } else {
            //console.log("pause")
        }
      });
}