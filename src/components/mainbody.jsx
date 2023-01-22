import React from "react";

export default function MainBody() {
  return (
    <div className="display-body">
      <div className="display-left">
        <p className="text1">Managing money, made simple</p>
        {/* <SignUp /> */}
        <p style={{fontSize: "2vw"}}>#1 most downloaded personal finance app'</p>
        <div className="store">
            <a className="store1" href="/">
                <img className="store-img" src="./images/app store.jpg" />
            </a>
            <a className="store1" href="/">
                <img className="store-img" src="./images/play store.jpg" />
            </a>
          <p style={{backgroundColor : "transparent", color : "white", textShadow:".5vh 0.5vh .5vh green", width: "25vw", marginTop: "5vw", marginLeft: "2vw", fontSize: "1.7vw", fontStyle: "italic"}}>".xyz helping me manage all my accounts in one place, I wouldn't have been motivated to pay off $125K of student debt in 3 years." - AD</p>
        </div>
      </div>
    </div>
    
  );
}
