import React from 'react'
import {useHistory} from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {Howl} from 'howler'
import Clock from "react-live-clock";

const MainPage = () => {
   const handle = useFullScreenHandle();
  const history = useHistory()
  const [button, setButton] = React.useState(false)
  const [positio, setPosition] = React.useState(0)
  const [terima,setTerima] = React.useState(false)
  const [muncul,setMuncul] = React.useState(false)
  const [time, setTime] = React.useState("")


  const OnDeterima = () => {
    history.push("/diterima")
    const sound = new Howl({
      src: ["https://pedantic-montalcini-82e706.netlify.app/../assets/diterima.mp3"],
      autoplay: true,
      volume: 1,
      onend: function () {
        const data = localStorage.getItem("nama")as any
        localStorage.setItem("nama2", data)
        localStorage.removeItem("nama")
        history.push("/jadian")
      },
    });
    sound.play()
  }

  const OnTolak = () => {
     setTerima(true);
     console.log(terima);
    setPosition(Math.ceil((Math.random() * 200)));
      const asu = (document.getElementsByClassName("wrapper-aaccepted")[0] as any).style.top="300px"
      console.log(asu)
  }
   const onPlaySong = () => {
    handle.enter()
    setButton(true)
    const sound = new Howl({
      src: [
        "https://pedantic-montalcini-82e706.netlify.app/../assets/AudioCutter_AudioCutter_The Vamps - Somebody To You ft. Demi Lovato (Lyrics).mp3",
      ],
      autoplay: true,
      volume: 1,
      onend: function () {
        console.log("finish");
        setMuncul(true)
      },
    });
    console.log(sound.play());
    sound.play();
  }
   
  React.useEffect(() => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    setTime(
      `${year},${
        month < 10 ? `0${month}` : `${month}`
      },${date}`
    );

  }, [])
    return (
      <>
        <FullScreen handle={handle}>
          <div className="container main-wrap">
            <div className="android-wrapper">
              <h1 className="text-white font-weight-bold">
                <Clock />
              </h1>
              <span className="text-white">{time}</span>
              <p className="text-white">pengisian daya telah penuh</p>
              <i style={{ color: "red" }} className="fas fa-heart fa-3x"></i>
              <h5 className="text-white">
                selamat datang, {localStorage.getItem("nama")}
              </h5>
              <div className="notification-wrappper">
                <div
                  onClick={onPlaySong}
                  className={!button ? "notofication-message" : " d-none"}
                >
                  <div className="logo text-dark fa-2x">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="content text-dark">
                    <span>10 new Message</span>
                    <span>touch to view your message</span>
                  </div>
                  <div className="time text-dark">
                    <Clock />
                  </div>
                </div>
                <div
                  style={
                    terima
                      ? {
                          position: "absolute",
                          top: positio,
                          left: positio,
                          right: positio,
                        }
                      : { backgroundColor: "white" }
                  }
                  className="wrapper-aaccepted"
                >
                  <div className={button ? "element-asked" : "d-none"}>
                    <p>
                       {localStorage.getItem("nama")}, Meskipun aku memiliki
                      banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi
                      dariku dan aku tidak bisa mengungkapkannya. Hal sederhana
                      yang ingin aku katakan adalah aku mencintaimu hari ini dan
                      selalu.
                      <span className="text-secondary font-wight-bold">Maukah kamu jadi pendamping hidupku???</span>
                    </p>
                    <div className={muncul ? "kamu-manis" : "d-none"}>
                      <button
                        onClick={OnDeterima}
                        className="btn btn-primary btn-sm"
                      >
                        terima
                      </button>
                      <button
                        onMouseOver={OnTolak}
                        onPointerMove={OnTolak}
                        className="btn btn-danger btn-sm ml-2"
                      >
                        Tolak
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreen>
      </>
    );
}

export default MainPage