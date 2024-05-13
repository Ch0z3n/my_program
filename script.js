<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Conditional Image Display</title>
</head>
<body>

<label for="confirmation">Do you want to see the image? (yes/no)</label>
<input type="text" id="confirmation">
<button onclick="showImage()">Show Image</button>

<iframe id="imageFrame" src="" width="500" height="500" style="display: none;"></iframe>

<script>
function showImage() {
    let confirmation = document.getElementById("confirmation").value;
    if (confirmation.toLowerCase() === "yes") {
        document.getElementById("imageFrame").src = "https://prodia-sdxl-stable-diffusion-xl.hf.space";
        document.getElementById("imageFrame").style.display = "block";
    } else {
        alert("Image display cancelled.");
    }
}
</script>

</body>
</html>