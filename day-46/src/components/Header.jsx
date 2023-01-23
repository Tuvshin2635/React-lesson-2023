import React from "react";

export default function Header(props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        {/* <a className="item active"></a> */}
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <i className="heart icon ">{props.wishList.length}</i>
            <i class="dropdown icon"></i>
            <div class="menu">
              {props.wishList.map((w, index) => {
                return (
                  <div class="item">
                    {w.name}
                    <a>
                      <button
                        class="negative ui button"
                        onClick={() => {
                          //   console.log("remove");
                          //   console.log(w.id);
                          props.setWishList(
                            props.wishList.filter((wish) => wish.id !== w.id) //ustgax
                          );
                        }}
                      ></button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
