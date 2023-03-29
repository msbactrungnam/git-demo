import './App.css';



  const data = {
    ho_va_ten: "Phung Ba Cong",
    MSV: 20010940,
    nganh: "K14_CNTT_VJ",
    ban_cung_phong: ["Thai Hiep", "Tran Sang", "Hieu", "Tuan", "Manh"],
    phong: {
      loai: "Phong 6 nguoi",
      toa: "C1_305",
      dia_chi: "Dai hoc Phenikaa, Yen Nghia, Ha Dong"      
    }
  }
function render() {
  return (
    <div>
      <h1>Thong tin sinh vien o KTX</h1>
      <p>Ho va ten: {data.ho_va_ten}</p>
      <p>MSV: {data.MSV}</p>
      <p>Nganh: {data.nganh}</p>
      <p>
        Loai: {data.phong.loai}
      </p>
      <p>
        Dia chi: {data.phong.toa}, {data.phong.dia_chi}
      </p>
      <p>
        Nhung nguoi o chung phong: {data.ban_cung_phong.join(", ")}
      </p>
    </div>
  );
}

export default render;