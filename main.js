// BÀI TẬP 01----------------------------
// - Đầu vào:
// - Xử lý:
//     + Sử dụng dòng lặp để cộng dồn và so sánh đến khi nào lớn hơn hoặc bằng 10000 thì dừng
// - Đầu ra:
//     + Kết quả số n

function timN(cotMoc) {
    var ex01_sum = 0;
    var ex01_count = 1;

    while (ex01_sum <= cotMoc) {
        ex01_sum += ex01_count;
        ex01_count++;
    }
    return ex01_count - 1;
}


document.getElementById("exBtn01").onclick = function () {
    document.getElementById("ex01_result").innerHTML = "n = " + timN(10000);
    document.getElementById("ex01_result").classList.add("output");

}


// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + Hai số x,n
// - Xử lý:
//     + Viết hàm tính tổng giống như yêu cầu đề bài
// - Đầu ra:
//     + Tổng

function tinhTong(x, n) {
    var ex02_sum = 0;
    for (var i = 1; i<=n; i++) {
        ex02_sum += Math.pow(x, i);
    }
    return ex02_sum;
}

document.getElementById("exBtn02").onclick = function () {
    var ex02_x = parseInt(document.getElementById("ex02_x").value);
    var ex02_n = parseInt(document.getElementById("ex02_n").value);

    document.getElementById("ex02_result").innerHTML = "Tổng cần tính bằng " + tinhTong(ex02_x, ex02_n);
}

// BÀI TẬP 03----------------------------
// - Đầu vào:
//     + Số n
// - Xử lý:
//     + Tính n giai thừa bằng dòng lặp for
// - Đầu ra:
//     + kết quả n gia thừa

function tinhGiaiThua(n) {
    var ex03_giaiThua = 1;
    for (var i = 1; i<=n; i++) {
        ex03_giaiThua *= i
    }
    return ex03_giaiThua;
}

document.getElementById("exBtn03").onclick = function () {
    var ex03_n = parseInt(document.getElementById("ex03_n").value);

    document.getElementById("ex03_result").innerHTML = ex03_n + " giai thừa bằng " + tinhGiaiThua(ex03_n);
}

// BÀI TẬP 04----------------------------
// - Đầu vào:
//     + Số div muốn tạo
// - Xử lý:
//     + Sử dụng dòng lặp For và if bước đếm để xác định màu background
// - Đầu ra:
//     + In ra số thẻ div tương ứng, chẵn màu đỏ, lẻ màu xanh

function taoDiv(n) {
    var ex04_content = ""
    var tagDiv = document.createElement("div");
    for (var i = 1; i<=n; i++) {
        if(i%2 ==0){
            ex04_content += '<div style="background-color:red">Thẻ div thứ'+i+'</div>'

        }
        else{
            ex04_content += '<div style="background-color:blue">Thẻ div thứ'+i+'</div>'
        }
    }
    return ex04_content;
}

document.getElementById("exBtn04").onclick = function () {
    var ex04_n = parseInt(document.getElementById("ex04_n").value);
    document.getElementById("ex04_result").innerHTML = taoDiv(ex04_n);
}