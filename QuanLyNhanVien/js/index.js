// 1
class nhanvien {
    constructor(taikhoan, ten, mail, ngay, chucvu, tongluong, xeploai) {
        this.taikhoan = taikhoan;
        this.ten = ten;
        this.mail = mail;
        this.ngay = ngay;
        this.chucvu = chucvu;
        this.tongluong = tongluong;
        this.xeploai = xeploai;
    }  
const nhanvien = new nhanvien();

display = (nhanvien) => {
    const html = nhanvien.reduce((result, nhanvien) => {
        return result + `
        <tr>
            <td>${nhanvien.taikhoan}</td>
            <td>${nhanvien.ten}</td>
            <td>${nhanvien.mail}</td>
            <td>${nhanvien.ngay}</td>
            <td>${nhanvien.chucvu}</td>
            <td>${nhanvien.tinhLuong()}</td>
            <td>${nhanvien.xepLoai()}</td>
        </tr>
        `
    },"");
    document.getElementById("tableDanhSach").innerHTML = html;
}

// 2
class qlnv{
    constructor(){
        this.nhanvien = [];
    }
};
const qlnv = new qlnv();
addnhanvien(nhanvien){
    this.nhanviens.push(nhanvien);
}

const targetEl = event.target;
if(targetEl.taikhoan === "btnThemNV"){
    qlnv.addnhanVien(nhanvien);
}

// 3
document.querySelector(".modal-footer").addEventListener("click", (event) => {
    const taikhoan = document.getElementById("tknv").value;
    const ten = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const ngay = document.getElementById("datepicker").value;
    const chucvu = document.getElementById("chucvu").value;
    const nhanvien = new nhanVien(taikhoan, ten, mail, ngay, chucvu, this.tongluong, this.xeploai);
});

// 4
function Validation(){
    this.valid = true;
    this.error = [];
}

Validation.prototype.tknvValidity = function(name, value){
const regex = /^\d{4,6}$/; 
    if (regex.test(value)){
        delete this.error[name];
    } else{
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.nameValidity = function(name,value){
    const regex = /^[a-zA-Z ]*$/; 
    if (regex.test(value)){
        delete this.error[name];
    } else{
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.emailValidity = function(name,value){
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/; 
    if (regex.test(value)){
        delete this.error[name];
    } else {
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.passwordValidity = function(name,value){
    const regex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,10}/ ; 
    if (regex.test(value)){
        delete this.error[name];
    } else {
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.datepickerValidity = function(name,value){
    const regex = /(0[1-9]|1[0-2])(\/|-|\.)(0[1-9]|[12]\d|3[01])(\/|-|\.)([12]\d{3})/;
    if (regex.test(value)){
        delete this.error[name];
    } else {
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.luongCBValidity = function (name,value){
    const regex = /^[1]\d{6}|[2]0{7}$/;
    if (regex.test(value)){
        delete this.error[name];
    } else {
        this.error[name] = "không hợp lệ";
    }
}

Validation.prototype.required = function (name, value){
    if(!value){
        this.errors[name] = "không để trống";
    } else{
        this.errors[name] = "";
    }
}

Validation.prototype.gioLamValidity = function (name,value){
    const regex = /^[8-9]\d{1}|[1]\d{2}|[2]0{2}$/; 
    if (regex.test(value)){
        delete this.error[name];
    } else {
        this.error[name] = "không hợp lệ";
    }
}

// 5
tinhLuong() {
    const chucVu = document.getElementById("chucvu").selectedIndex;
    const luongCoBan = +document.getElementById("luongCB").value;
    if (chucVu === 1) {
        return this.tongluong = luongCoBan * 3;
    } if (chucVu === 2) {
        return this.tongluong = luongCoBan * 2;
    } if (chucVu === 3) {
        return this.tongluong = luongCoBan * 1;
    }
}

// 6
xepLoai() {
    const gioLam = +document.getElementById("gioLam").value;
    if (gioLam >= 192) {
        return this.xeploai = "Xuất Sắc";
    } if (gioLam >= 176) {
        return this.xeploai = "Giỏi";
    } if (gioLam >= 160) {
        return this.xeploai = "Khá";
    } if (gioLam < 160) {
        return this.xeploai = "Trung Bình";
    }
};

// 7
deleteNhanvien(nhanvien){
    this.nhanvien.filter(nhanvien) ;
}

// 8
document.getElementById("tableDanhSach").addEventListener("click", (event) => {
    const taikhoan = document.getElementById("tknv").value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const ngay = document.getElementById("datepicker").value;
    const luongCB = document.getElementById("luongCB").value;
    const chucvu = document.getElementById("chucvu").value;
    const gioLam = document.getElementById("gioLam").value;

    validation.tknvValidity("tbTKNV",taikhoan);
    validation.nameValidity("tbTen",name);
    validation.emailValidity("tbEmail",mail);
    validation.passwordValidity("tbMatKhau",password);
    validation.ngayValidity("tbNgay",ngay);
    validation.luongCBValidity("tbLuongCB",luongCB);gioLam
    validation.required("tbChucVu",chucvu);
    validation.gioLamValidity("tbGiolam",gioLam);
}

// 9
document.getElementById("btnTimNV").addEventListener("click",() => {
    const timNV = document.getElementById("searchName").value.;
    const ketqua = qlnv.nhanvien.filter((nhanvien) => {
        const xeploai = nhanvien.xeploai().;
        return xeploai.indexOf(timNV) !== -1;
    });
    display(ketqua);
})