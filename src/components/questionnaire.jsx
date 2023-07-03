import { useState, useEffect } from "react";
import heroimg from "../images/heroilustration.png";

const Questionnaire = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    const calculateResult = () => {
      if (answers.length === 4) {
        const allFalse = answers.every((answer) => answer === false);
        if (allFalse) {
          setResult(
            "Result: Sebagai orang tua, pola asuh yang Anda lakukan tidak berkontribusi penuh secara positif pada perkembangan anak. Anak yang tidak diberitahukan batasan yang jelas dalam bersikap, tidak pernah diberikan pujian dan penghargaan sebagai bentuk apresiasi untuk keberhasilan dan perilaku baik anak, tidak melibatkan anak dalam mengambil keputusan yang sesuai dengan rentang usia mereka, serta tidak memberikan konsekuensi saat anak melanggar aturan yang ada yang mengakibatkan anak tersebut akan menjadi bebas dan liar dalam kehidupannya, anak juga tidak akan peduli dengan lingkungan sekitarnya dan akan selalu merasa terabaikan. Hal ini tentu membentuk perilaku negatif anak. Oleh karena itu, sebagai orang tua pentingnya selalu menerapkan pola asuh yang sesuai agar tidak merasa terabaikan dan terstruktur."
          );
        } else {
          const resultIndex = answers.reduce((acc, answer, index) => {
            return acc + (answer ? Math.pow(2, index) : 0);
          }, 0);
          const resultMapping = {
            1: "Sebagai orang tua, pola asuh Anda yang kurang terstruktur dan respons yang kurang konsisten terhadap perilaku anak dapat memiliki dampak negatif. Ketika pujian dan penghargaan tidak diberikan, anak tidak mendapatkan dorongan positif untuk berperilaku baik. Ketika anak tidak terlibat dalam pengambilan keputusan, mereka akan merasa tidak memiliki kontrol atas kehidupan mereka dan tidak dapat mengembangkan rasa tanggung jawab yang kuat. Tanpa adanya konsekuensi yang konsisten, anak tidak dapat memahami hubungan antara tindakan mereka dan konsekuensi yang akan mereka hadapi. Penting untuk memberikan ketiga hal tersebut agar anak akan merasa lebih terstruktur, mendapatkan dorongan positif, merasa memiliki kontrol atas kehidupan mereka, dan memahami hubungan antara tindakan mereka dan konsekuensi yang akan mereka hadapi.",
            2: "Sebagai orang tua, pola asuh Anda akan menghasilkan lingkungan yang kurang terstruktur dan kurangnya pengertian tentang batasan dan akibat tindakan terhadap anak sehingga anak menjadi sulit diatur. Dengan memberikan pujian atau penghargaan ketika anak berhasil melakukan sesuatu dengan baik akan meningkatkan kepercayaan diri anak ketika melakukan sesuatu. Perlunya memberikan konsekuensi yang sesuai dengan kesalahan anak agar anak belajar dari kesalahannya. Namun orang tua juga perlu melibatkan anak dalam pengambilan keputusan sekecil apapun agar anak dapat menentukan keputusan yang tepat buat kehidupannya.",
            3: "Sebagai orang tua, penting untuk Anda menyadari, ketika pola asuh yang diterapkan kurang jelas dan konsisten bisa menghasilkan lingkungan yang kurang terstruktur bagi anak. Hal ini dapat menyebabkan ketidakjelasan dalam harapan dan aturan yang mereka hadapi sehari-hari. Anak-anak akan kesulitan memahami apa yang baik bagi mereka dan konsekuensi atau akibat dari tindakan yang mereka lakukan. Tanpa batasan yang jelas, anak-anak juga akan bingung dan tidak aman, karena tidak memiliki pegangan yang konsisten untuk beroperasi. Kejelasan dan konsistensi dalam pola asuh anak yang akan membantu anak memahami batasan, aturan, dan konsekuensi yang berlaku dalam kehidupan mereka.",
            4: "Sebagai orang tua, pola asuh yang Anda terapkan akan menciptakan lingkungan yang tidak relevan dan tidak adanya dorongan positif atau konsekuensi yang jelas untuk perilaku anak. Orang tua perlu memberikan batasan-batasan yang jelas kepada anaknya agar anak memiliki aturan dalam hidupnya serta tegas dalam mendidik dan memberikan konsekuensi apabila anak melanggar aturan yang telah dibuat. Jika tidak melakukan hal tersebut, anak akan merasa hidupnya sangat bebas dan dapat melakukan apa saja yang dia mau sekalipun itu berbahaya untuk dirinya. Tidak lupa juga untuk memberikan dukungan dengan memberikan pujian atau penghargaan apabila anak mendapatkan hasil yang baik dari apa yang dicapai olehnya.",
            5: "Sebagai orang tua, pola asuh yang Anda terapkan menghasilkan lingkungan yang kurang terstruktur dan kurang responsivitas. Ini dapat menyebabkan kebingungan pada anak. Bentuk pujian dan penghargaan terhadap anak ketika mencapai keinginannya merupakan salah satu poin utama agar anak dapat mencoba sesuatu yang baru, dimana anak menjadi yakin untuk mencoba hal tersebut. Pemberian konsekuensi yang sesuai terhadap kesalahan anak dapat membentuk perilaku anak menjadi lebih baik dan memperbaiki kesalahan yang dilakukan agar tidak diulang kembali. Pentingnya kedua hal tersebut perlu diperhatikan dan diterapkan dalam pola asuh anak.",
            6: "Sebagai orang tua, pola asuh Anda akan menghasilkan lingkungan yang kurang terstruktur dan tidak adanya konsekuensi yang jelas. Ini dapat membingungkan anak tentang batasan dan akibat dari tindakan mereka yang mengakibatkan anak menjadi sulit diatur tanpa batasan. Namun pola asuh anda sudah cukup baik disaat anda memberikan pujian atau penghargaan terhadap pencapaian anak, serta melibatkan anak dalam pengambilan keputusan dalam hidupnya juga dapat mendorong anak Anda dalam pengambilan keputusan dimasa depan. Bentuk konsekuensi yang tepat terhadap kesalahan anak juga harus diterapkan agar anak dapat belajar dengan hasil dari tindakan mereka.",
            7: "Sebagai orang tua, pola asuh yang Anda lakukan dengan tidak memberikan konsekuensi yang konsisten, dapat menghasilkan lingkungan yang tidak terstruktur bagi anak. Dalam lingkungan yang tidak terstruktur, anak akan menghadapi kesulitan dalam memahami dan mengikuti aturan yang ditetapkan, sehingga mengurangi efektivitas pola asuh dalam membentuk perilaku yang positif. Hal ini dapat menyebabkan ketidakpastian dalam perilaku mereka dan menghambat pembentukan pola perilaku yang positif. Memberikan batasan serta konsekuensi yang jelas dan konsisten dalam pola asuh Anda dapat membuat anak memiliki lingkungan yang terstruktur, memahami aturan dengan baik, dan pola asuh Anda akan lebih efektif dalam membentuk perilaku yang positif.",
            8: "Sebagai orang tua, pola asuh yang Anda lakukan tidak memberikan dukungan yang optimal untuk perkembangan anak. Dimana seorang anak itu memerlukan dukungan seperti dukungan pisikis dan moral. Dukungan terhadap seorang anak dapat membantunya dalam pengambilan keputusan dimasa depan. Bentuk dukungan seperti pujian dan penghargaan ketika anak mendapatkan keinginannya merupakan salah satu motivasi anak untuk mencoba hal yng baru lagi. Orang tua perlu memberikan batasan terhadap anaknya dan seorang anak perlu belajar mengambil keputusan di usia sedini mungkin agar seorang anak dapat belajar mengambil keputusannya dimasa depan. Serta orang tua perlu memberikan bentuk kosekuensi yang konsisten dan tidak bertentangan dengan kesalahan anak tersebut.",
            9: "Sebagai orang tua, pola asuh Anda akan menciptakan karakter anak yang kurang baik ke depannya. Orang tua yang tidak memberikan pujian atau penghargaan ketika anak berhasil melakukan sesuatu dengan baik akan membuat anak merasa tidak percaya diri. Adapun kurangnya keterlibatan dalam pengambilan keputusan sejak dini akan memengaruhi anak ketika harus menentukan keputusan yang akan ia ambil di kedepannya. Oleh karena itu, penting bagi orang tua memberikan hubungan timbal balik pada anak yang sesuai untuk membentuk karakter positif anak tersebut.",
            10: "Sebagai orang tua, pola asuh Anda dapat menciptakan lingkungan yang lebih otoritatif. Anak mungkin mengikuti aturan, tetapi kurang memiliki kesempatan untuk mengembangkan keterampilan pengambilan keputusan dan rasa memiliki. Bentuk pemberian batasan yang tidak jelas dan konsisten dapat membuat anak terlalu bebas dan sulit diatur, serta tidak melibatkan anak ketika mengambil keputusan walaupun hal yang kecil membuat anak sulit memutuskan sesuatu kedepannya. Oleh karena itu, petingnya peran orang tua dalam hal tersebut sebagai proses belajar anak untuk bekal masa depannya.",
            11: "Sebagai orang tua, pola asuh Anda akan mempengaruhi perkembangan anak dengan cara yang lebih otoriter. Anak mungkin mematuhi aturan, tetapi kurang memiliki keterlibatan aktif dalam proses pengambilan keputusan. Anak yang tidak pernah dilibatkan dalam proses pengambilan keputusan akan cenderung sulit ketika ia dihadapkan oleh suatu masalah dan bingung dalam menyelesaikan masalah tersebut, dikarenakan anak tidak dibiasakan mengambil suatu keputusan dalam hidupnya sehingga anak menjadi tidak tegas ketika menghadapi pilihan apa yang harus ia lakukan. Oleh karena itu, orang tua harus selalu melibatkan anak dalam mengambil keputusan walaupun untuk suatu hal kecil agar anak menjadi terbiasa.",
            12: "Sebagai orang tua, pola asuh yang Anda berikan akan menghasilkan lingkungan yang kurang terarah dan kurangnya dorongan positif untuk perilaku anak yang diinginkan. Dalam lingkungan yang kurang terarah, anak mungkin merasa kebingungan dan tidak mendapatkan motivasi yang cukup untuk berperilaku dengan baik. Penting untuk memberikan batasan yang jelas terhadap kehidupan anak, memberik pujian dan penghargaan atas perilaku yang baik dari anak, melibatkan anak dalam pengambilan keputusan yang sesuai dengan usia mereka, dan memberikan konsekuensi yang konsisten atas tindakan yang dilakukan sehingga anak akan merasa lebih terarah, termotivasi dan mampu mengembangkan perilaku yang diinginkan, serta membentuk perilaku anak yang baik.",
            13: "Sebagai orang tua, pola asuh yang Anda terapkan akan menciptakan lingkungan yang lebih otoritatif. Meskipun aturan dan konsekuensi tetap konsisten, namun kurangnya pujian dan penghargaan dapat mempengaruhi motivasi dan perkembangan psikososial anak. Bagi seorang anak sebuah pujian atau penghargaan atas suatu hal kecil yang dicapai sangat berharga agar anak memiliki semangat yang tinggi untuk meraih mimpinya dan merasa bahwa apa yang ingin dia lakukan selalu mendapatkan support dari orang tuanya. Oleh karena itu, orang tua harus selalu ingat memberikan apresiasi berupa pujian ataupun penghargaan kepada anaknya demi perkembangan psikososial anak.",
            14: "Sebagai orang tua, pola asuh yang Anda terapkan akan menyebabkan ketidakjelasan dalam harapan dan aturan yang diberikan kepada anak. Hal ini dapat membuat anak kesulitan memahami batasan yang sehat dan akibat dari perilaku mereka. Oleh karena itu, sebagai orang tua, penting untuk memberikan batasan yang jelas dan konsisten kepada anak, sambil tetap melibatkan mereka dalam pengambilan keputusan dan memberikan konsekuensi yang konsisten. Dengan pendekatan ini, anak akan memiliki panduan yang jelas, mampu memahami harapan yang ditetapkan dan berkembang dengan pola perilaku yang diinginkan.",
            15: "Sebagai orang tua, pendekatan pola asuh yang Anda terapkan memiliki potensi besar untuk menciptakan lingkungan stabil, memperkuat tanggung jawab, dan mendorong perkembangan sosial serta emosional yang sehat pada anak Anda. Dengan memberikan batasan yang jelas dan konsisten, Anda membantu menciptakan struktur yang konsisten dalam kehidupan anak. Melalui konsekuensi yang konsisten, Anda membantu anak memahami hubungan antara tindakan dan akibatnya. Selain itu, pola asuh yang konsisten membantu anak belajar berinteraksi dengan baik, mengelola emosi dengan sehat, dan menghormati orang lain.",
          };
          setResult(`Result: ${resultMapping[resultIndex] || "Tidak ada hasil"}`);
        }
      }
    };

    calculateResult();
  }, [answers]);

  const handleAnswer = (event) => {
    const answer = event.target.value === "true";
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <img src={heroimg} alt="" className="h-96" />
      </div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: "#07294A", fontSize: "48px", margin: "60px auto", maxWidth: "500px" }}>Cari Tahu Apa yang Kamu Butuhkan!</h1>
        <form style={{ backgroundColor: "lightblue", maxWidth: "700px", maxHeight: "600px", margin: "-30px auto", borderRadius: "20px" }}>
          {currentQuestion !== 4 && <h1 style={{ fontWeight: "bold", fontSize: "15px", textAlign: "right", color: "#07294A", paddingTop: "50px", paddingRight: "40px" }}>{currentQuestion + 1}/4 Pertanyaan</h1>}
          {currentQuestion === 0 && (
            <div className="">
              <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#07294A", padding: "10px 40px 35px 50px" }}>Apakah Anda memberikan batasan yang jelas dan konsisten untuk perilaku anak?</h2>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="true" onChange={handleAnswer} style={{ marginRight: "10px", marginBottom: "80px" }} />
                Ya
              </label>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="false" onChange={handleAnswer} style={{ marginRight: "10px", marginLeft: "100px" }} />
                Tidak
              </label>
              <br />
            </div>
          )}
          {currentQuestion === 1 && (
            <div>
              <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#07294A", padding: "10px 40px 50px 50px" }}>Apakah Anda memberikan pujian dan penghargaan ketika anak berhasil melakukan sesuatu dengan baik?</h2>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="true" onChange={handleAnswer} style={{ marginRight: "10px", marginBottom: "80px" }} />
                Ya
              </label>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="false" onChange={handleAnswer} style={{ marginRight: "10px", marginLeft: "100px" }} />
                Tidak
              </label>
              <br />
            </div>
          )}
          {currentQuestion === 2 && (
            <div>
              <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#07294A", padding: "10px 40px 50px 50px" }}>Apakah Anda melibatkan anak dalam pengambilan keputusan yang sesuai dengan usianya?</h2>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="true" onChange={handleAnswer} style={{ marginRight: "10px", marginBottom: "80px" }} />
                Ya
              </label>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="false" onChange={handleAnswer} style={{ marginRight: "10px", marginLeft: "100px" }} />
                Tidak
              </label>
              <br />
            </div>
          )}
          {currentQuestion === 3 && (
            <div>
              <h2 style={{ fontWeight: "bold", fontSize: "30px", color: "#07294A", padding: "10px 40px 50px 50px" }}>Apakah Anda memberikan konsekuensi yang bertentangan ketika anak melanggar aturan?</h2>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="true" onChange={handleAnswer} style={{ marginRight: "10px", marginBottom: "80px" }} />
                Ya
              </label>
              <label style={{ fontSize: "20px", color: "#07294A" }}>
                <input type="radio" name="answer" value="false" onChange={handleAnswer} style={{ marginRight: "10px", marginLeft: "100px" }} />
                Tidak
              </label>
              <br />
            </div>
          )}
          {currentQuestion === 4 && (
            <div className="bg-blue-300 w-auto p-5 rounded-lg mb-5">
              <div className="bg-white h-auto rounded-lg p-5">
                <h2 className="font-medium">{result}</h2>
              </div>
            </div>
          )}
        </form>
        {currentQuestion !== 4 && (
          <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            <button style={{ backgroundColor: "#5AA0F9", color: "white", padding: "10px 30px", border: "none", borderRadius: "5px", marginRight: "30px" }} disabled={currentQuestion === 0} onClick={handlePreviousQuestion}>
              Kembali
            </button>
            <button style={{ backgroundColor: "#5AA0F9", color: "white", padding: "10px 40px", border: "none", borderRadius: "5px" }} onClick={handleNextQuestion}>
              Lanjut
            </button>
          </div>
        )}
        {currentQuestion === 4 && (
          <div style={{ marginTop: "20px" }}>
            <button style={{ backgroundColor: "lightblue", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "60px" }} onClick={() => setCurrentQuestion(0)}>
              Ulang
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Questionnaire;
