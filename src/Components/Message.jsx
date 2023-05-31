import "./message.css";
import React from 'react';

export default function Message({ message, own }) {
  return (
    <div className="ooo">
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"/>
        <p className="messageText">Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Integer ultricies malesuada quam.</p></div>
        <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg" src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"/>
        <p className="messageText">Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Quisque vitae varius ex, eu volutpat orci.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.</p></div>
      <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg" src="https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8"/>
        <p className="messageText">Cras vel elit sed mi placerat pharetra eget vel odio.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer ultricies malesuada quam.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div>
      <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg"src="https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"/>
        <p className="messageText">Duis ac nulla varius diam ultrices rutrum.Integer ultricies malesuada quam.<br/>Page 0<br/>Duis ac nulla varius diam ultrices rutrum.</p></div>
      <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg"src="https://fastly.picsum.photos/id/1072/160/160.jpg?hmac=IDpbpA5neYzFjtkdFmBDKXwgr-907ewXLa9lLk9JuA8"/>
        <p className="messageText">Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Aenean ullamcorper orci et vulputate fermentum.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.<br/>Page 0<br/>Cras erat dui, finibus vel lectus ac, pharetra dictum odio.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.</p></div>
      <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg"src="https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"/>
        <p className="messageText">Duis ac nulla varius diam ultrices rutrum.Integer ultricies malesuada quam.Aenean ullamcorper orci et vulputate fermentum.Duis ac nulla varius diam ultrices rutrum.</p></div>
      <div className="messageBottom"></div>

      <div className="message own">
        <p className="messageText1">Aenean ullamcorper orci et vulputate fermentum.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Quisque vitae varius ex, eu volutpat orci.</p></div>
      <div className="messageBottom"></div>

      <div className="message own">
        <p className="messageText1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Page 0<br/>Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Quisque vitae varius ex, eu volutpat orci.Duis ac nulla varius diam ultrices rutrum.Duis ac nulla varius diam ultrices rutrum.</p></div>
      <div className="messageBottom"></div>
      
      <div className="messageTop">
        <img className="messageImg"src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"/>
        <p className="messageText">Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.<br/>Page 0<br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.</p></div>
      <div className="messageBottom"></div>

      <div className="messageTop">
        <img className="messageImg"src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o"/>
        <p className="messageText">Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.</p></div>
      <div className="messageBottom"></div>
      </div>
    </div>
    
  );
}
