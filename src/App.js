import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Form from './components/input-form/Form';
import { useState } from 'react';

function App() {
  //code viết ngoài return
  //muốn viết 1 biến có thể update lại value -> dùng useState
  // [tên biến, hàm để update] = useState(default value của biến)
  const [count, setCount] = useState(0);

  //tạo state là 1 object -> value của object cũng sẽ đc set trong useState, value của object thì phải để trong {}
  const [student, setStudent] = useState({
    name: "NguyenVanA",
    score: 10,
    rank: "Khá"
  })

  const handleClickEvent = (number) => {
    setCount(count + 1);
  }


  //chỗ này phải khởi tạo 1 biến Student mới 
  //=> vì nếu k tạo mà gán student để update lại thì address của student trường hợp này sẽ k thay đổi, k render lại
  const handleXepLoai = (loai) => {
    const newStudent = {
      ...student,
      rank: loai
    }
    setStudent(newStudent);
  }

  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const [diemVan, setDiemVan] = useState(0);
  const handleGetDiemVan = (event) => {
    setDiemVan(event.target.value);
  }

  const [diemToan, setDiemToan] = useState(0);
  const handleGetDiemToan = (event) =>{
    setDiemToan(event.target.value);
  }

  const [diemAnh, setDiemAnh] = useState(0);
  const handleGetDiemAnh = (event) => {
    setDiemAnh(event.target.value);
  }
  
  let [diemTb, setDiemTb] = useState(0);
  const tinhDiemTB = (event) => {
    event.preventDefault();
    //Number() để convert từ string qua int
    setDiemTb((Number(diemVan) + Number(diemToan) + Number(diemAnh)) / 3);
  }

  return (
    <div className="App">
      <Header />
      <Footer />
      <button onClick={handleClickEvent}>
        Count
      </button>
      {/* xài biến thì để trong {} */}
      <p>{count}</p>
      <p>Name</p>
      <p>{student.name}</p>
      <p>Score</p>
      <p>{student.score}</p>
      <p>Rank</p>
      <p>{student.rank}</p>

      <button onClick={() => {
        handleXepLoai('Giỏi')
      }}>
      Xếp loại Giỏi
      </button>
      <button onClick={() => {
        handleXepLoai('Khá')
      }}>
      Xếp loại Khá
      </button>
      <button onClick={() => {
        handleXepLoai('TB')
      }}>
      Xếp loại TB
      </button>

      <form>
        {/* mỗi lần thằng input change value -> gọi tới hàm handleChange~ để set lại value của mấy cái state liên quan */}
        
        {/* Cách 1: */}
        {/* <input onChange={handleNameChange} className="name" placeholder="Name" /><br /> */}
        
        {/* Cách 2: */}
        <input onChange={(event) => {
          setName(event.target.value);
        }} className="name" placeholder="Name" /><br />

        {/* Cách 1: */}
        {/* <input onChange={handleGetDiemVan} className="diem-van" placeholder="Diem Van" /><br /> */}
        
        {/* Cách 2: */}
        <input onChange={(event) => {
          setDiemVan(event.target.value);
          setDiemTb((Number(diemVan) + Number(diemToan) + Number(diemAnh))/3)
        }} className="diem-van" placeholder="Diem Van" /><br />

        {/* Cách 1: */}
        {/* <input onChange={handleGetDiemToan} className="diem-toan" placeholder="Diem Toan" /><br /> */}
        
        {/* Cách 2: */}
        <input onChange={(event) => {
          setDiemToan(event.target.value);
          setDiemTb((Number(diemVan) + Number(diemToan) + Number(diemAnh))/3)
        }} className="diem-toan" placeholder="Diem Toan" /><br />

        {/* Cách 1: */}
        {/* <input onChange={handleGetDiemAnh} className="diem-anh" placeholder="Diem Anh" /><br /> */}
        
        {/* Cách 2: */}
        <input onChange={(event) => {
          setDiemToan(event.target.value);
          setDiemTb((Number(diemVan) + Number(diemToan) + Number(diemAnh))/3)
        }} className="diem-anh" placeholder="Diem Anh" /><br />

        <button type ="submit">Submit</button>
        <p>Ban {name} DiemTB: {diemTb} </p>
      </form>

    </div>
  );
}

export default App;
