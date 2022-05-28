/* https://placeimg.com/640/480/animals */
let d = document;

export default function slider (img, btnLeft, btnRight ) {

    const $img = d.querySelector(img),
         $btnLeft = d.querySelector(btnLeft),
         $btnRight = d.getElementById(btnRight);

    const arrayImagenes = [
        "https://placeimg.com/640/480/animals",
        "https://placeimg.com/640/480/arch",
        "https://placeimg.com/640/480/tech",
        "https://placeimg.com/640/480/people",
        "https://placeimg.com/640/480/nature",
        "https://placeimg.com/640/480/any/sepia",
    ];

    arrayImagenes.forEach(element => {
        let i = 0;
        $img.src = arrayImagenes[i]
    
        d.addEventListener("click", e => {
            if(e.target.matches(btnRight) && i <= (arrayImagenes.length)){
                i++;
                $img.src = arrayImagenes[i];
                console.log(i);;
            };

            if(e.target.matches(btnRight) && i>= arrayImagenes.lenght){
                i= i - arrayImagenes.length;
                $img.src = arrayImagenes[i]
                console.log(i)

            };

            if (e.target.matches(btnLeft && i >= 0)) {
                i--;
                $img.src = arrayImagenes[i] 
                console.log(i)               
            }
        })
    });
    
}
    



