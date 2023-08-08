import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Photos() {
  return (
    <main className="PhotoMainCont">
      <div className="PhotoCont">
        <Link className="LinkCont" href="./Citys/Istanbul">
          <div className="CityNameCont">
            <h1 className="CityNames">ISTANBUL</h1>
          </div>
          <Image
            className="Image"
            src="/images/Istanbul/Istanbul1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">AMSTERDAM</h1>
          </div>
          <Image
            className="Image"
            src="/images/Amsterdam/Amsterdam1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">PARIS</h1>
          </div>
          <Image
            className="Image"
            src="/images/Paris/Paris1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">JAPAN</h1>
          </div>
          <Image
            className="Image"
            src="/images/Japan/Japan1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">LONDRA</h1>
          </div>
          <Image
            className="Image"
            src="/images/Londra/Londra1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">SHANGAI</h1>
          </div>
          <Image
            className="Image"
            src="/images/Shangai/Shangai1.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
    </main>
  );
}
