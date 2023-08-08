import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Istanbul() {
  return (
    <main className="PhotoMainCont">
      <div className="PhotoCont">
        <Link className="LinkCont" href="#">
          <div className="CityNameCont">
            <h1 className="CityNames">ISTANBUL</h1>
          </div>
          <Image
            className="Image"
            src="/images/Istanbul/Istanbul2.png"
            unoptimized
            width={300}
            height={300}
          />
        </Link>
      </div>
    </main>
  );
}
