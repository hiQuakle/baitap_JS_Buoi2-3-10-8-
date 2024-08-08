// Bài 1:
document.querySelector(".btn-dark").onclick = function () {
  const soNgayLam = document.getElementById("soNgayLam").value * 1;

  const tienLuong1Ngay = 100000;
  let tongTienLuong = 0;
  tongTienLuong = tienLuong1Ngay * soNgayLam;

  let salary = tongTienLuong.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  salary = `
    <div class = 'bg-success'>
    <p> Tổng Tiền Lương của bạn là :
    ${salary}</p>
    </div>
    `;
  document.getElementById("resultSalary").innerHTML = salary;
};
//---------------------------------------------------------------------
// Bài 2:
function tinhTrungBinh5SoThuc(soThu1, soThu2, soThu3, soThu4, soThu5) {
  let trungBinh5SoThuc = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  return trungBinh5SoThuc;
}
document.querySelector(".btn-primary").onclick = function () {
  const soThu1 = document.getElementById("soThuNhat").value * 1;
  const soThu2 = document.getElementById("soThuHai").value * 1;
  const soThu3 = document.getElementById("soThuBa").value * 1;
  const soThu4 = document.getElementById("soThuBon").value * 1;
  const soThu5 = document.getElementById("soThuNam").value * 1;

  let trungBinh5SoThuc = tinhTrungBinh5SoThuc(
    soThu1,
    soThu2,
    soThu3,
    soThu4,
    soThu5
  );
  trungBinh5SoThuc = `
  <div class = 'bg-primary-subtle'> 
  <p>
  Trung Bình 5 Số Thực Trên Là : ${trungBinh5SoThuc}
  </p> 
  </div>
  `;
  document.getElementById("resultsumtB").innerHTML = trungBinh5SoThuc;
};
//----------------------------------------------------------------------
// Bài 3:
function VND(USD, perUSD) {
  let VND = USD * perUSD;
  return VND;
}
document.querySelector(".btn-danger").onclick = function () {
  const USD = document.getElementById("tradeUSDTOVND").value * 1;

  let perUSD = 23500;
  let VNĐ = VND(USD, perUSD);
  let resultTrade = VNĐ.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  resultTrade = `
  <div class='bg-danger-subtle'> 
  <p> Tổng Tiền Từ USD Sang VNĐ Là: ${resultTrade} </p>
  </div>
  `;
  document.getElementById("resultTrade").innerHTML = resultTrade;
};
//-----------------------------------------------------------------------
// Bài 4 :
function chuVi(chieuDai, chieuRong) {
  let chuVi = (chieuDai + chieuRong) * 2;
  return chuVi;
}
function dienTich(chieuDai, chieuRong) {
  let dienTich = chieuDai * chieuRong;
  return dienTich;
}
document.querySelector(".btn-warning").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  let CV = chuVi(chieuDai, chieuRong);
  let DT = dienTich(chieuDai, chieuRong);

  let resultCVandDT = `
  <div class ='bg-warning-subtle'>
  <p> Chu Vi: ${CV}. <br>
  Diện Tích: ${DT}.
  </p>
  `;
  document.getElementById("resultCVandDT").innerHTML = resultCVandDT;
};
//------------------------------------------------------------------------
// Bài 5:
function tinhTongKySo(so) {
  // Kiểm tra nếu 'so' không phải là số nguyên hoặc không nằm trong khoảng từ 10 đến 99
  if (!Number.isInteger(so) || so < 10 || so > 99) {
    throw new Error("Số phải là một số nguyên từ 10 đến 99.");
  }

  // Tách số thành ký số đơn vị và hàng chục
  let don_Vi = so % 10; // Ký số đơn vị
  let hang_Chuc = Math.floor(so / 10); // Ký số hàng chục

  // Tính tổng của các ký số
  let tong = don_Vi + hang_Chuc;

  return tong;
}
document.querySelector(".btn-info").onclick = function () {
  const so = document.getElementById("soChuc").value * 1;

  let resultKySo = tinhTongKySo(so);
  console.log("Tổng của hai ký số là:", resultKySo);
  resultKySo = `
  <div class ='bg-info-subtle'> 
  <p> Tổng 2 Ký Số Là : ${resultKySo}
  </p>
  </div>
  `;
  document.getElementById("resultKySo").innerHTML = resultKySo;
};
