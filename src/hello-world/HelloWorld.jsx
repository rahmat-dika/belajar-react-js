// Format 1
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>Selamat Belajar React JS</p>
//     </div>
//   )
// }

// export default HelloWorld;

// Penggunaan XML mewajibkan setiap element di tutup

// Format 2
export default function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Selamat Belajar React JS Bro</p>
    </>
  )
}