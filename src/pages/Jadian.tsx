import React from 'react'
import Typewriter from "typewriter-effect";


const Jadian = () => {
    const data = [
      "Kepercayaan itu selalu diperoleh, tidak pernah diberikan",
      "Sejauh apa pun jarak kita, aku dan kamu akan tetap dekat di dalam doa.",
      "Biarkan raga yang terpisah, bukan cinta kita.",
      "Duduklah di sampingku, akan kuceritakan segalanya kecuali perpisahan.",
      "Cintaku padamu layaknya jumlah pasir di bumi, tak terhingga.",
       "Aku cinta kamu, itulah 3 kata yang selalu ada dalam hidupku.",
      "Hormati orang-orang yang mempercayaimu. Untuk orang mempercayaimu itu tidak mudah, jadi perlakukan kepercayaan mereka seperti porselen yang berharga",
      "Bukti terbaik dari cinta adalah kesetiaan dan menerima apa adanya.",
      "Hanya dibutuhkan beberapa detik untuk jatuh cinta, tapi seumur hidup untuk membuktikannya",
      "Seseorang yang tidak mau menerima kekuranganmu apa adanya, bukanlah orang yang tepat untukmu",
      "Jangan pernah membanding-bandingkan orang di sekitarmu, terlebih orang yang kamu cintai. Tak ada manusia yang sempurna. Cintailah dia apa adanya",
    ];
    const [love, setLove] = React.useState(true)
    const [text, setText] = React.useState(true)
    const [jalan, setTextJalan] = React.useState(true)
    const [motivate, setMotivate] = React.useState(0)
    const kata = 'I LOVE YOU SO MUCH BABY......'
    const Manis = (event: any) => {
        setTextJalan(false)
    };

    const ChangeData = () => {
        setMotivate(Math.floor(Math.random() * Math.floor(11)));
    }
    
    React.useEffect(() => {
        setMotivate(Math.floor(Math.random() * Math.floor(11)));
        setTimeout(() => {
            setLove(false)
        }, 3000)

        setInterval(() => {
            setText(false)
        }, 2000)
    }, [])
    return (
      <div className="container sukses-wrap">
        {/* <h2 className="text-white font-weight-bold">selamat yaaaa {localStorage.getItem('nama')}, semoga langgeng...!!!</h2> */}
        <div className="sukses-wrap-data">
          <span style={{fontStyle:"italic"}} onClick={ChangeData} className="text-center text-secondary font-weight-bold f-200">
            {data[motivate]}
          </span>
          <h4 className={text ? "d-none" : "hai mt-2"}>
            {localStorage.getItem("nama2")}
          </h4>
          <i
            onClick={Manis}
            style={{ color: "red" }}
            className={love ? "d-none" : "fas fa-heart fa-3x"}
          ></i>
          <div className="text-berjalan">
            {jalan ? (
              ""
            ) : (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${kata}`)
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(500)
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
}

export default Jadian