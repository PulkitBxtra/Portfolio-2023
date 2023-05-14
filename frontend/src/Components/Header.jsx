import React from "react";
import Hero from "./Hero";

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="flex mx-7 my-5 ">
          <div className="flex flex-col flex-1 cursor-default">
            <h1 class="text-5xl anton ">PULKIT</h1>
            <h1 class="text-xl rock-salt text-emerald-700 ml-3 -mt-4 ">
              Batra
            </h1>
          </div>

          <div>
            <h1 class="text-5xl anton cursor-pointer ">CONTACT</h1>
            <h1 className="text-xl rock-salt text-emerald-700 ml-5 -mt-4 cursor-pointer">
              me
            </h1>
          </div>
        </div>
      </header>


      <Hero></Hero>
    </React.Fragment>
  );
}

export default Header;
