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

    // tổng lương
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



    // xếp loại
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
    }
};
const nhanvien = new nhanVien();

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

const qlnv = new qlnv();

document.querySelector(".modal-footer").addEventListener("click", (event) => {
    const taikhoan = document.getElementById("tknv").value;
    const ten = document.getElementById("name").value;
    const mail = document.getElementById("email").value;
    const ngay = document.getElementById("datepicker").value;
    const chucvu = document.getElementById("chucvu").value;

    const nhanvien = new nhanVien(taikhoan, ten, mail, ngay, chucvu, this.tongluong, this.xeploai);

    addnhanvien(nhanvien){
        this.nhanviens.push(nhanvien);
    }

    const targetEl = event.target;
    if(targetEl.taikhoan === "btnThemNV"){
        qlnv.addnhanVien(nhanvien);
        display(qlnv.nhanvien);
        resetForm();
        $('#myModal').modal('hide');
    }
});

// 3
function Validation(){
    this.hople = true;
    this.loi = [];
}