//console.log()

function handleFileSelect(event) {
    var input = this;
    console.log(input.files)
    if (input.files && input.files.length) {
        var reader = new FileReader();
        this.enabled = false
        reader.onload = (function (e) {
            console.log(e)
            $("#preview").html(['<img class="thumb" src="', e.target.result, '" title="', escape(e.name), '"/>'].join(''))
        });
        reader.readAsDataURL(input.files[0]);
    }
}

$('#file').change(handleFileSelect);

$('.file-edit-icon').on('click', '.preview-de', function () {
    $("#preview").empty()
    $("#file").val("");
});

$('.preview-edit').click(function () {
    $("#file").click();
});


// var sel_file;

// $(document).ready(funtion(){
//     $("#input_img").on("change", handleFileSelect);

// });

// function handleFileSelect(e) {
//     var files = e.target.files;
//     var filesArr = Array.prototype.slice.call(files);

//     filesArr.forEach(function (f) {
//         if (!f.type.match("image.*")) {
//             alert("확장자는 이미지 확장자만 가능합니다.");
//             return;
//         }
//         sel_file = f;

//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $("#img").attr("src", e.target.result);

//         }
//         reader.readAsDataURL(f);
//     });
// }