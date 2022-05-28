let d = document,
    w = window;

export default function detectarWebcam (videoElemnto){
    let $video = d.getElementById(videoElemnto);
  
    navigator.mediaDevices.getUserMedia({video: true,})
    .then(
        (stream) => {
            $video.srcObject = stream;
            /* console.log(stream) */;
        }
    )
    .catch ((error) => {
        let $webcamError = document.createElement("mark"),
            $parentDiv = $video.parentNode
            $webcamError.textContent = `Error: ${error}`
        $parentDiv.replaceChild($webcamError, $video)
    })
}